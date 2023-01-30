/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["mine-too-app-public.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
