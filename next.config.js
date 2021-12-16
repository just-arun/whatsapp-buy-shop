/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  images: {
    path: 'https://dummyimage.com',
  },
  env: {
    NAME: process.env.NAME,
    MOBILE_NO: process.env.MOBILE_NO,
    PRODUCT_URL: process.env.PRODUCT_URL,
    CONTACT_URL: process.env.CONTACT_URL,
  }
}