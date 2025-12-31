import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, Network, Lock, ChevronRight, Sparkles, Cpu, ShieldCheck, History, Gavel, Users } from 'lucide-react';

const MotionDiv = motion.div as any;

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

export const HayAiSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-10">
          <MotionDiv {...fadeInUp} className="max-w-4xl">
            <div className="flex items-center gap-2 text-hayrok-orange mb-6">
              <Bot size={14} strokeWidth={3} />
              <span className="text-[10px] font-black uppercase tracking-[0.5em]">The Reasoning Layer</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-tight uppercase">
              AI you can trust, <br/>
              <span className="text-hayrok-orange italic">explain, and audit.</span>
            </h2>
            
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Hay-AI is the governed AI reasoning layer embedded across the Hayrok platform. 
              Designed for environments where AI-assisted security must operate within defined controls.
            </p>
          </MotionDiv>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            { icon: Gavel, title: "Policy-Bound", desc: "Automation strictly confined to defined policies." },
            { icon: Users, title: "HITL Workflows", desc: "Human-in-the-loop ensures final accountability." },
            { icon: Sparkles, title: "Explainable", desc: "Explainable reasoning behind every AI output." },
            { icon: History, title: "Audit Records", desc: "Persistent records for regulator review." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:shadow-xl transition-all"
            >
               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-hayrok-orange mb-6 shadow-sm">
                  <item.icon size={22} />
               </div>
               <h4 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">{item.title}</h4>
               <p className="text-slate-500 text-sm font-bold leading-tight">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 border border-slate-800 relative overflow-hidden text-center shadow-2xl">
           <div className="absolute inset-0 bg-grid-white opacity-5" />
           <h3 className="text-3xl md:text-5xl font-black text-white mb-16 uppercase tracking-tighter">Designed for <span className="text-hayrok-orange italic">Governed Use.</span></h3>
           
           <div className="grid md:grid-cols-3 gap-12 relative z-10">
              <div className="space-y-6">
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Logic Constraint</p>
                 <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl">
                    <Lock size={32} className="text-hayrok-orange mx-auto mb-4" />
                    <p className="text-sm font-bold text-slate-300 uppercase leading-relaxed">Operate within defined controls</p>
                 </div>
              </div>
              <div className="space-y-6">
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Evidence Standard</p>
                 <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl">
                    <ShieldCheck size={32} className="text-hayrok-orange mx-auto mb-4" />
                    <p className="text-sm font-bold text-slate-300 uppercase leading-relaxed">Explainable to auditors</p>
                 </div>
              </div>
              <div className="space-y-6">
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Authority Model</p>
                 <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl">
                    <UserCheck size={32} className="text-hayrok-orange mx-auto mb-4" />
                    <p className="text-sm font-bold text-slate-300 uppercase leading-relaxed">Accountable to humans</p>
                 </div>
              </div>
           </div>
           
           <p className="mt-20 text-slate-400 font-bold text-sm italic max-w-2xl mx-auto">
              "Hayrok is suitable for enterprise and regulated environments where unmanaged automation is not acceptable."
           </p>
        </div>
      </div>
    </section>
  );
};

const UserCheck = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" />
  </svg>
);