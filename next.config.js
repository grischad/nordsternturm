const { withFaust, getWpHostname } = require('@faustwp/core');

/*
 *
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['node_modules'],
  },
  images: {
    domains: [getWpHostname()],
  },
  i18n: {
    locales: ['default', 'de', 'en'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  async headers() {
    return [
      {
        source: '/404',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate',
          },
        ],
      },
    ];
  },
});