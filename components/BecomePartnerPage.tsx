
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Handshake, Users, Zap, Globe, Cpu, 
  ArrowRight, CheckCircle2, ShieldCheck, 
  Layers, Cloud, Briefcase, FileText, 
  MessageSquare, Send, Mail, Info,
  Building2, UserCheck, Target,
  // Added missing icon imports
  Search, Rocket
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

export const BecomePartnerPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [hasDeal, setHasDeal] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-hayrok-orange/10 selection:text-hayrok-orange overflow-x-hidden font-sans relative">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(255,95,0,0.03)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />
      </div>

      <div className="h-32 md:h-40"></div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-24 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div {...fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-hayrok-orange text-[10px] font-black mb-10 tracking-[0.4em] uppercase shadow-sm">
            <Handshake size={12} className="animate-pulse" />
            Join the Ecosystem
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.95] tracking-tight text-slate-900">
            Register to Partner <br/>
            <span className="bg-gradient-to-r from-hayrok-orange to-indigo-600 bg-clip-text text-transparent italic tracking-tighter">With Hayrok.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-4xl mx-auto mb-12">
            This form helps us route your request to the right team and align on a potential partnership model. We review all submissions and follow up to schedule an initial discussion.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
             <a href="#registration-form" className="w-full sm:w-auto bg-hayrok-orange text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2">
                Submit Partner Application
                <ArrowRight size={16} />
             </a>
             <button className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Talk to Partner Team
                <MessageSquare size={16} />
             </button>
          </div>
        </div>
      </section>

      {/* Partnership Paths */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="flex items-center gap-6 mb-16">
          <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.5em] shrink-0">Partnership Paths</span>
          <div className="h-px w-full bg-slate-100" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: "Integration Partner", 
              icon: Layers, 
              color: "bg-blue-600",
              desc: "Technology integrations, joint solution alignment, API/connector development, and ecosystem expansion." 
            },
            { 
              title: "Cloud Provider (CSP)", 
              icon: Cloud, 
              color: "bg-hayrok-orange",
              desc: "Cloud go-to-market alignment, marketplace pathways, and regulated customer motions." 
            },
            { 
              title: "MSSP / MDR", 
              icon: Zap, 
              color: "bg-emerald-600",
              desc: "Managed offerings, multi-tenant delivery models, co-delivery, and recurring services enablement." 
            },
            { 
              title: "Consulting / Advisory", 
              icon: Briefcase, 
              color: "bg-indigo-600",
              desc: "Security advisory, risk and compliance services, assessments, and implementation support." 
            }
          ].map((path, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] hover:bg-white hover:shadow-xl transition-all duration-500 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white mb-8 shadow-lg transition-transform group-hover:scale-110 ${path.color}`}>
                <path.icon size={20} />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-4">{path.title}</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{path.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Registration Form */}
      <section id="registration-form" className="container mx-auto px-6 mb-40 relative z-10 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          {formStatus === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-50 border border-emerald-100 rounded-[3rem] p-12 md:p-24 text-center shadow-2xl"
            >
              <div className="w-24 h-24 bg-emerald-500 text-white rounded-[2rem] flex items-center justify-center mb-10 mx-auto shadow-xl shadow-emerald-500/20">
                <ShieldCheck size={48} />
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Application Submitted.</h3>
              <p className="text-xl text-slate-600 font-medium max-w-lg mx-auto mb-10 leading-relaxed">
                Thank you for your interest in partnering with Hayrok. Your application has been routed to our Partner Team for review.
              </p>
              <div className="flex flex-col items-center gap-6">
                <div className="h-px w-24 bg-emerald-200" />
                <p className="text-sm font-black text-emerald-600 uppercase tracking-widest">Expected follow-up: 2–3 business days</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="text-slate-400 font-black text-[10px] uppercase tracking-widest hover:text-hayrok-orange transition-colors"
                >
                  Submit another application
                </button>
              </div>
            </motion.div>
          ) : (
            <div className="bg-slate-50 border border-slate-200 rounded-[4rem] overflow-hidden shadow-sm relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-hayrok-orange" />
              <div className="p-8 md:p-16 lg:p-24">
                <div className="mb-16">
                  <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Partner Registration</h3>
                  <p className="text-lg text-slate-500 font-medium">Please provide your company and contact details below.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-16">
                  {/* Company Information */}
                  <div className="space-y-10">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-hayrok-orange shadow-sm">
                        <Building2 size={18} />
                      </div>
                      <h4 className="text-xl font-black text-slate-900 uppercase tracking-widest text-sm">1. Company Information</h4>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Company Name *</label>
                        <input required type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Company Website *</label>
                        <input required type="url" placeholder="https://" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Headquarters Country *</label>
                        <input required type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Company Size *</label>
                        <select required className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900 appearance-none">
                          <option value="">Select Size</option>
                          <option>1–50</option>
                          <option>51–200</option>
                          <option>201–1,000</option>
                          <option>1,000+</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                       <div className="space-y-4">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Regions Supported *</label>
                          <div className="flex flex-wrap gap-3">
                             {['NA', 'EMEA', 'APAC', 'LATAM'].map(region => (
                               <label key={region} className="flex items-center gap-3 px-5 py-3 bg-white border border-slate-200 rounded-xl cursor-pointer hover:border-hayrok-orange transition-all group">
                                  <input type="checkbox" className="w-4 h-4 accent-hayrok-orange" />
                                  <span className="text-xs font-black text-slate-600 group-hover:text-slate-900">{region}</span>
                               </label>
                             ))}
                          </div>
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Company Type *</label>
                          <select required className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900 appearance-none">
                            <option value="">Select Type</option>
                            <option>Integration Partner</option>
                            <option>Cloud Service Provider (CSP)</option>
                            <option>MSSP / MDR</option>
                            <option>Consulting / Advisory</option>
                            <option>Other</option>
                          </select>
                       </div>
                    </div>
                  </div>

                  {/* Primary Contact */}
                  <div className="space-y-10">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-hayrok-orange shadow-sm">
                        <UserCheck size={18} />
                      </div>
                      <h4 className="text-xl font-black text-slate-900 uppercase tracking-widest text-sm">2. Primary Contact</h4>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name *</label>
                        <input required type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Title / Role *</label>
                        <input required type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Work Email *</label>
                        <input required type="email" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone (Optional)</label>
                        <input type="tel" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900" />
                      </div>
                    </div>
                  </div>

                  {/* Partnership Details */}
                  <div className="space-y-10">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-hayrok-orange shadow-sm">
                        <Target size={18} />
                      </div>
                      <h4 className="text-xl font-black text-slate-900 uppercase tracking-widest text-sm">3. Partnership Details</h4>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Partnership Interest *</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Co-sell', 'Co-deliver', 'Referral', 'Integration build', 'Marketplace', 'Managed offering', 'Advisory'].map(interest => (
                          <label key={interest} className="flex items-center gap-3 px-4 py-3 bg-white border border-slate-200 rounded-xl cursor-pointer hover:border-hayrok-orange transition-all">
                             <input type="checkbox" className="w-4 h-4 accent-hayrok-orange" />
                             <span className="text-[10px] font-black text-slate-600 uppercase tracking-tight">{interest}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Describe Your Partnership Proposal *</label>
                       <textarea required rows={4} placeholder="Target customers, GTM motion, what you want to build, timeline..." className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Customer Profile Served (Optional)</label>
                          <select className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900 appearance-none">
                            <option value="">Select Profile</option>
                            <option>Enterprise</option>
                            <option>Mid-market</option>
                            <option>SMB</option>
                            <option>Mixed</option>
                          </select>
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Regulated Industries Served? (Optional)</label>
                          <div className="flex gap-4 mt-2">
                             {['Yes', 'No'].map(choice => (
                               <label key={choice} className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-white border border-slate-200 rounded-2xl cursor-pointer hover:border-hayrok-orange transition-all">
                                  <input type="radio" name="regulated" className="w-4 h-4 accent-hayrok-orange" />
                                  <span className="text-sm font-black text-slate-600">{choice}</span>
                               </label>
                             ))}
                          </div>
                       </div>
                    </div>
                  </div>

                  {/* Deal Registration (Optional) */}
                  <div className="space-y-10 pt-10 border-t border-slate-200">
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-hayrok-orange shadow-sm">
                            <Zap size={18} />
                          </div>
                          <h4 className="text-xl font-black text-slate-900 uppercase tracking-widest text-sm">4. Deal Registration (Optional)</h4>
                       </div>
                       <div className="flex items-center gap-3 bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-2">Active Opportunity?</span>
                          <button 
                            type="button"
                            onClick={() => setHasDeal(!hasDeal)}
                            className={`px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${hasDeal ? 'bg-hayrok-orange text-white' : 'bg-slate-100 text-slate-500'}`}
                          >
                             {hasDeal ? 'Yes' : 'No'}
                          </button>
                       </div>
                    </div>

                    <AnimatePresence>
                      {hasDeal && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden space-y-8"
                        >
                          <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Account / Company Name</label>
                              <input type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-hayrok-orange transition-all font-bold text-slate-900" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Estimated Timing</label>
                              <select className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none appearance-none font-bold text-slate-900">
                                <option>0–30 days</option>
                                <option>30–90 days</option>
                                <option>90+ days</option>
                              </select>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Notes</label>
                            <textarea rows={3} placeholder="Additional context on the deal..." className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-hayrok-orange transition-all font-bold text-slate-900" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Consent & Submit */}
                  <div className="space-y-8 pt-10 border-t border-slate-200">
                    <div className="space-y-4">
                      <label className="flex items-start gap-4 p-6 bg-white border border-slate-100 rounded-[2rem] cursor-pointer hover:border-hayrok-orange transition-all">
                        <input required type="checkbox" className="mt-1 w-5 h-5 accent-hayrok-orange shrink-0" />
                        <span className="text-sm font-bold text-slate-600 leading-relaxed">I confirm I am authorized to submit this request on behalf of my company and agree Hayrok may contact me about this partnership inquiry. *</span>
                      </label>
                      <label className="flex items-start gap-4 p-6 bg-white border border-slate-100 rounded-[2rem] cursor-pointer hover:border-hayrok-orange transition-all">
                        <input type="checkbox" className="mt-1 w-5 h-5 accent-hayrok-orange shrink-0" />
                        <span className="text-sm font-bold text-slate-600 leading-relaxed">Subscribe to partner updates and platform announcements (Optional).</span>
                      </label>
                    </div>

                    <div className="p-6 bg-slate-900/5 rounded-2xl border border-slate-200 flex items-start gap-4">
                       <Info size={18} className="text-slate-400 shrink-0 mt-0.5" />
                       <p className="text-xs text-slate-500 font-medium leading-relaxed">
                          <span className="font-black text-slate-900 uppercase text-[9px] block mb-1">Privacy Notice</span>
                          Information submitted is used solely to evaluate and respond to your partnership request. We do not sell your data.
                       </p>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="w-full py-8 bg-hayrok-orange text-white rounded-[2rem] font-black text-base uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-orange-600 transition-all shadow-2xl shadow-orange-500/20 disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      {formStatus === 'submitting' ? (
                        <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Submit Partner Application
                          <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-6">The Journey</h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">What Happens Next.</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
           {/* Connecting Line */}
           <div className="absolute top-12 left-1/4 right-1/4 h-px bg-slate-100 hidden md:block" />
           
           {[
             { title: "Review", desc: "Your submission is reviewed by the Partner team for initial fit.", icon: Search },
             { title: "Discovery", desc: "If aligned, we schedule a call to explore integration scope and GTM motion.", icon: MessageSquare },
             { title: "Onboarding", desc: "We outline next steps, shared goals, and enable your team on the platform.", icon: Rocket }
           ].map((step, i) => (
             <div key={i} className="text-center relative">
                <div className="w-24 h-24 bg-white border border-slate-100 rounded-[2rem] flex items-center justify-center text-hayrok-orange mx-auto mb-10 shadow-xl relative z-10">
                   <step.icon size={32} strokeWidth={2.5} />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4">{step.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Contact Footer Strip */}
      <section className="container mx-auto px-6 mb-48 relative z-10">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[40%] h-full bg-hayrok-orange/10 blur-[120px] rounded-full" />
           <div className="relative z-10">
              <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-8">Direct Contact</h3>
              <p className="text-3xl md:text-5xl font-black mb-10 tracking-tight">Prefer direct email?</p>
              <a href="mailto:partners@hayrok.com" className="inline-flex items-center gap-4 text-2xl md:text-4xl font-black text-white hover:text-hayrok-orange transition-colors group">
                 <Mail size={32} className="text-hayrok-orange group-hover:scale-110 transition-transform" />
                 partners@hayrok.com
              </a>
           </div>
        </div>
      </section>

      <div className="h-32"></div>
    </div>
  );
};
