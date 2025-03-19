import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: process.env.NODE_ENV !== "production" ? ["next-mdx-remote"] : undefined
};

export default nextConfig;
