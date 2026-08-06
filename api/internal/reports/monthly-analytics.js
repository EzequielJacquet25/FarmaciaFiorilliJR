import PDFDocument from "pdfkit";
import { isAdmin, db, summaryFor } from "../../_lib/analytics.js";
import { sendEmail } from "../../_lib/email.js";

const previousMonth = () => { const now = new Date(); return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 1, 1)); };
const pdf = (title, metrics) => new Promise((resolve) => { const doc = new PDFDocument({ margin: 48 }); const chunks = []; doc.on("data", (chunk) => chunks.push(chunk)); doc.on("end", () => resolve(Buffer.concat(chunks))); doc.fontSize(22).text(title); doc.moveDown(); Object.entries(metrics).forEach(([label, value]) => doc.fontSize(12).text(`${label}: ${value}`)); doc.end(); });

export default async function handler(request, response) {
  const cronAuthorized = request.headers.authorization === `Bearer ${process.env.CRON_SECRET}`;
  if (request.method !== "POST" || (!isAdmin(request) && !cronAuthorized)) return response.status(401).json({ error: "No autorizado" });
  const date = previousMonth(); const year = Number(request.body?.year) || date.getUTCFullYear(); const month = Number(request.body?.month) || date.getUTCMonth() + 1;
  if (month < 1 || month > 12 || new Date(Date.UTC(year, month, 1)) > new Date()) return response.status(400).json({ error: "Mes inválido" });
  const from = `${year}-${String(month).padStart(2, "0")}-01`; const to = new Date(Date.UTC(year, month, 0)).toISOString().slice(0, 10);
  const recipients = (process.env.MONTHLY_REPORT_RECIPIENTS || "").split(",").map((email) => email.trim()).filter(Boolean);
  if (!recipients.length) return response.status(400).json({ error: "No hay destinatarios configurados" });
  try {
    const report = await db().query("INSERT INTO analytics_monthly_reports (report_year,report_month,period_start,period_end,recipients,status,attempts) VALUES ($1,$2,$3,$4,$5,'generating',1) ON CONFLICT (report_year,report_month) DO NOTHING RETURNING id", [year, month, from, to, JSON.stringify(recipients)]);
    if (!report.rowCount && !request.body?.force) return response.status(409).json({ error: "El informe ya fue generado" });
    const metrics = await summaryFor({ from, to: `${to}T23:59:59.999Z` }); const title = `Informe de estadísticas · ${from} a ${to}`; const attachment = await pdf(title, metrics);
    const message = await sendEmail({ to: recipients.join(","), subject: title, html: `<h1>${title}</h1><p>Visitantes únicos: <strong>${metrics.uniqueVisitors}</strong></p><p>Sesiones: <strong>${metrics.totalSessions}</strong></p><p>Páginas vistas: <strong>${metrics.pageViews}</strong></p>`, attachments: [{ filename: `informe-estadisticas-${year}-${String(month).padStart(2, "0")}.pdf`, content: attachment }] });
    await db().query("UPDATE analytics_monthly_reports SET status='sent', sent_at=NOW(), generated_at=NOW(), provider_message_id=$3 WHERE report_year=$1 AND report_month=$2", [year, month, message.messageId]);
    return response.status(200).json({ success: true });
  } catch (error) { await db().query("UPDATE analytics_monthly_reports SET status='failed', failed_at=NOW(), error_message=$3 WHERE report_year=$1 AND report_month=$2", [year, month, String(error.message).slice(0, 500)]).catch(() => {}); return response.status(503).json({ error: "No se pudo enviar el informe" }); }
}
