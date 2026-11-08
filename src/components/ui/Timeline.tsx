"use client";

import React, { useState } from 'react';
import { Card } from './Card';
import { Trophy, Award, Cpu, Zap } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import the TimelineVisualizer with SSR disabled
const TimelineVisualizer = dynamic(() => import('../3d/TimelineVisualizer'), {
  ssr: false,
  loading: () => <div className="absolute inset-y-0 left-0 w-[40px] -ml-[20px] border-l border-zinc-800/80" />
});

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'professional' | 'academic' | 'competition' | 'hardware';
  icon: React.ReactNode;
  tags: string[];
}

export default function Timeline() {
  const events: TimelineEvent[] = [
    {
      id: 1,
      year: "2025 - Present",
      title: "Lead Robotics & Firmware Engineer",
      subtitle: "Quantum Robotics Lab",
      description: "Spearheaded design of high-reliability RTOS firmware for multi-axis manipulator arms. Interfaced low-level brushless motor controllers via high-speed CAN-FD buses, cutting latency by 35%.",
      category: "professional",
      icon: <Cpu className="h-5 w-5" />,
      tags: ["FreeRTOS", "STM32", "CAN-FD", "C++20"]
    },
    {
      id: 2,
      year: "2024",
      title: "Winner: National Avionics Hackathon",
      subtitle: "Aerospace Systems Board",
      description: "Won 1st place among 120 teams by prototyping a fault-tolerant telemetry logger that guarantees data write speed of 10MB/s under severe vibration conditions.",
      category: "competition",
      icon: <Trophy className="h-5 w-5" />,
      tags: ["SPI", "DMA", "FATFS", "C"]
    },
    {
      id: 3,
      year: "2023",
      title: "Embedded Systems Developer",
      subtitle: "HexaGrid Technologies",
      description: "Designed ultra-low power PCB layouts for IoT sensor nodes. Implemented deep-sleep modes down to 1.2μA, expanding field life of battery-powered units from 1 to 4 years.",
      category: "professional",
      icon: <Zap className="h-5 w-5" />,
      tags: ["PCB Layout", "ARM Cortex-M", "Altium", "BLE"]
    },
    {
      id: 4,
      year: "2022",
      title: "B.S. in Computer Engineering",
      subtitle: "Technological Institute",
      description: "Specialized in Embedded Systems & Digital Signal Processing. Graduated with Honors. Capstone: Real-time FPGA-based audio filter cascade operating at 192kHz.",
      category: "academic",
      icon: <Award className="h-5 w-5" />,
      tags: ["Verilog", "FPGA", "DSP", "MATLAB"]
    }
  ];

  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(e => e.category === filter);

  return (
    <div className="w-full">
      {/* Timeline Controls */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {['all', 'professional', 'competition', 'academic'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider border transition-all duration-300 ${
              filter === cat
                ? 'bg-[#DC143C]/10 border-[#DC143C] text-[#DC143C] shadow-[0_0_15px_rgba(220,20,60,0.2)]'
                : 'bg-[#1E1E20]/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Timeline Visual Track */}
      <div className="relative border-l border-zinc-800/80 md:border-l-0 ml-4 md:ml-32 pl-6 md:pl-12 space-y-12">
        
        {/* 3D WebGL Timeline axis rail - Desktop view */}
        <div className="hidden md:block absolute top-0 bottom-0 left-0 w-[40px] -ml-[20px] pointer-events-none z-10 h-full">
          <TimelineVisualizer activeId={hoveredId} />
        </div>

        {filteredEvents.map((event, idx) => {
          const isHovered = hoveredId === event.id;
          return (
            <div 
              key={event.id} 
              className="relative group transition-all duration-500"
              onMouseEnter={() => setHoveredId(event.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Fallback Outer Glow Path Indicator - Hidden on Desktop (since Three.js replaces it) */}
              <div 
                className={`absolute -left-[31px] md:hidden top-6 w-4 h-4 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
                  isHovered 
                    ? 'bg-[#DC143C] border-[#DC143C] scale-125 shadow-[0_0_12px_#DC143C]' 
                    : 'bg-[#0B0B0C] border-zinc-700'
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-white' : 'bg-transparent'}`} />
              </div>

              {/* Date Indicator on the Left for Medium+ screens */}
              <div className="hidden md:block absolute -left-44 top-5 w-32 text-right text-sm font-semibold tracking-wider text-zinc-500 group-hover:text-[#DC143C] transition-colors duration-300">
                {event.year}
              </div>

              {/* Event Card */}
              <Card 
                className={`transition-all duration-500 transform ${
                  isHovered 
                    ? 'translate-x-1 border-l-4 border-l-[#DC143C] glow-crimson scale-[1.01]' 
                    : 'border-l-4 border-l-zinc-800 border-zinc-800'
                }`}
                hoverEffect={false}
              >
                <div className="flex flex-col gap-4">
                  {/* Card Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      {/* Mobile Date */}
                      <span className="inline-block md:hidden text-xs text-[#DC143C] font-semibold mb-2">
                        {event.year}
                      </span>
                      <h3 className={`text-xl font-bold text-white transition-colors duration-300 ${isHovered ? 'text-glow-crimson' : ''}`}>
                        {event.title}
                      </h3>
                      <h4 className="text-sm font-medium text-zinc-400 mt-0.5">
                        {event.subtitle}
                      </h4>
                    </div>

                    {/* Icon Sphere */}
                    <div 
                      className={`p-2.5 rounded-xl border transition-all duration-500 ${
                        isHovered 
                          ? 'bg-[#DC143C]/10 border-[#DC143C] text-[#DC143C] shadow-[0_0_10px_rgba(220,20,60,0.3)]' 
                          : 'bg-[#0B0B0C] border-zinc-800 text-zinc-400'
                      }`}
                    >
                      {event.icon}
                    </div>
                  </div>

                  {/* Body Text */}
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {event.description}
                  </p>

                  {/* Badges / Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/60">
                    {event.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border transition-colors duration-300 ${
                          isHovered 
                            ? 'bg-[#DC143C]/5 border-[#DC143C]/20 text-[#DC143C]' 
                            : 'bg-zinc-900/60 border-zinc-800 text-zinc-500'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
