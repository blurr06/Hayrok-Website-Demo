import React from 'react';
import { ArrowRight, Play, Terminal } from 'lucide-react';
import { InteractiveGraph } from './InteractiveGraph';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Dynamic Background Elements - Brighter Black to Orange */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-b from-hayrok-orange/30 via-hayrok-orange/10 to-transparent rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-t from-hayrok-orange/15 to-transparent rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hayrok-panel border border-hayrok-orange/30 text-white text-sm font-medium mb-4 backdrop-blur-sm animate-fade-in-up hover:border-hayrok-orange transition-colors cursor-default shadow-[0_0_20px_-5px_rgba(255,107,0,0.5)]">
            <Terminal size={14} className="text-hayrok-orange" />
            <span className="text-slate-200">Genesis Engine Live</span>
            <span className="flex h-2 w-2 relative ml-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            Automated <br />
            <span className="bg-gradient-to-r from-hayrok-orange via-orange-400 to-white bg-clip-text text-transparent">Genesis Testing</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Fast, clear, actionable security outcomes for modern enterprises. 
            Hayrok combines elite human expertise with the <strong>Genesis Engine</strong> to cut through the noise and deliver verified fixes.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
            <button className="w-full sm:w-auto bg-hayrok-orange hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-[0_0_30px_-5px_rgba(255,107,0,0.5)] group">
              Start Genesis Scan
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-lg font-bold text-lg text-white border border-white/10 hover:bg-white/10 hover:border-white/20 flex items-center justify-center gap-2 transition-all">
              <Play size={18} fill="currentColor" />
              Watch Demo
            </button>
          </div>

          <div className="pt-10 border-t border-white/5 mt-8">
             <p className="text-xs font-semibold text-slate-400 mb-4 tracking-widest uppercase">Trusted by Security Leaders at</p>
             <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="h-8 flex items-center gap-2">
                   <div className="w-6 h-6 rounded-full bg-slate-300"></div>
                   <span className="font-bold text-slate-200 text-lg">ACME Corp</span>
                </div>
                <div className="h-8 flex items-center gap-2">
                   <div className="w-6 h-6 rounded-sm bg-slate-300"></div>
                   <span className="font-bold text-slate-200 text-lg">Globex</span>
                </div>
                <div className="h-8 flex items-center gap-2">
                   <div className="w-6 h-6 rounded-tr-xl bg-slate-300"></div>
                   <span className="font-bold text-slate-200 text-lg">Soylent</span>
                </div>
             </div>
          </div>
        </div>

        {/* Right: Interactive Visual */}
        <div className="relative w-full">
           <div className="absolute -inset-1 bg-gradient-to-r from-hayrok-orange via-purple-500 to-blue-500 rounded-2xl opacity-25 blur-2xl animate-pulse-slow"></div>
           <InteractiveGraph />
        </div>
      </div>
    </section>
  );
};
