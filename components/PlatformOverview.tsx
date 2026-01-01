import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, Zap, Code, Bot, CheckCircle2, 
  ChevronRight, Gavel, Target, Cpu, 
  Layers, GitBranch, Database, ShieldCheck,
  Search, Globe, ArrowRight, Activity
} from 'lucide-react';

const coreCapabilities = [
  {
    id: "hive",
    title: "Hive",
    subtitle: "Risk Intelligence & Governance",
    desc: "Decision ownership across the CTEM lifecycle. Centralized visibility into exposure and risk trends with exploitability-aware context.",
    icon: BarChart3,
    outcome: "Exposure becomes owned risk - and risk becomes a decision.",
    features: ["Exploitability-aware context", "Asset & application risk views", "Executive-ready reporting"]
  },
  {
    id: "genesis",
    title: "Genesis",
    subtitle: "Breach & Attack Simulation",
    desc: "Validate what is actually exploitable. Controlled, agent-based automation evaluates real attack paths and exploitation scenarios.",
    icon: Zap,
    outcome: "Ensures prioritization is based on evidence, not assumption.",
    features: ["Validation of attack paths", "Identification of exploitable conditions", "Remediation verification"]
  },
  {
    id: "codefabrics",
    title: "CodeFabrics",
    subtitle: "Application & Supply-Chain Risk",
    desc: "Extend CTEM into the software lifecycle. Manage application and supply-chain risk before it reaches production.",
    icon: Code,
    outcome: "Ensures software risk is contextualized and governed.",
    features: ["Dependency & SBOM analysis", "Policy-driven CI/CD governance", "Supply-chain risk propagation"]
  },
  {
    id: "hay-ai",
    title: "Hay-AI",
    subtitle: "Governed AI Reasoning Layer",
    desc: "AI you can trust, explain, and audit. Policy-bound automation with explainable reasoning behind AI-assisted outputs.",
    icon: Bot,
    outcome: "Security decisions without governance risk.",
    features: ["Policy-bound automation", "Human-in-the-loop workflows", "Explainable reasoning & logs"]
  }
];

