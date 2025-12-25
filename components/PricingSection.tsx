import React from 'react';
import { Check, Shield, Zap, Bot, Crown, ArrowRight, Activity } from 'lucide-react';

const tiers = [
  {
    name: "NECTAR",
    tagline: "Visibility & Intelligence Starter",
    philosophy: "Start with Visibility",
    buyer: "Security teams early in CTEM",
    features: [
      "SurfaceIQ: External Discovery",
      "DetectIQ: Signal Correlation",
      "Asset Inventory & Exposure Drift",
      "Shadow IT Detection",
      "Central Exposure Inventory",
      "Contextual Prioritization"
    ],
    notIncluded: ["No exploit validation", "No SDLC governance", "No agentic execution"],
    color: "bg-slate-800",
    icon: Shield,
    cta: "Start for Free"
  },
  {
    name: "COMB",
    tagline: "Proof-Based CTEM",
    philosophy: "Prove Risk",
    buyer: "CISOs replacing annual pentests",
    features: [
      "Everything in Nectar, plus:",
      "Genesis: Autonomous Validation",
      "Attack Path Confirmation",
      "Control Effectiveness Testing",
      "Evidence-backed Findings",
      "Validation-driven Risk Scoring"
    ],
    notIncluded: ["No SDLC enforcement", "No prevention of recurrence"],
    color: "bg-orange-600",
    icon: Zap,
    cta: "Upgrade to Proof",
    highlight: true
  },
  {
    name: "SWARM",
    tagline: "Closed-Loop CTEM",
    philosophy: "Close the Loop",
    buyer: "Engineering-driven organizations",
    features: [
      "Everything in Comb, plus:",
      "CodeFabrics: Supply Chain Governance",
      "CI/CD Security Enforcement",
      "Exposure-to-code Traceability",
      "Insecure Build Blocking",
      "Remediation Workflows & Policy"
    ],
    notIncluded: ["Limited autonomous decisions"],
    color: "bg-orange-800",
    icon: Bot,
    cta: "Fix it for Good"
  },
  {
    name: "QUEEN",
    tagline: "Fully Agentic CTEM",
    philosophy: "Optimize Continuously",
    buyer: "Large Enterprises & Regulated Orgs",
    features: [
      "Everything in Swarm, plus:",
      "Agentic Hive Core",
      "Autonomous Decision-making",
      "Agent Orchestration & Sequencing",
      "Adaptive Validation Strategies",
      "Full Board-ready CTEM Reporting",
      "Policy-as-code & HITL Approvals"
    ],
    color: "bg-hayrok-dark border-hayrok-orange border-2",
    icon: Crown,
    cta: "Run on Autopilot"
  }
];

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-widest mb-4">Pricing Architecture</h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
            Hayrok Monetizes <span className="text-hayrok-orange">CTEM Maturity</span>
          </h3>
          <p className="text-slate-500 text-lg">
            Land on visibility, expand to validation, upgrade to prevention, and scale to autonomous governance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <div key={i} className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${tier.color} ${tier.highlight ? 'shadow-2xl ring-4 ring-orange-600/20' : 'shadow-xl'}`}>
              <div className="flex items-center justify-between mb-4">
                 <div className="p-2 bg-white/10 rounded-lg text-white">
                    <tier.icon size={20} />
                 </div>
                 {tier.highlight && (
                   <span className="bg-white text-orange-600 text-[10px] font-black px-2 py-1 rounded uppercase tracking-tighter">Recommended</span>
                 )}
              </div>
              
              <h4 className="text-2xl font-black text-white mb-1">{tier.name}</h4>
              <p className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">{tier.tagline}</p>
              
              <div className="text-white font-bold text-sm mb-6 flex items-center gap-2">
                 <Activity size={14} className="text-hayrok-orange" />
                 {tier.philosophy}
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {tier.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check size={14} className="text-green-400 mt-1 shrink-0" />
                    <span className="text-xs text-slate-100 font-medium leading-tight">{feature}</span>
                  </div>
                ))}
                {tier.notIncluded?.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3 opacity-75">
                    <XIcon size={14} className="text-red-300 mt-1 shrink-0" />
                    <span className="text-xs text-slate-300 font-medium leading-tight line-through decoration-slate-500/50">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto space-y-3">
                <button className={`w-full py-3 rounded-lg font-bold text-sm transition-all shadow-lg ${tier.highlight ? 'bg-white text-orange-600 hover:bg-slate-100' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                  {tier.cta}
                </button>
                
                <button className="w-full py-2 text-xs font-semibold text-white/70 hover:text-white transition-colors flex items-center justify-center gap-1 group">
                  Request {tier.name} Demo
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-200 text-center">
           <p className="text-slate-600 font-medium">
              Expansion vectors: <span className="text-slate-900 font-bold">assets, environments, repos/pipelines, validation frequency, automation depth.</span>
           </p>
        </div>
      </div>
    </section>
  );
};

const XIcon = ({ size, className }: { size: number, className: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);