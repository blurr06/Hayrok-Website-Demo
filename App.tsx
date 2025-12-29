import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, ChevronRight, TrendingDown, Target, Zap, Clock, 
  Users, BarChart3, Lock, ShieldCheck, MessageSquare, Quote,
  ArrowDown, ShieldAlert, Cpu, Gavel, XCircle, Search, Sparkles
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorks } from './components/HowItWorks';
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

const VisibilityToValidation = () => (
  <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
     <div className="absolute inset-0 bg-grid-white opacity-5" />
     <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <div>
              <h3 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.5em] mb-10">What Is Hayrok?</h3>
              <p className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                 From Visibility to <br/><span className="text-hayrok-orange italic">Validated Risk Reduction.</span>
              </p>
              <p className="text-xl text-slate-400 font-medium leading-relaxed mb-10">
                 Hayrok is a governed, AI-driven Security Risk Intelligence platform that helps organizations continuously identify, validate, and manage security exposure using transparent, auditable automation.
              </p>
              <div className="space-y-6">
                 <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                    <p className="text-lg font-bold text-white italic mb-2">"Hayrok does not replace your existing security tools."</p>
                    <p className="text-sm text-slate-400">It connects them, validates their findings, and governs the decisions that follow.</p>
                 </div>
              </div>
           </div>
           <div className="grid gap-6">
              {[
                { q: "What did we find?", a: "Most security platforms stop here.", color: "text-slate-500" },
                { q: "What is actually exploitable?", a: "Hayrok provides technical proof through validation.", color: "text-hayrok-orange" },
                { q: "How is our risk changing over time?", a: "Continuous tracking driven by proof, not assumptions.", color: "text-hayrok-orange" }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] group hover:bg-white/10 transition-all">
                   <p className={`text-xl font-black mb-1 ${item.color}`}>{item.q}</p>
                   <p className="text-slate-400 font-medium">{item.a}</p>
                </div>
              ))}
           </div>
        </div>
     </div>
  </section>
);

const OutcomesAndAudience = () => (
  <section className="py-32 bg-white">
     <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
           <div className="p-12 bg-slate-50 border border-slate-100 rounded-[4rem]">
              <h4 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-10">Who Uses Hayrok</h4>
              <div className="grid gap-4">
                 {[
                   "Security operations and engineering",
                   "Threat exposure and risk management",
                   "Application and product security",
                   "GRC and compliance",
                   "Managed security service providers"
                 ].map((p, i) => (
                    <div key={i} className="flex items-center gap-4 py-4 border-b border-slate-200 last:border-0">
                       <CheckCircle2 size={18} className="text-hayrok-orange" />
                       <span className="text-lg font-black text-slate-900 tracking-tight uppercase text-sm">{p}</span>
                    </div>
                 ))}
              </div>
           </div>
           <div className="p-12 bg-slate-900 text-white rounded-[4rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                 <ShieldCheck size={240} className="text-hayrok-orange" />
              </div>
              <h4 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-10 relative z-10">Outcome-Focused Security</h4>
              <div className="space-y-8 relative z-10">
                 {[
                   { t: "Practical vs Theoretical", d: "Distinguish practical risk from theoretical exposure." },
                   { t: "Validated Remediation", d: "Prioritize remediation using validation and context." },
                   { t: "Measurable Change", d: "Track risk reduction over time." },
                   { t: "Executive Oversight", d: "Communicate posture in clear, business-relevant terms." }
                 ].map((o, i) => (
                    <div key={i}>
                       <p className="text-hayrok-orange font-black uppercase text-xs tracking-widest mb-1">{o.t}</p>
                       <p className="text-xl font-bold text-white">{o.d}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="max-w-4xl mx-auto p-12 md:p-24 bg-[#F8F9F5] border border-slate-200 rounded-[5rem] text-center">
           <div className="flex justify-center mb-10">
              <div className="px-6 py-2 bg-white rounded-full border border-slate-200 shadow-sm flex items-center gap-3">
                 <span className="text-[10px] font-black uppercase tracking-widest">Gartner-Aligned. Enterprise-Ready.</span>
              </div>
           </div>
           <p className="text-3xl md:text-5xl font-black text-slate-900 mb-12 leading-[1.1] italic">
              “Hayrok supports Continuous Threat Exposure Management and Breach and Attack Simulation by converting continuous exposure and exploitability data into <span className="text-hayrok-orange">governed, auditable security risk intelligence.</span>”
           </p>
           <div className="flex flex-wrap justify-center gap-10">
              {["CTEM", "BAS", "Decision Intelligence", "Governed AI"].map(tag => (
                 <span key={tag} className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-hayrok-orange" /> {tag}
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
        <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tight leading-[0.9] text-slate-900 uppercase">
          Ready to <br/>
          <span className="text-hayrok-orange italic">Get Started?</span>
        </h2>
        <p className="text-xl md:text-2xl text-slate-500 mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
           Learn how Hayrok supports CTEM and security validation through governed, AI-driven automation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
           <button onClick={() => onNavigate('demo')} className="w-full sm:w-auto bg-hayrok-orange text-white px-16 py-8 rounded-[2rem] font-black text-2xl hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
              Request a Demo
           </button>
           <button onClick={() => onNavigate('platform')} className="w-full sm:w-auto px-16 py-8 rounded-[2rem] font-black text-2xl text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all bg-white shadow-xl">
              Explore the Platform
           </button>
           <button onClick={() => onNavigate('contact')} className="w-full sm:w-auto px-16 py-8 rounded-[2rem] font-black text-2xl text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-xl">
              Contact Us
           </button>
        </div>
        <p className="mt-20 text-hayrok-orange font-black text-2xl tracking-tighter italic">One Line to Remember: Hayrok turns exposure visibility into validated, defensible security risk decisions.</p>
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
      case 'whitepapers': return <WhitepapersPage onNavigate={setCurrentPage} />;
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
            <IntegrationsSection condensed={true} />
            <ProblemSection />
            <VisibilityToValidation />
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