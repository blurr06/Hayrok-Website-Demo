import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, ShieldAlert, Zap, BarChart3, Target, 
  Activity, ArrowRight, CheckCircle2, MessageSquare,
  Sparkles, Layers, Fingerprint, Eye, Database,
  Bot, UserCheck, History, Lock, ChevronRight, Gavel
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] }
};

export const DetectIqPage: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FCFCFA] min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-12 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <IntelligenceFabric density={1.5} isDark={false} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,95,0,0.03)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-50/50 border border-orange-100/50 text-hayrok-orange text-[10px] font-black shadow-sm mx-auto mb-10 tracking-[0.4em] uppercase backdrop-blur-sm"
          >
            <Sparkles size={12} className="animate-pulse" />
            Roadmap — Coming Soon
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="text-6xl md:text-[8rem] font-black tracking-tight leading-[0.9] text-slate-900 mb-12"
          >
            Detection‑Aware <br />
            <span className="text-hayrok-orange italic font-light tracking-tighter">Context.</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium mb-16"
          >
            DetectIQ is an upcoming capability designed to provide detection‑aware context that supports CTEM. Evaluate whether risk is not only exploitable, but also detectable.
          </motion.p>

          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button onClick={() => onNavigate?.('early-adopter')} className="w-full sm:w-auto bg-hayrok-orange hover:bg-orange-600 text-white px-14 py-6 rounded-full font-black text-lg flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-[0_20px_40px_-10px_rgba(255,95,0,0.3)]">
              Join the Early Adopter Program
            </button>
            <button onClick={() => onNavigate?.('contact')} className="w-full sm:w-auto px-14 py-6 rounded-full font-black text-lg text-slate-900 border border-slate-200 hover:bg-white transition-all shadow-sm">
              Contact for Roadmap Briefing
            </button>
          </motion.div>
        </div>
      </section>

      {/* Product Mission - Bento Style */}
      <section className="py-20">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-10">
               <motion.div className="lg:col-span-7 space-y-10" {...fadeInUp}>
                  <div className="p-12 md:p-16 bg-white border border-slate-100 rounded-[4rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.03)] relative overflow-hidden group">
                     <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-50 rounded-full blur-[80px] opacity-60 transition-opacity group-hover:opacity-100" />
                     <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-8">Platform Roadmap</h2>
                     <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight">
                        Bridging the gap to <br/> <span className="text-hayrok-orange italic font-light">the SOC.</span>
                     </h3>
                     <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl mb-12">
                        DetectIQ focuses on understanding how exposure and validated risk intersect with detection signals, helping organizations evaluate operational visibility.
                     </p>
                     
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                           "Correlate exposure with detection coverage",
                           "Understand gaps in detection capability",
                           "Improve prioritization via signal context",
                           "Strengthen SecOps & SOC communication"
                        ].map((item, i) => (
                           <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                              <CheckCircle2 size={18} className="text-hayrok-orange shrink-0" />
                              {item}
                           </div>
                        ))}
                     </div>
                  </div>
               </motion.div>

               <motion.div className="lg:col-span-5 h-full" {...fadeInUp}>
                  <div className="h-full min-h-[400px] p-2 bg-white border border-slate-100 rounded-[4rem] shadow-2xl shadow-slate-200/50 flex flex-col overflow-hidden">
                     <div className="flex-1 bg-[#F8F9F5] rounded-[3.8rem] p-10 flex flex-col relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none" />
                        <div className="relative z-10 h-full flex flex-col justify-center text-center">
                           <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-hayrok-orange shadow-xl mx-auto mb-8">
                              <Search size={40} />
                           </div>
                           <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Signal Context Engine</h4>
                           <p className="text-slate-400 font-medium text-sm px-4">Currently under development for the Hayrok platform suite.</p>
                           
                           <div className="mt-12 flex justify-center gap-2">
                              {[0, 1, 2].map(i => (
                                 <motion.div 
                                    key={i}
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                    className="w-2 h-2 rounded-full bg-hayrok-orange" 
                                 />
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* CTEM Integration - Softer Cards */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">CTEM Lifecycle Support</h2>
               <h3 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight tracking-tight">Detection‑Aware <br/> <span className="text-hayrok-orange italic font-light">Prioritization.</span></h3>
               <p className="text-xl text-slate-500 font-medium mt-6">DetectIQ is intended to move organizations toward more defensible, risk‑aware decisions.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
               <motion.div 
                  variants={fadeInUp}
                  className="p-12 bg-[#FBFBF9] border border-slate-100 rounded-[4rem] hover:bg-white hover:shadow-2xl transition-all group"
               >
                  <div className="w-16 h-16 bg-indigo-50 text-indigo-500 rounded-[1.8rem] flex items-center justify-center mb-10 shadow-sm">
                     <Target size={32} />
                  </div>
                  <h5 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Prioritize</h5>
                  <p className="text-slate-500 text-lg font-medium leading-relaxed">Providing insight into whether exploitable conditions are detectable within the current environment.</p>
               </motion.div>
               <motion.div 
                  variants={fadeInUp}
                  className="p-12 bg-[#FBFBF9] border border-slate-100 rounded-[4rem] hover:bg-white hover:shadow-2xl transition-all group"
               >
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-[1.8rem] flex items-center justify-center mb-10 shadow-sm">
                     <Activity size={32} />
                  </div>
                  <h5 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Mobilize</h5>
                  <p className="text-slate-500 text-lg font-medium leading-relaxed">Informing remediation and detection improvement decisions based on validated signal coverage.</p>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Design Principles Block */}
      <section className="py-32">
         <div className="container mx-auto px-6">
            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="bg-[#111316] border border-white/5 rounded-[5rem] p-12 md:p-32 overflow-hidden relative shadow-2xl text-white group"
            >
               <div className="max-w-4xl relative z-10">
                  <div className="inline-flex items-center gap-3 text-hayrok-orange font-black text-[10px] uppercase tracking-[0.5em] mb-12">
                     <Gavel size={16} /> Governance by Design
                  </div>
                  <h3 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-[0.02em] leading-[0.85] uppercase">
                    Auditable <br/> <span className="text-hayrok-orange italic font-light lowercase">Correlation.</span>
                  </h3>
                  <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed mb-20 max-w-2xl">
                    DetectIQ is being designed for enterprise suitability, prioritizing transparency in how exposure signals are correlated with detection coverage.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-16">
                     {[
                        { label: "Governed Correlation", d: "Data relationships managed via defined policies.", icon: Layers },
                        { label: "Human-in-the-Loop", d: "Expert analysis supported by AI reasoning.", icon: UserCheck },
                        { label: "Auditable Outputs", d: "Traceable decision paths for every correlation.", icon: History },
                        { label: "Enterprise Ready", d: "Designed for high-stakes, regulated environments.", icon: Lock }
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

      {/* Platform Synergy Flow */}
      <section className="py-32 bg-white border-b border-slate-100">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Planned Integrations</h2>
               <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">Better Together.</h3>
               <p className="text-xl text-slate-500 font-medium mt-6">DetectIQ is designed to enrich the core capabilities of the Hayrok ecosystem.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
               {[
                 { label: "Hive Enrichment", desc: "Enrich CTEM prioritization with operational detection signals.", icon: BarChart3 },
                 { label: "Genesis Pathing", desc: "Add detection context to validated attack paths.", icon: Target },
                 { label: "CodeFabrics Context", desc: "Insight into detection gaps for application‑driven risk.", icon: Zap }
               ].map((item, i) => (
                 <div key={i} className="p-10 bg-[#FBFBF9] border border-slate-100 rounded-[3.5rem] hover:bg-white hover:shadow-xl transition-all h-full flex flex-col">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-hayrok-orange mb-8 shadow-sm">
                       <item.icon size={24} />
                    </div>
                    <h5 className="text-xl font-black text-slate-900 mb-4">{item.label}</h5>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed flex-1">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-[#FCFCFA] text-center">
         <div className="container mx-auto px-6 max-w-5xl">
            <motion.div {...fadeInUp}>
               <h3 className="text-6xl md:text-[10rem] font-black text-slate-900 mb-16 tracking-tight leading-[0.8] uppercase">
                 Unlock <br/> <span className="text-hayrok-orange italic font-light tracking-tighter">Roadmap.</span>
               </h3>
               <p className="text-xl md:text-3xl text-slate-400 font-medium mb-20 leading-relaxed max-w-3xl mx-auto">
                 Join the Early Adopter Program to influence the development of DetectIQ and other upcoming capabilities.
               </p>
               <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                 <button onClick={() => onNavigate?.('early-adopter')} className="w-full md:w-auto bg-hayrok-orange text-white px-16 py-8 rounded-full text-2xl font-black hover:bg-orange-600 transition-all transform hover:scale-105 shadow-[0_30px_60px_-15px_rgba(255,95,0,0.4)]">
                    Register as Early Adopter
                 </button>
                 <button onClick={() => onNavigate?.('platform')} className="w-full md:w-auto px-16 py-8 rounded-full text-2xl font-black text-slate-900 border border-slate-100 hover:bg-[#F8F9F5] transition-all flex items-center justify-center gap-4 group">
                    View Platform <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                 </button>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Analyst-Safe Footer */}
      <div className="h-32 flex items-center justify-center border-t border-slate-100 bg-[#FCFCFA]">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            DetectIQ is a planned Hayrok platform capability intended to support CTEM decision‑making by adding detection‑aware context. Functionality and availability are subject to change.
         </p>
      </div>
    </div>
  );
};