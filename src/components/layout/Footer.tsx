import React from 'react';
import { Terminal, Mail } from 'lucide-react';
import { Github, Linkedin, Twitter } from '../ui/Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950/40 py-12 relative z-10 w-full backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Logo and Brand */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#DC143C]/10 border border-[#DC143C]/30 text-[#DC143C]">
              <Terminal className="h-4 w-4" />
            </div>
            <span className="text-zinc-200 font-black tracking-widest text-sm uppercase">
              LOPEZ.DEV
            </span>
          </div>

          {/* Copywriting */}
          <p className="text-xs text-zinc-500 font-mono">
            &copy; {currentYear} RICARDO LOPEZ. DIGITAL ENGINEERING WORKSPACE. ALL CHANNELS SECURED.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-white hover:shadow-[0_0_8px_rgba(220,20,60,0.5)] transition-colors duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-white hover:shadow-[0_0_8px_rgba(220,20,60,0.5)] transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-white hover:shadow-[0_0_8px_rgba(220,20,60,0.5)] transition-colors duration-300"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@ricardolopez.dev"
              className="text-zinc-500 hover:text-white hover:shadow-[0_0_8px_rgba(220,20,60,0.5)] transition-colors duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
