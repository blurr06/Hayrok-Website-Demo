
import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair, Search, Target, ShieldCheck, TrendingUp } from 'lucide-react';

const lifecycle = [
  { step: "01", label: "Scope", desc: "Continuous awareness of assets, applications, and identities.", icon: Crosshair },
  { step: "02", label: "Discover", desc: "Aggregate and correlate exposure data across all domains.", icon: Search },
  { step: "03", label: "Prioritize", desc: "Apply exploitability context to focus on practical risk.", icon: Target },
  { step: "04", label: "Validate", desc: "Evaluate attack paths to prove exposure in practice.", icon: ShieldCheck },
  { step: "05", label: "Mobilize", desc: "Track remediation progress and measurable risk change.", icon: TrendingUp }
];

export const CTEMLifecycle: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-4">Framework Alignment</h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Aligned to the <span className="text-hayrok-orange">CTEM Lifecycle</span></h3>
          <p className="text-slate-500 text-lg font-medium leading-relaxed">
            Move from broad exposure visibility to validated risk reduction with a continuous, evidence-based approach.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {lifecycle.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 bg-white border border-slate-200 rounded-[2.5rem] group hover:border-hayrok-orange transition-all duration-500 hover:shadow-xl"
            >
              <div className="text-5xl font-black text-slate-100 group-hover:text-orange-50 transition-colors mb-6">{item.step}</div>
              <div className="w-12 h-12 rounded-xl bg-slate-50 text-hayrok-orange flex items-center justify-center mb-6 group-hover:bg-hayrok-orange group-hover:text-white transition-all">
                <item.icon size={22} />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-2">{item.label}</h4>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-tight leading-relaxed">{item.desc}</p>
              
              {i < lifecycle.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-50%] z-20">
                  <div className="w-8 h-px bg-slate-200" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
