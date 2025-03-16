import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  // basePath: isProduction ? "/web" : "",
  // output: "export",
  // distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
