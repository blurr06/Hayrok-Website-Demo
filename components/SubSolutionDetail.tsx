
import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Zap, 
  Target, BarChart3, Bot, Network, Landmark, 
  Cloud, HeartPulse, ShoppingBag, Building2, Cpu,
  Code, Layout, ClipboardCheck, Activity, Package,
  Gavel, Globe, History, Sparkles
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

interface SubSolutionDetailProps {
  id: string;
  onNavigate?: (page: string) => void;
}

const contentMap: Record<string, any> = {
  // Use Cases
  'solution-api': { title: "Application & API Security Validation", icon: Globe, tagline: "Governed proof for endpoints.", desc: "Validate that your public and private APIs remain secure through continuous, agentic validation logic." },
  'solution-supply-chain': { title: "Software Supply Chain & Dependency Risk", icon: Package, tagline: "Visibility into the hidden stack.", desc: "Manage transitive trust and dependency risk across your software ecosystem with automated policy gates." },
  'solution-pentesting': { title: "Modern Penetration Testing", icon: Zap, tagline: "Governed & Continuous.", desc: "Replace episodic tests with continuous, safe simulations that prove exploitability without downtime." },
  'solution-ctem': { title: "Continuous Threat Exposure Management (CTEM)", icon: Target, tagline: "Lifecycle-aligned intelligence.", desc: "Full alignment with the CTEM framework to identify, validate, and prioritize material security risk." },
  'solution-cloud': { title: "Cloud & Identity Attack Path Validation", icon: Network, tagline: "Mapping the mesh.", desc: "Proving how misconfigured IAM and cloud resources translate into actionable attacker paths." },
  'solution-devsecops': { title: "DevSecOps & CI/CD Gatekeeping", icon: Code, tagline: "Risk-based releases.", desc: "Enforce security standards natively within pipelines using validation-driven policy checks." },
  'solution-grc': { title: "Governance, Risk Acceptance & Audit Readiness", icon: Gavel, tagline: "Defensible evidence.", desc: "A central system of record for every risk decision, complete with auditable rationale and trace logs." },

  // Roles
  'role-appsec': { title: "Application Security Teams", icon: ShieldCheck, tagline: "Focus on fixes.", desc: "Helping AppSec teams distinguish between noisy scanner findings and validated, reachable risk." },
  'role-eng': { title: "Security Engineering / Red Teams", icon: Activity, tagline: "Adversarial automation.", desc: "Scaling offensive expertise with agentic AI that builds complex attack graphs autonomously." },
  'role-dev': { title: "Developers & Platform Teams", icon: Layout, tagline: "Frictionless security.", desc: "Integrating governed validation into developer workflows to catch exploitable paths early." },
  'role-ciso': { title: "CISOs & Executives", icon: BarChart3, tagline: "Strategic confidence.", desc: "Translate technical security signals into board-ready reports on real risk reduction." },
  'role-compliance': { title: "Compliance & Risk Teams", icon: ClipboardCheck, tagline: "Audit integrity.", desc: "Maintaining an immutable record of risk decisions for SOC2, ISO, and regulatory review." },

  // Industries
  'industry-fintech': { title: "Financial Services & Fintech", icon: Landmark, tagline: "Regulatory precision.", desc: "Supporting high-stakes environments with auditable security validation and controlled automation." },
  'industry-saas': { title: "SaaS & Cloud-Native Companies", icon: Cloud, tagline: "Velocity at scale.", desc: "Securing modern cloud-native architectures where infrastructure changes as fast as code." },
  'industry-healthcare': { title: "Healthcare & Life Sciences", icon: HeartPulse, tagline: "Trusted safety.", desc: "Validating data residency and application security for critical healthcare infrastructure." },
  'industry-retail': { title: "Retail & E-Commerce", icon: ShoppingBag, tagline: "Revenue protection.", desc: "Protecting transaction flows and supply chain integrity against sophisticated edge threats." },
  'industry-enterprise': { title: "Enterprise & Regulated Industries", icon: Building2, tagline: "Infrastructure trust.", desc: "Bridging the gap between legacy visibility and modern governed risk management." },
  'industry-tech-ai': { title: "Technology & AI-Driven Organizations", icon: Cpu, tagline: "The new perimeter.", desc: "Governing the unique risks of AI-driven applications and complex supply chain dependencies." }
};

