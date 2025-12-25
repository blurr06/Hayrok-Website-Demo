
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, Zap, ShieldCheck, ArrowRight, Cpu, 
  Terminal, Database, Globe, CheckCircle2,
  Code, Cloud, Lock, Sparkles, MessageSquare,
  BarChart3, Share2, Network, Box, Layout
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

const categoryIcons: Record<string, any> = {
  "Cloud & Infrastructure": Cloud,
  "DevOps & CI/CD": Code,
  "Security Tooling": ShieldCheck,
  "Identity & Workflow": Lock
};

export const PartnersIntegrationsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-hayrok-orange/10 selection:text-hayrok-orange overflow-hidden font-sans relative">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(255,95,0,0.03)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />
      </div>

      <div className="h-32 md:h-40"></div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-24 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div {...fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-hayrok-orange text-[10px] font-black mb-10 tracking-[0.4em] uppercase shadow-sm">
            <Layers size={12} className="animate-pulse" />
            Integration Partners
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.95] tracking-tight text-slate-900">
            Integrate Intelligence. <br/>
            <span className="bg-gradient-to-r from-hayrok-orange to-orange-400 bg-clip-text text-transparent italic tracking-tighter">Preserve Governance.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-4xl mx-auto">
            Hayrok integrates with leading cloud, DevOps, and security platforms to ensure security intelligence flows end‑to‑end — without breaking governance, accountability, or auditability.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="bg-slate-900 rounded-[4rem] p-10 md:p-24 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-grid-white opacity-[0.05]" />
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-8">The Integration Philosophy</h3>
              <h4 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Signals to Decisions. <br/> <span className="text-hayrok-orange italic">Decisions to Outcomes.</span></h4>
              <p className="text-lg text-slate-400 font-medium leading-relaxed mb-10">
                Unlike traditional integrations that simply move data, Hayrok integrations connect signals to decisions, and decisions to outcomes. 
              </p>
              
              <div className="space-y-6">
                {[
                  { label: "AI-Native Architecture", desc: "Built for agentic logic, not just data sync." },
                  { label: "Policy-Bound Automation", desc: "Every integration respects your OPA governance." },
                  { label: "Auditability Preserved", desc: "Decision lineage tracked through every tool hop." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="text-hayrok-orange shrink-0 mt-1" size={20} />
                    <div>
                      <h5 className="font-black text-white">{item.label}</h5>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
               <div className="bg-white/[0.03] border border-white/10 rounded-[3rem] p-12 backdrop-blur-xl">
                  {/* Visual: Flow of data */}
                  <div className="flex flex-col items-center gap-8">
                     <div className="flex gap-4">
                        {[Database, Globe, Terminal].map((Ico, i) => (
                           <div key={i} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500">
                              <Ico size={20} />
                           </div>
                        ))}
                     </div>
                     <ArrowRight size={24} className="rotate-90 text-hayrok-orange animate-bounce" />
                     <div className="w-32 h-32 bg-hayrok-orange rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-orange-500/20">
                        <Cpu size={48} />
                     </div>
                     <ArrowRight size={24} className="rotate-90 text-hayrok-orange" />
                     <div className="bg-emerald-500/10 border border-emerald-500/30 px-6 py-3 rounded-xl text-emerald-500 text-xs font-black uppercase tracking-widest">
                        Defensible Outcome
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-6">Supported Stack</h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">Integration Categories</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              title: "Cloud & Infrastructure", 
              items: ["AWS", "Microsoft Azure", "Google Cloud Platform"],
              icon: Cloud,
              accent: "bg-blue-600"
            },
            { 
              title: "DevOps & CI/CD", 
              items: ["GitHub", "GitLab", "Bitbucket", "Jenkins"],
              icon: Code,
              accent: "bg-hayrok-orange"
            },
            { 
              title: "Security Tooling", 
              items: ["SAST / DAST / SCA", "SIEM & SOAR", "Vulnerability Scanners"],
              icon: ShieldCheck,
              accent: "bg-emerald-600"
            },
            { 
              title: "Identity & Operations", 
              items: ["IAM (Okta / AD)", "Jira / ServiceNow", "Logging Platforms"],
              icon: Lock,
              accent: "bg-indigo-600"
            }
          ].map((cat, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              className="p-10 bg-slate-50 border border-slate-200 rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className={`w-12 h-12 ${cat.accent} rounded-xl flex items-center justify-center text-white mb-8 shadow-lg`}>
                <cat.icon size={20} />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-6">{cat.title}</h4>
              <ul className="space-y-3">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-bold text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-hayrok-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="container mx-auto px-6 mb-48 relative z-10">
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-[4rem] p-12 md:p-24 text-center">
           <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 tracking-tight">Become an <br/> <span className="text-hayrok-orange italic">Integration Partner.</span></h3>
           <p className="text-xl text-slate-600 font-medium mb-12">
             Turn security data into security intelligence. If you’re building platforms for enterprise or regulated customers, let's strengthen the ecosystem together.
           </p>
           <a href="mailto:partners@hayrok.com" className="inline-flex items-center gap-3 bg-hayrok-orange text-white px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
             partners@hayrok.com <ArrowRight size={16} />
           </a>
        </div>
      </section>

      <div className="h-32"></div>
    </div>
  );
};
