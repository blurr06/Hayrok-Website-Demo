import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, Play, MousePointer2, Monitor, 
  ArrowLeft, ArrowRight, Zap, BarChart3, 
  ShieldCheck, Code, Globe, Bot, 
  Layers, CheckCircle2, Search, Target,
  Activity, Sparkles, ChevronRight, X,
  Layout, History, Terminal, Database,
  Smartphone, Maximize2, Info, Clock
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

export const TOURS = [
  {
    id: 'full-platform-tour',
    title: "The Governance Lifecycle",
    subtitle: "From Exposure to Proved Outcome",
    category: "Platform Overview",
    duration: "4 mins",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    steps: [
      { t: "Inbound Telemetry", d: "Hive ingests signals from your existing security stack, creating a unified system of record." },
      { t: "Recursive Reasoning", d: "Hay-AI builds attack graphs to identify reachability across code, cloud, and identity." },
      { t: "Genesis Validation", d: "Autonomous validation proves whether the exposure is exploitable in your specific environment." },
      { t: "Defensible Decisions", d: "Final risk outcomes are recorded with full auditable rationale for board review." }
    ]
  },
  {
    id: 'aws-validation-deep-dive',
    title: "AWS Path Validation",
    subtitle: "Autonomous Exploitation Proof",
    category: "Technical",
    duration: "6 mins",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
    steps: [
      { t: "IAM Scope Analysis", d: "Genesis agents scan IAM policies for privilege escalation potential." },
      { t: "Safe Payload Trigger", d: "A non-destructive probe is sent to confirm cross-account trust reachability." },
      { t: "Evidence Capture", d: "Automated screenshots and trace logs are captured as defensible proof." },
      { t: "Posture Update", d: "The organizational risk score reflects the validated reality, not just the scanner alert." }
    ]
  },
  {
    id: 'code-to-cloud-gates',
    title: "Supply Chain Gates",
    subtitle: "Governing CodeFabrics",
    category: "AppSec",
    duration: "5 mins",
    icon: Code,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070",
    steps: [
      { t: "SBOM Ingestion", d: "CodeFabrics consumes build-time SBOMs and SCA signals natively." },
      { t: "Policy Gate", d: "Automated OPA policies evaluate build risk against production constraints." },
      { t: "Validation Trigger", d: "Builds with high-reachability vulnerabilities trigger a Genesis run instantly." },
      { t: "Release Approval", d: "Builds are only promoted when risk is validated as non-exploitable or fixed." }
    ]
  }
];

