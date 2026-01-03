
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Network, ShieldCheck, Zap, Key, Target, 
  ArrowRight, CheckCircle2, Bot, Lock, Layers, Gavel, 
  History, Sparkles, Database, FileText, XCircle,
  Activity, Globe, ClipboardCheck, ArrowDown,
  Cpu, TrendingUp, TrendingDown, Fingerprint, GitBranch, Link
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

export const CloudIdentityValidation: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-12 overflow-x-hidden relative">
      
      {/* Immersive Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-slate-100 bg-[#FBFBF9]">
        <IntelligenceFabric density={1.3} isDark={false} />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 text-hayrok-orange text-[10px] font-black shadow-sm mx-auto mb-10 tracking-[0.4em] uppercase backdrop-blur-sm"
          >
            <Network size={12} className="animate-pulse" />
            Strategic Solution: Cloud & Identity
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[8.5rem] font-black tracking-tight leading-[0.85] text-slate-900 mb-10 uppercase"
          >
            Cloud & Identity <br />
            <span className="text-hayrok-orange italic tracking-tighter">Attack Path Validation.</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-3xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium mb-12"
          >
            Stop chasing isolated misconfigurations. Hayrok maps transitive trust and validates the identity-driven attack paths that lead to material impact.
          </motion.p>

          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={() => onNavigate?.('demo')} className="w-full sm:w-auto bg-hayrok-orange text-white px-12 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
              Request Technical Deep Dive
            </button>
            <button onClick={() => onNavigate?.('contact')} className="w-full sm:w-auto px-12 py-6 rounded-2xl font-black text-xl text-slate-900 border border-slate-200 hover:bg-white transition-all bg-white shadow-sm flex items-center gap-3">
              <Bot size={20} className="text-hayrok-orange" />
              Talk to a Cloud Architect
            </button>
          </motion.div>
        </div>
      </section>

      {/* Problem Deep Dive: The IAM Maze */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">The Problem</h2>
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight uppercase">
                The Identity <br/> <span className="text-slate-400 italic">Explosion.</span>
              </h3>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
                Cloud misconfigurations and identity relationships create complex attack paths that are hard to reason about with static tools. Traditional CSPM flags "insecure buckets," but ignores how an identity chains those flaws into a full-scale breach.
              </p>
              
              <div className="space-y-6">
                 {[
                   { t: "Transitive Trust Gaps", d: "Identity relationships (roles, assume-role, cross-account) create hidden permissions that scanners miss." },
                   { t: "The Chain of Exploitation", d: "Attackers don't exploit one vuln; they chain identities to traverse from dev to prod." },
                   { t: "Theoretical Urgency", d: "Teams burn cycles on 'Critical' CSPM alerts that have zero reachability or business impact." }
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
                     <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.6em] mb-12">The Identity Trap</p>
                     <p className="text-3xl md:text-5xl font-black italic text-white mb-10 leading-tight">
                        “Identity is the <span className="text-hayrok-orange">New Perimeter</span>, <br/> and our perimeter is <span className="text-slate-400 underline decoration-hayrok-orange underline-offset-8">Invisible.</span>”
                     </p>
                     <p className="text-slate-500 font-bold uppercase tracking-widest text-[11px]">The fundamental failure of static cloud security.</p>
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
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">A Unified <br/><span className="text-hayrok-orange italic">Path Validation Fabric.</span></h3>
              <p className="text-xl text-slate-500 font-medium mt-10">Hayrok acts as the execution layer that connects cloud posture to identity truth, closing the gap between 'knowing' and 'proving'.</p>
           </div>

           <div className="grid lg:grid-cols-4 gap-6">
              {[
                { 
                  n: "01", t: "Ingest", 
                  h: "Signal Ingestion", 
                  d: "Ingests cloud and identity exposure signals from CSPM, CIEM, and workload protection tools. We aggregate the 'noise' to find the 'signal'.",
                  icon: Database,
                  points: ["AWS / Azure / GCP Sync", "IAM Policy Ingestion", "Third-Party CSPM Input"]
                },
                { 
                  n: "02", t: "Map", 
                  h: "Relationship Mapping", 
                  d: "Maps identity relationships and transitive trust paths across the environment. We build a graph of what is actually reachable.",
                  icon: Network,
                  points: ["Assume-Role Traversal", "Cross-Account trust mapping", "Resource-based policy analysis"]
                },
                { 
                  n: "03", t: "Validate", 
                  h: "Genesis Proof", 
                  d: "Validates whether misconfigurations can be chained into real attacks. Genesis runs safe, non-destructive simulations to prove the path.",
                  icon: Zap,
                  points: ["Controlled Path Probing", "Proof-of-Exploit Artifacts", "Blast Radius Measurement"]
                },
                { 
                  n: "04", t: "Govern", 
                  h: "Hive Decisions", 
                  d: "Governs remediation and acceptance decisions in Hive. Every risk outcome is backed by auditable proof and rationale.",
                  icon: Gavel,
                  points: ["Decision Traceability", "Board-Ready Reporting", "Governance-as-Code"]
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

      {/* Technical Narrative: Graph Reasoning */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
         <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="relative">
                  <div className="aspect-square max-w-lg mx-auto bg-white/5 border border-white/10 rounded-[4rem] p-12 flex flex-col items-center justify-center text-center shadow-3xl">
                     <div className="w-32 h-32 bg-hayrok-orange rounded-[2.5rem] flex items-center justify-center mb-10 shadow-2xl shadow-orange-500/30">
                        <Fingerprint size={60} />
                     </div>
                     <h4 className="text-3xl font-black uppercase tracking-tight mb-6">Transitive Trust <br/> <span className="text-hayrok-orange italic">is the attack path.</span></h4>
                     <p className="text-slate-400 font-medium leading-relaxed">
                        Static tools see permissions. Hayrok sees movement. We analyze how an identity can assume roles recursively to escalate privileges and access sensitive data silos across cloud boundaries.
                     </p>
                  </div>
                  {/* Decorative Elements */}
                  <motion.div 
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 blur-[80px] rounded-full" 
                  />
               </div>

               <div>
                  <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-10">Governed Intelligence</h2>
                  <h3 className="text-4xl md:text-6xl font-black mb-10 leading-tight uppercase tracking-tight">Identity Mesh <br/> <span className="text-hayrok-orange">Validation.</span></h3>
                  <div className="space-y-10">
                     {[
                        { t: "Lateral Movement Verification", d: "Genesis proves whether an attacker can move from a low-trust workload to a high-trust identity role." },
                        { t: "Cloud-to-Identity Mapping", d: "Understand how infrastructure exposure (like an open port) enables an identity-driven attack path." },
                        { t: "Evidence-Based Hygiene", d: "Go beyond 'unused keys' to identify which credentials actually represent a proven lateral movement risk." }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-6 group">
                           <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-hayrok-orange group-hover:bg-hayrok-orange group-hover:text-white transition-all">
                              <Link size={24} />
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

      {/* Strategic Outcomes Section */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Strategic Outcomes</h2>
               <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">Measurable <br/><span className="text-hayrok-orange italic">Hygiene.</span></h3>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
               <div className="lg:col-span-8 bg-slate-50 border border-slate-200 rounded-[4rem] p-12 md:p-16 flex flex-col justify-center">
                  <h4 className="text-3xl font-black text-slate-900 mb-10 uppercase">Measurable <span className="text-hayrok-orange">Impact.</span></h4>
                  <div className="grid md:grid-cols-2 gap-10">
                     <div className="space-y-4">
                        <div className="flex items-center gap-3 text-hayrok-orange">
                           {/* Added TrendingDown to lucide-react imports above to fix find name error */}
                           <TrendingDown size={24} strokeWidth={3} />
                           <span className="text-sm font-black uppercase tracking-widest">Risk Reduction</span>
                        </div>
                        <p className="text-4xl font-black text-slate-900 tracking-tighter">Reduced Lateral Risk.</p>
                        <p className="text-slate-500 font-medium">By identifying and severing validated paths, teams reduce potential breach impact by up to 70%.</p>
                     </div>
                     <div className="space-y-4">
                        <div className="flex items-center gap-3 text-indigo-500">
                           <ShieldCheck size={24} strokeWidth={3} />
                           <span className="text-sm font-black uppercase tracking-widest">Efficiency</span>
                        </div>
                        <p className="text-4xl font-black text-slate-900 tracking-tighter">Better Hygiene.</p>
                        <p className="text-slate-500 font-medium">Focus identity rotation and cleanup on credentials that are proven entry points for attack graphs.</p>
                     </div>
                  </div>
               </div>

               <div className="lg:col-span-4 bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl flex flex-col justify-center text-center">
                  <div className="absolute inset-0 bg-grid-white opacity-5" />
                  <Target className="text-hayrok-orange mx-auto mb-8" size={56} />
                  <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">Fewer Theoretical Alerts</h4>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">
                     Ignore the noise. Focus only on the 5% of cloud findings that are proven exploitable in your specific identity mesh.
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
                        "Cloud Security teams managing multi-account environments",
                        "IAM and Identity Engineering teams",
                        "Security architects designing zero-trust cloud models",
                        "Red Teams needing to scale lateral movement validation",
                        "CISOs requiring clear proof of cloud risk reduction"
                     ].map((p, i) => (
                        <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-hayrok-orange transition-all cursor-default text-left">
                           <CheckCircle2 className="text-hayrok-orange shrink-0 mt-0.5" size={20} />
                           <span className="font-bold text-slate-700 text-sm uppercase tracking-tight">{p}</span>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden group shadow-2xl flex flex-col justify-center">
                  <div className="absolute inset-0 bg-grid-white opacity-5" />
                  <h4 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-12 flex items-center gap-3">
                     <History size={16} /> Decision Integrity
                  </h4>
                  <p className="text-2xl md:text-3xl font-black italic leading-snug mb-10 relative z-10">
                     "Stop chasing misconfigs. <br/> <span className="text-hayrok-orange">Start chasing paths.</span>"
                  </p>
                  <div className="flex items-center gap-4 relative z-10">
                     <div className="w-1.5 h-1.5 rounded-full bg-hayrok-orange animate-pulse" />
                     <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Governed Identity Protocol</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 bg-[#FCFCFA] text-center border-t border-slate-100">
         <div className="container mx-auto px-6 relative z-10">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
               <h3 className="text-5xl md:text-[9rem] font-black text-slate-900 mb-12 tracking-tight leading-[0.8] uppercase">
                 Map The <br/> <span className="text-hayrok-orange italic tracking-tighter">Mesh.</span>
               </h3>
               <p className="text-xl md:text-3xl text-slate-500 font-medium mb-16 leading-relaxed max-w-3xl mx-auto">
                  Take the guesswork out of cloud and identity risk. Experience the future of Governed, Path-Based Security.
               </p>
               <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                 <button onClick={() => onNavigate?.('demo')} className="bg-hayrok-orange text-white px-16 py-8 rounded-[2rem] text-2xl font-black hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
                    Schedule Technical Walkthrough
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
            Cloud and Identity Attack Path Validation powered by Hayrok Hive, Genesis, and CodeFabrics. Governed, auditable, and built for enterprise trust.
         </p>
      </div>
    </div>
  );
};
