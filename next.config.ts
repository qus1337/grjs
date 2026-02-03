import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // 这里的 basePath 必须与你的 GitHub 仓库名称一致
  // 如果你的仓库名是 "my-site"，则改为 "/my-site"
  basePath: isProd ? "/grjs" : "",
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
