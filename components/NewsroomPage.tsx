
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Megaphone, Calendar, ShieldAlert, Newspaper, 
  ArrowRight, Globe, Zap, Bot, Code, 
  MapPin, Users, MessageSquare, ExternalLink,
  ChevronRight, Sparkles, ShieldCheck, TrendingUp,
  Lock, Search, Share2, Mail, CheckCircle2,
  FileText, AlertCircle, Quote
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
      staggerChildren: 0.1
    }
  }
};

const NewsCard = ({ category, title, desc, items, quote, icon: Icon, accent }: any) => (
  <motion.div 
    variants={fadeInUp}
    className="group bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 hover:shadow-2xl hover:border-hayrok-orange/30 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
      <Icon size={120} />
    </div>
    
    <div className="flex items-center gap-3 mb-8">
      <div className={`p-3 rounded-xl ${accent} text-white shadow-lg`}>
        <Icon size={20} />
      </div>
      <span className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.3em]">{category}</span>
    </div>
    
    <h3 className="text-3xl font-black text-slate-900 mb-6 leading-tight group-hover:text-hayrok-orange transition-colors">
      {title}
    </h3>
    
    <p className="text-slate-600 text-lg font-medium leading-relaxed mb-8">
      {desc}
    </p>
    
    {items && (
      <div className="space-y-4 mb-10 flex-1">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Key Focus Areas</p>
        <div className="grid gap-3">
          {items.map((item: string, i: number) => (
            <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
              <CheckCircle2 size={16} className="text-hayrok-orange shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    )}

    {quote && (
      <div className="mt-auto pt-8 border-t border-slate-100">
        <p className="text-xl font-black text-slate-900 italic leading-tight mb-4">
          “{quote.text}”
        </p>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">— {quote.author}</p>
      </div>
    )}
  </motion.div>
);

const BreachInsight = ({ title, category, findings, impact, perspective }: any) => (
  <motion.div 
    variants={fadeInUp}
    className="bg-slate-50 border border-slate-200 rounded-[3rem] p-8 md:p-12 mb-8 hover:bg-white hover:shadow-xl transition-all duration-500 group"
  >
    <div className="grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-7">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-sm shadow-red-500/50" />
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{category}</span>
        </div>
        <h4 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">{title}</h4>
        
        <div className="space-y-8">
          <div>
            <p className="text-[9px] font-black text-red-500 uppercase tracking-widest mb-4">Root Causes</p>
            <div className="flex flex-wrap gap-3">
              {findings.map((f: string, i: number) => (
                <span key={i} className="px-4 py-2 bg-red-50 text-red-600 rounded-xl text-xs font-bold border border-red-100">
                  {f}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-4">Why This Matters</p>
            <p className="text-lg text-slate-700 font-medium leading-relaxed italic">
              "{impact}"
            </p>
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-5">
        <div className="h-full bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden flex flex-col justify-between group-hover:shadow-2xl transition-all shadow-black/20">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <ShieldCheck size={80} className="text-hayrok-orange" />
          </div>
          <div>
            <div className="flex items-center gap-3 text-hayrok-orange mb-6">
              <Bot size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Hayrok Perspective</span>
            </div>
            <p className="text-base text-slate-300 font-medium leading-relaxed mb-6">
              {perspective}
            </p>
          </div>
          <div className="pt-6 border-t border-white/10">
            <p className="text-[9px] font-black text-hayrok-orange uppercase tracking-widest">Structural Lesson</p>
            <p className="text-sm font-bold text-white mt-2 leading-snug">
              Breaches rarely come from unknown vulnerabilities. They come from known exposure that wasn’t treated as real risk.
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export const NewsroomPage: React.FC = () => {
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
            <Newspaper size={12} className="animate-pulse" />
            Intelligence & Press
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.95] tracking-tight text-slate-900">
            News, Insights, and <br/>
            <span className="bg-gradient-to-r from-hayrok-orange to-indigo-600 bg-clip-text text-transparent italic tracking-tighter">Events from Hayrok.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-4xl mx-auto">
            Stay up to date with Hayrok announcements, industry events, and critical cybersecurity developments shaping how organizations think about risk, AI, and trust.
          </p>
        </div>
      </section>

      {/* Quick Navigation Highlights */}
      <section className="container mx-auto px-6 mb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { label: "Hayrok News", desc: "Company news and milestones.", icon: Megaphone },
            { label: "Conferences", desc: "Showcasing the platform globally.", icon: Calendar },
            { label: "Breach Analysis", desc: "Risk and governance lens.", icon: ShieldAlert }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-slate-50 border border-slate-200 rounded-3xl flex items-center gap-4 hover:bg-white hover:shadow-lg transition-all cursor-pointer group">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-hayrok-orange shadow-sm group-hover:bg-hayrok-orange group-hover:text-white transition-all">
                <item.icon size={20} />
              </div>
              <div>
                <h4 className="font-black text-slate-900 text-sm uppercase tracking-widest">{item.label}</h4>
                <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hayrok News Section */}
      <section className="container mx-auto px-6 mb-48 relative z-10">
        <div className="flex items-center gap-6 mb-16">
          <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.5em] shrink-0">Hayrok News</span>
          <div className="h-px w-full bg-slate-100" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <NewsCard 
            category="Company Announcement"
            title="Hayrok Introduces Governed Agentic AI for Security"
            desc="Hayrok announced the launch of its agentic AI security platform designed to be governed, accountable, and auditable by default — addressing a growing gap in enterprise and regulated environments."
            items={[
              "Continuous Threat Exposure Management (Hive)",
              "Autonomous security validation (Genesis)",
              "Software and supply‑chain governance (CodeFabrics)"
            ]}
            quote={{ text: "AI is inevitable in security. Unaccountable AI is not.", author: "Hayrok Leadership" }}
            icon={Bot}
            accent="bg-hayrok-orange"
          />
          <NewsCard 
            category="Product Update"
            title="Hayrok Expands Platform Roadmap with DetectIQ and SurfaceIQ"
            desc="Introducing roadmap expansion built on the same governed AI foundation as the core platform, extending our ability to connect high-velocity exposure to real business impact."
            items={[
              "DetectIQ (Intelligent threat detection)",
              "SurfaceIQ (Attack surface intelligence)",
              "Unified Exposure-to-Impact reasoning"
            ]}
            icon={Zap}
            accent="bg-indigo-600"
          />
        </div>
      </section>

      {/* Events & Conferences Section */}
      <section className="container mx-auto px-6 mb-48 relative z-10">
        <div className="bg-slate-900 rounded-[4rem] p-10 md:p-24 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />
          <div className="grid lg:grid-cols-12 gap-16 items-start relative z-10">
            <div className="lg:col-span-5">
              <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-8">Meet the Team</h3>
              <h4 className="text-4xl md:text-6xl font-black mb-10 tracking-tight leading-tight">
                Upcoming <br/> <span className="text-slate-400 italic">Conferences.</span>
              </h4>
              <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                We regularly engage with security leaders and practitioners at major industry events to discuss responsible AI and the future of autonomous security.
              </p>
              
              <div className="space-y-4">
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Additional Forums</p>
                <div className="flex flex-wrap gap-3">
                  {["Cloud & SaaS Forums", "Responsible AI Summits", "MSSP Ecosystem Events"].map((tag, idx) => (
                    <span key={idx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {/* Featured Event: Web Summit */}
              <div className="bg-white rounded-[3rem] p-8 md:p-12 text-slate-900 shadow-2xl group border border-white/10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 pb-8 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm">
                      <Globe size={28} />
                    </div>
                    <div>
                      <h5 className="text-2xl font-black">Web Summit</h5>
                      <p className="text-sm font-bold text-slate-500">Lisbon, Portugal</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="px-4 py-1.5 bg-emerald-50 text-emerald-600 text-[10px] font-black rounded-full uppercase tracking-widest border border-emerald-100 mb-2">Upcoming</span>
                    <span className="text-xs font-bold text-slate-400">Exhibiting / Showcasing</span>
                  </div>
                </div>
                <p className="text-lg text-slate-600 font-medium mb-10 leading-relaxed">
                  Hayrok will be showcasing its governed agentic AI security platform, engaging with global technology leaders on how AI can operate responsibly in high‑risk environments.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {["Governed AI vs black‑box", "Reducing real risk, not noise", "AI accountability in regulated industries"].map((point, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-800">
                      <CheckCircle2 size={16} className="text-hayrok-orange" />
                      {point}
                    </div>
                  ))}
                </div>
                <button className="inline-flex items-center gap-2 text-hayrok-orange font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                  Schedule time with our team at Web Summit <ArrowRight size={16} />
                </button>
              </div>

              {/* RSA Event */}
              <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 group hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-4">
                    <Lock size={20} className="text-slate-400" />
                    <h5 className="text-xl font-black">RSA Conference (Planned)</h5>
                  </div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">San Francisco, CA</span>
                </div>
                <p className="text-sm font-medium text-slate-400">Planned participation in major cybersecurity forums to share insights on agentic AI operations and audit-ready autonomous systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity News Section */}
      <section className="container mx-auto px-6 mb-48 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-8">Breach Intelligence</h2>
          <h3 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">Major Incidents — <br/><span className="text-hayrok-orange italic">Through a Risk Lens.</span></h3>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            We curate important disclosures not to sensationalize, but to highlight what actually failed, why it mattered, and how risk could have been reduced.
          </p>
        </div>

        <div className="space-y-8">
          <BreachInsight 
            title="Enterprise SaaS Data Exposure"
            category="Industry News"
            findings={["Exposed credentials", "Misconfigured cloud resources", "Inadequate validation of attack paths"]}
            impact="Exposure existed long before exploitation. Alerts were present, but exploitability was unclear. Risk was not validated end‑to‑end."
            perspective="Security tools flagged issues — but no system validated the real attack path or tracked risk reduction over time."
          />
          
          <BreachInsight 
            title="Supply‑Chain Risk Continues to Rise"
            category="Industry Trend"
            findings={["Third‑party dependencies", "CI/CD pipelines", "Shared libraries & build processes"]}
            impact="Visibility without governance is not enough. Organizations need supply-chain intelligence and policy-driven controls before release."
            perspective="Detecting a vulnerability in a library is step one. Reasoning about its reachability in your specific build is where Hayrok adds value."
          />
          
          <BreachInsight 
            title="Identity & Access Misuse Peaks"
            category="Industry Insight"
            findings={["Credential abuse", "Identity misconfiguration", "Privilege sprawl"]}
            impact="Identity is often the bridge between exposure and impact — and yet remains poorly validated across traditional security tools."
            perspective="Hay-AI maps the transitive trust of identities, proving exactly how a compromised key translates into business impact."
          />
        </div>

        <div className="mt-24 p-12 bg-slate-50 border border-slate-200 rounded-[4rem] text-center max-w-5xl mx-auto">
          <h4 className="text-2xl font-black text-slate-900 mb-8">Why we share these insights.</h4>
          <div className="grid md:grid-cols-4 gap-8">
            {["Context over Noise", "Insight over Fear", "Actionable Lessons", "Risk Ownership Focus"].map((text, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-hayrok-orange" />
                <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Connected CTA */}
      <section className="container mx-auto px-6 mb-48 relative z-10 text-center">
        <motion.div {...fadeInUp} className="max-w-6xl mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-32 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-grid-white opacity-5" />
          <div className="absolute top-[-50%] left-[-10%] right-[-10%] h-full bg-[radial-gradient(ellipse_at_center,rgba(255,95,0,0.1)_0%,transparent_70%)] blur-[100px]" />
          
          <div className="relative z-10">
             <h3 className="text-4xl md:text-7xl font-black mb-12 tracking-tight leading-tight">Stay Connected.</h3>
             <p className="text-xl md:text-2xl text-slate-400 font-medium mb-16 max-w-3xl mx-auto">
               Follow our mission to transform security outcomes through trusted intelligence and responsible AI.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                {[
                  { label: "Follow on LinkedIn", icon: Users },
                  { label: "Subscribe to Updates", icon: Mail },
                  { label: "Meet us at Events", icon: Calendar },
                  { label: "Request a Demo", icon: Bot }
                ].map((social, i) => (
                  <button key={i} className="flex items-center justify-center gap-3 px-6 py-5 bg-white/5 border border-white/10 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white/10 hover:border-hayrok-orange/30 transition-all group">
                     <social.icon size={16} className="text-hayrok-orange group-hover:scale-110 transition-transform" />
                     {social.label}
                  </button>
                ))}
             </div>
             
             <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="bg-hayrok-orange text-white px-16 py-8 rounded-[2rem] font-black text-2xl hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/30">
                   Contact Us
                </button>
                <button className="bg-white text-hayrok-dark px-16 py-8 rounded-[2rem] font-black text-2xl hover:bg-slate-100 transition-all shadow-xl">
                   Request a Demo
                </button>
             </div>
          </div>
        </motion.div>
        
        <div className="mt-20 space-y-4">
          <p className="text-slate-400 font-black text-[11px] uppercase tracking-[0.8em]">Security news should inform better decisions — not just report failures.</p>
          <p className="text-hayrok-orange font-black text-lg italic tracking-tight">Hayrok exists to change the outcome of the next headline.</p>
        </div>
      </section>

      <div className="h-32"></div>
    </div>
  );
};
