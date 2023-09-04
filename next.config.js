/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  skipTrailingSlashRedirect: true,
  distDir: "dist",
  images: { unoptimized: true },
}

module.exports = nextConfig
