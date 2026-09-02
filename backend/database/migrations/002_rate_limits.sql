CREATE TABLE IF NOT EXISTS website_rate_limits (
  bucket_key   CHAR(64) PRIMARY KEY,
  window_start BIGINT NOT NULL,
  hits         INT NOT NULL DEFAULT 1,
  INDEX idx_rate_limit_window (window_start)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
