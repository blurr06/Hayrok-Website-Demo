import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <svg viewBox="0 0 40 40" className="h-full w-auto aspect-square" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="#FF6B00"/>
      <circle cx="20" cy="20" r="13" fill="#050505"/>
      <circle cx="20" cy="15" r="3" fill="white"/>
      <circle cx="15" cy="24" r="3" fill="white"/>
      <circle cx="25" cy="24" r="3" fill="white"/>
    </svg>
    <span className="font-bold text-2xl tracking-tight text-white">Hayrok</span>
  </div>
);
