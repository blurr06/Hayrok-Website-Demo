
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, Network, Lock, ChevronRight, Sparkles, Cpu, ShieldCheck } from 'lucide-react';

// Cast motion elements to any to bypass type sync issues in this environment
const MotionDiv = motion.div as any;

// Fix transition ease type error by casting to tuple to satisfy Framer Motion types
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

export const HayAiSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#05070A] relative overflow-hidden">
      {/* Dynamic Luminous Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Use MotionDiv cast to any to fix type error on animate prop */}
        <MotionDiv 
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-1/4 w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(255,95,0,0.15)_0%,transparent_70%)] blur-[120px] rounded-full"
        />
        {/* Use MotionDiv cast to any to fix type error on animate prop */}
        <MotionDiv 
          animate={{ 
            opacity: [0.05, 0.15, 0.05],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 -right-1/4 w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1)_0%,transparent_70%)] blur-[100px] rounded-full"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-10">
          <MotionDiv {...fadeInUp} className="max-w-3xl">
            <div className="flex items-center gap-2 text-hayrok-orange mb-4">
              <div className="w-5 h-5 bg-hayrok-orange/10 rounded-md flex items-center justify-center">
                <Bot size={14} strokeWidth={3} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em]">Powered by Hay-AI</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[0.95]">
              The Brain Behind the <br/>
              <span className="bg-gradient-to-r from-hayrok-orange via-orange-400 to-rose-500 bg-clip-text text-transparent">Breach Prevention</span>
            </h2>
            
            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl">
              Hay-AI isn't just a script. It's an adaptive reasoning engine trained on millions of 
              attack vectors, capable of thinking outside the box to find logic flaws.
            </p>
          </MotionDiv>

          {/* Use MotionDiv cast to any to fix type error on initial/whileInView props */}
          <MotionDiv 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="shrink-0 mb-2"
          >
            <button className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl text-white font-bold text-sm transition-all duration-300 backdrop-blur-md hover:border-hayrok-orange/30 shadow-xl">
              Read the Technical Paper
              <ChevronRight size={16} className="text-hayrok-orange group-hover:translate-x-1 transition-transform" />
            </button>
          </MotionDiv>
        </div>

        {/* Dynamic Cards Grid - REDUCED HEIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Network,
              title: "Graph-Based Reasoning",
              desc: "Hay-AI builds a knowledge graph of your infrastructure to understand relationships between seemingly isolated assets.",
              gradient: "from-orange-500/20"
            },
            {
              icon: Zap,
              title: "Zero-Day Emulation",
              desc: "Our engine is updated daily with the latest TTPs (Tactics, Techniques, and Procedures) used by nation-state actors.",
              gradient: "from-blue-500/10"
            },
            {
              icon: Lock,
              title: "Self-Learning Defense",
              desc: "Every false positive you mark trains Hay-AI to become smarter and more tailored to your specific environment.",
              gradient: "from-emerald-500/10"
            }
          ].map((feature, i) => (
            /* Use MotionDiv cast to any to fix type error on initial/whileInView props */
            <MotionDiv 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative bg-[#131924]/60 backdrop-blur-2xl p-8 rounded-[2rem] border border-white/5 hover:border-hayrok-orange/30 transition-all duration-500 overflow-hidden shadow-2xl"
            >
              {/* Inner Card Glow */}
              <div className={`absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br ${feature.gradient} to-transparent blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-hayrok-orange rounded-xl flex items-center justify-center mb-6 text-white shadow-[0_10px_30px_-5px_rgba(255,95,0,0.5)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <feature.icon size={28} strokeWidth={2.5} />
                </div>
                
                <h3 className="text-xl font-black text-white mb-3 tracking-tight group-hover:text-hayrok-orange transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-4 group-hover:text-slate-300 transition-colors">
                  {feature.desc}
                </p>

                <div className="flex items-center gap-2 text-hayrok-orange text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                  Engine Spec <ChevronRight size={10} />
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
        
        {/* Bottom Terminal Status Strip - MORE COMPACT */}
        {/* Use MotionDiv cast to any to fix type error on initial/whileInView props */}
        <MotionDiv 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-16 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-hayrok-orange/20 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative h-24 w-full overflow-hidden rounded-[1.5rem] border border-white/5 bg-[#0A0F17] flex items-center justify-center shadow-inner">
            {/* Background Scanning Grid */}
            <div className="absolute inset-0 opacity-10 flex items-center justify-around">
              {[...Array(30)].map((_, i) => (
                /* Use MotionDiv cast to any to fix type error on animate prop */
                <MotionDiv 
                  key={i} 
                  animate={{ 
                    opacity: [0.1, 0.4, 0.1],
                    height: ['30%', '60%', '30%']
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 0.15 
                  }}
                  className="w-px bg-hayrok-orange" 
                />
              ))}
            </div>

            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                  <span className="font-mono text-[10px] font-black text-white/90 tracking-[0.3em] uppercase">
                    SYSTEM STATUS: OPTIMIZED
                  </span>
                </div>
                <div className="w-px h-3 bg-white/10" />
                <span className="font-mono text-[10px] font-bold text-hayrok-orange tracking-widest uppercase animate-pulse">
                  MONITORING ACTIVE
                </span>
              </div>
              
              <div className="flex items-center gap-6 px-4 py-1 bg-white/5 border border-white/5 rounded-full backdrop-blur-md">
                <span className="text-[8px] font-bold text-slate-500 font-mono">NODES: 4.1K</span>
                <span className="text-[8px] font-bold text-slate-500 font-mono">OPS: 12.4M/s</span>
                <span className="text-[8px] font-bold text-slate-500 font-mono">LATENCY: 42ms</span>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};
