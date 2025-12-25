
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, Send, Mail, ShieldCheck, 
  Users, Zap, Globe, ArrowRight, CheckCircle2,
  Building2, Briefcase, Sparkles, Clock, 
  FileText, ShieldAlert, Heart, Gavel, FileSearch
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

export const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-hayrok-orange/10 selection:text-hayrok-orange overflow-hidden font-sans relative">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(255,95,0,0.03)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute inset-0 bg-grid-white opacity-[0.03] " />
      </div>

      <div className="h-32 md:h-40"></div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-24 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div {...fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-hayrok-orange text-[10px] font-black mb-10 tracking-[0.4em] uppercase shadow-sm">
            <MessageSquare size={12} className="animate-pulse" />
            Connect with our Team
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.95] tracking-tight text-slate-900">
            Let’s Talk About <br/>
            <span className="bg-gradient-to-r from-hayrok-orange to-indigo-600 bg-clip-text text-transparent italic tracking-tighter">Trusted AI Security.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-4xl mx-auto">
            Whether you’re evaluating Hayrok, exploring a partnership, or conducting due diligence, our team is here to help. We work with organizations that care about real risk reduction and responsible AI.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: "Talk to Sales", 
              desc: "Evaluate Hayrok, request a demo, or discuss specific use cases for Hive, Genesis, or CodeFabrics.",
              target: "Best for CISOs & Technical Buyers",
              icon: Zap,
              accent: "text-hayrok-orange bg-orange-50"
            },
            { 
              title: "Partnerships", 
              desc: "Explore integrations, MSSP programs, or ecosystem collaborations to grow together.",
              target: "Best for Technology Partners & MSPs",
              icon: Users,
              accent: "text-blue-600 bg-blue-50"
            },
            { 
              title: "Trust & Compliance", 
              desc: "Questions about Responsible AI, security controls, or compliance (SOC 2, ISO 27001).",
              target: "Best for Risk & Audit Teams",
              icon: ShieldCheck,
              accent: "text-emerald-600 bg-emerald-50"
            },
            { 
              title: "Media & General", 
              desc: "Press inquiries, speaking opportunities, or general questions about our mission.",
              target: "Best for Press & Broad Interest",
              icon: Globe,
              accent: "text-indigo-600 bg-indigo-50"
            }
          ].map((cat, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              className="p-8 bg-white border border-slate-200 rounded-[2.5rem] hover:shadow-xl transition-all duration-500 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${cat.accent}`}>
                <cat.icon size={20} />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-3">{cat.title}</h4>
              <p className="text-sm text-slate-500 font-medium mb-6 leading-relaxed">{cat.desc}</p>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-t border-slate-50 pt-4">
                {cat.target}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Form Info Side */}
            <div className="lg:col-span-4">
              <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Tell us a bit about <span className="text-hayrok-orange italic">yourself.</span></h3>
              <p className="text-lg text-slate-500 font-medium mb-12">
                A member of the Hayrok team will follow up promptly to discuss how we can support your security goals.
              </p>
              
              <div className="space-y-8">
                {[
                  { label: "Automatic Routing", desc: "Your request goes to the right specialist.", icon: Zap },
                  { label: "Fast Response", desc: "Expect a reply within 1–2 business days.", icon: Clock },
                  { label: "Real Conversations", desc: "No spam. Just an expert security dialogue.", icon: Heart }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-hayrok-orange shrink-0">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">{item.label}</h5>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-12 border-t border-slate-100">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Direct Contact</p>
                <div className="space-y-4">
                  {[
                    { label: "Sales", email: "sales@hayrok.com" },
                    { label: "Partnerships", email: "partners@hayrok.com" },
                    { label: "Security", email: "security@hayrok.com" },
                    { label: "Careers", email: "careers@hayrok.com" }
                  ].map((email, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="font-bold text-slate-500">{email.label}</span>
                      <a href={`mailto:${email.email}`} className="font-black text-slate-900 hover:text-hayrok-orange transition-colors">{email.email}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Form Side */}
            <div className="lg:col-span-8">
              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-100 rounded-[3rem] p-12 text-center h-full flex flex-col items-center justify-center"
                >
                  <div className="w-20 h-20 bg-emerald-500 text-white rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-emerald-500/20">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Request Received.</h3>
                  <p className="text-lg text-slate-600 font-medium max-w-sm mx-auto mb-8">
                    Thank you for reaching out. We've routed your request to our team and will be in touch within 24–48 hours.
                  </p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="text-emerald-600 font-black text-[10px] uppercase tracking-widest"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-sm">
                  <form onSubmit={handleSubmit} className="space-y-10">
                    
                    {/* Required Section */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-8 h-[2px] bg-hayrok-orange" />
                        <span className="text-[10px] font-black text-hayrok-orange uppercase tracking-widest">Required Information</span>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                          <input required type="text" placeholder="Jane Doe" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                          <input required type="email" placeholder="jane@company.com" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Company Name</label>
                          <input required type="text" placeholder="Acme Corp" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Role / Title</label>
                          <input required type="text" placeholder="CISO" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Company Size</label>
                          <select required className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900 appearance-none">
                            <option value="">Select Size</option>
                            <option>1–50</option>
                            <option>51–200</option>
                            <option>201–1,000</option>
                            <option>1,000+</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Inquiry Type</label>
                          <select required className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900 appearance-none">
                            <option value="">Select Inquiry</option>
                            <option>Sales / Demo</option>
                            <option>Partnership</option>
                            <option>Security & Compliance</option>
                            <option>Media / General</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                        <textarea required rows={4} placeholder="How can we help?" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900" />
                      </div>
                    </div>

                    {/* Optional Section */}
                    <div className="space-y-6 pt-10 border-t border-slate-200">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-8 h-[2px] bg-slate-300" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Optional (Recommended for Sales)</span>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Industry</label>
                          <input type="text" placeholder="e.g. Financial Services" className="w-full bg-white/50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-hayrok-orange transition-all font-bold text-slate-900" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Timeline</label>
                          <select className="w-full bg-white/50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-hayrok-orange transition-all font-bold text-slate-900 appearance-none">
                            <option value="">Select Timeline</option>
                            <option>Evaluating now</option>
                            <option>This quarter</option>
                            <option>Later</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Primary Challenge</label>
                        <input type="text" placeholder="What security outcome are you solving for?" className="w-full bg-white/50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-hayrok-orange transition-all font-bold text-slate-900" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">How did you hear about us?</label>
                        <input type="text" placeholder="LinkedIn, Event, Peer Referral..." className="w-full bg-white/50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-hayrok-orange transition-all font-bold text-slate-900" />
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="w-full py-6 bg-hayrok-orange text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      {formStatus === 'submitting' ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Message
                          <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Commit Section */}
      <section className="container mx-auto px-6 mb-48 relative z-10">
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-32 text-white relative overflow-hidden shadow-2xl text-center">
          <div className="absolute inset-0 bg-grid-white opacity-5" />
          <div className="relative z-10">
            <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.6em] mb-12">Enterprise Foundations</h3>
            <p className="text-4xl md:text-6xl font-black mb-16 tracking-tight leading-tight">
               Built for environments <br/>
               <span className="text-slate-400 italic">that demand accountability.</span>
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
               {[
                 // Added Gavel and FileSearch to imports above and usage here
                 { label: "Governance-First AI", icon: Gavel },
                 { label: "Auditable Decisions", icon: FileSearch },
                 { label: "Compliance Ready", icon: ShieldCheck }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-hayrok-orange">
                       <item.icon size={20} />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest text-slate-300">{item.label}</span>
                 </div>
               ))}
            </div>

            <div className="h-px w-full bg-white/10 mb-12" />
            
            <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">
               <span>SOC 2 Type II</span>
               <span>ISO 27001</span>
               <span>PCI-DSS</span>
               <span>GDPR Ready</span>
            </div>
          </div>
        </div>
      </section>

      <div className="h-32"></div>
    </div>
  );
};
