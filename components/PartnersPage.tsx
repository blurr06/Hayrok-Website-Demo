
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Globe, Zap, Users, 
  Layers, Cloud, Briefcase, Heart,
  ArrowRight, Handshake, Cpu, Lock,
  CheckCircle2, Share2, Terminal, MessageSquare,
  BarChart3, ShieldAlert, Sparkles, Network,
  // Fix: Added missing FileText import
  FileText
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const PartnerTypeCard = ({ icon: Icon, title, tag, desc, items, accent }: any) => (
  <motion.div 
    variants={fadeInUp}
    className="bg-white border border-slate-200 rounded-[3rem] p-10 flex flex-col h-full hover:shadow-2xl hover:border-hayrok-orange/30 transition-all duration-500 group"
  >
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-all group-hover:scale-110 ${accent}`}>
      <Icon size={28} />
    </div>
    <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-hayrok-orange transition-colors">{title}</h3>
    <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.4em] mb-6">{tag}</p>
    <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8 flex-1">{desc}</p>
    
    <div className="space-y-3 pt-6 border-t border-slate-50">
      {items.map((item: string, i: number) => (
        <div key={i} className="flex items-center gap-3 text-xs font-black text-slate-600 uppercase tracking-tighter">
          <CheckCircle2 size={16} className="text-hayrok-orange" />
          {item}
        </div>
      ))}
    </div>
  </motion.div>
);

export const PartnersPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-hayrok-orange/10 selection:text-hayrok-orange overflow-hidden font-sans relative">
      
      {/* Dynamic Background Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(255,95,0,0.03)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute inset-0 bg-grid-white opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]"></div>
      </div>

      <div className="h-32 md:h-40"></div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="flex items-center gap-3 mb-8">
            <div className="h-[2px] w-8 bg-hayrok-orange"></div>
            <span className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em]">The Strategic Network</span>
          </motion.div>
          
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-9"
            >
              <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.95] tracking-tight text-slate-900">
                Building the Trusted <br/>
                <span className="bg-gradient-to-r from-hayrok-orange to-indigo-600 bg-clip-text text-transparent italic tracking-tighter">Security Ecosystem.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-4xl">
                Hayrok believes the future of security is not built in isolation. It is built through strong partnerships aligned around measurable risk reduction and responsible AI.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy / Value Prop */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="bg-slate-900 rounded-[4rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-grid-white opacity-[0.05]" />
          <div className="absolute top-0 right-0 w-[50%] h-full bg-hayrok-orange/10 blur-[120px]" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-8">Why Partner with Hayrok</h3>
              <h4 className="text-4xl md:text-6xl font-black mb-10 tracking-tight leading-tight">
                Not just another tool. <br/>
                <span className="text-slate-400 italic text-3xl md:text-5xl">A new category.</span>
              </h4>
              <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                Partners choose Hayrok because we offer a differentiated, AI-native security platform aligned with regulated industries and long-term trust.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { label: "AI-Native Platform", icon: Cpu },
                  { label: "Regulated Industry Focus", icon: ShieldCheck },
                  { label: "Defensible Value", icon: BarChart3 },
                  { label: "Trust Over Hype", icon: Heart }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-hayrok-orange">
                      <item.icon size={18} />
                    </div>
                    <span className="text-sm font-bold text-white uppercase tracking-wider">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-[3rem] p-10 backdrop-blur-xl">
               <div className="flex items-center gap-3 text-hayrok-orange font-black text-[10px] uppercase tracking-[0.5em] mb-10">
                  <Handshake size={16} /> Partner Outcomes
               </div>
               <div className="space-y-8">
                  {[
                    { label: "Service Expansion", val: "New agentic security service offerings." },
                    { label: "Reduced Churn", val: "Continuous value delivery vs episodic events." },
                    { label: "Higher Margin", val: "Autonomous validation reduces human overhead." }
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col gap-2">
                       <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                       <span className="text-xl font-black text-white">{stat.val}</span>
                    </div>
                  ))}
               </div>
               <button className="mt-12 w-full py-5 bg-hayrok-orange rounded-2xl text-white font-black uppercase tracking-widest text-xs hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
                  Join the Ecosystem
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types Grid */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-6">Program Tracks</h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">Ecosystem Roles.</h3>
          <p className="text-lg text-slate-500 font-medium">Four distinct ways to collaborate and deliver the future of agentic security.</p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-2 gap-8"
        >
          <PartnerTypeCard 
            title="Integration Partners"
            tag="Extend Intelligence"
            icon={Layers}
            accent="bg-blue-600"
            desc="Extend your platform's intelligence while preserving governance. Integrate risk flows seamlessly across DevOps and Security."
            items={["Cloud Platform Sync", "CI/CD Pipeline Gates", "SIEM/SOAR Ingestion", "Policy-as-code Sharing"]}
          />
          <PartnerTypeCard 
            title="Cloud Service Providers"
            tag="Governed Cloud Security"
            icon={Cloud}
            accent="bg-hayrok-orange"
            desc="Help customers secure cloud-native environments using AI-driven security that remains explainable and auditable."
            items={["Misconfiguration Check", "IAM Exposure Mapping", "CTEM Cloud Alignment", "Compliance Reporting"]}
          />
          <PartnerTypeCard 
            title="MSSPs & MDRs"
            tag="Service Augmentation"
            icon={Zap}
            accent="bg-emerald-600"
            desc="Augment human expertise with agentic AI. Move from reactive monitoring to autonomous, defensible security outcomes."
            items={["Multi-tenant Operations", "Autonomous Validation", "Supply Chain Oversight", "Executive Dashboards"]}
          />
          <PartnerTypeCard 
            title="Consulting & Advisory"
            tag="Evidence-Driven Assessment"
            icon={Briefcase}
            accent="bg-indigo-600"
            desc="Deliverassessments with proof. Validate findings autonomously and track risk reduction over time for your clients."
            items={["Proof-based Audit", "Exploitability Validation", "Risk Reduction Tracking", "Digital Transformation"]}
          />
        </motion.div>
      </section>

      {/* Integrations Highlight */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
         <div className="bg-slate-50 border border-slate-200 rounded-[3.5rem] p-10 md:p-24 relative overflow-hidden group">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div>
                  <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-8">The Integration Fabric</h3>
                  <h4 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 tracking-tight leading-tight">
                    Integrations that connect <br/> <span className="text-hayrok-orange italic">decisions to outcomes.</span>
                  </h4>
                  <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12">
                    Integrations in Hayrok don’t just connect tools — they ensure risk intelligence flows across your stack while remaining governed and auditable.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    {["AWS/Azure/GCP", "GitHub/GitLab", "Jira/ServiceNow", "Okta/AD", "SIEM/SOAR"].map((tool, idx) => (
                      <div key={idx} className="px-5 py-3 bg-white border border-slate-200 rounded-xl text-xs font-black text-slate-400 uppercase tracking-widest group-hover:border-hayrok-orange group-hover:text-slate-900 transition-all">
                        {tool}
                      </div>
                    ))}
                  </div>
               </div>

               <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Unified Intelligence", icon: Sparkles },
                      { label: "Policy Automation", icon: Terminal },
                      { label: "Evidence Sharing", icon: FileText },
                      { label: "Reduced Friction", icon: Zap }
                    ].map((item, i) => (
                      <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all">
                        <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-hayrok-orange mb-6">
                           <item.icon size={20} />
                        </div>
                        <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">{item.label}</h5>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Program Benefits */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
           <div className="max-w-2xl">
              <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-6">Partner Success</h2>
              <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                What you get when <br/> <span className="text-slate-400 italic">we work together.</span>
              </h3>
           </div>
           <div className="shrink-0 pb-2">
              <button className="flex items-center gap-3 px-8 py-4 border border-slate-200 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all group">
                Download Partner Guide <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Technical Onboarding", desc: "Dedicated support to integrate and enable your teams on the agentic AI platform.", icon: Cpu },
            { title: "Shared GTM", desc: "Joint marketing campaigns, co-branded materials, and lead-sharing alignment.", icon: Globe },
            { title: "Solution Dev", desc: "Early access to new agent capabilities and joint product development roadmap.", icon: Network }
          ].map((benefit, i) => (
            <div key={i} className="p-10 bg-slate-50 border border-slate-200 rounded-[3rem] group hover:bg-white hover:shadow-2xl transition-all duration-500">
               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-hayrok-orange mb-8 shadow-sm">
                  <benefit.icon size={20} />
               </div>
               <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{benefit.title}</h4>
               <p className="text-lg text-slate-500 font-medium leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 mb-48 relative z-10">
        <motion.div 
          {...fadeInUp}
          className="max-w-6xl mx-auto p-12 md:p-32 bg-slate-900 border border-white/5 rounded-[4rem] shadow-2xl relative overflow-hidden text-center"
        >
          <div className="absolute top-[-50%] left-[-10%] right-[-10%] h-full bg-[radial-gradient(ellipse_at_center,rgba(255,95,0,0.1)_0%,transparent_70%)] blur-[100px]" />
          
          <div className="relative z-10">
            <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.8em] mb-12">The Future is Shared</h3>
            <p className="text-4xl md:text-7xl font-black text-white mb-16 leading-[1.05] tracking-tight">
              The future of security <br/>
              <span className="text-hayrok-orange italic">isn't built alone.</span>
            </p>
            
            <div className="flex flex-col items-center gap-10 pt-12 border-t border-white/10 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl font-black text-slate-400 uppercase tracking-[0.4em] leading-relaxed">
                Contact our partnership team to <br/> <span className="text-white">start the conversation.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <a href="mailto:partners@hayrok.com" className="flex items-center gap-3 bg-hayrok-orange text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all group shadow-xl shadow-orange-500/20">
                  partners@hayrok.com
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                  Contact Us Page
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        <p className="mt-12 text-center text-slate-400 font-black text-[10px] uppercase tracking-[0.5em]">Hayrok Partnerships — Built Together, with Trust at the Core.</p>
      </section>

      <div className="h-32"></div>
    </div>
  );
};
