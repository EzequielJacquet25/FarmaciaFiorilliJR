-- Analytics interno, anónimo y sin datos personales.
CREATE TABLE IF NOT EXISTS analytics_sessions (
  id BIGSERIAL PRIMARY KEY,
  session_id UUID NOT NULL UNIQUE,
  visitor_id UUID NOT NULL,
  started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_activity_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  ended_at TIMESTAMPTZ,
  landing_page VARCHAR(240),
  exit_page VARCHAR(240),
  source VARCHAR(120),
  referrer VARCHAR(500),
  device_type VARCHAR(16),
  page_view_count INTEGER NOT NULL DEFAULT 0,
  event_count INTEGER NOT NULL DEFAULT 0,
  is_bounce BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS analytics_events (
  id BIGSERIAL PRIMARY KEY,
  event_id UUID NOT NULL UNIQUE,
  event_type VARCHAR(40) NOT NULL,
  visitor_id UUID NOT NULL,
  session_id UUID NOT NULL,
  product_id VARCHAR(160),
  category_id VARCHAR(120),
  page_path VARCHAR(240),
  source VARCHAR(120),
  referrer VARCHAR(500),
  device_type VARCHAR(16),
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  client_timestamp TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS analytics_events_type_created_idx ON analytics_events (event_type, created_at);
CREATE INDEX IF NOT EXISTS analytics_events_session_created_idx ON analytics_events (session_id, created_at);
CREATE INDEX IF NOT EXISTS analytics_events_product_type_created_idx ON analytics_events (product_id, event_type, created_at);
CREATE INDEX IF NOT EXISTS analytics_events_created_idx ON analytics_events (created_at);
CREATE INDEX IF NOT EXISTS analytics_sessions_visitor_started_idx ON analytics_sessions (visitor_id, started_at);

CREATE TABLE IF NOT EXISTS analytics_monthly_reports (
  id BIGSERIAL PRIMARY KEY,
  report_year INTEGER NOT NULL,
  report_month INTEGER NOT NULL CHECK (report_month BETWEEN 1 AND 12),
  period_start DATE NOT NULL,
  period_end DATE NOT NULL,
  recipients JSONB NOT NULL DEFAULT '[]'::jsonb,
  status VARCHAR(16) NOT NULL DEFAULT 'pending',
  attempts INTEGER NOT NULL DEFAULT 0,
  provider_message_id VARCHAR(255),
  generated_at TIMESTAMPTZ,
  sent_at TIMESTAMPTZ,
  failed_at TIMESTAMPTZ,
  error_message VARCHAR(500),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (report_year, report_month)
);
