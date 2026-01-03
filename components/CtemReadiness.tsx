
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, ShieldCheck, Zap, BarChart3, Search, 
  ArrowRight, CheckCircle2, History, Scale, Users, 
  Sparkles, FileText, Bot, Gavel, Layout, 
  RefreshCw, TrendingDown, ClipboardCheck, Network,
  Globe, Package, Code, ShieldAlert, Workflow,
  XCircle, ListChecks, Activity, ArrowUpRight
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

export const CtemReadiness: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-12 overflow-x-hidden relative">
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-slate-100 bg-[#FBFBF9]">
        <IntelligenceFabric density={1.4} isDark={false} />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 text-hayrok-orange text-[10px] font-black shadow-sm mx-auto mb-10 tracking-[0.4em] uppercase backdrop-blur-sm"
          >
            <Target size={12} className="animate-pulse" />
            Framework Alignment: CTEM
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[8.5rem] font-black tracking-tight leading-[0.85] text-slate-900 mb-10 uppercase"
          >
            Continuous Threat <br />
            <span className="text-hayrok-orange italic tracking-tighter">Exposure Management.</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-3xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium mb-12"
          >
            Stop stalling at discovery. Hayrok provides the execution layer needed to validate exploitability, govern decisions, and close the loop on exposure risk.
          </motion.p>

          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={() => onNavigate?.('demo')} className="w-full sm:w-auto bg-hayrok-orange hover:bg-orange-600 text-white px-12 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
              Request CTEM Readiness Brief
            </button>
            <button onClick={() => onNavigate?.('contact')} className="w-full sm:w-auto px-12 py-6 rounded-2xl font-black text-xl text-slate-900 border border-slate-200 hover:bg-white transition-all bg-white shadow-sm flex items-center gap-3">
              <BarChart3 size={20} className="text-hayrok-orange" />
              Talk to a Strategist
            </button>
          </motion.div>
        </div>
      </section>

      {/* The Problem: The Implementation Gap */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">The Challenge</h2>
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight uppercase">
                The CTEM <br/> <span className="text-slate-400 italic">Execution Gap.</span>
              </h3>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
                Most CTEM initiatives follow the Gartner roadmap—Scope, Discover, Prioritize—but fail at the most critical stage: <span className="text-slate-900 font-black italic">Mobilization.</span>
              </p>
              
              <div className="space-y-6">
                 {[
                   { t: "The Discovery Dead-End", d: "Teams find thousands of issues but lack the technical proof to drive remediation." },
                   { t: "Prioritization Without Proof", d: "Relying on generic severity scores that ignore environment-specific reachability." },
                   { t: "Disconnected Governance", d: "Exposure data exists in silos, separate from final risk acceptance and board reporting." }
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
                     <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.6em] mb-12">The Industry Reality</p>
                     <p className="text-3xl md:text-5xl font-black italic text-white mb-10 leading-tight">
                        “Visibility is cheap. <br/> <span className="text-hayrok-orange">Validation</span> is the currency of <br/> <span className="text-slate-400 underline decoration-hayrok-orange underline-offset-8">material risk reduction.</span>”
                     </p>
                     <p className="text-slate-500 font-bold uppercase tracking-widest text-[11px]">Why 70% of CTEM programs fail to reduce attack surface.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Hayrok Solution: Unified Execution Layer */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center max-w-4xl mx-auto mb-24">
              <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">The Hayrok Solution</h2>
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">A Unified <br/><span className="text-hayrok-orange italic">Execution Fabric.</span></h3>
              <p className="text-xl text-slate-500 font-medium mt-10">Hayrok acts as the mobilization engine that closes the CTEM loop, applying consistent workflows across AppSec, Cloud, and Supply Chain.</p>
           </div>

           <div className="grid lg:grid-cols-4 gap-6">
              {[
                { 
                  n: "01", t: "Discover", 
                  h: "Exposure Signals", 
                  d: "Normalizes and aggregates signals from multi-domain telemetry. We integrate with your existing stack to build a complete exposure inventory.",
                  icon: Search,
                  points: ["Continuous Scoping", "Signal Normalization", "Cross-Domain Inventory"]
                },
                { 
                  n: "02", t: "Validate", 
                  h: "Genesis Validation", 
                  d: "Proves exploitability via Genesis. We move from 'presence' to 'proof' by safely simulating attack paths in your environment.",
                  icon: Zap,
                  points: ["Attack Path Confirmation", "Safe Simulation", "Technical Evidence"]
                },
                { 
                  n: "03", t: "Govern", 
                  h: "Decision Lineage", 
                  d: "Governs remediation and acceptance in Hive. Every risk outcome is recorded with a traceable reasoning chain and auditable rationale.",
                  icon: Gavel,
                  points: ["Policy-Bound Decisions", "Audit-Ready Logs", "Executive Rationale"]
                },
                { 
                  n: "04", t: "Track", 
                  h: "Risk Movement", 
                  d: "Tracks risk reduction and movement over time. Measure the actual effectiveness of your security investments with evidence.",
                  icon: RefreshCw,
                  points: ["Remediation Velocity", "Residual Risk Trends", "Posture Benchmarking"]
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

      {/* Strategic Outcome Section */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
         <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-20 items-center">
               <div className="lg:col-span-5">
                  <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-10">The Result</h2>
                  <h3 className="text-4xl md:text-6xl font-black mb-10 leading-tight uppercase tracking-tight">Closing the <br/> <span className="text-hayrok-orange">Exposure Loop.</span></h3>
                  <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                    CTEM is only successful when it results in mobilization. Hayrok ensures that every discovered exposure has a path to a validated, auditable decision.
                  </p>
                  
                  <div className="space-y-8">
                     {[
                        { t: "Programs That Close the Loop", d: "Move from 'knowing' to 'fixing' with validated evidence." },
                        { t: "Measurable Surface Reduction", d: "Prove that your efforts are actually shrinking the exploitable attack surface." },
                        { t: "Clear Executive Reporting", d: "Communicate security posture in terms of business risk, not vulnerability counts." }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-6 items-start">
                           <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-hayrok-orange shrink-0 shadow-lg">
                              <CheckCircle2 size={20} />
                           </div>
                           <div>
                              <h5 className="text-lg font-black uppercase tracking-tight text-white mb-1">{item.t}</h5>
                              <p className="text-sm text-slate-400 font-medium">{item.d}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="lg:col-span-7">
                  <div className="bg-white/5 border border-white/10 rounded-[4rem] p-12 md:p-20 relative overflow-hidden shadow-3xl">
                     <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Activity size={200} className="text-hayrok-orange" />
                     </div>
                     <div className="relative z-10">
                        <div className="flex items-center gap-3 text-hayrok-orange mb-8">
                           <Sparkles size={16} />
                           <span className="text-[10px] font-black uppercase tracking-[0.4em]">Continuous Maturity</span>
                        </div>
                        <p className="text-3xl md:text-5xl font-black italic leading-tight mb-10">
                           "Hayrok transforms <span className="text-hayrok-orange">CTEM activity</span> <br/> into <span className="text-white underline decoration-hayrok-orange decoration-4 underline-offset-8">Defensible Risk Ownership.</span>"
                        </p>
                        <div className="h-px w-24 bg-white/10 mb-10" />
                        <p className="text-slate-400 font-medium text-lg leading-relaxed">
                          By providing a central system of record for risk decisions, Hayrok ensures that every finding—whether fixed, accepted, or monitored—is backed by technical proof and auditable rationale.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-stretch">
               <div className="lg:col-span-5 bg-white rounded-[4rem] p-12 md:p-16 border border-slate-200 shadow-sm">
                  <h3 className="text-3xl font-black text-slate-900 mb-10 tracking-tight uppercase">Who is this <br/> <span className="text-hayrok-orange italic text-2xl md:text-4xl">Solution For?</span></h3>
                  <div className="space-y-4">
                     {[
                        "Security leaders implementing CTEM programs",
                        "Threat exposure and risk management teams",
                        "Organizations struggling to mobilize remediation",
                        "Compliance and audit teams requiring evidence paths",
                        "CISOs needing clear risk-reduction reporting"
                     ].map((p, i) => (
                        <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-hayrok-orange transition-all">
                           <CheckCircle2 className="text-hayrok-orange shrink-0 mt-0.5" size={20} />
                           <span className="font-bold text-slate-700 text-sm uppercase tracking-tight">{p}</span>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="lg:col-span-7 bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden group shadow-2xl flex flex-col justify-center">
                  <div className="absolute inset-0 bg-grid-white opacity-5" />
                  <h4 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-12 flex items-center gap-3">
                     <ClipboardCheck size={16} /> Business Integrity
                  </h4>
                  <div className="space-y-12 relative z-10">
                     <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-500 shrink-0 border border-white/10">
                           <ShieldAlert size={24} />
                        </div>
                        <p className="text-2xl font-black uppercase text-slate-400">“We have thousands of prioritized vulnerabilities.”</p>
                     </div>
                     <ArrowRight size={32} className="text-hayrok-orange mx-auto" />
                     <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 rounded-2xl bg-hayrok-orange text-white flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/30">
                           <CheckCircle2 size={24} />
                        </div>
                        <p className="text-2xl md:text-3xl font-black uppercase text-white">“We have validated our material exposure and closed the loop on remediation.”</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 bg-[#FCFCFA] text-center border-t border-slate-100">
         <div className="container mx-auto px-6 relative z-10">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
               <h3 className="text-5xl md:text-[10rem] font-black text-slate-900 mb-12 tracking-tight leading-[0.8] uppercase">
                 CTEM <br/> <span className="text-hayrok-orange italic tracking-tighter">Mobilized.</span>
               </h3>
               <p className="text-xl md:text-3xl text-slate-500 font-medium mb-16 leading-relaxed max-w-3xl mx-auto">
                  Bring clarity, velocity, and governance to your exposure management program. Experience the future of Continuous Threat Exposure Management.
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
            CTEM Readiness and execution powered by Hayrok Hive, Genesis, and CodeFabrics. Governed, continuous, and built for measurable risk reduction.
         </p>
      </div>
    </div>
  );
};
