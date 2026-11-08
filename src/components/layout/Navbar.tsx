"use client";

import React, { useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';
import { Button } from '../ui/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/30 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20">
              <Terminal className="h-5 w-5" />
            </div>
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-xl font-bold tracking-tight text-transparent">
              DevSpace
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm text-zinc-400 hover:text-white transition-colors duration-300 font-medium group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Action & Social Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-xl border border-transparent hover:border-white/10"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-xl border border-transparent hover:border-white/10"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <Button variant="primary" size="sm">
              Get in touch
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white focus:outline-none p-2 hover:bg-white/5 rounded-xl"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden border-t border-white/5 bg-zinc-950/80 backdrop-blur-xl animate-in slide-in-from-top duration-300">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-4 py-2.5 text-base font-medium text-zinc-400 hover:bg-white/5 hover:text-white transition-all"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-4">
              <div className="flex gap-2">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white p-2.5 hover:bg-white/5 rounded-xl">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white p-2.5 hover:bg-white/5 rounded-xl">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              <Button variant="primary" size="sm">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
