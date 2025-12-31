import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, Package, Layers, ShieldCheck, Zap, Lock, 
  ArrowRight, CheckCircle2, History, Scale, Users, 
  Sparkles, Activity, FileText, Search, Cpu, Key,
  Box, GitBranch, Terminal, Layout, Briefcase, 
  ChevronRight, Database, UserCheck, Gavel,
  BarChart3, Target, FlaskConical, Eye, Info,
  AlertTriangle, ShieldAlert, Bot
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

const PipelineVisualizer = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto py-20 px-10 bg-slate-900 rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden group">
      <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
      <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity duration-1000">
        <GitBranch size={280} className="text-hayrok-orange" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center gap-12 mb-16">
          {[
            { icon: Code, label: "Code" },
            { icon: Package, label: "Build" },
            { icon: Box, label: "Deploy" }
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                <step.icon size={28} />
              </div>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{step.label}</span>
            </div>
          ))}
        </div>

        <motion.div 
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-full p-8 bg-white/5 border border-hayrok-orange/30 rounded-3xl backdrop-blur-xl relative"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-hayrok-orange animate-pulse" />
              <span className="text-xs font-black text-white uppercase tracking-widest">CodeFabrics Ingestion</span>
            </div>
            <div className="px-3 py-1 rounded-lg bg-hayrok-orange/20 border border-hayrok-orange/30 text-[9px] font-black text-hayrok-orange uppercase tracking-widest">BYOS Active</div>
          </div>
          
          <div className="space-y-3 font-mono text-[10px] text-slate-400">
            <div className="flex gap-4">
              <span className="text-hayrok-orange opacity-50">[SCANNER_SYNC]</span>
              <span className="text-white">Normalizing Snyk + Trivy findings...</span>
            </div>
            <div className="flex gap-4">
               <span className="text-hayrok-orange opacity-50">[CONTEXT_MAP]</span>
               <span>Mapping transitive dependency risk to production VPC...</span>
            </div>
            <div className="flex gap-4">
               <span className="text-hayrok-orange opacity-50">[DECISION_INIT]</span>
               <span className="text-hayrok-orange font-bold">Policy block triggered: Insecure inference path.</span>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 h-px w-full bg-white/10 relative">
          <motion.div 
            initial={{ left: "0%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -translate-y-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-hayrok-orange to-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export const CodeFabricsPage: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-12 overflow-x-hidden relative">
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-slate-100">
        <IntelligenceFabric density={1.3} isDark={false} />
        <div className="absolute inset-0 bg-grid-white opacity-[0.05] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-white border border-slate-200 text-slate-900 text-[11px] font-black uppercase tracking-[0.35em] shadow-2xl shadow-orange-500/10 mx-auto mb-10 group hover:border-hayrok-orange/40 transition-all duration-500"
          >
            <div className="flex items-center gap-2">
               <span className="text-hayrok-orange text-xl font-mono">&gt;</span>
               <motion.span 
                 animate={{ opacity: [1, 0, 1] }} 
                 transition={{ duration: 1, repeat: Infinity }} 
                 className="w-3 h-[3px] bg-hayrok-orange rounded-full"
               />
            </div>
            Application & Software Supply Chain Exposure
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[8.5rem] font-black tracking-tight leading-[0.85] text-slate-900 mb-10 uppercase"
          >
            Manage Risk <br />
            <span className="text-hayrok-orange italic tracking-tighter">Before It Ships.</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-3xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium mb-12"
          >
            CodeFabrics is Hayrok’s application and software supply-chain exposure capability. It helps organizations understand, prioritize, and validate risk across modern applications—without replacing your existing AppSec stack.
          </motion.p>

          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={() => onNavigate?.('demo')} className="w-full sm:w-auto bg-hayrok-orange hover:bg-orange-600 text-white px-12 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
              Request a Demo
            </button>
            <button onClick={() => onNavigate?.('platform')} className="w-full sm:w-auto px-12 py-6 rounded-2xl font-black text-xl text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all bg-white shadow-sm flex items-center gap-3">
              <Layers size={20} className="text-hayrok-orange" />
              Explore the Platform
            </button>
          </motion.div>
          
          <p className="mt-12 text-sm font-bold text-slate-400 uppercase tracking-[0.3em]">Governed, Validated, and CTEM-Aligned.</p>
        </div>
      </section>

      {/* The Problem: Why CodeFabrics Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">The Triage Crisis</h2>
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight uppercase">
                AppSec Doesn’t Lack Findings. <br/>
                <span className="text-slate-400 italic">It Lacks Decision Support.</span>
              </h3>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
                Most application security programs generate far more findings than teams can realistically triage, validate, or act on. Fragile severity signals and disconnected tools create noise instead of risk reduction.
              </p>
              
              <div className="space-y-4">
                 {[
                   "Fragmented results across multiple scanners",
                   "Conflicting severity and prioritization signals",
                   "Difficulty determining which issues are truly exploitable",
                   "Weak linkage between AppSec findings and enterprise risk",
                   "Poor visibility into whether remediation actually reduces risk"
                 ].map((problem, i) => (
                    <div key={i} className="flex gap-4 items-center">
                       <ShieldAlert size={20} className="text-red-400 shrink-0" />
                       <span className="text-lg font-bold text-slate-700">{problem}</span>
                    </div>
                 ))}
              </div>
            </motion.div>

            <div className="relative">
               <PipelineVisualizer />
               <div className="mt-12 p-8 bg-white border border-slate-200 rounded-[3rem] shadow-sm italic text-slate-500 font-medium text-center">
                "CodeFabrics addresses these challenges by acting as a unifying exposure and governance layer—not another scanner."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What CodeFabrics Is/Is Not */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div {...fadeInUp} className="bg-slate-900 rounded-[4rem] p-12 md:p-16 text-white relative overflow-hidden shadow-2xl h-full">
               <div className="absolute top-0 right-0 p-12 opacity-5">
                  <CheckCircle2 size={300} className="text-hayrok-orange" />
               </div>
               <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-12">CodeFabrics Is</h3>
               <ul className="space-y-8 relative z-10">
                  {[
                    { t: "Exposure Layer", d: "An application and software supply-chain exposure layer." },
                    { t: "Scanner-Agnostic", d: "Supporting Bring Your Own Scanner (BYOS) models." },
                    { t: "CTEM Integrated", d: "Unified governance via Hive system of record." },
                    { t: "Validation Native", d: "Connected to BAS-aligned validation through Genesis." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-5">
                       <div className="w-1.5 h-1.5 rounded-full bg-hayrok-orange mt-2.5 shrink-0" />
                       <div>
                          <p className="text-xl font-black uppercase tracking-tight mb-1">{item.t}</p>
                          <p className="text-slate-400 font-medium">{item.d}</p>
                       </div>
                    </li>
                  ))}
               </ul>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-slate-50 border border-slate-200 rounded-[4rem] p-12 md:p-16 h-full flex flex-col">
               <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-12">CodeFabrics Is Not</h3>
               <ul className="space-y-8 flex-1">
                  {[
                    { t: "Tool Replacement", d: "A replacement for your customer-preferred scanners." },
                    { t: "One-Engine Scanner", d: "A single 'all-in-one' monolithic scanning engine." },
                    { t: "Unmanaged Automation", d: "An autonomous decision-making system without oversight." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-5">
                       <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0" />
                       <div>
                          <p className="text-xl font-black text-slate-900 uppercase tracking-tight mb-1">{item.t}</p>
                          <p className="text-slate-500 font-medium">{item.d}</p>
                       </div>
                    </li>
                  ))}
               </ul>
               <div className="mt-12 pt-12 border-t border-slate-200">
                  <p className="text-3xl font-black italic text-slate-900">
                    "CodeFabrics governs risk signals. <br/> <span className="text-hayrok-orange">Humans make decisions.</span>"
                  </p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exposure Coverage: 6 Pillars Grid */}
      <section className="py-32 bg-[#FCFCFA] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-4xl mx-auto mb-24">
            <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Multi-Domain Coverage</h2>
            <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">Full SDLC <br/><span className="text-hayrok-orange italic">Exposure Context.</span></h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                n: "01", t: "Supply Chain Risk", d: "SCA + SBOMs. Understand which third-party components and transitive dependencies introduce material risk.", 
                icon: Package, tag: "SCA" 
              },
              { 
                n: "02", t: "Infrastructure as Code", d: "IaC Scanning (Terraform, CloudFormation, ARM). Identify configuration drift and decisions enabling attack paths.", 
                icon: GitBranch, tag: "IaC" 
              },
              { 
                n: "03", t: "Container & Image", d: "Base image inheritance and artifact scanning. Govern what ships into production and what it enables.", 
                icon: Box, tag: "REGISTRY" 
              },
              { 
                n: "04", t: "Secrets & Identity", d: "Determine which leaked API keys, tokens, or credentials meaningfully expand attacker reach across pipelines.", 
                icon: Key, tag: "IDENTITY" 
              },
              { 
                n: "05", t: "Application & API", d: "SAST & logic analysis. Separate theoretical business logic flaws from reachable and exploitable weaknesses.", 
                icon: Code, tag: "LOGIC" 
              },
              { 
                n: "06", t: "AI, ML & LLM Risk", d: "AI-aware security. Govern unique risks like prompt injection, training data exposure, and insecure inference paths.", 
                icon: Cpu, tag: "AI TRISM" 
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                className="p-10 bg-white border border-slate-200 rounded-[3.5rem] hover:shadow-2xl hover:border-hayrok-orange/30 transition-all group h-full flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                   <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-hayrok-orange group-hover:bg-hayrok-orange group-hover:text-white transition-all transform group-hover:rotate-3 shadow-sm">
                      <pillar.icon size={24} strokeWidth={2.5} />
                   </div>
                   <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{pillar.tag}</span>
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight uppercase">{pillar.t}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed flex-1">{pillar.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BYOS Model Section */}
      <section className="py-32 bg-white border-y border-slate-100">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <motion.div {...fadeInUp}>
                  <div className="inline-flex items-center gap-3 bg-hayrok-orange/10 border border-hayrok-orange/30 px-5 py-2 rounded-2xl text-hayrok-orange text-[10px] font-black uppercase tracking-[0.4em] mb-10">
                     <History size={16} /> Asset Preservation
                  </div>
                  <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight uppercase">Bring Your <br/> <span className="text-hayrok-orange italic">Own Scanner.</span></h3>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                    Preserve your existing scanner investments while upgrading to governed decision support. CodeFabrics complements industry-standard tools regardless of vendor.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { label: "Snyk / Mend", icon: ShieldCheck },
                      { label: "Veracode / Checkmarx", icon: ShieldCheck },
                      { label: "Trivy / Grype", icon: ShieldCheck },
                      { label: "OWASP Dep-Check", icon: ShieldCheck }
                    ].map((tool, i) => (
                      <div key={i} className="flex gap-4 items-center p-4 bg-slate-50 border border-slate-100 rounded-2xl group hover:bg-white hover:shadow-md transition-all">
                        <CheckCircle2 className="text-hayrok-orange" size={20} />
                        <span className="font-bold text-slate-700 text-sm">{tool.label}</span>
                      </div>
                    ))}
                  </div>
               </motion.div>

               <div className="bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl h-[500px] flex flex-col items-center justify-center text-center">
                  <div className="absolute inset-0 bg-grid-white opacity-5" />
                  <div className="relative z-10 max-w-sm">
                     <p className="text-3xl font-black italic mb-10 leading-tight">“One normalized data model. <span className="text-hayrok-orange">Unified governance.</span> Multiple scanner sources.”</p>
                     <div className="flex items-center justify-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-hayrok-orange animate-pulse" />
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">BYOS Interoperability</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Decision Engine: Context & Validation */}
      <section className="py-32 bg-slate-50">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">The Decision Engine</h2>
               <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">Findings to <br/><span className="text-hayrok-orange italic">Evidence.</span></h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
               <div className="p-12 md:p-16 bg-white border border-slate-200 rounded-[4rem] group hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                     <Database size={32} />
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Contextual Risk Correlation</h4>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed mb-8">
                     CodeFabrics enriches scanner findings with application, service, and environment context. Understand dependency relationships and ownership metadata before acting.
                  </p>
                  <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                     <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1.5 }} className="h-full bg-blue-600" />
                  </div>
               </div>

               <div className="p-12 md:p-16 bg-white border border-slate-200 rounded-[4rem] group hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 bg-orange-50 text-hayrok-orange rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                     <Zap size={32} />
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Validation‑Driven Support</h4>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed mb-8">
                     Direct integration with Genesis enables controlled, BAS‑aligned validation. Confirm whether vulnerabilities are actually exploitable under current conditions.
                  </p>
                  <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                     <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1.5, delay: 0.2 }} className="h-full bg-hayrok-orange" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Governance & AI block */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-stretch">
               <div className="lg:col-span-8">
                  <motion.div 
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     className="bg-[#111316] border border-white/5 rounded-[5rem] p-12 md:p-24 overflow-hidden relative shadow-2xl text-white group h-full"
                  >
                     <div className="absolute top-0 right-0 p-32 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                        <Gavel size={400} className="text-hayrok-orange" />
                     </div>
                     
                     <div className="max-w-4xl relative z-10">
                        <div className="inline-flex items-center gap-3 text-hayrok-orange font-black text-[10px] uppercase tracking-[0.5em] mb-12">
                           <Lock size={16} /> Governance through Hive
                        </div>
                        <h3 className="text-5xl md:text-[6rem] font-black text-white mb-10 tracking-[0.02em] leading-[0.85] uppercase">
                          Defensible <br/> <span className="text-hayrok-orange italic font-light lowercase">AppSec</span> <br/> Decisions.
                        </h3>
                        <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed mb-20 max-w-2xl">
                          All CodeFabrics findings flow into Hive, Hayrok’s system of record. Ensure application risk decisions are traceable, reviewable, and audit‑ready.
                        </p>
                        
                        <div className="grid sm:grid-cols-2 gap-10">
                           {[
                              { label: "Decision Trace", d: "Traceable prioritization and acceptance lineage.", icon: History },
                              { label: "Exec Reporting", d: "Audit-ready risk movement tracking over time.", icon: FileText }
                           ].map((item, i) => (
                              <div key={i} className="flex gap-6 items-start">
                                 <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-hayrok-orange shrink-0">
                                    <item.icon size={20} />
                                 </div>
                                 <div>
                                    <span className="text-lg font-black text-white uppercase tracking-widest block mb-2">{item.label}</span>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.d}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </motion.div>
               </div>

               <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-[5rem] p-12 flex flex-col justify-center relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                     <Bot size={180} className="text-hayrok-orange" />
                  </div>
                  <div className="relative z-10">
                     <div className="flex items-center gap-3 text-hayrok-orange font-black text-[10px] uppercase tracking-[0.4em] mb-10">
                        <Sparkles size={16} /> Hay-AI Integration
                     </div>
                     <h4 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Recursive Reasoning</h4>
                     <p className="text-slate-500 font-medium leading-relaxed mb-8">
                        Hay-AI supports CodeFabrics with graph-based reasoning across application, dependency, and exposure relationships.
                     </p>
                     <ul className="space-y-4">
                        {["Orchestrated workflows", "Contextual prioritization", "Explainable narratives"].map((txt, i) => (
                           <li key={i} className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                              <CheckCircle2 size={14} className="text-hayrok-orange" /> {txt}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTEM Alignment Flow */}
      <section className="py-32 bg-[#FCFCFA]">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Framework Alignment</h2>
               <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">The CTEM <br/><span className="text-hayrok-orange italic">Lifecycle.</span></h3>
               <p className="text-xl text-slate-500 font-medium mt-10">AppSec operating as a first‑class input to enterprise exposure management:</p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
               {[
                  { s: "Discover", l: "Aggregate application & supply-chain exposure.", i: Search },
                  { s: "Prioritize", l: "Enrich findings with context and evidence.", i: Target },
                  { s: "Validate", l: "Integrate BAS-aligned validation via Genesis.", i: Zap },
                  { s: "Mobilize", l: "Track remediation and measurable risk reduction.", i: TrendingUpIcon }
               ].map((step, i) => (
                  <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] text-center hover:bg-white hover:shadow-xl transition-all group">
                     <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-hayrok-orange mx-auto mb-6 group-hover:scale-110 transition-transform shadow-sm">
                        <step.i size={24} />
                     </div>
                     <p className="text-hayrok-orange font-black uppercase text-[10px] tracking-[0.3em] mb-2">{step.s}</p>
                     <p className="text-sm font-bold text-slate-600 leading-snug">{step.l}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Target Audience Bento */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <motion.div {...fadeInUp}>
                  <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-10 tracking-tight uppercase">Who is <br/> <span className="text-hayrok-orange italic">CodeFabrics For?</span></h3>
                  <div className="grid grid-cols-1 gap-6">
                     {[
                        "Application Security teams",
                        "DevSecOps and platform engineering teams",
                        "Security engineering and exposure management teams",
                        "Enterprises running CTEM programs at scale",
                        "Organizations with heterogeneous AppSec tooling"
                     ].map((p, i) => (
                        <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all cursor-default">
                           <CheckCircle2 className="text-hayrok-orange shrink-0 mt-0.5" size={20} />
                           <span className="font-bold text-slate-700 text-sm uppercase tracking-tight">{p}</span>
                        </div>
                     ))}
                  </div>
               </motion.div>

               <div className="bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl group flex flex-col justify-center">
                  <div className="absolute inset-0 bg-grid-white opacity-5" />
                  <h4 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-12 flex items-center gap-3">
                     <Briefcase size={16} /> Business Outcomes
                  </h4>
                  <ul className="space-y-8 relative z-10">
                     {[
                        { label: "Noise Reduction", desc: "Reduce noise from disconnected scanner findings." },
                        { label: "Confident Prioritization", desc: "Prioritize application risk with confidence." },
                        { label: "Evidence-Backed", desc: "Validate what actually matters." },
                        { label: "Measure Progress", desc: "Demonstrate measurable risk reduction over time." }
                     ].map((val, i) => (
                        <div key={i} className="flex gap-4">
                           <div className="text-hayrok-orange font-black text-xl italic">{i+1}.</div>
                           <div>
                              <p className="text-xl font-black mb-1 uppercase tracking-tight">{val.label}</p>
                              <p className="text-sm text-slate-400 font-medium">{val.desc}</p>
                           </div>
                        </div>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 bg-[#FCFCFA] border-t border-slate-100 text-center">
         <div className="container mx-auto px-6 relative z-10">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-12">Get Started With CodeFabrics</h2>
               <h3 className="text-5xl md:text-[9rem] font-black text-slate-900 mb-12 tracking-tight leading-[0.85] uppercase">
                 Findings <br/> <span className="text-hayrok-orange italic tracking-tighter">Become Decisions.</span>
               </h3>
               <p className="text-xl md:text-3xl text-slate-500 font-medium mb-16 leading-relaxed max-w-3xl mx-auto">
                  See how CodeFabrics helps turn application findings into governed, validated risk decisions as part of the Hayrok platform.
               </p>
               <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                 <button onClick={() => onNavigate?.('demo')} className="bg-hayrok-orange text-white px-16 py-8 rounded-[2rem] text-2xl font-black hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/30">
                    Request a Demo
                 </button>
                 <button onClick={() => onNavigate?.('platform')} className="px-16 py-8 rounded-[2rem] text-2xl font-black text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all bg-white shadow-sm flex items-center justify-center gap-4 group">
                    Explore Platform <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                 </button>
                 <button onClick={() => onNavigate?.('contact')} className="px-16 py-8 rounded-[2rem] text-2xl font-black text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center gap-4 group">
                    Contact Us
                 </button>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Signature Footer */}
      <div className="h-32 flex items-center justify-center border-t border-slate-100 bg-white">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            CodeFabrics supports application and software supply‑chain exposure management through scanner‑agnostic ingestion, governed CTEM workflows, and BAS‑aligned validation.
         </p>
      </div>
    </div>
  );
};

const TrendingUpIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
    <polyline points="16 7 22 7 22 13"></polyline>
  </svg>
);