export const SubSolutionDetail: React.FC<SubSolutionDetailProps> = ({ id, onNavigate }) => {
  const content = contentMap[id] || { title: "Solution Detail", icon: Zap, tagline: "Strategic Intelligence", desc: "Technical walkthrough of the selected Hayrok capability." };
  
  return (
    <div className="bg-white min-h-screen pb-32">
      <section className="relative pt-48 pb-32 overflow-hidden bg-slate-50 border-b border-slate-100">
        <IntelligenceFabric density={1.2} isDark={false} />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
             <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white border border-slate-200 text-hayrok-orange text-[10px] font-black uppercase tracking-[0.4em] shadow-sm mx-auto mb-10">
                <Sparkles size={12} className="animate-pulse" />
                Hayrok Strategy Unit
             </div>
             <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter uppercase">
               {content.title}
             </h1>
             <p className="text-hayrok-orange font-black text-[11px] uppercase tracking-[0.6em] mb-12">{content.tagline}</p>
             <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto mb-16">
               {content.desc}
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button onClick={() => onNavigate?.('demo')} className="bg-hayrok-orange text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
                  Request a Demo
                </button>
                <button onClick={() => onNavigate?.('contact')} className="bg-white text-slate-900 border border-slate-200 px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all">
                  Contact Specialist
                </button>
             </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6 pt-32">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
           <div>
              <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-8">Platform Integration</h2>
              <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 leading-tight uppercase tracking-tight">The <span className="text-hayrok-orange italic">Hive</span> Advantage.</h3>
              <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                By integrating this specific solution into the Hayrok Hive intelligence layer, organizations move from fragmented findings to a unified system of record.
              </p>
              <div className="space-y-6">
                 {[
                   "Eliminate non-material noisy alerts",
                   "Confirm path exploitability end-to-end",
                   "Record auditable decision rationale",
                   "Govern AI agents via strict OPA policies"
                 ].map((point, i) => (
                   <div key={i} className="flex gap-4 items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-hayrok-orange" />
                      <span className="text-lg font-black text-slate-700 uppercase tracking-tight">{point}</span>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="relative">
              <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl flex flex-col items-center text-center">
                 <div className="absolute inset-0 bg-grid-white opacity-5" />
                 <div className="relative z-10">
                    <div className="w-24 h-24 bg-hayrok-orange rounded-3xl flex items-center justify-center text-white mx-auto mb-12 shadow-2xl shadow-orange-500/30">
                       <content.icon size={48} strokeWidth={2.5} />
                    </div>
                    <p className="text-3xl font-black italic mb-10 leading-tight">"A decision you can defend to the <span className="text-hayrok-orange">board and regulators.</span>"</p>
                    <div className="h-px w-24 bg-white/10 mx-auto" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pt-48 text-center">
         <div className="max-w-4xl mx-auto p-12 md:p-24 bg-slate-50 border border-slate-200 rounded-[5rem] relative overflow-hidden group">
            <h4 className="text-4xl md:text-7xl font-black text-slate-900 mb-12 tracking-tight uppercase leading-none">Ready to <br/><span className="text-hayrok-orange italic">Get Started?</span></h4>
            <p className="text-xl text-slate-500 font-medium mb-16 leading-relaxed">Experience how Hayrok can modernize your security outcomes.</p>
            <button onClick={() => onNavigate?.('demo')} className="flex items-center gap-4 bg-hayrok-dark text-white px-16 py-8 rounded-[2rem] font-black text-2xl mx-auto hover:bg-hayrok-orange transition-all group-hover:scale-105 shadow-2xl">
               See the Demo <ArrowRight size={28} />
            </button>
         </div>
      </section>
    </div>
  );
};
