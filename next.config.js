/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // TODO: Remove once Strapi CMS fixes their documentation generation
    ignoreDuringBuilds: true,
  },
  typescript: {
    // TODO: Remove once Strapi CMS fixes their documentation generation
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig