import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, ShieldCheck, Target, BarChart3, ArrowRight, 
  CheckCircle2, Cpu, Lock, Layers, History, 
  Scale, Users, Sparkles, Activity, FileText, 
  Search, ShieldX, Briefcase, ChevronRight, Gavel,
  UserCheck, Terminal, Code
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } }
};

const ValidationStream = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Analyzing IAM role 'ec2-prod-admin'", type: "analysis" },
    { id: 2, text: "Testing SSRF reachability on Port 443", type: "validation" },
    { id: 3, text: "Evidence captured: S3 Metadata Exposure", type: "proof" }
  ]);

  useEffect(() => {
    const events = [
      "Retesting exploit path #204 (Remediated)",
      "Validation run: Kubernetes API Exposure",
      "Path confirmed: Transitive Trust to DB",
      "Generating proof artifact: HAR trace",
      "Genesis agent deployed: us-east-1-vpc",
      "Exploitability score: High (Validated)",
      "Compensating control detected: WAF-Rule-14"
    ];

    const interval = setInterval(() => {
      setItems(prev => [
        { id: Date.now(), text: events[Math.floor(Math.random() * events.length)], type: "feed" },
        ...prev.slice(0, 2)
      ]);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4 font-sans text-xs text-left">
      <AnimatePresence mode="popLayout">
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex items-center gap-4 p-4 bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <div className="w-2 h-2 rounded-full bg-hayrok-orange shadow-[0_0_10px_rgba(255,95,0,0.5)] animate-pulse" />
            <span className="text-slate-400 font-medium tabular-nums">[{new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })}]</span>
            <span className="font-semibold text-slate-600 truncate">{item.text}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export const GenesisPage: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FCFCFA] min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-12 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <IntelligenceFabric density={1.4} isDark={false} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,95,0,0.03)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-50/50 border border-orange-100/50 text-hayrok-orange text-[10px] font-black shadow-sm mx-auto mb-10 tracking-[0.4em] uppercase backdrop-blur-sm"
          >
            <Zap size={12} className="animate-pulse" />
            Security Validation (BAS-Aligned)
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="text-7xl md:text-[10rem] font-black tracking-tight leading-[0.8] text-slate-900 mb-12"
          >
            Evidence <br />
            <span className="text-hayrok-orange italic font-light tracking-tighter">Over Assumptions.</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium mb-16"
          >
            Genesis is the security validation engine designed to help organizations prove exploitability. Move beyond theoretical exposure to validated risk reduction with BAS-aligned automation.
          </motion.p>

          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button onClick={() => onNavigate?.('contact')} className="w-full sm:w-auto bg-hayrok-orange hover:bg-orange-600 text-white px-14 py-6 rounded-full font-black text-lg flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-[0_20px_40px_-10px_rgba(255,95,0,0.3)]">
              Request a Demo
            </button>
            <button onClick={() => onNavigate?.('platform')} className="w-full sm:w-auto px-14 py-6 rounded-full font-black text-lg text-slate-900 border border-slate-200 hover:bg-white transition-all shadow-sm">
              Explore the Platform
            </button>
          </motion.div>
        </div>
      </section>

      {/* Product Mission - Bento Style */}
      <section className="py-20">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-10">
               <motion.div className="lg:col-span-7 space-y-10" {...fadeInUp}>
                  <div className="p-12 md:p-16 bg-white border border-slate-100 rounded-[4rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.03)] relative overflow-hidden group">
                     <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-50 rounded-full blur-[80px] opacity-60 transition-opacity group-hover:opacity-100" />
                     <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-8">Product Mission</h2>
                     <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight">
                        Proving the <br/> <span className="text-hayrok-orange italic font-light">exploitability gap.</span>
                     </h3>
                     <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl mb-8">
                        Traditional tools find exposures. Genesis proves risk. We help teams distinguish theoretical findings from practical, exploitable conditions in real environment context.
                     </p>
                     
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                           "Validate attack paths end-to-end",
                           "Reduce noise from static scanners",
                           "Verify fix effectiveness with retesting",
                           "Evidence-backed prioritization"
                        ].map((item, i) => (
                           <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                              <CheckCircle2 size={18} className="text-hayrok-orange shrink-0" />
                              {item}
                           </div>
                        ))}
                     </div>
                  </div>
               </motion.div>

               <motion.div className="lg:col-span-5 h-full" {...fadeInUp}>
                  <div className="h-full min-h-[500px] p-2 bg-white border border-slate-100 rounded-[4rem] shadow-2xl shadow-slate-200/50 flex flex-col overflow-hidden">
                     <div className="flex-1 bg-[#F8F9F5] rounded-[3.8rem] p-10 flex flex-col relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none" />
                        <div className="relative z-10 h-full flex flex-col">
                           <div className="flex items-center justify-between mb-12">
                              <div className="flex items-center gap-4">
                                 <div className="w-14 h-14 bg-white rounded-3xl flex items-center justify-center text-hayrok-orange shadow-xl">
                                    <Target size={28} />
                                 </div>
                                 <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Validation Engine</p>
                                    <p className="text-sm font-bold text-slate-900">Genesis v1.2 Active</p>
                                 </div>
                              </div>
                              <div className="flex gap-2">
                                 <div className="w-2 h-2 rounded-full bg-hayrok-orange animate-ping" />
                              </div>
                           </div>

                           <div className="flex-1 flex flex-col justify-center">
                              <ValidationStream />
                           </div>

                           <div className="mt-auto pt-10 border-t border-slate-200 flex items-center justify-between">
                              <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.4em]">Autonomous Proof Generation</span>
                              <div className="flex gap-1.5">
                                 {[0, 1, 2].map(i => (
                                    <div key={i} className="w-1 h-1 rounded-full bg-hayrok-orange/30" />
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Core Capabilities - Softer Modern Grid */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Core Capabilities</h2>
               <h3 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight tracking-tight uppercase">Engineered for <br/> <span className="text-hayrok-orange italic font-light tracking-tighter">Validation.</span></h3>
               <p className="text-xl text-slate-500 font-medium mt-6">Genesis provides the technical proof required to manage risk effectively in modern environments.</p>
            </div>

            <motion.div 
               variants={staggerContainer}
               initial="initial"
               whileInView="whileInView"
               className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
            >
               {[
                 { 
                   title: "Attack Path Validation", 
                   desc: "Evaluate how attackers could realistically move through your environment by analyzing asset and identity relationships.", 
                   icon: Target,
                   accent: "bg-orange-50 text-hayrok-orange"
                 },
                 { 
                   title: "Exploit Assessment", 
                   desc: "Determine if exposure can be exploited under current conditions, considering access context and controls.", 
                   icon: Search,
                   accent: "bg-indigo-50 text-indigo-500"
                 },
                 { 
                   title: "Continuous Retesting", 
                   desc: "Automatically confirm remediation effectiveness and detect reintroduced exposures as your infrastructure evolves.", 
                   icon: History,
                   accent: "bg-emerald-50 text-emerald-500"
                 },
                 { 
                   title: "Evidence Generation", 
                   desc: "Produce structured, reviewable proof for remediation teams, boards, and regulatory auditors.", 
                   icon: FileText,
                   accent: "bg-slate-50 text-slate-900"
                 }
               ].map((item, i) => (
                 <motion.div 
                    key={i}
                    variants={fadeInUp}
                    className="p-10 bg-[#FBFBF9] border border-slate-100 rounded-[3.5rem] hover:bg-white hover:shadow-2xl transition-all group cursor-default h-full flex flex-col"
                 >
                    <div className={`w-16 h-16 ${item.accent} rounded-[1.8rem] flex items-center justify-center mb-8 shadow-sm transition-all group-hover:scale-110 group-hover:rotate-2`}>
                       <item.icon size={28} strokeWidth={2} />
                    </div>
                    <h5 className="text-xl font-black text-slate-900 mb-4 leading-tight tracking-tight">{item.title}</h5>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed flex-1">{item.desc}</p>
                 </motion.div>
               ))}
            </motion.div>
         </div>
      </section>

      {/* BAS Alignment Comparison */}
      <section className="py-32 bg-[#F8F9F5]">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <motion.div {...fadeInUp}>
                  <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Framework Alignment</h2>
                  <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight">
                    Breach & Attack <br/> <span className="text-hayrok-orange italic font-light">Simulation.</span>
                  </h3>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                    Genesis aligns with BAS objectives by using controlled, agent‑based techniques to evaluate exploitability and feasible attack paths.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      { label: "Continuous Pulse", desc: "Unlike one-time tests, Genesis operates continuously to match cloud velocity.", icon: Activity },
                      { label: "Environment Context", desc: "Testing is aligned to your specific asset relationships and configurations.", icon: Layers },
                      { label: "Direct Risk Workflow", desc: "Results feed Hive to update your risk intelligence posture in real-time.", icon: BarChart3 }
                    ].map((feat, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-hayrok-orange shadow-sm shrink-0">
                          <feat.icon size={18} />
                        </div>
                        <div>
                          <h4 className="font-black text-slate-900 text-base">{feat.label}</h4>
                          <p className="text-sm text-slate-500 font-medium">{feat.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
               </motion.div>

               <div className="relative">
                  <div className="p-12 md:p-16 bg-white border border-slate-100 rounded-[4rem] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.05)] relative overflow-hidden group">
                     <h4 className="text-2xl font-black text-slate-900 mb-8">Validation Focus</h4>
                     <div className="space-y-8">
                        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                           <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-widest mb-2">The Old Way</p>
                           <p className="text-sm font-bold text-slate-400">Assume exposure = Critical Risk</p>
                           <div className="h-1 w-full bg-slate-200 mt-4 rounded-full" />
                        </div>
                        <div className="flex justify-center -my-4 relative z-10">
                           <div className="w-10 h-10 rounded-full bg-hayrok-orange text-white flex items-center justify-center shadow-lg">
                              <ArrowRight size={20} className="rotate-90" />
                           </div>
                        </div>
                        <div className="p-6 bg-orange-50/50 rounded-3xl border border-orange-100">
                           <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-widest mb-2">The Genesis Way</p>
                           <p className="text-sm font-bold text-slate-900">Prove exploitability context first.</p>
                           <div className="h-1.5 w-full bg-hayrok-orange mt-4 rounded-full shadow-[0_0_10px_rgba(255,95,0,0.4)]" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Platform Synergy Flow */}
      <section className="py-32 bg-white border-b border-slate-100">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Platform Ecosystem</h2>
               <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">Better Together.</h3>
               <p className="text-xl text-slate-500 font-medium mt-6">Genesis provides the validation layer that connects exposure to real‑world risk across the platform.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
               {[
                 { label: "Hive Integration", desc: "Hive uses Genesis results to refine CTEM prioritization and track validated risk reduction.", icon: BarChart3 },
                 { label: "CodeFabrics Extension", desc: "CodeFabrics extends validation insights into application and supply‑chain contexts before code ships.", icon: Code },
                 { label: "Unified Intelligence", desc: "The combined capabilities support evidence‑driven security risk management at scale.", icon: Sparkles }
               ].map((item, i) => (
                 <div key={i} className="p-10 bg-[#FBFBF9] border border-slate-100 rounded-[3.5rem] hover:bg-white hover:shadow-xl transition-all">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-hayrok-orange mb-8 shadow-sm">
                       <item.icon size={24} />
                    </div>
                    <h5 className="text-xl font-black text-slate-900 mb-4">{item.label}</h5>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Governance dark block */}
      <section className="py-32">
         <div className="container mx-auto px-6">
            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="bg-[#111316] border border-white/5 rounded-[5rem] p-12 md:p-32 overflow-hidden relative shadow-2xl text-white group"
            >
               <div className="absolute top-0 right-0 p-32 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <Scale size={400} className="text-hayrok-orange" />
               </div>
               
               <div className="max-w-4xl relative z-10">
                  <div className="inline-flex items-center gap-3 text-hayrok-orange font-black text-[10px] uppercase tracking-[0.5em] mb-12">
                     <Lock size={16} /> Governance by Design
                  </div>
                  <h3 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-[0.02em] leading-[0.85] uppercase">
                    Controlled <br/> <span className="text-hayrok-orange italic font-light lowercase">and</span> <br/> Auditable.
                  </h3>
                  <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed mb-20 max-w-2xl">
                    Genesis is designed for environments where security testing must be controlled and accountable. Suitable for enterprise and regulated sectors.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-16">
                     {[
                        { label: "Policy-Bound", d: "Validation workflows strictly follow defined policies.", icon: Gavel },
                        { label: "Managed Scoping", d: "Clear scoping and execution controls for every test.", icon: Target },
                        { label: "Human Oversight", d: "HITL mechanisms for critical validation steps.", icon: UserCheck },
                        { label: "Audit Logging", d: "Every validation activity is logged and reviewable.", icon: History }
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

      {/* Strategic Personas */}
      <section className="py-32 bg-[#F8F9F5]">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">User Personas</h2>
               <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">Who Uses Genesis.</h3>
               <p className="text-xl text-slate-500 font-medium mt-6">From engineers to risk leaders, Genesis provides the proof for every stakeholder.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                  { title: "SecOps & Engineering", icon: ShieldCheck, desc: "Distinguish exploitable risk from theoretical volume." },
                  { title: "Risk Management Leaders", icon: Target, desc: "Evidence-backed prioritization to focus resources effectively." },
                  { title: "App & Product Security", icon: Layers, desc: "Validation of supply chain risk before code ships." },
                  { title: "Red & Blue Teams", icon: Zap, desc: "Generate automated validation evidence for exercises." },
                  { title: "MSSPs (CTEM Services)", icon: BarChart3, desc: "Deliver validation‑driven outcomes for your clients." }
               ].map((p, i) => (
                  <motion.div 
                     key={i} 
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ delay: i * 0.05 }}
                     className="p-10 bg-white border border-slate-100 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all group h-full"
                  >
                     <div className="w-14 h-14 bg-[#F8F9F5] rounded-2xl flex items-center justify-center text-hayrok-orange mb-8 group-hover:bg-hayrok-orange group-hover:text-white transition-all shadow-sm">
                        <p.icon size={28} />
                     </div>
                     <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-hayrok-orange transition-colors">{p.title}</h4>
                     <p className="text-slate-400 font-medium text-sm leading-relaxed">{p.desc}</p>
                  </motion.div>
               ))}
               <div className="p-10 bg-hayrok-orange rounded-[3.5rem] flex flex-col justify-center items-center text-center shadow-xl group hover:scale-[1.02] transition-all cursor-pointer">
                  <Sparkles size={50} className="text-white mb-6 animate-pulse" />
                  <p className="text-white font-black text-2xl tracking-tight mb-2">View Use Cases</p>
                  <p className="text-white/80 font-bold text-xs uppercase tracking-widest flex items-center gap-2">Explore the guide <ChevronRight size={14} /></p>
               </div>
            </div>
         </div>
      </section>

      {/* Outcome Strips */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { label: "No More Noise", desc: "Significant reduction in false positives from static tools.", icon: ZapOffIcon },
                 { label: "Verified Fixes", desc: "Improve remediation confidence through automated retesting.", icon: CheckCircle2 },
                 { label: "Posture Velocity", desc: "Validate risk reduction over time with historical proof.", icon: TrendingUpIcon },
                 { label: "Defensible Metrics", desc: "Communicate security decisions with board-ready evidence.", icon: BriefcaseIcon }
               ].map((item, i) => (
                 <div key={i} className="p-8 border border-slate-100 rounded-[3rem] flex flex-col items-center text-center hover:bg-[#FCFCFA] transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-hayrok-orange mb-6 shadow-sm">
                       <item.icon size={24} />
                    </div>
                    <h5 className="font-black text-slate-900 mb-2">{item.label}</h5>
                    <p className="text-sm text-slate-400 font-medium">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-white border-t border-slate-100">
         <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
               <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.4em] mb-12">Experience Genesis</h2>
               <h3 className="text-6xl md:text-[11rem] font-black text-slate-900 mb-16 tracking-tight leading-[0.8] uppercase">
                 Unlock <br/> <span className="text-hayrok-orange italic font-light tracking-tighter">The Proof.</span>
               </h3>
               <p className="text-xl md:text-3xl text-slate-400 font-medium mb-20 leading-relaxed max-w-3xl mx-auto">
                 Learn how Genesis supports security validation and BAS‑aligned testing as part of the Hayrok platform.
               </p>
               <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                 <button onClick={() => onNavigate?.('contact')} className="w-full md:w-auto bg-hayrok-orange text-white px-16 py-8 rounded-full text-2xl font-black hover:bg-orange-600 transition-all transform hover:scale-105 shadow-[0_30px_60px_-15px_rgba(255,95,0,0.4)]">
                    Request a Demo
                 </button>
                 <button onClick={() => onNavigate?.('platform')} className="w-full md:w-auto px-16 py-8 rounded-full text-2xl font-black text-slate-900 border border-slate-100 hover:bg-[#F8F9F5] transition-all flex items-center justify-center gap-4 group">
                    Explore Platform <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                 </button>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Signature Footer */}
      <div className="h-32 flex items-center justify-center border-t border-slate-100 bg-[#FCFCFA]">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            Genesis supports security validation and BAS‑aligned testing by providing controlled, evidence‑based assessment of exploitability within the Hayrok platform.
         </p>
      </div>
    </div>
  );
};

// Internal icon helpers for visual fidelity
const ZapOffIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.41 6.75 13 2l-2.43 2.92"></path>
    <path d="M18.57 12.91 21 10h-5.34"></path>
    <path d="M8 8h1"></path>
    <path d="M2 2l20 20"></path>
    <path d="m14.5 14.5-2.5 7.5-3-9H3l2.5-3"></path>
  </svg>
);

const TrendingUpIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
    <polyline points="16 7 22 7 22 13"></polyline>
  </svg>
);

const BriefcaseIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);
