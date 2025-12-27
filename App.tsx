import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, ChevronRight, TrendingDown, Target, Zap, Clock, 
  Users, BarChart3, Lock, ShieldCheck, MessageSquare, Quote
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

const RocketIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
    <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"></path>
    <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"></path>
  </svg>
);

const ROISection = () => (
  <section className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
     <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
           <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-4">Outcome-Focused Security</h2>
           <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Measurable <span className="text-hayrok-orange italic">Risk Reduction</span></h3>
           <p className="text-slate-500 text-lg font-medium">Communicate security posture in business‑relevant terms to technical and executive stakeholders.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { label: "Reduction in exploitable risk", val: "35–50%", icon: TrendingDown },
             { label: "Reduction in manual triage", val: "40–60%", icon: Zap },
             { label: "Increase in secure release rate", val: "25–35%", icon: RocketIcon },
             { label: "Reduction in audit effort", val: "50–70%", icon: ShieldCheck }
           ].map((stat, i) => (
             <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:bg-white hover:shadow-xl transition-all group">
                <div className="p-3 bg-orange-50 rounded-2xl inline-flex text-hayrok-orange mb-6 group-hover:bg-hayrok-orange group-hover:text-white transition-all">
                   <stat.icon size={24} />
                </div>
                <div className="text-4xl font-black text-slate-900 mb-2">{stat.val}</div>
                <p className="text-slate-400 font-bold text-sm uppercase tracking-tight leading-tight">{stat.label}</p>
             </div>
           ))}
        </div>
     </div>
  </section>
);

const WhoItIsFor = () => (
  <section className="py-32 bg-slate-50 border-t border-slate-100">
     <div className="container mx-auto px-6">
        <div className="text-center mb-20">
           <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-4">Adoption Verticals</h2>
           <h3 className="text-4xl md:text-6xl font-black text-slate-900">Built for <span className="text-slate-400 italic">High-Stakes Teams</span></h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { title: "Enterprise SecOps", icon: BarChart3, desc: "Distinguish practical risk from theoretical noise at scale." },
             { title: "Regulated Orgs", icon: Lock, desc: "Auditable, evidence-backed security decisions by default." },
             { title: "Managed Services (MSSPs)", icon: Zap, desc: "Deliver higher-value security outcomes through automated validation." }
           ].map((p, i) => (
             <div key={i} className="p-8 border border-slate-200 rounded-[2.5rem] bg-white hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-hayrok-orange mb-6 group-hover:bg-hayrok-orange group-hover:text-white transition-all">
                   <p.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{p.title}</h4>
                <p className="text-slate-400 font-medium leading-relaxed">{p.desc}</p>
             </div>
           ))}
        </div>
     </div>
  </section>
);

const CustomerVoice = () => (
  <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
     <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
           <Quote size={80} className="text-hayrok-orange opacity-20 mb-8" />
           <div className="space-y-16">
              <div>
                 <p className="text-3xl md:text-5xl font-black italic mb-8 leading-tight">“Hayrok enables us to adopt AI‑driven security responsibly, with controls that support oversight, review, and accountability.”</p>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center font-black">CS</div>
                    <div>
                       <div className="font-bold text-white">VP of Security</div>
                       <div className="text-slate-400 text-sm">Financial Services Sector</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </section>
);

const FinalCTA = ({ onNavigate }: { onNavigate: (page: string) => void }) => (
  <section className="py-40 relative overflow-hidden bg-white text-center border-t border-slate-100">
     <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tight leading-[0.9] text-slate-900">
          Learn how Hayrok supports <br/>
          <span className="text-hayrok-orange italic">CTEM and Security Validation.</span>
        </h2>
        <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
           Adopt AI‑driven security deliberately and responsibly with configured, monitored automation aligned to your risk tolerance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
           <button onClick={() => onNavigate('demo')} className="w-full sm:w-auto bg-hayrok-orange text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
              Request a Demo
           </button>
           <button onClick={() => onNavigate('contact')} className="w-full sm:w-auto px-12 py-6 rounded-2xl font-black text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all bg-white shadow-sm">
              Talk to a Security Architect
           </button>
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
      case 'careers': return <CareersPage onNavigate={setCurrentPage} />;
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
            <CTEMLifecycle />
            <HayAiSection />
            <WhoItIsFor />
            <PlatformOverview onNavigate={setCurrentPage} />
            <ROISection />
            <HowItWorks />
            <CustomerVoice />
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