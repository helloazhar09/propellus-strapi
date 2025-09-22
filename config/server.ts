export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // Use APP_KEYS from environment or fall back to a predictable pair for
    // local development. IMPORTANT: replace with strong, unique keys in
    // production via the APP_KEYS env var (comma-separated values).
    keys: env.array('APP_KEYS', ['devKey1', 'devKey2']),
  },
});
