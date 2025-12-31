import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
/* Fixed Error in file components/GenesisPage.tsx on line 273: Cannot find name 'FileSearch'. Added FileSearch to imports. */
import { 
  Zap, Target, ShieldCheck, Activity, BarChart3, 
  ArrowRight, CheckCircle2, History, Scale, Users, 
  Sparkles, FileText, Search, ShieldAlert, Cpu, 
  Lock, Layout, Gavel, UserCheck, Terminal, 
  GitBranch, Box, Eye, HelpCircle, Briefcase,
  ListChecks, Workflow, TrendingUp, FileSearch
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

const ValidationVisualizer = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto py-20 px-10 bg-[#0A0C10] rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden group">
      <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
      
      {/* Simulation Elements */}
      <div className="relative z-10 space-y-8">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-hayrok-orange/10 rounded-2xl flex items-center justify-center text-hayrok-orange border border-hayrok-orange/20">
               <Zap size={24} className="animate-pulse" />
            </div>
            <div>
               <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Simulation Active</p>
               <h4 className="text-white font-black uppercase tracking-tight">Genesis Validation Run #402</h4>
            </div>
          </div>
          <div className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest">Safe Payload</div>
        </div>

        {/* Animated Path Component */}
        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl">
          <div className="space-y-6 font-mono text-[11px]">
            <div className="flex gap-4">
              <span className="text-hayrok-orange opacity-50">[SCAN]</span>
              <span className="text-slate-300">Evaluating access path: <span className="text-white italic">Public_Internet -> S3_Policy_Alpha</span></span>
            </div>
            <div className="flex gap-4">
              <span className="text-hayrok-orange opacity-50">[TEST]</span>
              <span className="text-slate-300">Attempting controlled SSRF probe on metadata endpoint...</span>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="flex gap-4"
            >
              <span className="text-hayrok-orange">[PROVED]</span>
              <span className="text-hayrok-orange font-bold">Exploit path confirmed: Credentials exposed via non-destructive probe.</span>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
           {[
             { label: "Reachability", val: "TRUE", color: "text-hayrok-orange" },
             { label: "Privileges", val: "ELEVATED", color: "text-red-400" },
             { label: "Impact", val: "DATA_LOSS", color: "text-red-500" }
           ].map((stat, i) => (
             <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-2xl text-center">
                <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                <p className={`text-xs font-black ${stat.color}`}>{stat.val}</p>
             </div>
           ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,95,0,0.05)_0%,transparent_70%)] pointer-events-none" />
    </div>
  );
};

