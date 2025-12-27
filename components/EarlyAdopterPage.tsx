
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, ShieldCheck, Bot, Target, Zap, 
  ArrowRight, CheckCircle2, Info, Send,
  Users, Layers, BarChart3, Gavel, 
  MessageSquare, FileText, Globe, 
  Lock, Search, Sparkles, Activity
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

export const EarlyAdopterPage: React.FC = () => {
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
            <Rocket size={12} className="animate-pulse" />
            Limited Program
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.95] tracking-tight text-slate-900">
            Hayrok Early <br/>
            <span className="bg-gradient-to-r from-hayrok-orange to-indigo-600 bg-clip-text text-transparent italic tracking-tighter">Adopter Program.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-4xl mx-auto mb-12">
            Evaluate, influence, and adopt governed AI-driven security early. Built for organizations operating within enterprise-grade expectations of transparency and oversight.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
             <a href="#apply-form" className="w-full sm:w-auto bg-hayrok-orange text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2">
                Apply to the Program
                <ArrowRight size={16} />
             </a>
             <button className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Talk to a Security Architect
                <MessageSquare size={16} />
             </button>
          </div>
        </div>
      </section>

      {/* Who the Program Is For */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="bg-slate-900 rounded-[4rem] p-10 md:p-24 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-grid-white opacity-[0.05]" />
          <div className="absolute top-0 right-0 w-[50%] h-full bg-hayrok-orange/10 blur-[120px] rounded-full" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-8">Target Profile</h3>
              <h4 className="text-4xl md:text-6xl font-black mb-10 tracking-tight leading-tight">
                Designed for <br/> <span className="text-slate-400 italic">High-Stakes Teams.</span>
              </h4>
              <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                We are looking for organizations that prioritize validation of practical, exploitable risk and require governed, auditable AI.
              </p>
              
              <div className="space-y-4">
                 {[
                   "Evaluating CTEM or exposure management",
                   "Need evidence-backed risk prioritization",
                   "Operate in regulated or sensitive sectors",
                   "Want to influence AI security standards"
                 ].map((profile, i) => (
                    <div key={i} className="flex items-center gap-4">
                       <CheckCircle2 size={18} className="text-hayrok-orange shrink-0" />
                       <span className="text-sm font-bold text-slate-300 uppercase tracking-wide">{profile}</span>
                    </div>
                 ))}
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-[3rem] p-10 backdrop-blur-xl">
               <h5 className="text-xs font-black text-hayrok-orange uppercase tracking-[0.3em] mb-10">Typical Participants</h5>
               <div className="grid grid-cols-1 gap-4">
                  {[
                    { label: "Security & Risk Leaders", icon: ShieldCheck },
                    { label: "AppSec & Product Security", icon: Layers },
                    { label: "DevSecOps & Platform Teams", icon: Bot },
                    { label: "GRC & Compliance Stakeholders", icon: Gavel },
                    { label: "MSSPs & Managed Services", icon: Zap }
                  ].map((p, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
                       <p.icon size={18} className="text-hayrok-orange" />
                       <span className="text-sm font-bold text-white">{p.label}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="flex items-center gap-6 mb-16">
          <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.5em] shrink-0">Program Benefits</span>
          <div className="h-px w-full bg-slate-100" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: "Structured Access", 
              icon: Layout, 
              desc: "Time-bound access to platform capabilities including Hive, Genesis, and CodeFabrics.",
              items: ["Hive (Intelligence)", "Genesis (Validation)", "CodeFabrics (AppSec)"]
            },
            { 
              title: "Direct Engagement", 
              icon: MessageSquare, 
              desc: "Collaborate directly with our product and security architects to influence the roadmap.",
              items: ["Roadmap influence", "Architecture review", "Feedback sessions"]
            },
            { 
              title: "Governance Ready", 
              icon: Gavel, 
              desc: "Evaluation aligned with enterprise oversight, featuring policy-bound automation.",
              items: ["Audit-ready evidence", "HITL workflows", "Policy-based controls"]
            },
            { 
              title: "Commercial Priority", 
              icon: Zap, 
              desc: "Special early adopter terms and priority for long-term platform adoption paths.",
              items: ["Incentivized terms", "Priority support", "Strategic alignment"]
            }
          ].map((benefit, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] hover:bg-white hover:shadow-xl transition-all duration-500 group flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-hayrok-orange mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <benefit.icon size={22} />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-4">{benefit.title}</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8 flex-1">{benefit.desc}</p>
              <ul className="space-y-2 pt-6 border-t border-slate-100">
                {benefit.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <CheckCircle2 size={10} className="text-hayrok-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Anti-Value (What it is NOT) */}
        <div className="mt-12 p-8 bg-orange-50 border border-orange-100 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-orange-200 flex items-center justify-center text-hayrok-orange">
                 <Info size={18} />
              </div>
              <div>
                 <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.3em]">Program Boundaries</p>
                 <p className="text-sm font-bold text-slate-700">Participation is selective to ensure meaningful outcomes.</p>
              </div>
           </div>
           <div className="flex flex-wrap gap-4">
              {["No Unmanaged AI", "Not an Open Beta", "No Control Trade-offs"].map((txt, i) => (
                 <span key={i} className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-4 py-2 bg-white rounded-lg border border-orange-100">
                    {txt}
                 </span>
              ))}
           </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-6">Evaluation Focus</h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">Example Use Cases.</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {[
             { title: "CTEM Maturity", desc: "Establish or mature a CTEM program from discovery to prioritized action.", icon: Target },
             { title: "Exploit Validation", desc: "Validate exploitability across cloud, apps, and identities autonomously.", icon: Zap },
             { title: "Audit & Reporting", desc: "Generate evidence for audit, board, or regulatory discussions.", icon: FileText }
           ].map((uc, i) => (
             <div key={i} className="p-10 bg-white border border-slate-200 rounded-[3rem] text-center hover:border-hayrok-orange transition-all group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-hayrok-orange mx-auto mb-8 shadow-inner group-hover:scale-110 transition-transform">
                   <uc.icon size={28} strokeWidth={2.5} />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4">{uc.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{uc.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="container mx-auto px-6 mb-40 relative z-10 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          {formStatus === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-50 border border-emerald-100 rounded-[3rem] p-12 md:p-24 text-center shadow-2xl"
            >
              <div className="w-24 h-24 bg-emerald-500 text-white rounded-[2rem] flex items-center justify-center mb-10 mx-auto shadow-xl shadow-emerald-500/20">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Application Received.</h3>
              <p className="text-xl text-slate-600 font-medium max-w-lg mx-auto mb-10 leading-relaxed">
                Thank you for applying to the Hayrok Early Adopter Program. Our team will review your application and follow up for an intake discussion.
              </p>
              <div className="flex flex-col items-center gap-6">
                <div className="h-px w-24 bg-emerald-200" />
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
                  <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Early Adopter Application</h3>
                  <p className="text-lg text-slate-500 font-medium">Please provide your organization and evaluation details below.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-16">
                  {/* Organization Info */}
                  <div className="space-y-10">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-hayrok-orange shadow-sm">
                        <Globe size={18} />
                      </div>
                      <h4 className="text-xl font-black text-slate-900 uppercase tracking-widest text-sm">1. Organization</h4>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Company Name *</label>
                        <input required type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-hayrok-orange transition-all font-bold text-slate-900 shadow-sm" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Company Website *</label>
                        <input required type="url" placeholder="https://" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-hayrok-orange transition-all font-bold text-slate-900 shadow-sm" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Industry *</label>
                        <select required className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-hayrok-orange transition-all font-bold text-slate-900 appearance-none shadow-sm">
                          <option value="">Select Industry</option>
                          <option>Financial Services</option>
                          <option>SaaS / Technology</option>
                          <option>Healthcare</option>
                          <option>Public Sector</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Company Size *</label>
                        <select required className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-hayrok-orange transition-all font-bold text-slate-900 appearance-none shadow-sm">
                          <option value="">Select Size</option>
                          <option>1–200</option>
                          <option>201–1,000</option>
                          <option>1,001–5,000</option>
                          <option>5,000+</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-4">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Security Environment *</label>
                       <div className="flex flex-wrap gap-3">
                          {['Cloud', 'Hybrid', 'On-prem', 'Multi-cloud'].map(env => (
                            <label key={env} className="flex items-center gap-3 px-5 py-3 bg-white border border-slate-200 rounded-xl cursor-pointer hover:border-hayrok-orange transition-all group shadow-sm">
                               <input type="checkbox" className="w-4 h-4 accent-hayrok-orange" />
                               <span className="text-xs font-black text-slate-600 group-hover:text-slate-900">{env}</span>
                            </label>
                          ))}
                       </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-10">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-hayrok-orange shadow-sm">
                        <Users size={18} />
                      </div>
                      <h4 className="text-xl font-black text-slate-900 uppercase tracking-widest text-sm">2. Primary Contact</h4>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name *</label>
                        <input required type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-hayrok-orange transition-all font-bold text-slate-900 shadow-sm" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Work Email *</label>
                        <input required type="email" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-hayrok-orange transition-all font-bold text-slate-900 shadow-sm" />
                      </div>
                    </div>
                  </div>

                  {/* Evaluation Details */}
                  <div className="space-y-10">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-hayrok-orange shadow-sm">
                        <Search size={18} />
                      </div>
                      <h4 className="text-xl font-black text-slate-900 uppercase tracking-widest text-sm">3. Evaluation Focus</h4>
                    </div>

                    <div className="space-y-4">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Primary Evaluation Areas *</label>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            'CTEM (discovery, prioritization, mobilization)',
                            'Security validation (BAS-aligned)',
                            'Application & supply-chain risk',
                            'Executive / governance reporting',
                            'Audit & compliance evidence',
                            'MSSP / multi-tenant evaluation'
                          ].map(area => (
                            <label key={area} className="flex items-center gap-3 px-5 py-4 bg-white border border-slate-200 rounded-2xl cursor-pointer hover:border-hayrok-orange transition-all shadow-sm">
                               <input type="checkbox" className="w-4 h-4 accent-hayrok-orange shrink-0" />
                               <span className="text-[10px] font-black text-slate-600 uppercase tracking-tight">{area}</span>
                            </label>
                          ))}
                       </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Problem You're Evaluating *</label>
                       <textarea required rows={4} placeholder="Describe what you need to validate or prove (2–4 sentences)..." className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-hayrok-orange transition-all font-bold text-slate-900 shadow-sm" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Target Start *</label>
                          <select required className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none font-bold text-slate-900 shadow-sm appearance-none">
                            <option>Immediate</option>
                            <option>30 days</option>
                            <option>60–90 days</option>
                            <option>90+ days</option>
                          </select>
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Evaluation Readiness *</label>
                          <select required className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none font-bold text-slate-900 shadow-sm appearance-none">
                            <option>Exploring</option>
                            <option>Evaluating</option>
                            <option>Active initiative</option>
                          </select>
                       </div>
                    </div>
                  </div>

                  {/* Consent & Submit */}
                  <div className="space-y-8 pt-10 border-t border-slate-200">
                    <div className="space-y-4">
                      <label className="flex items-start gap-4 p-6 bg-white border border-slate-100 rounded-[2rem] cursor-pointer hover:border-hayrok-orange transition-all shadow-sm">
                        <input required type="checkbox" className="mt-1 w-5 h-5 accent-hayrok-orange shrink-0" />
                        <span className="text-sm font-bold text-slate-600 leading-relaxed">I confirm I am authorized to submit this request and agree Hayrok may contact me about this program application. *</span>
                      </label>
                    </div>

                    <div className="p-6 bg-slate-900/5 rounded-2xl border border-slate-200 flex items-start gap-4">
                       <Info size={18} className="text-slate-400 shrink-0 mt-0.5" />
                       <p className="text-xs text-slate-500 font-medium leading-relaxed">
                          <span className="font-black text-slate-900 uppercase text-[9px] block mb-1">Privacy Notice</span>
                          Information submitted is used solely to evaluate participation in the Early Adopter Program. We do not sell your data.
                       </p>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="w-full py-8 bg-hayrok-orange text-white rounded-[2rem] font-black text-base uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-orange-600 transition-all shadow-2xl shadow-orange-500/30 disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      {formStatus === 'submitting' ? (
                        <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Submit Application
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
          <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-6">The Path to Access</h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">What Happens Next.</h3>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
           {[
             { title: "Review", desc: "Application review for organizational fit and readiness.", icon: Search },
             { title: "Intake", desc: "Short discussion with our team to explore your goals.", icon: MessageSquare },
             { title: "Alignment", desc: "Alignment on evaluation scope and success criteria.", icon: Target },
             { title: "Onboarding", desc: "Structured onboarding and platform access.", icon: Rocket }
           ].map((step, i) => (
             <div key={i} className="text-center relative">
                <div className="w-20 h-20 bg-white border border-slate-100 rounded-3xl flex items-center justify-center text-hayrok-orange mx-auto mb-8 shadow-lg relative z-10">
                   <step.icon size={28} strokeWidth={2.5} />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-3">{step.title}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{step.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Why We Run This Section */}
      <section className="container mx-auto px-6 mb-48 relative z-10">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-white text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[40%] h-full bg-hayrok-orange/10 blur-[120px] rounded-full" />
           <div className="relative z-10 max-w-4xl mx-auto">
              <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-8">Program Motivation</h3>
              <p className="text-3xl md:text-5xl font-black mb-12 tracking-tight">Built for enterprise-grade <span className="text-hayrok-orange italic">deliberate adoption.</span></p>
              <div className="grid md:grid-cols-3 gap-8">
                 {[
                   { label: "Deliberate AI", desc: "Ensuring adoption is intentional and controlled." },
                   { label: "Measurable Outcomes", desc: "Proving risk reduction in real environments." },
                   { label: "Defensible Decisions", desc: "Validating that every AI step is auditable." }
                 ].map((item, i) => (
                   <div key={i} className="space-y-2">
                      <p className="text-lg font-black text-white">{item.label}</p>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      <div className="h-32"></div>
    </div>
  );
};

const Layout = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
    <line x1="3" x2="21" y1="9" y2="9"></line>
    <line x1="9" x2="9" y1="21" y2="9"></line>
  </svg>
);
