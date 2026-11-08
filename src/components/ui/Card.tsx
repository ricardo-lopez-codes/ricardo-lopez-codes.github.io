import React from 'react';
import { cn } from '@/utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glow?: boolean;
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = true, glow = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative rounded-2xl border border-white/10 bg-zinc-950/40 p-6 backdrop-blur-xl transition-all duration-500 overflow-hidden shadow-2xl',
          hoverEffect && 'hover:scale-[1.02] hover:border-violet-500/30 hover:bg-zinc-900/50 hover:shadow-[0_20px_50px_rgba(124,58,237,0.15)]',
          glow && 'before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-tr before:from-violet-600/10 before:to-indigo-600/10 before:opacity-50 before:blur-xl',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
