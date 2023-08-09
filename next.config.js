/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  trailingSlash: true,
  output: "export",
};

module.exports = nextConfig;
