
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// Added Rocket and Scale to imports
import { 
  ShieldCheck, Users, Eye, Lock, 
  Zap, Cpu, Target, 
  Fingerprint, Sparkles, ShieldAlert, Heart,
  Briefcase, Gavel, FileSearch,
  ArrowRight, Globe, Terminal,
  Search, BarChart3, Code, UserCheck, MousePointer2, History,
  Activity, CheckCircle2, Rocket, Scale
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

export const AboutUs: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-hayrok-orange/10 selection:text-hayrok-orange overflow-hidden font-sans relative">
      
      {/* Refined Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute top-[-5%] right-[-5%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(255,95,0,0.03)_0%,transparent_70%)] blur-[100px]"
        />
        <div className="absolute inset-0 bg-grid-white opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]"></div>
      </div>

      <div className="h-32 md:h-40"></div>

      {/* Hero Section: Sophisticated & Balanced */}
      <section className="container mx-auto px-6 mb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="flex items-center gap-3 mb-8">
            <div className="h-[2px] w-8 bg-hayrok-orange"></div>
            <span className="text-[9px] font-black text-hayrok-orange uppercase tracking-[0.5em]">The Operating Mission</span>
          </motion.div>
          
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-8"
            >
              <h1 className="text-5xl md:text-7xl font-black mb-10 leading-[1.05] tracking-tight text-slate-900">
                Building Trusted <br/>
                <span className="bg-gradient-to-r from-hayrok-orange to-indigo-600 bg-clip-text text-transparent italic">Agentic Security.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-3xl">
                Cybersecurity is changing faster than the tools designed to protect it. Attackers already operate autonomously — <span className="text-slate-900 font-bold underline decoration-hayrok-orange/30 decoration-4">Hayrok exists to change that.</span>
              </p>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="lg:col-span-4 lg:pt-4"
            >
              <div className="p-8 bg-slate-50 border border-slate-200 rounded-[2rem] shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Globe size={80} />
                </div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Our Objective</p>
                <p className="text-lg font-black text-slate-900 leading-snug">
                  Reduce real security risk using agentic AI that is governed, accountable, and auditable by design.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Gap Section: HUD Visualization */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="bg-slate-900 rounded-[3.5rem] p-10 md:p-24 text-white relative overflow-hidden shadow-2xl border border-white/5">
          <div className="absolute inset-0 bg-grid-white opacity-5" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(255,95,0,0.15),transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-8">The Founders' Thesis</h3>
              <h4 className="text-4xl md:text-6xl font-black mb-10 tracking-tight leading-tight">
                Confidence is the <br/>
                <span className="text-slate-400 italic">missing metric.</span>
              </h4>
              <p className="text-xl text-slate-300 font-medium leading-relaxed mb-12">
                Security leaders don’t fail because they lack tools. They fail because they lack confidence in the <span className="text-white underline decoration-hayrok-orange decoration-2">validity and accountability</span> of the data they receive.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: "Real Risk", icon: Target },
                  { label: "Defensible Logic", icon: Gavel },
                  { label: "Governed AI", icon: Lock },
                  { label: "Traceable Proof", icon: FileSearch }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group">
                    <div className="w-10 h-10 bg-hayrok-orange/20 rounded-xl flex items-center justify-center text-hayrok-orange group-hover:scale-110 transition-transform">
                      <item.icon size={18} />
                    </div>
                    <span className="text-sm font-bold text-slate-200">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative aspect-video lg:aspect-square bg-[#0A0C10] rounded-[2.5rem] border border-white/10 p-12 overflow-hidden shadow-inner"
            >
              <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
              <div className="relative h-full flex flex-col justify-center">
                <div className="mb-10">
                   <div className="flex items-center gap-3 text-hayrok-orange font-black text-[9px] uppercase tracking-[0.6em] mb-4">
                     <Activity size={12} className="animate-pulse" />
                     Decision Intelligence
                   </div>
                   <h5 className="text-3xl font-black text-white tracking-tight">Autonomy without <br/> Accountability is <span className="text-hayrok-orange italic">Risk.</span></h5>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: "Vulnerability Found", val: "CVE-2024-9412", status: "Critical" },
                    { label: "Exploit Path Validated", val: "Genesis Engine v2", status: "PROVEN" },
                    { label: "Governance Approval", val: "OPA Policy #82", status: "Verified" }
                  ].map((s, i) => (
                    <div key={i} className="flex items-center justify-between p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
                       <div className="flex flex-col">
                         <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">{s.label}</span>
                         <span className="text-base font-bold text-white">{s.val}</span>
                       </div>
                       <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${s.status === 'PROVEN' ? 'bg-hayrok-orange text-white shadow-[0_0_10px_rgba(255,95,0,0.5)]' : 'bg-white/5 text-slate-400'}`}>
                          {s.status}
                       </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities: Refined Enterprise Grid */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-6">What We Build</h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">The Unified Intelligence Platform.</h3>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Three specialized engines integrated into a single platform focused not on activity — but on <span className="text-slate-900 font-bold italic">measurable risk reduction.</span>
          </p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid lg:grid-cols-3 gap-8"
        >
          {[
            { 
              title: "Hive", 
              sub: "Intelligence & Governance", 
              desc: "The system of record for security risk, providing CTEM trending and executive insights.",
              icon: BarChart3,
              accent: "text-blue-600",
              bg: "bg-blue-50/50"
            },
            { 
              title: "Genesis", 
              sub: "Autonomous Validation", 
              desc: "Agent-driven proof of exploitability, confirming attack paths with auditable evidence.",
              icon: Zap,
              accent: "text-hayrok-orange",
              bg: "bg-orange-50/50"
            },
            { 
              title: "CodeFabrics", 
              sub: "Supply Chain Governance", 
              desc: "Governed security for the SDLC, preventing risk recurrence through policy-driven gates.",
              icon: Code,
              accent: "text-emerald-600",
              bg: "bg-emerald-50/50"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              className="p-10 bg-slate-50 border border-slate-100 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all duration-500 group flex flex-col"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-transform group-hover:scale-110 ${item.bg} ${item.accent}`}>
                <item.icon size={28} />
              </div>
              <h4 className="text-3xl font-black text-slate-900 mb-2">{item.title}</h4>
              <p className={`${item.accent} text-[9px] font-black uppercase tracking-[0.4em] mb-6`}>{item.sub}</p>
              <p className="text-slate-500 text-lg font-medium leading-relaxed flex-1">{item.desc}</p>
              
              <div className="mt-10 flex items-center gap-2 text-[10px] font-black text-slate-900 uppercase tracking-widest">
                Platform Module <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Practitioner DNA: Human-Centric Section */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="bg-slate-50 rounded-[4rem] p-10 md:p-24 border border-slate-200 relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div {...fadeInUp} className="lg:col-span-7">
              <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-8">Leadership & Culture</h3>
              <h4 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 tracking-tight leading-[1.1]">
                Led by <span className="text-slate-400 italic">Practitioners.</span> <br/>
                Driven by Results.
              </h4>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12">
                Hayrok is led by security practitioners who have operated in real, high-stakes environments — where decisions are scrutinized, audits are unforgiving, and incidents have consequences.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Integrity over Hype", icon: Heart },
                  { title: "Thoughtful Execution over Speed", icon: Sparkles },
                  { title: "Long-term Trust over Optics", icon: ShieldCheck }
                ].map((val, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-900">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-hayrok-orange">
                       <val.icon size={18} />
                    </div>
                    <span className="text-lg font-bold">{val.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Hayrok Team" 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
                   <div className="flex items-center gap-3 text-white">
                      <Users size={20} className="text-hayrok-orange" />
                      <span className="font-black uppercase tracking-widest text-[10px]">PRACTITIONER-DRIVEN CULTURE</span>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segments: Defensible Trust */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="flex items-center gap-6 mb-20">
          <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.5em] shrink-0">Ecosystem & Compliance</span>
          <div className="h-px w-full bg-slate-100" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Regulated Enterprise", icon: LandmarkIcon, desc: "Built for environments where trust is non-negotiable." },
            { title: "SaaS & Technology", icon: Rocket, desc: "Agentic velocity without compromising code security." },
            { title: "Healthcare & Life Sciences", icon: ShieldCheck, desc: "Safety-first AI for sensitive, private data domains." },
            { title: "Financial Services", icon: Scale, desc: "Audit-ready evidence that satisfies board-level scrutiny." }
          ].map((p, i) => (
            <div key={i} className="p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-hayrok-orange mb-8 group-hover:bg-hayrok-orange group-hover:text-white transition-all">
                <p.icon size={24} />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{p.title}</h4>
              <p className="text-slate-500 font-medium leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Commitment: Modern CTA */}
      <section className="container mx-auto px-6 mb-48 relative z-10">
        <motion.div 
          {...fadeInUp}
          className="max-w-6xl mx-auto p-12 md:p-32 bg-slate-900 border border-white/5 rounded-[4rem] shadow-2xl relative overflow-hidden text-center"
        >
          <div className="absolute top-[-50%] left-[-10%] right-[-10%] h-full bg-[radial-gradient(ellipse_at_center,rgba(255,95,0,0.1)_0%,transparent_70%)] blur-[100px]" />
          
          <div className="relative z-10">
            <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.8em] mb-12">Looking Ahead</h3>
            <p className="text-4xl md:text-7xl font-black text-white mb-16 leading-[1.05] tracking-tight">
              Not just AI that acts. <br/>
              <span className="text-hayrok-orange italic">AI that can be trusted.</span>
            </p>
            
            <div className="flex flex-col items-center gap-10 pt-12 border-t border-white/10 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl font-black text-slate-400 uppercase tracking-[0.4em] leading-relaxed">
                Hayrok — Governed Agentic AI for Security <br/> <span className="text-white">You Can Defend.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="flex items-center gap-3 bg-hayrok-orange text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all group">
                  Request a Demo
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                  Explore Platform
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

// Internal icon for specific sections
const LandmarkIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="2" y1="22" x2="22" y2="22"></line>
    <line x1="18" y1="11" x2="18" y2="18"></line>
    <line x1="12" y1="11" x2="12" y2="18"></line>
    <line x1="6" y1="11" x2="6" y2="18"></line>
    <path d="m12 2 10 9H2l10-9Z"></path>
  </svg>
);
