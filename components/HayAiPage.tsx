
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, Brain, Cpu, Zap, Network, ShieldCheck, 
  Lock, Search, ArrowRight, CheckCircle2, Terminal,
  History, Sparkles, MessageSquare, Fingerprint, Eye,
  Users, UserCheck, FileSearch, Layers, Gavel, Activity,
  Briefcase, ShieldAlert, ListChecks, Workflow,
  TrendingUp, Scale, Database, FileText, XCircle,
  /* Fixed Error in file components/HayAiPage.tsx on line 280: Cannot find name 'BarChart3'. Added BarChart3 and Code. */
  BarChart3, Code
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

const AgentPulse = ({ label, icon: Icon, active = false }: any) => (
  <div className={`p-6 rounded-[2rem] border transition-all duration-500 flex flex-col items-center gap-4 ${active ? 'bg-white border-hayrok-orange shadow-xl shadow-orange-500/10' : 'bg-slate-50/50 border-slate-100 opacity-60'}`}>
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${active ? 'bg-hayrok-orange text-white' : 'bg-white text-slate-400 border border-slate-100'}`}>
      <Icon size={24} />
    </div>
    <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest text-center">{label}</span>
  </div>
);

export const HayAiPage: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-12 overflow-x-hidden relative">
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-slate-100">
        <IntelligenceFabric density={2} isDark={false} />
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
            Governed AI for Security Risk Decisions
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[8.5rem] font-black tracking-tight leading-[0.85] text-slate-900 mb-10 uppercase"
          >
            Decisions You Can <br />
            <span className="text-hayrok-orange italic tracking-tighter">Stand Behind.</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-3xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium mb-12"
          >
            Make AI-powered security decisions explainable, auditable, and defensible - by design. Hay-AI provides the trust layer organizations need for enterprise-grade autonomous security.
          </motion.p>

          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={() => onNavigate?.('demo')} className="w-full sm:w-auto bg-hayrok-orange hover:bg-orange-600 text-white px-12 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
              Request a Demo
            </button>
            <button onClick={() => onNavigate?.('contact')} className="w-full sm:w-auto px-12 py-6 rounded-2xl font-black text-xl text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all bg-white shadow-sm flex items-center gap-3">
              <Users size={20} className="text-hayrok-orange" />
              Talk to an Architect
            </button>
          </motion.div>
          
          <p className="mt-12 text-sm font-bold text-slate-400 uppercase tracking-[0.3em]">AI assists. Humans remain accountable.</p>
        </div>
      </section>

      {/* The Problem: AI as Liability */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">The Governance Gap</h2>
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight uppercase">
                AI in Security is <br/>
                <span className="text-red-500 italic">Becoming a Liability.</span>
              </h3>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
                Most “AI-powered” security tools become black boxes under scrutiny. They generate recommendations without accountability, operating outside policy and risk tolerance.
              </p>
              
              <div className="space-y-4">
                 {[
                   "Cannot explain why a decision was made",
                   "Operates outside organizational policy",
                   "Impossible to defend to auditors or regulators",
                   "Generates answers without accountability"
                 ].map((problem, i) => (
                    <div key={i} className="flex gap-4 items-center">
                       <XCircle size={20} className="text-red-400 shrink-0" />
                       <span className="text-lg font-bold text-slate-700">{problem}</span>
                    </div>
                 ))}
              </div>
            </motion.div>

            <div className="relative">
               <div className="bg-slate-900 rounded-[4rem] p-12 shadow-2xl relative overflow-hidden text-white flex flex-col justify-center border border-white/5 h-[550px]">
                  <div className="absolute top-0 right-0 p-12 opacity-5">
                    <ShieldAlert size={300} className="text-red-500" />
                  </div>
                  <div className="relative z-10">
                    <p className="text-4xl font-black text-hayrok-orange mb-8 uppercase leading-tight italic">
                      "Uncontrolled AI is a <br/> governance failure."
                    </p>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-sm max-w-xs">
                      In regulated environments, the price of the 'Black Box' is too high.
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Hay-AI: Definition Block */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
           <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                 <Bot size={320} className="text-hayrok-orange" />
              </div>
              <div className="relative z-10 max-w-4xl">
                 <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.6em] mb-12">System Definition</h2>
                 <h3 className="text-4xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tight uppercase">
                   The Reasoning Layer <br/>
                   <span className="text-hayrok-orange italic">for Accountable Security.</span>
                 </h3>
                 <p className="text-xl md:text-3xl text-slate-400 font-medium leading-relaxed mb-16">
                    Hay-AI is Hayrok’s governed AI reasoning and orchestration layer. It coordinates agent-based analysis, enforces policy constraints, and produces explainable, auditable reasoning behind every security decision.
                 </p>
                 <div className="h-px w-full bg-white/10 mb-12" />
                 <p className="text-2xl md:text-4xl font-black italic">
                   "Most vendors use AI to generate answers. <br/> <span className="text-hayrok-orange underline decoration-white/20 underline-offset-8">Hay-AI uses AI to generate accountable decisions.</span>"
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* How Hay-AI Works: 5 Pillars Grid */}
      <section className="py-32 bg-[#FCFCFA] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Operating Model</h2>
            <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">Governed <br/><span className="text-hayrok-orange italic">By Design.</span></h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                t: "Agent-Based Intelligence", 
                d: "Orchestrates specialized agents (Recon, Validation, Narrative) with defined scopes, approved tools, and logged actions. No autonomous chaos.", 
                icon: Zap, tag: "ORCHESTRATION" 
              },
              { 
                t: "Policy-Constrained Reasoning", 
                d: "Analysis cannot exceed policy boundaries or risk tolerance. Decisions are only produced when policy conditions and evidence confidence are satisfied.", 
                icon: Gavel, tag: "GOVERNANCE" 
              },
              { 
                t: "Full Decision Traceability", 
                d: "Every AI-assisted decision includes data inputs, reasoning steps, evidence references, and policies evaluated. A complete audit trail for regulators.", 
                icon: History, tag: "AUDITABILITY" 
              },
              { 
                t: "Human-in-the-Loop Control", 
                d: "Mandatory approval for high-impact decisions. Separation of duties and ownership tracking ensure humans remain final authorities.", 
                icon: UserCheck, tag: "ACCOUNTABILITY" 
              },
              { 
                t: "Consistent Platform Logic", 
                d: "Unified reasoning across Hive, Genesis, and CodeFabrics prevents conflicting recommendations, AI drift, and inconsistent outcomes.", 
                icon: Layers, tag: "SYNERGY" 
              },
              { 
                t: "Optimized for Trust", 
                d: "Unlike general LLMs that optimize for speed or creativity, Hay-AI optimizes for control, repeatability, and enterprise defensibility.", 
                icon: ShieldCheck, tag: "OUTCOME" 
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

      {/* Comparison: Typical vs. Hay-AI */}
      <section className="py-32 bg-white border-y border-slate-100">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <motion.div {...fadeInUp}>
                  <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight uppercase">Why Hay-AI <br/> <span className="text-hayrok-orange italic">is Different.</span></h3>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                    Typical AI security models are designed for speed and chatbots. Hay-AI is designed as infrastructure for high-trust environments.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      { l: "Explainable reasoning", r: "vs. Black-box recommendations" },
                      { l: "Policy-driven decisions", r: "vs. No policy enforcement" },
                      { l: "Audit-ready by design", r: "vs. Hard to audit" },
                      { l: "Human-governed control", r: "vs. Unmanaged autonomous actions" },
                      { l: "AI as infrastructure", r: "vs. AI as hype" }
                    ].map((row, i) => (
                      <div key={i} className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-md transition-all">
                        <span className="font-black text-hayrok-orange text-sm uppercase tracking-tight">{row.l}</span>
                        <span className="font-bold text-slate-400 text-xs uppercase tracking-tighter italic">{row.r}</span>
                      </div>
                    ))}
                  </div>
               </motion.div>

               <div className="bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl h-[500px] flex flex-col items-center justify-center text-center">
                  <div className="absolute inset-0 bg-grid-white opacity-5" />
                  <div className="relative z-10 max-w-sm">
                     <p className="text-3xl font-black italic mb-10 leading-tight">“Hay-AI is the trust layer. Tools generate data. Simulations generate truth. AI generates intelligence.”</p>
                     <div className="flex items-center justify-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-hayrok-orange animate-pulse" />
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Decision Integrity Core</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Platform Integration Flow */}
      <section className="py-32 bg-slate-50">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Ecosystem Architecture</h2>
               <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">The Logic <br/><span className="text-hayrok-orange italic">Value Chain.</span></h3>
            </div>

            <div className="relative max-w-5xl mx-auto py-12">
               <div className="grid md:grid-cols-4 gap-8 items-center text-center relative z-10">
                  {[
                    { l: "Signals & Evidence", sub: "Input Telemetry", i: Search },
                    { l: "Analysis & Validation", sub: "Hay-AI Agents", i: Bot, accent: true },
                    { l: "Policy Reasoning", sub: "Governance Engine", i: Gavel, accent: true },
                    { l: "Risk Decisions", sub: "Hive SoR", i: BarChart3 }
                  ].map((step, i) => (
                    <div key={i} className="flex flex-col items-center">
                       <div className={`w-20 h-20 rounded-[2.5rem] flex items-center justify-center mb-6 shadow-xl transition-all ${step.accent ? 'bg-hayrok-orange text-white scale-110' : 'bg-white text-slate-400 border border-slate-100'}`}>
                          <step.i size={32} />
                       </div>
                       <h5 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-1">{step.l}</h5>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{step.sub}</p>
                    </div>
                  ))}
               </div>
               <div className="absolute top-[52px] left-[15%] right-[15%] h-px bg-slate-200 hidden md:block -z-0" />
            </div>

            <div className="mt-24 grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
               <div className="p-10 bg-white border border-slate-100 rounded-3xl text-center shadow-sm">
                  <p className="text-xl font-black text-slate-900 uppercase mb-4 tracking-tighter">Genesis Proves</p>
                  <p className="text-sm text-slate-500 font-medium">Technical proof of attacker reality.</p>
               </div>
               <div className="p-10 bg-white border border-slate-100 rounded-3xl text-center shadow-sm">
                  <p className="text-xl font-black text-slate-900 uppercase mb-4 tracking-tighter">CodeFabrics Governs</p>
                  <p className="text-sm text-slate-500 font-medium">Software and supply chain exposure.</p>
               </div>
               <div className="p-10 bg-white border border-slate-100 rounded-3xl text-center shadow-sm">
                  <p className="text-xl font-black text-slate-900 uppercase mb-4 tracking-tighter">Hive Decides</p>
                  <p className="text-sm text-slate-500 font-medium">Owned risk decisions and audit trails.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Regulated & High Trust Block */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="bg-[#111316] border border-white/5 rounded-[5rem] p-12 md:p-24 overflow-hidden relative shadow-2xl text-white group">
               <div className="absolute top-0 right-0 p-32 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <ShieldCheck size={400} className="text-hayrok-orange" />
               </div>
               
               <div className="max-w-5xl relative z-10">
                  <div className="inline-flex items-center gap-3 text-hayrok-orange font-black text-[10px] uppercase tracking-[0.5em] mb-12">
                     <Lock size={16} /> Auditable Innovation
                  </div>
                  <h3 className="text-5xl md:text-[7rem] font-black text-white mb-10 tracking-[0.02em] leading-[0.85] uppercase">
                    Built for <br/> <span className="text-hayrok-orange italic font-light lowercase">Regulated</span> <br/> Environments.
                  </h3>
                  <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed mb-20 max-w-2xl">
                    Defend AI-driven decisions to auditors, explain outcomes to regulators, and maintain accountability at the board level without losing control.
                  </p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                     {["SOC 2", "ISO 27001", "PCI DSS", "NIS2", "AI TRiSM"].map((std, i) => (
                        <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-center">
                           <span className="text-xs font-black text-slate-300 uppercase tracking-widest">{std} Alignment</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Target Audience Bento */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-stretch">
               <div className="lg:col-span-5 bg-slate-50 rounded-[4rem] p-12 border border-slate-200">
                  <h3 className="text-3xl font-black text-slate-900 mb-10 tracking-tight uppercase">Who is <br/> <span className="text-hayrok-orange italic">Hay-AI For?</span></h3>
                  <div className="space-y-6">
                     {[
                        "CISOs accountable for outcomes, not alerts",
                        "Security leaders in regulated environments",
                        "Organizations concerned with AI governance risk",
                        "Enterprises that must trust - and prove - AI decisions"
                     ].map((p, i) => (
                        <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                           {/* Remove duplicate attribute size={20} to fix multiple attributes error */}
                           <CheckCircle2 size={20} className="text-hayrok-orange shrink-0 mt-0.5" />
                           <span className="font-bold text-slate-700 text-sm uppercase tracking-tight">{p}</span>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="lg:col-span-7 bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl group flex flex-col justify-center">
                  <div className="absolute inset-0 bg-grid-white opacity-5" />
                  <h4 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-12 flex items-center gap-3">
                     <Briefcase size={16} /> Targeted Outcomes
                  </h4>
                  <div className="space-y-10 relative z-10">
                     <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-red-500 shrink-0 border border-white/10">
                           <XCircle size={24} />
                        </div>
                        <p className="text-2xl font-black uppercase text-slate-400">“The AI recommended this.”</p>
                     </div>
                     <ArrowRight size={32} className="text-hayrok-orange mx-auto" />
                     <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-hayrok-orange text-white flex items-center justify-center shrink-0 shadow-lg">
                           <CheckCircle2 size={24} />
                        </div>
                        <p className="text-2xl font-black uppercase text-white">“This decision was made within policy, backed by evidence, and is fully auditable.”</p>
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
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-12">Move From Hype to Infrastructure</h2>
               <h3 className="text-5xl md:text-[9rem] font-black text-slate-900 mb-12 tracking-tight leading-[0.85] uppercase">
                 Audit <br/> <span className="text-hayrok-orange italic tracking-tighter">The Intelligence.</span>
               </h3>
               <p className="text-xl md:text-3xl text-slate-500 font-medium mb-16 leading-relaxed max-w-3xl mx-auto">
                  Hay-AI makes Hayrok’s security decisions explainable, auditable, and defensible. Experience governed AI at the core.
               </p>
               <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                 <button onClick={() => onNavigate?.('demo')} className="bg-hayrok-orange text-white px-16 py-8 rounded-[2rem] text-2xl font-black hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
                    Request a Demo
                 </button>
                 <button onClick={() => onNavigate?.('platform')} className="px-16 py-8 rounded-[2rem] text-2xl font-black text-slate-900 border border-slate-200 hover:bg-white transition-all bg-white shadow-sm flex items-center justify-center gap-4 group">
                    Explore Platform <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                 </button>
                 <button onClick={() => onNavigate?.('contact')} className="px-16 py-8 rounded-[2rem] text-2xl font-black text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center gap-4 group">
                    Talk to an Architect
                 </button>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Signature Footer */}
      <div className="h-32 flex items-center justify-center border-t border-slate-100 bg-white">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            Hay-AI provides the governed AI reasoning and orchestration layer that ensures security decisions are explainable, policy-constrained, and auditable.
         </p>
      </div>
    </div>
  );
};
