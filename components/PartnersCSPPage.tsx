import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, ShieldCheck, Zap, Globe, Cpu, 
  ArrowRight, CheckCircle2, Server, Lock,
  Target, BarChart3, Database, Sparkles, Network,
  Activity
} from 'lucide-react';

// Cast motion elements to any to bypass type sync issues in this environment
const MotionDiv = motion.div as any;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

interface PartnersCSPPageProps {
  onNavigate?: (page: string) => void;
}

export const PartnersCSPPage: React.FC<PartnersCSPPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-hayrok-orange/10 selection:text-hayrok-orange overflow-hidden font-sans relative">
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(255,95,0,0.02)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />
      </div>

      <div className="h-32 md:h-40"></div>

      {/* Hero */}
      <section className="container mx-auto px-6 mb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Use MotionDiv cast to any to fix type error on spread fadeInUp */}
          <MotionDiv {...fadeInUp} className="flex items-center gap-3 mb-8">
            <div className="h-[2px] w-8 bg-hayrok-orange"></div>
            <span className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em]">Cloud Infrastructure</span>
          </MotionDiv>
          
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
             // Fixed ActivityIcon by using Activity from lucide-react
             { title: "Continuous CTEM", desc: "AI-driven exposure management that is explainable and auditable.", icon: Activity }
           ].map((area, i) => (
             /* Use MotionDiv cast to any to fix type error on variants prop */
             <MotionDiv 
               key={i}
               variants={fadeInUp as any}
               className="p-12 bg-slate-50 border border-slate-200 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all group"
             >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-hayrok-orange mb-10 shadow-sm group-hover:bg-hayrok-orange group-hover:text-white transition-all">
                  <area.icon size={24} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-hayrok-orange transition-colors">{area.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{area.desc}</p>
             </MotionDiv>
           ))}
        </div>
      </section>

      <div className="h-32"></div>
    </div>
  );
};