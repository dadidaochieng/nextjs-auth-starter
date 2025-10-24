import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  distDir: 'build',
  devIndicators: {
    position: 'bottom-right'
  },
  poweredByHeader: false,
  reactStrictMode: true,
  cacheComponents: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  }
};

export default nextConfig;
