import { Pool } from "pg";

const EVENT_TYPES = new Set([
  "session_start", "session_end", "page_view", "product_impression", "product_view",
  "product_click", "category_view", "filter_applied", "whatsapp_click", "phone_click",
  "email_click", "social_media_click",
]);
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const allowedKeys = new Set(["eventId", "eventType", "visitorId", "sessionId", "pagePath", "productId", "categoryId", "source", "referrer", "deviceType", "metadata", "clientTimestamp"]);
let pool;

export const db = () => {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL no está configurada");
  pool ??= new Pool({ connectionString: process.env.DATABASE_URL, ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : undefined });
  return pool;
};

const text = (value, max) => typeof value === "string" && value.length <= max ? value : null;
const cleanPath = (value) => {
  const path = text(value, 240);
  return path && path.startsWith("/") && !path.startsWith("/admin") ? path : null;
};
const cleanMetadata = (value) => {
  if (!value || typeof value !== "object" || Array.isArray(value) || Object.keys(value).length > 8) return {};
  return Object.fromEntries(Object.entries(value).filter(([, item]) => typeof item === "string" || typeof item === "number" || typeof item === "boolean").map(([key, item]) => [key.slice(0, 40), typeof item === "string" ? item.slice(0, 120) : item]));
};

export const validateEvent = (input) => {
  if (!input || typeof input !== "object" || Object.keys(input).some((key) => !allowedKeys.has(key))) return null;
  if (!EVENT_TYPES.has(input.eventType) || !UUID.test(input.eventId || "") || !UUID.test(input.visitorId || "") || !UUID.test(input.sessionId || "")) return null;
  const deviceType = ["mobile", "tablet", "desktop"].includes(input.deviceType) ? input.deviceType : null;
  return {
    eventId: input.eventId, eventType: input.eventType, visitorId: input.visitorId, sessionId: input.sessionId,
    pagePath: cleanPath(input.pagePath), productId: text(input.productId, 160), categoryId: text(input.categoryId, 120),
    source: text(input.source, 120), referrer: text(input.referrer, 500), deviceType,
    metadata: cleanMetadata(input.metadata), clientTimestamp: text(input.clientTimestamp, 40),
  };
};

export const isAdmin = (request) => request.headers["x-analytics-admin-key"] && request.headers["x-analytics-admin-key"] === process.env.ANALYTICS_ADMIN_KEY;

export const period = (query) => {
  const from = /^\d{4}-\d{2}-\d{2}$/.test(query.from || "") ? query.from : null;
  const to = /^\d{4}-\d{2}-\d{2}$/.test(query.to || "") ? query.to : null;
  if (!from || !to || from > to || (new Date(to) - new Date(from)) > 366 * 86400000) return null;
  return { from, to: `${to}T23:59:59.999Z` };
};

export const summaryFor = async ({ from, to }) => {
  const result = await db().query(`SELECT
    COUNT(DISTINCT session_id)::int AS "totalSessions",
    COUNT(DISTINCT visitor_id)::int AS "uniqueVisitors",
    COUNT(*) FILTER (WHERE event_type = 'page_view')::int AS "pageViews",
    COUNT(*) FILTER (WHERE event_type = 'product_impression')::int AS "productImpressions",
    COUNT(*) FILTER (WHERE event_type = 'product_view')::int AS "productViews",
    COUNT(*) FILTER (WHERE event_type = 'product_click')::int AS "productClicks",
    COUNT(*) FILTER (WHERE event_type IN ('whatsapp_click','phone_click','email_click','social_media_click'))::int AS "contactClicks"
    FROM analytics_events WHERE created_at >= $1 AND created_at <= $2`, [from, to]);
  const sessions = await db().query(`SELECT
    COUNT(*) FILTER (WHERE started_at >= $1 AND started_at <= $2 AND NOT EXISTS (SELECT 1 FROM analytics_events e WHERE e.session_id = analytics_sessions.session_id AND e.event_type NOT IN ('session_start','page_view')))::int AS "bounceSessions",
    COALESCE(AVG(EXTRACT(EPOCH FROM (last_activity_at - started_at))) FILTER (WHERE last_activity_at - started_at < INTERVAL '8 hours'), 0)::int AS "averageSessionDuration"
    FROM analytics_sessions`, [from, to]);
  const firstVisits = await db().query(`SELECT COUNT(*) FILTER (WHERE first_seen >= $1 AND first_seen <= $2)::int AS "newVisitors", COUNT(*) FILTER (WHERE first_seen < $1)::int AS "returningVisitors" FROM (SELECT visitor_id, MIN(created_at) AS first_seen FROM analytics_events GROUP BY visitor_id) visitors`, [from, to]);
  const base = result.rows[0]; const session = sessions.rows[0]; const visitors = firstVisits.rows[0];
  return { ...base, ...visitors, averageSessionDuration: session.averageSessionDuration, bounceRate: base.totalSessions ? Number(((session.bounceSessions / base.totalSessions) * 100).toFixed(1)) : 0 };
};
