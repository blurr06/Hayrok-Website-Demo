
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ShieldCheck, Users, Target, Lock, 
  Gavel, UserCheck, Eye, Sparkles, 
  Award, ArrowRight, Briefcase, Heart,
  Terminal, Globe, Cpu, CheckCircle2,
  Scale, FileText, History, Zap
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

export const LeadershipPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-hayrok-orange/10 selection:text-hayrok-orange overflow-hidden font-sans relative">
      
      {/* Dynamic Background Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute top-[-5%] left-[-5%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(255,95,0,0.02)_0%,transparent_70%)] blur-[100px]"
        />
        <div className="absolute inset-0 bg-grid-white opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]"></div>
      </div>

      <div className="h-32 md:h-40"></div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="flex items-center gap-3 mb-8">
            <div className="h-[2px] w-8 bg-hayrok-orange"></div>
            <span className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em]">Executive Stewardship</span>
          </motion.div>
          
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-9"
            >
              <h1 className="text-5xl md:text-7xl font-black mb-10 leading-[1.05] tracking-tight text-slate-900">
                Leadership Built on <br/>
                <span className="bg-gradient-to-r from-hayrok-orange to-indigo-600 bg-clip-text text-transparent italic tracking-tighter">Accountability, Not Hype.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-3xl">
                Hayrok is led by practitioners who understand what’s at stake when decisions fail — in audits, incidents, and boardrooms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="bg-slate-50 border border-slate-200 rounded-[4rem] p-10 md:p-20 overflow-hidden relative shadow-sm">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-8">The Philosophy</h3>
              <h4 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 tracking-tight leading-tight">
                Judgment, Governance, <br/> and <span className="text-slate-400 italic">Continuous Trust.</span>
              </h4>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12">
                We don’t believe leadership is about vision statements. It’s about <span className="text-slate-900 font-bold underline decoration-hayrok-orange/30 decoration-4">ownership, clarity, and responsibility</span> — the same principles we build into our platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Defensible Logic", icon: Gavel, desc: "Decisions that can be explained and defended." },
                { label: "Scrutiny-Proof", icon: ShieldCheck, desc: "Systems designed to hold up under forensic audit." },
                { label: "Regulated Focus", icon: LandmarkIcon, desc: "Building specifically for high-stakes domains." },
                { label: "Long-term Trust", icon: Heart, desc: "Prioritizing integrity over short-term optics." }
              ].map((p, i) => (
                <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:border-hayrok-orange/30 transition-all group">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-hayrok-orange mb-6 group-hover:bg-hayrok-orange group-hover:text-white transition-all">
                    <p.icon size={20} />
                  </div>
                  <h5 className="text-lg font-black text-slate-900 mb-2">{p.label}</h5>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white group"
              >
                <img 
                  src="https://raw.githubusercontent.com/Hayrok/media/main/herberth.jpg" 
                  alt="Herberth Osiemele" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" 
                  onError={(e) => {
                    // Fallback to the user's provided image via a descriptive placeholder if the external link isn't ready
                    // In a production environment, this would be a local asset path
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
                   <div className="flex flex-col gap-1 text-white">
                      <span className="font-black text-2xl tracking-tight">Herberth Osiemele</span>
                      <span className="font-black uppercase tracking-[0.4em] text-[10px] text-hayrok-orange">Founder & CEO</span>
                   </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              {...fadeInUp}
              className="lg:col-span-7 pt-12"
            >
              <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-8">Executive Profile</h3>
              <h4 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                Herberth is a practitioner <br/> <span className="text-slate-400 italic">first.</span>
              </h4>
              <div className="space-y-6 text-xl text-slate-600 font-medium leading-relaxed mb-12">
                <p>
                  Herberth is a cybersecurity practitioner and product leader with deep experience across application security, risk management, and enterprise security programs in regulated environments.
                </p>
                <p>
                  After years working alongside security teams overwhelmed by alerts and opaque platforms, Herberth recognized a fundamental gap: <span className="text-slate-900 font-bold">autonomous security that organizations could actually trust.</span>
                </p>
                <p>
                  He founded Hayrok to build the first agentic AI security platform designed with governance, accountability, and auditability at its core — ensuring autonomy never comes at the expense of trust.
                </p>
              </div>
              
              <div className="p-10 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Zap size={100} className="text-hayrok-orange" />
                </div>
                <div className="relative z-10">
                   <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.4em] mb-4">The Mission</p>
                   <p className="text-2xl font-black leading-snug">"We build for the future of agentic AI, where governance is not a feature — it's the architecture."</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Standards Grid */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-6">The Standard</h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">How we Lead.</h3>
          <p className="text-lg text-slate-500 font-medium">Every leader at Hayrok is held to the same standards we expect from our AI systems.</p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            { title: "Governance First", icon: Gavel, desc: "Decisions are guided by clear policies and explicit accountability." },
            { title: "Ownership of Outcomes", icon: Award, desc: "Leaders own results — not just the plans that produced them." },
            { title: "Audit-Ready Thinking", icon: History, desc: "Every internal decision must withstand external scrutiny." },
            { title: "Reality Over Theory", icon: Target, desc: "We build for real-world environments, not ideal ones." },
            { title: "Responsible Innovation", icon: Zap, desc: "We move deliberately where trust and safety are at stake." },
            { title: "Radical Transparency", icon: Eye, desc: "Logic should be readable, clear, and attributable to an owner." }
          ].map((v, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              className="p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-2xl hover:border-hayrok-orange/20 transition-all group flex flex-col"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-hayrok-orange mb-8 group-hover:bg-hayrok-orange group-hover:text-white transition-all">
                <v.icon size={20} />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{v.title}</h4>
              <p className="text-slate-500 font-medium leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Building the Team Block */}
      <section className="container mx-auto px-6 mb-48 relative z-10">
        <motion.div 
          {...fadeInUp}
          className="max-w-6xl mx-auto p-12 md:p-32 bg-slate-900 border border-white/5 rounded-[4rem] shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-[-50%] left-[-10%] right-[-10%] h-full bg-[radial-gradient(ellipse_at_center,rgba(255,95,0,0.1)_0%,transparent_70%)] blur-[100px]" />
          
          <div className="relative z-10">
            <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.8em] mb-12">Selective Growth</h3>
            <p className="text-4xl md:text-7xl font-black text-white mb-16 leading-[1.05] tracking-tight">
              Building the <br/>
              <span className="text-hayrok-orange italic tracking-tighter">New Intelligence Team.</span>
            </p>
            
            <div className="flex flex-col items-center gap-12 pt-16 border-t border-white/10 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl font-black text-slate-400 uppercase tracking-[0.4em] leading-relaxed text-center">
                We are selectively growing our leadership team with individuals who share <br/> <span className="text-white">our commitment to responsible AI.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="flex items-center gap-3 bg-hayrok-orange text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all group shadow-xl shadow-orange-500/20">
                  Explore Leadership Roles
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                  Contact Us
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

// Internal icon component for consistent styling
const LandmarkIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="2" y1="22" x2="22" y2="22"></line>
    <line x1="18" y1="11" x2="18" y2="18"></line>
    <line x1="12" y1="11" x2="12" y2="18"></line>
    <line x1="6" y1="11" x2="6" y2="18"></line>
    <path d="m12 2 10 9H2l10-9Z"></path>
  </svg>
);
