import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileCode, Sparkles, ShieldCheck, BarChart3, Bot, 
  ArrowLeft, ArrowRight, Download, Share2, History, 
  CheckCircle2, Layers, Network, Gavel, 
  Workflow, Database, Target, Zap, ChevronRight, 
  BookOpen, Terminal, Scale, Activity, Rocket,
  Users, FileSearch, Code, Globe, Search,
  Calendar, Clock, Mail, Cpu, Server, Shield,
  Cloud, Layout, FileText, List, Bookmark, Info
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

export const WHITEPAPERS = [
  {
    id: 'unified-architecture',
    title: "A Unified Architecture for Continuous Threat Exposure Management",
    subtitle: "A Technical Specification for Hive and the Hay‑AI Reasoning Engine",
    author: "Hayrok Research & Strategy",
    date: "Oct 2024",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070",
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
    isDraft: false
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
    isDraft: false
  }
];

export const WhitepapersPage: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  const [selectedPaperId, setSelectedPaperId] = useState<string | null>(null);

  const activePaper = WHITEPAPERS.find(p => p.id === selectedPaperId);

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
              className="text-6xl md:text-[8rem] font-black tracking-tight leading-[0.9] text-slate-900 mb-10 uppercase"
            >
              White <span className="text-hayrok-orange italic font-light tracking-tighter">Papers.</span>
            </motion.h1>
            
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-3xl mx-auto font-medium mb-12">
              Peer-reviewed technical specifications and strategic frameworks for the next generation of security leadership.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 relative z-10 pb-32">
          <div className="grid gap-8 max-w-6xl mx-auto">
            {WHITEPAPERS.map((paper, i) => (
              <motion.div 
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedPaperId(paper.id)}
                className="group bg-white border border-slate-200 rounded-[3.5rem] p-10 md:p-16 hover:shadow-2xl hover:border-hayrok-orange/30 transition-all duration-500 cursor-pointer flex flex-col md:flex-row gap-12 items-center"
              >
                <div className="w-full md:w-1/3 aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border border-slate-100 shrink-0 relative">
                   <img src={paper.image || "https://images.unsplash.com/photo-1586281380349-631531a3d245?q=80&w=2070"} alt={paper.title} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                   <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-60">Published by</p>
                      <p className="text-xs font-black uppercase tracking-tight">Hayrok Labs</p>
                   </div>
                </div>
                <div className="flex-1">
                   <div className="flex items-center gap-4 mb-6">
                      <span className="px-4 py-1.5 bg-slate-100 text-slate-900 rounded-full text-[10px] font-black uppercase tracking-widest">White Paper</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{paper.date}</span>
                   </div>
                   <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1] uppercase">{paper.title}</h3>
                   <p className="text-xl text-slate-500 font-medium leading-relaxed mb-8">{paper.snippet}</p>
                   <div className="flex flex-wrap gap-3 mb-10">
                      {paper.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-md text-[9px] font-black text-slate-400 uppercase">{tag}</span>
                      ))}
                   </div>
                   <div className="flex items-center gap-6">
                      <button className="flex items-center gap-3 bg-hayrok-orange text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
                         Read Deep Dive
                      </button>
                      <span className="text-slate-400 font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                        <Clock size={14} /> {paper.readTime}
                      </span>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // --- Immersive Reader View ---
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-24 overflow-x-hidden relative">
      <section className="relative pt-48 pb-24 overflow-hidden border-b border-slate-100">
        <IntelligenceFabric density={1} isDark={false} />
        <div className="container mx-auto px-6 relative z-10">
          <button 
            onClick={() => setSelectedPaperId(null)}
            className="flex items-center gap-2 text-slate-400 hover:text-hayrok-orange transition-colors font-black text-[10px] uppercase tracking-[0.5em] mb-12 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Library
          </button>

          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <span className="px-5 py-2 bg-hayrok-dark text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                Technical Specification
              </span>
              <span className="text-hayrok-orange font-black text-[10px] uppercase tracking-widest">
                Peer Reviewed
              </span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black tracking-tight leading-[1] text-slate-900 mb-8 uppercase"
            >
              {activePaper?.title}
            </motion.h1>
            <p className="text-2xl text-slate-500 font-bold mb-12 italic leading-relaxed">
              {activePaper?.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-12 pt-10 border-t border-slate-100">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Author</p>
                    <p className="text-sm font-black text-slate-900 uppercase">{activePaper?.author}</p>
                  </div>
               </div>
               <div className="flex-1 hidden md:block" />
               <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-hayrok-orange text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-orange-500/20 hover:bg-orange-600 transition-all">
                     <Download size={14} /> Download PDF
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-800 transition-all">
                     <Share2 size={14} /> Share
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pt-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-start max-w-7xl mx-auto">
          
          <aside className="lg:col-span-3 sticky top-32 space-y-12">
             <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8 border-b border-slate-200 pb-4 flex items-center gap-2">
                   <List size={14} className="text-hayrok-orange" /> Table of Contents
                </h4>
                <div className="space-y-4">
                  {["Abstract", "Executive Summary", "Technical Requirements", "The Hive Protocol", "Conclusion"].map((sec, i) => (
                    <div key={i} className="text-[11px] font-black text-slate-500 uppercase tracking-widest hover:text-hayrok-orange transition-colors cursor-pointer flex items-center gap-3">
                       <span className="text-[9px] text-slate-300">0{i+1}</span> {sec}
                    </div>
                  ))}
                </div>
             </div>

             <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Bookmark size={80} className="text-hayrok-orange" />
                </div>
                <h4 className="text-hayrok-orange font-black text-[10px] uppercase tracking-[0.4em] mb-6 relative z-10">Key Takeaway</h4>
                <p className="text-sm font-bold text-slate-200 leading-relaxed relative z-10">
                   Security validation must move from point-in-time snapshots to continuous, evidence-based reasoning cycles to maintain true enterprise trust.
                </p>
             </div>
          </aside>

          <main className="lg:col-span-9 max-w-4xl">
            <div className="prose prose-slate prose-lg max-w-none prose-p:text-xl prose-p:leading-relaxed prose-p:text-slate-600 prose-strong:text-slate-900 prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight">
              
              <div className="p-12 md:p-16 bg-white border border-slate-200 rounded-[4rem] mb-20 relative overflow-hidden group shadow-sm">
                 <div className="absolute inset-0 bg-grid-slate-100 opacity-20" />
                 <h2 className="!mt-0 text-hayrok-orange">Executive Summary</h2>
                 <p className="relative z-10">
                    This document provides the foundational reasoning for Hayrok's Governed Security Risk Intelligence platform. We argue that the current trajectory of cybersecurity tooling is unsustainable without a centralized, auditable system of record that links exposure findings directly to validated proof.
                 </p>
              </div>

              <h2>01. Abstract</h2>
              <p>
                In the modern, high-stakes security landscape, the abundance of visibility signals has created a "signal-to-decision" gap. This paper outlines how Hayrok's platform architecture bridges this gap by introducing a governed intelligence layer.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 my-16">
                 {[
                   { l: "Recursive Logic Patterns", i: Activity },
                   { l: "Auditable Rationale", i: Gavel },
                   { l: "Validation Proving", i: Target },
                   { l: "Continuous Sync", i: RefreshCwIcon }
                 ].map((p, i) => (
                   <div key={i} className="flex gap-4 items-center p-8 bg-slate-50 border border-slate-100 rounded-3xl group hover:border-hayrok-orange transition-all">
                      <p.i size={20} className="text-hayrok-orange shrink-0" />
                      <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest leading-none">{p.l}</span>
                   </div>
                 ))}
              </div>

              <h2>02. Technical Requirements</h2>
              <p>
                To achieve governed autonomy, a security platform must satisfy three critical requirements: Decision Lineage, Policy Persistence, and Evidence Integrity.
              </p>

              <div className="my-16 p-10 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                 <div className="absolute inset-0 bg-grid-white opacity-5" />
                 <h3 className="text-hayrok-orange !mt-0 uppercase tracking-widest text-sm mb-10">Architecture Model</h3>
                 <div className="space-y-8">
                    {[
                      { t: "Logic Constraint Layer", d: "Open Policy Agent (OPA) constraints applied to all AI agent actions." },
                      { t: "Evidence Vault", d: "Immutable storage for validation artifacts and proof paths." },
                      { t: "Narrative Engine", d: "Transparent reasoning logs mapped to organizational risk tolerance." }
                    ].map((item, i) => (
                      <div key={i} className="border-l-2 border-hayrok-orange/30 pl-8">
                         <p className="text-lg font-black text-white uppercase tracking-tight mb-1">{item.t}</p>
                         <p className="text-slate-400 text-sm font-medium">{item.d}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="mt-20 p-12 md:p-24 bg-hayrok-dark rounded-[5rem] text-white text-center relative overflow-hidden group shadow-2xl">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,95,0,0.1)_0%,transparent_70%)] opacity-30" />
                  <div className="relative z-10">
                    <h4 className="text-4xl md:text-5xl font-black mb-10 tracking-tight uppercase leading-[0.9]">Unlock the Full <br/> <span className="text-hayrok-orange">Technical Package.</span></h4>
                    <p className="text-xl text-slate-400 font-medium mb-12 max-w-xl mx-auto leading-relaxed">
                      Download the complete white paper and implementation blueprint.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <button className="w-full sm:w-auto bg-hayrok-orange text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20 flex items-center justify-center gap-3">
                          Download Complete PDF <Download size={18} />
                        </button>
                    </div>
                  </div>
              </div>
            </div>
          </main>
        </div>
      </section>

      <div className="h-32 flex items-center justify-center border-t border-slate-100 bg-[#FCFCFA] mt-24">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            Strategic Research Archive. Published by Hayrok Research & Strategy. All findings verified by peer review protocols.
         </p>
      </div>
    </div>
  );
};

const User = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);

const RefreshCwIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M3 21v-5h5" />
  </svg>
);
