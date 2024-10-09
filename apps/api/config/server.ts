export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  url: env('API_URL', 'http://127.0.0.1:1337'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
