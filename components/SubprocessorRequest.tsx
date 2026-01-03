
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, ShieldCheck, Mail, Send, ArrowLeft, 
  CheckCircle2, Info, Lock, Globe, Database,
  FileText, History, Gavel, Sparkles
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

export const SubprocessorRequest: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-24 overflow-x-hidden relative">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <IntelligenceFabric density={1} isDark={false} />
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-orange-50/50 blur-[120px] rounded-full"></div>
      </div>

      <div className="h-32 md:h-40"></div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => onNavigate?.('trust-center')}
            className="flex items-center gap-2 text-slate-400 hover:text-hayrok-orange transition-colors font-black text-[10px] uppercase tracking-[0.5em] mb-12 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Trust Center
          </button>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-hayrok-orange text-[10px] font-black mb-10 tracking-[0.4em] uppercase shadow-sm"
          >
            <Users size={12} className="animate-pulse" />
            Third-Party Transparency
          </motion.div>
          
          <h1 className="text-5xl md:text-[8rem] font-black mb-10 leading-[0.9] tracking-tight text-slate-900 uppercase">
            Request <br/>
            <span className="bg-gradient-to-r from-hayrok-orange to-indigo-600 bg-clip-text text-transparent italic tracking-tighter">Subprocessor List.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium max-w-4xl">
            Transparency is a core requirement of enterprise trust. Hayrok maintains a rigorous Vendor Risk Management (VRM) program. Request our current list of subprocessors and data handlers.
          </p>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 items-start">
            
            {/* Left: Form */}
            <div className="lg:col-span-7">
              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-100 rounded-[3rem] p-12 md:p-24 text-center shadow-2xl"
                >
                  <div className="w-24 h-24 bg-emerald-500 text-white rounded-3xl flex items-center justify-center mb-10 mx-auto shadow-xl shadow-emerald-500/20">
                    <ShieldCheck size={48} />
                  </div>
                  <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight uppercase">Request Received.</h3>
                  <p className="text-xl text-slate-600 font-medium mb-12 leading-relaxed">
                    Our compliance team has received your request. The subprocessor list will be delivered to your work email address shortly.
                  </p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="text-emerald-600 font-black text-[10px] uppercase tracking-widest hover:underline"
                  >
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <div className="bg-white border border-slate-200 rounded-[4rem] overflow-hidden shadow-2xl relative">
                  <div className="absolute top-0 left-0 w-full h-2 bg-hayrok-orange" />
                  <div className="p-8 md:p-16 lg:p-20">
                    <form onSubmit={handleSubmit} className="space-y-10">
                      <div className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                            <input required type="text" placeholder="Jane Doe" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                            <input required type="email" placeholder="jane@enterprise.com" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Company Name</label>
                          <input required type="text" placeholder="Acme Security Inc." className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900" />
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Reason for Request</label>
                          <select required className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900 appearance-none">
                            <option value="">Select a reason</option>
                            <option>New vendor evaluation</option>
                            <option>Annual audit / due diligence</option>
                            <option>Compliance requirement (SOC2/ISO)</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-6 pt-6 border-t border-slate-100">
                        <label className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl cursor-pointer hover:border-hayrok-orange transition-all border border-transparent">
                          <input required type="checkbox" className="mt-1 w-5 h-5 accent-hayrok-orange shrink-0" />
                          <span className="text-xs font-bold text-slate-500 leading-relaxed uppercase">
                            I understand that the Subprocessor List is confidential and agree to use it only for my organization's internal security evaluation of Hayrok.
                          </span>
                        </label>

                        <button 
                          type="submit" 
                          disabled={formStatus === 'submitting'}
                          className="w-full py-6 bg-hayrok-dark text-white rounded-2xl font-black text-xs uppercase tracking-[0.4em] flex items-center justify-center gap-3 hover:bg-hayrok-orange transition-all shadow-xl shadow-black/20 disabled:opacity-70 group"
                        >
                          {formStatus === 'submitting' ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>
                              REQUEST SUBPROCESSOR LIST
                              <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Policy Info */}
            <div className="lg:col-span-5 space-y-12">
               <div>
                  <h4 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-6">Our Commitment</h4>
                  <h3 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">Vendor Security <br/> <span className="text-slate-400">Governance.</span></h3>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                    Hayrok subprocessors are subject to a multi-stage security evaluation before they are approved to handle customer data or platform infrastructure.
                  </p>
               </div>

               <div className="space-y-6">
                  {[
                    { label: "Rigorous Due Diligence", desc: "Every subprocessor is vetted for security, compliance (SOC 2/ISO), and financial stability.", icon: ShieldCheck },
                    { label: "Data Processing Addendum", desc: "Standard contractual clauses (SCCs) and DPAs ensure data protection is legally enforced.", icon: Lock },
                    { label: "Continual Monitoring", desc: "Annual reviews of security posture and compliance status for all critical vendors.", icon: History }
                  ].map((item, i) => (
                    <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-3xl group hover:bg-white hover:shadow-lg transition-all duration-500">
                       <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-hayrok-orange shadow-sm group-hover:scale-110 transition-transform">
                             <item.icon size={18} />
                          </div>
                          <h5 className="font-black text-slate-900 text-sm uppercase tracking-widest">{item.label}</h5>
                       </div>
                       <p className="text-xs text-slate-500 font-medium leading-relaxed uppercase">{item.desc}</p>
                    </div>
                  ))}
               </div>

               <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                     <Gavel size={120} className="text-hayrok-orange" />
                  </div>
                  <div className="relative z-10">
                    <p className="text-xl font-black italic mb-4 leading-tight">"We don't outsource our accountability."</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Hayrok Trust Statement</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer / Signature */}
      <div className="h-32 flex items-center justify-center border-t border-slate-100 bg-white">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            Third-Party Risk Hub. Published by Hayrok Trust & Security. All requests are handled in accordance with our Privacy Notice.
         </p>
      </div>
    </div>
  );
};
