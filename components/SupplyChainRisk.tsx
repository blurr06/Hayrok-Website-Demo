
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Package, ShieldCheck, Zap, Code, Search, Target, 
  ArrowRight, CheckCircle2, Bot, Lock, Layers, Gavel, 
  History, Sparkles, Database, FileText, XCircle,
  Activity, Network, Globe, ClipboardCheck, ArrowDown,
  Cpu, GitMerge, ListChecks, ShieldAlert, Workflow, TrendingDown
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

export const SupplyChainRisk: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-12 overflow-x-hidden relative">
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-slate-100 bg-[#FBFBF9]">
        <IntelligenceFabric density={1.2} isDark={false} />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 text-hayrok-orange text-[10px] font-black shadow-sm mx-auto mb-10 tracking-[0.4em] uppercase backdrop-blur-sm"
          >
            <Package size={12} className="animate-pulse" />
            Strategic Solution: Supply Chain
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[8.5rem] font-black tracking-tight leading-[0.85] text-slate-900 mb-10 uppercase"
          >
            Software Supply Chain <br />
            <span className="text-hayrok-orange italic tracking-tighter">& Dependency Risk.</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-3xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium mb-12"
          >
            Go beyond static SBOM lists. Hayrok provides the validation layer to prove which vulnerable dependencies represent real-world risk to your production environments.
          </motion.p>

          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={() => onNavigate?.('demo')} className="w-full sm:w-auto bg-hayrok-orange hover:bg-orange-600 text-white px-12 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
              Request Technical Deep Dive
            </button>
            <button onClick={() => onNavigate?.('contact')} className="w-full sm:w-auto px-12 py-6 rounded-2xl font-black text-xl text-slate-900 border border-slate-200 hover:bg-white transition-all bg-white shadow-sm flex items-center gap-3">
              <Bot size={20} className="text-hayrok-orange" />
              Consult an Architect
            </button>
          </motion.div>
        </div>
      </section>

      {/* The Problem: The Reachability Gap */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">The Problem</h2>
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight uppercase">
                The Dependency <br/> <span className="text-slate-400 italic">Paradox.</span>
              </h3>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
                Organizations know they have vulnerable dependencies. Scanners (SCA) find thousands of issues, but they cannot answer the one question that matters:
              </p>
              
              <div className="p-8 bg-white border-l-4 border-hayrok-orange rounded-r-[2.5rem] shadow-sm mb-12">
                 <p className="text-2xl md:text-3xl font-black text-slate-900 italic leading-tight">
                   "Is this vulnerable library actually <span className="text-hayrok-orange">reachable or exploitable</span> in our specific production environment?"
                 </p>
              </div>

              <div className="space-y-6">
                 {[
                   { t: "The SBOM Static Wall", d: "Lists of packages provide inventory, not an understanding of risk paths." },
                   { t: "Transitive Blindness", d: "Vulnerabilities buried in deep, sub-dependencies are often missed or mis-prioritized." },
                   { t: "Unvalidated Urgency", d: "Teams burn cycles fixing 'Critical' issues that aren't even called by the application." }
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
                     <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.6em] mb-12">Systemic Friction</p>
                     <p className="text-3xl md:text-5xl font-black italic text-white mb-10 leading-tight">
                        “80% of our code is <span className="text-hayrok-orange">Open Source</span>, <br/> and 90% of our alerts are <span className="text-slate-400 underline decoration-hayrok-orange underline-offset-8">noise.</span>”
                     </p>
                     <p className="text-slate-500 font-bold uppercase tracking-widest text-[11px]">The fundamental failure of inventory-based AppSec.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Hayrok Solution: 4-Layer Architecture */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center max-w-4xl mx-auto mb-24">
              <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">The Hayrok Solution</h2>
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">A Continuous <br/><span className="text-hayrok-orange italic">Supply Chain Pulse.</span></h3>
           </div>

           <div className="grid lg:grid-cols-4 gap-6">
              {[
                { 
                  n: "01", t: "Normalize", 
                  h: "BYOS Data Sync", 
                  d: "Normalizes SCA data across multiple tools. We ingest findings from Snyk, GitHub, Mend, and others into a unified, reachable data model.",
                  icon: Database,
                  points: ["Unified Finding Taxonomy", "Multi-Tool De-duplication", "Historical Data Persistence"]
                },
                { 
                  n: "02", t: "Map", 
                  h: "Environment Context", 
                  d: "Maps vulnerable packages to deployed services and environments. CodeFabrics identifies if a package is actually loaded in memory in production.",
                  icon: Network,
                  points: ["Runtime Reachability", "Deployment Environment Mapping", "Identity context analysis"]
                },
                { 
                  n: "03", t: "Validate", 
                  h: "Genesis Proof", 
                  d: "Validates exploitability paths for high-impact dependencies. Genesis attempts to prove if a vulnerability can be triggered from an attacker's perspective.",
                  icon: Zap,
                  points: ["Controlled Exploitation Testing", "Attack Path Confirmation", "Blast Radius Measurement"]
                },
                { 
                  n: "04", t: "Track", 
                  h: "Lifecycle Governance", 
                  d: "Tracks remediation and residual risk over time in Hive. Every upgrade or acceptance decision is recorded with its evidence chain.",
                  icon: History,
                  points: ["Remediation Velocity Tracking", "Audit-Ready Logs", "Policy-Driven Acceptance"]
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

      {/* Technical Narrative: Graph-Based Risk */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
         <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="relative">
                  <div className="aspect-square max-w-lg mx-auto bg-white/5 border border-white/10 rounded-[4rem] p-12 flex flex-col items-center justify-center text-center shadow-3xl">
                     <div className="w-32 h-32 bg-hayrok-orange rounded-[2.5rem] flex items-center justify-center mb-10 shadow-2xl shadow-orange-500/30">
                        <Network size={60} />
                     </div>
                     <h4 className="text-3xl font-black uppercase tracking-tight mb-6">Transitive Trust <br/> <span className="text-hayrok-orange italic">is the Risk.</span></h4>
                     <p className="text-slate-400 font-medium leading-relaxed">
                        Vulnerabilities are rarely in the top-level package you include. They are buried four layers deep in dependencies you didn't even know you had. Hayrok maps these recursive relationships to identify material exposure.
                     </p>
                  </div>
                  {/* Decorative Elements */}
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute -bottom-10 -left-10 w-64 h-64 bg-hayrok-orange/10 blur-[100px] rounded-full" 
                  />
               </div>

               <div>
                  <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-10">Governance Logic</h2>
                  <h3 className="text-4xl md:text-6xl font-black mb-10 leading-tight uppercase tracking-tight">Evidence‑Based <br/> <span className="text-hayrok-orange">Upgrades.</span></h3>
                  <div className="space-y-10">
                     {[
                        { t: "Code-to-Cloud Traceability", d: "Link a line of code in GitHub to a running container in AWS/GCP to verify reachability." },
                        { t: "Policy-as-Code Gates", d: "Enforce OPA policies that block builds containing unvalidated critical supply chain risks." },
                        { t: "Automated Evidence Replay", d: "Whenever a library is updated, Genesis automatically re-validates the path to ensure the risk is truly eliminated." }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-6 group">
                           <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-hayrok-orange group-hover:bg-hayrok-orange group-hover:text-white transition-all">
                              <ShieldCheck size={24} />
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

      {/* Outcomes & ROI Bento */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Strategic Outcomes</h2>
               <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">A Stronger <br/><span className="text-hayrok-orange italic">Posture Story.</span></h3>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
               <div className="lg:col-span-8 bg-slate-50 border border-slate-200 rounded-[4rem] p-12 md:p-16 flex flex-col justify-center">
                  <h4 className="text-3xl font-black text-slate-900 mb-10 uppercase">Measurable <span className="text-hayrok-orange">Maturity.</span></h4>
                  <div className="grid md:grid-cols-2 gap-10">
                     <div className="space-y-4">
                        <div className="flex items-center gap-3 text-hayrok-orange">
                           <TrendingDown size={24} strokeWidth={3} />
                           <span className="text-sm font-black uppercase tracking-widest">Efficiency</span>
                        </div>
                        <p className="text-4xl font-black text-slate-900 tracking-tighter">Reduced Noise.</p>
                        <p className="text-slate-500 font-medium">Filter out 90% of SCA noise by focusing on what is actually reachable and called in your build.</p>
                     </div>
                     <div className="space-y-4">
                        <div className="flex items-center gap-3 text-indigo-500">
                           <Zap size={24} strokeWidth={3} />
                           <span className="text-sm font-black uppercase tracking-widest">Velocity</span>
                        </div>
                        <p className="text-4xl font-black text-slate-900 tracking-tighter">Evidence-Based Upgrades.</p>
                        <p className="text-slate-500 font-medium">Give engineering teams a clear reason to prioritize library updates based on proven exploitability.</p>
                     </div>
                  </div>
               </div>

               <div className="lg:col-span-4 bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl flex flex-col justify-center text-center">
                  <div className="absolute inset-0 bg-grid-white opacity-5" />
                  <ClipboardCheck className="text-hayrok-orange mx-auto mb-8" size={56} />
                  <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">Audit-Ready SBOMs</h4>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">
                     Move beyond the list. Provide auditors with an annotated SBOM showing which risks have been validated and addressed.
                  </p>
                  <div className="h-px w-24 bg-white/10 mx-auto mt-10" />
               </div>
            </div>
         </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-stretch">
               <div>
                  <h3 className="text-3xl font-black text-slate-900 mb-10 tracking-tight uppercase">Who is this <br/> <span className="text-hayrok-orange italic text-2xl md:text-4xl">Solution For?</span></h3>
                  <div className="space-y-4">
                     {[
                        "AppSec engineers tired of managing Snyk/Mend spreadsheets",
                        "Security Engineering teams running CTEM programs",
                        "DevOps teams requiring automated, risk-based release gates",
                        "CISOs needing to explain supply chain risk to the board",
                        "Compliance teams managing SBOM and regulatory requirements"
                     ].map((p, i) => (
                        <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-hayrok-orange transition-all cursor-default">
                           <CheckCircle2 className="text-hayrok-orange shrink-0 mt-0.5" size={20} />
                           <span className="font-bold text-slate-700 text-sm uppercase tracking-tight">{p}</span>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden group shadow-2xl flex flex-col justify-center">
                  <div className="absolute inset-0 bg-grid-white opacity-5" />
                  <h4 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-12 flex items-center gap-3">
                     <Lock size={16} /> Decision Integrity
                  </h4>
                  <p className="text-2xl md:text-3xl font-black italic leading-snug mb-10 relative z-10">
                     "Stop patching presence. <br/> <span className="text-hayrok-orange">Start patching proof.</span>"
                  </p>
                  <div className="flex items-center gap-4 relative z-10">
                     <div className="w-1.5 h-1.5 rounded-full bg-hayrok-orange animate-pulse" />
                     <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Supply Chain Accountability Protocol</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 bg-[#FCFCFA] text-center">
         <div className="container mx-auto px-6 relative z-10">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
               <h3 className="text-5xl md:text-[9rem] font-black text-slate-900 mb-12 tracking-tight leading-[0.85] uppercase">
                 Govern <br/> <span className="text-hayrok-orange italic tracking-tighter">The Chain.</span>
               </h3>
               <p className="text-xl md:text-3xl text-slate-500 font-medium mb-16 leading-relaxed max-w-3xl mx-auto">
                  Bring clarity and accountability to your software supply chain. Experience the Hayrok approach to Dependency Risk.
               </p>
               <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                 <button onClick={() => onNavigate?.('demo')} className="bg-hayrok-orange text-white px-16 py-8 rounded-[2rem] text-2xl font-black hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
                    Schedule Technical Walkthrough
                 </button>
                 <button onClick={() => onNavigate?.('contact')} className="px-16 py-8 rounded-[2rem] text-2xl font-black text-slate-900 border border-slate-200 hover:bg-white transition-all bg-white shadow-sm flex items-center justify-center gap-4 group">
                    Consult an Architect <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                 </button>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Signature Footer */}
      <div className="h-32 flex items-center justify-center border-t border-slate-100 bg-white">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            Software Supply Chain and Dependency Risk management powered by Hayrok Hive, Genesis, and CodeFabrics. Governed, auditable, and built for enterprise trust.
         </p>
      </div>
    </div>
  );
};
