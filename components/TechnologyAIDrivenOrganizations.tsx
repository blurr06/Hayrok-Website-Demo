import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, Brain, ShieldCheck, Zap, BarChart3, Target, 
  ArrowRight, CheckCircle2, Bot, Lock, Layers, Gavel, 
  History, Sparkles, Database, FileText, XCircle,
  Activity, Globe, ClipboardCheck, ArrowDown,
  ShieldAlert, TrendingUp, Network, Terminal,
  Workflow, Search, FileSearch, Code, RefreshCw
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

export const TechnologyAIDrivenOrganizations: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-12 overflow-x-hidden relative">
      
      {/* Immersive Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-slate-100 bg-[#FBFBF9]">
        <IntelligenceFabric density={1.8} isDark={false} />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 text-hayrok-orange text-[10px] font-black shadow-sm mx-auto mb-10 tracking-[0.4em] uppercase backdrop-blur-sm"
          >
            <Cpu size={12} className="animate-pulse" />
            Industry Track: Technology & AI-Driven
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[8.5rem] font-black tracking-tight leading-[0.85] text-slate-900 mb-10 uppercase"
          >
            Auditable <br />
            <span className="text-hayrok-orange italic tracking-tighter">AI Integrity.</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-3xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium mb-12"
          >
            Govern the next generation of attack surfaces. Hayrok extends security validation to AI/ML pipelines and LLM-enabled applications, turning complex model risk into defensible business decisions.
          </motion.p>

          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={() => onNavigate?.('demo')} className="w-full sm:w-auto bg-hayrok-orange text-white px-12 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
              Request AI Security Brief
            </button>
            <button onClick={() => onNavigate?.('contact')} className="w-full sm:w-auto px-12 py-6 rounded-2xl font-black text-xl text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all bg-white shadow-sm flex items-center gap-3">
              <Bot size={20} className="text-hayrok-orange" />
              Consult an AI Strategist
            </button>
          </motion.div>
        </div>
      </section>

      {/* Industry Challenges Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">The AI Challenge</h2>
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight uppercase">
                The New <br/> <span className="text-slate-400 italic">Security Frontier.</span>
              </h3>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
                AI and LLMs introduce attack vectors that traditional scanners cannot see. From prompt injection to data poisoning in RAG pipelines, the technology sector is racing to secure a stack that doesn't yet have a defined risk model.
              </p>
              
              <div className="space-y-6">
                 {[
                   { t: "The Black-Box Pipeline", d: "Traditional AppSec tools lack visibility into vector databases, prompt templates, and model inference paths." },
                   { t: "Emergent Attack Surfaces", d: "Indirect prompt injection, training data leakage, and autonomous agent 'jailbreaks' create unvalidated exposure." },
                   { t: "Undefined Risk Models", d: "Difficulty distinguishing between a 'creative' AI response and a systemic security failure." },
                   { t: "Governance & AI TRiSM", d: "Managing the Trust, Risk, and Security Management (TRiSM) requirements of AI systems without slowing down ML velocity." }
                 ].map((p, i) => (
                    <div key={i} className="flex gap-5 items-start">
                       <ShieldAlert size={24} className="text-hayrok-orange shrink-0 mt-1" />
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
                  <div className="relative z-10 text-center">
                     <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.6em] mb-12">The Integrity Paradox</p>
                     <p className="text-3xl md:text-5xl font-black italic text-white mb-10 leading-tight">
                        “We are building the <span className="text-hayrok-orange">Brain</span> <br/> of the product, but we <br/> can't prove it's <span className="text-slate-400 underline decoration-hayrok-orange underline-offset-8">Accountable.</span>”
                     </p>
                     <p className="text-slate-500 font-bold uppercase tracking-widest text-[11px]">The fundamental failure of AI-native engineering.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Hayrok Helps: 4 Pillars of AI Security */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center max-w-4xl mx-auto mb-24">
              <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">How Hayrok Helps</h2>
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">Governed <br/><span className="text-hayrok-orange italic">Intelligence.</span></h3>
              <p className="text-xl text-slate-500 font-medium mt-10">Hayrok provides the validation and governance layer required to ship AI-driven products with confidence.</p>
           </div>

           <div className="grid lg:grid-cols-4 gap-6">
              {[
                { 
                  n: "01", t: "Ingest", 
                  h: "AI/ML Signal Ingestion", 
                  d: "CodeFabrics ingests exposure signals from AI-specific scanners, LLM evaluation tools, and ML pipeline monitors.",
                  icon: Database,
                  points: ["Prompt Template Sync", "Vector DB Configs", "Inference Path Ingest"]
                },
                { 
                  n: "02", t: "Validate", 
                  h: "Agentic Abuse Proving", 
                  d: "Genesis safely validates whether AI exposures can be abused. We simulate prompt injection and RAG traversal to confirm risk.",
                  icon: Zap,
                  points: ["Injection Validation", "RAG Path Verification", "Model Boundary Testing"]
                },
                { 
                  n: "03", t: "Govern", 
                  h: "Human Oversight", 
                  d: "Governs AI security decisions with mandatory human review. Every AI-assisted decision in Hive is auditable and attributed.",
                  icon: Gavel,
                  points: ["HITL Decision Gates", "Policy-Bound AI Agents", "Auditable Rationale"]
                },
                { 
                  n: "04", t: "Align", 
                  h: "CTEM for AI", 
                  d: "Aligns AI security with the enterprise CTEM program. AI risk is no longer a silo; it's a first-class citizen of your risk intelligence.",
                  icon: Target,
                  points: ["Unified Risk Scorecard", "Cross-Domain Context", "Posture Benchmarking"]
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
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="relative">
                  <div className="aspect-square max-w-lg mx-auto bg-white/5 border border-white/10 rounded-[4rem] p-12 flex flex-col items-center justify-center text-center shadow-3xl">
                     <div className="w-32 h-32 bg-hayrok-orange rounded-[2.5rem] flex items-center justify-center mb-10 shadow-2xl shadow-orange-500/30">
                        <Brain size={60} />
                     </div>
                     <h4 className="text-3xl font-black uppercase tracking-tight mb-6">Resilience <br/> <span className="text-hayrok-orange italic">is the new brain.</span></h4>
                     <p className="text-slate-400 font-medium leading-relaxed">
                        In AI-driven organizations, the model is the product. Hayrok builds security into the "definition of done" with technical proof that ML engineers trust and regulators respect.
                     </p>
                  </div>
                  {/* Decorative Elements */}
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute -top-10 -right-10 w-40 h-40 bg-hayrok-orange/20 blur-[80px] rounded-full" 
                  />
               </div>

               <div>
                  <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-10">Strategic Result</h2>
                  <h3 className="text-4xl md:text-6xl font-black mb-10 leading-tight uppercase tracking-tight">Defensible <br/> <span className="text-hayrok-orange">AI Posture.</span></h3>
                  <div className="space-y-10">
                     {[
                        { t: "Safer AI Deployment", d: "Ship LLM-enabled features faster by automating the validation of prompt injection and data exfiltration paths." },
                        { t: "Reduced Model Risk", d: "Proactively identify and sever attack paths that could lead to model inversion or training data exposure." },
                        { t: "Auditable Responsible AI", d: "Maintain a permanent, machine-readable record of AI security due diligence for boards and regulators." }
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

      {/* Strategic Summary Bento */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Strategic Impact</h2>
               <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">Trust <br/><span className="text-hayrok-orange italic">Engineered.</span></h3>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
               <div className="lg:col-span-8 bg-slate-50 border border-slate-200 rounded-[4rem] p-12 md:p-16 flex flex-col justify-center">
                  <h4 className="text-3xl font-black text-slate-900 mb-10 uppercase">Efficiency <span className="text-hayrok-orange">At Scale.</span></h4>
                  <div className="grid md:grid-cols-2 gap-10">
                     <div className="space-y-4">
                        <div className="flex items-center gap-3 text-hayrok-orange">
                           <Activity size={24} strokeWidth={3} />
                           <span className="text-sm font-black uppercase tracking-widest">Efficiency</span>
                        </div>
                        <p className="text-4xl font-black text-slate-900 tracking-tighter">Reduced Triage.</p>
                        <p className="text-slate-500 font-medium">Hayrok filters unproven AI findings, allowing your team to focus strictly on material, exploitable business risks.</p>
                     </div>
                     <div className="space-y-4">
                        <div className="flex items-center gap-3 text-indigo-500">
                           <RefreshCw size={24} strokeWidth={3} />
                           <span className="text-sm font-black uppercase tracking-widest">Velocity</span>
                        </div>
                        <p className="text-4xl font-black text-slate-900 tracking-tighter">Secure ML Ops.</p>
                        <p className="text-slate-500 font-medium">Validated gates ensure that only material risks slow down your deployment cycle.</p>
                     </div>
                  </div>
               </div>

               <div className="lg:col-span-4 bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl flex flex-col justify-center text-center">
                  <div className="absolute inset-0 bg-grid-white opacity-5" />
                  <Target className="text-hayrok-orange mx-auto mb-8" size={56} />
                  <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">Zero False Blocker Gates</h4>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">
                     Ignore the noise. Focus only on the 5% of findings that are proven exploitable in your specific AI mesh.
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
                 Own The <br/> <span className="text-hayrok-orange italic tracking-tighter">Brain.</span>
               </h3>
               <p className="text-xl md:text-3xl text-slate-500 font-medium mb-16 leading-relaxed max-w-3xl mx-auto">
                  Bring clarity, credibility, and validation to your AI security program. Become the strategic partner your organization needs.
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
            Technology and AI-Driven solutions powered by Hayrok Hive, Genesis, and CodeFabrics. Governed, continuous, and built for measurable risk reduction in complex ML environments.
         </p>
      </div>
    </div>
  );
};