
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

const ROISection = () => (
  <section className="py-32 bg-slate-50 relative overflow-hidden">
     <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
           <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-4">Measurable Outcomes</h2>
           <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">ROI in the <span className="text-hayrok-orange">First 90 Days</span></h3>
           <p className="text-slate-500 text-lg font-medium">Not projections. Measured outcomes tracked over time.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { label: "Reduction in exploitable risk", val: "35–50%", icon: TrendingDown },
             { label: "Reduction in manual triage", val: "40–60%", icon: Zap },
             { label: "Increase in secure release rate", val: "25–35%", icon: Rocket },
             { label: "Reduction in audit effort", val: "50–70%", icon: ShieldCheck }
           ].map((stat, i) => (
             <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all">
                <div className="p-3 bg-orange-50 rounded-2xl inline-flex text-hayrok-orange mb-6">
                   <stat.icon size={24} />
                </div>
                <div className="text-4xl font-black text-slate-900 mb-2">{stat.val}</div>
                <p className="text-slate-500 font-bold text-sm uppercase tracking-tight leading-tight">{stat.label}</p>
             </div>
           ))}
        </div>
     </div>
  </section>
);

const Rocket = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
    <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"></path>
    <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"></path>
  </svg>
);

const WhoItIsFor = () => (
  <section className="py-32 bg-white">
     <div className="container mx-auto px-6">
        <div className="text-center mb-20">
           <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-4">Target Personas</h2>
           <h3 className="text-4xl md:text-6xl font-black text-slate-900">Built for Teams That <span className="text-slate-400">Own the Outcome</span></h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { title: "CISOs & Leaders", icon: BarChart3, desc: "Board-ready risk intelligence and defensible decisions." },
             { title: "AppSec & ProdSec", icon: Target, desc: "Proof of exploitability and real attack paths." },
             { title: "GRC & Compliance", icon: Lock, desc: "Audit-ready evidence by default for high-stakes environments." }
           ].map((p, i) => (
             <div key={i} className="p-8 border border-slate-100 rounded-[2.5rem] bg-slate-50 hover:bg-white hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-hayrok-orange mb-6 shadow-sm group-hover:bg-hayrok-orange group-hover:text-white transition-all">
                   <p.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{p.title}</h4>
                <p className="text-slate-500 font-medium">{p.desc}</p>
             </div>
           ))}
        </div>
     </div>
  </section>
);

const CustomerVoice = () => (
  <section className="py-32 bg-hayrok-dark text-white relative overflow-hidden">
     <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
           <Quote size={80} className="text-hayrok-orange opacity-20 mb-8" />
           <div className="space-y-16">
              <div>
                 <p className="text-3xl md:text-5xl font-black italic mb-8 leading-tight">“This is the first AI security platform we can explain to our board — and defend in an audit.”</p>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center font-black">CS</div>
                    <div>
                       <div className="font-bold">CISO</div>
                       <div className="text-slate-500 text-sm">Financial Services Company</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-40 relative overflow-hidden bg-white text-slate-900 text-center border-t border-slate-100">
     <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tight leading-[0.9]">
          See What Governed Agentic AI <br/>
          <span className="text-hayrok-orange italic">Looks Like in Practice.</span>
        </h2>
        <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-3xl mx-auto font-medium">
           If you’re ready to reduce real risk, trust AI-driven decisions, and defend outcomes with confidence — Hayrok was built for you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
           <button className="w-full sm:w-auto bg-hayrok-orange text-white px-12 py-6 rounded-2xl text-xl font-black hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
              Request a Demo
           </button>
           <button className="w-full sm:w-auto px-12 py-6 rounded-2xl text-xl font-black text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all">
              Talk to Security Experts
           </button>
        </div>
     </div>
  </section>
);

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about': return <AboutUs />;
      case 'leadership': return <LeadershipPage />;
      case 'partners': return <PartnersPage />;
      case 'partners-integrations': return <PartnersIntegrationsPage />;
      case 'partners-csps': return <PartnersCSPPage />;
      case 'partners-mssps': return <PartnersMSSPPage />;
      case 'contact': return <ContactPage />;
      case 'newsroom': return <NewsroomPage />;
      case 'values': return <ValuesPrinciples />;
      case 'platform': return <PlatformPage />;
      case 'pricing': return <div className="pt-20"><PricingSection /><FinalCTA /></div>;
      case 'industries': return <div className="pt-20"><IndustriesSection /><FinalCTA /></div>;
      case 'comparison': return <div className="pt-20"><ComparisonSection /><FinalCTA /></div>;
      case 'roi': return <div className="pt-20"><ROIMetrics /><FinalCTA /></div>;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <IntegrationsSection condensed={true} />
            <ProblemSection />
            <HayAiSection />
            <WhoItIsFor />
            <PlatformOverview />
            <ROISection />
            <HowItWorks />
            <CustomerVoice />
            <FinalCTA />
          </>
        );
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-hayrok-orange selection:text-white overflow-x-hidden">
      <Navbar onNavigate={setCurrentPage} activePage={currentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
