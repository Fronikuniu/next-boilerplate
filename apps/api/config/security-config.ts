export const securityConfig = {
  contentSecurityPolicy: {
    useDefaults: true,
    directives: {
      'frame-src': [
        "'self'",
        'youtube.com',
        'www.youtube.com',
        'vimeo.com',
        '*.vimeo.com',
        'facebook.com',
        'www.facebook.com',
      ],
      'connect-src': [
        "'self'",
        '*.strapi.io',
        /* app domain */
      ],
      'img-src': ["'self'", 'data:' /* app domain */],
      'style-src': ["'self'", "'unsafe-inline'"],
      'media-src': ["'self'"],
      'script-src': ["'self'", 'https://cdn.ckeditor.com' /* app domain */],
      'font-src': ["'self'"],
      'default-src': ["'self'"],
      upgradeInsecureRequests: null,
    },
  },
};
