import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
/* Added Mail to imports */
import { 
  FileCode, Sparkles, ShieldCheck, BarChart3, Bot, 
  ArrowLeft, ArrowRight, Download, Share2, Eye, History, 
  CheckCircle2, Info, Layers, Network, Gavel, 
  Workflow, Database, Target, Zap, ChevronRight, 
  BookOpen, Terminal, Scale, Activity, Rocket,
  Users, FileSearch, Code, Globe, Search,
  Calendar, Clock, ExternalLink, Mail
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

// Data structure for whitepapers
const WHITEPAPERS = [
  {
    id: 'unified-architecture',
    title: "A Unified Architecture for Continuous Threat Exposure Management",
    subtitle: "How Hayrok Unifies Exposure, Validation, and Governance Through Hive and Hay‑AI",
    author: "Hayrok Research & Strategy",
    date: "Oct 2024",
    readTime: "12 min read",
    snippet: "As organizations adopt Continuous Threat Exposure Management (CTEM), they encounter a fundamental challenge: while security tools generate vast amounts of data, few organizations have an architecture capable of turning those signals into governed, defensible risk decisions.",
    tags: ["Architecture", "Governance", "CTEM"]
  },
  {
    id: 'agentic-reasoning-security',
    title: "Agentic Reasoning in Security Operations",
    subtitle: "Moving Beyond Scripted Automation to Governed Decision Support",
    author: "Ebuka Igwegbe, CPO",
    date: "Nov 2024",
    readTime: "15 min read",
    snippet: "Autonomous security requires more than just faster execution; it requires a recursive reasoning engine capable of understanding transitive trust and complex attack graphs within a human-reviewable framework.",
    tags: ["AI", "SecOps", "Logic"],
    isDraft: true
  },
  {
    id: 'supply-chain-governance',
    title: "The Governance Gap in Software Supply Chains",
    subtitle: "Closing the Loop Between Code, Cloud, and Compliance",
    author: "Herberth Oshiemele, CEO",
    date: "Dec 2024",
    readTime: "10 min read",
    snippet: "Modern software builds introduce hundreds of third-party dependencies. This paper outlines a policy-driven approach to managing supply chain risk using CodeFabrics and Genesis validation.",
    tags: ["AppSec", "Supply Chain", "SCA"],
    isDraft: true
  }
];

const CalendarIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const WhitepaperSection: React.FC<{ id: string, title: string, children: React.ReactNode }> = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-32 py-16 border-t border-slate-100 first:border-0 first:pt-0">
    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 tracking-tight uppercase">{title}</h3>
    <div className="prose prose-slate max-w-none prose-p:text-lg prose-p:leading-relaxed prose-p:text-slate-600 prose-li:text-slate-600">
      {children}
    </div>
  </section>
);

