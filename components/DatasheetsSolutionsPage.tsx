import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, Zap, BarChart3, Globe, Code, 
  ArrowLeft, ArrowRight, Download, Share2, 
  ShieldCheck, Target, Layers, Database, 
  Sparkles, Cpu, Lock, Gavel, History, 
  CheckCircle2, Info, Activity, Terminal,
  Workflow, Search, FileSearch, ClipboardCheck,
  Server, Network, Eye, Rocket, Mail, ChevronRight,
  ShieldAlert, Box, GitBranch,
  UserCheck, Cloud, List, Bookmark, Clock, Calendar
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

export const DOCS = [
  {
    id: 'genesis-datasheet',
    title: "Genesis Engine: Technical Specifications",
    type: "Datasheet",
    category: "Validation",
    date: "Nov 2024",
    readTime: "8 min read",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
    snippet: "Complete technical breakdown of the Genesis autonomous validation engine, safe simulation methodology, and evidence capture frameworks.",
    content: [
      { type: 'heading', text: "Engine Architecture" },
      { type: 'paragraph', text: "The Genesis Engine utilizes a distributed agent-based architecture designed for non-destructive security validation. Unlike traditional scanners, Genesis operates as a recursive state machine, executing safe probes based on real-time environmental context." },
      { type: 'list', items: [
        "Safe Payload Execution: Probes are constrained to logic-only validation without data modification.",
        "Agentic Orchestration: Individual validation tasks are sequenced by Hay-AI to mimic multi-stage attack paths.",
        "Zero-Trust Connectivity: Agents communicate via mTLS-encrypted tunnels with strict logical isolation."
      ]},
      { type: 'heading', text: "Technical Capabilities" },
      { type: 'paragraph', text: "Genesis is built to solve the 'Proof' problem in security operations. It validates exploitability across three core domains:" },
      { type: 'list', items: [
        "Cloud Infrastructure: IAM trust relationship traversal, S3/RDS exposure, and metadata service abuse.",
        "Network Segmentation: Safe validation of firewall rules and VPC peering boundaries.",
        "Identity Mesh: Proving how compromised credentials enable lateral movement through transitive trust."
      ]},
      { type: 'heading', text: "Evidence & Auditability" },
      { type: 'paragraph', text: "Every validation run produces a machine-readable 'Proof Artifact.' This includes full trace logs, screenshots of successful (safe) probes, and a complete OPA-logged reasoning chain for compliance review." }
    ]
  },
  {
    id: 'hive-solution-brief',
    title: "Hive: Governed Decision Intelligence",
    type: "Solution Brief",
    category: "Strategy",
    date: "Oct 2024",
    readTime: "6 min read",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    snippet: "How Hive establishes a system of record for CTEM, providing decision lineage and auditable risk reduction tracking.",
    content: [
      { type: 'heading', text: "The Decision Layer" },
      { type: 'paragraph', text: "Hive is designed as the central 'System of Record' for modern exposure management. It bridges the gap between fragmented security signals and enterprise risk decisions." },
      { type: 'heading', text: "Key Strategic Benefits" },
      { type: 'list', items: [
        "Decision Lineage: Every risk prioritization decision is recorded with its associated rationale and evidence.",
        "CTEM Alignment: Automates the transition from Discovery to Prioritization and Mobilization phases.",
        "Board-Ready Reporting: Translates technical findings into business-relevant risk reduction metrics."
      ]},
      { type: 'heading', text: "Governance Integration" },
      { type: 'paragraph', text: "Hive integrates directly with GRC and ticketing systems (Jira, ServiceNow) to ensure that security outcomes are tracked, owned, and audited across the entire organization." }
    ]
  },
  {
    id: 'surfaceiq-discovery',
    title: "SurfaceIQ: External Discovery Brief",
    type: "Solution Brief",
    category: "Discovery",
    date: "Dec 2024",
    readTime: "5 min read",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
    snippet: "Strategies for identifying externally observable assets and contextualizing perimeter exposure within governed risk lifecycles.",
    content: [
      { type: 'heading', text: "External Asset Awareness" },
      { type: 'paragraph', text: "Modern enterprises suffer from 'Asset Sprawl' - untracked cloud buckets, shadow IT marketing sites, and forgotten staging environments. SurfaceIQ provides a continuous 'Outside-In' view." },
      { type: 'heading', text: "Continuous Monitoring" },
      { type: 'list', items: [
        "Domain Discovery: Automated mapping of subdomains and associated infrastructure.",
        "Exposure Indicators: Real-time detection of expiring certificates, open ports, and vulnerable headers.",
        "Drift Detection: Alerts when the external attack surface changes from its baseline state."
      ]},
      { type: 'heading', text: "Unified Correlation" },
      { type: 'paragraph', text: "Findings from SurfaceIQ are not just standalone alerts. They are correlated within Hive to show how an external exposure could serve as the entry point for an internal attack path." }
    ]
  },
  {
    id: 'codefabrics-datasheet',
    title: "CodeFabrics: AppSec Integration Specs",
    type: "Datasheet",
    category: "AppSec",
    date: "Dec 2024",
    readTime: "10 min read",
    icon: Code,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070",
    snippet: "Technical overview of CodeFabrics' BYOS (Bring Your Own Scanner) model and automated policy gates for CI/CD pipelines.",
    content: [
      { type: 'heading', text: "Governing the Supply Chain" },
      { type: 'paragraph', text: "CodeFabrics acts as the governance layer for software development. It normalizes findings from multiple SCA, SAST, and IaC scanners into a single, reachable risk model." },
      { type: 'heading', text: "Integration Blueprint" },
      { type: 'list', items: [
        "BYOS Architecture: Support for Snyk, Mend, Trivy, and Checkmarx via native API connectors.",
        "CI/CD Policy Gates: Automated 'Block/Allow' decisions enforced via Rego-based OPA policies at the pull-request level.",
        "Dependency Reachability: Using graph logic to determine if a vulnerable library is actually reachable by an attacker in production."
      ]},
      { type: 'heading', text: "AI-Assisted Remediation" },
      { type: 'paragraph', text: "CodeFabrics leverages Hay-AI to generate contextual remediation guidance that factors in the specific application architecture and deployment environment." }
    ]
  }
];

