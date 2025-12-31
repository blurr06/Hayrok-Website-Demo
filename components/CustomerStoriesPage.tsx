import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, TrendingDown, Target, Zap, ShieldCheck, 
  ArrowLeft, ArrowRight, Quote, BarChart3, 
  CheckCircle2, Clock, Globe, Database, 
  Lock, MessageSquare, Sparkles, Building2,
  Rocket, Server, Layout, ChevronRight, Activity,
  Search, FileText, Landmark, HeartPulse, Cloud,
  ClipboardCheck, TrendingUp
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

export const STORIES = [
  {
    id: 'bank-alpha',
    title: "Global Bank Alpha",
    subtitle: "Consolidating 1.2M monthly signals into validated decisions.",
    industry: "Financial Services",
    metric: "45%",
    metricLabel: "MTTC Reduction",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    description: "How a top-tier financial institution eliminated security noise and established an auditable system of record for CTEM using Hayrok Hive.",
    quote: "Hayrok gave our leadership the confidence to accept risks that scanners couldn't explain, and fix the paths that truly mattered.",
    author: "Chief Information Security Officer",
    tags: ["CTEM", "Governance", "AWS"],
    featured: true
  },
  {
    id: 'cloud-saas',
    title: "CloudSaaS Logistics",
    subtitle: "Securing the supply chain for 4,000+ enterprise clients.",
    industry: "Technology / SaaS",
    metric: "85%",
    metricLabel: "Noise Elimination",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    description: "Implementing policy-as-code gates in CI/CD pipelines to validate transitive dependency risk before deployment.",
    quote: "CodeFabrics turned our AppSec program from a checkbox exercise into a proactive risk-reduction engine.",
    author: "VP of Security Engineering",
    tags: ["AppSec", "Supply Chain", "CI/CD"],
    featured: false
  },
  {
    id: 'health-guard',
    title: "HealthGuard Systems",
    subtitle: "Validating clinical data isolation across multi-cloud.",
    industry: "Healthcare",
    metric: "0",
    metricLabel: "Unproven High Risks",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
    description: "Using Genesis autonomous validation to prove data residency and isolation policies meet strict HIPAA standards.",
    quote: "With Genesis, we stopped guessing if our cloud boundaries worked. We now have the evidence to prove it.",
    author: "Head of Infrastructure Security",
    tags: ["Validation", "Compliance", "Azure"],
    featured: false
  }
];

