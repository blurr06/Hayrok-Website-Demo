import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, BarChart3, Code, Eye, Search, 
  ArrowRight, CheckCircle2, Sparkles, 
  Clock, Rocket, ShieldCheck, Globe, 
  Target, Activity, Layers, Bot, 
  ChevronRight, Database, Workflow, Terminal
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] }
};

const RoadmapStep = ({ phase, title, status, items, isLive }: any) => (
  <motion.div 
    {...fadeInUp}
    className={`relative pl-12 pb-20 last:pb-0 group`}
  >
    {/* Connector Line */}
    <div className="absolute left-[19px] top-2 bottom-0 w-px bg-slate-100 group-last:hidden">
      <motion.div 
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className={`w-full ${isLive ? 'bg-hayrok-orange' : 'bg-slate-200'}`}
      />
    </div>

    {/* Dot */}
    <div className={`absolute left-0 top-1 w-10 h-10 rounded-2xl flex items-center justify-center border-4 border-white shadow-xl z-10 transition-all duration-500 ${isLive ? 'bg-hayrok-orange text-white scale-110' : 'bg-slate-100 text-slate-400'}`}>
      {isLive ? <CheckCircle2 size={20} /> : <Clock size={20} />}
    </div>

    <div className="flex flex-col md:flex-row gap-10">
      <div className="md:w-1/3">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-[10px] font-black uppercase tracking-widest ${isLive ? 'bg-orange-50 text-hayrok-orange' : 'bg-slate-50 text-slate-400'}`}>
          {phase} {isLive && " - Live"}
        </div>
        <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight uppercase">{title}</h3>
        <p className="text-slate-500 font-medium leading-relaxed">
          {status}
        </p>
      </div>

      <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
        {items.map((item: any, i: number) => (
          <div key={i} className={`p-8 rounded-[2.5rem] border transition-all duration-500 group/card ${isLive ? 'bg-white border-slate-100 hover:shadow-2xl hover:border-hayrok-orange/30' : 'bg-slate-50/50 border-slate-100 hover:bg-white hover:shadow-xl'}`}>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm transition-all group-hover/card:scale-110 ${isLive ? 'bg-orange-50 text-hayrok-orange' : 'bg-white text-slate-400'}`}>
               <item.icon size={22} />
            </div>
            <h4 className={`text-xl font-black mb-3 ${isLive ? 'text-slate-900' : 'text-slate-500'}`}>{item.name}</h4>
            <p className="text-sm text-slate-400 font-medium leading-relaxed mb-6">{item.desc}</p>
            {isLive ? (
               <button className="text-[10px] font-black text-hayrok-orange uppercase tracking-widest flex items-center gap-2 group-hover/card:gap-4 transition-all">
                  Explore Module <ArrowRight size={14} />
               </button>
            ) : (
               <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest px-3 py-1 rounded-full border border-slate-100">Development</span>
            )}
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export const RoadmapPage: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FCFCFA] min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-12 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <IntelligenceFabric density={1.2} isDark={false} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,95,0,0.03)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-50/50 border border-orange-100/50 text-hayrok-orange text-[10px] font-black shadow-sm mx-auto mb-10 tracking-[0.4em] uppercase backdrop-blur-sm"
          >
            <Rocket size={12} className="animate-pulse" />
            Platform Evolution
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="text-6xl md:text-[8rem] font-black tracking-tight leading-[0.9] text-slate-900 mb-12"
          >
            The Future of <br />
            <span className="text-hayrok-orange italic font-light tracking-tighter">Governed Security.</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium mb-16"
          >
            Our roadmap is built on a single conviction: automation without governance is noise. We are expanding the Hive to cover the entire exposure lifecycle.
          </motion.p>
        </div>
      </section>

      {/* Main Roadmap Timeline */}
      <section className="py-20 relative">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col">
               
               {/* Phase 1 */}
               <RoadmapStep 
                  phase="Phase 1"
                  title="Core Intelligence"
                  isLive={true}
                  status="The foundation of the Hayrok ecosystem, establishing the central system of record and primary validation engine."
                  items={[
                     { name: "Hive", desc: "CTEM Risk Intelligence and central system of record for all security exposure.", icon: BarChart3 },
                     { name: "Genesis", desc: "Agent-based security validation proving exploitability paths end-to-end.", icon: Zap },
                     { name: "CodeFabrics", desc: "Governed AppSec and supply chain risk managed before deployment.", icon: Code },
                     { name: "Hay-AI Core", desc: "Recursive graph reasoning engine powering the entire platform.", icon: Bot }
                  ]}
               />

               {/* Phase 2 */}
               <RoadmapStep 
                  phase="Phase 2"
                  title="Signal & Surface Context"
                  isLive={false}
                  status="Expanding awareness beyond the internal stack to the perimeter and deep detection signals."
                  items={[
                     { name: "SurfaceIQ", desc: "Identifying and contextualizing externally observable assets and exposure signals.", icon: Eye },
                     { name: "DetectIQ", desc: "Correlating exposure and validation with detection signal context and coverage.", icon: Search }
                  ]}
               />

               {/* Phase 3 */}
               <RoadmapStep 
                  phase="Phase 3"
                  title="Autonomous Remediation"
                  isLive={false}
                  status="Closing the loop with governed, policy-bound remediation workflows and self-healing infrastructure."
                  items={[
                     { name: "RemediateIQ", desc: "Policy-driven automated patching and compensating control deployment.", icon: Workflow },
                     { name: "Global Pulse", desc: "Anonymized global threat pattern sharing for zero-day anticipation.", icon: Globe }
                  ]}
               />

            </div>
         </div>
      </section>

      {/* Vision Statement Block */}
      <section className="py-32">
         <div className="container mx-auto px-6">
            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="bg-[#111316] border border-white/5 rounded-[5rem] p-12 md:p-32 overflow-hidden relative shadow-2xl text-white group"
            >
               <div className="absolute top-0 right-0 p-32 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <Sparkles size={400} className="text-hayrok-orange" />
               </div>
               
               <div className="max-w-4xl relative z-10">
                  <div className="inline-flex items-center gap-3 text-hayrok-orange font-black text-[10px] uppercase tracking-[0.5em] mb-12">
                     <ShieldCheck size={16} /> Governance at Scale
                  </div>
                  <h3 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-[0.02em] leading-[0.85] uppercase">
                    Every Milestone <br/> <span className="text-hayrok-orange italic font-light lowercase">is</span> <br/> Policy-Driven.
                  </h3>
                  <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed mb-20 max-w-2xl">
                    Our roadmap isn't just about features. It's about maturing the relationship between AI reasoning and human accountability. We build for the 1% of organizations that cannot afford to fail.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-16">
                     {[
                        { label: "Transparent Development", d: "Roadmap items prioritized by customer governance needs.", icon: Terminal },
                        { label: "Measured Adoption", d: "New capabilities introduced with safe, governed defaults.", icon: Target },
                        { label: "Evidence-Centric", d: "Every new feature must produce auditable decision proof.", icon: Database },
                        { label: "Regulated Focus", d: "Aligned with emerging AI TRiSM and GRC standards.", icon: Layers }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-8 items-start">
                           <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-hayrok-orange shrink-0">
                              <item.icon size={20} />
                           </div>
                           <div>
                              <span className="text-lg font-black text-white uppercase tracking-widest block mb-3">{item.label}</span>
                              <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.d}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Outcome Section */}
      <section className="py-40 bg-white border-t border-slate-100">
         <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
               <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.4em] mb-12">Influence the Future</h2>
               <h3 className="text-6xl md:text-[10rem] font-black text-slate-900 mb-16 tracking-tight leading-[0.8] uppercase">
                 Shape <br/> <span className="text-hayrok-orange italic font-light tracking-tighter">The Roadmap.</span>
               </h3>
               <p className="text-xl md:text-3xl text-slate-400 font-medium mb-20 leading-relaxed max-w-3xl mx-auto">
                 Join our Early Adopter Program to get early access to upcoming modules and influence our product development cycle.
               </p>
               <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                 <button onClick={() => onNavigate?.('early-adopter')} className="w-full md:w-auto bg-hayrok-orange text-white px-16 py-8 rounded-full text-2xl font-black hover:bg-orange-600 transition-all transform hover:scale-105 shadow-[0_30px_60px_-15px_rgba(255,95,0,0.4)]">
                    Apply as Early Adopter
                 </button>
                 <button onClick={() => onNavigate?.('contact')} className="w-full md:w-auto px-16 py-8 rounded-full text-2xl font-black text-slate-900 border border-slate-100 hover:bg-[#F8F9F5] transition-all flex items-center justify-center gap-4 group">
                    Contact Strategy Team <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                 </button>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Signature Footer */}
      <div className="h-32 flex items-center justify-center border-t border-slate-100 bg-[#FCFCFA]">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            Hayrok's roadmap focuses on Continuous Threat Exposure Management (CTEM) expansion through governed AI capabilities designed for enterprise and regulated sectors.
         </p>
      </div>
    </div>
  );
};