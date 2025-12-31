import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, ShieldCheck, Zap, Globe, Cpu, 
  ArrowRight, CheckCircle2, Server, Lock,
  Target, BarChart3, Database, Sparkles, Network,
  Activity, Layers, MessageSquare, History, Gavel,
  Bot, Search, FileText, Layout, Briefcase
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

interface PartnersCSPPageProps {
  onNavigate?: (page: string) => void;
}

export const PartnersCSPPage: React.FC<PartnersCSPPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FCFCFA] min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-12 overflow-x-hidden relative">
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <IntelligenceFabric density={1.2} isDark={false} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,95,0,0.04)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-hayrok-orange text-[10px] font-black shadow-sm mx-auto mb-10 tracking-[0.4em] uppercase backdrop-blur-sm"
          >
            <Cloud size={12} className="animate-pulse" />
            Cloud Service Providers
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="text-6xl md:text-[8rem] font-black tracking-tight leading-[0.9] text-slate-900 mb-12"
          >
            Extending CTEM <br />
            <span className="text-hayrok-orange italic font-light tracking-tighter">Across Cloud Environments.</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium mb-16"
          >
            Built to work with leading cloud platforms. Hayrok partners with CSPs to help organizations operate Continuous Threat Exposure Management (CTEM) across modern cloud environments - without disrupting native controls.
          </motion.p>

          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a href="mailto:partners@hayrok.com?subject=Cloud%20CSP%20Partner%20Inquiry" className="w-full sm:w-auto bg-hayrok-orange hover:bg-orange-600 text-white px-14 py-6 rounded-full font-black text-lg flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-[0_20px_40px_-10px_rgba(255,95,0,0.3)]">
              Become a CSP Partner
            </a>
            <button onClick={() => onNavigate?.('platform')} className="w-full sm:w-auto px-14 py-6 rounded-full font-black text-lg text-slate-900 border border-slate-200 hover:bg-white transition-all shadow-sm">
              Explore the Platform
            </button>
          </motion.div>
        </div>
      </section>

      {/* Intro Block */}
      <section className="py-24 bg-white border-y border-slate-100">
         <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                  Governed exposure insight, validation context, and decision support on top of <span className="text-slate-400">existing cloud services.</span>
               </h2>
               <p className="text-xl text-slate-500 font-medium leading-relaxed">
                  Our platform is designed to integrate with CSP ecosystems, providing a governed layer that complements native security controls.
               </p>
            </div>
         </div>
      </section>

      {/* Why Hayrok + CSPs */}
      <section className="py-32">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <motion.div {...fadeInUp}>
                  <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">The Challenge</h2>
                  <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight uppercase">Why Hayrok <br/> + <span className="text-hayrok-orange italic">CSPs.</span></h3>
                  <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
                    Cloud environments introduce scale, complexity, and rapid change. While CSPs provide foundational security controls, organizations still struggle to identify which exposures represent material risk.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      "Understand which cloud exposures represent material risk",
                      "Validate whether misconfigurations or weaknesses are exploitable",
                      "Coordinate remediation decisions across teams",
                      "Track risk movement over time in cloud‑heavy environments"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center text-hayrok-orange shrink-0 mt-1">
                          <CheckCircle2 size={16} />
                        </div>
                        <span className="text-lg font-bold text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
               </motion.div>

               <div className="relative">
                  <div className="bg-slate-900 rounded-[4rem] p-12 text-white shadow-2xl relative overflow-hidden h-[600px] flex flex-col justify-center">
                     <div className="absolute top-0 right-0 p-12 opacity-5">
                        <Layers size={300} className="text-hayrok-orange" />
                     </div>
                     <div className="relative z-10 space-y-12">
                        <div className="inline-block p-4 bg-white/5 rounded-2xl backdrop-blur-md border border-white/5 shadow-xl">
                           <p className="text-xs font-black uppercase tracking-widest text-hayrok-orange">Strategic Overlay</p>
                        </div>
                        <h4 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                           Layering CTEM governance and validation context on top of <span className="text-hayrok-orange italic">native capabilities.</span>
                        </h4>
                        <p className="text-slate-400 max-w-sm font-medium text-lg leading-relaxed">
                           Hayrok complements native CSP security by turning signals into evidence‑based risk decisions.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
         <div className="container mx-auto px-6">
            <div className="text-center mb-24">
               <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-6">Platform Roles</h2>
               <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">How We <br/><span className="text-hayrok-orange italic">Complement.</span></h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
               <div className="bg-white border border-slate-200 rounded-[3.5rem] p-12 shadow-sm">
                  <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-100">
                     <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                        <Cloud size={24} />
                     </div>
                     <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">CSPs Provide</h4>
                  </div>
                  <ul className="space-y-6">
                     {[
                        "Native security controls and telemetry",
                        "Cloud configuration and identity services",
                        "Baseline posture management"
                     ].map((item, i) => (
                        <li key={i} className="flex gap-4 text-lg font-bold text-slate-500">
                           <div className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-2.5 shrink-0" />
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>

               <div className="bg-slate-900 rounded-[3.5rem] p-12 shadow-2xl text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                     <Zap size={140} className="text-hayrok-orange" />
                  </div>
                  <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/10 relative z-10">
                     <div className="w-12 h-12 bg-hayrok-orange rounded-xl flex items-center justify-center text-white shadow-lg">
                        <Zap size={24} />
                     </div>
                     <h4 className="text-2xl font-black text-white uppercase tracking-tight">Hayrok Adds</h4>
                  </div>
                  <ul className="space-y-6 relative z-10">
                     {[
                        "CTEM governance & system of record (Hive)",
                        "BAS‑aligned validation (Genesis)",
                        "Application & supply‑chain context (CodeFabrics)",
                        "AI‑assisted reasoning (Hay‑AI)"
                     ].map((item, i) => (
                        <li key={i} className="flex gap-4 text-lg font-bold text-slate-300">
                           <div className="w-1.5 h-1.5 rounded-full bg-hayrok-orange mt-2.5 shrink-0" />
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
            
            <div className="mt-16 text-center">
               <p className="text-xl font-bold text-slate-500 max-w-2xl mx-auto italic">
                  “Together, this enables evidence‑based risk decisions, not just posture visibility.”
               </p>
            </div>
         </div>
      </section>

      {/* CSP Integration Areas */}
      <section className="py-32">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Technical Alignment</h2>
               <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">Integration <br/><span className="text-hayrok-orange italic">Areas.</span></h3>
            </div>

            <motion.div 
               variants={staggerContainer}
               initial="initial"
               whileInView="whileInView"
               className="grid md:grid-cols-3 gap-8"
            >
               {[
                 { 
                   title: "Cloud Exposure Context", 
                   desc: "Consumes native signals related to assets, configuration states, IAM context, and network exposure indicators.", 
                   icon: Globe,
                   items: ["Assets & services", "Configuration states", "Identity & access", "Network indicators"]
                 },
                 { 
                   title: "Validation‑Driven Decisions", 
                   desc: "Controlled, customer-directed validation to understand if exposure is exploitable under current conditions.", 
                   icon: Target,
                   items: ["Exploitability proof", "Retesting fix effectiveness", "Validating assumptions", "Governed execution"]
                 },
                 { 
                   title: "Governance & Tracking", 
                   desc: "A system of record for cloud decisions, providing traceable rationale and risk movement tracking.", 
                   icon: Gavel,
                   items: ["Decision system of record", "Traceable rationale", "Risk movement tracking", "Audit‑ready reporting"]
                 }
               ].map((area, i) => (
                 <motion.div 
                    key={i}
                    variants={fadeInUp}
                    className="p-10 md:p-12 bg-white border border-slate-100 rounded-[3.5rem] hover:shadow-2xl hover:border-hayrok-orange/30 transition-all group flex flex-col h-full"
                 >
                    <div className="w-16 h-16 bg-slate-50 rounded-[1.8rem] flex items-center justify-center text-hayrok-orange shadow-sm transition-all group-hover:scale-110 mb-10">
                       <area.icon size={28} strokeWidth={2} />
                    </div>
                    <h5 className="text-2xl font-black text-slate-900 mb-6 leading-tight">{area.title}</h5>
                    <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8 flex-1">{area.desc}</p>
                    <div className="space-y-3 pt-6 border-t border-slate-50">
                       {area.items.map((item, j) => (
                          <div key={j} className="flex items-center gap-3 text-xs font-black text-slate-400 uppercase tracking-tighter">
                             <CheckCircle2 size={14} className="text-hayrok-orange" />
                             {item}
                          </div>
                       ))}
                    </div>
                 </motion.div>
               ))}
            </motion.div>
         </div>
      </section>

      {/* Hay-AI Cloud Context Block */}
      <section className="py-32 bg-[#F8F9F5]">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <motion.div {...fadeInUp}>
                  <div className="inline-flex items-center gap-3 bg-hayrok-orange/10 border border-hayrok-orange/30 px-5 py-2 rounded-2xl text-hayrok-orange text-[10px] font-black uppercase tracking-[0.4em] mb-10">
                     <Bot size={16} /> The Reasoning Engine
                  </div>
                  <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight uppercase">Hay‑AI in <br/> <span className="text-hayrok-orange italic">Cloud Context.</span></h3>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                    Hay‑AI supports CSP integrations by applying graph‑based reasoning across cloud assets, identities, and exposure.
                  </p>
                  
                  <div className="grid sm:grid-cols-1 gap-6">
                    {[
                      "Applying graph‑based reasoning across cloud assets and identities",
                      "Orchestrating analysis and validation workflows",
                      "Assisting prioritization and reporting"
                    ].map((feat, i) => (
                      <div key={i} className="flex gap-4 items-center p-5 bg-white border border-slate-100 rounded-2xl shadow-sm">
                        <CheckCircle2 className="text-hayrok-orange" size={20} />
                        <span className="font-bold text-slate-700">{feat}</span>
                      </div>
                    ))}
                  </div>
               </motion.div>

               <div className="bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl h-[500px] flex flex-col items-center justify-center text-center">
                  <div className="absolute inset-0 bg-grid-white opacity-5" />
                  <div className="relative z-10 max-w-sm">
                     <p className="text-3xl font-black italic mb-10 leading-tight">“Hay‑AI reasons and orchestrates. Hive governs and records. <span className="text-hayrok-orange">Humans decide.</span>”</p>
                     <div className="flex items-center justify-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-hayrok-orange animate-pulse" />
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Governed Autonomy Statement</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Outcome Alignment</h2>
               <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">Mutual <br/><span className="text-hayrok-orange italic">Value.</span></h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
               <div className="p-12 md:p-16 bg-slate-50 border border-slate-100 rounded-[4rem] flex flex-col">
                  <h4 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-10">For CSP Partners</h4>
                  <ul className="space-y-6 flex-1">
                     {[
                        "Stronger customer outcomes through risk‑based decisions",
                        "Increased adoption of native security controls",
                        "Reduced alert fatigue for shared customers",
                        "Alignment with enterprise CTEM programs",
                        "Clear differentiation through validation context"
                     ].map((item, i) => (
                        <li key={i} className="flex gap-4 text-lg font-bold text-slate-600">
                           <CheckCircle2 size={20} className="text-hayrok-orange shrink-0 mt-1" />
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>

               <div className="p-12 md:p-16 bg-[#F8F9F5] border border-slate-100 rounded-[4rem] flex flex-col">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-10">For Shared Customers</h4>
                  <ul className="space-y-6 flex-1">
                     {[
                        "Better prioritization of cloud security risk",
                        "Evidence‑based remediation decisions",
                        "Clear linkage between posture and real‑world risk",
                        "Improved reporting to leadership and auditors",
                        "A repeatable CTEM operating model in the cloud"
                     ].map((item, i) => (
                        <li key={i} className="flex gap-4 text-lg font-bold text-slate-600">
                           <CheckCircle2 size={20} className="text-indigo-500 shrink-0 mt-1" />
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* CSP Models */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-20">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Program Tracks</h2>
               <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight uppercase">Partnership Models.</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { title: "Technology Integrations", desc: "Data ingestion, APIs, and security signal alignment.", icon: Network },
                 { title: "Co‑Solution Enablement", desc: "Joint value propositions around cloud security and CTEM.", icon: Briefcase },
                 { title: "Marketplace & Co‑Sell", desc: "Simplified procurement and joint customer engagement.", icon: Search }
               ].map((item, i) => (
                 <div key={i} className="p-10 border border-slate-100 rounded-[3rem] text-center hover:bg-slate-50 transition-all group">
                    <div className="w-16 h-16 bg-white shadow-sm border border-slate-100 rounded-2xl flex items-center justify-center text-hayrok-orange mx-auto mb-8 transition-transform group-hover:scale-110">
                       <item.icon size={28} />
                    </div>
                    <h5 className="text-xl font-black text-slate-900 mb-4">{item.title}</h5>
                    <p className="text-slate-500 font-medium">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Ecosystem Logos */}
      <section className="py-32 border-t border-slate-100">
         <div className="container mx-auto px-6 text-center">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-16">Ecosystem Alignment</h4>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-40">
               <span className="text-3xl font-black tracking-tighter">Amazon Web Services</span>
               <span className="text-3xl font-black tracking-tighter">Microsoft Azure</span>
               <span className="text-3xl font-black tracking-tighter">Google Cloud Platform</span>
            </div>
            <p className="mt-12 text-sm text-slate-400 font-medium italic">(Specific integrations and availability may vary.)</p>
         </div>
      </section>

      {/* Become a Partner Final CTA */}
      <section className="py-40 bg-white border-t border-slate-100">
         <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto p-12 md:p-32 bg-slate-900 rounded-[5rem] text-white relative overflow-hidden shadow-2xl group">
               <div className="absolute top-0 right-0 w-[50%] h-full bg-hayrok-orange/10 blur-[120px] rounded-full group-hover:bg-hayrok-orange/20 transition-all duration-700" />
               <div className="relative z-10">
                  <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.8em] mb-12">Connect with us</h3>
                  <p className="text-4xl md:text-[6rem] font-black mb-16 tracking-tight leading-[0.9] uppercase">
                    Become a <br/> <span className="text-hayrok-orange italic font-light tracking-tighter">CSP Partner.</span>
                  </p>
                  
                  <div className="flex flex-col items-center gap-12 max-w-2xl mx-auto">
                     <div className="space-y-4 text-center">
                        <p className="text-2xl font-black text-white">Email: <span className="text-hayrok-orange">partners@hayrok.com</span></p>
                        <p className="text-slate-400 font-medium">Subject: Cloud CSP Partnership</p>
                     </div>
                     
                     <div className="h-px w-24 bg-white/10" />
                     
                     <div className="flex flex-col sm:flex-row gap-6">
                        <a href="mailto:partners@hayrok.com?subject=Cloud%20CSP%20Partnership" className="bg-hayrok-orange text-white px-16 py-8 rounded-full font-black text-2xl hover:bg-orange-600 transition-all transform hover:scale-105 shadow-[0_30px_60px_-15px_rgba(255,95,0,0.4)] flex items-center gap-4">
                           Send Inquiry <ArrowRight size={24} />
                        </a>
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Signature Footer */}
      <div className="h-24 flex items-center justify-center border-t border-slate-100 bg-[#FCFCFA]">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            Hayrok partners with CSPs to support CTEM and security validation through AI‑driven capabilities designed for transparency and enterprise governance.
         </p>
      </div>
    </div>
  );
};