import type { NextConfig } from "next";

// const isProduction = process.env.NODE_ENV = "production";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/web",
  output: "export",
  distDir: "build",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
