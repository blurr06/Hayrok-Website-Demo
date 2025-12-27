import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, Zap, ShieldCheck, Bot, Target, 
  ArrowRight, CheckCircle2, MessageSquare, 
  Sparkles, Code, Cpu, Globe, Rocket, 
  Terminal, Mail, Users, Heart, Gavel, FileSearch,
  Layout, Search, Layers, ChevronRight, BarChart3
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

export const CareersPage: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FCFCFA] min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-12 overflow-x-hidden relative">
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <IntelligenceFabric density={1.5} isDark={false} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,95,0,0.03)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-hayrok-orange text-[10px] font-black shadow-sm mx-auto mb-10 tracking-[0.4em] uppercase backdrop-blur-sm"
          >
            <Briefcase size={12} className="animate-pulse" />
            Careers at Hayrok
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="text-6xl md:text-[8rem] font-black tracking-tight leading-[0.9] text-slate-900 mb-12"
          >
            Build the Future <br />
            <span className="text-hayrok-orange italic font-light tracking-tighter">of Governed Security.</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium mb-16"
          >
            Work on problems that matter. Help us build a platform that turns security visibility into validated, auditable risk reduction for the modern enterprise.
          </motion.p>

          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a href="#open-roles" className="w-full sm:w-auto bg-hayrok-orange hover:bg-orange-600 text-white px-14 py-6 rounded-full font-black text-lg flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-[0_20px_40px_-10px_rgba(255,95,0,0.3)]">
              View Open Roles
            </a>
            <a href="mailto:careers@hayrok.com" className="w-full sm:w-auto px-14 py-6 rounded-full font-black text-lg text-slate-900 border border-slate-200 hover:bg-white transition-all shadow-sm flex items-center justify-center gap-2">
              <Mail size={18} />
              Email Careers
            </a>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white border-y border-slate-100">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <motion.div {...fadeInUp}>
                  <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Work on Problems That Matter</h2>
                  <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                    Beyond alert <span className="text-slate-400 italic">volume.</span>
                  </h3>
                  <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
                    At Hayrok, we’re building a platform designed to help organizations understand, prioritize, and manage real security risk—not just generate more alerts.
                  </p>
                  <p className="text-lg text-slate-500 font-medium leading-relaxed">
                    Our work supports Continuous Threat Exposure Management (CTEM), security validation, and responsible AI‑assisted decision‑making for enterprise and regulated environments.
                  </p>
               </motion.div>
               <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 p-12 opacity-5">
                    <Rocket size={240} className="text-hayrok-orange" />
                  </div>
                  <div className="relative z-10">
                     <p className="text-2xl font-black italic mb-8">"If you’re interested in solving complex problems at the intersection of security, AI, and governance, Hayrok is building for that future."</p>
                     <div className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-hayrok-orange animate-pulse" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Hayrok Founders</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Why Work at Hayrok - Bento Grid */}
      <section className="py-32">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-6">Why Join Us?</h2>
               <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">Why work <br/> at <span className="text-hayrok-orange italic font-light tracking-tighter">Hayrok.</span></h3>
            </div>

            <motion.div 
               variants={staggerContainer}
               initial="initial"
               whileInView="whileInView"
               className="grid md:grid-cols-2 gap-8"
            >
               {[
                 { 
                   title: "Meaningful Problems", 
                   desc: "We focus on real‑world security challenges: exposure management, validation, decision governance, and operational trust.", 
                   icon: Target,
                   accent: "bg-blue-50 text-blue-600"
                 },
                 { 
                   title: "Governance‑First Engineering", 
                   desc: "We design systems that are explainable, auditable, and human‑led—because enterprise security requires accountability, not shortcuts.", 
                   icon: Gavel,
                   accent: "bg-orange-50 text-hayrok-orange"
                 },
                 { 
                   title: "Thoughtful Use of AI", 
                   desc: "AI at Hayrok is used to assist reasoning and orchestration, not replace human judgment. We build AI systems responsibly and transparently.", 
                   icon: Bot,
                   accent: "bg-indigo-50 text-indigo-500"
                 },
                 { 
                   title: "Early, Impactful Stage", 
                   desc: "As an early‑stage company, your work will directly shape platform architecture, product direction, and customer outcomes.", 
                   icon: Rocket,
                   accent: "bg-emerald-50 text-emerald-500"
                 }
               ].map((item, i) => (
                 <motion.div 
                    key={i}
                    variants={fadeInUp}
                    className="p-12 bg-white border border-slate-100 rounded-[3.5rem] hover:shadow-2xl hover:border-hayrok-orange/30 transition-all group flex flex-col"
                 >
                    <div className={`w-16 h-16 ${item.accent} rounded-[1.8rem] flex items-center justify-center shadow-sm mb-10 group-hover:scale-110 group-hover:rotate-2 transition-all`}>
                       <item.icon size={28} strokeWidth={2.5} />
                    </div>
                    <h5 className="text-2xl font-black text-slate-900 mb-4 leading-tight">{item.title}</h5>
                    <p className="text-slate-500 text-lg font-medium leading-relaxed flex-1">{item.desc}</p>
                 </motion.div>
               ))}
            </motion.div>
         </div>
      </section>

      {/* What We're Building Block */}
      <section className="py-32 bg-slate-50">
         <div className="container mx-auto px-6">
            <div className="max-w-4xl mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Product Landscape</h2>
               <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">What we're <br/><span className="text-hayrok-orange italic">Building.</span></h3>
               <p className="text-xl text-slate-500 font-medium mt-10 leading-relaxed">Our products are designed for enterprise scale, analyst scrutiny, and long‑term trust. We are crafting a unified platform for the future of offensive security.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                  { name: "Hive", d: "A system of record and governance layer for CTEM.", icon: BarChart3 },
                  { name: "Genesis", d: "BAS‑aligned autonomous security validation.", icon: Zap },
                  { name: "CodeFabrics", d: "Application and software supply‑chain risk.", icon: Code },
                  { name: "Hay‑AI", d: "Governed intelligence and graph reasoning.", icon: Bot }
               ].map((mod, i) => (
                  <div key={i} className="p-8 border border-slate-200 rounded-[2.5rem] bg-white hover:border-hayrok-orange transition-all group">
                     <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-hayrok-orange mb-6 group-hover:bg-hayrok-orange group-hover:text-white transition-all">
                        <mod.icon size={20} />
                     </div>
                     <h4 className="text-xl font-black text-slate-900 mb-2">{mod.name}</h4>
                     <p className="text-sm text-slate-500 font-medium leading-relaxed">{mod.d}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Open Roles Section */}
      <section id="open-roles" className="py-32 bg-white scroll-mt-32">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Opportunities</h2>
               <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight uppercase">Open Roles.</h3>
               <p className="text-xl text-slate-500 font-medium mt-6">We hire selectively across high-stakes engineering and security domains.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                  { 
                    cat: "Engineering", 
                    icon: Terminal, 
                    roles: ["Backend / Platform Engineers", "Security Engineers", "AI / Applied ML Engineers", "Cloud & Infrastructure Engineers"] 
                  },
                  { 
                    cat: "Product & Design", 
                    icon: Layout, 
                    roles: ["Product Managers", "Technical Product Leads", "UX / Systems Designers"] 
                  },
                  { 
                    cat: "Security & Research", 
                    icon: Search, 
                    roles: ["Security Researchers", "Validation & Adversary Simulation", "AppSec Specialists"] 
                  },
                  { 
                    cat: "Go‑To‑Market", 
                    icon: Globe, 
                    roles: ["Solutions Engineers", "Security Architects", "Technical Partnerships"] 
                  }
               ].map((dept, i) => (
                  <div key={i} className="p-10 border border-slate-100 bg-[#FBFBF9] rounded-[3.5rem] flex flex-col group hover:bg-white hover:shadow-xl transition-all">
                     <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-200">
                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-hayrok-orange group-hover:scale-110 transition-transform">
                           <dept.icon size={20} />
                        </div>
                        <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight">{dept.cat}</h4>
                     </div>
                     <ul className="space-y-4 flex-1">
                        {dept.roles.map((role, j) => (
                           <li key={j} className="flex gap-3 text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                              <div className="w-1.5 h-1.5 rounded-full bg-hayrok-orange mt-1.5 shrink-0" />
                              {role}
                           </li>
                        ))}
                     </ul>
                     <p className="mt-10 text-[9px] font-black text-slate-400 uppercase tracking-widest">Remote / Hybrid Options</p>
                  </div>
               ))}
            </div>

            <div className="mt-12 p-8 bg-orange-50 border border-orange-100 rounded-[2.5rem] text-center">
               <p className="text-lg font-bold text-slate-800">Not seeing the right role?</p>
               <p className="text-slate-500 font-medium mb-6">We’re always interested in strong engineers, security practitioners, and product thinkers.</p>
               <a href="mailto:careers@hayrok.com" className="text-hayrok-orange font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:underline">
                  Send a speculative note <ArrowRight size={14} />
               </a>
            </div>
         </div>
      </section>

      {/* Hiring Philosophy */}
      <section className="py-32 bg-[#F8F9F5]">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <motion.div {...fadeInUp}>
                  <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-8">How we hire</h2>
                  <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">Depth <br/> over <span className="text-hayrok-orange">buzzwords.</span></h3>
                  <div className="space-y-6">
                     {[
                        "Interviews focus on thinking, problem‑solving, and judgment",
                        "We value depth of understanding over breadth of labels",
                        "We respect candidates’ time and communicate clearly",
                        "We aim to build a diverse, inclusive, and respectful team"
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                           <div className="p-1 bg-white rounded-full text-hayrok-orange shadow-sm border border-slate-100 shrink-0">
                              <CheckCircle2 size={16} strokeWidth={3} />
                           </div>
                           <span className="text-lg font-bold text-slate-700 leading-snug">{item}</span>
                        </div>
                     ))}
                  </div>
               </motion.div>

               <div className="bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden group shadow-2xl">
                  <div className="absolute inset-0 bg-grid-white opacity-5" />
                  <h4 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-10 flex items-center gap-3">
                     <ShieldCheck size={16} /> Responsible Innovation
                  </h4>
                  <ul className="space-y-8 relative z-10">
                     {[
                        { label: "Ethical Research", desc: "Committed to responsible security disclosure." },
                        { label: "AI Transparency", desc: "Human oversight is a non-negotiable core value." },
                        { label: "Outcome Ownership", desc: "Every line of code should reduce real risk." }
                     ].map((val, i) => (
                        <div key={i}>
                           <p className="text-xl font-black mb-1">{val.label}</p>
                           <p className="text-sm text-slate-400 font-medium">{val.desc}</p>
                        </div>
                     ))}
                  </ul>
                  <div className="mt-12 h-px w-full bg-white/10" />
                  <p className="mt-8 text-xs font-bold text-slate-500 italic">"These values guide how we build—and how we hire."</p>
               </div>
            </div>
         </div>
      </section>

      {/* How to Apply Final CTA */}
      <section className="py-40 bg-white border-t border-slate-100">
         <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto p-12 md:p-32 bg-slate-900 rounded-[5rem] text-white relative overflow-hidden shadow-2xl group">
               <div className="absolute top-0 right-0 w-[50%] h-full bg-hayrok-orange/10 blur-[120px] rounded-full group-hover:bg-hayrok-orange/20 transition-all duration-700" />
               <div className="relative z-10">
                  <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.8em] mb-12">Application Process</h3>
                  <p className="text-4xl md:text-[6rem] font-black mb-16 tracking-tight leading-[0.9] uppercase">
                    Ready to <br/> <span className="text-hayrok-orange italic font-light tracking-tighter">Join?</span>
                  </p>
                  
                  <div className="flex flex-col items-center gap-12 max-w-2xl mx-auto">
                     <div className="space-y-4">
                        <p className="text-2xl font-black text-white">Email: <span className="text-hayrok-orange">careers@hayrok.com</span></p>
                        <p className="text-slate-400 font-medium">Include your resume, LinkedIn, GitHub, or relevant work. Briefly tell us what problems you want to work on and why.</p>
                     </div>
                     
                     <div className="h-px w-24 bg-white/10" />
                     
                     <div className="flex flex-col sm:flex-row gap-6">
                        <a href="mailto:careers@hayrok.com" className="bg-hayrok-orange text-white px-16 py-8 rounded-full font-black text-2xl hover:bg-orange-600 transition-all transform hover:scale-105 shadow-[0_30px_60px_-15px_rgba(255,95,0,0.4)]">
                           Submit Application
                        </a>
                     </div>
                     
                     <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] mt-10">We review every application thoughtfully.</p>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Signature Footer */}
      <div className="h-24 flex items-center justify-center border-t border-slate-100 bg-[#FCFCFA]">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            Hayrok is an equal opportunity employer committed to building a governed, accountable, and diverse team to solve the next generation of security challenges.
         </p>
      </div>
    </div>
  );
};
