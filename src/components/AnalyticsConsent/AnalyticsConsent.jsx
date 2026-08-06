import { useState } from "react";
import { analyticsConsent, setAnalyticsConsent } from "../../services/analyticsService";
import "./AnalyticsConsent.css";

export default function AnalyticsConsent() {
  const [visible, setVisible] = useState(() => !analyticsConsent());
  if (!visible) return null;
  const decide = (accepted) => { setAnalyticsConsent(accepted); setVisible(false); };
  return <aside className="analytics-consent" role="dialog" aria-label="Preferencias de estadísticas"><p>Usamos estadísticas anónimas para mejorar el sitio. No registramos datos personales.</p><div><button type="button" onClick={() => decide(false)}>Rechazar</button><button type="button" onClick={() => decide(true)}>Aceptar</button></div></aside>;
}
