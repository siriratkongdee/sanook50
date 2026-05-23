import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    // Ensure dynamic routes work on Amplify
    dynamicIO: true,
  },
  // Log environment variables during build
  env: {
    SHOW_DRAFTS: process.env.SHOW_DRAFTS || '',
  },
};

export default nextConfig;
