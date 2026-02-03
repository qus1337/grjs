"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating) setTimeout(() => startAnimation(), duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => setIsAnimating(false)}
    >
      <motion.div
        key={currentWord}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className={cn("inline-block", className)}
      >
        {currentWord.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block">
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={letterIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: letterIndex * 0.05 }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            &nbsp;
          </span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
