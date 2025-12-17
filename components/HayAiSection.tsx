import React from 'react';
import { Bot, Zap, Network, Lock, ChevronRight } from 'lucide-react';

export const HayAiSection: React.FC = () => {
  return (
    <section className="py-24 bg-hayrok-dark relative overflow-hidden">
       {/* Decorative Gradient Blob */}
       <div className="absolute -left-40 top-1/4 w-[600px] h-[600px] bg-hayrok-orange/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
           <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-hayrok-orange font-bold tracking-wider uppercase text-sm mb-4">
                 <Bot size={18} />
                 <span>Powered by Hay-AI</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                 The Brain Behind the <br/>
                 <span className="gradient-text">Breach Prevention</span>
              </h2>
              <p className="text-lg text-slate-400">
                 Hay-AI isn't just a script. It's an adaptive learning engine trained on millions of attack vectors, 
                 capable of thinking outside the box to find logic flaws that traditional scanners miss.
              </p>
           </div>
           <button className="group flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 hover:bg-hayrok-orange hover:border-hayrok-orange rounded-full text-white transition-all duration-300">
              Read the Technical Paper
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform"/>
           </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {[
              {
                 icon: Network,
                 title: "Graph-Based Reasoning",
                 desc: "Hay-AI builds a knowledge graph of your infrastructure to understand relationships between seemingly isolated assets."
              },
              {
                 icon: Zap,
                 title: "Zero-Day Emulation",
                 desc: "Our engine is updated daily with the latest TTPs (Tactics, Techniques, and Procedures) used by nation-state actors."
              },
              {
                 icon: Lock,
                 title: "Self-Learning Defense",
                 desc: "Every false positive you mark trains Hay-AI to become smarter and more tailored to your specific environment."
              }
           ].map((feature, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl border border-hayrok-border group hover:bg-white/5 transition-colors">
                 <div className="w-12 h-12 bg-gradient-to-br from-hayrok-orange to-orange-800 rounded-lg flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform">
                    <feature.icon size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                 <p className="text-slate-400 leading-relaxed">
                    {feature.desc}
                 </p>
              </div>
           ))}
        </div>
        
        {/* Abstract Visualization Strip */}
        <div className="mt-20 h-24 w-full relative overflow-hidden rounded-xl border border-hayrok-border/50 bg-black">
           <div className="absolute inset-0 flex items-center justify-around opacity-30">
              {[...Array(20)].map((_, i) => (
                 <div key={i} className="h-full w-px bg-gradient-to-b from-transparent via-hayrok-orange to-transparent animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
              ))}
           </div>
           <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-xs text-hayrok-orange bg-hayrok-orange/10 px-4 py-1 rounded-full border border-hayrok-orange/20">
                 SYSTEM STATUS: SECURE • MONITORING ACTIVE
              </span>
           </div>
        </div>
      </div>
    </section>
  );
};
