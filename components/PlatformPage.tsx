import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Zap, BarChart3, Code, Search, Eye, 
  Target, ShieldCheck, ArrowRight, Bot, Lock, 
  Layers, CheckCircle2, ShieldAlert, Gavel, 
  /* Added UserCheck icon to fix Cannot find name error */
  History, Sparkles, Users, UserCheck, Info, TrendingDown,
  XCircle, ClipboardCheck, Briefcase, Globe
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

export const PlatformPage: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
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
            Governed, AI-Enabled Security Risk Management
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[9rem] font-black tracking-tight leading-[0.85] text-slate-900 mb-10 uppercase"
          >
            From Security Noise <br />
            <span className="text-hayrok-orange italic tracking-tighter">To Confident Decisions.</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-3xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium mb-12"
          >
            Hayrok helps organizations continuously identify, validate, and prioritize real security risk—with evidence leaders can trust.
          </motion.p>

          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={() => onNavigate?.('demo')} className="w-full sm:w-auto bg-hayrok-orange hover:bg-orange-600 text-white px-12 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
              See How Hayrok Works
            </button>
            <button onClick={() => onNavigate?.('contact')} className="w-full sm:w-auto px-12 py-6 rounded-2xl font-black text-xl text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all bg-white shadow-sm flex items-center gap-3">
              <Users size={20} className="text-hayrok-orange" />
              Talk to a Security Architect
            </button>
          </motion.div>
        </div>
      </section>

      {/* What Hayrok Solves: The Confidence Problem */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">The Gap</h2>
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight uppercase">
                The Problem <br/> Isn’t Visibility — <br/>
                <span className="text-hayrok-orange italic">It’s Confidence.</span>
              </h3>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
                Most organizations already have tools. What they lack is confidence in their decisions. Leaders are overwhelmed by thousands of disconnected findings and pressure to prove real risk reduction.
              </p>
              
              <div className="space-y-4">
                 {[
                   "Thousands of disconnected findings",
                   "Conflicting severity scores",
                   "Limited insight into exploitability",
                   "Pressure to prove reduction to boards & regulators"
                 ].map((problem, i) => (
                    <div key={i} className="flex gap-4 items-center">
                       <XCircle size={20} className="text-red-400 shrink-0" />
                       <span className="text-lg font-bold text-slate-700">{problem}</span>
                    </div>
                 ))}
              </div>
            </motion.div>

            <div className="relative">
               <div className="bg-slate-900 rounded-[4rem] p-12 shadow-2xl relative overflow-hidden text-white min-h-[500px] flex flex-col justify-center border border-white/5">
                  <div className="absolute inset-0 bg-grid-white opacity-5" />
                  <div className="relative z-10 text-center">
                    <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-8">The Core Question</p>
                    <p className="text-4xl md:text-5xl font-black italic text-white mb-10 leading-tight">
                      “What should <br/> we act on — <br/> <span className="text-hayrok-orange underline decoration-4 underline-offset-8">and why?</span>”
                    </p>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Hayrok exists to provide the answer.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the Hayrok Platform Is */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
           <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                 <Layers size={320} className="text-hayrok-orange" />
              </div>
              <div className="relative z-10 max-w-4xl">
                 <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.6em] mb-12">Platform Definition</h2>
                 <h3 className="text-4xl md:text-[5.5rem] font-black mb-10 leading-[0.9] tracking-tight uppercase">
                   Real Risk Reduction. <br/>
                   <span className="text-hayrok-orange italic">Not Just More Data.</span>
                 </h3>
                 <p className="text-xl md:text-[2.75rem] text-slate-400 font-medium leading-relaxed mb-16">
                    Hayrok is a governed, AI-enabled security risk intelligence platform that helps organizations continuously identify, validate, and manage security exposure, turning fragmented security signals into auditable, decision-ready risk insights.
                 </p>
                 
                 <div className="grid md:grid-cols-2 gap-8">
                    {[
                      { l: "Aggregates security signals", i: Search },
                      { l: "Validates what is exploitable", i: Zap },
                      { l: "Applies business & attack context", i: Target },
                      { l: "Enforces governance & accountability", i: Gavel }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl">
                         <item.i size={20} className="text-hayrok-orange" />
                         <span className="font-bold uppercase tracking-tight text-sm">{item.l}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* How Hayrok Works: 4 Step At a Glance */}
      <section className="py-32 bg-[#FCFCFA] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Execution Lifecycle</h2>
            <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">Defensible <br/><span className="text-hayrok-orange italic">Outcomes.</span></h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: "01", t: "Visibility", d: "Understand exposure across applications, cloud, identity, and supply chain.", icon: Globe },
              { n: "02", t: "Validation", d: "Safely simulate real attack paths to prove exploitability with Genesis.", icon: Zap },
              { n: "03", t: "Intelligence", d: "Correlate findings into prioritized, business-relevant risk profiles.", icon: Sparkles },
              { n: "04", t: "Governance", d: "Ensure every decision is traceable, auditable, and defensible in Hive.", icon: History }
            ].map((step, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                className="p-10 bg-white border border-slate-200 rounded-[3.5rem] hover:shadow-2xl hover:border-hayrok-orange/30 transition-all group h-full flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                   <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-hayrok-orange group-hover:bg-hayrok-orange group-hover:text-white transition-all transform group-hover:scale-110 shadow-sm">
                      <step.icon size={24} strokeWidth={2.5} />
                   </div>
                   <span className="text-2xl font-black text-slate-100 group-hover:text-orange-50 transition-colors">{step.n}</span>
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight uppercase">{step.t}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed flex-1">{step.d}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 flex justify-center">
             <div className="px-8 py-4 bg-slate-900 text-white rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-3">
                <CheckCircle2 size={16} className="text-hayrok-orange" />
                Continuous, Evidence-Based Risk Reduction
             </div>
          </div>
        </div>
      </section>

      {/* Platform Components: 4 Pillars */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">The Platform Stack</h2>
               <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">One Platform. <br/><span className="text-hayrok-orange italic">Clear Roles.</span></h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
               {[
                 { 
                   id: 'hive', title: "Hive", sub: "Risk Intelligence & Decision Layer", 
                   desc: "The core intelligence system. Turns fragmented data into prioritized, executive-grade decisions aligned to business impact.",
                   points: ["Attack-path-driven prioritization", "Executive and board reporting", "Audit-ready governance"],
                   icon: BarChart3, accent: "text-blue-600"
                 },
                 { 
                   id: 'genesis', title: "Genesis", sub: "Simulation & Validation", 
                   desc: "Safely simulates real-world attack paths to prove exploitability and measure blast radius for remediation verification.",
                   points: ["Proves attacker capability", "Measures real impact", "Non-destructive simulations"],
                   icon: Zap, accent: "text-hayrok-orange"
                 },
                 { 
                   id: 'codefabrics', title: "CodeFabrics", sub: "Supply Chain Risk Governance", 
                   desc: "Governs software risk across build-to-runtime lifecycle without replacing your preferred SCA/AppSec scanners.",
                   points: ["Bring Your Own Scanner (BYOS)", "SCA, IaC, and AI risk domains", "Full accountability trails"],
                   icon: Code, accent: "text-emerald-600"
                 },
                 { 
                   id: 'hay-ai', title: "Hay-AI", sub: "Governed Intelligence Copilot", 
                   desc: "Assists security teams with explainable, policy-constrained intelligence that guides prioritization and action.",
                   points: ["Explains why risks matter", "Human-in-the-loop by design", "Transparent, auditable AI usage"],
                   icon: Bot, accent: "text-indigo-600"
                 }
               ].map((mod, i) => (
                 <div key={i} onClick={() => onNavigate?.(mod.id)} className="p-12 bg-slate-50 border border-slate-200 rounded-[4rem] hover:bg-white hover:border-hayrok-orange hover:shadow-2xl transition-all group cursor-pointer flex flex-col">
                    <div className="flex items-start justify-between mb-10">
                       <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform ${mod.accent}`}>
                          <mod.icon size={32} strokeWidth={2.5} />
                       </div>
                       <ArrowRight size={24} className="text-slate-200 group-hover:text-hayrok-orange transition-all group-hover:translate-x-1" />
                    </div>
                    <h4 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tight">{mod.title}</h4>
                    <p className="text-hayrok-orange text-[10px] font-black uppercase tracking-[0.4em] mb-8">{mod.sub}</p>
                    <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10 flex-1">{mod.desc}</p>
                    <div className="space-y-4">
                       {mod.points.map((p, j) => (
                          <div key={j} className="flex items-center gap-3 text-xs font-black text-slate-400 uppercase tracking-widest">
                             <div className="w-1.5 h-1.5 rounded-full bg-hayrok-orange opacity-40" />
                             {p}
                          </div>
                       ))}
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Why Different Section */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-stretch">
               <motion.div {...fadeInUp}>
                  <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight uppercase">Built for Trust, <br/> <span className="text-hayrok-orange italic text-3xl md:text-5xl">Not Tool Sprawl.</span></h3>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                    Hayrok is designed for environments where decisions must be explained, justified, and defended.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { l: "Evidence over assumptions", i: Target },
                      { l: "Validation over severity scores", i: Zap },
                      { l: "Governance over automation theater", i: Gavel },
                      { l: "AI with accountability", i: UserCheck }
                    ].map((row, i) => (
                      <div key={i} className="flex items-center gap-5 p-6 bg-white rounded-3xl border border-slate-200 group hover:border-hayrok-orange transition-all">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-hayrok-orange group-hover:scale-110 transition-transform">
                           <row.i size={20} />
                        </div>
                        <span className="font-black text-slate-900 text-lg uppercase tracking-tight">{row.l}</span>
                      </div>
                    ))}
                  </div>
               </motion.div>

               <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl flex flex-col justify-center">
                  <div className="absolute inset-0 bg-grid-white opacity-5" />
                  <h4 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-12">Analyst Strategic Summary</h4>
                  <p className="text-2xl md:text-3xl font-black italic leading-snug mb-12">
                    “Hayrok is an AI-enabled security risk intelligence platform that integrates exposure visibility, breach validation, and governance to help organizations prove real risk reduction.”
                  </p>
                  <div className="flex flex-wrap gap-4">
                     {["CTEM Alignment", "BAS-Aligned", "Decision Intelligence", "Responsible AI"].map(tag => (
                        <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase text-slate-300">{tag}</span>
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
               <div className="lg:col-span-5 bg-slate-50 rounded-[4rem] p-12 md:p-16 border border-slate-200">
                  <h3 className="text-3xl font-black text-slate-900 mb-10 tracking-tight uppercase">Who is <br/> <span className="text-hayrok-orange italic">Hayrok For?</span></h3>
                  <div className="space-y-6">
                     {[
                        "Financial services & Banking",
                        "Healthcare & Life sciences",
                        "SaaS & Cloud-native enterprises",
                        "Government & Critical infrastructure"
                     ].map((p, i) => (
                        <div key={i} className="flex gap-4 items-center p-5 bg-white rounded-2xl border border-slate-100 group hover:border-hayrok-orange transition-all shadow-sm">
                           <CheckCircle2 size={18} className="text-hayrok-orange shrink-0 mt-0.5" />
                           <span className="font-bold text-slate-700 text-sm uppercase tracking-tight">{p}</span>
                        </div>
                     ))}
                  </div>
                  <div className="mt-12 pt-12 border-t border-slate-200">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Governance Alignment</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-3 opacity-50">
                       {["SOC 2", "ISO 27001", "PCI DSS", "NIS2", "AI TRiSM"].map(std => (
                         <span key={std} className="text-[9px] font-black uppercase">{std}</span>
                       ))}
                    </div>
                  </div>
               </div>

               <div className="lg:col-span-7 bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden group shadow-2xl flex flex-col justify-center text-center md:text-left">
                  <div className="absolute inset-0 bg-grid-white opacity-5" />
                  <h4 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-12 flex items-center justify-center md:justify-start gap-3">
                     <ClipboardCheck size={16} /> Business Outcomes
                  </h4>
                  <div className="space-y-12 relative z-10">
                     <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-500 shrink-0 border border-white/10">
                           <XCircle size={24} />
                        </div>
                        <p className="text-2xl font-black uppercase text-slate-400">“Stop managing lists.”</p>
                     </div>
                     <div className="md:pl-16">
                       <ArrowRight size={32} className="text-hayrok-orange mx-auto md:mx-0 rotate-90 md:rotate-0" />
                     </div>
                     <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="w-12 h-12 rounded-2xl bg-hayrok-orange text-white flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/30">
                           <CheckCircle2 size={24} />
                        </div>
                        <p className="text-2xl md:text-3xl font-black uppercase text-white">“Start managing risk — with confidence.”</p>
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
               <h3 className="text-5xl md:text-[10rem] font-black text-slate-900 mb-12 tracking-tight leading-[0.8] uppercase">
                 Decisions <br/> <span className="text-hayrok-orange italic tracking-tighter">With Proof.</span>
               </h3>
               <p className="text-xl md:text-3xl text-slate-500 font-medium mb-16 leading-relaxed max-w-3xl mx-auto">
                  Take the guesswork out of security operations. Join the future of Security Risk Intelligence.
               </p>
               <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                 <button onClick={() => onNavigate?.('demo')} className="bg-hayrok-orange text-white px-16 py-8 rounded-[2rem] text-2xl font-black hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
                    See How Hayrok Works
                 </button>
                 <button onClick={() => onNavigate?.('contact')} className="px-16 py-8 rounded-[2rem] text-2xl font-black text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all bg-white shadow-sm flex items-center justify-center gap-4 group">
                    Talk to an Architect <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                 </button>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Signature Footer */}
      <div className="h-32 flex items-center justify-center border-t border-slate-100 bg-white">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            Hayrok turns security exposure into validated, defensible security decisions through governed intelligence.
         </p>
      </div>
    </div>
  );
};