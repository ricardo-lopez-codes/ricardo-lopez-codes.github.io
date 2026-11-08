"use client";

import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { GreetingAnimation } from "@/components/GreetingAnimation";

export default function CinematicHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const engineeringDomains = [
    "Embedded Systems",
    "IoT Architectures",
    "VLSI Design",
    "Robotics",
    "Computer Vision",
    "Applied AI"
  ];

  return (
    <header 
      id="hero"
      className="relative w-full h-[100dvh] min-h-[680px] flex flex-col justify-between items-center overflow-hidden bg-black select-none text-white"
    >
      {/* ───────────────── 1. GREETING ANIMATION AS FULL HERO INTRO ───────────────── */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <GreetingAnimation />
      </div>

      {/* ───────────────── 2. SHADER ANIMATION: DIRECTLY ON TOP OF GREETING ANIMATION (2.0s) ───────────────── */}
      <div className="absolute inset-0 z-30 pointer-events-none opacity-100 mix-blend-screen">
        <ShaderAnimation className="w-full h-full" duration={2.0} active={true} />
      </div>

      {/* ───────────────── TOP HUD / STATUS META BAR (z-20) ───────────────── */}
      <div 
        className={`w-full max-w-7xl px-6 md:px-12 pt-6 md:pt-8 flex items-center justify-between z-20 transition-all duration-700 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        {/* Left: Name & Location metadata */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-white uppercase drop-shadow">
            RICARDO LOPEZ
          </span>
          <span className="text-zinc-500 font-mono">//</span>
          <span className="font-mono text-[10px] sm:text-xs text-zinc-300 tracking-wider uppercase">
            CHENNAI, IN
          </span>
        </div>

        {/* Right: Live Status badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 border border-zinc-800 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span className="font-mono text-[9px] sm:text-[11px] text-zinc-200 tracking-widest uppercase font-medium">
            ECE & INTELLIGENT SYSTEMS
          </span>
        </div>
      </div>

      {/* ───────────────── BOTTOM HUD / SCROLL INDICATOR (z-20) ───────────────── */}
      <div 
        className={`w-full max-w-7xl px-6 md:px-12 pb-6 md:pb-8 flex items-center justify-between z-20 transition-all duration-700 delay-700 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Left: Global Coordinates */}
        <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] md:text-[11px] text-zinc-400 tracking-wider">
          <span>13.0827° N, 80.2707° E</span>
          <span className="text-zinc-600">|</span>
          <span>SRM IST // CHENNAI</span>
        </div>

        {/* Center: Animated Scroll Indicator */}
        <button
          onClick={() => scrollToSection("about")}
          aria-label="Scroll to about section"
          className="group flex flex-col items-center gap-2 cursor-pointer transition-opacity duration-300 hover:opacity-100 opacity-80 mx-auto sm:mx-0"
        >
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-zinc-300 group-hover:text-cyan-400 transition-colors">
            SCROLL TO EXPLORE
          </span>
          <div className="w-5 h-9 rounded-full border border-zinc-700 flex items-start justify-center p-1 group-hover:border-cyan-400 transition-colors bg-black/60 backdrop-blur-sm">
            <div className="w-1.5 h-2.5 rounded-full bg-cyan-400 animate-scroll-dot" />
          </div>
        </button>

        {/* Right: Edition mark */}
        <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] md:text-[11px] text-zinc-400 tracking-wider">
          <span>ENGINEERING PORTFOLIO</span>
          <span className="text-zinc-600">//</span>
          <span>2026</span>
        </div>
      </div>

    </header>
  );
}