export const WhitepapersPage: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  const [selectedPaperId, setSelectedPaperId] = useState<string | null>(null);

  // Render the Directory/List View
  if (!selectedPaperId) {
    return (
      <div className="bg-[#FCFCFA] min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-24 overflow-x-hidden relative">
        <IntelligenceFabric density={1.2} isDark={false} />
        
        <section className="relative pt-48 pb-12 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-900 text-[10px] font-black shadow-sm mb-10 tracking-[0.4em] uppercase"
            >
              <BookOpen size={12} className="text-hayrok-orange" />
              Technical Library
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] text-slate-900 mb-10"
            >
              White <span className="text-hayrok-orange italic font-light tracking-tighter">Papers.</span>
            </motion.h1>
            
            <motion.p 
              {...fadeInUp}
              className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium max-w-3xl mx-auto mb-20"
            >
              Strategic guidance and technical specifications for Continuous Threat Exposure Management and Governed AI.
            </motion.p>
          </div>
        </section>

        <section className="container mx-auto px-6 relative z-10">
          <div className="grid gap-8 max-w-5xl mx-auto">
            {WHITEPAPERS.map((paper, i) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => !paper.isDraft && setSelectedPaperId(paper.id)}
                className={`group p-10 md:p-12 bg-white border border-slate-200 rounded-[3.5rem] shadow-sm transition-all duration-500 flex flex-col md:flex-row gap-12 relative overflow-hidden ${paper.isDraft ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-2xl hover:border-hayrok-orange/30 cursor-pointer'}`}
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="px-4 py-1.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                      Technical Paper
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <Calendar size={12} /> {paper.date}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <Clock size={12} /> {paper.readTime}
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight group-hover:text-hayrok-orange transition-colors">
                    {paper.title}
                  </h2>
                  <p className="text-lg text-slate-400 font-bold mb-6 italic">{paper.subtitle}</p>
                  
                  <p className="text-slate-500 text-lg leading-relaxed mb-8 line-clamp-3">
                    {paper.snippet}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-slate-50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                        <Users size={14} className="text-slate-500" />
                      </div>
                      <span className="text-sm font-bold text-slate-900">{paper.author}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-hayrok-orange font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                      {paper.isDraft ? 'Available Soon' : 'Read Full Paper'} <ArrowRight size={16} />
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex w-48 shrink-0 flex-col items-center justify-center border-l border-slate-100 pl-12">
                   <FileCode size={64} className="text-slate-100 group-hover:text-hayrok-orange/20 transition-colors mb-6" />
                   <div className="flex gap-2">
                     {paper.tags.map(tag => (
                       <span key={tag} className="text-[9px] font-black text-slate-400 uppercase tracking-tighter px-2 py-1 bg-slate-50 rounded-md">{tag}</span>
                     ))}
                   </div>
                </div>

                {paper.isDraft && (
                  <div className="absolute top-10 right-[-35px] rotate-45 bg-slate-200 text-slate-500 py-1.5 px-12 text-[9px] font-black uppercase tracking-widest">
                    In Review
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 pt-32 pb-12 text-center">
           <div className="max-w-3xl mx-auto p-12 bg-slate-900 rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                 <Mail size={200} className="text-hayrok-orange" />
              </div>
              <div className="relative z-10">
                 <h4 className="text-2xl font-black mb-4">Request Custom Analysis</h4>
                 <p className="text-slate-400 font-medium mb-10 leading-relaxed">
                   Need a deep dive into a specific technology or regulatory framework? Our research team collaborates with enterprise partners on custom technical briefings.
                 </p>
                 <button onClick={() => onNavigate?.('contact')} className="px-10 py-5 bg-hayrok-orange text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl">
                   Connect with Research
                 </button>
              </div>
           </div>
        </section>
      </div>
    );
  }

  // Render the Full Whitepaper Detail View
  const activePaper = WHITEPAPERS.find(p => p.id === selectedPaperId);

  return (
    <div className="bg-[#FCFCFA] min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-24 overflow-x-hidden relative">
      
      {/* Detail Hero */}
      <section className="relative pt-48 pb-24 overflow-hidden border-b border-slate-100">
        <IntelligenceFabric density={1.2} isDark={false} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,95,0,0.04)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <button 
            onClick={() => setSelectedPaperId(null)}
            className="flex items-center gap-2 text-slate-400 hover:text-hayrok-orange transition-colors font-black text-[10px] uppercase tracking-widest mb-12 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Library
          </button>

          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-900 text-[10px] font-black shadow-sm mb-10 tracking-[0.4em] uppercase"
            >
              <FileCode size={12} className="text-hayrok-orange" />
              Technical White Paper
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-7xl font-black tracking-tight leading-[0.95] text-slate-900 mb-10"
            >
              {activePaper?.title}
            </motion.h1>
            
            <motion.p 
              {...fadeInUp}
              className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium mb-12"
            >
              {activePaper?.subtitle}
            </motion.p>

            <motion.div {...fadeInUp} className="flex flex-wrap items-center gap-8">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                     <Users size={18} className="text-slate-500" />
                  </div>
                  <div>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Authors</p>
                     <p className="text-sm font-bold text-slate-900">{activePaper?.author}</p>
                  </div>
               </div>
               <div className="h-8 w-px bg-slate-200" />
               <div className="flex items-center gap-3">
                  <CalendarIcon size={18} className="text-slate-400" />
                  <p className="text-sm font-bold text-slate-500">Published {activePaper?.date}</p>
               </div>
               <div className="flex-1" />
               <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-hayrok-orange transition-all shadow-xl">
                  <Download size={16} /> Download PDF
               </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Content Body */}
      <section className="container mx-auto px-6 pt-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Sidebar Detail Nav */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit">
            <div className="space-y-1">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 px-4">Sections</p>
              {[
                { id: "exec-summary", label: "Executive Summary" },
                { id: "challenge", label: "The Challenge" },
                { id: "hive-system", label: "Hive: System of Record" },
                { id: "architectural-principles", label: "Core Principles" },
                { id: "hay-ai-intelligence", label: "Hay-AI Intelligence" },
                { id: "graph-reasoning", label: "Graph-Based Reasoning" },
                { id: "zero-day", label: "Zero-Day Emulation" },
                { id: "bee-colony", label: "The Bee Colony Model" },
                { id: "unified-capabilities", label: "Platform Capabilities" },
                { id: "ctem-lifecycle", label: "CTEM Lifecycle" },
                { id: "business-value", label: "Business Value" },
                { id: "conclusion", label: "Conclusion" }
              ].map(item => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`}
                  className="block px-4 py-2.5 text-sm font-bold text-slate-500 hover:text-hayrok-orange hover:bg-orange-50 rounded-xl transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </aside>

          {/* Whitepaper Content */}
          <main className="lg:col-span-9 max-w-4xl">
            {selectedPaperId === 'unified-architecture' && (
              <>
                <WhitepaperSection id="exec-summary" title="Executive Summary">
                  <div className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-16 mb-12 shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-12 opacity-10">
                        <Target size={200} className="text-hayrok-orange" />
                      </div>
                      <div className="relative z-10">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed italic opacity-90">
                            "As organizations adopt Continuous Threat Exposure Management (CTEM), they encounter a fundamental challenge: while security tools generate vast amounts of data, few organizations have an architecture capable of turning those signals into governed, defensible risk decisions."
                        </p>
                        <div className="mt-12 grid sm:grid-cols-2 gap-6">
                            {[
                              "Correlate signals across domains",
                              "Reason through relationships",
                              "Prioritize based on evidence",
                              "Govern through auditable workflows"
                            ].map((item, i) => (
                              <div key={i} className="flex items-center gap-3">
                                  <div className="w-1.5 h-1.5 rounded-full bg-hayrok-orange" />
                                  <span className="text-sm font-black uppercase tracking-widest text-slate-300">{item}</span>
                              </div>
                            ))}
                        </div>
                      </div>
                  </div>
                  <p>
                    Hayrok addresses this challenge through Hive, a unifying architecture that serves as the system of record and governance layer for CTEM, supported by Hay‑AI, a governed intelligence and orchestration layer that applies reasoning across complex security relationships.
                  </p>
                </WhitepaperSection>

                <WhitepaperSection id="challenge" title="The Challenge: Fragmented Security Decision‑Making">
                  <p className="mb-8">
                    Modern security programs depend on a growing ecosystem of tools covering attack surface visibility, application security, validation, and detection. While these tools generate valuable signals, organizations struggle to:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      {[
                        { label: "Determining Exploitability", desc: "Hard to prove if exposure represents material risk." },
                        { label: "Environment Correlation", desc: "Findings remain isolated across clouds and apps." },
                        { label: "Coordinated Triage", desc: "Prioritization is manual and disconnected." },
                        { label: "Board Communication", desc: "Explaining risk decisions to non-technical stakeholders." }
                      ].map((item, i) => (
                        <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm">
                          <h5 className="font-black text-slate-900 mb-2 uppercase tracking-tight text-sm">{item.label}</h5>
                          <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                  </div>
                  <p className="font-bold text-slate-700 italic">
                    As a result, CTEM initiatives often stall at visibility, rather than maturing into validated, governed programs.
                  </p>
                </WhitepaperSection>

                <WhitepaperSection id="hive-system" title="Hive: The System of Record for CTEM">
                  <p>
                    Hive is the architectural foundation of the Hayrok platform. It functions as the system of record and governance layer that unifies exposure, validation, and remediation activity into a coherent CTEM program.
                  </p>
                  <div className="my-12 p-8 md:p-12 bg-[#F8F9F5] border border-slate-200 rounded-[3.5rem] relative overflow-hidden">
                      <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-32 h-32 bg-white rounded-[2rem] shadow-xl flex items-center justify-center text-hayrok-orange shrink-0">
                            <BarChart3 size={56} strokeWidth={2.5} />
                        </div>
                        <div>
                            <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">System of Record</h4>
                            <p className="text-lg font-medium text-slate-600 mb-6">Hive serves as the framework for preserving rationale, evidence, and outcomes over time.</p>
                            <p className="text-sm text-slate-400 font-bold italic">“Hive does not replace specialized security tools. Instead, it governs and records the outcomes produced by them.”</p>
                        </div>
                      </div>
                  </div>
                </WhitepaperSection>

                <WhitepaperSection id="architectural-principles" title="Architectural Principles">
                  <div className="grid gap-6">
                      {[
                        { title: "Separation of Concerns", desc: "Discovery, validation, reasoning, and governance are distinct activities and must remain decoupled to scale effectively.", icon: Layers },
                        { title: "Evidence Over Assumptions", desc: "Risk decisions should be informed by validation evidence and context, not severity scores alone.", icon: FileSearch },
                        { title: "Governance by Design", desc: "All decisions must be reviewable, explainable, and auditable.", icon: Gavel },
                        { title: "Program Orientation", desc: "CTEM is an ongoing program. Hive tracks risk movement and progress over time, not point‑in‑time results.", icon: History }
                      ].map((p, i) => (
                        <div key={i} className="flex gap-8 p-10 bg-white border border-slate-100 rounded-[2.5rem] group hover:border-hayrok-orange/30 transition-all">
                          <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-hayrok-orange shrink-0 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform">
                              <p.icon size={28} />
                          </div>
                          <div>
                              <h5 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">{i+1}. {p.title}</h5>
                              <p className="text-lg text-slate-500 font-medium leading-relaxed">{p.desc}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </WhitepaperSection>

                <WhitepaperSection id="hay-ai-intelligence" title="Hay‑AI: The Intelligence and Orchestration Layer">
                  <p>
                    Hay‑AI functions as the brain behind the platform’s workflows, enabling Hayrok to move from isolated signals to coordinated, evidence‑based outcomes.
                  </p>
                  <div className="my-10 p-1 bg-gradient-to-br from-hayrok-orange to-indigo-600 rounded-[3rem] shadow-2xl">
                      <div className="bg-slate-900 rounded-[2.9rem] p-12 text-white text-center">
                        <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-8">Canonical Definition</p>
                        <p className="text-2xl md:text-4xl font-black tracking-tight leading-tight mb-8">
                            “Hay‑AI is a governed intelligence and orchestration layer that supports CTEM decision‑making through graph‑based reasoning.”
                        </p>
                        <div className="flex justify-center items-center gap-6">
                            <div className="w-1.5 h-1.5 rounded-full bg-hayrok-orange animate-pulse" />
                            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Governed, Not Autonomous</span>
                        </div>
                      </div>
                  </div>
                </WhitepaperSection>

                <WhitepaperSection id="graph-reasoning" title="Graph‑Based Reasoning">
                  <p>
                    Security risk rarely exists in isolation. Hay‑AI applies graph‑based reasoning to understand relationships across assets, applications, identities, and dependencies.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 my-10">
                      {[
                        { label: "Viable Paths", d: "Identify the actual routes an attacker could traverse." },
                        { label: "Compounding Risk", d: "Understand how multiple low risks create a critical path." },
                        { label: "Adaptive Priority", d: "Update risk relevance as environment changes happen." }
                      ].map((item, i) => (
                        <div key={i} className="p-8 bg-white border border-slate-200 rounded-[2.5rem]">
                          <Network className="text-hayrok-orange mb-6" size={24} />
                          <h5 className="font-black text-slate-900 mb-2 uppercase text-sm tracking-tight">{item.label}</h5>
                          <p className="text-xs text-slate-500 font-bold leading-relaxed uppercase">{item.d}</p>
                        </div>
                      ))}
                  </div>
                </WhitepaperSection>

                <WhitepaperSection id="bee-colony" title="The Bee Colony Model">
                  <p className="mb-12">
                    To operate at scale, Hayrok uses a bee‑inspired agent model as a conceptual framework where specialized analytical functions are orchestrated safely.
                  </p>
                  <div className="grid md:grid-cols-2 gap-10">
                      <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                        <h4 className="text-hayrok-orange font-black text-[10px] uppercase tracking-[0.4em] mb-6">The Agents</h4>
                        <ul className="space-y-4">
                            {[
                              "Specialized analytical functions",
                              "Narrow task focus (correlation, enrichment)",
                              "No independent action authority"
                            ].map((txt, i) => (
                              <li key={i} className="flex gap-3 text-sm font-bold text-slate-700">
                                <div className="w-1.5 h-1.5 rounded-full bg-hayrok-orange mt-1.5 shrink-0" />
                                {txt}
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="p-10 bg-slate-900 text-white rounded-[3rem] relative overflow-hidden shadow-xl">
                        <div className="absolute inset-0 bg-grid-white opacity-5" />
                        <h4 className="text-hayrok-orange font-black text-[10px] uppercase tracking-[0.4em] mb-6 relative z-10">The Orchestrator</h4>
                        <ul className="space-y-4 relative z-10">
                            {[
                              "Sequences validation workflows",
                              "Applies policy constraints",
                              "Produces explainable outputs"
                            ].map((txt, i) => (
                              <li key={i} className="flex gap-3 text-sm font-bold text-slate-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-hayrok-orange mt-1.5 shrink-0" />
                                {txt}
                              </li>
                            ))}
                        </ul>
                      </div>
                  </div>
                  <div className="mt-12 text-center">
                      <p className="text-2xl font-black italic text-slate-900 tracking-tight">
                        “Hay‑AI reasons and orchestrates. <span className="text-hayrok-orange">Hive governs and records.</span> Humans decide.”
                      </p>
                  </div>
                </WhitepaperSection>

                <WhitepaperSection id="conclusion" title="Conclusion">
                  <div className="prose prose-slate max-w-none prose-p:text-lg">
                      <p>
                        Hive and Hay‑AI together form the architectural foundation of the Hayrok platform. By combining a central system of record with governed intelligence, evidence‑based validation, and human‑centered oversight, Hayrok provides an enterprise‑ready approach to operating CTEM at scale—without sacrificing governance, trust, or accountability.
                      </p>
                  </div>
                  
                  <div className="mt-20 p-12 md:p-20 bg-slate-900 rounded-[4rem] text-white text-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-grid-white opacity-5" />
                      <div className="relative z-10">
                        <h4 className="text-4xl font-black mb-8 tracking-tight uppercase">Ready to learn more?</h4>
                        <p className="text-xl text-slate-400 font-medium mb-12 max-w-2xl mx-auto">Discuss this architecture and our CTEM roadmap with a Hayrok security specialist.</p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                            <button onClick={() => onNavigate?.('contact')} className="w-full sm:w-auto bg-hayrok-orange text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/30">
                              Schedule a Strategy Briefing
                            </button>
                            <button onClick={() => setSelectedPaperId(null)} className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-white/10 transition-all">
                              Return to Library
                            </button>
                        </div>
                      </div>
                  </div>
                </WhitepaperSection>
              </>
            )}
          </main>
        </div>
      </section>

      {/* Signature Footer */}
      <div className="h-32 flex items-center justify-center border-t border-slate-100 bg-[#FCFCFA] mt-24">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            This library is curated by Hayrok Security Research to support technical and strategic alignment for modern security operations.
         </p>
      </div>
    </div>
  );
};