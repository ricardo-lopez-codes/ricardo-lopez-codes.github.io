import React from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
          {
            // Primary: Modern vibrant purple gradient
            'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:from-violet-500 hover:to-indigo-500 border border-violet-500/20':
              variant === 'primary',
            // Secondary: Dark elegant borders and soft background
            'bg-zinc-900/60 hover:bg-zinc-800 text-zinc-100 border border-zinc-800 hover:border-zinc-700 shadow-sm':
              variant === 'secondary',
            // Glassmorphism design
            'bg-white/10 hover:bg-white/15 text-white backdrop-blur-md border border-white/20 hover:border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)]':
              variant === 'glass',
            // Outline
            'border-2 border-zinc-700 hover:border-violet-500 text-zinc-300 hover:text-white bg-transparent':
              variant === 'outline',
            // Ghost
            'text-zinc-400 hover:text-white hover:bg-zinc-900/50 bg-transparent':
              variant === 'ghost',
          },
          {
            'px-3.5 py-1.5 text-sm': size === 'sm',
            'px-5 py-2.5 text-base': size === 'md',
            'px-7 py-3.5 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
