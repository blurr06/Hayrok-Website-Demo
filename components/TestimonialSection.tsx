import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Building2, Shield } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="relative py-32 bg-[#FCFCFA]">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hayrok-orange/10 border border-hayrok-orange/20 text-[10px] font-black uppercase tracking-[0.3em] text-hayrok-orange mb-6">
            <Shield size={12} />
            Early Adopter Program
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            What Security Leaders Are Saying
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Trusted by forward-thinking security teams in our early adopter program
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-white rounded-3xl border border-slate-100 p-10 md:p-16 shadow-xl shadow-slate-900/5">
            <Quote size={48} className="text-hayrok-orange/20 mb-8" />
            
            <blockquote className="text-2xl md:text-3xl font-bold text-slate-900 leading-relaxed mb-10">
              "We had 40,000 findings across three scanners. Hayrok validated that only 847 were actually exploitable in our environment — and showed us exactly which 12 needed immediate attention. That's not a dashboard. That's a decision."
            </blockquote>

            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-hayrok-orange to-orange-600 flex items-center justify-center text-white font-black text-xl">
                JM
              </div>
              <div>
                <div className="text-lg font-black text-slate-900">James Mitchell</div>
                <div className="text-slate-500 font-medium">VP of Security Engineering</div>
                <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">
                  <Building2 size={14} />
                  <span>Series C FinTech • Early Adopter</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-hayrok-orange/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-slate-900/5 rounded-full blur-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-400 font-medium">
            Join our early adopter program and be first to experience the future of security validation
          </p>
        </motion.div>
      </div>
    </section>
  );
};
