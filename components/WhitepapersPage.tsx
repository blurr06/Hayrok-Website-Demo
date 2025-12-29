import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Add missing icons Cloud, Layout, and FileText to the imports from lucide-react
import { 
  FileCode, Sparkles, ShieldCheck, BarChart3, Bot, 
  ArrowLeft, ArrowRight, Download, Share2, History, 
  CheckCircle2, Layers, Network, Gavel, 
  Workflow, Database, Target, Zap, ChevronRight, 
  BookOpen, Terminal, Scale, Activity, Rocket,
  Users, FileSearch, Code, Globe, Search,
  Calendar, Clock, Mail, Cpu, Server, Shield,
  Cloud, Layout, FileText
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

// --- Architecture Diagram Component ---
const ArchitectureDiagram = () => {
  return (
    <div className="w-full py-12 px-4 md:px-8 bg-slate-900 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden my-16">
      <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
      <div className="relative z-10">
        <div className="text-center mb-12">
          <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-2">Technical Schematic</p>
          <h4 className="text-2xl font-black text-white uppercase tracking-tight">The Hive & Hay‑AI Orchestration Stack</h4>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {/* Layer 1: Ingestion */}
          <div className="space-y-4">
            <div className="p-1 text-[9px] font-black text-slate-500 uppercase tracking-widest text-center border-b border-white/10 mb-4">Telemetry Ingestion Layer</div>
            {[
              { icon: Cloud, label: "Cloud Infra (AWS/GCP)", color: "text-blue-400" },
              { icon: Code, label: "SDLC & Supply Chain", color: "text-emerald-400" },
              { icon: Shield, label: "Security Tooling", color: "text-indigo-400" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl"
              >
                <item.icon size={18} className={item.color} />
                <span className="text-xs font-bold text-slate-300 uppercase">{item.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Layer 2: Core Architecture */}
          <div className="relative flex flex-col items-center justify-center gap-12">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-full p-8 bg-hayrok-orange rounded-[2.5rem] shadow-[0_0_50px_rgba(255,95,0,0.3)] border-2 border-white/20 relative z-20 text-center"
            >
              <Database size={32} className="text-white mx-auto mb-4" />
              <h5 className="text-lg font-black text-white uppercase leading-none">Hive Core</h5>
              <p className="text-[8px] font-black text-white/70 uppercase tracking-widest mt-2">Multi-Domain System of Record</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="w-full p-8 bg-slate-800 rounded-[2.5rem] shadow-2xl border border-white/10 relative z-20 text-center"
            >
              <Cpu size={32} className="text-hayrok-orange mx-auto mb-4" />
              <h5 className="text-lg font-black text-white uppercase leading-none">Hay‑AI Logic</h5>
              <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-2">Recursive Graph Reasoning</p>
            </motion.div>

            {/* Connecting lines visualized as CSS pulses */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-hayrok-orange to-transparent opacity-20" />
          </div>

          {/* Layer 3: Outcomes */}
          <div className="space-y-4">
            <div className="p-1 text-[9px] font-black text-slate-500 uppercase tracking-widest text-center border-b border-white/10 mb-4">Execution & Governance</div>
            {[
              { icon: Zap, label: "Genesis Validation", color: "text-hayrok-orange" },
              { icon: Gavel, label: "Policy Enforcement", color: "text-slate-200" },
              { icon: Layout, label: "Audit-Ready Logs", color: "text-slate-400" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl"
              >
                <item.icon size={18} className={item.color} />
                <span className="text-xs font-bold text-slate-300 uppercase">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Data structure for whitepapers
const WHITEPAPERS = [
  {
    id: 'unified-architecture',
    title: "A Unified Architecture for Continuous Threat Exposure Management",
    subtitle: "A Technical Specification for Hive and the Hay‑AI Reasoning Engine",
    author: "Hayrok Research & Strategy",
    date: "Oct 2024",
    readTime: "15 min read",
    snippet: "Technical exploration of Hayrok’s system of record and recursive reasoning layer, designed to translate multi-domain telemetry into governed, evidence-based security decisions.",
    tags: ["Architecture", "Logic", "CTEM"]
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
              className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-3xl mx-auto mb-20"
            >
              Technical specifications and strategic frameworks for Continuous Threat Exposure Management and Governed AI.
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
                   Need a technical deep dive into a specific technology or framework? Our research team collaborates with enterprise partners on custom strategy briefings.
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
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 px-4">Technical Specs</p>
              {[
                { id: "abstract", label: "Abstract" },
                { id: "fragmentation", label: "The Telemetry Gap" },
                { id: "architecture", label: "System Architecture" },
                { id: "hive-sor", label: "Hive: System of Record" },
                { id: "hay-ai-recursive", label: "Hay‑AI Reasoning" },
                { id: "graph-logic", label: "Graph-Based Logic" },
                { id: "agentic-orchestration", label: "Agentic Orchestration" },
                { id: "ctem-alignment", label: "Lifecycle Alignment" },
                { id: "governance", label: "Decision Governance" },
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
                <WhitepaperSection id="abstract" title="Abstract">
                  <p className="text-xl font-medium text-slate-700 leading-relaxed mb-8">
                    Continuous Threat Exposure Management (CTEM) requires more than broad telemetry; it necessitates an architectural framework capable of correlating disparate signals into defensible risk decisions. This paper details the Hayrok architecture—a dual-layer stack comprising <strong>Hive</strong>, a multi-domain system of record, and <strong>Hay‑AI</strong>, a governed recursive reasoning engine. Together, these components establish a closed-loop system for exposure discovery, autonomous validation, and policy-bound mobilization.
                  </p>
                </WhitepaperSection>

                <WhitepaperSection id="fragmentation" title="The Telemetry Gap: Fragmented Decisioning">
                  <p>
                    Modern enterprise security stacks are characterized by high-volume, low-context telemetry. Traditional models fail to resolve the "Exploitability Gap"—the delta between what a tool flags as a vulnerability and what an attacker can practically execute.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-6 my-10">
                    {[
                      { l: "Isolated Signals", d: "SCA, SAST, and CSPM data remain siloed, preventing path correlation." },
                      { l: "Static Prioritization", d: "Severity scores (CVSS) ignore environment-specific reachability." },
                      { l: "Manual Validation", d: "Human teams cannot scale to validate exposure at the speed of cloud change." },
                      { l: "Governance Deficit", d: "Automation lacks the auditability required for regulated sector adoption." }
                    ].map((item, i) => (
                      <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <span className="text-xs font-black text-hayrok-orange uppercase block mb-1">{item.l}</span>
                        <p className="text-sm font-bold text-slate-500 leading-tight">{item.d}</p>
                      </div>
                    ))}
                  </div>
                </WhitepaperSection>

                <WhitepaperSection id="architecture" title="System Architecture">
                  <p>
                    The Hayrok stack is designed as a modular, governed orchestration layer that sits on top of existing security and infrastructure telemetry.
                  </p>
                  <ArchitectureDiagram />
                  <p className="text-sm text-slate-400 font-medium italic text-center">
                    Fig 1.0: Logic flow from telemetry ingestion to governed risk reduction.
                  </p>
                </WhitepaperSection>

                <WhitepaperSection id="hive-sor" title="Hive: The Multi-Domain System of Record">
                  <p>
                    Hive is the architectural foundation of the Hayrok platform. Unlike temporary scanning caches, Hive is a persistent <strong>System of Record (SoR)</strong> that preserves the state of risk across code, cloud, and identity domains.
                  </p>
                  <div className="bg-[#F8F9F5] rounded-[2.5rem] p-10 my-10 border border-slate-200">
                    <h5 className="font-black text-slate-900 mb-6 uppercase text-sm tracking-widest">Key Architectural Functions:</h5>
                    <ul className="space-y-6">
                      <li className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-hayrok-orange text-white flex items-center justify-center text-[10px] font-black shrink-0">1</div>
                        <div>
                          <p className="font-black text-slate-900">Telemetry Normalization</p>
                          <p className="text-sm text-slate-500">Normalizing schemas from 50+ integrations into a unified risk-intent data model.</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-hayrok-orange text-white flex items-center justify-center text-[10px] font-black shrink-0">2</div>
                        <div>
                          <p className="font-black text-slate-900">Decision State Persistence</p>
                          <p className="text-sm text-slate-500">Recording the "Why" behind every prioritization change, not just the "What".</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-hayrok-orange text-white flex items-center justify-center text-[10px] font-black shrink-0">3</div>
                        <div>
                          <p className="font-black text-slate-900">Audit-ready History</p>
                          <p className="text-sm text-slate-500">Maintaining immutable logs of remediation progress and risk movement over time.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </WhitepaperSection>

                <WhitepaperSection id="hay-ai-recursive" title="Hay‑AI: Recursive Reasoning & Orchestration">
                  <p>
                    Hay‑AI is the intelligence engine that interacts with Hive. It moves beyond linear rules to recursive logic, building complex attack graphs that simulate how transitive trust and misconfiguration compound.
                  </p>
                  <div className="p-8 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden my-12">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                      <Bot size={120} className="text-hayrok-orange" />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 text-hayrok-orange font-black text-[10px] uppercase tracking-[0.5em] mb-6">
                         <Cpu size={16} /> Reasoning Logic
                      </div>
                      <h4 className="text-2xl font-black mb-6 uppercase tracking-tight">Agentic Reasoning vs. Scripting</h4>
                      <p className="text-slate-400 font-medium leading-relaxed mb-8">
                        Traditional automation executes a predefined script. Hay‑AI applies <strong>Recursive Logical Inference</strong>: evaluating a finding, identifying secondary dependencies, and autonomously deciding which validation agent to trigger next.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                          <span className="text-[10px] font-black text-hayrok-orange uppercase tracking-widest block mb-1">Traditional</span>
                          <p className="text-xs font-bold text-slate-300 italic">"If vuln A exists, alert."</p>
                        </div>
                        <div className="p-4 bg-hayrok-orange/10 rounded-xl border border-hayrok-orange/20">
                          <span className="text-[10px] font-black text-hayrok-orange uppercase tracking-widest block mb-1">Hay-AI</span>
                          <p className="text-xs font-bold text-white italic">"Vuln A exists; check identity B reachability; validate path C."</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </WhitepaperSection>

                <WhitepaperSection id="graph-logic" title="Graph‑Based Relationship Intelligence">
                  <p>
                    Security risk rarely exists in isolation. Hay‑AI maps relationships across four primary dimensions to identify <strong>Viable Attack Paths</strong>:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 my-10">
                    {[
                      { t: "Asset Topology", d: "Network adjacency, subnet boundary, and ingress/egress points.", i: Globe },
                      { t: "Identity Mesh", d: "Transitive trust, IAM role assumption, and credential reuse.", i: Users },
                      { t: "Code Provenance", d: "SBOM inheritance, build pipeline integrity, and commit lineage.", i: Code },
                      { t: "Logic Constraints", d: "Runtime policies, WAF rules, and compensating controls.", i: ShieldCheck }
                    ].map((item, i) => (
                      <div className="flex gap-6 p-8 bg-white border border-slate-100 rounded-[2.5rem] group hover:border-hayrok-orange/30 transition-all" key={i}>
                        <item.i className="text-hayrok-orange shrink-0" size={24} />
                        <div>
                          <h6 className="font-black text-slate-900 uppercase text-xs mb-1 tracking-tight">{item.t}</h6>
                          <p className="text-sm font-bold text-slate-400 leading-tight uppercase">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </WhitepaperSection>

                <WhitepaperSection id="agentic-orchestration" title="The Bee Colony Model: Agentic Orchestration">
                  <p>
                    To operate at scale without creating unmanageable complex codebases, Hayrok uses the <strong>Bee Colony Model</strong>. In this framework, Hay‑AI acts as the central orchestrator for specialized, narrow-scope agents ("Bees").
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 my-10">
                    <div className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem]">
                      <Search size={24} className="text-slate-400 mb-6" />
                      <h5 className="font-black text-slate-900 text-sm uppercase mb-2">Discovery Bees</h5>
                      <p className="text-xs font-bold text-slate-500 uppercase leading-relaxed">Narrow-scope tasks: Scan port, check IAM policy, map SBOM.</p>
                    </div>
                    <div className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem]">
                      <Zap size={24} className="text-hayrok-orange mb-6" />
                      <h5 className="font-black text-slate-900 text-sm uppercase mb-2">Validation Bees</h5>
                      <p className="text-xs font-bold text-slate-500 uppercase leading-relaxed">Safe payload execution: Verify SSRF, test credential leak.</p>
                    </div>
                    <div className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem]">
                      <FileText size={24} className="text-slate-400 mb-6" />
                      <h5 className="font-black text-slate-900 text-sm uppercase mb-2">Evidence Bees</h5>
                      <p className="text-xs font-bold text-slate-500 uppercase leading-relaxed">Proof capture: screenshot UI, log network trace.</p>
                    </div>
                  </div>
                  <p className="font-bold text-slate-700 italic text-center">
                    "Agents perform the analysis. Hay‑AI sequences the flow. Hive records the result."
                  </p>
                </WhitepaperSection>

                <WhitepaperSection id="ctem-alignment" title="Supporting the CTEM Lifecycle">
                  <p>
                    Hayrok’s architecture maps natively to the Gartner CTEM framework, enabling a repeatable operational model:
                  </p>
                  <div className="space-y-4 my-10">
                    {[
                      { s: "Scope", d: "Hive aggregates multi-domain assets into a unified assessment boundary." },
                      { s: "Discover", d: "Continuous agents identify exposure signals across telemetry feeds." },
                      { s: "Prioritize", d: "Hay‑AI applies graph reasoning to rank risk by exploitability." },
                      { s: "Validate", d: "Genesis executes controlled simulations to generate hard proof." },
                      { s: "Mobilize", d: "Hive records remediation tasks and tracks residual risk movement." }
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-6 p-6 bg-white border border-slate-200 rounded-[2rem] shadow-sm">
                        <div className="text-3xl font-black text-hayrok-orange/20 w-12">{i+1}</div>
                        <div className="flex-1">
                          <span className="font-black text-slate-900 uppercase tracking-widest text-sm mr-4">{step.s}</span>
                          <span className="text-sm text-slate-500 font-bold uppercase">{step.d}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </WhitepaperSection>

                <WhitepaperSection id="governance" title="Governance by Design: The AI TRiSM Standard">
                  <p>
                    In regulated and enterprise environments, AI cannot be a "black box." Hayrok’s architecture enforces transparency through <strong>Decision Lineage</strong>.
                  </p>
                  <div className="flex gap-8 items-start p-10 bg-indigo-50 border border-indigo-100 rounded-[3rem] my-10">
                    <Gavel className="text-indigo-600 shrink-0 mt-1" size={32} />
                    <div>
                      <h5 className="text-lg font-black text-indigo-900 mb-2 uppercase">Auditable Decision Replay</h5>
                      <p className="text-slate-600 font-medium leading-relaxed">
                        Every risk score adjustment or validation run generated by Hay‑AI includes a "Lineage Artifact." This allows human analysts to trace the exact chain of logic used by the AI—from the initial telemetry signal to the final prioritization output—making every step reviewable and defensible.
                      </p>
                    </div>
                  </div>
                </WhitepaperSection>

                <WhitepaperSection id="conclusion" title="Conclusion">
                  <div className="prose prose-slate max-w-none prose-p:text-lg">
                    <p>
                      Traditional security models are failing to keep pace with the velocity and interconnected nature of modern cloud environments. By unifying exposure data in Hive and applying recursive reasoning through Hay‑AI, Hayrok provides an enterprise-ready architecture for Continuous Threat Exposure Management. This approach reduces organizational noise, eliminates the exploitability gap, and ensures that the move toward autonomous security remains governed and accountable.
                    </p>
                  </div>
                  
                  <div className="mt-20 p-12 md:p-24 bg-slate-900 rounded-[4rem] text-white text-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-grid-white opacity-5" />
                      <div className="relative z-10">
                        <h4 className="text-4xl font-black mb-8 tracking-tight uppercase leading-none">Ready for a Technical <br/> Strategy Briefing?</h4>
                        <p className="text-xl text-slate-400 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">Discuss this architecture and our CTEM roadmap with a Hayrok security architect.</p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                            <button onClick={() => onNavigate?.('contact')} className="w-full sm:w-auto bg-hayrok-orange text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/30">
                              Schedule Technical Deep-Dive
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
            Technical Research Paper #2024-01-ARCH. Published by Hayrok Security Research and Strategy. All rights reserved.
         </p>
      </div>
    </div>
  );
};
