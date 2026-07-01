/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lingaschool.org' },
    ],
  },
}

module.exports = nextConfig
