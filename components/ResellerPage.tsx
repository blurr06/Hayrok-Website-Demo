
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, Briefcase, Zap, ShieldCheck, 
  Users, BarChart3, Code, Bot, Layers, 
  TrendingUp, Award, ArrowRight, CheckCircle2,
  Package, Layout, Target, Mail, Globe, 
  ChevronRight, Sparkles, Gavel,
  /* Added Info and History imports to fix "Cannot find name 'Info'" and icon type errors */
  Info, History
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

export const ResellerPage: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FCFCFA] min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-12 overflow-x-hidden relative">
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <IntelligenceFabric density={1.2} isDark={false} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,95,0,0.03)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-hayrok-orange text-[10px] font-black shadow-sm mx-auto mb-10 tracking-[0.4em] uppercase backdrop-blur-sm"
          >
            <Handshake size={12} className="animate-pulse" />
            Partner Program: Resellers
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="text-6xl md:text-[8rem] font-black tracking-tight leading-[0.9] text-slate-900 mb-12"
          >
            Deliver Governed <br />
            <span className="text-hayrok-orange italic font-light tracking-tighter">Security Validation.</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium mb-16"
          >
            Built for Value-Added Security Partners. Hayrok works with authorized resellers to help customers adopt Continuous Threat Exposure Management (CTEM) and BAS-aligned security validation through governed workflows.
          </motion.p>

          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a href="mailto:partners@hayrok.com?subject=Reseller%20Partnership" className="w-full sm:w-auto bg-hayrok-orange hover:bg-orange-600 text-white px-14 py-6 rounded-full font-black text-lg flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-[0_20px_40px_-10px_rgba(255,95,0,0.3)]">
              Become a Reseller
            </a>
            <button onClick={() => onNavigate?.('platform')} className="w-full sm:w-auto px-14 py-6 rounded-full font-black text-lg text-slate-900 border border-slate-200 hover:bg-white transition-all shadow-sm flex items-center justify-center gap-2">
              Explore the Platform
            </button>
          </motion.div>
        </div>
      </section>

      {/* Intro Block */}
      <section className="py-24 bg-white border-y border-slate-100">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <motion.div {...fadeInUp}>
                  <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Strategic Portfolio Expansion</h2>
                  <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                    Moving from alert volume to <span className="text-slate-400 italic">evidence.</span>
                  </h3>
                  <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
                    Organizations are overwhelmed by security findings but lack clarity on what truly matters. Hayrok enables resellers to help customers move from alert-driven security to evidence-based risk management.
                  </p>
                  <p className="text-lg text-slate-500 font-medium leading-relaxed">
                    Our program is designed for partners that want to expand their portfolio with a differentiated platform focused on decision quality, validation, and long-term risk reduction.
                  </p>
               </motion.div>
               <div className="bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl group">
                  <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                    <TrendingUp size={240} className="text-hayrok-orange" />
                  </div>
                  <div className="relative z-10">
                     <p className="text-2xl font-black italic mb-10 leading-tight">"Hayrok is a platform focused on long-term risk reduction—not just more tool sprawl."</p>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {["Address CTEM initiatives", "Support remediation", "Reduce security noise", "Improve outcomes"].map((item, i) => (
                           <div key={i} className="flex items-center gap-3">
                              <CheckCircle2 size={18} className="text-hayrok-orange" />
                              <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">{item}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* What Hayrok Brings - 4 Pillars */}
      <section className="py-32">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-6">Product Landscape</h2>
               <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">The Reseller <br/> <span className="text-hayrok-orange italic font-light">Portfolio.</span></h3>
            </div>

            <motion.div 
               variants={staggerContainer}
               initial="initial"
               whileInView="whileInView"
               className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
               {[
                 { 
                   title: "Hive", 
                   desc: "CTEM system of record and governance layer.", 
                   icon: BarChart3,
                   accent: "bg-blue-50 text-blue-600"
                 },
                 { 
                   title: "Genesis", 
                   desc: "BAS‑aligned autonomous security validation.", 
                   icon: Zap,
                   accent: "bg-orange-50 text-hayrok-orange"
                 },
                 { 
                   title: "CodeFabrics", 
                   desc: "Application & software supply‑chain exposure.", 
                   icon: Code,
                   accent: "bg-emerald-50 text-emerald-500"
                 },
                 { 
                   title: "Hay‑AI", 
                   desc: "Governed intelligence and orchestration.", 
                   icon: Bot,
                   accent: "bg-indigo-50 text-indigo-500"
                 }
               ].map((item, i) => (
                 <motion.div 
                    key={i}
                    variants={fadeInUp}
                    className="p-10 bg-white border border-slate-100 rounded-[3rem] hover:shadow-2xl hover:border-hayrok-orange/30 transition-all group flex flex-col h-full"
                 >
                    <div className={`w-14 h-14 ${item.accent} rounded-2xl flex items-center justify-center shadow-sm mb-10 transition-all group-hover:scale-110 group-hover:rotate-2`}>
                       <item.icon size={28} strokeWidth={2.5} />
                    </div>
                    <h5 className="text-2xl font-black text-slate-900 mb-4 leading-tight">{item.title}</h5>
                    <p className="text-slate-500 text-lg font-medium leading-relaxed flex-1">{item.desc}</p>
                 </motion.div>
               ))}
            </motion.div>
         </div>
      </section>

      {/* How Resellers Work Section */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div className="relative order-2 lg:order-1">
                  <div className="bg-slate-900 rounded-[4rem] p-12 text-white shadow-2xl relative overflow-hidden h-[500px] flex flex-col justify-center">
                     <div className="absolute top-0 right-0 p-12 opacity-5">
                        <Layers size={260} className="text-hayrok-orange" />
                     </div>
                     <div className="relative z-10 space-y-10">
                        <h4 className="text-3xl font-black tracking-tight leading-tight uppercase">Typical <br/> <span className="text-hayrok-orange italic">Engagements.</span></h4>
                        <div className="space-y-4">
                           {[
                             "Platform resale and licensing",
                             "Customer onboarding and enablement",
                             "CTEM program support",
                             "Validation‑driven remediation initiatives",
                             "Renewal and expansion opportunities"
                           ].map((eng, i) => (
                              <div key={i} className="flex items-center gap-4 group/item">
                                 <div className="w-1.5 h-1.5 rounded-full bg-hayrok-orange group-hover/item:scale-150 transition-transform" />
                                 <span className="text-slate-300 font-bold uppercase tracking-widest text-[10px]">{eng}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>

               <motion.div className="order-1 lg:order-2" {...fadeInUp}>
                  <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Program Integration</h2>
                  <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight uppercase">Seamlessly <br/> <span className="text-hayrok-orange italic">Integrated.</span></h3>
                  <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
                    Hayrok is designed to integrate cleanly into existing reseller models. It complements existing tools and services rather than replacing them.
                  </p>
                  <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm flex items-start gap-4">
                     <Info className="text-hayrok-orange shrink-0 mt-1" size={24} />
                     <p className="text-sm font-bold text-slate-500 uppercase tracking-tight leading-relaxed">
                        Our model supports licensing focus, customer relationship longevity, and value-based delivery tracks.
                     </p>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Customer Value Section */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Outcome Alignment</h2>
               <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">Value for <br/><span className="text-hayrok-orange italic">Your Customers.</span></h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { title: "Clear Prioritization", desc: "Identify material security risk through evidence-based analysis.", icon: Target },
                 { title: "Evidence-Based Decisions", desc: "Remediation choices backed by autonomous validation proof.", icon: ShieldCheck },
                 { title: "Improved Reporting", desc: "Executive and audit-ready reporting by default.", icon: Layout },
                 { title: "Reduced Alert Fatigue", desc: "AI-driven noise reduction focusing humans on what matters.", icon: Bot },
                 { title: "Repeatable Model", desc: "A sustainable operating model for CTEM in the enterprise.", icon: History },
                 { title: "Long-Term Trust", desc: "A platform built for governance and long-term risk management.", icon: Award }
               ].map((item, i) => (
                 <div key={i} className="p-10 border border-slate-100 rounded-[3rem] hover:bg-slate-50 transition-all flex flex-col group">
                    <div className="w-12 h-12 bg-white shadow-sm border border-slate-100 rounded-xl flex items-center justify-center text-hayrok-orange mb-8 group-hover:scale-110 transition-transform">
                       <item.icon size={22} />
                    </div>
                    <h5 className="text-xl font-black text-slate-900 mb-4">{item.title}</h5>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed flex-1">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Enablement & Support Bento */}
      <section className="py-32 bg-[#F8F9F5]">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-10 items-stretch">
               <div className="lg:col-span-4 bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden flex flex-col justify-center">
                  <div className="absolute inset-0 bg-grid-white opacity-5" />
                  <div className="relative z-10">
                     <Award className="text-hayrok-orange mb-8" size={56} />
                     <h4 className="text-3xl font-black mb-6 leading-tight uppercase">Reseller <br/> Enablement.</h4>
                     <p className="text-slate-400 font-medium leading-relaxed">We invest heavily in the success of our authorized resellers.</p>
                  </div>
               </div>

               <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
                  {[
                    { label: "Sales & Technical Enablement", desc: "Comprehensive training on platform value and technical deployment." },
                    { label: "Onboarding Resources", desc: "Ready-to-use playbooks, training materials, and customer assets." },
                    { label: "Market Research Alignment", desc: "Positioning aligned to the latest Gartner CTEM and BAS research." },
                    { label: "Deal Support", desc: "Joint engagement and architect support for complex opportunities." }
                  ].map((item, i) => (
                    <div key={i} className="p-10 bg-white border border-slate-200 rounded-[3rem] shadow-sm group hover:border-hayrok-orange transition-all">
                       <h5 className="text-lg font-black text-slate-900 mb-3 uppercase tracking-tight">{item.label}</h5>
                       <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Who the Program is for & Relationships */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20">
               <div>
                  <h3 className="text-3xl font-black text-slate-900 mb-10 tracking-tight uppercase">Who the Program <br/> <span className="text-hayrok-orange italic">Is For.</span></h3>
                  <div className="space-y-6">
                     {[
                        "Partners serving mid‑market and enterprise customers",
                        "Security, risk, or compliance focused practices",
                        "Firms valuing outcomes over short-term tooling volume",
                        "Supporters of CTEM and governance-led programs"
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                           <CheckCircle2 className="text-hayrok-orange shrink-0 mt-0.5" size={20} />
                           <span className="font-bold text-slate-700 text-sm uppercase tracking-tight">{item}</span>
                        </div>
                     ))}
                  </div>
               </div>

               <div>
                  <h3 className="text-3xl font-black text-slate-900 mb-10 tracking-tight uppercase">Relationship to <br/> <span className="text-slate-400 italic">Other Partners.</span></h3>
                  <div className="space-y-8">
                     {[
                        { type: "Resellers", focus: "Focus on licensing, customer relationships, and delivery." },
                        { type: "MSSPs", focus: "Focus on managed services and ongoing operations." },
                        { type: "CSP Partners", focus: "Focus on cloud platform integration and co‑sell." }
                     ].map((rel, i) => (
                        <div key={i} className="flex flex-col gap-2 pb-6 border-b border-slate-100 last:border-0">
                           <span className="text-hayrok-orange font-black text-xs uppercase tracking-[0.3em]">{rel.type}</span>
                           <p className="text-lg font-bold text-slate-600 leading-tight">{rel.focus}</p>
                        </div>
                     ))}
                     <p className="text-xs font-bold text-slate-400 italic mt-6">"These models are complementary, not competitive."</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-white border-t border-slate-100">
         <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto p-12 md:p-32 bg-slate-900 rounded-[5rem] text-white relative overflow-hidden shadow-2xl group">
               <div className="absolute top-0 right-0 w-[50%] h-full bg-hayrok-orange/10 blur-[120px] rounded-full group-hover:bg-hayrok-orange/20 transition-all duration-700" />
               <div className="relative z-10">
                  <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.8em] mb-12">Program Ignition</h3>
                  <p className="text-4xl md:text-[6rem] font-black mb-16 tracking-tight leading-[0.9] uppercase">
                    Become an <br/> <span className="text-hayrok-orange italic font-light tracking-tighter">Authorized Reseller.</span>
                  </p>
                  
                  <div className="flex flex-col items-center gap-12 max-w-2xl mx-auto">
                     <div className="space-y-4 text-center">
                        <p className="text-2xl font-black text-white">Email: <span className="text-hayrok-orange">partners@hayrok.com</span></p>
                        <p className="text-slate-400 font-medium">Subject: Reseller Partnership</p>
                     </div>
                     
                     <div className="h-px w-24 bg-white/10" />
                     
                     <div className="flex flex-col sm:flex-row gap-6">
                        <a href="mailto:partners@hayrok.com?subject=Reseller%20Partnership" className="bg-hayrok-orange text-white px-16 py-8 rounded-full font-black text-2xl hover:bg-orange-600 transition-all transform hover:scale-105 shadow-[0_30px_60px_-15px_rgba(255,95,0,0.4)] flex items-center gap-4">
                           Submit Inquiry <ArrowRight size={24} />
                        </a>
                     </div>
                     
                     <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] mt-10">A member of our team will follow up to discuss fit and steps.</p>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Signature Footer */}
      <div className="h-24 flex items-center justify-center border-t border-slate-100 bg-[#FCFCFA]">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            Hayrok works with authorized resellers to support CTEM and security validation through governed, AI‑driven capabilities designed for transparency and enterprise trust.
         </p>
      </div>
    </div>
  );
};
