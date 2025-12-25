
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Check, X, ArrowRight, Shield, ShieldAlert, Zap, Search, 
  Bot, Scale, FileText, Activity, ChevronRight, Target, 
  Cpu, History, ShieldCheck, TrendingDown, Sparkles,
  Lock, CheckCircle2, BarChart3, TrendingUp, Layers, MousePointer2,
  Info, ShieldX
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

const PerformancePulse = ({ percent, color, labelColor }: { percent: number; color: string; labelColor?: string }) => (
  <div className="flex items-center gap-3 w-full">
    <div className="flex-1 h-2.5 bg-slate-200 rounded-full overflow-hidden relative border border-slate-300/30">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        className={`h-full ${color} rounded-full relative`}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-white/20 animate-pulse" />
      </motion.div>
    </div>
    <span className={`text-[10px] font-black tabular-nums ${labelColor || (percent > 70 ? 'text-hayrok-orange' : 'text-slate-700')}`}>
      {percent}%
    </span>
  </div>
);

const ComparisonTableChart = ({ title, subtitle, columns, rows }: any) => (
  <motion.div 
    {...fadeInUp}
    className="w-full mb-24 relative group"
  >
    {/* Outer Atmosphere Glow */}
    <div className="absolute -inset-10 bg-gradient-to-br from-hayrok-orange/5 via-indigo-500/5 to-transparent blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    
    <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl">
      {/* Dashboard Style Header */}
      <div className="bg-slate-900 px-10 py-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-hayrok-orange/20 to-transparent blur-3xl opacity-50" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-hayrok-orange rounded-lg shadow-lg shadow-orange-500/20">
              <BarChart3 size={20} className="text-white" />
            </div>
            <h4 className="text-3xl font-black tracking-tight">{title}</h4>
          </div>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em]">{subtitle}</p>
        </div>
      </div>

      {/* Table Headers */}
      <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200 divide-x divide-slate-100">
        <div className="col-span-12 md:col-span-4 p-6 flex items-center">
          <span className="text-[11px] font-black text-slate-600 uppercase tracking-widest">Platform Capability</span>
        </div>
        <div className="col-span-6 md:col-span-4 p-6 flex items-center justify-center bg-slate-100/50">
          <span className="text-[11px] font-black text-slate-800 uppercase tracking-widest">{columns[0]}</span>
        </div>
        <div className="col-span-6 md:col-span-4 p-6 flex items-center justify-center bg-orange-50 relative">
          <div className="absolute inset-0 bg-hayrok-orange/5" />
          <span className="text-[11px] font-black text-hayrok-orange uppercase tracking-widest relative z-10 flex items-center gap-2">
            <Sparkles size={14} className="animate-pulse" />
            {columns[1]}
          </span>
        </div>
      </div>

      {/* Chart Rows */}
      <div className="divide-y divide-slate-50">
        {rows.map((row: any, i: number) => (
          <motion.div 
            key={i}
            whileHover={{ backgroundColor: "rgba(248, 250, 252, 0.95)" }}
            className="grid grid-cols-12 divide-x divide-slate-100 transition-colors"
          >
            {/* Feature Column */}
            <div className="col-span-12 md:col-span-4 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-400 group-hover:bg-hayrok-orange transition-colors" />
                <div>
                  <h5 className="text-base font-black text-slate-900 tracking-tight">{row.feature}</h5>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Critical Metric</p>
                </div>
              </div>
            </div>

            {/* Others Column (Metric Card) - Improved Visibility */}
            <div className="col-span-6 md:col-span-4 p-8 flex flex-col justify-center bg-slate-50/60 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <ShieldX size={16} className="text-slate-500" />
                <span className="text-sm font-black text-slate-900">{row.others}</span>
              </div>
              <PerformancePulse 
                percent={row.othersScore || 35} 
                color="bg-slate-500" 
                labelColor="text-slate-900"
              />
            </div>

            {/* Hayrok Column (Chart Highlight) */}
            <div className="col-span-6 md:col-span-4 p-8 flex flex-col justify-center bg-orange-50/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-hayrok-orange/[0.04] group-hover:bg-hayrok-orange/[0.08] transition-colors" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 bg-hayrok-orange rounded-md flex items-center justify-center shadow-lg shadow-orange-500/20">
                    <CheckCircle2 size={14} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-black text-slate-900 tracking-tight">{row.hayrok}</span>
                </div>
                <PerformancePulse 
                  percent={row.hayrokScore || 95} 
                  color="bg-hayrok-orange shadow-[0_0_20px_rgba(255,95,0,0.4)]" 
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Table Action Footer */}
      <div className="bg-slate-50 p-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Info size={18} className="text-slate-400" />
          <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest">
            Metrics based on enterprise-grade automated security validation tests.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[11px] font-black text-slate-900 uppercase tracking-widest px-6 py-3 border border-slate-200 rounded-xl hover:bg-white transition-all shadow-sm">
            View Dataset
          </button>
          <button className="text-[11px] font-black text-white uppercase tracking-widest px-6 py-3 bg-hayrok-dark rounded-xl hover:bg-hayrok-orange transition-all shadow-lg">
            Request Validation Run
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

export const ComparisonSection: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-32 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-orange-50/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-50/40 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-grid-white opacity-[0.2]" />
      </div>

      {/* Hero Header */}
      <section className="relative pt-48 pb-24 px-6 z-10 text-center">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            {...fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-hayrok-orange text-[10px] font-black mb-10 tracking-[0.4em] uppercase shadow-sm"
          >
            <ShieldAlert size={12} className="animate-pulse" />
            METRIC ANALYSIS: THE HIVE ADVANTAGE
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tight">
            Structure Your <br/>
            <span className="bg-gradient-to-r from-hayrok-orange to-orange-400 bg-clip-text text-transparent italic tracking-tighter">Security Choice.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-semibold leading-relaxed max-w-4xl mx-auto">
            Traditional tools create data. Hayrok Hive creates confidence. Use our comparative metric tables to see the performance gap.
          </p>
        </div>
      </section>

      {/* Dynamic Comparison Tables */}
      <section className="container mx-auto px-6 relative z-10">
        <motion.div {...fadeInUp} className="flex items-center gap-6 mb-16">
          <span className="text-[11px] font-black text-slate-900 uppercase tracking-[0.5em] shrink-0">Performance Benchmarks</span>
          <div className="h-px w-full bg-slate-100" />
        </motion.div>

        <ComparisonTableChart 
          title="Legacy Stacks vs. Hayrok Hive"
          subtitle="Comparison with Vulnerability Scanners, SAST/DAST, and SIEM-centric environments"
          columns={["Traditional Tools", "Hayrok Hive"]}
          rows={[
            { 
              feature: "Primary Analysis Focus", 
              others: "Passive Findings", othersScore: 30,
              hayrok: "Exploitable Proof", hayrokScore: 98 
            },
            { 
              feature: "Decision Reasoning", 
              others: "Static Rules", othersScore: 45,
              hayrok: "Recursive Agentic AI", hayrokScore: 94 
            },
            { 
              feature: "Validation Frequency", 
              others: "Scheduled Scans", othersScore: 20,
              hayrok: "Continuous Pulse", hayrokScore: 96 
            },
            { 
              feature: "Risk Triage Accuracy", 
              others: "Manual / Estimated", othersScore: 40,
              hayrok: "Evidence-Backed", hayrokScore: 92 
            },
            { 
              feature: "Audit-Ready Logs", 
              others: "Fragmented Data", othersScore: 25,
              hayrok: "Full Decision Replay", hayrokScore: 97 
            }
          ]}
        />

        <ComparisonTableChart 
          title="Black-Box AI vs. Governed Hive"
          subtitle="Deep-dive into Explainability, Governance, and Accountability"
          columns={["Black-Box Platforms", "Hayrok Hive"]}
          rows={[
            { 
              feature: "Decision Transparency", 
              others: "Opaque (Black Box)", othersScore: 15,
              hayrok: "Explainable Reasoning", hayrokScore: 98 
            },
            { 
              feature: "Autonomous Governance", 
              others: "Guideline-Only", othersScore: 35,
              hayrok: "Policy-Bound Agents", hayrokScore: 95 
            },
            { 
              feature: "Accountability Model", 
              others: "Shared Liability", othersScore: 40,
              hayrok: "Explicit Attribution", hayrokScore: 93 
            },
            { 
              feature: "Verification Method", 
              others: "AI Hallucination Risk", othersScore: 20,
              hayrok: "Proof-First Validation", hayrokScore: 99 
            }
          ]}
        />

        {/* Strategic Impact Bento */}
        <div className="grid lg:grid-cols-2 gap-8 mb-32">
           <motion.div {...fadeInUp} className="bg-slate-50 border border-slate-200 rounded-[3rem] p-12 md:p-16 flex flex-col justify-between group hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-400 mb-8 shadow-sm group-hover:text-hayrok-orange transition-colors">
                  <ShieldX size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">The Cost of <br/> <span className="text-slate-400 underline decoration-slate-200 decoration-4">Tool Sprawl.</span></h3>
                <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
                  Fragmentation leads to noise. Traditional stacks force human teams to correlate data that AI should already understand.
                </p>
              </div>
              <div className="space-y-4">
                 {["Increases manual overhead", "Weak decision evidence", "No business context"].map((txt, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-black text-slate-400 uppercase tracking-widest">
                       <X size={14} className="text-red-400" /> {txt}
                    </div>
                 ))}
              </div>
           </motion.div>

           <motion.div {...fadeInUp} className="bg-hayrok-dark text-white rounded-[3rem] p-12 md:p-16 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-hayrok-orange/10 blur-[100px] rounded-full group-hover:bg-hayrok-orange/20 transition-all duration-700" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-hayrok-orange mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <TrendingUp size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-4xl font-black mb-6 tracking-tight">The Power of <br/> <span className="text-hayrok-orange italic">Unified Hive.</span></h3>
                <p className="text-xl text-slate-400 font-medium leading-relaxed mb-8">
                  One platform to map, prove, and reduce risk. Governed Agentic AI replaces point solutions with a continuous intelligence lifecycle.
                </p>
              </div>
              <div className="relative z-10 space-y-4">
                 {["Reduces tool maintenance", "Proof-based outcomes", "Auditable AI logic"].map((txt, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-black text-hayrok-orange uppercase tracking-widest">
                       <Check size={14} className="text-hayrok-orange" /> {txt}
                    </div>
                 ))}
              </div>
           </motion.div>
        </div>

        {/* Final CTA Strip */}
        <section className="bg-slate-50 border border-slate-200 rounded-[4rem] p-12 md:p-24 text-center">
           <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 mb-10 tracking-tight leading-[0.9]">
                Measure the Gap <br/>
                <span className="text-hayrok-orange italic">for Yourself.</span>
              </h3>
              <p className="text-xl md:text-2xl text-slate-500 font-semibold mb-12 leading-relaxed">
                If your current stack provides more activity than evidence, it's time to upgrade to Governed Agentic AI.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <button className="w-full sm:w-auto bg-hayrok-orange text-white px-16 py-8 rounded-[2rem] text-2xl font-black hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/30">
                  Request a Demo
                </button>
                <button className="w-full sm:w-auto px-16 py-8 rounded-[2rem] text-2xl font-black text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all bg-white shadow-sm flex items-center justify-center gap-4 group/btn">
                  Talk to a Security Expert <ArrowRight size={28} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
              <p className="mt-20 text-[10px] font-black text-slate-400 uppercase tracking-[0.8em]">Built on Trusted Hive Intelligence</p>
           </motion.div>
        </section>
      </section>
    </div>
  );
};
