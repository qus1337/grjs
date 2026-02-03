"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { MovingBorder } from "@/components/ui/moving-border";
import { Meteors } from "@/components/ui/meteors";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Link from "next/link";
import { motion } from "motion/react";

export default function PersonalIntroPage() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#0c0a09] text-stone-100 overflow-x-hidden">
      {/* 非对称 Hero：左偏移，不用三卡片 */}
      <section className="relative flex min-h-[75vh] w-full rounded-md py-16 md:py-20 lg:py-24 px-6 lg:px-12 overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-[15%] md:-top-20" fill="rgb(251 191 36)" />
        <Meteors number={10} className="opacity-50" />
        <div className="relative z-10 w-full max-w-5xl flex flex-col pl-0 md:pl-[8%] lg:pl-[12%] text-left">
          <motion.p
            className="text-amber-400/90 text-sm uppercase tracking-widest mb-4"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            hey —
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-100 mb-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            我是 <span className="text-amber-400">qus</span>
          </motion.h1>
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-stone-400 text-lg">喜欢</span>
            <FlipWords
              words={["打羽毛球", "无畏契约", "蔚蓝档案"]}
              duration={2800}
              className="text-xl md:text-2xl font-medium text-teal-300"
            />
          </div>
          <TextGenerateEffect
            words="羽毛球场上挥拍，游戏里打枪和养学生。偶尔写写代码。"
            className="text-base md:text-lg text-stone-400 max-w-md"
            duration={0.7}
            filter={true}
          />
          <div className="mt-10 flex flex-wrap gap-4">
            <MovingBorder
              as={Link}
              href="#about"
              containerClassName="rounded-full"
              className="bg-stone-900/80 border border-stone-700 text-stone-200"
            >
              看看我
            </MovingBorder>
            <MovingBorder
              as={Link}
              href="#contact"
              containerClassName="rounded-full"
              borderClassName="bg-gradient-to-r from-amber-500 to-teal-500"
              className="bg-stone-900 text-amber-50"
            >
              联系
            </MovingBorder>
          </div>
        </div>
      </section>

      {/* 不对称内容区：非等宽栏 */}
      <AuroraBackground className="flex-1 border-t border-stone-800/50" showRadialGradient={true}>
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-0 border-t border-stone-800/50">
            <motion.section
              id="about"
              className="py-16 lg:py-24 pr-0 lg:pr-16 lg:border-r border-stone-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-amber-400/90">关于</h3>
              <p className="text-stone-400 leading-relaxed">
                qus。羽毛球打得还行，游戏主要玩无畏契约和蔚蓝档案。写 HTML、C++，喜欢把想法敲成代码。
              </p>
            </motion.section>

            <motion.section
              className="py-16 lg:py-24 pl-0 lg:pl-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-8 text-amber-400/90">兴趣</h3>
              <div className="flex flex-wrap gap-3">
                {["羽毛球", "无畏契约", "蔚蓝档案", "HTML", "C++"].map((item, i) => (
                  <motion.span
                    key={item}
                    className="rounded-lg border border-stone-700/80 bg-stone-900/40 px-4 py-2 text-stone-300 text-sm hover:border-amber-500/40 hover:bg-stone-800/60 transition-colors"
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

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-0 border-t border-stone-800/50">
            <motion.section
              id="contact"
              className="py-16 lg:py-24 pr-0 lg:pr-16 lg:border-r border-stone-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-amber-400/90">联系</h3>
              <p className="text-stone-400 mb-6 max-w-md">有想法或合作可以发邮件或到 B 站找我。</p>
              <div className="flex flex-wrap gap-4">
                <MovingBorder
                  as="a"
                  href="mailto:your@email.com"
                  containerClassName="rounded-full"
                  borderClassName="bg-gradient-to-r from-amber-500 to-teal-500"
                  className="bg-stone-900 text-amber-50"
                >
                  发邮件
                </MovingBorder>
                <MovingBorder
                  as="a"
                  href="https://space.bilibili.com/1598483733"
                  target="_blank"
                  rel="noopener noreferrer"
                  containerClassName="rounded-full"
                  className="bg-stone-900/80 border border-stone-700 text-stone-200"
                >
                  B站
                </MovingBorder>
              </div>
            </motion.section>

            <motion.section
              className="py-16 lg:py-24 pl-0 lg:pl-16 flex flex-col justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-stone-500 text-sm">qus · 个人介绍</p>
              <p className="text-stone-600 text-xs mt-1">羽毛球 · 无畏契约 · 蔚蓝档案</p>
            </motion.section>
          </div>
        </div>
      </AuroraBackground>

      <footer className="py-6 px-6 border-t border-stone-800/50 text-center text-stone-600 text-xs">
        qus 个人介绍页 · 使用 Aceternity UI
      </footer>
    </div>
  );
}
