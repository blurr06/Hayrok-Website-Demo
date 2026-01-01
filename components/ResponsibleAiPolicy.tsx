import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, ShieldCheck, UserCheck, Eye, Gavel, 
  Scale, FileText, CheckCircle2, Info, 
  ArrowRight, Mail, Sparkles, History,
  Database, Zap, Target, Layers, ShieldAlert, Users,
  ListChecks, Workflow, AlertCircle, Terminal, Lock
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

const SectionHeader = ({ title, id }: { title: string, id: string }) => (
  <div id={id} className="scroll-mt-32 mb-10 pt-10 border-t border-slate-100 first:border-0 first:pt-0">
    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{title}</h3>
  </div>
);

export const ResponsibleAiPolicy: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FCFCFA] min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-12 overflow-x-hidden relative">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <IntelligenceFabric density={1} isDark={false} />
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-orange-50/50 blur-[120px] rounded-full"></div>
      </div>

      <div className="h-32 md:h-40"></div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-hayrok-orange text-[10px] font-black mb-10 tracking-[0.4em] uppercase shadow-sm"
          >
            <Sparkles size={12} className="animate-pulse" />
            Hayrok Governance
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.95] tracking-tight text-slate-900">
            Responsible <br/>
            <span className="bg-gradient-to-r from-hayrok-orange to-indigo-600 bg-clip-text text-transparent italic tracking-tighter">AI Use Policy.</span>
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 border-b border-slate-200 pb-12">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Governed, Transparent, Human‑Led AI</h2>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                Hayrok is committed to the responsible, transparent, and governed use of artificial intelligence across our platform. AI should assist decision‑making, not replace human accountability.
              </p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Policy Version</p>
              <p className="text-xs font-bold text-slate-900">Effective: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="container mx-auto px-6 mb-48 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20">
          
          {/* Quick Nav Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
             <div className="sticky top-32 space-y-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 px-4">Policy Contents</p>
                {[
                  { label: "Scope", id: "scope" },
                  { label: "Core Principles", id: "principles" },
                  { label: "How Hayrok Uses AI", id: "usage" },
                  { label: "Prohibited Uses", id: "prohibited" },
                  { label: "Data & Privacy", id: "privacy" },
                  { label: "Model Evolution", id: "evolution" },
                  { label: "Industry Alignment", id: "alignment" },
                  { label: "Responsibilities", id: "responsibilities" }
                ].map((item) => (
                  <a 
                    key={item.id}
                    href={`#${item.id}`}
                    className="block px-4 py-2.5 text-sm font-bold text-slate-500 hover:text-hayrok-orange hover:bg-orange-50 rounded-xl transition-all"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-12 p-8 bg-slate-900 rounded-[2.5rem] text-white">
                   <Gavel size={24} className="text-hayrok-orange mb-4" />
                   <p className="text-xs font-bold leading-relaxed text-slate-300">
                     Our use of AI is guided by the principle that AI should assist decision‑making, not replace human accountability.
                   </p>
                </div>
             </div>
          </aside>

          {/* Main Text Content */}
          <main className="lg:col-span-9 space-y-20">
            
            <motion.div {...fadeInUp}>
              <SectionHeader title="Scope" id="scope" />
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                This policy outlines how AI technologies - specifically <strong>Hay‑AI</strong> - are designed, deployed, and operated to support customer trust, regulatory expectations, and enterprise governance requirements.
              </p>
              <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-sm">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-8">This policy applies to:</p>
                <div className="grid sm:grid-cols-2 gap-10">
                   <div className="space-y-4">
                      <div className="flex items-center gap-3 text-hayrok-orange">
                         <Zap size={18} />
                         <span className="text-sm font-black uppercase tracking-widest">Platform Core</span>
                      </div>
                      <ul className="space-y-4">
                        {[
                          "Hay-AI: Intelligence and orchestration layer",
                          "Capabilities in Hive, Genesis, and CodeFabrics",
                          "Future platform modules and extensions"
                        ].map((text, i) => (
                          <li key={i} className="flex gap-3 text-sm font-bold text-slate-700">
                            <CheckCircle2 size={16} className="text-hayrok-orange shrink-0 mt-0.5" />
                            {text}
                          </li>
                        ))}
                      </ul>
                   </div>
                   <div className="space-y-4">
                      <div className="flex items-center gap-3 text-indigo-500">
                         <Terminal size={18} />
                         <span className="text-sm font-black uppercase tracking-widest">Operations</span>
                      </div>
                      <ul className="space-y-4">
                        {[
                          "Internal development and testing",
                          "Operational use of AI technologies",
                          "Standardized workflow automation"
                        ].map((text, i) => (
                          <li key={i} className="flex gap-3 text-sm font-bold text-slate-700">
                            <CheckCircle2 size={16} className="text-indigo-500 shrink-0 mt-0.5" />
                            {text}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-slate-50 border border-slate-100 rounded-2xl flex items-start gap-4">
                 <AlertCircle size={18} className="text-slate-400 shrink-0 mt-0.5" />
                 <p className="text-xs text-slate-500 font-medium leading-relaxed">
                   <strong>Exclusion:</strong> This policy does not apply to customer‑owned AI models or third‑party AI systems not controlled by Hayrok.
                 </p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp}>
              <SectionHeader title="Core Principles" id="principles" />
              <div className="grid gap-8">
                {[
                  { 
                    title: "Human‑in‑the‑Loop Decision‑Making", 
                    icon: UserCheck,
                    desc: "AI systems at Hayrok are designed to support human judgment, not replace it.",
                    points: [
                      "Hay‑AI does not make final security, risk, or remediation decisions.",
                      "Customers retain full authority over acceptance and action.",
                      "Human approval is required for all material decisions."
                    ]
                  },
                  { 
                    title: "Governance by Design", 
                    icon: Gavel,
                    desc: "AI capabilities operate within policy‑bound, reviewable workflows.",
                    points: [
                      "All AI‑assisted outputs are subject to governance controls.",
                      "Outcomes are recorded in Hive, Hayrok’s system of record.",
                      "Usage is aligned with enterprise governance requirements."
                    ]
                  },
                  { 
                    title: "Transparency & Explainability", 
                    icon: Eye,
                    desc: "Hayrok prioritizes AI outputs that are understandable and reviewable.",
                    points: [
                      "Produces summaries and reasoning context - not opaque decisions.",
                      "Outputs are designed to explain why a recommendation exists.",
                      "Customers can review insights before acting."
                    ]
                  },
                  { 
                    title: "Accountability & Traceability", 
                    icon: History,
                    desc: "Responsibility for decisions always remains with human stakeholders.",
                    points: [
                      "Hive maintains traceable records of inputs and outputs.",
                      "Insights are preserved as contextual artifacts.",
                      "Enables demonstration of accountability to auditors and regulators."
                    ]
                  },
                  { 
                    title: "Risk‑Aware AI Use (AI TRiSM)", 
                    icon: ShieldCheck,
                    desc: "Designed to minimize operational, compliance, and security risk.",
                    points: [
                      "No autonomous execution or self‑directed actions.",
                      "No self‑modifying or self‑learning behavior in production.",
                      "Outputs constrained to analysis, reasoning, and orchestration."
                    ]
                  }
                ].map((principle, i) => (
                  <div key={i} className="p-10 bg-white border border-slate-200 rounded-[2.5rem] group hover:border-hayrok-orange transition-all">
                    <div className="flex flex-col md:flex-row gap-10">
                       <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-hayrok-orange shrink-0 group-hover:bg-hayrok-orange group-hover:text-white transition-all">
                          <principle.icon size={28} />
                       </div>
                       <div className="space-y-6">
                          <div>
                            <h4 className="text-2xl font-black text-slate-900 tracking-tight mb-2">{i+1}. {principle.title}</h4>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed">{principle.desc}</p>
                          </div>
                          <div className="grid sm:grid-cols-1 gap-3">
                             {principle.points.map((p, j) => (
                               <div key={j} className="flex items-start gap-3">
                                  <div className="w-1 h-1 rounded-full bg-hayrok-orange mt-2 shrink-0" />
                                  <span className="text-sm font-bold text-slate-700 leading-tight">{p}</span>
                               </div>
                             ))}
                          </div>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeInUp}>
              <SectionHeader title="How Hayrok Uses AI" id="usage" />
              <div className="p-10 md:p-16 bg-slate-900 rounded-[4rem] text-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-12 opacity-10">
                    <Bot size={280} className="text-hayrok-orange" />
                 </div>
                 <div className="relative z-10">
                    <div className="flex items-center gap-3 text-hayrok-orange font-black text-[10px] uppercase tracking-[0.5em] mb-10">
                       <Sparkles size={16} /> Hay-AI Integration
                    </div>
                    <h4 className="text-4xl font-black mb-10 leading-tight">Governed Intelligence & Orchestration</h4>
                    <p className="text-xl text-slate-300 font-medium leading-relaxed mb-12 max-w-2xl">
                      Hay‑AI is Hayrok’s intelligence layer, supporting CTEM and BAS‑aligned validation by applying graph‑based reasoning and coordinating agent workflows.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                       {[
                         "Applying graph‑based reasoning across security relationships",
                         "Coordinating agent‑based analysis workflows",
                         "Supporting hypothesis‑driven zero‑day emulation",
                         "Assisting prioritization, correlation, and decision context"
                       ].map((feat, i) => (
                         <div key={i} className="flex gap-4">
                            <CheckCircle2 size={20} className="text-hayrok-orange shrink-0" />
                            <span className="text-sm font-bold text-white leading-snug">{feat}</span>
                         </div>
                       ))}
                    </div>
                    <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
                       <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.4em] mb-4">Canonical Statement</p>
                       <p className="text-xl font-black italic text-white leading-relaxed">
                         “Hay‑AI provides AI‑assisted reasoning and orchestration to support CTEM decision‑making, with human oversight and governance enforced by Hive.”
                       </p>
                    </div>
                 </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp}>
              <SectionHeader title="Prohibited Uses" id="prohibited" />
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                Hayrok explicitly prohibits the following uses of AI within its platform:
              </p>
              <div className="grid gap-4">
                {[
                  "Autonomous security decision‑making",
                  "Self‑directed exploitation or attack execution",
                  "Unreviewable or opaque AI outputs",
                  "AI‑driven remediation without human approval",
                  "Use of AI to bypass customer security controls or policies"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-rose-50 border border-rose-100 rounded-2xl group">
                     <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-rose-500 shadow-sm shrink-0">
                        <ShieldAlert size={20} />
                     </div>
                     <span className="text-sm font-black text-rose-900 uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeInUp}>
              <SectionHeader title="Data Protection & Privacy" id="privacy" />
              <div className="space-y-8 text-lg text-slate-600 font-medium leading-relaxed">
                <p>
                  Hayrok’s AI capabilities adhere to the same data protection standards as the broader platform. Customer data is handled in accordance with contractual, regulatory, and privacy obligations.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="p-8 bg-white border border-slate-200 rounded-[2.5rem]">
                      <Lock className="text-hayrok-orange mb-6" size={32} />
                      <h5 className="font-black text-slate-900 mb-4 uppercase tracking-tight">Access & Ownership</h5>
                      <p className="text-sm leading-relaxed text-slate-500">AI‑assisted processing does not grant Hayrok ownership of customer data. Data usage is strictly limited to supporting platform functionality and customer workflows.</p>
                   </div>
                   <div className="p-8 bg-white border border-slate-200 rounded-[2.5rem]">
                      <Database className="text-indigo-500 mb-6" size={32} />
                      <h5 className="font-black text-slate-900 mb-4 uppercase tracking-tight">Data Isolation</h5>
                      <p className="text-sm leading-relaxed text-slate-500">Customer data is processed within isolated tenant contexts. We do not use customer data to train global shared models without explicit, opt-in consent.</p>
                   </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp}>
              <SectionHeader title="Model Evolution" id="evolution" />
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Hayrok continuously evaluates and refines its AI capabilities. Updates to reasoning models are tested for safety, accuracy, and bias reduction before deployment. Significant changes to AI functionality are communicated to customers in alignment with our change management policies.
              </p>
            </motion.div>

            <motion.div {...fadeInUp}>
              <SectionHeader title="Industry Alignment" id="alignment" />
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                Our approach is informed by emerging standards for AI risk management, including:
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                 {["NIST AI RMF", "ISO/IEC 42001", "EU AI Act Principles"].map((std, i) => (
                    <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-center">
                       <span className="text-sm font-black text-slate-800">{std}</span>
                    </div>
                 ))}
              </div>
            </motion.div>

            <motion.div {...fadeInUp}>
              <SectionHeader title="Responsibilities" id="responsibilities" />
              <div className="p-10 bg-white border border-slate-200 rounded-[3rem]">
                 <div className="grid md:grid-cols-2 gap-12">
                    <div>
                       <h5 className="font-black text-hayrok-orange mb-4 uppercase tracking-widest text-xs">Hayrok Responsibilities</h5>
                       <ul className="space-y-3">
                          <li className="text-sm font-bold text-slate-700 flex gap-3"><CheckCircle2 size={16} className="text-hayrok-orange shrink-0" /> Ensuring AI system safety and reliability.</li>
                          <li className="text-sm font-bold text-slate-700 flex gap-3"><CheckCircle2 size={16} className="text-hayrok-orange shrink-0" /> Maintaining transparency about AI use.</li>
                          <li className="text-sm font-bold text-slate-700 flex gap-3"><CheckCircle2 size={16} className="text-hayrok-orange shrink-0" /> Protecting customer data privacy.</li>
                       </ul>
                    </div>
                    <div>
                       <h5 className="font-black text-slate-400 mb-4 uppercase tracking-widest text-xs">Customer Responsibilities</h5>
                       <ul className="space-y-3">
                          <li className="text-sm font-bold text-slate-700 flex gap-3"><CheckCircle2 size={16} className="text-slate-400 shrink-0" /> Reviewing and approving AI recommendations.</li>
                          <li className="text-sm font-bold text-slate-700 flex gap-3"><CheckCircle2 size={16} className="text-slate-400 shrink-0" /> Configuring policies to match risk tolerance.</li>
                          <li className="text-sm font-bold text-slate-700 flex gap-3"><CheckCircle2 size={16} className="text-slate-400 shrink-0" /> Ensuring authorized use of the platform.</li>
                       </ul>
                    </div>
                 </div>
              </div>
            </motion.div>

            <div className="pt-20 border-t border-slate-200 text-center">
               <p className="text-lg font-bold text-slate-900 mb-6">Questions about our AI governance?</p>
               <a href="mailto:trust@hayrok.com" className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-hayrok-orange transition-all">
                  Contact Trust & Safety <Mail size={16} />
               </a>
            </div>

          </main>
        </div>
      </section>

      <div className="h-32 flex items-center justify-center border-t border-slate-100 bg-[#FCFCFA]">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            This policy is reviewed annually by Hayrok’s Trust & Safety Committee. Last updated: October 2024.
         </p>
      </div>
    </div>
  );
};