export const CustomerStoriesPage: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);

  const activeStory = STORIES.find(s => s.id === selectedStoryId);

  if (!selectedStoryId) {
    return (
      <div className="bg-[#FCFCFA] min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-24 overflow-x-hidden relative">
        <IntelligenceFabric density={1.2} isDark={false} />
        
        <section className="relative pt-48 pb-12 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-900 text-[10px] font-black shadow-sm mb-10 tracking-[0.4em] uppercase"
            >
              <Users size={12} className="text-hayrok-orange" />
              Ecosystem Success
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-[8rem] font-black tracking-tight leading-[0.9] text-slate-900 mb-10 uppercase"
            >
              Trust Powered <br/>
              <span className="text-hayrok-orange italic font-light tracking-tighter">By Proof.</span>
            </motion.h1>
            
            <motion.p 
              {...fadeInUp}
              className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium mb-20"
            >
              Learn how global organizations use Hayrok to turn security exposure into validated, defensible decisions.
            </motion.p>
          </div>
        </section>

        {/* Featured Story spotlight */}
        <section className="container mx-auto px-6 mb-32 relative z-10">
          {STORIES.filter(s => s.featured).map((story) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              onClick={() => setSelectedStoryId(story.id)}
              className="group relative bg-white border border-slate-200 rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row cursor-pointer hover:border-hayrok-orange/30 transition-all duration-700"
            >
              <div className="lg:w-1/2 relative overflow-hidden h-[400px] lg:h-auto">
                <img src={story.image} alt={story.title} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl">
                   <div className="flex items-center gap-4 text-white">
                      <div className="w-2.5 h-2.5 rounded-full bg-hayrok-orange animate-pulse" />
                      <span className="font-black uppercase tracking-widest text-xs">Featured Case Study</span>
                   </div>
                </div>
              </div>
              <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight uppercase tracking-tight">
                  {story.title}
                </h2>
                <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                  {story.description}
                </p>
                <div className="flex items-center gap-6">
                   <div className="text-5xl font-black text-hayrok-orange tracking-tighter">{story.metric}</div>
                   <div>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Key Outcome</p>
                     <p className="text-sm font-black text-slate-900 uppercase">{story.metricLabel}</p>
                   </div>
                   <div className="flex-1" />
                   <ArrowRight size={24} className="text-hayrok-orange group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Stories Grid */}
        <section className="container mx-auto px-6 relative z-10 pb-32">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {STORIES.filter(s => !s.featured).map((story, i) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedStoryId(story.id)}
                className="group bg-white border border-slate-200 rounded-[3.5rem] p-10 md:p-12 hover:shadow-2xl hover:border-hayrok-orange/30 transition-all duration-500 flex flex-col h-full cursor-pointer"
              >
                <div className="flex items-start justify-between mb-10">
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-hayrok-orange uppercase tracking-[0.4em]">{story.industry}</p>
                    <h3 className="text-3xl font-black text-slate-900 tracking-tight uppercase group-hover:text-hayrok-orange transition-colors">{story.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-hayrok-orange transition-all">
                    <ArrowRight size={24} />
                  </div>
                </div>
                
                <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10 flex-1">
                  {story.subtitle}
                </p>

                <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="text-3xl font-black text-hayrok-orange tracking-tighter">{story.metric}</div>
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest max-w-[80px] leading-tight">{story.metricLabel}</span>
                   </div>
                   <div className="flex gap-1.5">
                     {story.tags.map(tag => (
                       <span key={tag} className="px-2 py-1 bg-slate-50 rounded-md text-[8px] font-black text-slate-400 uppercase">{tag}</span>
                     ))}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // --- Detailed Story Deep Dive ---
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-24 overflow-x-hidden relative">
      <section className="relative pt-48 pb-24 overflow-hidden border-b border-slate-100">
        <IntelligenceFabric density={1} isDark={false} />
        <div className="container mx-auto px-6 relative z-10">
          <button 
            onClick={() => setSelectedStoryId(null)}
            className="flex items-center gap-2 text-slate-400 hover:text-hayrok-orange transition-colors font-black text-[10px] uppercase tracking-[0.5em] mb-12 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Library
          </button>

          <div className="max-w-5xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="px-5 py-1.5 bg-hayrok-dark text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                Case Study
              </span>
              <span className="text-hayrok-orange font-black text-[10px] uppercase tracking-widest">
                {activeStory?.industry}
              </span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] text-slate-900 mb-12 uppercase"
            >
              {activeStory?.title}
            </motion.h1>

            <div className="flex flex-wrap items-center gap-12 pt-10 border-t border-slate-100">
               <div className="flex items-center gap-6">
                  <div className="text-6xl font-black text-hayrok-orange tracking-tighter">{activeStory?.metric}</div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Key Outcome</p>
                    <p className="text-sm font-black text-slate-900 uppercase">{activeStory?.metricLabel}</p>
                  </div>
               </div>
               <div className="flex-1 hidden md:block" />
               <div className="flex gap-4">
                  {activeStory?.tags.map(tag => (
                    <div key={tag} className="px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-500">
                      {tag}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pt-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-start max-w-7xl mx-auto">
          
          <main className="lg:col-span-8 max-w-4xl">
            <div className="prose prose-slate prose-lg max-w-none prose-p:text-xl prose-p:leading-relaxed prose-p:text-slate-600 prose-strong:text-slate-900 prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight">
              
              <div className="p-12 md:p-16 bg-slate-50 border border-slate-100 rounded-[4rem] mb-20 relative overflow-hidden group shadow-sm">
                 <Quote className="text-hayrok-orange opacity-20 absolute -top-4 -left-4" size={120} />
                 <p className="text-3xl md:text-4xl font-black text-slate-900 mb-10 leading-tight italic relative z-10">
                   "{activeStory?.quote}"
                 </p>
                 <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-slate-200 border-2 border-white shadow-sm" />
                    <div>
                       <p className="text-sm font-black text-slate-900 uppercase tracking-tight">{activeStory?.author}</p>
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Decision Stakeholder</p>
                    </div>
                 </div>
              </div>

              <h2>The Challenge</h2>
              <p>
                Operating at global scale, {activeStory?.title} faced the classic "Visibility Paradox." Despite heavy investment in top-tier security tools, the volume of signals (over 1.2M monthly findings) overwhelmed the triage capacity of the SOC and security engineering teams.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 my-12">
                 {[
                   { l: "High Volume, Low Context", i: Activity },
                   { l: "Manual Triage Overload", i: Users },
                   { l: "Auditability Gaps", i: ClipboardCheck },
                   { l: "Validation Delay", i: Zap }
                 ].map((p, i) => (
                   <div key={i} className="flex gap-4 items-center p-6 bg-white border border-slate-200 rounded-3xl group hover:border-hayrok-orange transition-all shadow-sm">
                      <p.i size={20} className="text-hayrok-orange shrink-0" />
                      <span className="text-sm font-black text-slate-900 uppercase tracking-tight">{p.l}</span>
                   </div>
                 ))}
              </div>

              <h2>The Solution: Governed Integration</h2>
              <p>
                By deploying Hayrok Hive as the central decision layer and Genesis for autonomous validation, the institution established an auditable system of record for CTEM. This allowed them to move from guesswork to technical proof.
              </p>

              <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white my-16 relative overflow-hidden shadow-2xl">
                 <div className="absolute top-0 right-0 p-12 opacity-5">
                    <Database size={280} className="text-hayrok-orange" />
                 </div>
                 <div className="relative z-10">
                    <h3 className="text-hayrok-orange font-black text-sm mb-8 uppercase tracking-[0.4em]">Architecture Benefits</h3>
                    <div className="space-y-6">
                       {[
                         { t: "Hive: Context Correlation", d: "Unified telemetry into prioritized risk decisions." },
                         { t: "Genesis: Automated Proof", d: "Validated exploitability autonomously across VPC boundaries." },
                         { t: "Governance: Audit Trail", d: "Recorded rationale for every risk acceptance decision." }
                       ].map((item, i) => (
                         <div key={i} className="border-l-2 border-white/10 pl-6">
                            <p className="text-xl font-black uppercase mb-1">{item.t}</p>
                            <p className="text-slate-400 font-medium">{item.d}</p>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              <h2>The Outcome</h2>
              <p>
                The resulting impact was measured not in "alerts resolved" but in material risk reduced. MTTC (Mean Time to Contain) dropped by 45% as engineers focused strictly on proven attack paths.
              </p>
              <ul className="space-y-6 !m-0 mb-20 list-none p-0">
                {[
                  { t: "Board-Ready Reporting", d: "Moved from scan counts to evidence-based posture stories." },
                  { t: "50% Reduction in Noise", d: "Automated filtering of unproven theoretical risks." },
                  { t: "Immutable Audit Logs", d: "Decision state persistence for regulatory reviews." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-5 !m-0 p-0">
                    <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-hayrok-orange shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <p className="text-lg font-black text-slate-900 !m-0 uppercase tracking-tight">{item.t}</p>
                      <p className="text-sm text-slate-500 font-medium !m-0 uppercase">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-20 p-12 md:p-24 bg-hayrok-dark rounded-[4rem] text-white text-center relative overflow-hidden group shadow-2xl">
                  <div className="absolute inset-0 bg-grid-white opacity-5" />
                  <div className="relative z-10">
                    <h4 className="text-4xl md:text-5xl font-black mb-8 tracking-tight uppercase leading-[0.9]">Transform your <br/> <span className="text-hayrok-orange">Risk Outcome.</span></h4>
                    <p className="text-xl text-slate-400 font-medium mb-12 max-w-xl mx-auto leading-relaxed">
                      Experience the same risk-reduction engine used by industry leaders.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <button onClick={() => onNavigate?.('demo')} className="w-full sm:w-auto bg-hayrok-orange text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
                          Request a Technical Walkthrough
                        </button>
                    </div>
                  </div>
              </div>
            </div>
          </main>

          <aside className="lg:col-span-4 sticky top-32 space-y-12">
             <div className="p-10 bg-slate-50 border border-slate-100 rounded-[3rem]">
                <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-8 border-b border-slate-200 pb-4 flex items-center gap-2">
                   <Target size={14} className="text-hayrok-orange" /> Results Summary
                </h4>
                <div className="space-y-8">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Validated Metric</p>
                    <p className="text-4xl font-black text-slate-900 tracking-tighter">{activeStory?.metric}</p>
                    <p className="text-xs font-bold text-slate-500 uppercase">{activeStory?.metricLabel}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Platform Domain</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                       {["Multi-Cloud", "Identity Mesh", "CI/CD Gates"].map(tag => (
                         <span key={tag} className="px-2 py-1 bg-white border border-slate-200 rounded-md text-[9px] font-black uppercase">{tag}</span>
                       ))}
                    </div>
                  </div>
                </div>
             </div>

             <div className="p-10 bg-white border border-slate-200 rounded-[3rem] shadow-xl">
                <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-8">Next Step</h4>
                <div className="space-y-8">
                   <p className="text-sm font-medium text-slate-500 leading-relaxed">
                     Ready to see how Hive can normalize your exposure and Genesis can prove your risk?
                   </p>
                   <button onClick={() => onNavigate?.('demo')} className="w-full py-4 bg-hayrok-orange text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all">
                      Start Your Evaluation
                   </button>
                </div>
             </div>
          </aside>
        </div>
      </section>

      <div className="h-32 flex items-center justify-center border-t border-slate-100 bg-[#FCFCFA] mt-24">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            Success Record Archive. Published by Hayrok Research & Strategy. All metrics verified by internal audit trails.
         </p>
      </div>
    </div>
  );
};
