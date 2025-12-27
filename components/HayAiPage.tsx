import React from 'react';
import { motion } from 'framer-motion';
// Add UserCheck to the imported icons from lucide-react
import { 
  Bot, Brain, Cpu, Zap, Network, ShieldCheck, 
  Lock, Search, ArrowRight, CheckCircle2, Terminal,
  History, Sparkles, MessageSquare, Fingerprint, Eye,
  Users, UserCheck, FileSearch, Layers, Gavel, Activity,
  Briefcase, ShieldAlert, ListChecks, Workflow,
  TrendingUp, Scale, Database
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

export const HayAiPage: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FCFCFA] min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-12 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <IntelligenceFabric density={1.8} isDark={false} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,95,0,0.03)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-50/50 border border-orange-100/50 text-hayrok-orange text-[10px] font-black shadow-sm mx-auto mb-10 tracking-[0.4em] uppercase backdrop-blur-sm"
          >
            <Bot size={12} className="animate-pulse" />
            The Reasoning Layer Behind Hayrok
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="text-6xl md:text-[8rem] font-black tracking-tight leading-[0.9] text-slate-900 mb-12"
          >
            Governed <br />
            <span className="text-hayrok-orange italic font-light tracking-tighter">Intelligence.</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium mb-16"
          >
            Hay‑AI coordinates agent‑based capabilities, applies graph‑based reasoning, and supports decision workflows across CTEM and Security Validation — while remaining governed, explainable, and human‑controlled.
          </motion.p>

          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button onClick={() => onNavigate?.('contact')} className="w-full sm:w-auto bg-hayrok-orange hover:bg-orange-600 text-white px-14 py-6 rounded-full font-black text-lg flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-[0_20px_40px_-10px_rgba(255,95,0,0.3)]">
              Request a Demo
            </button>
            <button onClick={() => onNavigate?.('platform')} className="w-full sm:w-auto px-14 py-6 rounded-full font-black text-lg text-slate-900 border border-slate-200 hover:bg-white transition-all shadow-sm">
              Explore the Platform
            </button>
          </motion.div>
        </div>
      </section>

      {/* Definitive Guardrails Section (Is/Is Not) */}
      <section className="py-20">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10">
               {/* What it IS */}
               <motion.div 
                  {...fadeInUp}
                  className="p-12 md:p-16 bg-white border border-slate-100 rounded-[4rem] shadow-xl relative overflow-hidden group"
               >
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-50 rounded-full blur-[80px] opacity-40" />
                  <h3 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.5em] mb-10 flex items-center gap-3">
                     <CheckCircle2 size={16} /> What Hay‑AI Is
                  </h3>
                  <ul className="space-y-6">
                     {[
                        { title: "The Orchestration Layer", desc: "Coordinates reasoning across the Hayrok platform." },
                        { title: "Agentic Specialist Hub", desc: "Responsible for coordinating agent-based workflows." },
                        { title: "Graph-Based Logic", desc: "Designed around relationships between assets and exposure." },
                        { title: "Evidence-Based Support", desc: "Built to support governed, evidence-based decision-making." }
                     ].map((item, i) => (
                        <li key={i} className="flex gap-4">
                           <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                           <div>
                              <p className="font-black text-slate-900 text-lg tracking-tight">{item.title}</p>
                              <p className="text-slate-500 font-medium text-sm">{item.desc}</p>
                           </div>
                        </li>
                     ))}
                  </ul>
               </motion.div>

               {/* What it IS NOT */}
               <motion.div 
                  {...fadeInUp}
                  className="p-12 md:p-16 bg-slate-900 border border-white/5 rounded-[4rem] shadow-2xl relative overflow-hidden group text-white"
               >
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] opacity-40" />
                  <h3 className="text-[10px] font-black text-red-400 uppercase tracking-[0.5em] mb-10 flex items-center gap-3">
                     <ShieldAlert size={16} /> What Hay‑AI Is Not
                  </h3>
                  <ul className="space-y-6">
                     {[
                        { title: "Autonomous Decision-Maker", desc: "It does not make final security decisions without oversight." },
                        { title: "Self-Directed Attack Engine", desc: "No unmapped or uncontrolled exploitation activity." },
                        { title: "Security Team Replacement", desc: "Designed to augment humans, not replace accountability." },
                        { title: "Opaque 'Black-Box' AI", desc: "Every reasoning path is reviewable, explainable, and auditable." }
                     ].map((item, i) => (
                        <li key={i} className="flex gap-4">
                           <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                           <div>
                              <p className="font-black text-white text-lg tracking-tight">{item.title}</p>
                              <p className="text-slate-400 font-medium text-sm">{item.desc}</p>
                           </div>
                        </li>
                     ))}
                  </ul>
               </motion.div>
            </div>
            
            {/* Safe Definition Box */}
            <motion.div {...fadeInUp} className="mt-12 p-10 bg-[#F8F9F5] border border-slate-200 rounded-[3rem] text-center">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-4">Canonical Definition</p>
               <p className="text-xl md:text-2xl text-slate-700 font-bold leading-relaxed max-w-4xl mx-auto italic">
                  “Hay‑AI is a governed intelligence and orchestration layer that supports CTEM decision‑making through graph‑based reasoning, agent coordination, and human‑reviewable workflows.”
               </p>
            </motion.div>
         </div>
      </section>

      {/* Core Capabilities - Bento Grid */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Core Capabilities</h2>
               <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight">Recursive <br/><span className="text-hayrok-orange italic font-light">Security Logic.</span></h3>
               <p className="text-xl text-slate-500 font-medium mt-6">Hay‑AI functions as the brain behind the platform’s workflows, moving beyond data aggregation to true reasoning.</p>
            </div>

            <motion.div 
               variants={staggerContainer}
               initial="initial"
               whileInView="whileInView"
               className="grid md:grid-cols-2 gap-8"
            >
               {[
                 { 
                   title: "Intelligence & Agent Orchestration", 
                   desc: "Sequencing validation, correlation, and enrichment activities across specialized 'bees'. Ensures workflows follow strict governance constraints.", 
                   icon: Zap,
                   tag: "Specialized Execution",
                   accent: "bg-orange-50 text-hayrok-orange"
                 },
                 { 
                   title: "Graph‑Based Reasoning", 
                   desc: "Understands relationships across assets, applications, identities, and dependencies to reason about exposure chains and compounding risk.", 
                   icon: Network,
                   tag: "Contextual Awareness",
                   accent: "bg-indigo-50 text-indigo-500"
                 },
                 { 
                   title: "Zero‑Day Emulation", 
                   desc: "Controlled hypothesis‑driven analysis of unknown exploit conditions and novel attack paths using safe modeling and validation workflows.", 
                   icon: ShieldAlert,
                   tag: "Safe Threat Modeling",
                   accent: "bg-rose-50 text-rose-500"
                 },
                 { 
                   title: "Decision Workflow Orchestration", 
                   desc: "Drives validation scheduling, retesting timing, and how evidence affects prioritization — all human-reviewable and recorded in Hive.", 
                   icon: Workflow,
                   tag: "Programmatic Rigor",
                   accent: "bg-emerald-50 text-emerald-500"
                 }
               ].map((item, i) => (
                 <motion.div 
                    key={i}
                    variants={fadeInUp}
                    className="p-10 md:p-12 bg-[#FBFBF9] border border-slate-100 rounded-[3.5rem] hover:bg-white hover:shadow-2xl transition-all group flex flex-col"
                 >
                    <div className="flex items-center justify-between mb-10">
                       <div className={`w-16 h-16 ${item.accent} rounded-[1.8rem] flex items-center justify-center shadow-sm transition-all group-hover:scale-110 group-hover:rotate-2`}>
                          <item.icon size={28} strokeWidth={2} />
                       </div>
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.tag}</span>
                    </div>
                    <h5 className="text-2xl font-black text-slate-900 mb-4 leading-tight tracking-tight">{item.title}</h5>
                    <p className="text-slate-500 text-lg font-medium leading-relaxed">{item.desc}</p>
                 </motion.div>
               ))}
            </motion.div>
         </div>
      </section>

      {/* Hive Synergy - Separation of Responsibilities */}
      <section className="py-32 bg-[#F8F9F5]">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-20 items-center">
               <motion.div className="lg:col-span-5" {...fadeInUp}>
                  <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Platform Synergy</h2>
                  <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight">
                    How Hay‑AI <br/> works with <span className="text-hayrok-orange">Hive.</span>
                  </h3>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                    Hay‑AI and Hive operate together with a clear separation of responsibilities to ensure both agility and accountability.
                  </p>
                  
                  <div className="p-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4">Core Model</p>
                     <p className="text-xl font-bold text-slate-900">“Hay‑AI reasons and orchestrates. Hive governs and records.”</p>
                  </div>
               </motion.div>

               <div className="lg:col-span-7 relative">
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                           <Bot size={140} className="text-hayrok-orange" />
                        </div>
                        <h4 className="text-hayrok-orange font-black text-[10px] uppercase tracking-[0.4em] mb-10">Reasoning Core</h4>
                        <h5 className="text-3xl font-black mb-8 leading-tight">Hay‑AI</h5>
                        <ul className="space-y-4 text-slate-400 font-medium">
                           <li className="flex gap-3">
                              <CheckCircle2 size={16} className="text-hayrok-orange shrink-0 mt-1" />
                              Orchestrates agent workflows
                           </li>
                           <li className="flex gap-3">
                              <CheckCircle2 size={16} className="text-hayrok-orange shrink-0 mt-1" />
                              Applies graph intelligence
                           </li>
                           <li className="flex gap-3">
                              <CheckCircle2 size={16} className="text-hayrok-orange shrink-0 mt-1" />
                              Produces recommendations
                           </li>
                        </ul>
                     </div>
                     <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                           <Database size={140} className="text-hayrok-orange" />
                        </div>
                        <h4 className="text-slate-400 font-black text-[10px] uppercase tracking-[0.4em] mb-10">Governance Hub</h4>
                        <h5 className="text-3xl font-black mb-8 leading-tight">Hive</h5>
                        <ul className="space-y-4 text-slate-500 font-medium">
                           <li className="flex gap-3">
                              <CheckCircle2 size={16} className="text-hayrok-orange shrink-0 mt-1" />
                              Governs and records decisions
                           </li>
                           <li className="flex gap-3">
                              <CheckCircle2 size={16} className="text-hayrok-orange shrink-0 mt-1" />
                              Maintains audit-ready evidence
                           </li>
                           <li className="flex gap-3">
                              <CheckCircle2 size={16} className="text-hayrok-orange shrink-0 mt-1" />
                              Tracks risk movement
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* The Bee Colony Model */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="bg-[#111316] border border-white/5 rounded-[5rem] p-12 md:p-32 overflow-hidden relative shadow-2xl text-white group">
               <div className="absolute top-0 right-0 p-32 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <Sparkles size={400} className="text-hayrok-orange" />
               </div>
               
               <div className="max-w-4xl relative z-10">
                  <div className="inline-flex items-center gap-3 text-hayrok-orange font-black text-[10px] uppercase tracking-[0.5em] mb-12">
                     <Layers size={16} /> Orchestrated Intelligence
                  </div>
                  <h3 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-[0.02em] leading-[0.85] uppercase">
                    The Bee <br/> <span className="text-hayrok-orange italic font-light lowercase">Colony</span> <br/> Model.
                  </h3>
                  <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed mb-20 max-w-2xl">
                    Specialized agents collaboration, orchestrated by Hay‑AI to ensure scale and adaptability without sacrificing governance.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-16">
                     {[
                        { label: "Specialized Tasks", d: "Each agent (“bee”) performs a specific analytical task.", icon: Bot },
                        { label: "Determined Collaboration", d: "Hay‑AI determines how and when agents interact.", icon: Workflow },
                        { label: "No Autonomous Decisions", d: "No agent makes final risk decisions alone.", icon: ListChecks },
                        { label: "Human Authority", d: "Humans retain approval authority for all critical steps.", icon: UserCheck }
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
            </div>
         </div>
      </section>

      {/* AI Governance by Design */}
      <section className="py-32 bg-[#F8F9F5]">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Governance by Design</h2>
               <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">Explicitly aligned <br/> with <span className="text-hayrok-orange italic">AI TRiSM.</span></h3>
               <p className="text-xl text-slate-500 font-medium mt-6">Governance Statement: Hay‑AI operates as governed intelligence, not autonomous control.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "HITL Decisioning", desc: "Human-in-the-loop oversight is mandatory for impact.", icon: UserCheck },
                { label: "Explainable Outputs", desc: "Every result features reviewable, plain-text logic.", icon: Eye },
                { label: "Policy-Bound", desc: "Orchestration is strictly confined by OPA rules.", icon: Gavel },
                { label: "Full Auditability", desc: "Decision lineage is permanently recorded in Hive.", icon: FileSearch }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white border border-slate-200 rounded-[3rem] shadow-sm hover:shadow-xl transition-all h-full">
                   <div className="w-12 h-12 bg-[#FBFBF9] rounded-2xl flex items-center justify-center text-hayrok-orange mb-6 shadow-sm">
                      <item.icon size={24} />
                   </div>
                   <h5 className="text-lg font-black text-slate-900 mb-3 uppercase tracking-tight">{item.label}</h5>
                   <p className="text-xs text-slate-400 font-bold leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* Strategic Integration Strip */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="flex items-center gap-6 mb-16">
               <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.5em] shrink-0">Platform Presence</span>
               <div className="h-px w-full bg-slate-100" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
               {[
                  { title: "Hive", d: "Orchestrates prioritization logic and reporting." },
                  { title: "Genesis", d: "Guides validation paths and interprets results." },
                  { title: "CodeFabrics", d: "Coordinates AppSec and supply chain triggers." },
                  { title: "SurfaceIQ", d: "Reasons over external surface relationships." },
                  { title: "DetectIQ", d: "Incorporate detection context into logic." }
               ].map((mod, i) => (
                  <div key={i} className="p-8 border border-slate-100 rounded-[2.5rem] bg-slate-50 hover:bg-white hover:shadow-lg transition-all group">
                     <p className="text-hayrok-orange font-black text-lg mb-2">{mod.title}</p>
                     <p className="text-[10px] font-bold text-slate-400 leading-relaxed uppercase">{mod.d}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Final Outcome Section */}
      <section className="py-40 bg-white border-t border-slate-100">
         <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
               <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.4em] mb-12">Experience Hay‑AI</h2>
               <h3 className="text-6xl md:text-[11rem] font-black text-slate-900 mb-16 tracking-tight leading-[0.8] uppercase">
                 Reasoning <br/> <span className="text-hayrok-orange italic font-light tracking-tighter">at Scale.</span>
               </h3>
               <p className="text-xl md:text-3xl text-slate-400 font-medium mb-20 leading-relaxed max-w-3xl mx-auto">
                 See how Hay‑AI powers governed intelligence, agent orchestration, and graph‑based reasoning across the platform.
               </p>
               <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                 <button onClick={() => onNavigate?.('contact')} className="w-full md:w-auto bg-hayrok-orange text-white px-16 py-8 rounded-full text-2xl font-black hover:bg-orange-600 transition-all transform hover:scale-105 shadow-[0_30px_60px_-15px_rgba(255,95,0,0.4)]">
                    Request a Demo
                 </button>
                 <button onClick={() => onNavigate?.('platform')} className="w-full md:w-auto px-16 py-8 rounded-full text-2xl font-black text-slate-900 border border-slate-100 hover:bg-[#F8F9F5] transition-all flex items-center justify-center gap-4 group">
                    Explore Platform <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                 </button>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Analyst-Safe Footer */}
      <div className="h-32 flex items-center justify-center border-t border-slate-100 bg-[#FCFCFA]">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            Hay‑AI is a governed intelligence and orchestration layer that supports CTEM and BAS‑aligned validation through graph‑based reasoning and human‑reviewable workflows. It does not operate autonomously and is designed for enterprise and regulated environments.
         </p>
      </div>
    </div>
  );
};
