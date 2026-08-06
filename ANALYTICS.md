# Estadísticas internas

El sistema registra solo eventos propios y anónimos. No integra Google Analytics, Meta Pixel ni servicios de seguimiento.

## Privacidad

Antes de aceptar el banner no se crea un identificador persistente ni se envían eventos. Tras aceptar, el navegador crea UUID aleatorios para visitante y sesión; no se almacenan IP, nombre, correo, teléfono, contenido de formularios, tokens ni fingerprinting.

Una sesión vence tras 30 minutos de inactividad. Los eventos se guardan en `analytics_events` y las sesiones en `analytics_sessions`. La migración está en `db/migrations/001_analytics.sql` y debe ejecutarse una vez contra la base PostgreSQL.

## Configuración

Copiar `.env.example` como variables de entorno en Vercel. Crear `RESEND_API_KEY` en Resend. Para pruebas puede usarse `onboarding@resend.dev`; para enviar al cliente se debe verificar un dominio y usar una dirección de ese dominio como `EMAIL_FROM`.

## Endpoints

- `POST /api/analytics/events`: recepción pública y validada de eventos.
- `GET /api/admin/analytics/summary?from=YYYY-MM-DD&to=YYYY-MM-DD`: resumen protegido con `x-analytics-admin-key`.
- `POST /api/internal/reports/monthly-analytics`: informe mensual protegido por `x-analytics-admin-key` o `Authorization: Bearer CRON_SECRET`.

Vercel ejecuta el informe el día 1 de cada mes a las 12:00 UTC, equivalentes a las 09:00 en `America/Argentina/Buenos_Aires`.
