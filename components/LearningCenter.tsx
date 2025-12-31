import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, BookOpen, Zap, ShieldCheck, 
  Target, BarChart3, Bot, Gavel, Users, 
  ArrowRight, CheckCircle2, Info, Search, 
  Layers, Lock, Database, Terminal, Globe, 
  Activity, History, Scale, FileText, 
  ChevronRight, Sparkles, ClipboardCheck,
  UserPlus, ShieldAlert, Cpu, Eye,
  PlayCircle, Clock, Award
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

const MODULES = [
  {
    id: 'intro',
    title: "Introduction to Hayrok",
    tag: "Level 101",
    desc: "Understanding the platform mission and the category of Security Risk Intelligence.",
    icon: Sparkles
  },
  {
    id: 'ctem',
    title: "The CTEM Framework",
    tag: "Level 102",
    desc: "How Hayrok aligns with Continuous Threat Exposure Management lifecycles.",
    icon: Target
  },
  {
    id: 'mechanics',
    title: "Platform Mechanics",
    tag: "Level 201",
    desc: "Deep-dive into Hive logic, Genesis validation, and CodeFabrics governance.",
    icon: Cpu
  },
  {
    id: 'data-trust',
    title: "Data & Compliance",
    tag: "Level 202",
    desc: "Our classification matrix, encryption standards, and residency controls.",
    icon: ShieldCheck
  },
  {
    id: 'rbac-governance',
    title: "IAM & Role Governance",
    tag: "Level 301",
    desc: "Managing users, separation of duties, and human-in-the-loop approvals.",
    icon: Gavel
  }
];

