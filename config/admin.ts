export default ({ env }) => ({
  auth: {
    // Fallback admin JWT secret for local development. In production,
    // generate a secure secret and set ADMIN_JWT_SECRET in the environment.
    secret: env('ADMIN_JWT_SECRET', 'dev_admin_jwt_secret_please_change'),
  },
  // For local development provide fallback salts. In production, set the
  // corresponding environment variables to secure, random values.
  apiToken: {
    salt: env('API_TOKEN_SALT', 'dev_api_token_salt_please_change'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'dev_transfer_token_salt_please_change'),
    },
  },
  secrets: {
    // Fallback encryption key for local development. Replace with a secure
    // random value stored as an environment variable in production.
    encryptionKey: env('ENCRYPTION_KEY', 'dev_encryption_key_please_change'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
