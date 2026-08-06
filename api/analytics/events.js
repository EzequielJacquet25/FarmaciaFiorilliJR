import { db, validateEvent } from "../_lib/analytics.js";

export default async function handler(request, response) {
  if (request.method !== "POST") return response.status(405).json({ success: false });
  const event = validateEvent(request.body);
  if (!event) return response.status(400).json({ success: false });
  try {
    const client = await db().connect();
    try {
      await client.query("BEGIN");
      const inserted = await client.query(`INSERT INTO analytics_events (event_id,event_type,visitor_id,session_id,product_id,category_id,page_path,source,referrer,device_type,metadata,client_timestamp) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) ON CONFLICT (event_id) DO NOTHING RETURNING id`, [event.eventId,event.eventType,event.visitorId,event.sessionId,event.productId,event.categoryId,event.pagePath,event.source,event.referrer,event.deviceType,event.metadata,event.clientTimestamp]);
      if (inserted.rowCount) await client.query(`INSERT INTO analytics_sessions (session_id,visitor_id,landing_page,exit_page,source,referrer,device_type,page_view_count,event_count,is_bounce) VALUES ($1,$2,$3,$3,$4,$5,$6,$7,1,$8) ON CONFLICT (session_id) DO UPDATE SET last_activity_at=NOW(), exit_page=EXCLUDED.exit_page, page_view_count=analytics_sessions.page_view_count + EXCLUDED.page_view_count, event_count=analytics_sessions.event_count + 1, is_bounce=analytics_sessions.is_bounce AND EXCLUDED.is_bounce, updated_at=NOW()`, [event.sessionId,event.visitorId,event.pagePath,event.source,event.referrer,event.deviceType,event.eventType === "page_view" ? 1 : 0,event.eventType === "page_view"]);
      await client.query("COMMIT");
    } catch (error) { await client.query("ROLLBACK"); throw error; } finally { client.release(); }
    return response.status(202).json({ success: true });
  } catch { return response.status(503).json({ success: false }); }
}
