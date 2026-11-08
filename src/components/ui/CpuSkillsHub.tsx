"use client";

import React, { useState } from 'react';
import { Card } from './Card';
import { Terminal, Network, Zap, Cpu } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import the GateVisualizer with SSR disabled to prevent hydration errors
const GateVisualizer = dynamic(() => import('../3d/GateVisualizer'), {
  ssr: false,
  loading: () => <div className="w-10 h-10 rounded-full border border-zinc-800 animate-pulse bg-zinc-950/40" />
});

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  skills: { name: string; value: number }[];
}

export default function CpuSkillsHub() {
  const categories: SkillCategory[] = [
    {
      id: "firmware",
      name: "Firmware & Drivers",
      icon: <Terminal className="h-6 w-6" />,
      description: "Writing bare-metal drivers, DMA configurations, and bootloaders.",
      skills: [
        { name: "C / C++ (Embedded)", value: 96 },
        { name: "Bare-Metal Registers", value: 92 },
        { name: "DMA & Interrupts", value: 88 },
        { name: "ARM Assembly", value: 70 }
      ]
    },
    {
      id: "rtos",
      name: "Real-Time OS",
      icon: <Cpu className="h-6 w-6" />,
      description: "Deterministic scheduling, mutexes, and multi-threaded systems.",
      skills: [
        { name: "FreeRTOS", value: 94 },
        { name: "Thread Safety / Mutex", value: 90 },
        { name: "Task Sync (Semaphores)", value: 85 },
        { name: "Zephyr RTOS", value: 75 }
      ]
    },
    {
      id: "hardware",
      name: "Hardware & PCB",
      icon: <Zap className="h-6 w-6" />,
      description: "Schematic design, component selection, and high-speed layout.",
      skills: [
        { name: "Altium Designer", value: 85 },
        { name: "Schematic Capture", value: 90 },
        { name: "High-Speed Routing", value: 78 },
        { name: "Lab Tools (Oscilloscope)", value: 87 }
      ]
    },
    {
      id: "protocols",
      name: "IoT & Connectivity",
      icon: <Network className="h-6 w-6" />,
      description: "Low-overhead messaging and robust peripheral integrations.",
      skills: [
        { name: "SPI / I2C / UART", value: 98 },
        { name: "CAN & CAN-FD", value: 88 },
        { name: "MQTT / BLE", value: 85 },
        { name: "Modbus / RS-485", value: 80 }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4">
      {/* Desktop PCB SVG and interactive nodes (Large screens) */}
      <div className="hidden lg:block relative w-full h-[650px] mb-8">
        
        {/* Central Microcontroller / CPU Core - Infused with interactive 3D WebGL rotating core */}
        <div 
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#1E1E20] border-2 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 z-20 ${
            activeCategory 
              ? 'border-[#DC143C] shadow-[0_0_35px_rgba(220,20,60,0.35)] scale-105' 
              : 'border-zinc-800 shadow-[0_0_15px_rgba(0,0,0,0.5)]'
          }`}
        >
          {/* Silkscreen markings */}
          <div className="absolute top-1 text-[8px] font-mono text-zinc-600">STM32F4 / CORTEX-M4</div>
          <div className="absolute left-1.5 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 text-[5px] font-mono text-zinc-700">
            {Array.from({ length: 6 }).map((_, i) => <div key={i}>PA{i}</div>)}
          </div>
          <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 text-[5px] font-mono text-zinc-700 items-end">
            {Array.from({ length: 6 }).map((_, i) => <div key={i}>PB{i}</div>)}
          </div>

          {/* Glowing 3D Microchip core block replaces standard flat icon */}
          <div className="relative w-20 h-20 bg-[#0B0B0C] rounded-xl border border-zinc-800/80 flex items-center justify-center transition-transform duration-300">
            <GateVisualizer type="octahedron" color={activeCategory ? 0xDC143C : 0x555555} />
          </div>
          
          <div className="mt-2 text-[10px] font-mono font-bold tracking-widest text-zinc-400">
            {activeCategory ? "SIGNAL ACTIVE" : "CPU IDLE"}
          </div>
        </div>

        {/* 4 Interactive 3D Logic Components Floating Over SVG Trace Elbows */}
        
        {/* Floating component 1 (Top-Left) */}
        <div className="absolute left-[24%] top-[38%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 z-30 pointer-events-none">
          <GateVisualizer type="cube" color={activeCategory === 'firmware' ? 0xDC143C : 0x1E1E20} />
        </div>

        {/* Floating component 2 (Top-Right) */}
        <div className="absolute right-[24%] top-[38%] translate-x-1/2 -translate-y-1/2 w-14 h-14 z-30 pointer-events-none">
          <GateVisualizer type="torus" color={activeCategory === 'rtos' ? 0xDC143C : 0x1E1E20} />
        </div>

        {/* Floating component 3 (Bottom-Left) */}
        <div className="absolute left-[24%] top-[56%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 z-30 pointer-events-none">
          <GateVisualizer type="octahedron" color={activeCategory === 'hardware' ? 0xDC143C : 0x1E1E20} />
        </div>

        {/* Floating component 4 (Bottom-Right) */}
        <div className="absolute right-[24%] top-[56%] translate-x-1/2 -translate-y-1/2 w-14 h-14 z-30 pointer-events-none">
          <GateVisualizer type="torus" color={activeCategory === 'protocols' ? 0xDC143C : 0x1E1E20} />
        </div>

        {/* SVG Board Circuit Traces */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 1000 650"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Definitions for Glow Gradients */}
          <defs>
            <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* TRACE 1: Top-Left Card (x=0, y=0 region) */}
          <g>
            {/* Background passive copper path */}
            <path 
              d="M 420 270 H 260 L 160 160 H 120" 
              stroke="#1E1E20" 
              strokeWidth="2" 
              strokeLinecap="round" 
            />
            {/* Active crawling glowing pulse */}
            <path 
              d="M 420 270 H 260 L 160 160 H 120" 
              stroke={activeCategory === 'firmware' ? '#DC143C' : 'transparent'} 
              strokeWidth="2" 
              strokeLinecap="round"
              className="animate-pcb-crawl"
              filter="url(#glow-filter)"
            />
          </g>

          {/* TRACE 2: Top-Right Card (x=1000, y=0 region) */}
          <g>
            <path 
              d="M 580 270 H 740 L 840 160 H 880" 
              stroke="#1E1E20" 
              strokeWidth="2" 
              strokeLinecap="round" 
            />
            <path 
              d="M 580 270 H 740 L 840 160 H 880" 
              stroke={activeCategory === 'rtos' ? '#DC143C' : 'transparent'} 
              strokeWidth="2" 
              strokeLinecap="round"
              className="animate-pcb-crawl"
              filter="url(#glow-filter)"
            />
          </g>

          {/* TRACE 3: Bottom-Left Card (x=0, y=650 region) */}
          <g>
            <path 
              d="M 420 380 H 260 L 160 490 H 120" 
              stroke="#1E1E20" 
              strokeWidth="2" 
              strokeLinecap="round" 
            />
            <path 
              d="M 420 380 H 260 L 160 490 H 120" 
              stroke={activeCategory === 'hardware' ? '#DC143C' : 'transparent'} 
              strokeWidth="2" 
              strokeLinecap="round"
              className="animate-pcb-crawl"
              filter="url(#glow-filter)"
            />
          </g>

          {/* TRACE 4: Bottom-Right Card (x=1000, y=650 region) */}
          <g>
            <path 
              d="M 580 380 H 740 L 840 490 H 880" 
              stroke="#1E1E20" 
              strokeWidth="2" 
              strokeLinecap="round" 
            />
            <path 
              d="M 580 380 H 740 L 840 490 H 880" 
              stroke={activeCategory === 'protocols' ? '#DC143C' : 'transparent'} 
              strokeWidth="2" 
              strokeLinecap="round"
              className="animate-pcb-crawl"
              filter="url(#glow-filter)"
            />
          </g>
        </svg>

        {/* 4 Skill Cards Positioned Absolutely Around CPU */}
        
        {/* CARD 1: FIRMWARE (Top-Left) */}
        <div 
          className="absolute left-0 top-12 w-[340px] z-30 transition-all duration-300"
          onMouseEnter={() => setActiveCategory('firmware')}
          onMouseLeave={() => setActiveCategory(null)}
        >
          <Card 
            className={`transition-all duration-500 border ${
              activeCategory === 'firmware' 
                ? 'glow-crimson border-[#DC143C] scale-[1.03]' 
                : 'border-zinc-800'
            }`}
            hoverEffect={false}
          >
            <SkillCardContent category={categories[0]} isActive={activeCategory === 'firmware'} />
          </Card>
        </div>

        {/* CARD 2: RTOS (Top-Right) */}
        <div 
          className="absolute right-0 top-12 w-[340px] z-30 transition-all duration-300"
          onMouseEnter={() => setActiveCategory('rtos')}
          onMouseLeave={() => setActiveCategory(null)}
        >
          <Card 
            className={`transition-all duration-500 border ${
              activeCategory === 'rtos' 
                ? 'glow-crimson border-[#DC143C] scale-[1.03]' 
                : 'border-zinc-800'
            }`}
            hoverEffect={false}
          >
            <SkillCardContent category={categories[1]} isActive={activeCategory === 'rtos'} />
          </Card>
        </div>

        {/* CARD 3: HARDWARE (Bottom-Left) */}
        <div 
          className="absolute left-0 bottom-12 w-[340px] z-30 transition-all duration-300"
          onMouseEnter={() => setActiveCategory('hardware')}
          onMouseLeave={() => setActiveCategory(null)}
        >
          <Card 
            className={`transition-all duration-500 border ${
              activeCategory === 'hardware' 
                ? 'glow-crimson border-[#DC143C] scale-[1.03]' 
                : 'border-zinc-800'
            }`}
            hoverEffect={false}
          >
            <SkillCardContent category={categories[2]} isActive={activeCategory === 'hardware'} />
          </Card>
        </div>

        {/* CARD 4: PROTOCOLS (Bottom-Right) */}
        <div 
          className="absolute right-0 bottom-12 w-[340px] z-30 transition-all duration-300"
          onMouseEnter={() => setActiveCategory('protocols')}
          onMouseLeave={() => setActiveCategory(null)}
        >
          <Card 
            className={`transition-all duration-500 border ${
              activeCategory === 'protocols' 
                ? 'glow-crimson border-[#DC143C] scale-[1.03]' 
                : 'border-zinc-800'
            }`}
            hoverEffect={false}
          >
            <SkillCardContent category={categories[3]} isActive={activeCategory === 'protocols'} />
          </Card>
        </div>

      </div>

      {/* Mobile Stack Layout (Medium & Small screens) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
        {categories.map((category) => (
          <div 
            key={category.id}
            onMouseEnter={() => setActiveCategory(category.id)}
            onMouseLeave={() => setActiveCategory(null)}
            className="w-full"
          >
            <Card 
              className={`transition-all duration-500 border ${
                activeCategory === category.id 
                  ? 'glow-crimson border-[#DC143C] scale-[1.01]' 
                  : 'border-zinc-800'
              }`}
              hoverEffect={false}
            >
              <SkillCardContent category={category} isActive={activeCategory === category.id} />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

interface SkillCardContentProps {
  category: SkillCategory;
  isActive: boolean;
}

function SkillCardContent({ category, isActive }: SkillCardContentProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Title block */}
      <div className="flex items-center gap-3">
        <div 
          className={`p-2 rounded-lg border transition-all duration-500 ${
            isActive 
              ? 'bg-[#DC143C]/10 border-[#DC143C] text-[#DC143C] shadow-[0_0_10px_rgba(220,20,60,0.3)]' 
              : 'bg-[#0B0B0C] border-zinc-800 text-zinc-400'
          }`}
        >
          {category.icon}
        </div>
        <div>
          <h3 className={`text-base font-bold text-white transition-colors duration-300 ${isActive ? 'text-[#DC143C] text-glow-crimson' : ''}`}>
            {category.name}
          </h3>
          <p className="text-[11px] text-zinc-500 font-normal mt-0.5">
            {category.description}
          </p>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="space-y-3 pt-2 border-t border-zinc-800/80">
        {category.skills.map((skill) => (
          <div key={skill.name} className="group">
            <div className="flex justify-between text-xs mb-1 font-medium">
              <span className="text-zinc-400 group-hover:text-white transition-colors duration-250">{skill.name}</span>
              <span className={`transition-colors duration-300 ${isActive ? 'text-[#DC143C]' : 'text-zinc-500'}`}>{skill.value}%</span>
            </div>
            {/* Outer track */}
            <div className="w-full h-1.5 bg-[#0B0B0C] rounded-full overflow-hidden border border-zinc-800/60">
              {/* Inner bar */}
              <div 
                className={`h-full rounded-full transition-all duration-1000 ease-out ${
                  isActive 
                    ? 'bg-gradient-to-r from-[#DC143C] to-red-500 shadow-[0_0_6px_#DC143C]' 
                    : 'bg-zinc-700'
                }`}
                style={{ width: `${skill.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
