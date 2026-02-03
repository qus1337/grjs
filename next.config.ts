import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // 使用自定义域名后，网站部署在根目录，basePath 必须为空
  basePath: "", 
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
