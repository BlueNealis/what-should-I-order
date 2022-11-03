/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["www.thecocktaildb.com"]
  }
}

module.exports = nextConfig
