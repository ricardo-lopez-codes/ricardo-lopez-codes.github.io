"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ShaderAnimation } from "@/components/ui/shader-animation";

const words = [
  "வணக்கம்",      // 1. Tamil (First)
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
  "Guten tag",    // 14. German
  "Hello",        // 15. English (Final ending greeting)
];

const opacityVariant: Variants = {
  initial: {
    opacity: 0,
    scale: 0.98,
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
    transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] },
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
    // Total greeting word duration: 14 transitions * 90ms + 190ms final hold = ~1450ms
    // Plus slideUp curtain of 550ms = exactly 2000ms (2.0s)
    if (index === words.length - 1) {
      const exitTimer = setTimeout(() => {
        setIsLoading(false);
        if (onComplete) onComplete();
      }, 190);
      return () => clearTimeout(exitTimer);
    }

    const timer = setTimeout(
      () => {
        setIndex((prev) => prev + 1);
      },
      index === 0 ? 110 : 90
    );

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
      transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          variants={slideUpVariant}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-white overflow-hidden px-4 pointer-events-auto"
          style={{ height: "100vh" }}
        >
          {/* ───────────────── SHADER ANIMATION ON TOP OF GREETING ───────────────── */}
          <div className="absolute inset-0 z-30 pointer-events-none opacity-100 mix-blend-screen">
            <ShaderAnimation className="w-full h-full" duration={2.0} active={true} />
          </div>

          {dimensions.width > 0 && (
            <>
              {/* Words Container behind shader canvas */}
              <motion.div
                key={index}
                variants={opacityVariant}
                initial="initial"
                animate="enter"
                className="relative inline-flex items-center justify-center font-normal select-none z-10 whitespace-nowrap text-center"
                style={{
                  fontFamily: "'Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: "clamp(1.5rem, 4vw, 4.2rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  textShadow:
                    "0 0 16px rgba(255,255,255,0.4), 0 0 32px rgba(255,255,255,0.2)",
                }}
              >
                {/* Glowing indicator dot */}
                <span
                  className="inline-block rounded-full bg-white flex-shrink-0"
                  style={{
                    width: "clamp(12px, 1.1vw, 16px)",
                    height: "clamp(12px, 1.1vw, 16px)",
                    marginRight: "clamp(14px, 1.4vw, 20px)",
                    boxShadow:
                      "0 0 10px rgba(255,255,255,0.95), 0 0 20px rgba(255,255,255,0.55)",
                  }}
                />
                <span>{words[index]}</span>
              </motion.div>
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
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default GreetingAnimation;
