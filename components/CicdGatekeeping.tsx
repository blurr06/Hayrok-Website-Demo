
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Zap, ShieldCheck, GitMerge, ListChecks, 
  ArrowRight, CheckCircle2, History, Scale, Users, 
  Sparkles, FileText, Search, ShieldAlert, Cpu, 
  Lock, Layout, Gavel, UserCheck, Terminal, 
  GitBranch, Box, Eye, HelpCircle, Briefcase,
  Workflow, TrendingUp, FileSearch, XCircle,
  RefreshCw, Smartphone, Monitor, Database,
  Activity, ArrowDownToLine, Timer, Target, ClipboardCheck
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

export const CicdGatekeeping: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
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
            <GitMerge size={12} className="animate-pulse" />
            Strategic Evolution: DevSecOps
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[8.5rem] font-black tracking-tight leading-[0.85] text-slate-900 mb-10 uppercase"
          >
            DevSecOps & <br />
            <span className="text-hayrok-orange italic tracking-tighter">CI/CD Gatekeeping.</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-3xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium mb-12"
          >
            Stop blocking deployments with noise. Hayrok delivers intelligent, validation-driven release gates that prioritize real-world exploitability over theoretical findings.
          </motion.p>

          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={() => onNavigate?.('demo')} className="w-full sm:w-auto bg-hayrok-orange text-white px-12 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
              Request Technical Walkthrough
            </button>
            <button onClick={() => onNavigate?.('contact')} className="w-full sm:w-auto px-12 py-6 rounded-2xl font-black text-xl text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all bg-white shadow-sm flex items-center gap-3">
              <Terminal size={20} className="text-hayrok-orange" />
              Talk to a DevOps Engineer
            </button>
          </motion.div>
        </div>
      </section>

      {/* The Problem: The Velocity Trap */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">The Challenge</h2>
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight uppercase">
                The Security <br/> <span className="text-slate-400 italic">Brake.</span>
              </h3>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
                Security teams want to prevent risk, but engineering teams need speed. Traditional CI/CD gates often fail by either blocking too much based on noise, or blocking too little to preserve velocity.
              </p>
              
              <div className="space-y-6">
                 {[
                   { t: "The Noise Penalty", d: "Deployments blocked by 'Critical' alerts that are actually non-exploitable in production." },
                   { t: "Friction-Heavy Triage", d: "Manual review of every build finding kills engineering momentum and trust." },
                   { t: "Blind Gateways", d: "Lack of environment context means gates ignore transitive trust and identity-based attack paths." }
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
                     <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.6em] mb-12">The Productivity Cost</p>
                     <p className="text-3xl md:text-5xl font-black italic text-white mb-10 leading-tight">
                        “We spend <span className="text-hayrok-orange">40 hours</span> a month <br/> triaging alerts that <span className="text-slate-400 underline decoration-hayrok-orange underline-offset-8">don't matter.</span>”
                     </p>
                     <p className="text-slate-500 font-bold uppercase tracking-widest text-[11px]">The fundamental failure of activity-based DevSecOps.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Hayrok Solution: Intelligent Execution */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center max-w-4xl mx-auto mb-24">
              <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">The Hayrok Solution</h2>
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">Intelligent <br/><span className="text-hayrok-orange italic">Release Integrity.</span></h3>
              <p className="text-xl text-slate-500 font-medium mt-10">Hayrok acts as the execution layer that connects build signals to runtime truth, closing the loop between 'detected' and 'exploitable'.</p>
           </div>

           <div className="grid lg:grid-cols-4 gap-6">
              {[
                { 
                  n: "01", t: "Filter", 
                  h: "Validation-Driven Gates", 
                  d: "Gates deployments based on validated attack paths, not raw scanner findings. We only block what is proven to represent material risk.",
                  icon: ShieldCheck,
                  points: ["Exploitability confirmation", "Reachability filtering", "Noise elimination"]
                },
                { 
                  n: "02", t: "Orchestrate", 
                  h: "Multimodal Validation", 
                  d: "Supports pre-deploy, post-deploy, and scheduled validation. Verification happens where it makes the most sense for your pipeline architecture.",
                  icon: Workflow,
                  points: ["Staging validation", "Production retesting", "Event-driven triggers"]
                },
                { 
                  n: "03", t: "Integrate", 
                  h: "Native Flow", 
                  d: "Integrates directly with CI/CD pipelines (GitHub Actions, GitLab, Jenkins) and ticketing systems (Jira, ServiceNow). No new portals to manage.",
                  icon: Terminal,
                  points: ["Webhooks & APIs", "Ticketing automation", "Slack/Teams notifications"]
                },
                { 
                  n: "04", t: "Govern", 
                  h: "Defensible Release", 
                  d: "Every block or allow decision is recorded with its evidence chain. Provide auditors with machine-readable proof of security due diligence.",
                  icon: Gavel,
                  points: ["Traceable decision logs", "Policy-as-code alignment", "Audit-ready evidence"]
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
                  <h3 className="text-4xl md:text-6xl font-black mb-10 leading-tight uppercase tracking-tight">Smarter Gates. <br/> <span className="text-hayrok-orange">Faster Ships.</span></h3>
                  <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                    Hayrok doesn't replace your scanners; it validates their output to make CI/CD gating defensible and low-friction.
                  </p>
                  
                  <div className="space-y-8">
                     {[
                        { t: "Fewer False Blocks", d: "Reduce developer frustration by eliminating non-material blockers." },
                        { t: "Accelerated Velocity", d: "Automate the 'should we block' decision based on technical proof." },
                        { t: "Continuous Assurance", d: "Moving security from a point-in-time check to a continuous lifecycle pulse." }
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
                           "Hayrok transforms <span className="text-hayrok-orange">Build Activity</span> <br/> into <span className="text-white underline decoration-hayrok-orange decoration-4 underline-offset-8">Defensible Risk Ownership.</span>"
                        </p>
                        <div className="h-px w-24 bg-white/10 mb-10" />
                        <p className="text-slate-400 font-medium text-lg leading-relaxed">
                          By providing automated validation artifacts within the PR flow, security and engineering can agree on risk with the same technical evidence—not just a spreadsheet of findings.
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
                  <div className="space-y-6">
                     {[
                        "Security leaders implementing CTEM programs",
                        "AppSec engineers tired of managing noisy spreadsheets",
                        "DevOps teams requiring automated, risk-based release gates",
                        "Compliance and audit teams requiring evidence paths",
                        "CISOs needing clear risk-reduction reporting"
                     ].map((p, i) => (
                        <div key={i} className="flex gap-4 items-center p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-hayrok-orange transition-all">
                           <CheckCircle2 size={18} className="text-hayrok-orange shrink-0" />
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
                        <p className="text-2xl font-black uppercase text-slate-400">“We have 500 blocking vulnerabilities.”</p>
                     </div>
                     <ArrowRight size={32} className="text-hayrok-orange mx-auto" />
                     <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 rounded-2xl bg-hayrok-orange text-white flex items-center justify-center shrink-0 shadow-lg">
                           <CheckCircle2 size={24} />
                        </div>
                        <p className="text-2xl md:text-3xl font-black uppercase text-white">“We have 5 material risks to fix—and the rest are validated noise.”</p>
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
                 Govern <br/> <span className="text-hayrok-orange italic tracking-tighter">The Gate.</span>
               </h3>
               <p className="text-xl md:text-3xl text-slate-500 font-medium mb-16 leading-relaxed max-w-3xl mx-auto">
                  Bring clarity, velocity, and governance to your CI/CD pipelines. Experience the future of intelligent Gatekeeping.
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
            DevSecOps and CI/CD Gatekeeping powered by Hayrok Hive, Genesis, and CodeFabrics. Governed, continuous, and built for measurable velocity.
         </p>
      </div>
    </div>
  );
};
