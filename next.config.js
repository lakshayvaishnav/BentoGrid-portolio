/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "user-images.githubusercontent.com",
      "github.com",
      "github-production-user-asset-6210df.s3.amazonaws.com",
      "giphy.com",
    ],
  },
};

module.exports = nextConfig;
