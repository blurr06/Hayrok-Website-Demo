import React from 'react';
import { BarChart3, Zap, Code, Bot, CheckCircle2, ChevronRight, Gavel, Target, Cpu } from 'lucide-react';

const coreCapabilities = [
  {
    id: "hive",
    title: "Hive",
    subtitle: "Risk Intelligence & Governance",
    desc: "Decision ownership across the CTEM lifecycle. Centralized visibility into exposure and risk trends with exploitability-aware context.",
    icon: BarChart3,
    outcome: "Exposure becomes owned risk — and risk becomes a decision.",
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

export const PlatformOverview: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <section className="bg-white pt-32 relative z-20 border-t border-slate-100" id="platform">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">The Hayrok Platform</h2>
          <h3 className="text-4xl md:text-7xl font-black text-slate-900 leading-[0.9] mb-8 uppercase">
             A Unified Platform <br/><span className="text-hayrok-orange italic">for CTEM & BAS.</span>
          </h3>
          <p className="text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
             Hayrok combines risk intelligence, security validation, software governance, and AI oversight within a single platform—designed for enterprise control and auditability.
          </p>
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