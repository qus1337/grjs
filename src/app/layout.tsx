import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "qus | 个人介绍",
  description: "qus 的个人介绍页 - 羽毛球 · 无畏契约 · 蔚蓝档案",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
