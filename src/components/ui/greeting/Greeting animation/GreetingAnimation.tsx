"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

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
    transition: { duration: 0.16, ease: "easeOut" },
  },
};

const slideUpVariant: Variants = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.85, ease: "easeInOut", delay: 0.25 },
  },
};

export function GreetingAnimation() {
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
    if (index === words.length - 1) {
      // Hold on final "Hello" slightly before curtain lifts
      const exitTimer = setTimeout(() => {
        setIsLoading(false);
      }, 550);
      return () => clearTimeout(exitTimer);
    }

    const timer = setTimeout(
      () => {
        setIndex((prev) => prev + 1);
      },
      index === 0 ? 800 : 155
    );

    return () => clearTimeout(timer);
  }, [index]);

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
      transition: { duration: 0.75, ease: "easeInOut" },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.75, ease: "easeInOut", delay: 0.25 },
    },
  };

  const replay = () => {
    setIndex(0);
    setIsLoading(true);
  };

  return (
    <div
      className="relative w-full min-h-screen bg-[#141517] text-white flex flex-col items-center justify-center overflow-hidden"
      style={{
        fontFamily: "'Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Signature Animated Preloader Curtain */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            variants={slideUpVariant}
            initial="initial"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#141517] text-white overflow-hidden px-4"
            style={{ height: "100vh" }}
          >
            {dimensions.width > 0 && (
              <>
                <motion.div
                  key={index}
                  variants={opacityVariant}
                  initial="initial"
                  animate="enter"
                  className="inline-flex items-center justify-center font-normal select-none z-10 whitespace-nowrap text-center"
                  style={{
                    fontFamily: "'Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    fontSize: "clamp(1.25rem, 3.75vw, 4rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    textShadow:
                      "0 0 16px rgba(255,255,255,0.4), 0 0 32px rgba(255,255,255,0.2)",
                  }}
                >
                  {/* Enlarged glowing indicator dot with clean proportional breathing space */}
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
                  className="absolute top-0 left-0 w-full pointer-events-none"
                  style={{ height: "calc(100% + 300px)" }}
                >
                  <motion.path
                    variants={curveVariant}
                    initial="initial"
                    exit="exit"
                    fill="#141517"
                  />
                </svg>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Clean Page Content revealed after preloader */}
      <div className="flex flex-col items-center justify-center text-center px-6 max-w-2xl">
        <span className="text-xs uppercase tracking-widest text-[#999D9E] mb-5 font-medium">
          Dennis Snellenberg Style
        </span>
        <h1 className="text-5xl sm:text-7xl font-normal tracking-tight mb-6">
          Greeting Animation
        </h1>
        <p className="text-[#999D9E] text-base sm:text-xl leading-relaxed mb-10 font-light">
          The multilingual greeting sequence cycles across languages, ending on Hello,
          followed by the signature SVG quadratic curve curtain lifting smoothly.
        </p>
        <button
          onClick={replay}
          className="group relative inline-flex items-center justify-center px-9 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 font-medium text-base cursor-pointer tracking-tight"
        >
          <span>Replay Animation</span>
        </button>
      </div>
    </div>
  );
}

export default GreetingAnimation;
