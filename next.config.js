/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["overtimecook.com","assets.punchdrink.com","imbibemagazine.com","blog.williams-sonoma.com","cdn.cdkitchen.com","steemitimages.com","www.sousvidetools.com","media.bahamabreeze.com","www.missinformationblog.com","chowhound1.cbsistatic.com","www.liquor.com","makemeacocktail.com","www.barnonedrinks.com","tipsybartender.com","creative-culinary.com","cdn.diffords.com","vangoghvodka.com","i.ytimg.com","ik.imagekit.io","www.thedrinkkings.com","i2.wp.com","district1100.com","www.deliciousmagazine.co.uk","www.crazyforcrust.com","cdn.liquor.com","cdn2.foodviva.com","jbf-media.s3.amazonaws.com","anerdcooks.com","www.3yummytummies.com","passthesushi.com","food.fnr.sndimg.com" ,"mixthatdrink.com","www.mantitlement.com" ,"sweetlifebake.com","3.bp.blogspot.com","betsylife.com","cocktaildudes.com" ,"www.seriouseats.com","pinchandswirl.com","sugarandcharm.com","soufflebombay.com","www.thecocktaildb.com","i.pinimg.com","purewows3.imgix.net","www.thespruceeats.com","upload.wikimedia.org","cdn3.foodviva.com","www.cocktailmocktail.co.uk","encrypted-tbn0.gstatic.com","https://encrypted-tbn0.gstatic.com"]
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
