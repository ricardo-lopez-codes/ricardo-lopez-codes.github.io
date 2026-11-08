"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ShaderAnimation } from "@/components/ui/shader-animation";

// Exactly 10 languages: Starting with Tamil, concluding on English
const words = [
  "வணக்கம்",      // 1. Tamil (First: 100ms)
  "Bonjour",      // 2. French
  "Ciao",         // 3. Italian
  "Olá",          // 4. Portuguese
  "こんにちは",     // 5. Japanese
  "مرحبا",        // 6. Arabic
  "¿Qué onda?",   // 7. Mexican Spanish
  "안녕하세요",    // 8. Korean
  "Guten tag",    // 9. German (All other 8 intermediate words within 500ms total, 62.5ms each)
  "Hello",        // 10. English (Last word: 150ms hold)
];

const opacityVariant: Variants = {
  initial: {
    opacity: 0,
    scale: 0.96,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.05, ease: "easeOut" },
  },
};

const fadeOutVariant: Variants = {
  initial: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.35, ease: "easeInOut" },
  },
};

interface GreetingAnimationProps {
  onComplete?: () => void;
}

export function GreetingAnimation({ onComplete }: GreetingAnimationProps = {}) {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Last word hold: exactly 150ms
    if (index === words.length - 1) {
      const exitTimer = setTimeout(() => {
        setIsLoading(false);
        if (onComplete) onComplete();
      }, 150);
      return () => clearTimeout(exitTimer);
    }

    // 2. First word: 100ms
    // 3. All other 8 intermediate words within 500ms total (500 / 8 = 62.5ms each)
    const stepDuration = index === 0 ? 100 : 500 / (words.length - 2);

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, stepDuration);

    return () => clearTimeout(timer);
  }, [index, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          variants={fadeOutVariant}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white overflow-hidden px-4 pointer-events-auto"
          style={{ height: "100vh" }}
        >
          {/* ───────────────── 1. GREETING WORDS & DOT (FAST-PACED FOREGROUND LAYER) ───────────────── */}
          <motion.div
            key={index}
            variants={opacityVariant}
            initial="initial"
            animate="enter"
            className="relative inline-flex items-center justify-center font-normal select-none z-40 whitespace-nowrap text-center"
            style={{
              fontFamily: "'Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              textShadow:
                "0 0 20px rgba(255,255,255,0.9), 0 0 40px rgba(255,255,255,0.5), 0 0 80px rgba(34,211,238,0.4)",
            }}
          >
            {/* Glowing indicator dot */}
            <span
              className="inline-block rounded-full bg-white flex-shrink-0"
              style={{
                width: "clamp(12px, 1.2vw, 18px)",
                height: "clamp(12px, 1.2vw, 18px)",
                marginRight: "clamp(16px, 1.6vw, 24px)",
                boxShadow:
                  "0 0 12px #ffffff, 0 0 24px rgba(255,255,255,0.9), 0 0 40px rgba(34,211,238,0.8)",
              }}
            />
            <span>{words[index]}</span>
          </motion.div>

          {/* ───────────────── 2. SHADER ANIMATION: TIME PRESERVED AT 2.388s ───────────────── */}
          <div className="absolute inset-0 z-30 pointer-events-none opacity-100 mix-blend-screen">
            <ShaderAnimation className="w-full h-full" duration={2.388} active={true} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default GreetingAnimation;
