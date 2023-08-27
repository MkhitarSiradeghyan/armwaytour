const nextTranslate  = require('next-translate-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/slider',
        permanent: true,
      }
    ]
  }
}
module.exports = nextTranslate(nextConfig)
