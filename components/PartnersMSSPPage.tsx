
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, Users, ShieldCheck, Target, BarChart3, 
  ArrowRight, CheckCircle2, Cpu, Lock, Layers,
  Layout, History, Award, Sparkles, MessageSquare
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

export const PartnersMSSPPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-hayrok-orange/10 selection:text-hayrok-orange overflow-hidden font-sans relative">
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(255,95,0,0.02)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />
      </div>

      <div className="h-32 md:h-40"></div>

      {/* Hero */}
      <section className="container mx-auto px-6 mb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="flex items-center gap-3 mb-8">
            <div className="h-[2px] w-8 bg-hayrok-orange"></div>
            <span className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em]">Service Optimization</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.95] tracking-tight text-slate-900">
            Defensible Security <br/>
            <span className="bg-gradient-to-r from-hayrok-orange to-orange-400 bg-clip-text text-transparent italic tracking-tighter">Outcomes at Scale.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-4xl">
            Hayrok was built to augment MSSPs — not replace them. Deliver higher‑value services by combining agentic AI automation with human expertise, accountability, and governance.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8">
           <div className="p-12 bg-slate-900 text-white rounded-[4rem] relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                 <Cpu size={240} className="text-hayrok-orange" />
              </div>
              <h4 className="text-3xl font-black mb-10 relative z-10">Why MSSPs Choose Hayrok</h4>
              <ul className="space-y-6 relative z-10">
                 {[
                   "Multi-tenant by design with strict isolation",
                   "Governed agentic AI (no black boxes)",
                   "Board- and audit-ready reporting",
                   "Scales outcomes, not alert volume",
                   "Reduces analyst fatigue & burnout"
                 ].map((text, i) => (
                    <li key={i} className="flex gap-4">
                       <CheckCircle2 className="text-hayrok-orange shrink-0 mt-1" size={20} />
                       <span className="text-lg font-bold text-slate-300">{text}</span>
                    </li>
                 ))}
              </ul>
           </div>

           <div className="p-12 bg-slate-50 border border-slate-200 rounded-[4rem] flex flex-col justify-center">
              <h4 className="text-3xl font-black text-slate-900 mb-10">MSSP Use Cases</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                   { label: "CTEM for Customers", icon: BarChart3 },
                   { label: "Attack Path Validation", icon: Target },
                   { label: "Supply Chain Oversight", icon: Layers },
                   { label: "Audit & Compliance Support", icon: ShieldCheck }
                 ].map((uc, i) => (
                    <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-hayrok-orange transition-all group">
                       <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-hayrok-orange mb-4 group-hover:bg-hayrok-orange group-hover:text-white transition-all">
                          <uc.icon size={18} />
                       </div>
                       <span className="text-sm font-black text-slate-900 uppercase tracking-tight leading-none">{uc.label}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Value Summary Strip */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="bg-slate-50 rounded-[3rem] p-10 md:p-20 text-center border border-slate-200">
           <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-10">From reactive monitoring to measurable risk reduction.</h3>
           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { title: "Deliver Higher Value", desc: "Focus on strategic consulting vs manual triage." },
                { title: "Differentiate Offerings", desc: "Offer trusted AI security your competitors can't." },
                { title: "Increase Efficiency", desc: "Scale your analyst capacity without scaling headcount." }
              ].map((val, i) => (
                <div key={i} className="space-y-4">
                   <div className="text-3xl font-black text-hayrok-orange">{i+1}.</div>
                   <h5 className="text-lg font-black">{val.title}</h5>
                   <p className="text-sm text-slate-500 font-medium">{val.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Contact */}
      <section className="container mx-auto px-6 mb-48 relative z-10 text-center">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
           <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 tracking-tight">Become an MSSP Partner</h3>
           <p className="text-xl text-slate-600 font-medium mb-12">
             If you’re delivering managed security services and want to scale responsibly with AI, Hayrok is built for your model.
           </p>
           <a href="mailto:partners@hayrok.com" className="inline-flex items-center gap-3 bg-hayrok-orange text-white px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
             partners@hayrok.com <ArrowRight size={16} />
           </a>
        </motion.div>
      </section>

      <div className="h-32"></div>
    </div>
  );
};
