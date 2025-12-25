
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, ShieldCheck, Zap, Globe, Cpu, 
  ArrowRight, CheckCircle2, Server, Lock,
  Target, BarChart3, Database, Sparkles, Network
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

export const PartnersCSPPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-hayrok-orange/10 selection:text-hayrok-orange overflow-hidden font-sans relative">
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(255,95,0,0.02)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />
      </div>

      <div className="h-32 md:h-40"></div>

      {/* Hero */}
      <section className="container mx-auto px-6 mb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="flex items-center gap-3 mb-8">
            <div className="h-[2px] w-8 bg-hayrok-orange"></div>
            <span className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em]">Cloud Infrastructure</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.95] tracking-tight text-slate-900">
            Governed AI Security for <br/>
            <span className="bg-gradient-to-r from-hayrok-orange to-orange-400 bg-clip-text text-transparent italic tracking-tighter">Cloud-First Orgs.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-4xl">
            Cloud environments move fast — and misconfiguration, identity sprawl, and exposed services remain top attack vectors. Hayrok scales with the cloud without sacrificing governance.
          </p>
        </div>
      </section>

      {/* CSP Focus Area */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
           {[
             { title: "Exposure Risk", desc: "Identify internet-facing asset visibility and misconfigurations.", icon: Globe },
             { title: "Identity Governance", desc: "Map identity and access risk across complex IAM policies.", icon: Lock },
             { title: "Continuous CTEM", desc: "AI-driven exposure management that is explainable and auditable.", icon: ActivityIcon }
           ].map((area, i) => (
             <motion.div 
               key={i}
               variants={fadeInUp}
               className="p-12 bg-slate-50 border border-slate-200 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all group"
             >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-hayrok-orange mb-10 shadow-sm group-hover:bg-hayrok-orange group-hover:text-white transition-all">
                  <area.icon size={24} />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-6">{area.title}</h4>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">{area.desc}</p>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Regulated Workloads Block */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="bg-slate-900 rounded-[4rem] p-10 md:p-24 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-hayrok-orange/10 blur-[120px]" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-8">Compliance Ready</h3>
              <h4 className="text-4xl md:text-5xl font-black mb-10 tracking-tight leading-tight">
                Built for <br/> <span className="text-slate-400 italic">Regulated Cloud.</span>
              </h4>
              <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                Hayrok delivers both the scale cloud demands and the accountability regulated environments require.
              </p>
              
              <div className="flex flex-wrap gap-4">
                 {["SOC 2", "ISO 27001", "PCI-DSS", "HIPAA"].map((std, i) => (
                    <div key={i} className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-300">
                       {std}
                    </div>
                 ))}
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-[3rem] p-12 backdrop-blur-xl">
               <h5 className="text-xl font-black text-white mb-10">Value for CSP Customers</h5>
               <ul className="space-y-6">
                  {[
                    "Continuous visibility into real risk",
                    "Validation of exploitable attack paths",
                    "Policy-driven AI security controls",
                    "Evidence-ready security posture"
                  ].map((benefit, i) => (
                    <li key={i} className="flex gap-4">
                       <CheckCircle2 className="text-hayrok-orange shrink-0 mt-1" size={20} />
                       <span className="text-base font-bold text-slate-300">{benefit}</span>
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 mb-48 relative z-10 text-center">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
           <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 tracking-tight">Partner with Hayrok</h3>
           <p className="text-xl text-slate-600 font-medium mb-12">
             If you’re a CSP looking to help customers adopt trusted AI‑driven security, Hayrok is built for your ecosystem.
           </p>
           <a href="mailto:partners@hayrok.com" className="inline-flex items-center gap-3 bg-hayrok-orange text-white px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
             partners@hayrok.com <ArrowRight size={16} />
           </a>
        </motion.div>
      </section>

      <div className="h-32"></div>
    </div>
  );
};

const ActivityIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);
