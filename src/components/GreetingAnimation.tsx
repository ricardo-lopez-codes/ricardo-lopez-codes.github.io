"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ShaderAnimation } from "@/components/ui/shader-animation";

const words = [
  "வணக்கம்",      // 1. Tamil (First: 150ms)
  "Bonjour",      // 2. French
  "Ciao",         // 3. Italian
  "Olá",          // 4. Portuguese
  "こんにちは",     // 5. Japanese
  "مرحبا",        // 6. Arabic
  "¿Qué onda?",   // 7. Mexican Spanish
  "Привет",       // 8. Russian
  "Halo",         // 9. Indonesian
  "Merhaba",      // 10. Turkish
  "안녕하세요",    // 11. Korean
  "你好",         // 12. Chinese
  "Hallå",        // 13. Swedish
  "Guten tag",    // 14. German (Intermediate 13 words: 1200ms total, ~92.3ms each)
  "Hello",        // 15. English (Final ending greeting: 200ms hold)
];

const opacityVariant: Variants = {
  initial: {
    opacity: 0,
    scale: 0.96,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.08, ease: "easeOut" },
  },
};

const slideUpVariant: Variants = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] }, // SVG curtain lift: 450ms
  },
};

interface GreetingAnimationProps {
  onComplete?: () => void;
}

export function GreetingAnimation({ onComplete }: GreetingAnimationProps = {}) {
  const [index, setIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // 1. Final word hold: exactly 200ms before curtain triggers
    if (index === words.length - 1) {
      const exitTimer = setTimeout(() => {
        setIsLoading(false);
        if (onComplete) onComplete();
      }, 200);
      return () => clearTimeout(exitTimer);
    }

    // 2. First word hold: 150ms
    // 3. Intermediate words (13 words): 1200ms total (1200 / 13 = 92.3ms)
    const stepDuration = index === 0 ? 150 : 1200 / 13;

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, stepDuration);

    return () => clearTimeout(timer);
  }, [index, onComplete]);

  const initialPath = `M0 0 L${dimensions.width} 0 L${dimensions.width} ${
    dimensions.height
  } Q${dimensions.width / 2} ${dimensions.height + 300} 0 ${
    dimensions.height
  } L0 0`;

  const targetPath = `M0 0 L${dimensions.width} 0 L${dimensions.width} ${
    dimensions.height
  } Q${dimensions.width / 2} ${dimensions.height} 0 ${dimensions.height} L0 0`;

  const curveVariant: Variants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] }, // SVG curtain lift: 450ms
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] }, // SVG curtain lift: 450ms
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          variants={slideUpVariant}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white overflow-hidden px-4 pointer-events-auto"
          style={{ height: "100vh" }}
        >
          {/* ───────────────── 1. GREETING WORDS & DOT (PROMINENT FOREGROUND LAYER) ───────────────── */}
          {dimensions.width > 0 && (
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
          )}

          {/* ───────────────── 2. SHADER ANIMATION: INCREASED DURATION TO EXACTLY 2500ms (2.5s) ───────────────── */}
          <div className="absolute inset-0 z-30 pointer-events-none opacity-100 mix-blend-screen">
            <ShaderAnimation className="w-full h-full" duration={2.5} active={true} />
          </div>

          {/* ───────────────── 3. SVG CURVED MASK CURTAIN ───────────────── */}
          {dimensions.width > 0 && (
            <svg
              className="absolute top-0 left-0 w-full pointer-events-none z-20"
              style={{ height: "calc(100% + 300px)" }}
            >
              <motion.path
                variants={curveVariant}
                initial="initial"
                exit="exit"
                fill="#000000"
              />
            </svg>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default GreetingAnimation;
