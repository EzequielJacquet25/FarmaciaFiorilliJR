import { isAdmin, period, summaryFor } from "../../../_lib/analytics.js";

export default async function handler(request, response) {
  if (request.method !== "GET" || !isAdmin(request)) return response.status(401).json({ error: "No autorizado" });
  const selected = period(request.query);
  if (!selected) return response.status(400).json({ error: "Período inválido" });
  try { return response.status(200).json(await summaryFor(selected)); }
  catch { return response.status(503).json({ error: "Estadísticas no disponibles" }); }
}
