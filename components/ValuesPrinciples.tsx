
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Shield, Scale, FileSearch, Eye, 
  UserCheck, Gavel, Sparkles, Target,
  Fingerprint, Clock, Briefcase, Heart,
  BarChart3, CheckCircle2, Cpu, Terminal, 
  Search, MousePointer2, ClipboardList, ShieldAlert,
  ArrowRight, ShieldCheck, FileCheck, Layout, Users,
  History, Globe, Zap, Award, Info, FileText,
  ClipboardCheck, Activity, Lock
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const coreBeliefs = [
  {
    id: "01",
    title: "Governance First",
    subtitle: "Safety through policy.",
    icon: Gavel,
    desc: "Governance is not a layer added later — it must be built in from the start.",
    detail: "Policy-bound agentic AI, explicit decision boundaries, and clear approval paths. Governance is what makes autonomy safe and scalable.",
    bg: "bg-blue-50/50",
    accent: "text-blue-600"
  },
  {
    id: "02",
    title: "Accountability",
    subtitle: "Non-Negotiable Ownership.",
    icon: UserCheck,
    desc: "Every decision must have an owner. AI should clarify responsibility, not obscure it.",
    detail: "At Hayrok, actions are attributable — to a system, a policy, or a human. No anonymous automation. Trust requires ownership.",
    bg: "bg-orange-50/50",
    accent: "text-hayrok-orange"
  },
  {
    id: "03",
    title: "Auditability",
    subtitle: "Proven by Default.",
    icon: FileSearch,
    desc: "If it can’t be proven, it doesn’t count. Decisions must withstand the highest scrutiny.",
    detail: "End-to-end audit trails and historical replay of decisions. Auditability is a fundamental requirement of the Hive engine.",
    bg: "bg-emerald-50/50",
    accent: "text-emerald-600"
  }
];

