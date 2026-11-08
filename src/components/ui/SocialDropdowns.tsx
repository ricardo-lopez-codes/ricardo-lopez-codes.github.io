"use client";

import React, { useState } from 'react';
import { ChevronDown, ExternalLink, Award, BookOpen } from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/Icons';

export default function SocialDropdowns() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const socials = [
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5 text-zinc-300 group-hover:text-[#DC143C] transition-colors" />,
      handle: 'github.com/alex-dev',
      url: 'https://github.com',
      desc: 'Explore source repositories, custom hardware codes, and open-source contributions.'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5 text-zinc-300 group-hover:text-[#DC143C] transition-colors" />,
      handle: 'linkedin.com/in/alex-dev',
      url: 'https://linkedin.com',
      desc: 'Professional networks, hardware-software development history, and collaborations.'
    },
    {
      name: 'LeetCode',
      icon: <Award className="h-5 w-5 text-zinc-300 group-hover:text-[#DC143C] transition-colors" />,
      handle: 'leetcode.com/alex_code',
      url: 'https://leetcode.com',
      desc: 'Algorithmic efficiency practices, logic solutions, and optimization indices.'
    },
    {
      name: 'GeeksforGeeks',
      icon: <BookOpen className="h-5 w-5 text-zinc-300 group-hover:text-[#DC143C] transition-colors" />,
      handle: 'geeksforgeeks.org/user/alex_gfg',
      url: 'https://geeksforgeeks.org',
      desc: 'Embedded systems data structures, custom driver design notes, and articles.'
    }
  ];

  const handleToggle = (idx: number) => {
    setActiveIdx(activeIdx === idx ? null : idx);
  };

  return (
    <div className="w-full space-y-4 max-w-sm">
      {socials.map((item, idx) => {
        const isOpen = activeIdx === idx;
        return (
          <div
            key={item.name}
            className="overflow-hidden rounded-xl border border-white/5 bg-[#1E1E20] transition-all duration-300"
            style={{
              borderColor: isOpen ? 'rgba(220, 20, 60, 0.4)' : 'rgba(255, 255, 255, 0.05)',
              boxShadow: isOpen ? '0 0 15px rgba(220, 20, 60, 0.15)' : 'none',
            }}
          >
            <button
              onClick={() => handleToggle(idx)}
              className="flex w-full items-center justify-between px-5 py-4 text-left cursor-pointer group"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-950/50 group-hover:bg-[#DC143C]/10 border border-white/5 transition-all group-hover:border-[#DC143C]/20">
                  {item.icon}
                </div>
                <span className="text-zinc-200 font-bold group-hover:text-white transition-colors duration-300">
                  {item.name}
                </span>
              </div>
              <ChevronDown 
                className="h-5 w-5 text-zinc-500 transition-transform duration-300 group-hover:text-white"
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              />
            </button>
            <div
              className="transition-all duration-500 ease-in-out overflow-hidden"
              style={{
                maxHeight: isOpen ? '160px' : '0px',
                opacity: isOpen ? 1 : 0
              }}
            >
              <div className="px-5 pb-5 pt-1 text-sm border-t border-white/5 bg-zinc-950/20">
                <p className="text-zinc-400 mb-3 text-xs leading-relaxed">
                  {item.desc}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#DC143C] font-semibold hover:text-[#e02f52] transition-colors group/link"
                >
                  {item.handle}
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
