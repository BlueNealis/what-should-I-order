/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["vangoghvodka.com","i.ytimg.com","ik.imagekit.io","www.thedrinkkings.com","i2.wp.com","district1100.com","www.thecocktaildb.com","i.pinimg.com","purewows3.imgix.net","www.thespruceeats.com","upload.wikimedia.org","cdn3.foodviva.com","www.cocktailmocktail.co.uk","encrypted-tbn0.gstatic.com","https://encrypted-tbn0.gstatic.com"]
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
