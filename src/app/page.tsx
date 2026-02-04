"use client";

import { useTheme } from "@/components/theme/theme-provider";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { MovingBorder } from "@/components/ui/moving-border";
import { Meteors } from "@/components/ui/meteors";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Link from "next/link";
import { motion } from "motion/react";

export default function PersonalIntroPage() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className="min-h-screen w-full flex flex-col bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden transition-colors duration-300">
      {/* 简单的模式切换按钮 */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-[var(--card-bg)] border border-[var(--border)] text-[var(--primary)] hover:scale-110 transition-all shadow-lg backdrop-blur-md"
        title={isDark ? "切换到浅色模式 (蓝白)" : "切换到深色模式 (原版)"}
      >
        {isDark ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
        )}
      </button>

      {/* 非对称 Hero：左偏移，不用三卡片 */}
      <section className="relative flex min-h-[75vh] w-full rounded-md py-16 md:py-20 lg:py-24 px-6 lg:px-12 overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-[15%] md:-top-20" fill="var(--spotlight-color)" />
        <Meteors number={10} className="opacity-20 dark:opacity-50" />
        <div className="relative z-10 w-full max-w-5xl flex flex-col pl-0 md:pl-[8%] lg:pl-[12%] text-left">
          <motion.p
            className="text-[var(--primary)] font-medium text-sm uppercase tracking-widest mb-4"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            hey —
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            我是 <span className="text-[var(--primary)]">qus</span>
          </motion.h1>
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-[var(--accent)] text-lg">喜欢</span>
            <FlipWords
              words={["打羽毛球", "无畏契约", "蔚蓝档案"]}
              duration={2800}
              className="text-xl md:text-2xl font-medium text-[var(--secondary)]"
            />
          </div>
          <TextGenerateEffect
            words="羽毛球场上挥拍，游戏里打枪和养学生。偶尔写写代码。"
            className="text-base md:text-lg text-[var(--accent)] max-w-md"
            duration={0.7}
            filter={true}
          />
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <MovingBorder
                as={Link}
                href="#about"
                containerClassName="rounded-full"
                className="bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)]"
              >
                看看我
              </MovingBorder>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <MovingBorder
                as={Link}
                href="#contact"
                containerClassName="rounded-full"
                borderClassName="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
                className="bg-[var(--primary)] text-[var(--background)]"
              >
                联系
              </MovingBorder>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 不对称内容区：非等宽栏 */}
      <AuroraBackground className="flex-1 border-t border-[var(--border)]" showRadialGradient={true}>
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-0 border-t border-[var(--border)]">
            <motion.section
              id="about"
              className="py-16 lg:py-24 pr-0 lg:pr-16 lg:border-r border-[var(--border)]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h3 className="text-xl font-semibold mb-6 text-[var(--primary)]">关于</h3>
              <p className="text-[var(--accent)] leading-relaxed">
                qus。羽毛球打得还行，游戏主要玩无畏契约和蔚蓝档案。写 HTML、C++，喜欢把想法敲成代码。
              </p>
            </motion.section>

            <motion.section
              className="py-16 lg:py-24 pl-0 lg:pl-16"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-8 text-[var(--primary)]">兴趣</h3>
              <div className="flex flex-wrap gap-3">
                {["羽毛球", "无畏契约", "蔚蓝档案", "HTML", "C++"].map((item, i) => (
                  <motion.span
                    key={item}
                    className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] px-4 py-2 text-[var(--accent)] text-sm hover:border-[var(--primary)] hover:bg-[var(--background)] transition-colors"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.section>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-0 border-t border-[var(--border)]">
            <motion.section
              id="contact"
              className="py-16 lg:py-24 pr-0 lg:pr-16 lg:border-r border-[var(--border)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "circOut" }}
            >
              <h3 className="text-xl font-semibold mb-6 text-[var(--primary)]">联系</h3>
              <p className="text-[var(--accent)] mb-6 max-w-md">有想法或合作可以发邮件或到 B 站找我。</p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <MovingBorder
                    as="a"
                    href="mailto:your@email.com"
                    containerClassName="rounded-full"
                    borderClassName="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
                    className="bg-[var(--primary)] text-[var(--background)]"
                  >
                    发邮件
                  </MovingBorder>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <MovingBorder
                    as="a"
                    href="https://space.bilibili.com/1598483733"
                    target="_blank"
                    rel="noopener noreferrer"
                    containerClassName="rounded-full"
                    className="bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)]"
                  >
                    B站
                  </MovingBorder>
                </motion.div>
              </div>
            </motion.section>

            <motion.section
              className="py-16 lg:py-24 pl-0 lg:pl-16 flex flex-col justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-[var(--accent)] text-sm opacity-60">qus · 个人介绍</p>
              <p className="text-[var(--accent)] text-xs mt-1 opacity-50">羽毛球 · 无畏契约 · 蔚蓝档案</p>
            </motion.section>
          </div>
        </div>
      </AuroraBackground>

      <footer className="py-6 px-6 border-t border-[var(--border)] text-center text-[var(--accent)] text-xs opacity-50">
        qus 个人介绍页 · 使用 Aceternity UI
      </footer>
    </div>
  );
}
