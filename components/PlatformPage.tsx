
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Zap, BarChart3, Code, Search, Eye, 
  Fingerprint, Activity, Target, ShieldCheck, 
  ChevronRight, ArrowRight, Bot, Lock, Layers,
  Layout, Cpu, Network, CheckCircle2, AlertCircle,
  FileText, TrendingUp, History, ClipboardCheck,
  Users, Sparkles, Globe, Rocket, Info, FileSearch,
  ExternalLink, MousePointer2, MessageSquare
} from 'lucide-react';

// Fix transition ease type error by casting to tuple to satisfy Framer Motion types
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

const SectionHeader = ({ badge, title, subtitle, highlightWord }: { badge?: string, title: string, subtitle: string, highlightWord?: string }) => {
  const parts = title.split(highlightWord || "");
  
  return (
    <motion.div 
      {...fadeInUp}
      className="max-w-4xl mx-auto text-center mb-24"
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-hayrok-orange text-[10px] font-black mb-8 tracking-[0.4em] uppercase shadow-sm">
          <Sparkles size={12} className="animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tight">
        {highlightWord ? (
          <>
            {parts[0]}
            <span className="bg-gradient-to-r from-hayrok-orange to-orange-400 bg-clip-text text-transparent">{highlightWord}</span>
            {parts[1]}
          </>
        ) : title}
      </h2>
      <p className="text-xl md:text-2xl text-slate-700 font-semibold leading-relaxed max-w-3xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
};

const ModulePanel = ({ 
  title, 
  tag, 
  desc, 
  icon: Icon, 
  whatItDoes, 
  whyItMatters, 
  outcome,
  status = "MVP"
}: any) => (
  <motion.div 
    {...fadeInUp}
    className="group relative flex flex-col bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden hover:border-hayrok-orange/30 transition-all duration-700 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_100px_-20px_rgba(255,95,0,0.12)] h-full"
  >
    {/* Animated Card Header Background */}
    <div className="absolute top-0 left-0 right-0 h-32 bg-slate-50 border-b border-slate-100 group-hover:bg-orange-50/50 transition-colors duration-500" />
    
    <div className="p-8 md:p-12 relative z-10 flex flex-col h-full">
      {/* Icon & Title Block */}
      <div className="flex items-center gap-6 mb-10">
        <div className="w-16 h-16 bg-hayrok-dark text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-hayrok-orange group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
          <Icon size={32} />
        </div>
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-3xl font-black text-slate-900 leading-none group-hover:text-hayrok-orange transition-colors duration-300">{title}</h3>
            <span className="px-3 py-1 rounded-md bg-white border border-slate-300 text-[10px] font-black text-slate-600 uppercase tracking-widest leading-none">{status}</span>
          </div>
          <div className="flex items-center gap-2 mt-2.5">
            <Bot size={12} className="text-hayrok-orange" />
            <p className="text-hayrok-orange text-[10px] font-black uppercase tracking-[0.4em] leading-none">{tag}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-xl text-slate-900 font-semibold mb-10 leading-relaxed">
        {desc}
      </p>

      {/* Itemized Capabilities */}
      <div className="space-y-6 mb-12 flex-1">
        <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.5em] mb-4 flex items-center gap-2">
          <MousePointer2 size={12} className="text-hayrok-orange" />
          Core Engine
        </h4>
        <div className="grid gap-3">
          {whatItDoes.map((item: string, i: number) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl group-hover:bg-white group-hover:border-orange-200 transition-all shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-hayrok-orange shrink-0 shadow-sm shadow-orange-500/50" />
              <span className="text-base font-bold text-slate-900 leading-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Segment */}
      <div className="mt-auto pt-10 border-t border-slate-100 space-y-8">
        <div>
          <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.5em] mb-4">The Insight</h4>
          <p className="text-xl font-black text-slate-900 leading-relaxed italic">
            "{whyItMatters}"
          </p>
        </div>
        <div className="p-8 bg-hayrok-dark text-white rounded-[2rem] group-hover:bg-hayrok-orange transition-colors duration-500 shadow-2xl shadow-black/10">
           <div className="text-[11px] font-black text-white/60 uppercase tracking-[0.4em] mb-3">Target Outcome</div>
           <p className="text-lg font-black leading-relaxed tracking-tight mb-6">{outcome}</p>
           
           <button className="w-full bg-white text-hayrok-dark group-hover:text-hayrok-orange py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-black/20">
             Request Early Access
             <ArrowRight size={14} />
           </button>
        </div>
      </div>
    </div>
  </motion.div>
);

const PersonaItem = ({ title, desc }: { title: string, desc: string }) => (
  <div className="p-10 bg-white border border-slate-100 rounded-[3rem] hover:shadow-2xl hover:shadow-orange-500/5 transition-all group flex flex-col justify-between">
    <div>
      <h4 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-hayrok-orange transition-colors">{title}</h4>
      <p className="text-slate-700 font-semibold text-lg leading-relaxed mb-8">{desc}</p>
    </div>
    <div className="flex items-center gap-3 text-xs font-black text-hayrok-orange uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
      Learn More <ArrowRight size={14} />
    </div>
  </div>
);

export const PlatformPage: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/10 selection:text-hayrok-orange pb-12 overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(255,95,0,0.06)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.04)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute inset-0 bg-grid-white opacity-[0.1]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-48 pb-12 px-6 z-10">
        <div className="container mx-auto">
          <SectionHeader 
            badge="Platform Suite"
            title="Intelligence Layered for High-Stakes Security."
            highlightWord="High-Stakes"
            subtitle="Hayrok Hive orchestrates specialized AI agents to autonomously manage your entire security risk lifecycle, providing governed accountability for every action."
          />
        </div>
      </section>

      {/* Core Platform: Itemized 3-Column Grid */}
      <section className="container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-6 mb-16">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-sm shadow-green-500" />
            <span className="text-[11px] font-black text-slate-900 uppercase tracking-[0.5em]">Live Platform Components</span>
          </div>
          <div className="h-px w-full bg-slate-200"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-32">
          <ModulePanel 
            title="Hive"
            tag="Risk Intelligence"
            icon={BarChart3}
            desc="The central system of record for security risk. It transforms unified environment signals into auditable risk intelligence."
            whatItDoes={[
              "Continuous Exposure Management",
              "Exploitability-weighted scoring",
              "Risk forecasting & trending",
              "Board-ready visualizations",
              "Multi-tenant risk views"
            ]}
            whyItMatters="Hive makes risk moving, measurable, and defensible in the boardroom."
            outcome="Gain clarity, confidence, and defensible security metrics across the enterprise."
          />

          <ModulePanel 
            title="Genesis"
            tag="Autonomous Validation"
            icon={Zap}
            desc="Proves what attackers can actually exploit. Agentic AI simulations that kill theoretical risk with hard evidence."
            whatItDoes={[
              "Attack path validation",
              "Kill-chain mapping with proof",
              "False-positive elimination",
              "Automated fix verification",
              "MITRE ATT&CK alignment"
            ]}
            whyItMatters="Attackers exploit paths, not vulnerabilities. Genesis replaces theory with proof."
            outcome="Focus your limited human resources on the 1% of risks that are actually exploitable."
          />

          <ModulePanel 
            title="CodeFabrics"
            tag="Supply Chain Security"
            icon={Code}
            desc="Prevents risk from entering production. Integrates governance and intelligence directly into the dev lifecycle."
              whatItDoes={[
              "CI/CD security governance",
              "SBOM & dependency analysis",
              "Policy-driven release gates",
              "Secrets detection in code",
              "Vulnerability recurrence prevention"
            ]}
            whyItMatters="Security should enable velocity. CodeFabrics ensures risk is managed before it ships."
            outcome="Ship faster with fewer surprises and lower long-term technical security debt."
          />
        </div>

        {/* New Hay-AI Core Section */}
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-white shadow-2xl">
           <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-hayrok-orange blur-[140px] rounded-full" />
              <div className="absolute inset-0 bg-grid-white opacity-10" />
           </div>

           <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <div className="inline-flex items-center gap-3 bg-hayrok-orange/20 border border-hayrok-orange/30 px-5 py-2 rounded-2xl text-hayrok-orange text-[10px] font-black uppercase tracking-[0.4em] mb-10">
                    <Bot size={16} /> The Intelligence Core
                 </div>
                 <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-none">Powered by <br/> <span className="bg-gradient-to-r from-hayrok-orange to-orange-400 bg-clip-text text-transparent">Hay-AI.</span></h2>
                 <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed mb-12">
                    Unlike standard automation, Hay-AI uses a recursive reasoning engine to build attack graphs, validate paths, and capture evidence — ensuring every decision is auditable and defensible.
                 </p>
                 <div className="grid grid-cols-2 gap-8">
                    {[
                      { icon: Network, label: "Graph Reasoning", desc: "Maps transitive trust across code & cloud." },
                      { icon: History, label: "Full Traceability", desc: "Every AI decision step is logged for audit." }
                    ].map((item, i) => (
                      <div key={i} className="space-y-4">
                         <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-hayrok-orange">
                            <item.icon size={24} />
                         </div>
                         <h4 className="text-xl font-bold">{item.label}</h4>
                         <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-xl relative group">
                 <div className="absolute -top-6 -left-6 bg-hayrok-orange p-5 rounded-2xl shadow-2xl animate-bounce">
                    <Sparkles size={24} className="text-white" />
                 </div>
                 <h4 className="text-2xl font-black mb-8 flex items-center gap-3">
                    <Zap size={24} className="text-hayrok-orange" />
                    Agentic Activity
                 </h4>
                 <div className="space-y-6">
                    {[
                      "Analyzing AWS IAM transitive permissions...",
                      "Found 4 reachable CVEs in 'payment-service'",
                      "Running non-destructive SQLi probe on port 443",
                      "Evidence captured: SSRF via internal metadata",
                      "Risk score updated: High Criticality confirmed"
                    ].map((log, i) => (
                      <div key={i} className="flex gap-4 text-xs font-mono text-slate-400">
                         <span className="text-hayrok-orange opacity-50">[{i+1}0:4{i}]</span>
                         <span className={i === 4 ? "text-white font-bold" : ""}>{log}</span>
                      </div>
                    ))}
                 </div>
                 <div className="mt-10 h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-hayrok-orange animate-progress" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Transition: Expanding Ecosystem */}
      <section className="container mx-auto px-6 py-48 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
             <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tight leading-none">Expanding the <br/> Intelligence <span className="bg-gradient-to-r from-hayrok-orange to-orange-400 bg-clip-text text-transparent">Ecosystem.</span></h2>
             <p className="text-2xl text-slate-700 font-semibold leading-relaxed mb-12">We are continuously training new agents to handle the breadth of modern attack surfaces, from behavior-driven detection to unknown asset discovery.</p>
             <div className="flex items-center gap-6">
                <button onClick={() => onNavigate?.('early-adopter')} className="flex items-center gap-3 bg-hayrok-orange text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
                  Request Early Access <ExternalLink size={16} />
                </button>
             </div>
          </div>

          <div className="grid gap-8">
             {[
               { title: "DetectIQ", tag: "Signal Correlation", icon: Search, desc: "Context-aware behavior detection for complex threat landscapes." },
               { title: "SurfaceIQ", tag: "Attack Surface Mapping", icon: Eye, desc: "Total visibility into unknown, unmanaged, and shadow IT assets." }
             ].map((item, i) => (
               <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex items-center gap-8 group hover:bg-white hover:shadow-2xl transition-all">
                  <div className="w-20 h-20 bg-white border border-slate-200 rounded-3xl flex items-center justify-center text-slate-500 group-hover:text-hayrok-orange transition-all shadow-sm group-hover:scale-110">
                     <item.icon size={40} />
                  </div>
                  <div>
                     <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-3xl font-black text-slate-900 leading-none group-hover:text-hayrok-orange transition-colors duration-300">{item.title}</h4>
                        <span className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.2em] px-2 py-0.5 border border-hayrok-orange/30 rounded-md bg-orange-50">Request Early Access</span>
                     </div>
                     <p className="text-xl text-slate-700 font-semibold leading-snug">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Philosophical Grid */}
      <section className="py-40 bg-slate-900 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-[0.05] " />
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-32">
             <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tight leading-none">Security Built for Trust, <br/> <span className="bg-gradient-to-r from-hayrok-orange to-orange-400 bg-clip-text text-transparent">Not Tool Sprawl.</span></h2>
             <p className="text-2xl text-slate-300 font-semibold leading-relaxed">Most security stacks grow by adding more tools. Hayrok grows by adding deeper intelligence. Every module shares the same governance and maintains full auditability.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
             {[
               { label: "Governed Model", desc: "AI that follows policies, not just prompts.", icon: ShieldCheck },
               { label: "Evidence First", desc: "Hard proof for every finding, no assumptions.", icon: FileSearch },
               { label: "Full Auditability", desc: "Complete trace of every AI reasoning step.", icon: History },
               { label: "Business Aligned", desc: "Risk mapped to business criticality.", icon: Layout }
             ].map((item, i) => (
               <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 hover:border-hayrok-orange/30 transition-all group">
                  <div className="w-16 h-16 bg-hayrok-orange/20 rounded-2xl flex items-center justify-center text-hayrok-orange mb-8 group-hover:bg-hayrok-orange group-hover:text-white transition-all shadow-lg">
                     <item.icon size={32} />
                  </div>
                  <h4 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-hayrok-orange transition-colors">{item.label}</h4>
                  <p className="text-base font-bold text-slate-300 uppercase tracking-widest leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Personas */}
      <section className="container mx-auto px-6 py-56 relative z-10">
        <div className="text-center mb-32">
           <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tight leading-none">Built for Teams That <br/> <span className="bg-gradient-to-r from-hayrok-orange to-orange-400 bg-clip-text text-transparent">Own the Outcome.</span></h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
           <PersonaItem title="CISOs & Leaders" desc="Risk intelligence you can defend to the board and regulators with total confidence." />
           <PersonaItem title="AppSec Teams" desc="Evidence-based prioritization. Eliminate the noise and focus on what is exploitable." />
           <PersonaItem title="DevSecOps" desc="Secure velocity. Managed risk before it ships, integrated directly into pipelines." />
           <PersonaItem title="GRC & Compliance" desc="Audit-ready evidence without friction. Turn security validation into a compliance win." />
           <PersonaItem title="MSSPs" desc="Scale governed AI services with deep visibility and defensible security outcomes." />
           <div className="p-12 bg-slate-50 border border-slate-200 rounded-[3.5rem] flex flex-col justify-center items-center text-center shadow-inner group transition-all hover:bg-white hover:shadow-xl">
              <Sparkles size={56} className="text-hayrok-orange mb-10 transition-transform group-hover:rotate-12" />
              <h4 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">The Platform Advantage</h4>
              <p className="font-bold text-xs text-slate-500 uppercase tracking-[0.3em]">One Platform. Zero Compromise.</p>
           </div>
        </div>
      </section>

      {/* Final Outcome-Focused Summary Block */}
      <section className="container mx-auto px-6 pb-24 relative z-10">
         <div className="bg-slate-50 rounded-[4rem] p-16 md:p-32 border border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-24">
            <div className="max-w-2xl">
               <div className="inline-flex items-center gap-3 text-hayrok-orange font-black text-xs uppercase tracking-[0.4em] mb-8">
                  <Activity size={18} /> Get Started
               </div>
               <h3 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tight leading-none">Outcome‑Focused <br/> <span className="bg-gradient-to-r from-hayrok-orange to-orange-400 bg-clip-text text-transparent italic">Risk Management.</span></h3>
               <p className="text-2xl text-slate-700 font-semibold mb-12 leading-relaxed">
                  Hayrok is designed to help organizations move beyond alert volume and tool sprawl by enabling:
               </p>
               <div className="space-y-6">
                  {[
                    "Clear understanding of practical risk",
                    "Prioritized remediation based on validation",
                    "Measurement of risk reduction over time",
                    "Business‑relevant communication of security posture"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-5 text-slate-900 font-black text-2xl md:text-3xl tracking-tight">
                       <CheckCircle2 className="text-hayrok-orange" size={32} strokeWidth={3} />
                       {text}
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="flex flex-col gap-6 w-full lg:w-auto">
               <p className="text-slate-500 font-bold text-sm uppercase tracking-widest mb-2 lg:text-right">Learn how Hayrok supports CTEM and security validation through governed, AI‑driven automation.</p>
               <button className="bg-hayrok-orange text-white px-16 py-8 rounded-[2rem] font-black text-2xl hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/30">
                  Request a Demo
               </button>
               <button onClick={() => onNavigate?.('industries')} className="bg-white text-hayrok-dark px-16 py-8 rounded-[2rem] font-black text-2xl hover:bg-slate-50 transition-all border border-slate-200 shadow-xl">
                  Explore Use Cases
               </button>
               <button onClick={() => onNavigate?.('contact')} className="bg-hayrok-dark text-white px-16 py-8 rounded-[2rem] font-black text-2xl hover:bg-slate-800 transition-all shadow-xl">
                  Contact Us
               </button>
            </div>
         </div>
      </section>

      {/* Analyst-Safe Footer Line */}
      <div className="h-20 text-center container mx-auto px-6 text-slate-400 text-[10px] font-black uppercase tracking-[0.5em]">
         The Hayrok platform supports Continuous Threat Exposure Management (CTEM) and security validation through AI‑assisted capabilities designed for governance, transparency, and accountable risk management.
      </div>
    </div>
  );
};
