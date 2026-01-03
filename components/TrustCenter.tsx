import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Lock, Bot, Gavel, Award, 
  ShieldAlert, Activity, Database, RefreshCw, 
  Users, HelpCircle, Mail, ChevronRight, 
  FileText, Globe, Eye, Zap, Scale, 
  Terminal, HardDrive, CheckCircle2, Info,
  AlertCircle, Download, ExternalLink, History,
  Server, Network, Cpu, Layout, ClipboardCheck
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

// Fixed ease type error by casting array to tuple
const fadeInUp = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

const tabs = [
  { id: 'overview', label: 'Security Overview', icon: ShieldCheck },
  { id: 'privacy', label: 'Privacy & Data Protection', icon: Lock },
  { id: 'responsible-ai', label: 'Responsible AI Use', icon: SparklesIcon },
  { id: 'ai-governance', label: 'AI Governance & Oversight', icon: Gavel },
  { id: 'compliance', label: 'Compliance & Certs', icon: Award },
  { id: 'vulnerability', label: 'Vulnerability Disclosure', icon: ShieldAlert },
  { id: 'incident', label: 'Incident Response', icon: Activity },
  { id: 'residency', label: 'Data Residency', icon: Database },
  { id: 'continuity', label: 'Business Continuity', icon: RefreshCw },
  { id: 'third-party', label: 'Third-Party Risk', icon: Users },
  { id: 'faq', label: 'Trust FAQ', icon: HelpCircle },
  { id: 'contact', label: 'Contact Security', icon: Mail },
];

function SparklesIcon({ size, className }: any) {
  return <Sparkles size={size} className={className} />;
}

const Sparkles = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" /><path d="M3 5h4" /><path d="M21 17v4" /><path d="M19 19h4" />
  </svg>
);