export const ToursWalkthroughsPage: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  const [activeTourId, setActiveTourId] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const activeTour = TOURS.find(t => t.id === activeTourId);

  const handleNext = () => {
    if (activeTour && currentStep < activeTour.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (activeTourId) {
    return (
      <div className="fixed inset-0 bg-white z-[60] flex flex-col font-sans">
        {/* Simulator Header */}
        <header className="h-20 border-b border-slate-100 px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => { setActiveTourId(null); setCurrentStep(0); }}
              className="p-2 hover:bg-slate-100 rounded-xl transition-all text-slate-400 hover:text-hayrok-orange"
            >
              <X size={20} />
            </button>
            <div className="h-8 w-px bg-slate-100" />
            <div>
              <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-widest leading-none mb-1">
                Active Tour: {activeTour?.category}
              </p>
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">{activeTour?.title}</h4>
            </div>
          </div>

          <div className="flex items-center gap-10">
             <div className="flex items-center gap-2">
                {[...Array(activeTour?.steps.length)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all duration-500 ${i <= currentStep ? 'w-8 bg-hayrok-orange' : 'w-2 bg-slate-100'}`} 
                  />
                ))}
             </div>
             <button onClick={() => onNavigate?.('demo')} className="px-6 py-2 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-hayrok-orange transition-all shadow-xl">
                Request Full Demo
             </button>
          </div>
        </header>

        {/* Simulator Content */}
        <main className="flex-1 flex overflow-hidden">
          {/* Main Visual Side */}
          <div className="flex-1 bg-slate-50 relative overflow-hidden flex items-center justify-center p-12">
             <IntelligenceFabric density={0.8} isDark={false} />
             
             <AnimatePresence mode="wait">
                <motion.div 
                  key={currentStep}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 w-full max-w-5xl aspect-video bg-white rounded-[3rem] shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
                >
                  {/* Simulated UI Top Bar */}
                  <div className="h-12 border-b border-slate-100 bg-[#FDFDFD] flex items-center px-6 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    </div>
                    <div className="flex-1 flex justify-center">
                       <div className="px-4 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                          hayrok-hive.cloud / {activeTour?.id} / step-{currentStep + 1}
                       </div>
                    </div>
                  </div>

                  {/* Simulated Content Display */}
                  <div className="flex-1 p-12 flex items-center justify-center text-center">
                    <div className="max-w-2xl">
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="w-24 h-24 bg-orange-50 rounded-3xl flex items-center justify-center text-hayrok-orange mx-auto mb-10 shadow-xl shadow-orange-500/10"
                      >
                         {activeTour?.icon && <activeTour.icon size={40} />}
                      </motion.div>
                      <h3 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight leading-none">
                         {activeTour?.steps[currentStep].t}
                      </h3>
                      <p className="text-xl text-slate-500 font-medium leading-relaxed">
                        {activeTour?.steps[currentStep].d}
                      </p>
                    </div>
                  </div>

                  {/* Simulated Footer Pulse */}
                  <div className="h-2 w-full bg-slate-50 relative overflow-hidden">
                     <motion.div 
                       animate={{ left: ['-100%', '100%'] }}
                       transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                       className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-hayrok-orange/20 to-transparent"
                     />
                  </div>
                </motion.div>
             </AnimatePresence>
          </div>

          {/* Controls Side */}
          <aside className="w-[400px] border-l border-slate-100 p-12 flex flex-col justify-between">
            <div>
              <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-12">Walkthrough Guide</h5>
              
              <div className="space-y-10">
                {activeTour?.steps.map((step, i) => (
                  <div 
                    key={i} 
                    className={`flex gap-6 transition-all duration-500 ${i === currentStep ? 'opacity-100 scale-100' : 'opacity-30 scale-95'}`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-[10px] font-black shrink-0 ${i === currentStep ? 'bg-hayrok-orange text-white shadow-lg' : 'bg-slate-100 text-slate-400'}`}>
                      {i + 1}
                    </div>
                    <div>
                      <p className={`font-black uppercase tracking-tight mb-1 ${i === currentStep ? 'text-slate-900' : 'text-slate-400'}`}>{step.t}</p>
                      {i === currentStep && (
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">
                          Click 'Next' to proceed with the technical flow.
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
               <div className="grid grid-cols-2 gap-4">
                  <button 
                    disabled={currentStep === 0}
                    onClick={handleBack}
                    className="py-4 border border-slate-200 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Back
                  </button>
                  <button 
                    onClick={currentStep === activeTour.steps.length - 1 ? () => setActiveTourId(null) : handleNext}
                    className="py-4 bg-hayrok-orange text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20"
                  >
                    {currentStep === activeTour.steps.length - 1 ? 'Finish Tour' : 'Next Step'}
                  </button>
               </div>
               <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest text-center mt-4">
                  Governed Simulation Environment v4.1
               </p>
            </div>
          </aside>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-[#FCFCFA] min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-24 overflow-x-hidden relative">
      <IntelligenceFabric density={1.2} isDark={false} />
      
      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-900 text-[10px] font-black shadow-sm mb-10 tracking-[0.4em] uppercase"
          >
            <Compass size={12} className="text-hayrok-orange" />
            Interactive Learning
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[8rem] font-black tracking-tight leading-[0.9] text-slate-900 mb-10 uppercase"
          >
            Experience <br/>
            <span className="text-hayrok-orange italic font-light tracking-tighter">The Platform.</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-3xl mx-auto font-medium mb-12"
          >
            Self-guided technical walkthroughs to help you understand Hayrok's governed risk intelligence logic.
          </motion.p>
        </div>
      </section>

      {/* Featured Tour spotlight */}
      <section className="container mx-auto px-6 mb-32 relative z-10">
         <div className="max-w-6xl mx-auto">
            {TOURS.slice(0, 1).map((tour) => (
              <motion.div 
                key={tour.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                onClick={() => setActiveTourId(tour.id)}
                className="group relative bg-white border border-slate-200 rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row cursor-pointer hover:border-hayrok-orange/30 transition-all duration-700"
              >
                <div className="lg:w-1/2 relative overflow-hidden min-h-[400px]">
                  <img src={tour.image} alt={tour.title} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <div className="w-20 h-20 bg-hayrok-orange rounded-full flex items-center justify-center text-white shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                        <Play size={32} fill="currentColor" />
                     </div>
                  </div>
                </div>
                <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight uppercase tracking-tight">
                    {tour.title}
                  </h2>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-8">{tour.subtitle}</p>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                    A comprehensive walkthrough of the end-to-end security decision lifecycle within the Hive platform.
                  </p>
                  <div className="flex items-center justify-between pt-10 border-t border-slate-50">
                    <div className="flex items-center gap-4 text-slate-400 font-black text-[10px] uppercase tracking-widest">
                       <Clock size={14} /> {tour.duration}
                    </div>
                    <div className="flex items-center gap-2 text-hayrok-orange font-black text-xs uppercase tracking-widest group-hover:gap-5 transition-all">
                      Start Tour <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* Tour Grid */}
      <section className="container mx-auto px-6 relative z-10 pb-32">
         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {TOURS.slice(1).map((tour, i) => (
              <motion.div 
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveTourId(tour.id)}
                className="group bg-white border border-slate-200 rounded-[3.5rem] p-10 md:p-12 hover:shadow-2xl hover:border-hayrok-orange/30 transition-all duration-500 flex flex-col h-full cursor-pointer"
              >
                <div className="flex items-start justify-between mb-12">
                   <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-hayrok-orange group-hover:text-white transition-all shadow-sm">
                      <tour.icon size={24} strokeWidth={2.5} />
                   </div>
                   <div className="px-3 py-1 bg-slate-50 rounded-lg text-[9px] font-black text-slate-400 uppercase tracking-widest">{tour.duration}</div>
                </div>
                
                <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-hayrok-orange transition-colors uppercase leading-tight">{tour.title}</h3>
                <p className="text-[9px] font-black text-hayrok-orange uppercase tracking-[0.3em] mb-8">{tour.subtitle}</p>
                
                <p className="text-lg text-slate-500 font-medium leading-relaxed mb-12 flex-1">
                   Technical deep-dive into specialized modules and recursive reasoning flows.
                </p>

                <div className="pt-8 border-t border-slate-50 flex items-center justify-between group/btn">
                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{tour.category}</span>
                   <div className="flex items-center gap-2 text-hayrok-orange font-black text-xs uppercase tracking-widest group-hover/btn:gap-4 transition-all">
                     Take Tour <ArrowRight size={16} />
                   </div>
                </div>
              </motion.div>
            ))}
         </div>
      </section>

      <div className="h-32 flex items-center justify-center border-t border-slate-100 bg-[#FCFCFA] mt-24">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            Interactive Walkthrough Hub. Technical experiences designed for evaluation and strategy. Decisions powered by evidence.
         </p>
      </div>
    </div>
  );
};
