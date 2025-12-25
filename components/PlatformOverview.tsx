
import React from 'react';
import { motion } from 'framer-motion';
// Add ChevronRight to imports
import { 
  ShieldCheck, Bot, Zap, Share2, Eye, Search, Code, 
  CheckCircle2, Scale, Lock, Activity, Shield, BarChart3, Fingerprint, Layers,
  ChevronRight
} from 'lucide-react';

const coreCapabilities = [
  {
    title: "Hive",
    subtitle: "Risk Intelligence & Governance",
    desc: "Your system of record for security risk. Continuous threat exposure management (CTEM) with exploitability-weighted risk scoring.",
    icon: BarChart3,
    outcome: "Executives finally understand and trust security metrics.",
    features: ["CTEM Lifecycle Management", "Risk Trends & Prediction", "Board-Ready Reporting"]
  },
  {
    title: "Genesis",
    subtitle: "Autonomous Security Validation",
    desc: "Prove what attackers can actually exploit. AI-driven attack path validation that kills theoretical risk with hard evidence.",
    icon: Zap,
    outcome: "Teams fix what matters — not what’s loud.",
    features: ["Exploit Path Proof", "False-Positive Elimination", "Safe Multi-vector Probes"]
  },
  {
    title: "CodeFabrics",
    subtitle: "Software & Supply Chain Intelligence",
    desc: "Stop risk before it ships. Continuously inventories software risk across pipelines to prevent vulnerability recurrence.",
    icon: Code,
    outcome: "Faster, safer releases without friction.",
    features: ["CI/CD Security Enforcement", "SBOM Governance", "Release Risk Gates"]
  }
];

export const PlatformOverview: React.FC = () => {
  return (
    <section className="bg-white pt-32 relative z-20 border-t border-slate-100" id="platform">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">One Platform. Three Integrated Capabilities.</h2>
          <h3 className="text-4xl md:text-7xl font-black text-slate-900 leading-[0.9] mb-8">
             Engineered for <br/><span className="text-hayrok-orange">Measurable Reduction</span>
          </h3>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
             From Exposure → Exploit → Impact → Reduction. Hive continuously answers the questions security leaders care about.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-32">
          {coreCapabilities.map((mod, i) => (
            <div key={i} className="group p-10 bg-slate-50 rounded-[3rem] border border-slate-200 hover:border-hayrok-orange transition-all hover:bg-white hover:shadow-2xl flex flex-col">
              <div className="p-4 bg-white rounded-2xl shadow-sm inline-flex items-center justify-center text-hayrok-orange mb-8 group-hover:bg-hayrok-orange group-hover:text-white transition-all transform group-hover:scale-110">
                <mod.icon size={32} strokeWidth={2.5} />
              </div>
              <h4 className="text-3xl font-black text-slate-900 mb-2">{mod.title}</h4>
              <p className="text-hayrok-orange text-sm font-black mb-6 uppercase tracking-wider">{mod.subtitle}</p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed flex-1 font-medium">{mod.desc}</p>
              
              <div className="p-6 bg-white rounded-2xl border border-slate-100 mb-8 group-hover:border-hayrok-orange/20">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Business Outcome</p>
                 <p className="text-slate-900 font-bold text-sm">{mod.outcome}</p>
              </div>

              <ul className="space-y-4">
                {mod.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-xs font-black text-slate-500 uppercase tracking-tighter">
                    <CheckCircle2 size={16} className="text-hayrok-orange" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* RESPONSIBLE AI BLOCK */}
      <div className="relative py-32 bg-[#050608] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-hayrok-orange/20 blur-[140px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-hayrok-orange text-[10px] font-black mb-10 tracking-widest uppercase">
                <Fingerprint size={14} /> Responsible AI Framework
             </div>
             <h3 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight">
                Responsible AI Is Not a Feature. <br/><span className="text-hayrok-orange">It’s the Foundation.</span>
             </h3>
             <p className="text-slate-400 mb-16 text-xl leading-relaxed font-medium">
               Hayrok is built with Responsible AI principles baked in. AI that can’t be governed doesn’t belong in security.
             </p>
             
             <div className="grid md:grid-cols-3 gap-8">
               {[
                 { label: "Governance by Design", icon: Scale },
                 { label: "Clear Accountability", icon: UserCheck },
                 { label: "Full Auditability", icon: FileSearch }
               ].map((item, i) => (
                 <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
                    <div className="w-12 h-12 bg-hayrok-orange/20 rounded-xl flex items-center justify-center text-hayrok-orange mb-6 mx-auto">
                       <item.icon size={24} />
                    </div>
                    <span className="text-white font-bold text-lg">{item.label}</span>
                 </div>
               ))}
             </div>
             
             <button className="mt-16 text-hayrok-orange font-black uppercase tracking-[0.3em] text-xs hover:text-white transition-colors flex items-center gap-2 mx-auto group">
               Read Our Responsible AI Policy <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const UserCheck = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="8.5" cy="7" r="4"></circle>
    <polyline points="17 11 19 13 23 9"></polyline>
  </svg>
);

const FileSearch = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <circle cx="11.5" cy="15.5" r="2.5"></circle>
    <line x1="13.25" y1="17.25" x2="15" y2="19"></line>
  </svg>
);
