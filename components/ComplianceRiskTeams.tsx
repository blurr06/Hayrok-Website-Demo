
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardCheck, ShieldCheck, Gavel, Scale, History, 
  ArrowRight, CheckCircle2, FileSearch, Archive, 
  ListChecks, Target, Zap, Layout, Users, 
  Sparkles, FileText, Search, ShieldAlert, Cpu, 
  Lock, Activity, Globe, MessageSquare, Info,
  CheckCircle, XCircle, TrendingUp, Landmark, 
  UserCheck, Network, BarChart3,
  // Added Timer, Layers, and RefreshCw to fix Cannot find name errors
  Timer, Layers, RefreshCw
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

export const ComplianceRiskTeams: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-12 overflow-x-hidden relative">
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-slate-100 bg-[#FBFBF9]">
        <IntelligenceFabric density={1.1} isDark={false} />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 text-hayrok-orange text-[10px] font-black shadow-sm mx-auto mb-10 tracking-[0.4em] uppercase backdrop-blur-sm"
          >
            <ClipboardCheck size={12} className="animate-pulse" />
            Roles: Compliance & Risk Teams
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[8rem] font-black tracking-tight leading-[0.85] text-slate-900 mb-10 uppercase"
          >
            Audit-Ready <br />
            <span className="text-hayrok-orange italic tracking-tighter">Workflows & Evidence.</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-3xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium mb-12"
          >
            Move from collecting evidence to producing it by design. Hayrok provides compliance and risk teams with a defensible system of record for every security decision.
          </motion.p>

          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={() => onNavigate?.('demo')} className="w-full sm:w-auto bg-hayrok-orange text-white px-12 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
              Request Governance Blueprint
            </button>
            <button onClick={() => onNavigate?.('contact')} className="w-full sm:w-auto px-12 py-6 rounded-2xl font-black text-xl text-slate-900 border border-slate-200 hover:bg-white transition-all bg-white shadow-sm flex items-center gap-3">
              <Scale size={20} className="text-hayrok-orange" />
              Talk to a GRC Expert
            </button>
          </motion.div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">The Challenge</h2>
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight uppercase">
                Defending the <br/> <span className="text-slate-400 italic">Undocumented.</span>
              </h3>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
                Compliance and risk teams are often asked to defend security decisions they did not make—and cannot easily prove. When an auditor asks for a rationale, searching through fragmented emails and stale spreadsheets creates systemic risk.
              </p>
              
              <div className="grid grid-cols-1 gap-6">
                 {[
                   { t: "Unproven Findings", d: "Vulnerability data with no technical proof of exploitability." },
                   { t: "Stale Pentest Reports", d: "Static PDF snapshots that age quickly and lack traceability." },
                   { t: "Inconsistent Acceptance", d: "Manual, fragmented risk acceptance and exception handling." },
                   { t: "Missing Evidence Trails", d: "Fragmented or missing technical proof during audits." },
                   { t: "Control Mapping Gap", d: "Difficulty mapping security activity to SOC 2, ISO, PCI, or HIPAA." }
                 ].map((p, i) => (
                    <div key={i} className="flex gap-5 items-start">
                       <XCircle size={22} className="text-red-400 shrink-0 mt-1" />
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
                     <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.6em] mb-12">The Governance Cost</p>
                     <p className="text-3xl md:text-5xl font-black italic text-white mb-10 leading-tight">
                        “We spend <span className="text-hayrok-orange">weeks</span> prepping for audits <br/> instead of <span className="text-slate-400 underline decoration-hayrok-orange underline-offset-8">managing risk.</span>”
                     </p>
                     <p className="text-slate-500 font-bold uppercase tracking-widest text-[11px]">The fundamental failure of manual compliance evidence.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Hayrok Helps: The 5 Pillars of Trust */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center max-w-4xl mx-auto mb-24">
              <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">How Hayrok Helps</h2>
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">Evidence <br/><span className="text-hayrok-orange italic">By Design.</span></h3>
              <p className="text-xl text-slate-500 font-medium mt-10">Hayrok provides audit-ready security validation and governance workflows designed specifically for compliance and risk teams.</p>
           </div>

           <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              {/* Decision-Centric Audit Trails */}
              <motion.div variants={fadeInUp} className="lg:col-span-8 p-10 bg-slate-50 border border-slate-200 rounded-[3.5rem] group hover:bg-white hover:border-hayrok-orange hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-hayrok-orange shadow-sm group-hover:bg-hayrok-orange group-hover:text-white transition-all">
                    <History size={28} />
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 uppercase tracking-tight leading-tight">1. Decision-Centric Audit Trails</h4>
                </div>
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10">
                  Every security decision in Hayrok is explicit, owned, and time-bound. We replace fragmented conversations with a centralized system of record.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Explicit actions: Remediate, Defer, Accept, Re-Validate",
                    "Named ownership with verifiable attribution",
                    "Mandatory review and expiration dates",
                    "Fully logged and immutable historical lineage"
                  ].map((p, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-500 uppercase tracking-tighter">
                      <CheckCircle2 size={16} className="text-hayrok-orange" />
                      {p}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Validation-Backed Evidence */}
              <motion.div variants={fadeInUp} className="lg:col-span-4 p-10 bg-slate-900 text-white rounded-[3.5rem] relative overflow-hidden shadow-2xl">
                 <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Target size={140} className="text-hayrok-orange" />
                 </div>
                 <div className="relative z-10">
                    <h4 className="text-xl font-black mb-6 uppercase tracking-tight">2. Validation-Backed Evidence</h4>
                    <p className="text-sm text-slate-400 font-medium leading-relaxed mb-8">
                       Stop guessing. Proved exploitability paths via Genesis give compliance teams technical proof that auditors can verify instantly.
                    </p>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                       <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-widest mb-2">The Standard of Proof</p>
                       <p className="text-xs font-bold text-white italic">"This exposure was validated under controlled conditions and reviewed by a named owner."</p>
                    </div>
                 </div>
              </motion.div>

              {/* Built-In Policy & HITL */}
              <motion.div variants={fadeInUp} className="lg:col-span-4 p-10 bg-white border border-slate-200 rounded-[3.5rem] shadow-sm">
                 <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-hayrok-orange mb-8">
                    <UserCheck size={24} />
                 </div>
                 <h4 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">3. Policy & HITL Controls</h4>
                 <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                    Human-in-the-loop (HITL) checkpoints ensure security activity aligns with change management expectations.
                 </p>
                 <ul className="space-y-3">
                    {["Policy-bound validation", "HITL checkpoints", "Separation of duties"].map((txt, i) => (
                       <li key={i} className="flex gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          <CheckCircle2 size={12} className="text-hayrok-orange" /> {txt}
                       </li>
                    ))}
                 </ul>
              </motion.div>

              {/* Audit-Ready Documentation */}
              <motion.div variants={fadeInUp} className="lg:col-span-8 p-10 bg-slate-50 border border-slate-200 rounded-[3.5rem] group hover:bg-white transition-all">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-hayrok-orange shadow-sm group-hover:scale-110 transition-transform">
                      <Archive size={24} />
                   </div>
                   <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">4. Audit-Ready Documentation</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                   <div className="space-y-4">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Auto-Generated Artifacts</p>
                      {["Validation Summaries", "Redacted Evidence Bundles", "Risk Acceptance Records"].map((item, i) => (
                         <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700 uppercase">
                            <FileText size={14} className="text-slate-400" /> {item}
                         </div>
                      ))}
                   </div>
                   <div className="space-y-4">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Historical Reporting</p>
                      {["Remediation Verification History", "Time-Based Risk Movement", "Executive Summary Briefings"].map((item, i) => (
                         <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700 uppercase">
                            <TrendingUp size={14} className="text-slate-400" /> {item}
                         </div>
                      ))}
                   </div>
                </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Compliance Alignment Section */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
         <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div>
                  <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-10">Control Alignment</h2>
                  <h3 className="text-4xl md:text-6xl font-black mb-10 leading-tight uppercase tracking-tight">Mapping to <br/> <span className="text-hayrok-orange">Framework Standards.</span></h3>
                  <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                    Hayrok security validation, governance actions, and audit logs map directly to common control requirements—reducing manual testing effort.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                     {["SOC 2 (CC6, CC7)", "ISO 27001 (Annex A)", "PCI-DSS", "HIPAA", "SOX (ITGC)", "NIS2"].map((std, i) => (
                        <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                           <span className="text-xs font-black uppercase tracking-widest text-slate-300">{std}</span>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="relative">
                  <div className="aspect-square max-w-md mx-auto bg-white/5 border border-white/10 rounded-[4rem] p-12 flex flex-col items-center justify-center text-center shadow-3xl">
                     <div className="w-24 h-24 bg-hayrok-orange rounded-3xl flex items-center justify-center mb-10 shadow-2xl shadow-orange-500/30">
                        <Scale size={40} />
                     </div>
                     <h4 className="text-2xl font-black uppercase tracking-tight mb-4">Continuous Compliance</h4>
                     <p className="text-slate-400 text-sm font-medium leading-relaxed">
                        Move away from episodic evidence collection. Shift to a continuous pulse where every risk decision is auditable in real-time.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Example Use Case Scenario */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="bg-slate-50 border border-slate-200 rounded-[4rem] p-12 md:p-24 overflow-hidden relative group shadow-sm">
               <div className="absolute top-0 right-0 p-12 opacity-5">
                  <MessageSquare size={320} className="text-hayrok-orange" />
               </div>
               <div className="relative z-10">
                  <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-12 flex items-center gap-3">
                     <Info size={16} /> Example Use Case
                  </h3>
                  
                  <div className="grid lg:grid-cols-12 gap-16">
                     <div className="lg:col-span-5">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Scenario</p>
                        <p className="text-2xl font-black text-slate-900 leading-tight">
                           "An auditor asks why a <span className="text-red-500 underline decoration-red-100 decoration-4 underline-offset-8">Critical</span> vulnerability was not immediately remediated."
                        </p>
                     </div>
                     <div className="lg:col-span-7 space-y-8">
                        <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-widest">With Hayrok, you show:</p>
                        <div className="space-y-4">
                           {[
                              "The exposure signal and affected assets in Hive.",
                              "Genesis validation proving the exploit path was not viable in production.",
                              "The risk decision recorded in Hive with owner attribution.",
                              "Evidence of re-validation after environment changes."
                           ].map((item, i) => (
                              <div key={i} className="flex gap-4 items-start">
                                 <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-hayrok-orange shrink-0 shadow-sm">
                                    <CheckCircle size={14} />
                                 </div>
                                 <p className="text-lg font-bold text-slate-700 leading-snug">{item}</p>
                              </div>
                           ))}
                        </div>
                        <div className="pt-8 border-t border-slate-200">
                           <p className="text-xl font-black text-slate-900">Result: <span className="text-hayrok-orange">A clear, defensible explanation backed by technical proof—not just opinion.</span></p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Business Outcomes Section */}
      <section className="py-32 bg-[#FCFCFA] border-y border-slate-100">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Strategic Value</h2>
               <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">Outcomes, <br/><span className="text-hayrok-orange italic">Not Activity.</span></h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { title: "Reduce Prep Time", desc: "Cut audit preparation from weeks to hours with automated evidence packages.", icon: Timer },
                 { title: "Eliminate Gaps", desc: "Remove inconsistencies in risk acceptance and missing evidence trails.", icon: Layers },
                 { title: "Defend with Confidence", desc: "Present boardroom and regulator-ready evidence backed by technical proof.", icon: ShieldCheck },
                 { title: "Improve Collaboration", desc: "Speak the same language as security and engineering using technical proof paths.", icon: Users },
                 { title: "Continuous Compliance", desc: "Shift from reactive audit prep to a continuous compliance operating model.", icon: RefreshCw },
                 { title: "Risk Rationale", desc: "Maintain a permanent history of why every high-stakes decision was made.", icon: Gavel }
               ].map((val, i) => (
                 <div key={i} className="p-10 border border-slate-200 bg-white rounded-[3rem] hover:border-hayrok-orange hover:shadow-2xl transition-all duration-500 group flex flex-col">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-hayrok-orange mb-8 shadow-sm group-hover:scale-110 transition-transform">
                       <val.icon size={24} />
                    </div>
                    <h5 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase leading-tight">{val.title}</h5>
                    <p className="text-slate-500 font-medium leading-relaxed flex-1">{val.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Why Trust Section */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-24">
               <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.6em] mb-8">Canonical Trust</h2>
               <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-10 tracking-tight leading-tight uppercase">Why Compliance Teams <br/> <span className="text-hayrok-orange">Trust Hayrok.</span></h3>
               <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-5">
                     <UserCheck className="text-hayrok-orange shrink-0 mt-1" size={20} />
                     <div>
                        <h4 className="font-black text-slate-900 uppercase text-sm mb-1">Human-Led, Not Autonomous</h4>
                        <p className="text-sm text-slate-500">Decisions always remain with named stakeholders. AI assists, but humans decide.</p>
                     </div>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-5">
                     <ShieldAlert className="text-hayrok-orange shrink-0 mt-1" size={20} />
                     <div>
                        <h4 className="font-black text-slate-900 uppercase text-sm mb-1">Non-Destructive Validation</h4>
                        <p className="text-sm text-slate-500">Operationally safe probes designed for regulated production environments.</p>
                     </div>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-5">
                     <History className="text-hayrok-orange shrink-0 mt-1" size={20} />
                     <div>
                        <h4 className="font-black text-slate-900 uppercase text-sm mb-1">Full Traceability</h4>
                        <p className="text-sm text-slate-500">Complete lineage from exposure discovery to final risk acceptance outcome.</p>
                     </div>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-5">
                     <Landmark className="text-hayrok-orange shrink-0 mt-1" size={20} />
                     <div>
                        <h4 className="font-black text-slate-900 uppercase text-sm mb-1">Regulated-First Design</h4>
                        <p className="text-sm text-slate-500">Built from day one to satisfy high-stakes enterprise governance requirements.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 bg-slate-900 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
         <div className="container mx-auto px-6 relative z-10">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
               <h3 className="text-5xl md:text-[9rem] font-black text-white mb-12 tracking-tight leading-[0.8] uppercase">
                 Govern <br/> <span className="text-hayrok-orange italic tracking-tighter">The Proof.</span>
               </h3>
               <p className="text-xl md:text-3xl text-slate-400 font-medium mb-16 leading-relaxed max-w-3xl mx-auto">
                  Bring clarity, credibility, and validation to your risk management program. Join the future of auditable security intelligence.
               </p>
               <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                 <button onClick={() => onNavigate?.('demo')} className="bg-hayrok-orange text-white px-16 py-8 rounded-[2rem] text-2xl font-black hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
                    Request a Demo
                 </button>
                 <button onClick={() => onNavigate?.('contact')} className="px-16 py-8 rounded-[2rem] text-2xl font-black text-white border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-4 group">
                    Talk to an Expert <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                 </button>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Signature Footer */}
      <div className="h-32 flex items-center justify-center border-t border-slate-100 bg-white">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            Compliance and Risk Team solutions powered by Hayrok Hive and Genesis. Built for audit readiness, defensible decisions, and continuous risk integrity.
         </p>
      </div>
    </div>
  );
};