export const TrustCenter: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div {...fadeInUp} key="overview" className="space-y-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">Security Overview</h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl">
                Hayrok builds security into the core of everything we do. Our approach is based on defense-in-depth, least privilege, and continuous validation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Network Security", desc: "Encryption at rest (AES-256) and in transit (TLS 1.2+). Multi-layered firewalling and VPC isolation.", icon: Network },
                { title: "Application Security", desc: "Rigorous CodeFabrics gates, regular Genesis validation runs, and manual security reviews of core logic.", icon: Terminal },
                { title: "Identity & Access", desc: "Mandatory MFA, single sign-on (SSO) support, and RBAC aligned to least-privilege principles.", icon: Lock },
                { title: "Infrastructure Security", desc: "Cloud-native security posture management (CSPM) and immutable infrastructure deployment patterns.", icon: Server }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] group hover:bg-white hover:shadow-xl transition-all">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-hayrok-orange mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <item.icon size={22} />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'privacy':
        return (
          <motion.div {...fadeInUp} key="privacy" className="space-y-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">Privacy & Data Protection</h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl">
                We are committed to protecting the privacy of our customers and their users. Data protection is a fundamental platform design principle.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { label: "GDPR Compliance", desc: "Fully compliant with EU General Data Protection Regulation requirements.", icon: Globe },
                { label: "Data Minimization", desc: "We only collect the data necessary to provide and secure our services.", icon: Database },
                { label: "No Selling of Data", desc: "Hayrok does not sell, lease, or trade your data to third parties.", icon: ShieldCheck }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1">{item.label}</h4>
                    <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'responsible-ai':
        return (
          <motion.div {...fadeInUp} key="responsible-ai" className="space-y-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">Responsible AI Use</h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl">
                Hayrok’s AI capabilities are designed to augment human security teams responsibly, with transparency and governance at the center.
              </p>
            </div>
            <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 p-12 opacity-10">
                 <Sparkles size={200} className="text-hayrok-orange" />
               </div>
               <div className="relative z-10">
                  <h4 className="text-2xl font-black mb-8">Our AI Commitments</h4>
                  <div className="grid sm:grid-cols-2 gap-8">
                    {[
                      "Human-in-the-loop oversight is mandatory.",
                      "No automated model training on customer data.",
                      "Transparent and explainable reasoning paths.",
                      "Bias mitigation and regular model audits."
                    ].map((text, i) => (
                      <div key={i} className="flex gap-4">
                        <CheckCircle2 className="text-hayrok-orange shrink-0" size={20} />
                        <span className="text-slate-300 font-bold">{text}</span>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => onNavigate?.('responsible-ai-policy')} className="mt-12 text-hayrok-orange font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:text-white transition-colors group">
                    Read our full Responsible AI Policy <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
               </div>
            </div>
          </motion.div>
        );
      case 'ai-governance':
        return (
          <motion.div {...fadeInUp} key="ai-governance" className="space-y-12">
             <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6">AI Governance & Oversight</h2>
                <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl">
                   We implement formal controls to monitor and manage AI behavior, ensuring alignment with enterprise risk tolerance.
                </p>
             </div>
             <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "OPA Bound", icon: Gavel, desc: "AI agents are strictly bound by Open Policy Agent (OPA) rules." },
                  { title: "Decision Trace", icon: History, desc: "Every AI reasoning step is recorded for retrospective audit." },
                  { title: "Audit Ready", icon: ClipboardCheck, desc: "Automated logs designed specifically for regulatory review." }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-[2rem]">
                     <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-hayrok-orange mb-6 shadow-sm">
                        <item.icon size={20} />
                     </div>
                     <h5 className="font-black text-slate-900 mb-2 uppercase tracking-tight">{item.title}</h5>
                     <p className="text-xs text-slate-500 font-bold leading-relaxed uppercase">{item.desc}</p>
                  </div>
                ))}
             </div>
          </motion.div>
        );
      case 'compliance':
        return (
          <motion.div {...fadeInUp} key="compliance" className="space-y-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">Compliance & Certifications</h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl">
                Hayrok maintains alignment with international security standards to ensure organizational trust.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
               <div className="p-8 border border-slate-200 rounded-[3rem] bg-white flex items-center gap-6 group hover:border-hayrok-orange transition-all">
                  <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center text-hayrok-orange group-hover:bg-hayrok-orange group-hover:text-white transition-all">
                    <Award size={40} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-slate-900">SOC 2 Type II</h4>
                    <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-1">Verified Security & Availability</p>
                  </div>
               </div>
               <div className="p-8 border border-slate-200 rounded-[3rem] bg-white flex items-center gap-6 group hover:border-indigo-600 transition-all">
                  <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Award size={40} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-slate-900">ISO 27001</h4>
                    <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-1">Information Security Management</p>
                  </div>
               </div>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl flex items-center justify-between">
               <div className="flex items-center gap-4">
                  <FileText className="text-slate-400" />
                  <span className="font-bold text-slate-600">Download Compliance Package (NDA required)</span>
               </div>
               <button className="px-6 py-2 bg-white border border-slate-200 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all">
                  Request Access
               </button>
            </div>
          </motion.div>
        );
      case 'vulnerability':
        return (
          <motion.div {...fadeInUp} key="vulnerability" className="space-y-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">Vulnerability Disclosure</h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl">
                We value the contributions of the security research community. Our VDP provides a safe path for reporting potential security issues.
              </p>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-[3rem] p-12">
               <h4 className="text-xl font-black text-hayrok-orange mb-6 flex items-center gap-3 uppercase tracking-widest">
                  <ShieldAlert size={20} /> Reporting Process
               </h4>
               <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-black text-hayrok-orange shadow-sm shrink-0">1</div>
                    <p className="text-slate-700 font-medium leading-relaxed">Encrypt your report using our public PGP key and email <span className="font-black">security@hayrok.com</span>.</p>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-black text-hayrok-orange shadow-sm shrink-0">2</div>
                    <p className="text-slate-700 font-medium leading-relaxed">Our team will acknowledge receipt within 24 hours and begin technical validation.</p>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-black text-hayrok-orange shadow-sm shrink-0">3</div>
                    <p className="text-slate-700 font-medium leading-relaxed">We will keep you informed of our progress and provide a timeline for resolution.</p>
                  </div>
               </div>
            </div>
          </motion.div>
        );
      case 'incident':
        return (
          <motion.div {...fadeInUp} key="incident" className="space-y-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">Incident Response</h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl">
                Hayrok maintains a formal Incident Response Plan (IRP) to detect, contain, and remediate security events rapidly.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { title: "24/7 Monitoring", desc: "Automated alerting for infrastructure, application, and AI anomalies." },
                { title: "Rapid Containment", desc: "Pre-defined playbooks for rapid containment of security events." },
                { title: "Communication SLA", desc: "Commitment to notifying affected customers of confirmed breaches within 24-48 hours." },
                { title: "Post-Mortems", desc: "Mandatory root-cause analysis and structural fix verification for every incident." }
              ].map((item, i) => (
                <div key={i} className="p-8 border border-slate-100 rounded-3xl bg-white shadow-sm">
                  <h4 className="font-black text-slate-900 mb-2 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'residency':
        return (
          <motion.div {...fadeInUp} key="residency" className="space-y-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">Data Residency & Handling</h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl">
                Control where your data lives and how it is processed across our global cloud infrastructure.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
               <div className="flex-1 p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                  <Globe className="text-hayrok-orange mb-6" size={32} />
                  <h4 className="text-xl font-black text-slate-900 mb-4">Supported Regions</h4>
                  <ul className="space-y-3">
                    {["North America (US-East-1 / West-2)", "European Union (Frankfurt / Ireland)", "APAC (Singapore / Sydney)"].map((r, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                        <CheckCircle2 size={16} className="text-emerald-500" />
                        {r}
                      </li>
                    ))}
                  </ul>
               </div>
               <div className="flex-1 p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                  <Lock className="text-hayrok-orange mb-6" size={32} />
                  <h4 className="text-xl font-black text-slate-900 mb-4">Encryption Standards</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                    All data is encrypted with AES-256 at rest and TLS 1.2+ in transit. We support customer-managed keys (CMK) for enterprise tier users.
                  </p>
                  <span className="text-[10px] font-black text-hayrok-orange uppercase tracking-widest px-3 py-1 bg-white rounded-lg border border-orange-100">FIPS 140-2 Validated</span>
               </div>
            </div>
          </motion.div>
        );
      case 'continuity':
        return (
          <motion.div {...fadeInUp} key="continuity" className="space-y-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">Business Continuity</h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl">
                We ensure service resilience through architectural redundancy, regular backups, and disaster recovery testing.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
               {[
                 { label: "RPO: 1 Hour", icon: HardDrive },
                 { label: "RTO: 4 Hours", icon: Zap },
                 { label: "99.9% Uptime SLA", icon: Activity }
               ].map((item, i) => (
                 <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm text-center">
                    <item.icon className="mx-auto text-hayrok-orange mb-4" size={24} />
                    <p className="font-black text-slate-900 uppercase tracking-tight">{item.label}</p>
                 </div>
               ))}
            </div>
          </motion.div>
        );
      case 'third-party':
        return (
          <motion.div {...fadeInUp} key="third-party" className="space-y-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">Third‑Party Risk Management</h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl">
                We hold our vendors to the same high standards we hold ourselves. Every subprocesser undergoes rigorous security evaluation.
              </p>
            </div>
            <div className="space-y-6">
               <div className="p-10 border border-slate-200 rounded-[3rem] bg-white flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400">
                      <Users size={32} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-slate-900">Vendor Security Program</h4>
                      <p className="text-slate-500 font-medium">How we evaluate the partners that power Hayrok.</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => onNavigate?.('contact')}
                    className="px-8 py-3 bg-hayrok-dark text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-hayrok-orange transition-all shadow-lg"
                  >
                    Request Subprocessor List
                  </button>
               </div>
            </div>
          </motion.div>
        );
      case 'faq':
        return (
          <motion.div {...fadeInUp} key="faq" className="space-y-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">Trust FAQ</h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl">
                Common questions about our platform's security, privacy, and operations.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { q: "Is Hayrok's AI model trained on my data?", a: "No. Hayrok does not use customer infrastructure data or findings to train global AI models. Every organizational reasoning engine is logically isolated." },
                { q: "Where is my data stored?", a: "Data is stored in highly-available AWS or GCP regions. Customers can select their preferred data residency region upon setup." },
                { q: "How does Genesis validate risks without causing downtime?", a: "Genesis uses non-destructive, safe payloads and probes that mimic attacker logic without causing system strain or data loss, governed by strict execution policies." }
              ].map((faq, i) => (
                <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-3xl">
                  <h4 className="font-black text-slate-900 mb-3 text-lg">{faq.q}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div {...fadeInUp} key="contact" className="space-y-12">
            <div className="text-center max-w-2xl mx-auto py-12">
              <div className="w-20 h-20 bg-orange-50 rounded-3xl flex items-center justify-center text-hayrok-orange mx-auto mb-10 shadow-xl shadow-orange-500/10 animate-float">
                <Mail size={32} />
              </div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">Connect with Security</h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                Have specific questions about our security controls or compliance requirements? Reach out directly to our trust team.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <a href="mailto:security@hayrok.com" className="px-10 py-5 bg-hayrok-orange text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
                    Email Security Team
                 </a>
                 <button onClick={() => onNavigate?.('contact')} className="px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">
                    General Inquiries
                 </button>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#FCFCFA] min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-12 overflow-hidden relative">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <IntelligenceFabric density={1.2} isDark={false} />
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-orange-50/50 blur-[120px] rounded-full"></div>
      </div>

      <div className="h-32 md:h-40"></div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-hayrok-orange text-[10px] font-black mb-8 tracking-[0.4em] uppercase shadow-sm"
          >
            <ShieldCheck size={12} className="animate-pulse" />
            Reliability & Confidence
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.95] tracking-tight text-slate-900">
            The Hayrok <br/>
            <span className="bg-gradient-to-r from-hayrok-orange to-indigo-600 bg-clip-text text-transparent italic tracking-tighter">Trust Center.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-4xl">
            Complete transparency into our security operations, privacy commitments, and the governance driving our AI.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container mx-auto px-6 mb-32 relative z-10">
        <div className="bg-white border border-slate-200 rounded-[4rem] shadow-2xl overflow-hidden min-h-[800px] flex flex-col md:flex-row">
          
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-80 bg-slate-50 border-r border-slate-100 flex flex-col p-8 shrink-0">
             <div className="mb-12">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Trust Pillars</p>
                <div className="h-px w-full bg-slate-200" />
             </div>
             
             <nav className="flex-1 space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl text-sm font-bold transition-all ${
                      activeTab === tab.id 
                        ? 'bg-hayrok-orange text-white shadow-xl shadow-orange-500/20 translate-x-2' 
                        : 'text-slate-500 hover:text-slate-900 hover:bg-white hover:shadow-sm'
                    }`}
                  >
                    <tab.icon size={18} strokeWidth={activeTab === tab.id ? 2.5 : 2} />
                    <span className="truncate">{tab.label}</span>
                  </button>
                ))}
             </nav>
             
             <div className="mt-12 p-6 bg-slate-900 rounded-[2rem] text-white">
                <p className="text-[9px] font-black text-hayrok-orange uppercase tracking-widest mb-3">Live Status</p>
                <div className="flex items-center justify-between mb-4">
                   <span className="text-xs font-bold text-slate-400">All Systems</span>
                   <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-black text-emerald-500 uppercase">Operational</span>
                   </div>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                   <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="h-full w-full bg-hayrok-orange" />
                </div>
             </div>
          </aside>

          {/* Tab Content Display */}
          <main className="flex-1 p-8 md:p-20 overflow-y-auto">
             <AnimatePresence mode="wait">
                {renderContent()}
             </AnimatePresence>
          </main>

        </div>
      </section>

      {/* Footer / Contact Band */}
      <section className="container mx-auto px-6 mb-48 text-center relative z-10">
         <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-8">Can’t find what you need?</h3>
            <p className="text-lg text-slate-500 font-medium mb-10">
               If your security assessment requires specific evidence or discussions, we are here to help.
            </p>
            <div className="flex items-center justify-center gap-4">
               <button onClick={() => onNavigate?.('contact')} className="px-12 py-6 bg-hayrok-dark text-white rounded-2xl font-black text-xl hover:bg-hayrok-orange transition-all shadow-2xl">
                  Talk to the Trust Team
               </button>
            </div>
         </motion.div>
      </section>

      {/* Signature */}
      <div className="h-32 flex items-center justify-center border-t border-slate-100 bg-white">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            The Hayrok Trust Center is updated regularly to reflect our evolving security controls and global compliance alignment.
         </p>
      </div>
    </div>
  );
};