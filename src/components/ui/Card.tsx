import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return <div className={`rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-[0_20px_60px_-20px_rgba(2,8,23,0.65)] ${className}`}>{children}</div>;
}
