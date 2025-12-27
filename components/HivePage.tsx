import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, Crosshair, Search, Target, ShieldCheck, 
  TrendingUp, Eye, Lock, FileSearch, Users, 
  ChevronRight, ArrowRight, Zap, Code, Shield,
  Activity, Sparkles, Database, Layout, History,
  Scale, UserCheck, CheckCircle2, Bot, Gavel,
  Briefcase, Rocket, Globe, ZapOff
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

const LiveIntelligenceFeed = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Mapping shadow IT in us-west-2", type: "discovery" },
    { id: 2, text: "Correlating 14 distinct exposure signals", type: "intelligence" },
    { id: 3, text: "Risk score adjusted: +1.2 (Verified Path)", type: "risk" }
  ]);

  useEffect(() => {
    const events = [
      "New asset identified: api-v2-internal",
      "Genesis validated exploit path #921",
      "SBOM drift detected in 'auth-service'",
      "Executive report generated: Q3 Compliance",
      "Policy check passed: Data Residency OPA",
      "Identity mapping: Transitive trust verified",
      "Exposure drift: 3 new ports identified"
    ];

    const interval = setInterval(() => {
      setItems(prev => [
        { id: Date.now(), text: events[Math.floor(Math.random() * events.length)], type: "feed" },
        ...prev.slice(0, 2)
      ]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3 font-mono text-[10px] text-left">
      <AnimatePresence mode="popLayout">
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-hayrok-orange animate-pulse" />
            <span className="text-slate-400">[{new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })}]</span>
            <span className="font-bold text-slate-700 truncate">{item.text}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export const HivePage: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange selection:text-white pb-12 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-slate-100">
        <IntelligenceFabric density={1.8} isDark={false} />
        <div className="absolute inset-0 bg-grid-white opacity-[0.05] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 text-[11px] font-black shadow-sm mx-auto mb-10 tracking-[0.2em] uppercase"
          >
            <div className="flex items-center gap-1.5">
               <span className="text-hayrok-orange text-lg leading-none mt-[-2px] tracking-tight">&gt;</span>
               <span className="w-2.5 h-[2px] bg-hayrok-orange animate-pulse mt-[8px]"></span>
            </div>
            Hive — Intelligence & Governance
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl font-black tracking-tight leading-[0.85] text-slate-900 mb-10"
          >
            Unified <br />
            <span className="text-hayrok-orange italic tracking-tighter">Risk Awareness.</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium mb-12"
          >
            The central system of record for CTEM. Hive orchestrates signals from across your environment to deliver a defensible, prioritize view of exploitable risk.
          </motion.p>

          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={() => onNavigate?.('contact')} className="w-full sm:w-auto bg-hayrok-orange hover:bg-orange-600 text-white px-12 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
              Request a Demo
            </button>
            <button onClick={() => onNavigate?.('platform')} className="w-full sm:w-auto px-12 py-6 rounded-2xl font-black text-xl text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all bg-white shadow-sm">
              Explore Use Cases
            </button>
          </motion.div>
        </div>
      </section>

      {/* Dynamic Intelligence Feed / Mission */}
      <section className="py-32 border-b border-slate-100 bg-slate-50/50">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <motion.div {...fadeInUp}>
                  <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Autonomous Intelligence</h2>
                  <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                    From fragmented signals to <span className="text-slate-400 italic">one source of truth.</span>
                  </h3>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                    Hive helps security teams move from reactive findings to continuous awareness. It aggregates, correlates, and governs insights from across your entire stack.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                     {[
                        { label: "100% Visibility", sub: "Cloud, App, Supply Chain" },
                        { label: "Governed AI", sub: "Auditable reasoning" }
                     ].map((stat, i) => (
                        <div key={i} className="p-6 bg-white border border-slate-200 rounded-3xl">
                           <p className="text-2xl font-black text-hayrok-orange">{stat.label}</p>
                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.sub}</p>
                        </div>
                     ))}
                  </div>
               </motion.div>
               
               <div className="relative">
                  <div className="p-1 w-full bg-white border border-slate-200 rounded-[3rem] shadow-2xl overflow-hidden group">
                     <div className="bg-slate-900 rounded-[2.8rem] p-10 h-[500px] relative overflow-hidden flex flex-col">
                        <div className="absolute inset-0 bg-grid-white opacity-5" />
                        <div className="relative z-10 flex-1 flex flex-col">
                           <div className="flex items-center justify-between mb-10">
                              <div className="flex items-center gap-3">
                                 <div className="w-10 h-10 bg-hayrok-orange rounded-xl flex items-center justify-center text-white shadow-lg">
                                    <Activity size={20} />
                                 </div>
                                 <div>
                                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">System Status</p>
                                    <p className="text-xs font-bold text-white uppercase tracking-tighter">Hive Core Active</p>
                                 </div>
                              </div>
                              <div className="flex gap-2">
                                 <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                              </div>
                           </div>
                           
                           <div className="flex-1 flex flex-col justify-center gap-6">
                              <LiveIntelligenceFeed />
                           </div>

                           <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                              <div className="flex gap-4">
                                 <div className="w-20 h-1.5 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div animate={{ width: ['0%', '100%'] }} transition={{ duration: 4, repeat: Infinity }} className="h-full bg-hayrok-orange" />
                                 </div>
                              </div>
                              <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">Recursive Logic Engine</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Platform Integration Flow */}
      <section className="py-32 border-b border-slate-100 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Ecosystem Architecture</h2>
               <h3 className="text-4xl md:text-7xl font-black text-slate-900 leading-tight tracking-tight uppercase">How Hive Works With <br/> the <span className="text-hayrok-orange italic">Hayrok Platform.</span></h3>
               <p className="text-xl text-slate-500 font-medium mt-6">Hive acts as the central intelligence layer across Hayrok, supporting evidence‑based risk management.</p>
            </div>

            <motion.div 
               variants={staggerContainer}
               initial="initial"
               whileInView="whileInView"
               className="grid md:grid-cols-3 gap-8"
            >
               {[
                 { 
                   title: "Genesis Flow", 
                   desc: "Genesis feeds Hive with security validation results, helping distinguish theoretical exposure from exploitable risk.", 
                   icon: Zap,
                   tag: "Validation Feed"
                 },
                 { 
                   title: "CodeFabrics Sync", 
                   desc: "CodeFabrics extends Hive’s visibility into application and supply‑chain risk, managing exposure before it hits production.", 
                   icon: Code,
                   tag: "SDLC Governance"
                 },
                 { 
                   title: "Unified Perspective", 
                   desc: "Hive consolidates insights from across the entire platform into a unified, auditable CTEM system of record.", 
                   icon: BarChart3,
                   tag: "Central Intelligence"
                 }
               ].map((item, i) => (
                 <motion.div 
                    key={i}
                    variants={fadeInUp}
                    className="p-12 bg-slate-50 border border-slate-200 rounded-[3rem] hover:bg-white hover:border-hayrok-orange transition-all hover:shadow-2xl group flex flex-col"
                 >
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-hayrok-orange mb-10 shadow-sm group-hover:bg-hayrok-orange group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3">
                       <item.icon size={32} strokeWidth={2} />
                    </div>
                    <span className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.4em] mb-4">{item.tag}</span>
                    <h5 className="text-2xl font-black text-slate-900 mb-6 leading-tight">{item.title}</h5>
                    <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                 </motion.div>
               ))}
            </motion.div>
         </div>
      </section>

      {/* Strategic Personas - Stylized Bento */}
      <section className="py-32 bg-slate-50 border-b border-slate-100">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
               <div className="lg:col-span-4 flex flex-col justify-center">
                  <motion.div {...fadeInUp}>
                     <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Adoption Personas</h2>
                     <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                        Built for teams that <br/><span className="text-hayrok-orange">own risk.</span>
                     </h3>
                     <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                        Hive provides the specific lens required for every stakeholder in the security and risk organization.
                     </p>
                     <div className="flex flex-wrap gap-3">
                        {["Finance", "Tech", "Healthcare", "Government"].map((tag) => (
                           <span key={tag} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400">{tag}</span>
                        ))}
                     </div>
                  </motion.div>
               </div>

               <div className="lg:col-span-8">
                  <div className="grid md:grid-cols-2 gap-6">
                     {[
                        { title: "SecOps & Engineering", icon: Shield, col: "bg-blue-500" },
                        { title: "Risk Management Leaders", icon: Users, col: "bg-hayrok-orange" },
                        { title: "App & Product Security", icon: Target, col: "bg-indigo-500" },
                        { title: "GRC & Compliance", icon: Gavel, col: "bg-emerald-500" },
                        { title: "MSSPs (CTEM Services)", icon: Zap, col: "bg-slate-900", span: "md:col-span-2" }
                     ].map((p, i) => (
                        <motion.div 
                           key={i} 
                           initial={{ opacity: 0, scale: 0.95 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           transition={{ delay: i * 0.05 }}
                           className={`p-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all group flex flex-col justify-between ${p.span || ''}`}
                        >
                           <div className="flex items-center justify-between mb-6">
                              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white ${p.col} shadow-lg group-hover:scale-110 transition-transform`}>
                                 <p.icon size={22} />
                              </div>
                              <ChevronRight size={20} className="text-slate-200 group-hover:text-hayrok-orange transition-colors" />
                           </div>
                           <h4 className="text-xl font-black text-slate-900 tracking-tight leading-tight">{p.title}</h4>
                        </motion.div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Strategic Impact Metrics */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Strategic Impact</h2>
               <h3 className="text-4xl md:text-7xl font-black text-slate-900 leading-tight tracking-tight uppercase">Outcome‑Focused <br/> <span className="text-hayrok-orange italic">CTEM Programs.</span></h3>
               <p className="text-xl text-slate-500 font-medium mt-6">Hive helps organizations operate CTEM as an ongoing program, not a periodic exercise.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { label: "Continuous Exposure", desc: "Move from point‑in‑time assessments to continuous exposure management.", icon: Activity, val: "24/7" },
                 { label: "Prioritization Accuracy", desc: "Improve prioritization accuracy by distinguishing exploitable risk.", icon: Target, val: "99%" },
                 { label: "Risk Tracking", desc: "Track risk reduction over time with historical trending metrics.", icon: TrendingUp, val: "Real-time" },
                 { label: "Business Context", desc: "Communicate security posture in business‑relevant terms.", icon: Briefcase, val: "Board-Ready" }
               ].map((item, i) => (
                 <motion.div 
                    key={i}
                    variants={fadeInUp}
                    className="p-10 bg-slate-50 border border-slate-200 rounded-[2.5rem] hover:bg-white hover:border-hayrok-orange transition-all hover:shadow-xl group"
                 >
                    <div className="flex items-center justify-between mb-8">
                       <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-hayrok-orange shadow-sm group-hover:bg-hayrok-orange group-hover:text-white transition-all">
                          <item.icon size={24} strokeWidth={2.5} />
                       </div>
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.val}</span>
                    </div>
                    <h5 className="text-xl font-black text-slate-900 mb-4 leading-tight">{item.label}</h5>
                    <p className="text-slate-400 font-medium leading-relaxed text-sm">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Governance by Design Block */}
      <section className="py-32">
         <div className="container mx-auto px-6">
            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="bg-slate-900 border border-slate-800 rounded-[4rem] p-12 md:p-24 overflow-hidden relative shadow-2xl text-white group"
            >
               <div className="absolute top-0 right-0 p-24 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Scale size={300} className="text-hayrok-orange" />
               </div>
               
               <div className="max-w-4xl relative z-10">
                  <div className="inline-flex items-center gap-3 text-hayrok-orange font-black text-[10px] uppercase tracking-[0.5em] mb-10">
                     <Lock size={16} /> Governance by Design
                  </div>
                  <h3 className="text-4xl md:text-8xl font-black text-white mb-10 tracking-tight leading-[0.9] uppercase">
                    Reviewable <br/> <span className="text-hayrok-orange italic tracking-tighter">and Defensible.</span>
                  </h3>
                  <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed mb-16 max-w-2xl">
                    Hive is built for environments where security decisions must be reviewable and defensible. We provide the oversight necessary to adopt AI security safely.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-10">
                     {[
                        { label: "Policy‑Bound Workflows", icon: Gavel, d: "Automation follows strict OPA boundaries." },
                        { label: "Clear Accountability", icon: UserCheck, d: "Explicit decision lineage for every action." },
                        { label: "HITL Decision Support", icon: Users, d: "Human oversight for critical risk transitions." },
                        { label: "Persistent Records", icon: History, d: "Tamper-proof audit trails for compliance." }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-6 items-start">
                           <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-hayrok-orange shrink-0 group-hover:scale-110 transition-transform">
                              <item.icon size={24} />
                           </div>
                           <div>
                              <span className="text-base font-black text-white uppercase tracking-widest block mb-2">{item.label}</span>
                              <p className="text-sm text-slate-500 font-medium">{item.d}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Get Started Section */}
      <section className="py-40 border-t border-slate-100 bg-white">
         <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-12">Program Ignition</h2>
               <h3 className="text-5xl md:text-9xl font-black text-slate-900 mb-12 tracking-tight leading-[0.85] uppercase">
                 Unlock <br/> <span className="text-hayrok-orange italic tracking-tighter">The Hive.</span>
               </h3>
               <p className="text-xl md:text-3xl text-slate-500 font-medium mb-16 leading-relaxed max-w-3xl mx-auto">
                 Learn how Hive supports CTEM risk intelligence and governance as part of the Hayrok platform.
               </p>
               <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                 <button onClick={() => onNavigate?.('contact')} className="bg-hayrok-orange text-white px-16 py-8 rounded-[2rem] text-2xl font-black hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/30">
                    Request a Demo
                 </button>
                 <button onClick={() => onNavigate?.('platform')} className="px-16 py-8 rounded-[2rem] text-2xl font-black text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all bg-white shadow-sm flex items-center justify-center gap-4 group">
                    Explore Use Cases <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                 </button>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Footer Signature */}
      <div className="h-24 flex items-center justify-center border-t border-slate-100 bg-slate-50">
         <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.6em] text-center px-6 leading-relaxed max-w-4xl">
            Hive supports Continuous Threat Exposure Management (CTEM) by providing centralized risk intelligence, contextual prioritization, and governance‑aligned reporting within the Hayrok Platform.
         </p>
      </div>
    </div>
  );
};