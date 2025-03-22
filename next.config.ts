import type { NextConfig } from "next";

const imageDomains = process.env.NEXT_PUBLIC_IMAGE_DOMAINS
  ? process.env.NEXT_PUBLIC_IMAGE_DOMAINS.split(",") // Split the comma-separated domains into an array
  : [];

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: process.env.NODE_ENV !== "production" ? ["next-mdx-remote"] : undefined,
  images: {
    domains: imageDomains, // Use the dynamically loaded domains
  },
};

export default nextConfig;
