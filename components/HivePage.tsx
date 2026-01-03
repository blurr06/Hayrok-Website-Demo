
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, Target, ShieldCheck, TrendingUp, 
  ArrowRight, Zap, Code, Shield, Activity, 
  Sparkles, Database, Layout, History, Scale, 
  UserCheck, CheckCircle2, Bot, Gavel, Users,
  Search, Layers, Info, AlertTriangle, HelpCircle,
  FileText, Workflow, ShieldAlert,
  ChevronRight, Eye, Network, XCircle, Briefcase,
  FileSearch, ClipboardCheck
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

const DecisionVisualizer = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { label: "Ingest", icon: Database, desc: "Multi-tool signal aggregation" },
    { label: "Validate", icon: Zap, desc: "Adversary truth confirmation" },
    { label: "Correlate", icon: Network, desc: "Domain-wide risk graphing" },
    { label: "Govern", icon: Gavel, desc: "Policy-constrained reasoning" },
    { label: "Decide", icon: ClipboardCheck, desc: "Executive-grade sign-off" }
  ];

  return (
    <div className="relative w-full max-w-lg aspect-square mx-auto flex items-center justify-center">
      <div className="absolute inset-0 border-[1px] border-slate-100 rounded-full animate-spin-slow opacity-20" />
      <div className="absolute inset-10 border-[1px] border-hayrok-orange/10 rounded-full animate-spin-reverse-slow opacity-20" />
      
      {/* Central Hive Core */}
      <div className="relative z-10 w-40 h-40 bg-slate-900 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center text-hayrok-orange border-2 border-hayrok-orange/30 group">
        <div className="absolute inset-0 bg-hayrok-orange/5 blur-xl animate-pulse" />
        <BarChart3 size={48} className="relative z-10" />
        <span className="text-[10px] font-black uppercase tracking-widest mt-3 relative z-10">Hive Core SoR</span>
      </div>

      {/* Rotating Nodes */}
      {steps.map((step, i) => {
        const angle = (i * 72 - 90) * (Math.PI / 180);
        const radius = 180;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const isActive = activeStep === i;

        return (
          <motion.div
            key={i}
            initial={false}
            animate={{ 
              x, y, 
              scale: isActive ? 1.15 : 1,
              opacity: isActive ? 1 : 0.3
            }}
            className={`absolute p-6 rounded-2xl border transition-all duration-500 ${isActive ? 'bg-white border-hayrok-orange shadow-2xl shadow-orange-500/20' : 'bg-slate-50 border-slate-200'}`}
          >
            <step.icon size={24} className={isActive ? 'text-hayrok-orange' : 'text-slate-400'} />
            {isActive && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap text-center"
              >
                <div className="text-[10px] font-black uppercase tracking-widest text-hayrok-orange">{step.label}</div>
                <div className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">{step.desc}</div>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export const HivePage: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-12 overflow-x-hidden relative">
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-slate-100">
        <IntelligenceFabric density={1.6} isDark={false} />
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
            Governed Security Risk Intelligence
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[9rem] font-black tracking-tight leading-[0.85] text-slate-900 mb-10 uppercase"
          >
            From Insights <br />
            <span className="text-hayrok-orange italic tracking-tighter">To Defensible Decisions.</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-3xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium mb-12"
          >
            Hive is the missing accountability layer of modern security. Turn continuous validation into governed, auditable risk decisions you can stand behind.
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
          
          <p className="mt-12 text-sm font-bold text-slate-400 uppercase tracking-[0.3em]">The decision layer for the CTEM lifecycle.</p>
        </div>
      </section>

      {/* The Problem: Insights != Decisions */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">The Decision Deficit</h2>
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight uppercase">
                Security Still <br/> Stops at Insights. <br/>
                <span className="text-slate-400 italic">Not Decisions.</span>
              </h3>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
                Teams are inundated with signals from CTEM, CNAPP, and BAS tools. Yet when leadership asks <span className="text-slate-900 font-black italic">"Which risks do we actually own?"</span> the answer remains buried in spreadsheets and unverifiable assumptions.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { l: "Vulnerability Scanners", i: Target },
                   { l: "Cloud Posture Tools", i: Layers },
                   { l: "AppSec Analysis", i: Code },
                   { l: "Attack Simulation", i: Zap }
                 ].map((tool, i) => (
                    <div key={i} className="flex items-center gap-3 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 group">
                       <tool.i size={18} className="text-slate-500 group-hover:text-hayrok-orange transition-colors" />
                       <span className="text-[11px] font-black text-slate-800 uppercase tracking-widest">{tool.l}</span>
                    </div>
                 ))}
              </div>
            </motion.div>

            <div className="relative">
               <div className="bg-slate-900 rounded-[4rem] p-12 shadow-2xl relative overflow-hidden text-white min-h-[500px] flex flex-col justify-center border border-white/5">
                  <div className="absolute inset-0 bg-grid-white opacity-5" />
                  <div className="relative z-10 text-center">
                     <p className="text-3xl font-black italic text-hayrok-orange mb-10 leading-tight uppercase">"Security produces signals. <br/> <span className="text-white underline decoration-hayrok-orange decoration-4 underline-offset-8">Hive owns the decision.</span>"</p>
                     <div className="flex justify-center gap-4 text-slate-400 text-[10px] font-black tracking-[0.5em] uppercase">
                        <span>No spreadsheets</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-hayrok-orange mt-1" />
                        <span>No guesswork</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Hive Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
           <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                 <BarChart3 size={320} className="text-hayrok-orange" />
              </div>
              <div className="relative z-10 max-w-4xl">
                 <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.6em] mb-12">System Definition</h2>
                 <h3 className="text-4xl md:text-[5.5rem] font-black mb-10 leading-[0.9] tracking-tight uppercase">
                   The Accountability <br/>
                   <span className="text-hayrok-orange italic">Layer for Risk.</span>
                 </h3>
                 <p className="text-xl md:text-3xl text-slate-400 font-medium leading-relaxed mb-16">
                    Hive is Hayrok’s Security Risk Intelligence platform. It ingests multi-tool signals, validates them with adversary truth, and produces governed, auditable risk decisions - not alerts.
                 </p>
                 <div className="h-px w-full bg-white/10 mb-12" />
                 <p className="text-2xl md:text-4xl font-black italic">
                   "Most platforms help you see risk. <br/> <span className="text-hayrok-orange underline decoration-white/20 underline-offset-8">Hive helps you decide risk</span> - and defend that decision."
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* How Hive Works - 5 Functional Pillars */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Decision Architecture</h2>
            <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">End-to-End <br/><span className="text-hayrok-orange italic">Ownership.</span></h3>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 grid gap-6">
              {[
                { 
                  n: "01", t: "Aggregates Multi-Tool Signals", 
                  d: "Hive consumes data from CTEM, CNAPP, AppSec, and ASM tools. It does not replace your stack - it orchestrates and elevates it into a unified system of record.", 
                  icon: Database, tag: "INGESTION" 
                },
                { 
                  n: "02", t: "Validates Using Adversary Truth", 
                  d: "Hive eliminates urgency theater by relying on proven exploit paths and control effectiveness validation (via Genesis). If it can't be proven exploitable, it doesn't drive decisions.", 
                  icon: Zap, tag: "VALIDATION" 
                },
                { 
                  n: "03", t: "Correlates Into Risk Graphs", 
                  d: "Attacker behavior is graph-based; security thinking shouldn't be list-based. Hive correlates signals across cloud, identity, and supply chain into actionable risk graphs.", 
                  icon: Network, tag: "CORRELATION" 
                },
                { 
                  n: "04", t: "Governs AI Security Decisions", 
                  d: "Hive’s AI is not autonomous chaos. Decisions are policy-constrained, explainable, and auditable - delivering AI you can defend to auditors, regulators, and boards.", 
                  icon: Gavel, tag: "GOVERNANCE" 
                },
                { 
                  n: "05", t: "Executive-Grade Decisioning", 
                  d: "Output is not an alert; it's a decision: Fix, Accept, Compensate, or Monitor. Every decision is tied to business impact, ownership, and confidence levels.", 
                  icon: UserCheck, tag: "MOBILIZATION" 
                }
              ].map((pillar, i) => (
                <motion.div 
                  key={i}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  className="p-10 bg-white border border-slate-200 rounded-[3.5rem] hover:shadow-2xl transition-all group flex gap-8 items-start"
                >
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-hayrok-orange group-hover:bg-hayrok-orange group-hover:text-white transition-all transform group-hover:scale-110 shrink-0 shadow-sm">
                     <pillar.icon size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                       <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{pillar.tag}</span>
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 mb-3 tracking-tight leading-tight uppercase">{pillar.t}</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">{pillar.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="lg:col-span-5 sticky top-32">
               <DecisionVisualizer />
               <div className="mt-12 p-10 bg-slate-900 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Sparkles size={120} />
                  </div>
                  <p className="text-2xl font-black italic mb-6 leading-tight">"Hive thinks in decisions. Attackers think in graphs. Security thinks in lists."</p>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">The Logic Differentiator</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Synergy Flow */}
      <section className="py-32 bg-[#FCFCFA] border-y border-slate-100">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Strategic Positioning</h2>
               <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">The Logic <br/><span className="text-hayrok-orange italic">Value Chain.</span></h3>
            </div>

            <div className="max-w-5xl mx-auto">
               <div className="grid md:grid-cols-4 gap-8 items-center text-center">
                  {[
                    { l: "Signals & Data", sub: "CTEM, CNAPP, ASM", i: Search },
                    { l: "Truth validation", sub: "Genesis Engine", i: Zap },
                    { l: "Software Context", sub: "CodeFabrics", i: Code },
                    { l: "Risk Governance", sub: "Hive Intelligence", i: BarChart3, active: true }
                  ].map((step, i) => (
                    <div key={i} className="flex flex-col items-center group">
                       <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center mb-6 shadow-xl transition-all ${step.active ? 'bg-hayrok-orange text-white scale-110' : 'bg-white text-slate-400 border border-slate-100 group-hover:border-hayrok-orange/30'}`}>
                          <step.i size={32} />
                       </div>
                       <h5 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-1">{step.l}</h5>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{step.sub}</p>
                    </div>
                  ))}
               </div>
            </div>

            <div className="mt-24 grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
               <div className="p-8 bg-white border border-slate-200 rounded-3xl text-center shadow-sm">
                  <p className="text-xl font-black text-slate-900 uppercase mb-3 tracking-tighter">Genesis Proves</p>
                  <p className="text-sm text-slate-500 font-medium">Technical proof of what attackers can actually do.</p>
               </div>
               <div className="p-8 bg-white border border-slate-200 rounded-3xl text-center shadow-sm">
                  <p className="text-xl font-black text-slate-900 uppercase mb-3 tracking-tighter">CodeFabrics Governs</p>
                  <p className="text-sm text-slate-500 font-medium">Application and supply chain risk contextualization.</p>
               </div>
               <div className="p-8 bg-white border border-slate-200 rounded-3xl text-center shadow-sm">
                  <p className="text-xl font-black text-slate-900 uppercase mb-3 tracking-tighter">Hive Decides</p>
                  <p className="text-sm text-slate-500 font-medium">Final decision ownership and audit trail management.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Regulated & High Trust Block */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="bg-[#111316] border border-white/5 rounded-[5rem] p-12 md:p-24 overflow-hidden relative shadow-2xl text-white group"
            >
               <div className="absolute top-0 right-0 p-32 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <ShieldCheck size={400} className="text-hayrok-orange" />
               </div>
               
               <div className="max-w-4xl relative z-10">
                  <div className="inline-flex items-center gap-3 text-hayrok-orange font-black text-[10px] uppercase tracking-[0.5em] mb-12">
                     <Lock size={16} /> Governance by Design
                  </div>
                  <h3 className="text-5xl md:text-[7rem] font-black text-white mb-10 tracking-[0.02em] leading-[0.85] uppercase">
                    Audit-Ready <br/> <span className="text-hayrok-orange italic font-light lowercase">Risk</span> <br/> Decisions.
                  </h3>
                  <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed mb-20 max-w-2xl">
                    Built for organizations that must defend their security choices to auditors, regulators, and boards without sacrificing velocity.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { l: "Decision Rationale", d: "Traceable lineage for every risk prioritization.", i: History },
                      { l: "Policy Enforcement", d: "Automated checks against OPA and GRC rules.", i: Gavel },
                      { l: "Compliance Proof", d: "Artifacts supporting SOC2, ISO, and NIS2.", i: ClipboardCheck }
                    ].map((item, i) => (
                      <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl group/item hover:bg-white/10 transition-colors">
                        <item.i className="text-hayrok-orange mb-6" size={24} />
                        <h5 className="font-black text-white text-sm uppercase tracking-widest mb-2">{item.l}</h5>
                        <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.d}</p>
                      </div>
                    ))}
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Comparison: Traditional vs Hive */}
      <section className="py-32 bg-slate-50">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <motion.div {...fadeInUp}>
                  <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight uppercase">Why Hive <br/> <span className="text-hayrok-orange italic">is Different.</span></h3>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                    Traditional platforms help you see risk. Hive helps you decide and defend risk using evidence and governance.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { l: "Decision-driven", r: "vs Alert-driven" },
                      { l: "Outcome-centric", r: "vs Tool-centric" },
                      { l: "Evidence-based", r: "vs Severity-based" },
                      { l: "Auditable by design", r: "vs Hard to audit" },
                      { l: "AI with governance", r: "vs AI as hype" }
                    ].map((row, i) => (
                      <div key={i} className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-200 group hover:border-hayrok-orange transition-all">
                        <span className="font-black text-slate-900 text-sm uppercase tracking-tight">{row.l}</span>
                        <span className="font-bold text-slate-400 text-xs uppercase tracking-tighter italic">{row.r}</span>
                      </div>
                    ))}
                  </div>
               </motion.div>

               <div className="bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl h-[500px] flex flex-col items-center justify-center text-center">
                  <div className="absolute inset-0 bg-grid-white opacity-5" />
                  <div className="relative z-10 max-w-sm">
                     <p className="text-3xl font-black italic mb-10 leading-tight">“Hive generates <span className="text-hayrok-orange">Intelligence.</span> Not just data.”</p>
                     <div className="flex items-center justify-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-hayrok-orange animate-pulse" />
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">SRIP Category Standard</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Target Audience & Outcomes Bento */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-stretch">
               <div className="lg:col-span-5 bg-slate-50 rounded-[4rem] p-12 md:p-16 border border-slate-200">
                  <h3 className="text-3xl font-black text-slate-900 mb-10 tracking-tight uppercase">Who is <br/> <span className="text-hayrok-orange italic">Hive For?</span></h3>
                  <div className="space-y-6">
                     {[
                        "CISOs accountable for real outcomes",
                        "Security leaders adopting CTEM but needing decision ownership",
                        "Regulated enterprises requiring audit-defensible AI",
                        "Organizations overwhelmed by signals but lacking clarity"
                     ].map((p, i) => (
                        <div key={i} className="flex gap-4 items-center p-5 bg-white rounded-2xl border border-slate-100 group hover:border-hayrok-orange transition-all shadow-sm">
                           <CheckCircle2 size={18} className="text-hayrok-orange shrink-0 mt-0.5" />
                           <span className="font-bold text-slate-700 text-sm uppercase tracking-tight">{p}</span>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="lg:col-span-7 bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden group shadow-2xl">
                  <div className="absolute inset-0 bg-grid-white opacity-5" />
                  <h4 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-12 flex items-center gap-3">
                     <Briefcase size={16} /> Business Outcomes
                  </h4>
                  <div className="space-y-10 relative z-10">
                     <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-red-500 shrink-0 border border-white/10">
                           <XCircle size={24} />
                        </div>
                        <p className="text-2xl font-black uppercase text-slate-400">“Here’s what our tools found.”</p>
                     </div>
                     <ArrowRight size={32} className="text-hayrok-orange mx-auto" />
                     <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-hayrok-orange text-white flex items-center justify-center shrink-0 shadow-lg">
                           <CheckCircle2 size={24} />
                        </div>
                        <p className="text-2xl font-black uppercase text-white">“Here is the risk we are taking - and the evidence behind that decision.”</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 bg-[#FCFCFA] border-t border-slate-100 text-center">
         <div className="container mx-auto px-6 relative z-10">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-12">Move Beyond Visibility</h2>
               <h3 className="text-5xl md:text-[10rem] font-black text-slate-900 mb-12 tracking-tight leading-[0.8] uppercase">
                 Own The <br/> <span className="text-hayrok-orange italic tracking-tighter">Decision.</span>
               </h3>
               <p className="text-xl md:text-3xl text-slate-500 font-medium mb-16 leading-relaxed max-w-3xl mx-auto">
                  Hive turns continuous security validation into accountable, enterprise-grade risk decisions. Join the future of Security Risk Intelligence.
               </p>
               <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                 <button onClick={() => onNavigate?.('demo')} className="bg-hayrok-orange text-white px-16 py-8 rounded-[2rem] text-2xl font-black hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
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
            Hive is the governed intelligence layer that turns continuous security validation into accountable, enterprise-grade risk decisions.
         </p>
      </div>
    </div>
  );
};

const Lock = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
