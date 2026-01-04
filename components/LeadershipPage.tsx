import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Users, Target, Lock, 
  Gavel, UserCheck, Eye, Sparkles, 
  Award, ArrowRight, Briefcase, Heart,
  Terminal, Globe, Cpu, CheckCircle2,
  Scale, FileText, History, Zap, Lightbulb, 
  Quote, TrendingUp, Landmark, ExternalLink,
  Linkedin, Bot, ShieldAlert, Search, 
  ClipboardCheck, Activity, Code, BarChart3,
  GitBranch, HeartHandshake, UserPlus, Shield,
  // Added Layers import to fix Cannot find name error
  Layers
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

// Custom Graphic: The Collaboration Mesh
const CollaborationMesh = () => (
  <div className="relative w-full h-[300px] flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,95,0,0.05)_0%,transparent_70%)]" />
    <svg className="w-full h-full max-w-md overflow-visible" viewBox="0 0 200 200">
      {/* Central Leadership Node */}
      <motion.circle 
        cx="100" cy="100" r="30" 
        fill="#FF5F00" 
        className="opacity-10"
        animate={{ r: [30, 35, 30] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <circle cx="100" cy="100" r="10" fill="#FF5F00" />
      
      {/* Surrounding Team Nodes */}
      {[
        { x: 40, y: 60, label: "Engineering" },
        { x: 160, y: 60, label: "Product" },
        { x: 100, y: 160, label: "Success" }
      ].map((node, i) => (
        <g key={i}>
          <motion.line 
            x1="100" y1="100" x2={node.x} y2={node.y} 
            stroke="#FF5F00" strokeWidth="1" strokeDasharray="4 4"
            className="opacity-30"
          />
          <motion.circle 
            cx={node.x} cy={node.y} r="8" 
            fill="#0F172A"
            animate={{ y: [node.y, node.y - 10, node.y] }}
            transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
          />
          <text 
            x={node.x} y={node.y - 20} 
            textAnchor="middle" 
            className="text-[8px] font-black uppercase tracking-widest fill-slate-400"
          >
            {node.label}
          </text>
        </g>
      ))}
      
      {/* Animated Pulse Rays */}
      <motion.circle 
        cx="100" cy="100" r="10" 
        fill="none" stroke="#FF5F00"
        animate={{ r: [10, 80], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  </div>
);

export const LeadershipPage: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  // Provided portrait of CEO Herberth
  const herberthPhoto = "/logos/herberth.png";

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/10 selection:text-hayrok-orange overflow-x-hidden relative">
      
      {/* Editorial Header */}
      <section className="relative pt-48 pb-20 border-b border-slate-100 overflow-hidden">
        <IntelligenceFabric density={1} isDark={false} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-hayrok-orange text-[10px] font-black mb-10 tracking-[0.4em] uppercase shadow-sm"
          >
            <Sparkles size={12} className="animate-pulse" />
            Practitioner-Led Stewardship
          </motion.div>
          <h1 className="text-5xl md:text-[9.5rem] font-black leading-[0.85] tracking-tight uppercase text-slate-900 mb-12">
            Trusted, <br/>
            <span className="text-hayrok-orange italic font-light tracking-tighter">Defended.</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-500 font-medium max-w-4xl leading-relaxed mb-12">
            Hayrok is led by practitioners and builders who understand a simple truth: 
            Security only works when decisions are <span className="text-slate-900 font-black">Defensible</span> — to engineers, executives, auditors, and regulators alike.
          </p>
          <p className="text-lg text-slate-400 font-medium max-w-2xl leading-relaxed">
            Our leadership team brings deep experience across application security, risk management, enterprise platforms, and regulated environments. We focus on building technology that supports human judgment, evidence-based validation, and governance at scale.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-[#FBFBF9] relative overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="max-w-4xl mb-24">
              <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-8">The Philosophy</h2>
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 leading-tight tracking-tight uppercase">Governed <br/> <span className="text-slate-400 italic font-light">By Conviction.</span></h3>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Evidence Over Assumptions", 
                  desc: "We believe security decisions must be backed by proof, not severity scores or vendor claims.",
                  icon: Target 
                },
                { 
                  title: "Governance Over Automation", 
                  desc: "Automation should assist humans — not replace accountability or oversight.",
                  icon: Gavel 
                },
                { 
                  title: "Trust Over Hype", 
                  desc: "We build for enterprises that value reliability, transparency, and long-term risk reduction.",
                  icon: ShieldCheck 
                }
              ].map((p, i) => (
                <motion.div 
                  key={i} 
                  {...fadeInUp}
                  className="p-12 bg-white border border-slate-200 rounded-[3rem] hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-hayrok-orange mb-8 group-hover:bg-hayrok-orange group-hover:text-white transition-all">
                    <p.icon size={28} />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{p.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed text-sm">{p.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* CEO Spotlight: Herberth Oshiemele */}
      <section className="relative py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/4] rounded-[4rem] overflow-hidden shadow-3xl border-8 border-white group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10" />
                <img 
                  src={herberthPhoto} 
                  alt="Herberth Oshiemele" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-[1.03]" 
                />
                <div className="absolute bottom-12 left-12 right-12 z-20">
                   <div className="flex flex-col gap-2 text-white">
                      <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-80">Founder & Chief Executive Officer</p>
                      <h2 className="text-4xl font-black tracking-tight uppercase">Herberth Oshiemele</h2>
                      <div className="h-1 w-20 bg-hayrok-orange rounded-full mt-4" />
                   </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-6 pt-10">
              <motion.div {...fadeInUp} className="space-y-10">
                <div className="relative">
                  <Quote size={60} className="absolute -top-10 -left-8 text-hayrok-orange opacity-10" />
                  <p className="text-3xl md:text-5xl font-black italic text-slate-900 leading-[1.1] tracking-tight relative z-10 uppercase">
                    “Security teams are drowning in data — but still struggle to prove <span className="text-hayrok-orange underline decoration-hayrok-orange/20 decoration-8 underline-offset-8">which risks actually matter.</span>”
                  </p>
                </div>

                <div className="space-y-6 prose prose-slate max-w-none">
                  <p className="text-xl text-slate-500 font-medium leading-relaxed">
                    Herberth is a cybersecurity leader with deep experience across application security, product security, risk management, and regulated enterprise environments.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    He has spent his career working at the intersection of security engineering, governance, and business — helping organizations move from reactive security practices to structured, defensible risk management. 
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Before founding Hayrok, Herberth worked across multiple industries including financial services, e-commerce, healthcare, energy, and SaaS, partnering closely with engineering teams, CISOs, and compliance leaders. He leads Hayrok with a focus on clarity, accountability, and building systems that stand up to real-world scrutiny.
                  </p>
                </div>

                <div className="pt-10 flex items-center gap-6">
                   <a href="#" className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-hayrok-orange transition-all">
                      <Linkedin size={20} />
                   </a>
                   <div className="h-px flex-1 bg-slate-100" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CPO Spotlight: Ebuka Igwegbe */}
      <section className="relative py-32 bg-[#FBFBF9]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-6 order-2 lg:order-1 pt-10">
              <motion.div {...fadeInUp} className="space-y-10">
                <div className="inline-flex items-center gap-3 text-hayrok-orange font-black text-[10px] uppercase tracking-[0.5em]">
                   <Bot size={16} /> Product Stewardship
                </div>
                
                <div className="relative">
                  <Quote size={60} className="absolute -top-10 -left-8 text-hayrok-orange opacity-10" />
                  <p className="text-3xl md:text-5xl font-black italic text-slate-900 leading-[1.1] tracking-tight relative z-10 uppercase">
                    "Great products do not just solve problems - they <span className="text-hayrok-orange underline decoration-hayrok-orange/20 decoration-8 underline-offset-8">earn trust through clarity.</span>"
                  </p>
                </div>

                <div className="space-y-6 prose prose-slate max-w-none">
                  <p className="text-xl text-slate-500 font-medium leading-relaxed">
                    Ebuka is a product leader with experience in AI-driven platforms and enterprise product management.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    As CPO, he leads Hayrok product strategy and ensures the platform AI capabilities are practical, explainable, and aligned with real-world security and governance needs.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Together with the engineering and security teams, he ensures Hayrok delivers practical, trustworthy, and scalable security validation, making sure the AI enhances human decision-making rather than replacing it.
                  </p>
                </div>

                <div className="pt-10 flex items-center gap-6">
                   <a href="#" className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-hayrok-orange transition-all">
                      <Linkedin size={20} />
                   </a>
                   <div className="h-px flex-1 bg-slate-200" />
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/4] rounded-[4rem] overflow-hidden shadow-3xl border-8 border-white group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10" />
                <img 
                  src="/logos/ebuka2.png" 
                  alt="Ebuka Igwegbe" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-[1.03]" 
                />
                <div className="absolute bottom-12 left-12 right-12 z-20">
                   <div className="flex flex-col gap-2 text-white">
                      <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-80">Co-Founder and Chief Product Officer</p>
                      <h2 className="text-4xl font-black tracking-tight uppercase">Ebuka Igwegbe</h2>
                      <div className="h-1 w-20 bg-hayrok-orange rounded-full mt-4" />
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Security Advisor: Tyler Giles */}
      <section className="relative py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Photo */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, x: -40 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="/logos/tyler2.jpeg" 
                    alt="Tyler Giles" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80 mb-2">Product Security Advisor</p>
                    <h3 className="text-3xl font-black text-white tracking-tight">Tyler Giles</h3>
                    <div className="h-1 w-16 bg-hayrok-orange rounded-full mt-4" />
                  </div>
                </div>
                {/* Decorative accent */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-hayrok-orange/10 rounded-3xl -z-10" />
              </motion.div>

              {/* Info */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-3 text-hayrok-orange font-black text-[10px] uppercase tracking-[0.4em]">
                   <Shield size={16} /> Advisory Leadership
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  Guiding Product Security <span className="text-hayrok-orange italic">Strategy</span>
                </h2>

                <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Tyler advises Hayrok on product and application security, bringing practical experience in secure product design. He provides an independent perspective that supports secure-by-design decisions and helps guide the development of a scalable, trusted platform aligned with customer needs.
                  </p>
                </div>

                {/* Focus Areas */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { label: 'Secure SDLC', icon: Code },
                    { label: 'Threat Modeling', icon: Target },
                    { label: 'AppSec Strategy', icon: ShieldAlert },
                    { label: 'Supply Chain Security', icon: GitBranch },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <item.icon size={18} className="text-hayrok-orange" />
                      <span className="text-sm font-bold text-slate-700">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex items-center gap-6">
                   <a href="#" className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors">
                      <Linkedin size={18} />
                      Connect on LinkedIn
                   </a>
                   <div className="h-px flex-1 bg-slate-100" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Culture & Safe Environment Section */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="order-2 lg:order-1">
                 <CollaborationMesh />
              </div>
              <div className="order-1 lg:order-2">
                 <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.6em] mb-8">Culture & Environment</h2>
                 <h3 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight uppercase tracking-tight mb-10">
                    A Safe Harbor for <br/> <span className="text-hayrok-orange italic font-light lowercase">Exceptional Builders.</span>
                 </h3>
                 <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                    Good leadership isn't just about technical direction—it's about creating an environment where high-stakes engineering can happen with clarity and psychological safety.
                 </p>
                 
                 <div className="grid gap-8">
                    {[
                      { 
                        title: "Cross-Functional Sync", 
                        desc: "Weekly 'Zero-Friction' loops where engineers, design, and leadership remove bottlenecks collectively.", 
                        icon: HeartHandshake 
                      },
                      { 
                        title: "The Growth Standard", 
                        desc: "Explicit internal paths for professional evolution. We manage people as builders, not resources.", 
                        icon: UserPlus 
                      },
                      { 
                        title: "Governance of Self", 
                        desc: "We hold ourselves to the same high audit standards we build for our customers.", 
                        icon: ClipboardCheck 
                      }
                    ].map((item, i) => (
                      <motion.div 
                        key={i} 
                        {...fadeInUp}
                        className="flex gap-6 items-start"
                      >
                         <div className="p-4 bg-slate-50 rounded-2xl text-hayrok-orange shrink-0">
                            <item.icon size={24} />
                         </div>
                         <div>
                            <h4 className="text-lg font-black text-slate-900 uppercase mb-1">{item.title}</h4>
                            <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                         </div>
                      </motion.div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Expertise Domain Grid */}
      <section className="py-40 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-24">
            <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.6em] mb-8">Product & Engineering Leadership</h2>
            <h3 className="text-4xl md:text-7xl font-black mb-10 leading-tight uppercase tracking-tight">Our Collective <br/> <span className="text-hayrok-orange italic">Intelligence.</span></h3>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Hayrok’s leadership is focused on building governed, explainable security systems that scale safely in high-trust environments where reliability is non-negotiable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Offensive Engineering", items: ["Application security engineering", "Cloud vulnerability research", "Attack path analysis"], icon: Zap },
              { title: "Governance Tech", items: ["Policy-as-code (OPA)", "Risk management frameworks", "Auditable decision paths"], icon: Gavel },
              { title: "Safe Simulation", items: ["Breach simulation mechanics", "Non-destructive probing", "Control testing"], icon: Shield },
              { title: "Agentic AI", items: ["Explainable reasoning", "HITL AI controls", "Governed orchestration"], icon: Bot },
              { title: "Enterprise SaaS", items: ["Distributed system design", "Multi-tenant isolation", "Production safety"], icon: Layers },
              { title: "Audit Integrity", items: ["Decision lineage", "Regulator reporting", "Evidence persistence"], icon: History }
            ].map((domain, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-10 bg-slate-50 border border-slate-100 rounded-[3rem] hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-hayrok-orange mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <domain.icon size={20} />
                </div>
                <h4 className="text-lg font-black mb-6 uppercase tracking-tight text-slate-900">{domain.title}</h4>
                <ul className="space-y-3">
                  {domain.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest">
                       <div className="w-1 h-1 rounded-full bg-hayrok-orange/40" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory & Customer Commitment Section */}
      <section className="py-40 bg-[#020617] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-[0.03] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div>
                <h3 className="text-hayrok-orange font-black text-[10px] uppercase tracking-[0.5em] mb-8">Ecosystem Support</h3>
                <h4 className="text-4xl md:text-7xl font-black mb-10 leading-[0.95] tracking-tight uppercase">Advisory & <br/> <span className="text-hayrok-orange">Industry Guidance.</span></h4>
                <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                  Hayrok is supported by advisors and industry experts who bring perspective from CISO-level leadership, risk and audit teams, and cloud-native DevSecOps environments.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Enterprise CISO Perspectives", "Product & AppSec Experts", "Risk, Audit & Compliance", "Cloud-Native Pioneers"].map((adv, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl">
                       <CheckCircle2 size={16} className="text-hayrok-orange" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">{adv}</span>
                    </div>
                  ))}
                </div>
             </div>
             
             <div className="p-12 md:p-20 bg-white/5 border border-white/10 rounded-[5rem] text-center shadow-2xl backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Heart size={140} className="text-hayrok-orange" />
                </div>
                <h5 className="text-2xl font-black mb-10 uppercase tracking-tight relative z-10">Accountable to You.</h5>
                <div className="space-y-10 relative z-10">
                   {[
                      { l: "Transparency", d: "Clear explanations of platform boundaries." },
                      { l: "Safety", d: "Non-destructive, policy-bound workflows." },
                      { l: "Defensibility", d: "Evidence and audit trails you can rely on." }
                   ].map((item, i) => (
                      <div key={i} className="group">
                        <p className="text-hayrok-orange font-black text-xs uppercase tracking-widest mb-1 group-hover:scale-110 transition-transform">{item.l}</p>
                        <p className="text-sm font-medium text-slate-300">{item.d}</p>
                      </div>
                   ))}
                </div>
                <p className="mt-12 text-[9px] font-black text-slate-500 uppercase tracking-[0.4em]">No black boxes. No autonomous chaos.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Building for the Long Term */}
      <section className="py-40 bg-white">
         <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto p-12 md:p-24 bg-slate-50 border border-slate-200 rounded-[5rem] text-center group shadow-sm hover:shadow-2xl transition-all duration-700">
               <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 tracking-tight uppercase leading-[0.9]">Building for the <br/> <span className="text-hayrok-orange italic font-light tracking-tighter">Long Term.</span></h3>
               <p className="text-xl text-slate-500 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                 We are committed to building a platform — and a company — that customers can rely on for years, not just quarters.
               </p>
               <div className="grid md:grid-cols-4 gap-8">
                  {[
                    { label: "Trust & Accountability", icon: ShieldCheck },
                    { label: "Sustainable Programs", icon: RefreshCw },
                    { label: "Measurable Reduction", icon: TrendingUp },
                    { label: "Strong Relationships", icon: Users }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-4">
                       <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-300 group-hover:text-hayrok-orange transition-all shadow-sm">
                          <item.icon size={20} />
                       </div>
                       <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-tight">{item.label}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-40 bg-[#FCFCFA] text-center border-t border-slate-100">
         <div className="container mx-auto px-6 relative z-10">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
               <h3 className="text-5xl md:text-[8rem] font-black text-slate-900 mb-12 tracking-tight leading-[0.8] uppercase">Join Us on <br/> <span className="text-hayrok-orange italic">The Journey.</span></h3>
               <p className="text-xl md:text-2xl text-slate-500 font-medium mb-16 leading-relaxed max-w-3xl mx-auto">
                  We are building the future of governed security validation and risk intelligence. Connect with our team to start your maturity journey.
               </p>
               <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                 <button onClick={() => onNavigate?.('demo')} className="bg-hayrok-orange text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
                    Request a Demo
                 </button>
                 <button onClick={() => onNavigate?.('contact')} className="px-12 py-6 rounded-2xl font-black text-xl text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all bg-white shadow-sm flex items-center justify-center gap-4 group">
                    Contact Us
                 </button>
                 <button onClick={() => onNavigate?.('careers')} className="px-12 py-6 rounded-2xl font-black text-xl text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-xl">
                    View Careers
                 </button>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Summary Footer */}
      <div className="h-32 flex items-center justify-center border-t border-slate-100 bg-white">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            Hayrok is led by experienced security practitioners focused on building governed, evidence-based security validation and risk intelligence solutions.
         </p>
      </div>
    </div>
  );
};

// Internal icon helpers
const RefreshCw = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
    <path d="M21 3v5h-5"></path>
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
    <path d="M3 21v-5h5"></path>
  </svg>
);
