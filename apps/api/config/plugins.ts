export default () => ({
  seo: {
    enabled: true,
  },
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '1d',
      },
    },
  },
  documentation: {
    config: {
      'x-strapi-config': {
        plugins: ['upload', 'users-permissions'],
      },
    },
  },
});
