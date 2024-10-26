export const EnvConfig = {
  server: {
    port: Number.parseInt(process.env.PORT, 10) || 8080,
    environment: process.env.ENV || "PROD",
  },
  database: {
    url: process.env.DB_URL,
  },
};
