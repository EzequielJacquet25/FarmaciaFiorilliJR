const STORAGE = "ffjr-analytics-consent";
const VISITOR = "ffjr-visitor-id";
const SESSION = "ffjr-session";
const SESSION_ACTIVITY = "ffjr-session-activity";
const SESSION_TIMEOUT = 30 * 60 * 1000;

const uuid = () => crypto.randomUUID();
const deviceType = () => window.matchMedia("(max-width: 767px)").matches ? "mobile" : window.matchMedia("(max-width: 1099px)").matches ? "tablet" : "desktop";
const sanitizePath = (path = window.location.pathname) => path.startsWith("/admin") ? null : path.split("?")[0].slice(0, 240);
const source = () => {
  try { return new URL(document.referrer).hostname.slice(0, 120); } catch { return null; }
};
const storage = (type) => {
  try { return window[type]; } catch { return null; }
};
const hasConsent = () => storage("localStorage")?.getItem(STORAGE) === "accepted";
const session = () => {
  const sessionStore = storage("sessionStorage");
  if (!sessionStore) return null;
  const now = Date.now();
  const last = Number(sessionStore.getItem(SESSION_ACTIVITY));
  let id = sessionStore.getItem(SESSION);
  if (!id || !last || now - last > SESSION_TIMEOUT) { id = uuid(); sessionStore.setItem(SESSION, id); }
  sessionStore.setItem(SESSION_ACTIVITY, String(now));
  return id;
};

export const setAnalyticsConsent = (accepted) => {
  const localStore = storage("localStorage");
  const sessionStore = storage("sessionStorage");
  if (!localStore) return;
  if (accepted) localStore.setItem(STORAGE, "accepted");
  else { localStore.removeItem(STORAGE); localStore.removeItem(VISITOR); sessionStore?.removeItem(SESSION); }
};
export const analyticsConsent = hasConsent;

export const trackEvent = (eventType, data = {}) => {
  if (!hasConsent() || !sanitizePath()) return;
  const localStore = storage("localStorage");
  const sessionId = session();
  if (!localStore || !sessionId) return;
  let visitorId = localStore.getItem(VISITOR);
  if (!visitorId) { visitorId = uuid(); localStore.setItem(VISITOR, visitorId); }
  const payload = JSON.stringify({ eventId: uuid(), eventType, visitorId, sessionId, pagePath: sanitizePath(), source: source(), referrer: document.referrer.slice(0, 500) || null, deviceType: deviceType(), clientTimestamp: new Date().toISOString(), ...data });
  try {
    if (navigator.sendBeacon) navigator.sendBeacon("/api/analytics/events", new Blob([payload], { type: "application/json" }));
    else fetch("/api/analytics/events", { method: "POST", headers: { "Content-Type": "application/json" }, body: payload, keepalive: true }).catch(() => {});
  } catch { /* Analytics nunca interrumpe la navegación. */ }
};

export const initializeAnalytics = () => {
  if (!hasConsent()) return;
  const isNewSession = !storage("sessionStorage")?.getItem(SESSION);
  session();
  if (isNewSession) trackEvent("session_start");
};
export const trackPageView = (path) => trackEvent("page_view", { pagePath: sanitizePath(path) });
export const trackProductView = (product) => trackEvent("product_view", { productId: product.nombre, categoryId: product.categoria });
export const trackProductClick = (product) => trackEvent("product_click", { productId: product.nombre, categoryId: product.categoria });
export const trackCategoryView = (category) => trackEvent("category_view", { categoryId: category });
export const trackContactClick = (type) => trackEvent(type);