export const LearningCenter: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('intro');

  return (
    <div className="bg-[#FCFCFA] min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-24 overflow-x-hidden relative">
      <IntelligenceFabric density={1.2} isDark={false} />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-12 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-900 text-[10px] font-black shadow-sm mb-10 tracking-[0.4em] uppercase"
          >
            <GraduationCap size={12} className="text-hayrok-orange" />
            Hayrok Academy
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[8rem] font-black tracking-tight leading-[0.9] text-slate-900 mb-10 uppercase"
          >
            Master <br/>
            <span className="text-hayrok-orange italic font-light tracking-tighter">The Platform.</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium mb-12"
          >
            Foundational knowledge for customers and developers. Build trust through understanding.
          </motion.p>
        </div>
      </section>

      {/* Progress & Quick Nav */}
      <section className="container mx-auto px-6 mb-20 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
             {MODULES.map((mod) => (
               <button 
                 key={mod.id}
                 onClick={() => setActiveTab(mod.id)}
                 className={`p-6 rounded-[2rem] border transition-all duration-500 text-left group flex flex-col h-full ${activeTab === mod.id ? 'bg-white border-hayrok-orange shadow-2xl shadow-orange-500/10' : 'bg-slate-50 border-slate-200 hover:border-slate-300'}`}
               >
                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 transition-all ${activeTab === mod.id ? 'bg-hayrok-orange text-white' : 'bg-white text-slate-400 border border-slate-100'}`}>
                    <mod.icon size={20} />
                 </div>
                 <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{mod.tag}</span>
                 <h4 className={`text-sm font-black uppercase tracking-tight leading-tight ${activeTab === mod.id ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'}`}>{mod.title}</h4>
               </button>
             ))}
          </div>
        </div>
      </section>

      {/* Dynamic Content Display */}
      <section className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'intro' && (
              <motion.div 
                key="intro"
                {...fadeInUp}
                className="bg-white border border-slate-200 rounded-[4rem] p-12 md:p-24 shadow-2xl relative overflow-hidden"
              >
                 <div className="grid lg:grid-cols-2 gap-20">
                    <div>
                       <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 leading-tight uppercase tracking-tight">
                         The <span className="text-hayrok-orange">Visibility</span> <br/> Paradox.
                       </h2>
                       <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
                         Security teams are inundated with visibility tools. Scanners find "vulnerabilities," posture tools find "misconfigurations." 
                       </p>
                       <p className="text-lg text-slate-500 font-medium leading-relaxed mb-12">
                         The result is a decision bottleneck. High-volume data without technical proof leads to inaction. Hayrok was built to move organizations from visibility to <strong>validated outcomes</strong>.
                       </p>
                       <div className="grid grid-cols-1 gap-4">
                          {[
                            "Turn telemetry into prioritized decisions",
                            "Validate exploitability with technical proof",
                            "Govern AI actions with policy-as-code",
                            "Track real risk reduction over time"
                          ].map((text, i) => (
                             <div key={i} className="flex gap-4 items-center">
                                <CheckCircle2 className="text-hayrok-orange shrink-0" size={18} />
                                <span className="text-sm font-bold text-slate-900 uppercase tracking-tight">{text}</span>
                             </div>
                          ))}
                       </div>
                    </div>
                    <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden flex flex-col justify-center shadow-2xl">
                       <div className="absolute top-0 right-0 p-12 opacity-5">
                          <Layers size={200} className="text-hayrok-orange" />
                       </div>
                       <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-8">Key Outcome</h3>
                       <p className="text-3xl font-black italic leading-tight mb-8">
                          “Stop managing lists. Start managing risk — with proof.”
                       </p>
                       <div className="flex items-center gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-hayrok-orange animate-pulse" />
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Canonical Platform Vision</span>
                       </div>
                    </div>
                 </div>
              </motion.div>
            )}

            {activeTab === 'ctem' && (
              <motion.div 
                key="ctem"
                {...fadeInUp}
                className="bg-slate-900 border border-white/5 rounded-[4rem] p-12 md:p-24 text-white shadow-2xl relative overflow-hidden"
              >
                 <div className="absolute inset-0 bg-grid-white opacity-5" />
                 <h2 className="text-4xl md:text-7xl font-black mb-16 tracking-tight leading-none uppercase">Continuous Threat <br/> <span className="text-hayrok-orange">Exposure Management.</span></h2>
                 
                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      { step: "01 Scope", desc: "Define the operational and business criticality of assets across code, cloud, and identity.", i: Globe },
                      { step: "02 Discover", desc: "Aggregate signals from all scanners and external exposure indicators into a unified layer.", i: Search },
                      { step: "03 Validate", desc: "Attempt safe, controlled simulations to confirm exploitability in your environment.", i: Zap },
                      { step: "04 Govern", desc: "Document the decision rationale and remediation outcome for audit and board review.", i: Gavel }
                    ].map((step, i) => (
                      <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] group hover:bg-hayrok-orange transition-all">
                         <step.i className="text-hayrok-orange mb-8 group-hover:text-white transition-colors" size={32} />
                         <h4 className="text-xl font-black mb-4 uppercase tracking-tight">{step.step}</h4>
                         <p className="text-sm text-slate-400 font-medium leading-relaxed group-hover:text-white/80">{step.desc}</p>
                      </div>
                    ))}
                 </div>
              </motion.div>
            )}

            {activeTab === 'data-trust' && (
              <motion.div 
                key="data-trust"
                {...fadeInUp}
                className="space-y-8"
              >
                 <div className="bg-white border border-slate-200 rounded-[4rem] p-12 md:p-20 shadow-xl">
                    <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-12">Security Frameworks</h3>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-16 tracking-tight uppercase leading-none">Data Classification <br/> <span className="text-slate-400">Matrix.</span></h2>
                    
                    <div className="overflow-x-auto">
                       <table className="w-full text-left">
                          <thead>
                             <tr className="border-b border-slate-100">
                                <th className="pb-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Data Class</th>
                                <th className="pb-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Level</th>
                                <th className="pb-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Protection Req</th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-50">
                             {[
                               { c: "System Metadata", l: "Public", p: "No restrictions; architecture docs, marketing site data." },
                               { c: "Scan Config Data", l: "Internal", p: "RBAC, encrypted in transit (TLS 1.2+), OPA API access." },
                               { c: "Customer Asset Metadata", l: "Confidential", p: "AES-256 rest, mTLS services, tenant isolation." },
                               { c: "Credentials & Secrets", l: "Restricted", p: "Secure KMS, strict OPA deny unless authorized agent." },
                               { c: "PII / PHI", l: "Highly Sensitive", p: "Region-specific compliance, data residency enforcement." }
                             ].map((row, i) => (
                               <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                                  <td className="py-6 pr-10 font-black text-slate-900 uppercase tracking-tight text-lg">{row.c}</td>
                                  <td className="py-6 pr-10">
                                     <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${row.l === 'Public' ? 'bg-slate-100 text-slate-500' : row.l === 'Restricted' ? 'bg-orange-50 text-hayrok-orange' : 'bg-hayrok-dark text-white'}`}>
                                        {row.l}
                                     </span>
                                  </td>
                                  <td className="py-6 text-sm font-medium text-slate-500 max-w-sm">{row.p}</td>
                               </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                 </div>

                 <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-12 bg-slate-50 border border-slate-200 rounded-[3rem]">
                       <h4 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.4em] mb-8">Infrastructure Trust</h4>
                       <div className="space-y-6">
                          {[
                            { t: "Tenant Isolation", d: "Logical separation enforced by identity and tenant claims.", i: ShieldCheck },
                            { t: "Encryption Standards", d: "AES-256 at rest, TLS 1.2+ in transit, KMS managed keys.", i: Lock },
                            { t: "Region Residency", d: "Enforced data residency for HIPAA/GDPR compliance.", i: Globe }
                          ].map((item, i) => (
                             <div key={i} className="flex gap-4">
                                <item.i className="text-hayrok-orange shrink-0" size={20} />
                                <div>
                                   <p className="text-base font-black text-slate-900 uppercase tracking-tight">{item.t}</p>
                                   <p className="text-sm text-slate-500 font-medium">{item.d}</p>
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>
                    <div className="p-12 bg-hayrok-dark rounded-[3rem] text-white flex flex-col justify-center relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-8 opacity-5">
                          <Bot size={180} className="text-hayrok-orange" />
                       </div>
                       <h4 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.4em] mb-8">AI Accountability</h4>
                       <p className="text-xl font-bold leading-relaxed mb-10 relative z-10">
                          Hayrok does not train global AI models on customer findings. Your reasoning environment is isolated and policy-bound.
                       </p>
                       <button onClick={() => onNavigate?.('responsible-ai-policy')} className="text-hayrok-orange font-black uppercase text-[10px] tracking-widest flex items-center gap-2 group">
                          View Responsible AI Policy <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                       </button>
                    </div>
                 </div>
              </motion.div>
            )}

            {activeTab === 'rbac-governance' && (
              <motion.div 
                key="rbac-governance"
                {...fadeInUp}
                className="space-y-8"
              >
                 <div className="bg-white border border-slate-200 rounded-[4rem] p-12 md:p-20 shadow-xl">
                    <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-12">User Governance</h3>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-12 tracking-tight uppercase leading-none">Role‑Based <br/> <span className="text-slate-400">Access Control.</span></h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                       {[
                         { r: "Platform Admin", d: "Tenant-level controls, billing, user provisioning, and audit logs.", i: ShieldCheck },
                         { r: "Security Engineer", d: "Manage scans, tune policies, and request/review exploit validations.", i: Zap },
                         { r: "Developer", d: "Trigger scans for assigned apps, view findings, and apply fixes.", i: CodeIcon }
                       ].map((role, i) => (
                         <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm text-hayrok-orange flex items-center justify-center mb-6">
                               <role.i size={24} />
                            </div>
                            <h5 className="font-black text-slate-900 uppercase tracking-tight mb-3">{role.r}</h5>
                            {/* Fixed property access error: 'role.desc' did not exist on the type. Using 'role.d' instead. */}
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">{role.d}</p>
                         </div>
                       ))}
                    </div>

                    <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-12 opacity-5">
                          <Users size={160} className="text-hayrok-orange" />
                       </div>
                       <div className="max-w-2xl relative z-10">
                          <h4 className="text-2xl font-black mb-6">Human‑in‑the‑Loop (HITL)</h4>
                          <p className="text-lg text-slate-400 font-medium leading-relaxed mb-8">
                            Certain high-impact actions—like destructive exploit runs in production—require explicit human approval and often two-person rule verification.
                          </p>
                          <div className="flex gap-10">
                             <div className="flex flex-col gap-2">
                                <span className="text-[9px] font-black text-hayrok-orange uppercase tracking-widest">Policy Engine</span>
                                <span className="text-base font-bold">OPA / Rego Bound</span>
                             </div>
                             <div className="flex flex-col gap-2">
                                <span className="text-[9px] font-black text-hayrok-orange uppercase tracking-widest">Auditability</span>
                                <span className="text-base font-bold">Immutable Logic Logs</span>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </motion.div>
            )}

            {activeTab === 'mechanics' && (
              <motion.div 
                key="mechanics"
                {...fadeInUp}
                className="space-y-12"
              >
                 <div className="bg-slate-50 border border-slate-200 rounded-[4rem] p-12 md:p-24 text-center">
                    <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-10 tracking-tight uppercase leading-none">Operational <br/><span className="text-hayrok-orange italic">Workflow.</span></h2>
                    <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto mb-20">
                      How Hayrok processes signals from code to cloud decisions.
                    </p>
                    
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
                       {[
                         { l: "Ingest", icon: Database, d: "Aggregating multi-tool signals." },
                         { l: "Classify", icon: Search, d: "Tagging data classes for OPA policies." },
                         { l: "Govern", icon: Gavel, iconType: 'orange', d: "OPA evaluates allow/deny logic." },
                         { l: "Validate", icon: Zap, iconType: 'orange', d: "Genesis proves exploitability." },
                         { l: "Record", icon: ClipboardCheck, d: "Audit-ready logs written to Hive." }
                       ].map((step, i) => (
                         <React.Fragment key={i}>
                            <div className="flex-1 flex flex-col items-center">
                               <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-6 shadow-xl transition-all hover:scale-110 ${step.iconType === 'orange' ? 'bg-hayrok-orange text-white' : 'bg-white text-slate-400 border border-slate-100'}`}>
                                  <step.icon size={28} />
                               </div>
                               <h5 className="font-black text-slate-900 uppercase tracking-widest text-[10px] mb-2">{step.l}</h5>
                               <p className="text-[9px] font-bold text-slate-400 leading-tight px-2">{step.d}</p>
                            </div>
                            {i < 4 && <ChevronRight className="hidden md:block text-slate-200" />}
                         </React.Fragment>
                       ))}
                    </div>
                 </div>

                 <div className="grid lg:grid-cols-2 gap-8">
                    <div className="p-12 bg-white border border-slate-200 rounded-[3rem] shadow-sm">
                       <h4 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.4em] mb-8">The Core Pillars</h4>
                       <div className="space-y-10">
                          <div>
                             <p className="text-xl font-black text-slate-900 uppercase mb-2">Hive: Intelligence Hub</p>
                             <p className="text-sm text-slate-500 font-medium leading-relaxed">Unified telemetry prioritized into evidence-backed risk decisions. The central system of record.</p>
                          </div>
                          <div>
                             <p className="text-xl font-black text-slate-900 uppercase mb-2">Genesis: Validation Core</p>
                             <p className="text-sm text-slate-500 font-medium leading-relaxed">Controlled, agent-based simulations proving real-world reachability across cloud and apps.</p>
                          </div>
                          <div>
                             <p className="text-xl font-black text-slate-900 uppercase mb-2">CodeFabrics: AppSec Gates</p>
                             <p className="text-sm text-slate-500 font-medium leading-relaxed">Governing software supply chain and code risk through automated policy gates before release.</p>
                          </div>
                       </div>
                    </div>
                    <div className="p-12 bg-slate-900 rounded-[3rem] text-white flex flex-col justify-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-white opacity-5" />
                        <h4 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.4em] mb-12">Developer Knowledge</h4>
                        <div className="space-y-6">
                           <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                              <p className="text-xs font-black text-hayrok-orange uppercase tracking-widest mb-2">Integration Standard</p>
                              <p className="text-sm font-bold">API-First interaction model supporting secure CI/CD triggers and webhook approvals.</p>
                           </div>
                           <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                              <p className="text-xs font-black text-hayrok-orange uppercase tracking-widest mb-2">Policy Language</p>
                              <p className="text-sm font-bold">Utilizes industry-standard Rego (Open Policy Agent) for transparent governance definitions.</p>
                           </div>
                        </div>
                    </div>
                 </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Academy Footer CTA */}
      <section className="container mx-auto px-6 pt-32 pb-12 relative z-10 text-center">
         <div className="max-w-4xl mx-auto p-12 md:p-24 bg-slate-900 rounded-[4rem] text-white relative overflow-hidden shadow-2xl group">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-hayrok-orange/10 blur-[120px] rounded-full transition-all duration-700" />
            <div className="relative z-10">
               <Award className="text-hayrok-orange mx-auto mb-10" size={60} />
               <h4 className="text-4xl md:text-6xl font-black mb-8 tracking-tight uppercase leading-none">Ready for a <br/> <span className="text-hayrok-orange italic">Technical Walkthrough?</span></h4>
               <p className="text-xl text-slate-400 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                 Experience the platform mechanics first-hand. Schedule a guided technical session with our security team.
               </p>
               <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button onClick={() => onNavigate?.('demo')} className="px-12 py-6 bg-hayrok-orange text-white rounded-2xl font-black text-xl hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20">
                     Request Live Technical Demo
                  </button>
                  <button onClick={() => onNavigate?.('platform')} className="px-12 py-6 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-xl hover:bg-white/10 transition-all">
                     Explore Full Platform
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* Signature Footer */}
      <div className="h-32 flex items-center justify-center border-t border-slate-100 bg-[#FCFCFA] mt-24">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            External Educational Hub. Compiled by Hayrok Research & Strategy. Information provided for strategic alignment and foundational understanding.
         </p>
      </div>
    </div>
  );
};

const CodeIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);