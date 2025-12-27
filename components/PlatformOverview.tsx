import React from 'react';
import { 
  CheckCircle2, Scale, BarChart3, Fingerprint, 
  ChevronRight, History, UserCheck, Search, Zap, Code
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const coreCapabilities = [
  {
    id: "platform",
    title: "Hive",
    subtitle: "CTEM Risk Intelligence & Governance",
    desc: "Provides centralized visibility into security exposure and risk trends, supporting the discovery, prioritization, and mobilization stages of CTEM.",
    icon: BarChart3,
    outcome: "Understand how exposure evolves over time, not just where it exists today.",
    features: ["Continuous exposure visibility", "Exploitability‑aware risk context", "Executive-ready risk trending"]
  },
  {
    id: "platform",
    title: "Genesis",
    subtitle: "Security Validation (BAS‑Aligned)",
    desc: "Agent‑based automation that evaluates potential attack paths to provide evidence for prioritization, rather than relying on assumptions.",
    icon: Zap,
    outcome: "Kill theoretical risk with hard evidence of exploitable conditions.",
    features: ["Validation of exploit paths", "Continuous validation testing", "False-positive elimination"]
  },
  {
    id: "platform",
    title: "CodeFabrics",
    subtitle: "Application & Supply Chain Risk",
    desc: "Extends CTEM into the software development lifecycle, helping manage application and supply‑chain exposure before it reaches production.",
    icon: Code,
    outcome: "Enable earlier risk reduction and improved security/engineering alignment.",
    features: ["SBOM & Dependency analysis", "Policy‑driven CI/CD governance", "Supply-chain risk propagation"]
  }
];

export const PlatformOverview: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <section className="bg-white pt-32 relative z-20 border-t border-slate-100" id="platform">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">A Unified Platform for CTEM and Security Validation</h2>
          <h3 className="text-4xl md:text-7xl font-black text-slate-900 leading-[0.9] mb-8">
             Engineered for <br/><span className="text-hayrok-orange">Defensible Security.</span>
          </h3>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
             Distinguish practical risk from theoretical exposure while maintaining the governance required in enterprise and regulated environments.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-32">
          {coreCapabilities.map((mod, i) => (
            <div key={i} onClick={() => onNavigate?.(mod.id)} className="group p-10 bg-slate-50 rounded-[3rem] border border-slate-200 hover:border-hayrok-orange transition-all hover:bg-white hover:shadow-2xl flex flex-col relative overflow-hidden cursor-pointer">
              <div className="p-4 bg-white rounded-2xl shadow-sm inline-flex items-center justify-center text-hayrok-orange mb-8 group-hover:bg-hayrok-orange group-hover:text-white transition-all transform group-hover:scale-110 relative z-10">
                <mod.icon size={32} strokeWidth={2.5} />
              </div>
              <h4 className="text-3xl font-black text-slate-900 mb-2 relative z-10">{mod.title}</h4>
              <p className="text-hayrok-orange text-sm font-black mb-6 uppercase tracking-wider relative z-10">{mod.subtitle}</p>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed flex-1 font-medium relative z-10">{mod.desc}</p>
              
              <div className="p-6 bg-white border border-slate-100 rounded-2xl mb-8 group-hover:border-hayrok-orange/20 relative z-10">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Target Outcome</p>
                 <p className="text-slate-900 font-bold text-sm">{mod.outcome}</p>
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

      <div className="relative py-32 bg-slate-900 overflow-hidden text-white">
        <IntelligenceFabric density={1.2} isDark={true} />
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-hayrok-orange/10 blur-[140px] rounded-full opacity-30" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-hayrok-orange text-[10px] font-black mb-10 tracking-widest uppercase">
                <Fingerprint size={14} /> Governed Use of AI
             </div>
             <h3 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight tracking-tighter uppercase">
                Take a Measured Approach <br/><span className="text-hayrok-orange italic tracking-tighter">to Automation.</span>
             </h3>
             <p className="text-slate-400 mb-16 text-xl leading-relaxed font-medium">
               Hayrok is built for environments where AI‑assisted security must operate within defined controls, supporting adoption in enterprise and regulated sectors.
             </p>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
               {[
                 { label: "Policy-Bound Automation", icon: Scale },
                 { label: "Human-in-the-Loop", icon: UserCheck },
                 { label: "Decision Transparency", icon: Search },
                 { label: "Audit & Review Logs", icon: History }
               ].map((item, i) => (
                 <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-colors group/item">
                    <div className="w-12 h-12 bg-hayrok-orange/20 rounded-xl flex items-center justify-center text-hayrok-orange mb-6 mx-auto group-hover/item:scale-110 transition-transform">
                       <item.icon size={24} />
                    </div>
                    <span className="text-white font-bold text-sm uppercase tracking-widest">{item.label}</span>
                 </div>
               ))}
             </div>
             
             <button onClick={() => onNavigate?.('values')} className="mt-16 text-hayrok-orange font-black uppercase tracking-[0.3em] text-xs hover:text-white transition-colors flex items-center gap-2 mx-auto group">
               Read Our Responsible AI Policy <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};