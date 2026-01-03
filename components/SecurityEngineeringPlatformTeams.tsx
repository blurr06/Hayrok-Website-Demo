
import React from 'react';
import { motion } from 'framer-motion';
// Fixed Error in file components/SecurityEngineeringPlatformTeams.tsx on line 243: Cannot find name 'TrendingUp'. Added TrendingUp to imports.
import { 
  Activity, ShieldCheck, Zap, Cpu, Target, 
  ArrowRight, CheckCircle2, Bot, Lock, Layers, Gavel, 
  History, Sparkles, Database, FileText, XCircle,
  Network, Globe, ClipboardCheck, ArrowDown,
  Terminal, Server, Layout, Search, BarChart3,
  RefreshCw, ShieldAlert, Workflow, ListChecks,
  TrendingUp
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

export const SecurityEngineeringPlatformTeams: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-12 overflow-x-hidden relative">
      
      {/* Immersive Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-slate-100 bg-[#FBFBF9]">
        <IntelligenceFabric density={1.4} isDark={false} />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 text-hayrok-orange text-[10px] font-black shadow-sm mx-auto mb-10 tracking-[0.4em] uppercase backdrop-blur-sm"
          >
            <Activity size={12} className="animate-pulse" />
            Roles: Security Engineering & Platform
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[8.5rem] font-black tracking-tight leading-[0.85] text-slate-900 mb-10 uppercase"
          >
            Operationalizing <br />
            <span className="text-hayrok-orange italic tracking-tighter">Validation at Scale.</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-3xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium mb-12"
          >
            Stop the manual retesting cycle. Hayrok delivers operationally safe, policy-bound security validation that integrates natively with platform engineering workflows.
          </motion.p>

          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={() => onNavigate?.('demo')} className="w-full sm:w-auto bg-hayrok-orange text-white px-12 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
              Request Technical Blueprint
            </button>
            <button onClick={() => onNavigate?.('contact')} className="w-full sm:w-auto px-12 py-6 rounded-2xl font-black text-xl text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all bg-white shadow-sm flex items-center gap-3">
              <Terminal size={20} className="text-hayrok-orange" />
              Talk to a Security Architect
            </button>
          </motion.div>
        </div>
      </section>

      {/* Scenario Deep Dive: The Disruption Fear */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">The Scenario</h2>
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight uppercase">
                The Disruption <br/> <span className="text-slate-400 italic">Dilemma.</span>
              </h3>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
                Security engineers need repeatable validation workflows that won’t disrupt production systems. Traditional pentesting and aggressive scanning are often blocked because the risk of downtime outweighs the benefit of discovery.
              </p>
              
              <div className="space-y-6">
                 {[
                   { t: "Fragile Production Environments", d: "Aggressive exploit attempts can crash legacy services or disrupt sensitive cloud-native workloads." },
                   { t: "Manual Validation Bottleneck", d: "Retesting fixes manually is unscalable, leading to 'zombie' findings that persist long after they should have been cleared." },
                   { t: "Lack of Clear Scoping", d: "Without strict policy boundaries, autonomous validation risks exceeding its mandate and hitting unauthorized assets." }
                 ].map((p, i) => (
                    <div key={i} className="flex gap-5 items-start">
                       <XCircle size={24} className="text-red-400 shrink-0 mt-1" />
                       <div>
                          <p className="text-lg font-black text-slate-900 uppercase tracking-tight mb-1">{p.t}</p>
                          <p className="text-slate-500 font-medium">{p.d}</p>
                       </div>
                    </div>
                 ))}
              </div>
            </motion.div>

            <div className="relative">
               <div className="bg-slate-900 rounded-[4rem] p-12 shadow-2xl relative overflow-hidden text-white flex flex-col justify-center border border-white/5 h-[550px]">
                  <div className="absolute inset-0 bg-grid-white opacity-5" />
                  <div className="relative z-10">
                     <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.6em] mb-12">The Engineer's Reality</p>
                     <p className="text-3xl md:text-5xl font-black italic text-white mb-10 leading-tight">
                        “If validation <span className="text-hayrok-orange">breaks production</span>, security loses its <span className="text-slate-400 underline decoration-hayrok-orange underline-offset-8">seat at the table.</span>”
                     </p>
                     <p className="text-slate-500 font-bold uppercase tracking-widest text-[11px]">The fundamental challenge of offensive operations.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Hayrok Helps: Operationalizing Offensive Security */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center max-w-4xl mx-auto mb-24">
              <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">How Hayrok Helps</h2>
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">Safe, Repeatable <br/><span className="text-hayrok-orange italic">Intelligence Loops.</span></h3>
              <p className="text-xl text-slate-500 font-medium mt-10">Hayrok provides the guardrails and automation needed to scale offensive expertise across the platform lifecycle.</p>
           </div>

           <div className="grid lg:grid-cols-3 gap-8">
              {[
                { 
                  n: "01", t: "Validate", 
                  h: "Non-Destructive Probes", 
                  d: "Genesis uses policy-bound, safe simulations to prove exploitability. Probes are constrained to logic checks, never risking data loss or system instability.",
                  icon: ShieldCheck,
                  points: ["Rego-based policy gates", "No-impact payloads", "Controlled execution"]
                },
                { 
                  n: "02", t: "Architect", 
                  h: "Clear Separation", 
                  d: "Cleanly separates exposure (the finding), validation (the proof), and governance (the decision). This multi-layered approach ensures structural reliability.",
                  icon: Layers,
                  points: ["Hive SoR decoupling", "Genesis execution isolation", "Hay-AI reasoning logic"]
                },
                { 
                  n: "03", t: "Verify", 
                  h: "Continuous Retesting", 
                  d: "Automatic re-validation after fixes are applied to prove effectiveness. Ensure that vulnerabilities stay fixed without manual engineer effort.",
                  icon: RefreshCw,
                  points: ["Regression validation", "Fix effectiveness proof", "Closed-loop ticketing"]
                }
              ].map((step, i) => (
                 <motion.div 
                    key={i}
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="whileInView"
                    className="p-10 bg-slate-50 border border-slate-200 rounded-[3.5rem] group hover:bg-white hover:border-hayrok-orange hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
                 >
                    <div className="flex items-center justify-between mb-8">
                       <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-hayrok-orange shadow-sm group-hover:bg-hayrok-orange group-hover:text-white transition-all transform group-hover:rotate-3">
                          <step.icon size={28} />
                       </div>
                       <span className="text-2xl font-black text-slate-200 group-hover:text-orange-100 transition-colors">{step.n}</span>
                    </div>
                    <h4 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.4em] mb-2">{step.t}</h4>
                    <h5 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight leading-tight">{step.h}</h5>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-1">{step.d}</p>
                    <div className="space-y-3 pt-6 border-t border-slate-100">
                       {step.points.map((p, j) => (
                          <div key={j} className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                             <CheckCircle2 size={12} className="text-hayrok-orange" />
                             {p}
                          </div>
                       ))}
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Strategic Outcome: Safety at Scale */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
         <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="relative">
                  <div className="aspect-square max-w-lg mx-auto bg-white/5 border border-white/10 rounded-[4rem] p-12 flex flex-col items-center justify-center text-center shadow-3xl">
                     <div className="w-32 h-32 bg-hayrok-orange rounded-[2.5rem] flex items-center justify-center mb-10 shadow-2xl shadow-orange-500/30">
                        <Server size={60} />
                     </div>
                     <h4 className="text-3xl font-black uppercase tracking-tight mb-6">Safety <br/> <span className="text-hayrok-orange italic">is the priority.</span></h4>
                     <p className="text-slate-400 font-medium leading-relaxed">
                        Security validation shouldn't be a source of instability. Hayrok treats your production systems with the same respect as your platform teams do, delivering proof without the pain.
                     </p>
                  </div>
                  {/* Decorative Elements */}
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute -top-10 -right-10 w-40 h-40 bg-hayrok-orange/20 blur-[100px] rounded-full" 
                  />
               </div>

               <div>
                  <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-10">Strategic Outcome</h2>
                  <h3 className="text-4xl md:text-6xl font-black mb-10 leading-tight uppercase tracking-tight">Operationally Safe <br/> <span className="text-hayrok-orange">Validation.</span></h3>
                  <div className="space-y-10">
                     {[
                        { t: "Scale Without Headcount", d: "Automate the repetitive 'prove it' workflows, allowing your senior engineers to focus on complex risk modeling." },
                        { t: "Ecosystem Interoperability", d: "Integrate validation outcomes directly into existing SRE and platform dashboards (Datadog, Splunk, Jira)." },
                        { t: "Governance Readiness", d: "Maintain a complete audit trail of every validation run, satisfying compliance without manual log collection." }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-6 group">
                           <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-hayrok-orange group-hover:bg-hayrok-orange group-hover:text-white transition-all">
                              <CheckCircle2 size={24} />
                           </div>
                           <div>
                              <h5 className="text-xl font-black uppercase tracking-tight mb-2">{item.t}</h5>
                              <p className="text-slate-400 font-medium leading-relaxed">{item.d}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Strategic Impact Section */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Strategic Impact</h2>
               <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">Measurable <br/><span className="text-hayrok-orange italic">Stability.</span></h3>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
               <div className="lg:col-span-8 bg-slate-50 border border-slate-200 rounded-[4rem] p-12 md:p-16 flex flex-col justify-center">
                  <h4 className="text-3xl font-black text-slate-900 mb-10 uppercase">Velocity <span className="text-hayrok-orange">Unblocked.</span></h4>
                  <div className="grid md:grid-cols-2 gap-10">
                     <div className="space-y-4">
                        <div className="flex items-center gap-3 text-hayrok-orange">
                           <TrendingUp size={24} strokeWidth={3} />
                           <span className="text-sm font-black uppercase tracking-widest">Efficiency</span>
                        </div>
                        <p className="text-4xl font-black text-slate-900 tracking-tighter">Automated Re-validation.</p>
                        <p className="text-slate-500 font-medium">Cut the feedback loop from days to minutes by automatically retesting fixes as soon as they are deployed.</p>
                     </div>
                     <div className="space-y-4">
                        <div className="flex items-center gap-3 text-indigo-500">
                           <Lock size={24} strokeWidth={3} />
                           <span className="text-sm font-black uppercase tracking-widest">Trust</span>
                        </div>
                        <p className="text-4xl font-black text-slate-900 tracking-tighter">Zero Disruption.</p>
                        <p className="text-slate-500 font-medium">Confidently run validation cycles in production knowing that Hayrok’s safety policies are always enforced.</p>
                     </div>
                  </div>
               </div>

               <div className="lg:col-span-4 bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl flex flex-col justify-center text-center">
                  <div className="absolute inset-0 bg-grid-white opacity-5" />
                  <Target className="text-hayrok-orange mx-auto mb-8" size={56} />
                  <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">Defensible Posture Proof</h4>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">
                     Move beyond "we think we're secure" to "we proved we're secure" with automated artifact generation for every validation event.
                  </p>
                  <div className="h-px w-24 bg-white/10 mx-auto mt-10" />
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 bg-[#FCFCFA] text-center border-t border-slate-100">
         <div className="container mx-auto px-6 relative z-10">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
               <h3 className="text-5xl md:text-[10rem] font-black text-slate-900 mb-12 tracking-tight leading-[0.8] uppercase">
                 Scale Your <br/> <span className="text-hayrok-orange italic tracking-tighter">Expertise.</span>
               </h3>
               <p className="text-xl md:text-3xl text-slate-500 font-medium mb-16 leading-relaxed max-w-3xl mx-auto">
                  Bring clarity, safety, and continuous validation to your platform security program. Experience the Hayrok way.
               </p>
               <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                 <button onClick={() => onNavigate?.('demo')} className="bg-hayrok-orange text-white px-16 py-8 rounded-[2rem] text-2xl font-black hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
                    Request technical Walkthrough
                 </button>
                 <button onClick={() => onNavigate?.('platform')} className="px-16 py-8 rounded-[2rem] text-2xl font-black text-slate-900 border border-slate-200 hover:bg-white transition-all bg-white shadow-sm flex items-center justify-center gap-4 group">
                    Explore Platform <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                 </button>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Signature Footer */}
      <div className="h-32 flex items-center justify-center border-t border-slate-100 bg-white">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            Security Engineering and Platform Team solutions powered by Hayrok Hive, Genesis, and CodeFabrics. Governed, continuous, and built for measurable velocity.
         </p>
      </div>
    </div>
  );
};
