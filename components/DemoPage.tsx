import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, Zap, Code, Search, Eye, 
  ArrowRight, CheckCircle2, ShieldCheck, 
  Users, Layers, Gavel, Sparkles, 
  Clock, Send, Mail, Info, Bot,
  Monitor, Terminal, ClipboardList,
  Target, Globe, ShieldAlert, Laptop
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

export const DemoPage: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
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
    <div className="bg-[#FCFCFA] min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-12 overflow-x-hidden relative">
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 overflow-hidden">
        <IntelligenceFabric density={1.2} isDark={false} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,95,0,0.04)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-hayrok-orange text-[10px] font-black shadow-sm mx-auto mb-10 tracking-[0.4em] uppercase backdrop-blur-sm"
          >
            <Sparkles size={12} className="animate-pulse" />
            Request a Hayrok Demo
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="text-6xl md:text-[8rem] font-black tracking-tight leading-[0.85] text-slate-900 mb-12"
          >
            See Governed <br />
            <span className="text-hayrok-orange italic font-light tracking-tighter">Security in Action.</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium mb-16"
          >
            Get a guided walkthrough of the Hayrok platform—built to support Continuous Threat Exposure Management (CTEM) and security validation (BAS-aligned) with reviewable, governed workflows.
          </motion.p>

          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a href="#demo-form" className="w-full sm:w-auto bg-hayrok-orange hover:bg-orange-600 text-white px-14 py-6 rounded-full font-black text-lg flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-[0_20px_40px_-10px_rgba(255,95,0,0.3)]">
              Schedule Your Demo
            </a>
            <button onClick={() => onNavigate?.('contact')} className="w-full sm:w-auto px-14 py-6 rounded-full font-black text-lg text-slate-900 border border-slate-200 hover:bg-white transition-all shadow-sm">
              Talk to a Security Architect
            </button>
          </motion.div>
        </div>
      </section>

      {/* What You'll See Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-6">Platform Experience</h2>
              <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                What we’ll explore <br/> <span className="text-slate-400 italic">together.</span>
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Hive",
                tag: "Risk Intelligence",
                icon: BarChart3,
                items: [
                  "Unified exposure signals",
                  "Contextual prioritization",
                  "Risk trending over time",
                  "Governance-ready reports"
                ],
                accent: "bg-blue-50 text-blue-600"
              },
              {
                title: "Genesis",
                tag: "Validation",
                icon: Zap,
                items: [
                  "Attack path validation",
                  "Exploitation scenarios",
                  "Evidence-driven priority",
                  "Retesting effectiveness"
                ],
                accent: "bg-hayrok-orange/10 text-hayrok-orange"
              },
              {
                title: "CodeFabrics",
                tag: "SDLC & Supply Chain",
                icon: Code,
                items: [
                  "SCA & IaC workflows",
                  "AI/ML application analysis",
                  "Secret detection flow",
                  "Validation triggering"
                ],
                accent: "bg-emerald-50 text-emerald-600"
              },
              {
                title: "Roadmap",
                tag: "Coming Soon",
                icon: Sparkles,
                items: [
                  "SurfaceIQ: EASM context",
                  "DetectIQ: Signal correlation",
                  "CTEM scoping intelligence",
                  "Prioritization insights"
                ],
                accent: "bg-slate-50 text-slate-400"
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="p-10 bg-[#FBFBF9] border border-slate-100 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all group flex flex-col"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-all group-hover:scale-110 ${feature.accent}`}>
                  <feature.icon size={28} />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.4em] mb-8">{feature.tag}</p>
                <ul className="space-y-4">
                  {feature.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm font-bold text-slate-500 leading-snug">
                      <CheckCircle2 size={16} className="text-hayrok-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who & Duration Bento */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Who it is for */}
            <div className="lg:col-span-7 bg-slate-900 rounded-[4rem] p-12 md:p-16 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <Users size={240} className="text-hayrok-orange" />
              </div>
              <div className="relative z-10">
                <h3 className="text-hayrok-orange font-black text-[10px] uppercase tracking-[0.5em] mb-10">Intended Audience</h3>
                <h4 className="text-4xl md:text-5xl font-black mb-12 tracking-tight">Built for <span className="italic text-slate-400">Stakeholders.</span></h4>
                <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    { label: "CISOs & Security Leaders", icon: ShieldCheck },
                    { label: "Security Engineering Owners", icon: Monitor },
                    { label: "AppSec & DevSecOps", icon: Terminal },
                    { label: "GRC & Audit Stakeholders", icon: ClipboardList },
                    { label: "MSSPs & Managed Services", icon: Globe }
                  ].map((p, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-hayrok-orange">
                        <p.icon size={18} />
                      </div>
                      <span className="text-sm font-bold text-slate-300 uppercase tracking-wider">{p.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Demo Options */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-[4rem] p-12 md:p-16 shadow-sm">
              <h3 className="text-slate-400 font-black text-[10px] uppercase tracking-[0.5em] mb-10">Flexible Scheduling</h3>
              <h4 className="text-3xl font-black text-slate-900 mb-10">Session <span className="text-hayrok-orange italic">Options.</span></h4>
              <div className="space-y-6">
                {[
                  { time: "30 Minutes", label: "Executive Overview", desc: "Best for leadership alignment and platform fit." },
                  { time: "60 Minutes", label: "Technical Walkthrough", desc: "Best for security engineering and evaluation teams." },
                  { time: "90 Minutes", label: "Evaluation Planning", desc: "Defining scope, success criteria, and rollout approach." }
                ].map((opt, i) => (
                  <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-white hover:border-hayrok-orange/30 transition-all group">
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-xs font-black text-hayrok-orange uppercase tracking-widest">{opt.time}</span>
                       <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-hayrok-orange" />
                    </div>
                    <h5 className="text-lg font-black text-slate-900 mb-1">{opt.label}</h5>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{opt.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Request Form Section */}
      <section id="demo-form" className="py-40 relative z-10 scroll-mt-32">
        <div className="container mx-auto px-6 max-w-6xl">
          {formStatus === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-50 border border-emerald-100 rounded-[4rem] p-12 md:p-32 text-center shadow-2xl"
            >
              <div className="w-24 h-24 bg-emerald-500 text-white rounded-3xl flex items-center justify-center mb-10 mx-auto shadow-xl shadow-emerald-500/20">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-none uppercase">Demo Requested.</h3>
              <p className="text-xl text-slate-600 font-medium max-w-lg mx-auto mb-16 leading-relaxed">
                Thank you. We have received your request and will follow up within 24 hours with scheduling options.
              </p>
              <div className="flex flex-col items-center gap-10">
                <div className="h-px w-32 bg-emerald-200" />
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="text-slate-400 font-black text-[10px] uppercase tracking-[0.6em] hover:text-hayrok-orange transition-colors"
                >
                  Send another request
                </button>
              </div>
            </motion.div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-[5rem] overflow-hidden shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-3 bg-hayrok-orange" />
              <div className="p-8 md:p-20 lg:p-32">
                <div className="mb-24">
                  <h3 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[0.9] uppercase">Request a Demo</h3>
                  <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl">Please provide your details below and we will contact you to schedule a session.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-24">
                  {/* Contact Details */}
                  <div className="space-y-12">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-hayrok-orange shadow-sm shrink-0">
                        <Users size={20} />
                      </div>
                      <h4 className="text-xl font-black text-slate-900 uppercase tracking-widest leading-none">1. Contact Details</h4>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Work Email *</label>
                        <input required type="email" placeholder="jane@enterprise.com" className="w-full bg-[#FBFBF9] border border-slate-200 rounded-2xl px-8 py-5 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900 shadow-sm" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name *</label>
                        <input required type="text" placeholder="Jane Doe" className="w-full bg-[#FBFBF9] border border-slate-200 rounded-2xl px-8 py-5 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900 shadow-sm" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Company *</label>
                        <input required type="text" placeholder="Acme Security Inc." className="w-full bg-[#FBFBF9] border border-slate-200 rounded-2xl px-8 py-5 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900 shadow-sm" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Title / Role *</label>
                        <input required type="text" placeholder="Head of Exposure Management" className="w-full bg-[#FBFBF9] border border-slate-200 rounded-2xl px-8 py-5 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900 shadow-sm" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone (Optional)</label>
                        <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-[#FBFBF9] border border-slate-200 rounded-2xl px-8 py-5 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900 shadow-sm" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Region (Optional)</label>
                        <select className="w-full bg-[#FBFBF9] border border-slate-200 rounded-2xl px-8 py-5 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900 appearance-none shadow-sm">
                          <option>North America</option>
                          <option>EMEA</option>
                          <option>APAC</option>
                          <option>LATAM</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Interests */}
                  <div className="space-y-12">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-hayrok-orange shadow-sm shrink-0">
                        <Target size={20} />
                      </div>
                      <h4 className="text-xl font-black text-slate-900 uppercase tracking-widest leading-none">2. What You Want to See</h4>
                    </div>

                    <div className="space-y-6">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Primary Interest (Multi-select)</label>
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {[
                            { id: 'hive', label: "CTEM governance (Hive)", icon: BarChart3 },
                            { id: 'genesis', label: "BAS-aligned validation (Genesis)", icon: Zap },
                            { id: 'codefabrics', label: "AppSec & Supply Chain (CodeFabrics)", icon: Code },
                            { id: 'reporting', label: "Executive / Audit Reporting", icon: ClipboardList },
                            { id: 'mssp', label: "MSSP / Multi-tenant Delivery", icon: Globe },
                            { id: 'roadmap', label: "Roadmap (SurfaceIQ / DetectIQ)", icon: Sparkles }
                          ].map(item => (
                            <label key={item.id} className="flex items-center gap-4 px-6 py-5 bg-[#FBFBF9] border border-slate-200 rounded-2xl cursor-pointer hover:border-hayrok-orange transition-all group shadow-sm">
                               <input type="checkbox" className="w-5 h-5 accent-hayrok-orange shrink-0" />
                               <div className="flex items-center gap-3">
                                  <item.icon size={16} className="text-slate-400 group-hover:text-hayrok-orange transition-colors" />
                                  <span className="text-xs font-black text-slate-600 uppercase group-hover:text-slate-900">{item.label}</span>
                               </div>
                            </label>
                          ))}
                       </div>
                    </div>

                    <div className="space-y-6">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Environment (Multi-select)</label>
                       <div className="flex flex-wrap gap-4">
                          {['Cloud', 'Hybrid', 'On-prem', 'Multi-cloud'].map(env => (
                            <label key={env} className="flex items-center gap-3 px-6 py-4 bg-[#FBFBF9] border border-slate-200 rounded-2xl cursor-pointer hover:border-hayrok-orange transition-all shadow-sm">
                               <input type="checkbox" className="w-4 h-4 accent-hayrok-orange" />
                               <span className="text-xs font-black text-slate-600 uppercase">{env}</span>
                            </label>
                          ))}
                       </div>
                    </div>

                    <div className="space-y-6">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Current Tools (Optional)</label>
                       <div className="flex flex-wrap gap-3">
                          {['SIEM', 'XDR', 'SOAR', 'SAST', 'SCA', 'ASM', 'CSPM', 'Ticketing'].map(tool => (
                            <label key={tool} className="flex items-center gap-3 px-4 py-3 bg-[#FBFBF9] border border-slate-200 rounded-xl cursor-pointer hover:border-hayrok-orange transition-all shadow-sm">
                               <input type="checkbox" className="w-3.5 h-3.5 accent-hayrok-orange" />
                               <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">{tool}</span>
                            </label>
                          ))}
                       </div>
                    </div>

                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">What problem are you trying to solve? *</label>
                       <textarea required rows={4} placeholder="Describe your primary evaluation goals (2–4 sentences)..." className="w-full bg-[#FBFBF9] border border-slate-200 rounded-[2rem] px-8 py-6 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900 shadow-sm" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                       <div className="space-y-3">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Target Timing *</label>
                          <select required className="w-full bg-[#FBFBF9] border border-slate-200 rounded-2xl px-8 py-5 focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 focus:border-hayrok-orange transition-all font-bold text-slate-900 appearance-none shadow-sm">
                             <option>Immediately</option>
                             <option>Within 30 days</option>
                             <option>60–90 days</option>
                             <option>90+ days</option>
                             <option>Just exploring</option>
                          </select>
                       </div>
                    </div>
                  </div>

                  {/* Consent & Submit */}
                  <div className="space-y-10 pt-20 border-t border-slate-100">
                    <div className="space-y-4">
                      <label className="flex items-start gap-4 p-8 bg-[#FBFBF9] border border-slate-100 rounded-[3rem] cursor-pointer hover:border-hayrok-orange transition-all group">
                        <input required type="checkbox" className="mt-1 w-6 h-6 accent-hayrok-orange shrink-0 shadow-sm" />
                        <span className="text-base font-bold text-slate-600 leading-relaxed group-hover:text-slate-900">I confirm I am authorized to submit this request and agree Hayrok may contact me about this demo and related products. *</span>
                      </label>
                      <label className="flex items-start gap-4 p-8 bg-[#FBFBF9] border border-slate-100 rounded-[3rem] cursor-pointer hover:border-hayrok-orange transition-all group">
                        <input type="checkbox" className="mt-1 w-6 h-6 accent-hayrok-orange shrink-0 shadow-sm" />
                        <span className="text-base font-bold text-slate-600 leading-relaxed group-hover:text-slate-900">Optional: Subscribe to product updates and platform announcements.</span>
                      </label>
                    </div>

                    <div className="p-8 bg-slate-900/5 rounded-[2.5rem] border border-slate-200 flex items-start gap-6">
                       <Info size={24} className="text-slate-400 shrink-0 mt-0.5" />
                       <p className="text-sm text-slate-500 font-medium leading-relaxed">
                          <span className="font-black text-slate-900 uppercase text-[10px] block mb-2 tracking-widest">Privacy Notice</span>
                          Information submitted is used solely to evaluate and respond to your demo request. We do not sell or share your data with unauthorized third parties.
                       </p>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="w-full py-10 bg-hayrok-orange text-white rounded-[3rem] font-black text-xl uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-orange-600 transition-all shadow-[0_30px_60px_-15px_rgba(255,95,0,0.4)] disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                    >
                      {formStatus === 'submitting' ? (
                        <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                          <span className="relative z-10">Submit Demo Request</span>
                          <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
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

      {/* What Happens Next */}
      <section className="py-40 bg-[#FBFBF9]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-6">The Journey</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-tight">What Happens Next.</h3>
            <p className="text-xl text-slate-500 font-medium">From request to realization, our process is designed for clarity.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative max-w-6xl mx-auto">
             {/* Background Line */}
             <div className="absolute top-16 left-1/4 right-1/4 h-px bg-slate-200 hidden md:block" />
             
             {[
               { title: "Intake", desc: "We review your request and route it to the right specialist for your industry and stack.", icon: Search },
               { title: "Scheduling", desc: "You receive a personal follow-up with calendar options to schedule your live walkthrough.", icon: ClipboardList },
               { title: "Discovery", desc: "During the demo, we align on evaluation scope and specific success criteria for your team.", icon: Laptop }
             ].map((step, i) => (
               <div key={i} className="text-center relative">
                  <div className="w-32 h-32 bg-white border border-slate-100 rounded-[3rem] flex items-center justify-center text-hayrok-orange mx-auto mb-10 shadow-xl relative z-10 group transition-all hover:scale-110">
                     <step.icon size={40} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-4">{step.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed px-4">{step.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Prefer Email Footer */}
      <section className="py-40 text-center">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl group">
             <div className="absolute top-0 right-0 w-[50%] h-full bg-hayrok-orange/10 blur-[120px] rounded-full group-hover:bg-hayrok-orange/20 transition-all duration-700" />
             <div className="relative z-10">
                <h3 className="text-hayrok-orange font-black text-[10px] uppercase tracking-[0.6em] mb-12">Prefer Direct Contact?</h3>
                <p className="text-4xl md:text-6xl font-black mb-16 tracking-tight leading-none">Let’s connect <br/> <span className="text-slate-400 italic">via email.</span></p>
                <div className="flex flex-col items-center gap-10">
                   <a href="mailto:demo@hayrok.com" className="inline-flex items-center gap-4 text-2xl md:text-5xl font-black text-white hover:text-hayrok-orange transition-colors">
                      <Mail size={48} className="text-hayrok-orange" />
                      demo@hayrok.com
                   </a>
                   <div className="h-px w-24 bg-white/10" />
                   <p className="text-xs font-black text-slate-500 uppercase tracking-[0.8em]">Governance-Ready Security Intelligence</p>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Signature Footer */}
      <div className="h-24 flex items-center justify-center border-t border-slate-100 bg-white">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            Hayrok demo requests are handled by security specialists to ensure technical and strategic alignment for Continuous Threat Exposure Management.
         </p>
      </div>
    </div>
  );
};