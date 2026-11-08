"use client";

import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { ShaderAnimation } from "@/components/ui/shader-animation";

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
      {/* ───────────────── THREE.JS SHADER ANIMATION: BROUGHT TO FOREFRONT ───────────────── */}
      <div className="absolute inset-0 z-30 pointer-events-none opacity-100 mix-blend-screen">
        <ShaderAnimation className="w-full h-full" />
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

      {/* ───────────────── CENTER CINEMATIC HERO STAGE (z-20) ───────────────── */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl my-auto py-6">
        
        {/* Top Symmetrical Expanding Accent Hairline */}
        <div 
          className={`w-24 sm:w-36 md:w-52 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent mb-5 sm:mb-7 transition-all duration-1000 ease-out ${
            mounted ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />

        {/* Eyebrow Subheading / Student Identity */}
        <div 
          className={`font-mono text-[10px] sm:text-xs md:text-sm text-cyan-300 tracking-[0.3em] uppercase mb-3 sm:mb-4 font-semibold flex items-center gap-2 transition-all duration-700 delay-150 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          <span>ELECTRONICS & COMMUNICATION ENGINEERING</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
        </div>

        {/* MAIN EDITORIAL HEADLINE */}
        <h1 
          className={`font-black tracking-[-0.03em] uppercase text-balance transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            fontFamily: "'Orbitron', 'Syne', sans-serif",
            fontSize: "clamp(2.5rem, 8.5vw, 6.2rem)",
            lineHeight: "0.95",
            letterSpacing: "-0.02em"
          }}
        >
          <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            BUILDING WHAT'S NEXT.
          </span>
        </h1>

        {/* SUPPORTING TEXT */}
        <p 
          className={`font-mono text-zinc-300 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed mt-5 sm:mt-7 text-center font-normal px-2 transition-all duration-700 delay-350 drop-shadow ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Engineering intelligent systems at the intersection of hardware, software, and imagination.
        </p>

        {/* ENGINEERING DOMAIN TAGS */}
        <div 
          className={`flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-5 sm:mt-7 max-w-3xl px-2 transition-all duration-700 delay-450 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {engineeringDomains.map((domain, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-md text-[10px] sm:text-xs font-mono text-zinc-200 bg-black/80 border border-zinc-800 tracking-wider backdrop-blur-md transition-all duration-200 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(34,211,238,0.3)]"
            >
              {domain}
            </span>
          ))}
        </div>

        {/* PRIMARY & SECONDARY ACTION BUTTONS */}
        <div 
          className={`flex flex-wrap items-center justify-center gap-3 sm:gap-5 mt-7 sm:mt-9 transition-all duration-700 delay-550 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Primary Action Button: EXPLORE MY WORK */}
          <button
            onClick={() => scrollToSection("projects")}
            className="group relative inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-cyan-400 text-black font-mono text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] active:scale-[0.98] cursor-pointer"
          >
            <span>EXPLORE MY WORK</span>
            <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
          </button>

          {/* Secondary Action Button: ABOUT ME */}
          <button
            onClick={() => scrollToSection("about")}
            className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-black/80 text-zinc-100 border border-zinc-700 font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/[0.1] hover:shadow-[0_0_15px_rgba(34,211,238,0.25)] active:scale-[0.98] cursor-pointer"
          >
            <span>ABOUT ME</span>
          </button>
        </div>

        {/* Bottom Symmetrical Expanding Accent Hairline */}
        <div 
          className={`w-24 sm:w-36 md:w-52 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent mt-6 sm:mt-8 transition-all duration-1000 ease-out ${
            mounted ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />

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
