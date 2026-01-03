import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, CreditCard, Zap, ShieldCheck, Target, 
  ArrowRight, CheckCircle2, Bot, Lock, Layers, Gavel, 
  History, Sparkles, Database, FileText, XCircle,
  Activity, Globe, ClipboardCheck, ArrowDown,
  ShieldAlert, Cpu, TrendingUp, ShoppingCart,
  Gift, Users, HeartHandshake, Package, GitMerge,
  RefreshCw
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

export const RetailECommerce: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-12 overflow-x-hidden relative">
      
      {/* Immersive Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-slate-100 bg-[#FBFBF9]">
        <IntelligenceFabric density={1.2} isDark={false} />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 text-hayrok-orange text-[10px] font-black shadow-sm mx-auto mb-10 tracking-[0.4em] uppercase backdrop-blur-sm"
          >
            <ShoppingBag size={12} className="animate-pulse" />
            Industry Track: Retail & E-Commerce
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[8.5rem] font-black tracking-tight leading-[0.85] text-slate-900 mb-10 uppercase"
          >
            Revenue <br />
            <span className="text-hayrok-orange italic tracking-tighter">Resilience.</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-3xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium mb-12"
          >
            Protect transactions, accounts, and loyalty systems with continuous, validation-driven security. Hayrok ensures that high-velocity commerce doesn't come at the cost of customer trust.
          </motion.p>

          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={() => onNavigate?.('demo')} className="w-full sm:w-auto bg-hayrok-orange text-white px-12 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
              Protect Your Peak Season
            </button>
            <button onClick={() => onNavigate?.('contact')} className="w-full sm:w-auto px-12 py-6 rounded-2xl font-black text-xl text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all bg-white shadow-sm flex items-center gap-3">
              <CreditCard size={20} className="text-hayrok-orange" />
              Speak with a Commerce Specialist
            </button>
          </motion.div>
        </div>
      </section>

      {/* Industry Challenges Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">The Challenge</h2>
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight uppercase">
                Frictionless <br/> <span className="text-slate-400 italic">but Exposed.</span>
              </h3>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
                E-commerce thrives on frictionless customer experiences, but this openness creates a massive attack surface. From API sprawl to third-party scripts, the retail stack is a prime target for high-scale exploitation.
              </p>
              
              <div className="space-y-6">
                 {[
                   { t: "High-Traffic API Sprawl", d: "Mobile apps, web frontends, and partner integrations create a vast, often unvalidated API perimeter." },
                   { t: "Payment & Loyalty Risk", d: "Direct exposure of credit card processors and reward point systems to credential stuffing and logic flaws." },
                   { t: "Noisy Triage Bottlenecks", d: "Frequent releases generate thousands of unvalidated findings that stall deployment momentum." },
                   { t: "Peak Season Pressure", d: "The 'Freeze' problem: needing security validation before Black Friday without slowing down critical releases." }
                 ].map((p, i) => (
                    <div key={i} className="flex gap-5 items-start">
                       <ShieldAlert size={24} className="text-hayrok-orange shrink-0 mt-1" />
                       <div>
                          <p className="text-lg font-black text-slate-900 uppercase tracking-tight mb-1">{p.t}</p>
                          <p className="text-slate-500 font-medium">{p.d}</p>
                       </div>
                    </div>
                 ))}
              </div>
            </motion.div>

            <div className="relative">
               <div className="bg-slate-900 rounded-[4rem] p-12 shadow-2xl relative overflow-hidden text-white flex flex-col justify-center border border-white/5 h-[550px]">
                  <div className="absolute inset-0 bg-grid-white opacity-5" />
                  <div className="relative z-10">
                     <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.6em] mb-12">Commerce Continuity</p>
                     <p className="text-3xl md:text-5xl font-black italic text-white mb-10 leading-tight">
                        “One unvalidated <span className="text-hayrok-orange">Logic Flaw</span> <br/> during Cyber Monday <br/> costs more than <span className="text-slate-400 underline decoration-hayrok-orange underline-offset-8">our annual security budget.</span>”
                     </p>
                     <p className="text-slate-500 font-bold uppercase tracking-widest text-[11px]">The fundamental failure of retail risk.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Hayrok Helps: 4 Pillars of Retail Security */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center max-w-4xl mx-auto mb-24">
              <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">How Hayrok Helps</h2>
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">From Telemetry <br/><span className="text-hayrok-orange italic">To Transactional Truth.</span></h3>
              <p className="text-xl text-slate-500 font-medium mt-10">Hayrok moves you past theoretical "alerts" to proven exploitability across your entire customer-facing lifecycle.</p>
           </div>

           <div className="grid lg:grid-cols-4 gap-6">
              {[
                { 
                  n: "01", t: "Validate", 
                  h: "Customer Flow Proof", 
                  d: "Genesis safely validates whether AppSec findings actually impact checkout, registration, or account management flows. Prove the exploit before you panic the team.",
                  icon: ShoppingCart,
                  points: ["Checkout Logic Probing", "Account Takeover (ATO) Paths", "API Boundary Verification"]
                },
                { 
                  n: "02", t: "Identify", 
                  h: "Critical Pathing", 
                  d: "Identifies real attack paths affecting payments, loyalty systems, and sensitive user accounts. We map how an open port translates into a drained rewards account.",
                  icon: Gift,
                  points: ["Loyalty Data Isolation", "Payment Processor Mesh", "Token Exposure Validation"]
                },
                { 
                  n: "03", t: "Integrate", 
                  h: "Release Velocity", 
                  d: "Integrates with CI/CD to prevent risky releases without blocking deployment speed. We only stop the build if the risk is proven reachable and material.",
                  icon: GitMerge,
                  points: ["Reachability-aware gates", "Frictionless DevOps", "Reduced false blocks"]
                },
                { 
                  n: "04", t: "Assure", 
                  h: "Seasonal Resilience", 
                  d: "Supports modern penetration testing as a continuous, automated practice before peak seasons. Get Black Friday ready, every day.",
                  icon: RefreshCw,
                  points: ["Continuous Pentesting", "Post-Release Verification", "Audit-Ready Artifacts"]
                }
              ].map((step, i) => (
                 <motion.div 
                    key={i}
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="whileInView"
                    className="p-10 bg-slate-50 border border-slate-200 rounded-[3.5rem] group hover:bg-white hover:border-hayrok-orange hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
                 >
                    <div className="flex items-center justify-between mb-8">
                       <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-hayrok-orange shadow-sm group-hover:bg-hayrok-orange group-hover:text-white transition-all transform group-hover:rotate-3">
                          <step.icon size={28} />
                       </div>
                       <span className="text-2xl font-black text-slate-200 group-hover:text-orange-100 transition-colors">{step.n}</span>
                    </div>
                    <h4 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.4em] mb-2">{step.t}</h4>
                    <h5 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight leading-tight">{step.h}</h5>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-1">{step.d}</p>
                    <div className="space-y-3 pt-6 border-t border-slate-100">
                       {step.points.map((p, j) => (
                          <div key={j} className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                             <CheckCircle2 size={12} className="text-hayrok-orange" />
                             {p}
                          </div>
                       ))}
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Strategic Outcome Section */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
         <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="relative">
                  <div className="aspect-square max-w-lg mx-auto bg-white/5 border border-white/10 rounded-[4rem] p-12 flex flex-col items-center justify-center text-center shadow-3xl">
                     <div className="w-32 h-32 bg-hayrok-orange rounded-[2.5rem] flex items-center justify-center mb-10 shadow-2xl shadow-orange-500/30">
                        <HeartHandshake size={60} />
                     </div>
                     <h4 className="text-3xl font-black uppercase tracking-tight mb-6">Trust <br/> <span className="text-hayrok-orange italic">is the currency.</span></h4>
                     <p className="text-slate-400 font-medium leading-relaxed">
                        In e-commerce, security is the foundation of conversion. Hayrok ensures that every security decision is backed by technical proof—not just an educated guess.
                     </p>
                  </div>
                  {/* Decorative Elements */}
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute -top-10 -right-10 w-40 h-40 bg-hayrok-orange/20 blur-[80px] rounded-full" 
                  />
               </div>

               <div>
                  <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-10">Strategic Result</h2>
                  <h3 className="text-4xl md:text-6xl font-black mb-10 leading-tight uppercase tracking-tight">Defensible <br/> <span className="text-hayrok-orange">Outcomes.</span></h3>
                  <div className="space-y-10">
                     {[
                        { t: "Reduced Fraud & Breach Risk", d: "By validating actual attack paths to customer data and payments, teams eliminate material risk before it's exploited." },
                        { t: "Peak Traffic Confidence", d: "Enter peak seasons with the technical proof that your critical security boundaries are enforced and validated." },
                        { t: "Scaling with Velocity", d: "Security that acts as a partner to delivery, automating the validation of fixes and new releases." }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-6 group">
                           <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-hayrok-orange group-hover:bg-hayrok-orange group-hover:text-white transition-all">
                              <CheckCircle2 size={24} />
                           </div>
                           <div>
                              <h5 className="text-xl font-black uppercase tracking-tight mb-2">{item.t}</h5>
                              <p className="text-slate-400 font-medium leading-relaxed">{item.d}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Strategic Summary Bento */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-24">
               <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.4em] mb-6">Strategic Impact</h2>
               <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">Business <br/><span className="text-hayrok-orange italic">Resilience.</span></h3>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
               <div className="lg:col-span-8 bg-slate-50 border border-slate-200 rounded-[4rem] p-12 md:p-16 flex flex-col justify-center">
                  <h4 className="text-3xl font-black text-slate-900 mb-10 uppercase">Efficiency <span className="text-hayrok-orange">Unblocked.</span></h4>
                  <div className="grid md:grid-cols-2 gap-10">
                     <div className="space-y-4">
                        <div className="flex items-center gap-3 text-hayrok-orange">
                           <Activity size={24} strokeWidth={3} />
                           <span className="text-sm font-black uppercase tracking-widest">Efficiency</span>
                        </div>
                        <p className="text-4xl font-black text-slate-900 tracking-tighter">Reduced Triage.</p>
                        <p className="text-slate-500 font-medium">Automated validation cuts manual triage time by up to 60%, focusing teams on high-stakes business risks.</p>
                     </div>
                     <div className="space-y-4">
                        <div className="flex items-center gap-3 text-indigo-500">
                           <Zap size={24} strokeWidth={3} />
                           <span className="text-sm font-black uppercase tracking-widest">Velocity</span>
                        </div>
                        <p className="text-4xl font-black text-slate-900 tracking-tighter">Secure Velocity.</p>
                        <p className="text-slate-500 font-medium">Validated gates ensure that only material risks slow down your release cycle.</p>
                     </div>
                  </div>
               </div>

               <div className="lg:col-span-4 bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl flex flex-col justify-center text-center">
                  <div className="absolute inset-0 bg-grid-white opacity-5" />
                  <Target className="text-hayrok-orange mx-auto mb-8" size={56} />
                  <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">Zero False Blocker Gates</h4>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">
                     Ignore the noise. Focus only on the 5% of findings that are proven exploitable in your specific customer mesh.
                  </p>
                  <div className="h-px w-24 bg-white/10 mx-auto mt-10" />
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 bg-[#FCFCFA] text-center border-t border-slate-100">
         <div className="container mx-auto px-6 relative z-10">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
               <h3 className="text-5xl md:text-[10rem] font-black text-slate-900 mb-12 tracking-tight leading-[0.8] uppercase">
                 Own The <br/> <span className="text-hayrok-orange italic tracking-tighter">Outcome.</span>
               </h3>
               <p className="text-xl md:text-3xl text-slate-500 font-medium mb-16 leading-relaxed max-w-3xl mx-auto">
                  Bring clarity, credibility, and validation to your retail security program. Become the strategic partner your organization needs.
               </p>
               <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                 <button onClick={() => onNavigate?.('demo')} className="bg-hayrok-orange text-white px-16 py-8 rounded-[2rem] text-2xl font-black hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
                    Schedule Technical Walkthrough
                 </button>
                 <button onClick={() => onNavigate?.('contact')} className="px-16 py-8 rounded-[2rem] text-2xl font-black text-slate-900 border border-slate-200 hover:bg-white transition-all bg-white shadow-sm flex items-center justify-center gap-4 group">
                    Talk to a Security Expert <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                 </button>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Signature Footer */}
      <div className="h-32 flex items-center justify-center border-t border-slate-100 bg-white">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            Retail and E-Commerce solutions powered by Hayrok Hive, Genesis, and CodeFabrics. Governed, continuous, and built for measurable delivery speed and consumer trust.
         </p>
      </div>
    </div>
  );
};