export const ValuesPrinciples: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-hayrok-orange/10 selection:text-hayrok-orange overflow-hidden font-sans relative">
      
      {/* Dynamic Background Mesh - Subtly refined */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute top-[-5%] left-[-5%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(255,95,0,0.02)_0%,transparent_70%)] blur-[100px]"
        />
        <div className="absolute inset-0 bg-grid-white opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]"></div>
      </div>

      <div className="h-32 md:h-40"></div>

      {/* Hero Section: Precise & Authoritative */}
      <section className="container mx-auto px-6 mb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="flex items-center gap-3 mb-8">
            <div className="h-[2px] w-8 bg-hayrok-orange"></div>
            <span className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em]">The Operating Charter</span>
          </motion.div>
          
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-8"
            >
              <h1 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight text-slate-900">
                Engineered <br/>
                <span className="bg-gradient-to-r from-hayrok-orange to-indigo-600 bg-clip-text text-transparent italic">Constraints.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-2xl">
                At Hayrok, our principles are not passive ideals. They are the <span className="text-slate-900 font-bold border-b-2 border-hayrok-orange/30">architectural rules</span> that define how our agentic AI reasoning engine operates in high-stakes environments.
              </p>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="lg:col-span-4"
            >
              <div className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] relative overflow-hidden group shadow-sm">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Lock size={64} className="text-slate-200" />
                </div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em] mb-3">Core Constraint</p>
                <p className="text-lg font-black leading-tight text-slate-900">
                  Autonomy without accountability is <span className="text-hayrok-orange italic">Risk.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principal Engines Section */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="space-y-32">
          {coreBeliefs.map((p, i) => (
            <motion.div 
              key={i}
              className={`grid lg:grid-cols-12 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <motion.div 
                {...fadeInUp}
                className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-2 lg:ml-auto' : ''}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-black text-slate-200">{p.id}</span>
                  <div className={`p-3 rounded-xl ${p.bg} ${p.accent}`}>
                    <p.icon size={20} strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">{p.title}</h3>
                <p className="text-hayrok-orange text-[9px] font-black uppercase tracking-[0.4em] mb-6">{p.subtitle}</p>
                <p className="text-lg text-slate-900 font-bold mb-4 leading-snug italic">"{p.desc}"</p>
                <p className="text-base text-slate-500 font-medium leading-relaxed">{p.detail}</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-8 md:p-10 relative overflow-hidden shadow-sm group">
                  <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none" />
                  
                  {/* Decorative Logic Trace HUD */}
                  <div className="relative z-10">
                     <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                        <div className="flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-hayrok-orange animate-pulse" />
                           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Verification Engine Trace</span>
                        </div>
                        <Activity size={14} className="text-slate-300" />
                     </div>
                     
                     <div className="space-y-4">
                        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                           <div className="flex items-center justify-between mb-2">
                              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Validation State</span>
                              <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Active</span>
                           </div>
                           <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: '85%' }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                className={`h-full ${p.accent.replace('text', 'bg')}`} 
                              />
                           </div>
                        </div>

                        <div className="font-mono text-[9px] text-slate-400 bg-slate-900 rounded-xl p-4 overflow-hidden">
                           <div className="flex gap-4">
                              <span className="text-hayrok-orange opacity-50">T+0.21s</span>
                              <span>Scanning context for identity: internal-api-key_v1</span>
                           </div>
                           <div className="flex gap-4 opacity-70">
                              <span className="text-hayrok-orange opacity-50">T+0.42s</span>
                              <span className="text-emerald-400">Policy Matched: {p.title.toUpperCase()}</span>
                           </div>
                           <div className="flex gap-4">
                              <span className="text-hayrok-orange opacity-50">T+0.88s</span>
                              <span>Reasoning confirmed. Path attribution secured.</span>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Bento Grid: Sophisticated Minimalism */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-6">The Ethical Foundation</h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Trust is built on <span className="text-slate-400 italic">transparency.</span></h3>
          <p className="text-base text-slate-500 font-medium">Six fundamental pillars that ensure our technology remains an asset to security teams, not a liability.</p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            { title: "Outcomes Over Activity", icon: BarChart3, desc: "Success is measured by real risk reduction — not just alert volume. Honest metrics drive honest progress." },
            { title: "Humans in Control", icon: Users, desc: "AI serves the practitioner. Our agents augment expertise, providing logic for humans to approve and defend." },
            { title: "Evidence First", icon: ShieldCheck, desc: "Assumptions are vulnerabilities. Every finding must be supported by verifiable evidence and proof of concept." },
            { title: "Traceable Reasoning", icon: History, desc: "Black-box AI has no place in high-stakes security. Every decision step is logged and auditable." },
            { title: "Privacy by Design", icon: Fingerprint, desc: "Data is handled with the utmost respect. Governance boundaries extend to how sensitive information is processed." },
            { title: "Sustainable Trust", icon: Heart, desc: "We prioritize long-term integrity over short-term hype. Our goal is to build a platform you can depend on for a decade." }
          ].map((v, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              className="p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:border-hayrok-orange/20 hover:shadow-xl transition-all duration-500 group flex flex-col"
            >
              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-hayrok-orange mb-8 group-hover:bg-hayrok-orange group-hover:text-white transition-all shadow-sm">
                <v.icon size={18} />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{v.title}</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Leadership: Practitioner Focus */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="bg-slate-900 rounded-[4rem] p-10 md:p-20 border border-white/5 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-grid-white opacity-[0.03] pointer-events-none" />
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 relative z-10">
              <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-10">Practitioner DNA</h3>
              <h4 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight leading-[1.1]">
                Built by those who <br/>
                <span className="text-hayrok-orange italic text-4xl md:text-6xl">own the outcome.</span>
              </h4>
              <p className="text-lg text-slate-400 font-medium leading-relaxed mb-10 max-w-xl">
                Hayrok is led by practitioners who have operated in high-stakes environments — where decisions are scrutinized, audits are unforgiving, and incidents have real-world consequences.
              </p>
              
              <div className="flex flex-wrap gap-4">
                {["Integrity", "Accountability", "Precision", "Longevity"].map((tag, idx) => (
                  <div key={idx} className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-300">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-5 relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                  alt="Hayrok Values" 
                  className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl">
                   <div className="flex items-center gap-3 text-white">
                      <div className="w-2 h-2 rounded-full bg-hayrok-orange animate-pulse" />
                      <span className="font-black uppercase tracking-widest text-[8px]">Governed Culture Mode Active</span>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Pledge */}
      <section className="container mx-auto px-6 mb-48 relative z-10">
        <motion.div 
          {...fadeInUp}
          className="max-w-6xl mx-auto p-12 md:p-24 bg-white border border-slate-100 rounded-[4rem] shadow-2xl relative overflow-hidden text-center"
        >
          <div className="absolute top-[-50%] left-[-10%] right-[-10%] h-full bg-[radial-gradient(ellipse_at_center,rgba(255,95,0,0.04)_0%,transparent_70%)] blur-[100px]" />
          
          <div className="relative z-10">
            <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.8em] mb-12">Final Commitment</h3>
            <p className="text-3xl md:text-5xl font-black text-slate-900 mb-12 leading-[1.1] tracking-tight">
              Powerful security is common. <br/>
              <span className="text-hayrok-orange italic">Trustworthy security is hard.</span>
            </p>
            
            <div className="flex flex-col items-center gap-10 pt-16 border-t border-slate-100 max-w-3xl mx-auto">
              <p className="text-sm md:text-base font-black text-slate-500 uppercase tracking-[0.4em] leading-relaxed">
                Hayrok — Governed Agentic AI <br/> <span className="text-slate-900">Built to be Defended.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="flex items-center gap-3 bg-hayrok-orange text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all group shadow-lg shadow-orange-500/20">
                  Request Ethics Charter
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-slate-50 border border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-100 transition-all">
                  Contact Compliance
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="h-32"></div>
    </div>
  );
};
