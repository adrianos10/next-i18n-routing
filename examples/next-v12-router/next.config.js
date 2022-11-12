// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withI18nRouting } = require('next-i18n-routing');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: { locales: ['en', 'de', 'fr'], defaultLocale: 'en' },
};

module.exports = withI18nRouting(nextConfig);