export const GenesisPage: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-12 overflow-x-hidden relative">
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-slate-100">
        <IntelligenceFabric density={1.4} isDark={false} />
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
            Breach and Attack Simulation for Security Validation
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[8.5rem] font-black tracking-tight leading-[0.85] text-slate-900 mb-10 uppercase"
          >
            Proof Over <br />
            <span className="text-hayrok-orange italic tracking-tighter">Assumptions.</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-3xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium mb-12"
          >
            Validate which exposures are exploitable in practice—using controlled, evidence-based attack simulation that aligns security posture to attacker reality.
          </motion.p>

          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={() => onNavigate?.('demo')} className="w-full sm:w-auto bg-hayrok-orange hover:bg-orange-600 text-white px-12 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
              Request a Demo
            </button>
            <button onClick={() => onNavigate?.('platform')} className="w-full sm:w-auto px-12 py-6 rounded-2xl font-black text-xl text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all bg-white shadow-sm flex items-center gap-3">
              <Zap size={20} className="text-hayrok-orange" />
              Explore the Platform
            </button>
          </motion.div>
          
          <p className="mt-12 text-sm font-bold text-slate-400 uppercase tracking-[0.3em]">Turning exposure visibility into validated risk reduction.</p>
        </div>
      </section>

      {/* The Problem: Exposure != Risk */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">The Real-World Gap</h2>
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight uppercase">
                Exposure Does <br/>
                <span className="text-hayrok-orange italic">Not Equal Risk.</span>
              </h3>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
                Security teams are inundated with findings from scanners and posture tools. Yet the critical question remains: <span className="text-slate-900 font-black italic underline decoration-hayrok-orange decoration-4">Which of these can actually be exploited?</span>
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  "Vulnerability scanners",
                  "Cloud posture tools",
                  "App & Supply chain analysis",
                  "CTEM discovery workflows"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-hayrok-orange/30 transition-all group">
                    <ShieldAlert size={16} className="text-red-400 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-black text-slate-800 uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-10 bg-hayrok-dark text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Target size={120} />
                 </div>
                 <p className="text-2xl font-bold leading-tight relative z-10 mb-6 italic">
                   "Relying on severity scores alone leads to misplaced effort and persistent false positives."
                 </p>
                 <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] relative z-10">Genesis replaces assumptions with proof.</p>
              </div>
            </motion.div>

            <div className="relative">
               <div className="bg-white border border-slate-200 rounded-[4rem] p-12 md:p-16 shadow-sm">
                  <h4 className="text-2xl font-black text-slate-900 mb-10 tracking-tight uppercase">Legacy vs. <span className="text-hayrok-orange">Genesis</span></h4>
                  <div className="space-y-8">
                     {[
                       { l: "Severity scores without validation", i: "X" },
                       { l: "Point-in-time penetration tests", i: "X" },
                       { l: "Assumed attack paths", i: "X" },
                       { l: "Manual judgment to determine risk", i: "X" }
                     ].map((item, i) => (
                       <div key={i} className="flex items-center gap-5 border-b border-slate-50 pb-6 last:border-0 hover:bg-slate-50/50 transition-colors rounded-xl p-2">
                          <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 font-black text-xs">X</div>
                          <p className="text-lg font-bold text-slate-700 uppercase tracking-tight">{item.l}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Genesis Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
           <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                 <Zap size={320} className="text-hayrok-orange" />
              </div>
              <div className="relative z-10 max-w-4xl">
                 <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.6em] mb-12">System Definition</h2>
                 <h3 className="text-4xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tight uppercase">
                   Breach & Attack <br/>
                   <span className="text-hayrok-orange italic">Simulation Engine.</span>
                 </h3>
                 <p className="text-xl md:text-3xl text-slate-400 font-medium leading-relaxed mb-16">
                    Genesis uses controlled, agent-based automation to evaluate whether identified exposures can be exploited in practice—providing evidence‑based validation for defensible risk decisions.
                 </p>
                 
                 <div className="grid md:grid-cols-2 gap-8">
                    {[
                      { t: "Practical Exploitability", d: "Validate exploitability, not just presence.", i: Target },
                      { t: "Continuous & Repeatable", d: "Support continuous security validation.", i: Activity },
                      { t: "Enterprise Safe", d: "Operate safely in production environments.", i: ShieldCheck },
                      { t: "Governance Fed", d: "Verified evidence for Hive workflows.", i: Gavel }
                    ].map((item, i) => (
                       <div key={i} className="flex gap-6 p-8 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-xl group hover:bg-hayrok-orange transition-all">
                          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-hayrok-orange group-hover:text-white group-hover:bg-white/20 transition-all">
                             <item.i size={24} />
                          </div>
                          <div>
                             <h4 className="font-black text-white uppercase tracking-tight mb-2">{item.t}</h4>
                             <p className="text-xs text-slate-400 group-hover:text-white/80 font-bold uppercase">{item.d}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* How Genesis Works: 4 Pillars Grid */}
      <section className="py-32 bg-[#FCFCFA] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Core Methodology</h2>
            <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">From Exposure to <br/><span className="text-hayrok-orange italic">Technical Proof.</span></h3>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              { 
                n: "01", t: "Validate Realistic Attack Paths", 
                d: "Genesis evaluates end-to-end attack paths—initial access, privilege escalation, and lateral movement—reflecting how attackers actually operate, not just how vulns are listed.", 
                icon: GitBranch, tag: "ADVERSARY LOGIC" 
              },
              { 
                n: "02", t: "Support Continuous Security Validation", 
                d: "Unlike traditional pentesting, Genesis is designed for repeatable validation on-demand or continuously. Detect regressions and verify fix effectiveness in real-time.", 
                icon: RefreshCw, tag: "REPEATABLE OPS" 
              },
              { 
                n: "03", t: "Reduce False Positives Through Evidence", 
                d: "Distinguish theoretical risk from practical exploitability. Genesis validation reduces noise from static findings, improving prioritization accuracy and focusing team effort.", 
                icon: Search, tag: "NOISE REDUCTION" 
              },
              { 
                n: "04", t: "Produce Auditable Validation Evidence", 
                d: "Machine-readable, traceable evidence artifacts for risk acceptance, executive reporting, and compliance reviews. Every outcome is backed by a proof path.", 
                icon: FileSearch, tag: "AUDIT READINESS" 
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                className="p-12 bg-white border border-slate-200 rounded-[4rem] hover:shadow-2xl hover:border-hayrok-orange/30 transition-all group h-full flex flex-col"
              >
                <div className="flex items-center justify-between mb-10">
                   <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-hayrok-orange group-hover:bg-hayrok-orange group-hover:text-white transition-all transform group-hover:rotate-2 shadow-sm">
                      <pillar.icon size={28} strokeWidth={2.5} />
                   </div>
                   <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{pillar.tag}</span>
                </div>
                <h4 className="text-3xl font-black text-slate-900 mb-6 tracking-tight leading-tight uppercase">{pillar.t}</h4>
                <p className="text-slate-500 text-lg font-medium leading-relaxed flex-1">{pillar.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Genesis Is NOT Section */}
      <section className="py-32 bg-white border-y border-slate-100">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <motion.div {...fadeInUp}>
                  <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight uppercase">What Genesis <br/> <span className="text-hayrok-orange italic">is Not.</span></h3>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                    Genesis is designed to complement existing security services and tools by providing repeatable, governed validation of exploitability within CTEM workflows.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {[
                      "A traditional penetration testing service",
                      "A standard vulnerability scanner",
                      "An uncontrolled autonomous exploitation engine",
                      "A one-time red team replacement"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-center p-5 bg-slate-50 border border-slate-100 rounded-3xl group hover:bg-white hover:shadow-md transition-all">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-300 group-hover:text-hayrok-orange shadow-sm font-black text-xs">!</div>
                        <span className="font-bold text-slate-700 text-sm uppercase tracking-tight">{item}</span>
                      </div>
                    ))}
                  </div>
               </motion.div>

               <div className="relative">
                  <ValidationVisualizer />
               </div>
            </div>
         </div>
      </section>

      {/* CTEM Alignment Table */}
      <section className="py-32 bg-slate-50">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Framework Alignment</h2>
               <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">Genesis & The <br/><span className="text-hayrok-orange italic">CTEM Lifecycle.</span></h3>
            </div>

            <div className="max-w-5xl mx-auto overflow-hidden rounded-[3.5rem] border border-slate-200 bg-white shadow-xl">
               <div className="grid grid-cols-12 bg-slate-900 py-6 px-10 text-white font-black text-[10px] uppercase tracking-[0.5em]">
                  <div className="col-span-4">CTEM Phase</div>
                  <div className="col-span-8">Genesis Role</div>
               </div>
               <div className="divide-y divide-slate-100">
                  {[
                    { p: "Scope", r: "Inherits scoped assets and environments from Hive." },
                    { p: "Discover", r: "Consumes exposure and finding data from multi-domain telemetry." },
                    { p: "Prioritize", r: "Supports prioritization with real-world exploitability evidence." },
                    { p: "Validate", r: "Confirms whether exposure is practically exploitable in your context." },
                    { p: "Mobilize", r: "Enables retesting and remediation outcome measurement." }
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-12 py-8 px-10 items-center group hover:bg-orange-50/30 transition-all">
                       <div className="col-span-4 text-xl font-black text-slate-900 uppercase tracking-tight group-hover:text-hayrok-orange transition-colors">{row.p}</div>
                       <div className="col-span-8 text-slate-500 font-bold uppercase text-sm leading-tight">{row.r}</div>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="mt-16 text-center">
               <p className="text-xl font-bold text-slate-500 italic">"Genesis ensures CTEM prioritization is grounded in validated attacker reality."</p>
            </div>
         </div>
      </section>

      {/* Governance & Safety Dark Block */}
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
                     <Lock size={16} /> Governed by Design
                  </div>
                  <h3 className="text-5xl md:text-[8rem] font-black text-white mb-10 tracking-[0.02em] leading-[0.85] uppercase">
                    Non‑Destructive <br/> <span className="text-hayrok-orange italic font-light lowercase">and</span> <br/> Auditable.
                  </h3>
                  <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed mb-20 max-w-2xl">
                    Built for enterprise and regulated environments. Genesis operates with strict execution policies and automation boundaries.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-16">
                     {[
                        { label: "Policy-Bound Scopes", d: "Execution strictly follows customer-defined policies.", icon: Gavel },
                        { label: "Automation Boundaries", d: "Controlled environments and payload constraints.", icon: Box },
                        { label: "HITL Approvals", d: "Human-in-the-loop triggers for high-impact tasks.", icon: UserCheck },
                        { label: "Full Traceability", d: "Machine-readable logs of every validation step.", icon: History }
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
      <section className="py-32 bg-[#FCFCFA]">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Platform Synergy</h2>
               <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">The Validation <br/><span className="text-hayrok-orange italic">Value Chain.</span></h3>
            </div>

            <div className="relative max-w-5xl mx-auto py-12">
               <div className="grid md:grid-cols-4 gap-8 items-center text-center relative z-10">
                  {[
                    { l: "Exposure & Findings", sub: "CTEM, CNAPP, AppSec", i: Search },
                    { l: "Validation simulation", sub: "Genesis Engine", i: Zap, accent: true },
                    { l: "Exploitability evidence", sub: "Proof Artifacts", i: FileText },
                    { l: "Governance & decisions", sub: "Hive System of Record", i: BarChart3 }
                  ].map((step, i) => (
                    <div key={i} className="flex flex-col items-center">
                       <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center mb-6 shadow-xl transition-all ${step.accent ? 'bg-hayrok-orange text-white scale-110' : 'bg-white text-slate-400 border border-slate-100'}`}>
                          <step.i size={32} />
                       </div>
                       <h5 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-1">{step.l}</h5>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{step.sub}</p>
                    </div>
                  ))}
               </div>
               {/* Decorative flow lines */}
               <div className="absolute top-[52px] left-[15%] right-[15%] h-px bg-slate-200 hidden md:block -z-0" />
            </div>

            <div className="mt-24 grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
               <div className="p-8 bg-white border border-slate-100 rounded-3xl text-center">
                  <p className="text-xl font-black text-slate-900 uppercase mb-4 tracking-tighter">Genesis Validates</p>
                  <p className="text-sm text-slate-500 font-medium">Controlled evaluation of exploitability across cloud and apps.</p>
               </div>
               <div className="p-8 bg-white border border-slate-100 rounded-3xl text-center">
                  <p className="text-xl font-black text-slate-900 uppercase mb-4 tracking-tighter">Hive Governs</p>
                  <p className="text-sm text-slate-500 font-medium">Decision system of record and risk movement tracking.</p>
               </div>
               <div className="p-8 bg-white border border-slate-100 rounded-3xl text-center">
                  <p className="text-xl font-black text-slate-900 uppercase mb-4 tracking-tighter">Hay‑AI Reasons</p>
                  <p className="text-sm text-slate-500 font-medium">Ensures controlled orchestration and decision traceability.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Target Audience & Outcomes Bento */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-stretch">
               <div className="lg:col-span-5 bg-slate-50 rounded-[4rem] p-12 md:p-16 border border-slate-200">
                  <h3 className="text-3xl font-black text-slate-900 mb-10 tracking-tight uppercase">Who Uses <br/> <span className="text-hayrok-orange italic">Genesis.</span></h3>
                  <div className="space-y-6">
                     {[
                        "Security engineering teams",
                        "Threat exposure & risk management",
                        "Application and cloud security teams",
                        "Organizations implementing CTEM",
                        "Regulated enterprises requiring proof"
                     ].map((p, i) => (
                        <div key={i} className="flex gap-4 items-center p-4 bg-white rounded-2xl border border-slate-100 group hover:border-hayrok-orange transition-all">
                           <Users size={18} className="text-slate-300 group-hover:text-hayrok-orange transition-colors" />
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
                  <ul className="space-y-10 relative z-10">
                     {[
                        { label: "Confirm Exploitability", desc: "Confirm which exposures are exploitable in practice." },
                        { label: "Focus Remediation", desc: "Prioritize remediation using validated evidence." },
                        { label: "Measure Improvement", desc: "Verify measurable risk change through retesting." },
                        { label: "Defend Decisions", desc: "Defend security decisions with auditable validation proof." }
                     ].map((val, i) => (
                        <div key={i} className="flex gap-6">
                           <div className="text-hayrok-orange font-black text-2xl italic">{i+1}.</div>
                           <div>
                              <p className="text-2xl font-black mb-2 uppercase tracking-tight">{val.label}</p>
                              <p className="text-slate-400 font-medium text-lg leading-relaxed">{val.desc}</p>
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
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-12">Experience Genesis</h2>
               <h3 className="text-6xl md:text-[10rem] font-black text-slate-900 mb-12 tracking-tight leading-[0.8] uppercase">
                 Turn Assumptions <br/> <span className="text-hayrok-orange italic tracking-tighter">Into Proof.</span>
               </h3>
               <p className="text-xl md:text-3xl text-slate-500 font-medium mb-16 leading-relaxed max-w-3xl mx-auto">
                  Genesis provides the validation layer that connects exposure to real‑world risk. See how it works as part of the Hayrok platform.
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
            Genesis provides Breach and Attack Simulation capabilities that support security validation within CTEM programs by evaluating realistic attack paths and producing auditable exploitability evidence.
         </p>
      </div>
    </div>
  );
};

// Internal icon helper
const RefreshCw = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
    <path d="M21 3v5h-5"></path>
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
    <path d="M3 21v-5h5"></path>
  </svg>
);
