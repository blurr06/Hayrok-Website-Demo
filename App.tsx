import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, ChevronRight, TrendingDown, Target, Zap, Clock, 
  Users, BarChart3, Lock, ShieldCheck, MessageSquare, Quote,
  ArrowDown, ShieldAlert, Cpu, Gavel, XCircle, Search, Sparkles,
  Layers, Globe, Bot, Terminal, Code, Brain, Activity
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { PlatformOverview } from './components/PlatformOverview';
import { Footer } from './components/Footer';
import { ScorecardSection } from './components/ScorecardSection';
import { AboutUs } from './components/AboutUs';
import { ValuesPrinciples } from './components/ValuesPrinciples';
import { PricingSection } from './components/PricingSection';
import { ComparisonSection } from './components/ComparisonSection';
import { IndustriesSection } from './components/IndustriesSection';
import { IntegrationsSection } from './components/IntegrationsSection';
import { PlatformPage } from './components/PlatformPage';
import { HayAiSection } from './components/HayAiSection';
import { ROIMetrics } from './components/ROIMetrics';
import { LeadershipPage } from './components/LeadershipPage';
import { PartnersPage } from './components/PartnersPage';
import { PartnersIntegrationsPage } from './components/PartnersIntegrationsPage';
import { PartnersCSPPage } from './components/PartnersCSPPage';
import { PartnersMSSPPage } from './components/PartnersMSSPPage';
import { ContactPage } from './components/ContactPage';
import { NewsroomPage } from './components/NewsroomPage';
import { BecomePartnerPage } from './components/BecomePartnerPage';
import { CTEMLifecycle } from './components/CTEMLifecycle';
import { EarlyAdopterPage } from './components/EarlyAdopterPage';
import { HivePage } from './components/HivePage';
import { HayAiPage } from './components/HayAiPage';
import { DetectIqPage } from './components/DetectIqPage';
import { SurfaceIqPage } from './components/SurfaceIqPage';
import { GenesisPage } from './components/GenesisPage';
import { CodeFabricsPage } from './components/CodeFabricsPage';
import { RoadmapPage } from './components/RoadmapPage';
import { DemoPage } from './components/DemoPage';
import { TrustCenter } from './components/TrustCenter';
import { ResponsibleAiPolicy } from './components/ResponsibleAiPolicy';
import { ResourcesPage } from './components/ResourcesPage';
import { CareersPage } from './components/CareersPage';
import { ResellerPage } from './components/ResellerPage';
import { WhitepapersPage } from './components/WhitepapersPage';
import { BlogPage } from './components/BlogPage';
import { DatasheetsSolutionsPage } from './components/DatasheetsSolutionsPage';
import { VideoPodcastsPage } from './components/VideoPodcastsPage';
import { CustomerStoriesPage } from './components/CustomerStoriesPage';
import { ToursWalkthroughsPage } from './components/ToursWalkthroughsPage';
import { LearningCenter } from './components/LearningCenter';
import { ResponsibleAiBanner } from './components/ResponsibleAiBanner';

