import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ResponsibleAiBannerProps {
  onClick: () => void;
}

export const ResponsibleAiBanner: React.FC<ResponsibleAiBannerProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="w-full bg-[#050B1A] py-5 px-6 group transition-colors hover:bg-[#0A1226] border-y border-white/5 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,95,0,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto flex items-center justify-center gap-4 relative z-10">
        <span className="text-hayrok-orange font-black text-sm md:text-lg tracking-[0.25em] uppercase transition-transform group-hover:scale-[1.02] duration-300">
          Read Our Responsible AI Policy
        </span>
        <ChevronRight 
          size={20} 
          className="text-hayrok-orange transition-transform duration-300 group-hover:translate-x-2" 
          strokeWidth={3}
        />
      </div>
    </button>
  );
};