export const DatasheetsSolutionsPage: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);

  const activeDoc = DOCS.find(d => d.id === selectedDocId);

  if (!selectedDocId) {
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
              <FileText size={12} className="text-hayrok-orange" />
              Technical Documentation
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-[8rem] font-black tracking-tight leading-[0.9] text-slate-900 mb-10 uppercase"
            >
              Datasheets & <br/>
              <span className="text-hayrok-orange italic font-light tracking-tighter">Solution Briefs.</span>
            </motion.h1>
            
            <motion.p 
              {...fadeInUp}
              className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-3xl mx-auto mb-20 font-medium"
            >
              Technical specifications and operational frameworks for the Hayrok Governed Security platform.
            </motion.p>
          </div>
        </section>

        <section className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {DOCS.map((doc, i) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedDocId(doc.id)}
                className="group bg-white border border-slate-200 rounded-[3rem] overflow-hidden hover:shadow-2xl hover:border-hayrok-orange/30 transition-all duration-500 flex flex-col h-full cursor-pointer"
              >
                <div className="relative aspect-[16/8] overflow-hidden bg-slate-100">
                  <img src={doc.image} alt={doc.title} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-4 py-1.5 bg-hayrok-orange text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                      {doc.type}
                    </span>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{doc.category}</span>
                    <div className="w-1 h-1 rounded-full bg-slate-200" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{doc.date}</span>
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 mb-4 leading-tight group-hover:text-hayrok-orange transition-colors uppercase tracking-tight">
                    {doc.title}
                  </h2>
                  <p className="text-slate-500 text-base font-medium leading-relaxed mb-8 flex-1">
                    {doc.snippet}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-hayrok-orange font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                      Read Technical Brief <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // --- Detailed Immersive Reader View ---
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-24 overflow-x-hidden relative">
      <section className="relative pt-48 pb-24 overflow-hidden border-b border-slate-100">
        <IntelligenceFabric density={1} isDark={false} />
        <div className="container mx-auto px-6 relative z-10">
          <button 
            onClick={() => setSelectedDocId(null)}
            className="flex items-center gap-2 text-slate-400 hover:text-hayrok-orange transition-colors font-black text-[10px] uppercase tracking-widest mb-12 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Tech Library
          </button>

          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <span className="px-5 py-2 bg-hayrok-dark text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                {activeDoc?.type}
              </span>
              <span className="text-hayrok-orange font-black text-[10px] uppercase tracking-widest">
                {activeDoc?.category}
              </span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-black tracking-tight leading-[1] text-slate-900 mb-12 uppercase"
            >
              {activeDoc?.title}
            </motion.h1>

            <div className="flex flex-wrap items-center gap-12 pt-10 border-t border-slate-100">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Published</p>
                    <p className="text-sm font-black text-slate-900 uppercase">{activeDoc?.date}</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Effort</p>
                    <p className="text-sm font-black text-slate-900 uppercase">{activeDoc?.readTime}</p>
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
                   <List size={14} className="text-hayrok-orange" /> Document Sections
                </h4>
                <div className="space-y-4">
                  {activeDoc?.content?.filter(c => c.type === 'heading').map((sec, i) => (
                    <div key={i} className="text-[11px] font-black text-slate-500 uppercase tracking-widest hover:text-hayrok-orange transition-colors cursor-pointer flex items-center gap-3">
                       <span className="text-[9px] text-slate-300">0{i+1}</span> {sec.text}
                    </div>
                  ))}
                </div>
             </div>

             <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Bookmark size={80} className="text-hayrok-orange" />
                </div>
                <h4 className="text-hayrok-orange font-black text-[10px] uppercase tracking-[0.4em] mb-6 relative z-10">Key Outcome</h4>
                <p className="text-sm font-bold text-slate-200 leading-relaxed relative z-10">
                   {activeDoc?.snippet}
                </p>
             </div>
          </aside>

          <main className="lg:col-span-9 max-w-4xl">
            <div className="prose prose-slate prose-lg max-w-none prose-p:text-xl prose-p:leading-relaxed prose-p:text-slate-600 prose-strong:text-slate-900 prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight">
              
              {activeDoc?.content?.map((block, i) => {
                if (block.type === 'heading') return <h2 key={i}>{block.text}</h2>;
                if (block.type === 'paragraph') return <p key={i}>{block.text}</p>;
                if (block.type === 'list') return (
                  <ul key={i} className="space-y-4 !m-0 my-10 list-none p-0">
                    {block.items.map((item: string, j: number) => (
                      <li key={j} className="flex gap-5 !m-0 p-0">
                        <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center text-hayrok-orange shrink-0 mt-1">
                          <CheckCircle2 size={16} strokeWidth={3} />
                        </div>
                        <span className="text-lg font-medium text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                );
                return null;
              })}

              <div className="mt-20 p-12 md:p-24 bg-hayrok-dark rounded-[4rem] text-white text-center relative overflow-hidden group shadow-2xl">
                  <div className="absolute inset-0 bg-grid-white opacity-5" />
                  <div className="relative z-10">
                    <h4 className="text-4xl md:text-5xl font-black mb-8 tracking-tight uppercase leading-[0.9]">Explore the <br/> <span className="text-hayrok-orange">Full Platform.</span></h4>
                    <p className="text-xl text-slate-400 font-medium mb-12 max-w-xl mx-auto leading-relaxed">
                      Experience how Hayrok can transform your security risk intelligence and decision quality.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <button onClick={() => onNavigate?.('demo')} className="w-full sm:w-auto bg-hayrok-orange text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20 flex items-center justify-center gap-3">
                          Request a Technical Walkthrough <ChevronRight size={18} />
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
            Technical Specification Archive. Published by Hayrok Research & Strategy. Information provided for strategic alignment and system evaluation.
         </p>
      </div>
    </div>
  );
};