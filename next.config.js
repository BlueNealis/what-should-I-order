/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["www.thecocktaildb.com"]
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
