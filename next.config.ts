import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/grjs" : "",
  eslint: {
    // 允许生产环境构建即使有 lint 错误
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 允许生产环境构建即使有类型错误
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