const PlatformArchitecture = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto h-[600px] mb-32 hidden lg:flex items-center justify-center font-sans">
      {/* Background Connections SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF5F00" stopOpacity="0" />
            <stop offset="50%" stopColor="#FF5F00" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FF5F00" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Connection Lines from spokes to HUB */}
        <line x1="250" y1="300" x2="500" y2="300" stroke="#FF5F00" strokeWidth="2" strokeDasharray="8 8" opacity="0.2" />
        <line x1="750" y1="300" x2="500" y2="300" stroke="#FF5F00" strokeWidth="2" strokeDasharray="8 8" opacity="0.2" />
        <line x1="500" y1="120" x2="500" y2="300" stroke="#FF5F00" strokeWidth="2" strokeDasharray="8 8" opacity="0.2" />
        
        {/* Animated Pulses */}
        <motion.circle r="4" fill="#FF5F00" initial={{ opacity: 0 }} animate={{ cx: [250, 500], cy: 300, opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
        <motion.circle r="4" fill="#FF5F00" initial={{ opacity: 0 }} animate={{ cx: [750, 500], cy: 300, opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }} />
        <motion.circle r="4" fill="#FF5F00" initial={{ opacity: 0 }} animate={{ cx: 500, cy: [120, 300], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
      </svg>

      {/* Spoke: CodeFabrics (Left) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="absolute left-0 w-64 p-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl text-center group hover:border-hayrok-orange transition-all"
      >
        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-hayrok-orange mx-auto mb-4 group-hover:bg-hayrok-orange group-hover:text-white transition-all">
          <Code size={24} />
        </div>
        <h5 className="font-black text-slate-900 uppercase tracking-tight text-sm mb-2">CodeFabrics</h5>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Code & Supply Chain Context</p>
      </motion.div>

      {/* HUB: Hive (Center) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-80 p-12 bg-slate-900 border-4 border-hayrok-orange/30 rounded-[4rem] shadow-2xl text-center group"
      >
        <div className="absolute inset-0 bg-hayrok-orange/5 blur-3xl animate-pulse" />
        <div className="w-20 h-20 bg-hayrok-orange rounded-[2rem] flex items-center justify-center text-white mx-auto mb-6 shadow-[0_0_40px_rgba(255,95,0,0.3)]">
          <BarChart3 size={40} />
        </div>
        <h5 className="font-black text-white uppercase tracking-widest text-lg mb-2">Hive Intelligence</h5>
        <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.3em] mb-6">Central System of Record</p>
        <div className="flex justify-center gap-3">
           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
           <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Unified Governance</span>
        </div>
      </motion.div>

      {/* Spoke: Genesis (Right) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="absolute right-0 w-64 p-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl text-center group hover:border-hayrok-orange transition-all"
      >
        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-hayrok-orange mx-auto mb-4 group-hover:bg-hayrok-orange group-hover:text-white transition-all">
          <Zap size={24} />
        </div>
        <h5 className="font-black text-slate-900 uppercase tracking-tight text-sm mb-2">Genesis</h5>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Runtime Simulation & Proof</p>
      </motion.div>

      {/* Spoke: Hay-AI (Top) */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="absolute top-0 w-64 p-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl text-center group hover:border-hayrok-orange transition-all"
      >
        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-hayrok-orange mx-auto mb-4 group-hover:bg-hayrok-orange group-hover:text-white transition-all">
          <Bot size={24} />
        </div>
        <h5 className="font-black text-slate-900 uppercase tracking-tight text-sm mb-2">Hay-AI</h5>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Governed Reasoning Layer</p>
      </motion.div>

      {/* Descriptive Labels for Flows */}
      <div className="absolute top-[280px] left-[320px] text-[9px] font-black text-slate-400 uppercase tracking-widest">Telemetry Ingest</div>
      <div className="absolute top-[280px] right-[320px] text-[9px] font-black text-slate-400 uppercase tracking-widest">Evidence Sync</div>
      <div className="absolute top-[210px] left-1/2 -translate-x-1/2 text-[9px] font-black text-slate-400 uppercase tracking-widest">Recursive Analysis</div>
    </div>
  );
};

export const PlatformOverview: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <section className="bg-white pt-32 relative z-20 border-t border-slate-100" id="platform">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">The Hayrok Ecosystem</h2>
          <h3 className="text-4xl md:text-7xl font-black text-slate-900 leading-[0.9] mb-8 uppercase">
             A Unified Platform <br/><span className="text-hayrok-orange italic">for CTEM & BAS.</span>
          </h3>
          <p className="text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed mb-16">
             Hayrok combines risk intelligence, security validation, software governance, and AI oversight within a single platform - designed for enterprise control and auditability.
          </p>
          
          <PlatformArchitecture />
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-32">
          {coreCapabilities.map((mod, i) => (
            <div key={i} onClick={() => onNavigate?.(mod.id)} className="group p-10 bg-slate-50 rounded-[3rem] border border-slate-200 hover:border-hayrok-orange transition-all hover:bg-white hover:shadow-2xl flex flex-col relative overflow-hidden cursor-pointer">
              <div className="p-4 bg-white rounded-2xl shadow-sm inline-flex items-center justify-center text-hayrok-orange mb-8 group-hover:bg-hayrok-orange group-hover:text-white transition-all transform group-hover:scale-110 relative z-10">
                <mod.icon size={32} strokeWidth={2.5} />
              </div>
              <h4 className="text-3xl font-black text-slate-900 mb-2 relative z-10">{mod.title}</h4>
              <p className="text-hayrok-orange text-[10px] font-black mb-6 uppercase tracking-widest relative z-10">{mod.subtitle}</p>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed flex-1 font-medium relative z-10">{mod.desc}</p>
              
              <div className="p-6 bg-slate-900 rounded-2xl mb-8 group-hover:bg-hayrok-orange transition-colors relative z-10">
                 <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Outcome</p>
                 <p className="text-white font-bold text-sm tracking-tight">{mod.outcome}</p>
              </div>

              <ul className="space-y-4 relative z-10 mb-8">
                {mod.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-xs font-black text-slate-400 uppercase tracking-tighter">
                    <CheckCircle2 size={16} className="text-hayrok-orange" />
                    {f}
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto flex items-center gap-2 text-hayrok-orange font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0 relative z-10">
                 Explore Module <ChevronRight size={12} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};