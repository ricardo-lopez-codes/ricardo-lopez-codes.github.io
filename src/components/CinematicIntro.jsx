"use client";

import { useState, useEffect, useRef } from "react";

export default function CinematicIntro({ onComplete }) {
  const [linesExpanded, setLinesExpanded] = useState(false);
  const [lettersVisible, setLettersVisible] = useState(false);
  const [taglineVisible, setTaglineVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const word1 = "RICARDO";
  const word2 = "LOPEZ";

  // Trigger sequence on mount
  useEffect(() => {
    // 1. Expand top/bottom accent lines
    const lineTimer = setTimeout(() => {
      setLinesExpanded(true);
    }, 150);

    // 2. Animate 3D letters
    const lettersTimer = setTimeout(() => {
      setLettersVisible(true);
    }, 400);

    // 3. Reveal tagline
    const taglineTimer = setTimeout(() => {
      setTaglineVisible(true);
    }, 1000);

    // 4. Progress bar counter (0 to 100)
    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      currentProgress += 1;
      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(progressInterval);
        // Hold at 100% briefly before shutter wipe exit
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800);
        }, 250);
      } else {
        setProgress(currentProgress);
      }
    }, 22); // ~2.2 seconds total

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(lineTimer);
      clearTimeout(lettersTimer);
      clearTimeout(taglineTimer);
      clearInterval(progressInterval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 400);
  };

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden bg-black select-none transition-all duration-800 ${
        isExiting ? "-translate-y-full opacity-90 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
      style={{
        transitionTimingFunction: "cubic-bezier(0.77, 0, 0.175, 1)",
        transitionDuration: "800ms"
      }}
    >
      {/* Ambient background glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(0, 210, 255, 0.08) 0%, rgba(0, 0, 0, 0.95) 70%, #000000 100%)"
        }}
      />

      {/* Subtle scanline texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, #fff, #fff 1px, transparent 1px, transparent 3px)"
        }}
      />

      {/* Top right quick skip button */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 md:top-8 md:right-8 z-30 font-mono text-[10px] md:text-xs tracking-[0.25em] text-white/40 hover:text-cyan-400 transition-colors uppercase cursor-pointer px-3 py-1.5 rounded border border-white/10 hover:border-cyan-400/40 bg-black/40 backdrop-blur-sm"
      >
        SKIP //
      </button>

      {/* Centered Cinematic Stage */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl px-6">
        
        {/* Top Symmetrical Expanding Accent Line */}
        <div 
          className="w-28 sm:w-44 md:w-60 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent mb-6 sm:mb-8 md:mb-10 origin-center transition-transform duration-1000 ease-out"
          style={{
            transform: linesExpanded ? "scaleX(1)" : "scaleX(0)"
          }}
        />

        {/* 3D Perspective Letter Stagger Header */}
        <div 
          className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2 overflow-hidden py-2"
          style={{ perspective: "1200px" }}
        >
          {/* Word 1: RICARDO */}
          <div className="flex items-center">
            {word1.split("").map((char, idx) => (
              <span
                key={`w1-${idx}`}
                className="font-black text-white leading-none inline-block will-change-transform"
                style={{
                  fontFamily: "'Syne', 'Orbitron', -apple-system, sans-serif",
                  fontSize: "clamp(2.5rem, 11vw, 6.5rem)",
                  letterSpacing: "0.06em",
                  transform: lettersVisible
                    ? "translateY(0) rotateX(0deg)"
                    : "translateY(70px) rotateX(75deg)",
                  opacity: lettersVisible ? 1 : 0,
                  transition: "transform 750ms cubic-bezier(0.16, 1, 0.3, 1), opacity 650ms cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${idx * 45}ms`,
                  textShadow: "0 0 35px rgba(0, 210, 255, 0.25)"
                }}
              >
                {char}
              </span>
            ))}
          </div>

          {/* Word 2: LOPEZ */}
          <div className="flex items-center">
            {word2.split("").map((char, idx) => {
              const globalIndex = word1.length + idx;
              return (
                <span
                  key={`w2-${idx}`}
                  className="font-black text-white leading-none inline-block will-change-transform"
                  style={{
                    fontFamily: "'Syne', 'Orbitron', -apple-system, sans-serif",
                    fontSize: "clamp(2.5rem, 11vw, 6.5rem)",
                    letterSpacing: "0.06em",
                    transform: lettersVisible
                      ? "translateY(0) rotateX(0deg)"
                      : "translateY(70px) rotateX(75deg)",
                    opacity: lettersVisible ? 1 : 0,
                    transition: "transform 750ms cubic-bezier(0.16, 1, 0.3, 1), opacity 650ms cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: `${globalIndex * 45}ms`,
                    textShadow: "0 0 35px rgba(0, 210, 255, 0.25)"
                  }}
                >
                  {char}
                </span>
              );
            })}
          </div>
        </div>

        {/* Cinematic Subtitle / Tagline */}
        <p
          className="font-mono text-cyan-400/80 tracking-[0.35em] text-[10px] sm:text-xs md:text-sm mt-5 sm:mt-7 md:mt-8 font-medium uppercase text-center transition-all duration-700 ease-out"
          style={{
            transform: taglineVisible ? "translateY(0)" : "translateY(20px)",
            opacity: taglineVisible ? 1 : 0,
            letterSpacing: "0.3em"
          }}
        >
          BUILDING INTELLIGENT SYSTEMS // AI & IOT
        </p>

        {/* Bottom Symmetrical Expanding Accent Line */}
        <div 
          className="w-28 sm:w-44 md:w-60 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent mt-6 sm:mt-8 md:mt-10 origin-center transition-transform duration-1000 ease-out"
          style={{
            transform: linesExpanded ? "scaleX(1)" : "scaleX(0)"
          }}
        />

      </div>

      {/* Bottom Minimalist Progress Bar & Live Counter */}
      <div className="absolute bottom-10 sm:bottom-14 z-20 flex flex-col items-center gap-3">
        <div className="w-40 sm:w-56 md:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-[#00d2ff] rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <span className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
          [ {progress}% ]
        </span>
      </div>

      {/* Upward shutter curtain element for high-speed transition wipe */}
      <div 
        className={`absolute inset-0 bg-black z-40 transition-transform origin-bottom duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] pointer-events-none ${
          isExiting ? "scale-y-100" : "scale-y-0"
        }`}
      />
    </div>
  );
}
