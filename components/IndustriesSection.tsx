
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Landmark, HeartPulse, Building2, ShoppingBag, Globe, 
  Gavel, ShieldCheck, Zap, BarChart3, Lock, 
  CheckCircle2, ArrowRight, Activity, Target, 
  Rocket, Sparkles, ExternalLink, ShieldAlert, Cpu
} from 'lucide-react';

// Animation variants
const containerVariants = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.1 }
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
};

const IndustryCard = ({ icon: Icon, title, tagline, challenges, helps, accent }: any) => (
  <motion.div 
    variants={fadeInUp}
    className="group relative flex flex-col h-full p-8 bg-white border border-slate-200 rounded-[2.5rem] hover:border-hayrok-orange transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(255,95,0,0.1)]"
  >
    <div className="flex items-start justify-between mb-8">
      <div className={`p-4 rounded-2xl ${accent} text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
        <Icon size={24} strokeWidth={2.5} />
      </div>
      <div className="h-px flex-1 bg-slate-100 mx-6 mt-6 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>

    <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-hayrok-orange transition-colors">
      {title}
    </h3>
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">
      {tagline}
    </p>

    <div className="space-y-6 flex-1">
      <div className="space-y-3">
        <p className="text-[9px] font-black text-hayrok-orange uppercase tracking-widest">Core Impact</p>
        <ul className="space-y-2">
          {helps.slice(0, 2).map((item: string, i: number) => (
            <li key={i} className="flex gap-2 text-sm font-bold text-slate-700 leading-snug">
              <CheckCircle2 size={14} className="text-hayrok-orange shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Learn More</span>
      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-hayrok-orange group-hover:text-white transition-all">
        <ArrowRight size={14} />
      </div>
    </div>
  </motion.div>
);

export const IndustriesSection: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-32 overflow-x-hidden">
      {/* Blended Background Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-orange-50/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-50/40 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-grid-white opacity-[0.2]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 z-10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp} className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-hayrok-orange text-[10px] font-black mb-8 tracking-[0.4em] uppercase shadow-sm">
                <Globe size={12} className="animate-pulse" />
                ENTERPRISE READY
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tight">
                Security for <br/>
                <span className="bg-gradient-to-r from-hayrok-orange to-orange-400 bg-clip-text text-transparent italic">High-Stakes.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-semibold leading-relaxed mb-10">
                Hayrok supports organizations where trust is non-negotiable — providing accurate, explainable, and defensible security decisions.
              </p>
              <div className="flex gap-4">
                <button className="bg-hayrok-orange text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-orange-500/20 hover:scale-105 transition-transform">
                  Get Started
                </button>
                <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-colors">
                  View Case Studies
                </button>
              </div>
            </motion.div>

            {/* FOCAL IMAGE 1: High-Tech Enterprise Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative aspect-video lg:aspect-square max-h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group"
            >
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070" 
                alt="Cybersecurity Operations" 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hayrok-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
                <div className="flex items-center gap-3 text-white">
                  <ShieldCheck className="text-hayrok-orange" size={24} />
                  <span className="font-black uppercase tracking-widest text-xs">Governed Agentic AI</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Structured Industry Grid */}
      <section className="container mx-auto px-6 relative z-10 pt-20">
        <motion.div 
          {...fadeInUp}
          className="flex items-center gap-6 mb-16"
        >
          <span className="text-[11px] font-black text-slate-900 uppercase tracking-[0.5em] shrink-0">Supported Sectors</span>
          <div className="h-px w-full bg-slate-100" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <IndustryCard 
            icon={Landmark}
            title="Financial Services"
            tagline="Regulatory Confidence"
            accent="bg-blue-600"
            helps={["Continuous CTEM Lifecycle", "Regulator-ready reporting", "Revenue-critical mapping"]}
          />
          <IndustryCard 
            icon={Rocket}
            title="SaaS & Technology"
            tagline="Velocity & Trust"
            accent="bg-hayrok-orange"
            helps={["CI/CD Governance", "SBOM Risk Intelligence", "Frictionless Security"]}
          />
          <IndustryCard 
            icon={HeartPulse}
            title="Healthcare"
            tagline="Responsible Safety"
            accent="bg-emerald-600"
            helps={["HIPAA Framework Compliance", "Evidence-driven Validation", "Safe Automation"]}
          />
          <IndustryCard 
            icon={ShoppingBag}
            title="E-Commerce"
            tagline="Revenue Protection"
            accent="bg-purple-600"
            helps={["Transaction Flow Security", "Seasonal Traffic Readiness", "Fraud Risk Analysis"]}
          />
          <IndustryCard 
            icon={Building2}
            title="Energy & Utilities"
            tagline="Critical Reliability"
            accent="bg-slate-800"
            helps={["IT/OT Domain Crossing", "Operational Safety", "Resilience Mapping"]}
          />
          <IndustryCard 
            icon={Gavel}
            title="Public Sector"
            tagline="Defensible Transparency"
            accent="bg-indigo-600"
            helps={["Policy-bound Auditing", "Oversight Evidence Trails", "Posturing Metrics"]}
          />
        </motion.div>
      </section>

      {/* Blended Split Section with Second Image */}
      <section className="container mx-auto px-6 pt-48 relative z-10">
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-hayrok-orange to-transparent blur-[120px]" />
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            {/* FOCAL IMAGE 2: Abstract Technology Visualization */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-hayrok-orange/20 blur-2xl rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072" 
                alt="Intelligence Network" 
                className="relative rounded-[3rem] w-full aspect-[4/3] object-cover shadow-2xl mix-blend-screen opacity-80"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
                <div className="w-16 h-16 bg-white/5 backdrop-blur-3xl border border-white/20 rounded-2xl flex items-center justify-center text-hayrok-orange shadow-2xl">
                  <Cpu size={32} />
                </div>
              </div>
            </div>

            <div className="text-white order-1 lg:order-2">
              <div className="inline-flex items-center gap-3 text-hayrok-orange font-black text-[10px] uppercase tracking-[0.5em] mb-8">
                <Sparkles size={16} /> Why Choose Hayrok
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight">
                Built for industries that <br/>
                <span className="text-hayrok-orange">can't afford to guess.</span>
              </h2>
              <div className="space-y-6 mb-12">
                {[
                  { label: "Governed Autonomy", desc: "AI that follows policy, not just prompts." },
                  { label: "Evidence First", desc: "Real-world validation vs theoretical findings." },
                  { label: "Audit Ready", desc: "Traceable reasoning steps for boards & regulators." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="text-hayrok-orange shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-black text-lg mb-1">{item.label}</h4>
                      <p className="text-slate-400 text-sm font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="bg-white text-hayrok-dark px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-hayrok-orange hover:text-white transition-all">
                Explore Use Cases
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Summary Section */}
      <section className="container mx-auto px-6 pt-48 pb-12 text-center relative z-10">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-7xl font-black text-slate-900 mb-10 tracking-tight leading-[0.9]">
            Responsible AI. <br/>
            <span className="text-hayrok-orange italic">Enterprise Results.</span>
          </h3>
          <p className="text-xl md:text-2xl text-slate-600 font-semibold mb-12 leading-relaxed">
            Whether you operate in financial services, healthcare, or SaaS, Hayrok adapts to your specific constraints — responsibly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="w-full sm:w-auto bg-hayrok-orange text-white px-12 py-6 rounded-2xl text-xl font-black hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/30">
              Request Early Access
            </button>
            <button className="w-full sm:w-auto px-12 py-6 rounded-2xl text-xl font-black text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all bg-white shadow-sm flex items-center justify-center gap-3 group/btn">
              Talk to Security Team
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
