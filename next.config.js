/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["mine-too-app-public.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