const VisibilityToValidation = () => (
  <section className="py-40 bg-[#050B1A] text-white relative overflow-hidden">
     {/* Concentric Orange Core Glow - intensive as requested */}
     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-full bg-[radial-gradient(circle_at_center,rgba(255,95,0,0.18)_0%,transparent_65%)] blur-[130px] pointer-events-none" />
     <div className="absolute top-0 right-0 w-[40%] h-full bg-[radial-gradient(circle_at_top_right,rgba(255,136,0,0.08)_0%,transparent_70%)] blur-[100px] pointer-events-none" />
     <div className="absolute inset-0 bg-grid-white opacity-[0.03] pointer-events-none" />
     
     <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
           <motion.div
             initial={{ opacity: 0, x: -40 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           >
              <h3 className="text-[11px] font-black text-hayrok-orange uppercase tracking-[0.6em] mb-12 opacity-80">What Is Hayrok?</h3>
              <p className="text-5xl md:text-[6.5rem] font-black mb-10 leading-[0.88] tracking-tighter uppercase">
                 From Visibility to <br/>
                 <span className="text-hayrok-orange italic font-light block mt-4">Validated Risk Reduction.</span>
              </p>
              <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed mb-16 max-w-xl">
                 Hayrok is a governed, AI-enabled security risk intelligence platform that helps organizations continuously identify, validate, and manage security exposure, turning fragmented security signals into auditable, decision-ready risk insights.
              </p>
              
              <div className="pt-4 max-w-lg">
                 <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[3.5rem] backdrop-blur-3xl hover:border-hayrok-orange/30 transition-all shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-hayrok-orange/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <p className="text-2xl font-bold text-white italic mb-4 leading-tight relative z-10">"Hayrok does not replace your existing security tools."</p>
                    <p className="text-base text-slate-500 font-medium leading-relaxed relative z-10">It connects them, validates their findings, and governs the decisions that follow.</p>
                 </div>
              </div>
           </motion.div>

           <div className="grid gap-6">
              {[
                { 
                  q: "What did we find?", 
                  a: "Most security platforms stop here.", 
                  color: "text-slate-600",
                  active: false
                },
                { 
                  q: "What is actually exploitable?", 
                  a: "Hayrok provides technical proof through validation.", 
                  color: "text-hayrok-orange",
                  active: true
                },
                { 
                  q: "How is our risk changing over time?", 
                  a: "Continuous tracking driven by proof, not assumptions.", 
                  color: "text-hayrok-orange",
                  active: true
                }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
                  className={`relative p-10 md:p-12 bg-white/[0.02] border border-white/5 rounded-[3.5rem] backdrop-blur-3xl group hover:bg-white/[0.04] hover:border-white/10 transition-all cursor-default shadow-2xl overflow-hidden`}
                >
                   {item.active && (
                     <div className="absolute inset-0 bg-gradient-to-r from-hayrok-orange/[0.015] via-transparent to-transparent pointer-events-none" />
                   )}
                   <p className={`text-2xl md:text-3xl font-black mb-4 tracking-tight ${item.color}`}>
                     {item.q}
                   </p>
                   <p className="text-slate-500 font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] leading-relaxed">
                     {item.a}
                   </p>
                </motion.div>
              ))}
           </div>
        </div>
     </div>
  </section>
);

const HayAiBrain = () => (
  <section className="py-32 bg-[#020617] relative overflow-hidden">
     {/* Massive Central Brain Glow */}
     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[80%] bg-hayrok-orange/15 blur-[160px] rounded-full pointer-events-none animate-pulse-slow" />
     <div className="absolute inset-0 bg-grid-white opacity-[0.02] pointer-events-none" />
     
     <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
           <div className="bg-white/[0.01] border border-white/5 rounded-[4rem] p-12 md:p-24 backdrop-blur-3xl shadow-2xl relative overflow-hidden group border-hayrok-orange/20">
              {/* Internal Accent Glow */}
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-hayrok-orange/10 blur-[100px] rounded-full opacity-50" />
              
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                 <div className="relative order-2 lg:order-1">
                    <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
                       <div className="absolute inset-0 bg-hayrok-orange/5 blur-3xl animate-pulse" />
                       <motion.div 
                         animate={{ y: [0, -15, 0] }}
                         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                         className="relative z-10 w-64 h-64 bg-slate-900 border border-hayrok-orange/40 rounded-[3rem] shadow-[0_0_80px_rgba(255,95,0,0.3)] flex items-center justify-center"
                       >
                          <Brain size={120} className="text-hayrok-orange opacity-90" strokeWidth={1} />
                          {/* Animated "neurons" */}
                          <div className="absolute inset-0">
                             {[...Array(4)].map((_, i) => (
                               <motion.div 
                                 key={i}
                                 animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.4, 0.1] }}
                                 transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-hayrok-orange/20 rounded-full"
                               />
                             ))}
                          </div>
                       </motion.div>
                       
                       {/* Decision Nodes */}
                       {[
                         { icon: ShieldCheck, label: "Policy", pos: "-top-8 -left-8" },
                         { icon: Target, label: "Validation", pos: "-top-8 -right-8" },
                         { icon: Activity, label: "Proof", pos: "-bottom-8 -left-8" },
                         { icon: BarChart3, label: "Intelligence", pos: "-bottom-8 -right-8" }
                       ].map((node, i) => (
                         <div key={i} className={`absolute ${node.pos} p-5 bg-slate-900 border border-white/10 rounded-2xl shadow-xl flex flex-col items-center gap-2 group-hover:scale-110 transition-transform duration-500`}>
                            <node.icon size={20} className="text-hayrok-orange" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">{node.label}</span>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="order-1 lg:order-2">
                    <div className="inline-flex items-center gap-3 bg-hayrok-orange/10 border border-hayrok-orange/20 px-5 py-2 rounded-2xl text-hayrok-orange text-[10px] font-black uppercase tracking-[0.5em] mb-12">
                       <Bot size={18} /> The Reasoning Core
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tight leading-[0.9] uppercase">
                       Hay‑AI: <br/> <span className="text-hayrok-orange italic font-light">The Brain.</span>
                    </h2>
                    <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                       Unlike basic automation, Hay‑AI operates as a recursive reasoning engine. It builds complex attack graphs to understand transitive trust and evidence-based risk—ensuring every decision is governed and auditable.
                    </p>
                    
                    <div className="space-y-6">
                       {[
                         { l: "Recursive Logic", d: "Maps compounding risk across code and cloud." },
                         { l: "Policy-Bound", d: "Automation strictly confined by OPA rules." },
                         { l: "Evidence-Driven", d: "Never assumes; always validates with technical proof." }
                       ].map((item, i) => (
                         <div key={i} className="flex gap-5 group/item">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-hayrok-orange group-hover/item:bg-hayrok-orange group-hover/item:text-white transition-all">
                               <Sparkles size={18} />
                            </div>
                            <div>
                               <p className="font-black text-white text-lg tracking-tight uppercase">{item.l}</p>
                               <p className="text-slate-500 text-sm font-medium">{item.d}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </section>
);

const OutcomesAndAudience = () => (
  <section className="py-32 bg-slate-50">
     <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
           <div className="p-12 bg-white border border-slate-200 rounded-[4rem]">
              <h4 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-12">Who Uses Hayrok</h4>
              <div className="grid gap-2">
                 {[
                   "Security operations and engineering",
                   "Threat exposure and risk management",
                   "Application and product security",
                   "GRC and compliance",
                   "Managed security service providers"
                 ].map((p, i) => (
                    <div key={i} className="flex items-center gap-4 py-5 border-b border-slate-100 last:border-0">
                       <div className="w-1.5 h-1.5 rounded-full bg-hayrok-orange" />
                       <span className="text-lg font-black text-slate-900 tracking-tight uppercase">{p}</span>
                    </div>
                 ))}
              </div>
           </div>
           <div className="p-12 bg-slate-900 text-white rounded-[4rem] relative overflow-hidden flex flex-col justify-center shadow-2xl">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                 <ShieldCheck size={320} className="text-hayrok-orange" />
              </div>
              <h4 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-12 relative z-10">Outcome-Focused Security</h4>
              <div className="space-y-10 relative z-10">
                 {[
                   { t: "Distinguish Risk", d: "Distinguish practical risk from theoretical exposure." },
                   { t: "Prioritize Action", d: "Prioritize remediation using validation and context." },
                   { t: "Track reduction", d: "Track risk reduction over time." },
                   { t: "Communicate clearly", d: "Communicate security posture in business-relevant terms." }
                 ].map((o, i) => (
                    <div key={i}>
                       <p className="text-hayrok-orange font-black uppercase text-[10px] tracking-[0.3em] mb-2">{o.t}</p>
                       <p className="text-2xl font-bold text-white leading-tight">{o.d}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="max-w-5xl mx-auto p-12 md:p-24 bg-white border border-slate-200 rounded-[5rem] text-center relative overflow-hidden group shadow-xl">
           <div className="flex justify-center mb-12">
              <div className="px-6 py-2 bg-slate-50 rounded-full border border-slate-100 shadow-sm flex items-center gap-3">
                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Gartner-Aligned. Enterprise-Ready.</span>
              </div>
           </div>
           <p className="text-3xl md:text-5xl font-black text-slate-900 mb-12 leading-[1.1] italic tracking-tighter">
              “Hayrok supports CTEM and BAS by converting exposure data into <span className="text-hayrok-orange">governed, auditable security risk intelligence.</span>”
           </p>
           <div className="flex flex-wrap justify-center gap-10">
              {["CTEM", "BAS", "Decision Intelligence", "Governed AI"].map(tag => (
                 <span key={tag} className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-hayrok-orange" /> {tag}
                 </span>
              ))}
           </div>
        </div>
     </div>
  </section>
);

const FinalCTA = ({ onNavigate }: { onNavigate: (page: string) => void }) => (
  <section className="py-40 relative overflow-hidden bg-white text-center border-t border-slate-100">
     <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-[7rem] font-black mb-10 tracking-tighter leading-[0.85] text-slate-900 uppercase">
          Ready to <br/>
          <span className="text-hayrok-orange italic font-light">Get Started?</span>
        </h2>
        <p className="text-xl md:text-2xl text-slate-500 mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
           Learn how Hayrok supports CTEM and security validation through governed, AI-driven automation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
           <button onClick={() => onNavigate('demo')} className="w-full sm:w-auto bg-hayrok-orange text-white px-16 py-8 rounded-[2rem] font-black text-xl hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/40">
              Request a Demo
           </button>
           <button onClick={() => onNavigate('platform')} className="w-full sm:w-auto px-16 py-8 rounded-[2rem] font-black text-xl text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all bg-white shadow-xl">
              Explore the Platform
           </button>
           <button onClick={() => onNavigate('contact')} className="w-full sm:w-auto px-16 py-8 rounded-[2rem] font-black text-xl text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-xl">
              Contact Us
           </button>
        </div>
        
        <div className="mt-32 max-w-4xl mx-auto">
           <div className="h-px w-full bg-slate-100 mb-10" />
           <p className="text-hayrok-orange font-black text-3xl md:text-5xl tracking-tighter italic leading-tight">
             "Hayrok turns exposure visibility into validated, defensible security decisions."
           </p>
           <p className="mt-4 text-[10px] font-black text-slate-400 uppercase tracking-[1em]">One Line to Remember</p>
        </div>
     </div>
  </section>
);

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'hive': return <HivePage onNavigate={setCurrentPage} />;
      case 'hay-ai': return <HayAiPage onNavigate={setCurrentPage} />;
      case 'detectiq': return <DetectIqPage onNavigate={setCurrentPage} />;
      case 'surfaceiq': return <SurfaceIqPage onNavigate={setCurrentPage} />;
      case 'genesis': return <GenesisPage onNavigate={setCurrentPage} />;
      case 'codefabrics': return <CodeFabricsPage onNavigate={setCurrentPage} />;
      case 'roadmap': return <RoadmapPage onNavigate={setCurrentPage} />;
      case 'demo': return <DemoPage onNavigate={setCurrentPage} />;
      case 'trust-center': return <TrustCenter onNavigate={setCurrentPage} />;
      case 'responsible-ai-policy': return <ResponsibleAiPolicy onNavigate={setCurrentPage} />;
      case 'resources': return <ResourcesPage onNavigate={setCurrentPage} />;
      case 'blog': return <BlogPage onNavigate={setCurrentPage} />;
      case 'whitepapers': return <WhitepapersPage onNavigate={setCurrentPage} />;
      case 'datasheets': return <DatasheetsSolutionsPage onNavigate={setCurrentPage} />;
      case 'multimedia': return <VideoPodcastsPage onNavigate={setCurrentPage} />;
      case 'customer-stories': return <CustomerStoriesPage onNavigate={setCurrentPage} />;
      case 'tours': return <ToursWalkthroughsPage onNavigate={setCurrentPage} />;
      case 'learning-center': return <LearningCenter onNavigate={setCurrentPage} />;
      case 'careers': return <CareersPage onNavigate={setCurrentPage} />;
      case 'resellers': return <ResellerPage onNavigate={setCurrentPage} />;
      case 'about': return <AboutUs />;
      case 'leadership': return <LeadershipPage onNavigate={setCurrentPage} />;
      case 'partners': return <PartnersPage onNavigate={setCurrentPage} />;
      case 'partners-integrations': return <PartnersIntegrationsPage onNavigate={setCurrentPage} />;
      case 'partners-csps': return <PartnersCSPPage onNavigate={setCurrentPage} />;
      case 'partners-mssps': return <PartnersMSSPPage onNavigate={setCurrentPage} />;
      case 'become-partner': return <BecomePartnerPage />;
      case 'early-adopter': return <EarlyAdopterPage />;
      case 'contact': return <ContactPage />;
      case 'newsroom': return <NewsroomPage />;
      case 'values': return <ValuesPrinciples />;
      case 'platform': return <PlatformPage onNavigate={setCurrentPage} />;
      case 'pricing': return <div className="pt-20"><PricingSection /><FinalCTA onNavigate={setCurrentPage} /></div>;
      case 'industries': return <div className="pt-20"><IndustriesSection /><FinalCTA onNavigate={setCurrentPage} /></div>;
      case 'comparison': return <div className="pt-20"><ComparisonSection /><FinalCTA onNavigate={setCurrentPage} /></div>;
      case 'roi': return <div className="pt-20"><ROIMetrics /><FinalCTA onNavigate={setCurrentPage} /></div>;
      case 'home':
      default:
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <ResponsibleAiBanner onClick={() => setCurrentPage('responsible-ai-policy')} />
            <IntegrationsSection condensed={true} />
            <ProblemSection />
            <VisibilityToValidation />
            <HayAiBrain />
            <CTEMLifecycle />
            <PlatformOverview onNavigate={setCurrentPage} />
            <HayAiSection />
            <ROIMetrics />
            <OutcomesAndAudience />
            <FinalCTA onNavigate={setCurrentPage} />
          </>
        );
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-hayrok-orange selection:text-white overflow-x-hidden font-sans">
      <Navbar onNavigate={setCurrentPage} activePage={currentPage} />
      <main className="relative z-10">{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;