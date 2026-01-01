import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingDown, Zap, Rocket, ShieldCheck, 
  ArrowRight, BarChart3, Clock, CheckCircle2, 
  Search, ShieldAlert, Target, Sparkles, 
  FileCheck, LayoutDashboard, Database, Activity,
  TrendingUp, FileText, MousePointer2, AlertCircle,
  Cpu, Lock, SearchCode as SearchCodeLucide, GitBranch, Layers,
  Terminal, Server, Globe, ShieldX,
  FileSearch, ClipboardCheck, History, HardDrive, Download,
  Info, Gavel, UserCheck, Scale, GitMerge, Package, RefreshCw
} from 'lucide-react';

// Cast motion elements to any to bypass type sync issues in this environment
const MotionDiv = motion.div as any;
const MotionCircle = motion.circle as any;
const MotionSpan = motion.span as any;
const MotionRect = motion.rect as any;

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

const SignalNoisePieChart = () => {
  const [view, setView] = useState<'before' | 'after'>('after');
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);

  const beforeData = [
    { label: "Noise", value: 100, color: "#94A3B8", detail: "False Positives, Informational Alerts, No-Action Items" }
  ];

  const afterData = [
    { label: "Verified Signal", value: 15, color: "#FF5F00", detail: "Validated Exploitable Paths with Genesis Proof" },
    { label: "Noise Reduction", value: 85, color: "#E2E8F0", detail: "Automated AI Filtering of Non-Exploitable Noise" }
  ];

  const data = view === 'before' ? beforeData : afterData;
  
  const size = 200;
  const strokeWidth = 24;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let cumulativeOffset = 0;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex items-center justify-between mb-8">
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">Impact Analysis</p>
          <h4 className="text-xl font-black text-slate-900 tracking-tight">Signal Efficiency</h4>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button 
            onClick={() => setView('before')}
            className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${view === 'before' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Traditional
          </button>
          <button 
            onClick={() => setView('after')}
            className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${view === 'after' ? 'bg-hayrok-orange text-white shadow-lg shadow-orange-500/20' : 'text-slate-400 hover:text-slate-600'}`}
          >
            With Hayrok
          </button>
        </div>
      </div>

      <div className="relative group/chart">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
          <AnimatePresence mode="popLayout">
            {data.map((segment, i) => {
              const dashOffset = circumference - (segment.value / 100) * circumference;
              const currentOffset = cumulativeOffset;
              cumulativeOffset += (segment.value / 100) * circumference;

              return (
                <MotionCircle
                  key={`${view}-${segment.label}`}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset: dashOffset }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="transparent"
                  stroke={segment.color}
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                  strokeLinecap="round"
                  style={{ strokeDashoffset: dashOffset, transformOrigin: 'center', transform: `rotate(${(currentOffset / circumference) * 360}deg)` } as any}
                  onMouseEnter={() => setHoveredSegment(segment.label)}
                  onMouseLeave={() => setHoveredSegment(null)}
                  className="cursor-pointer transition-all duration-300 hover:opacity-80"
                />
              );
            })}
          </AnimatePresence>
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <MotionSpan 
            key={view}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`text-4xl font-black tracking-tighter ${view === 'after' ? 'text-hayrok-orange' : 'text-slate-400'}`}
          >
            {view === 'after' ? '15%' : '100%'}
          </MotionSpan>
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
            {view === 'after' ? 'True Signal' : 'Unfiltered'}
          </span>
        </div>

        <AnimatePresence>
          {hoveredSegment && (
            <MotionDiv
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 p-4 bg-white/90 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl z-50 pointer-events-none"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-2 h-2 rounded-full ${hoveredSegment === 'Verified Signal' ? 'bg-hayrok-orange' : 'bg-slate-400'}`} />
                <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{hoveredSegment}</span>
              </div>
              <p className="text-[11px] font-bold text-slate-600 leading-tight">
                {data.find(d => d.label === hoveredSegment)?.detail}
              </p>
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const PipelineGate = ({ icon: Icon, label, status, delay = 0 }: any) => (
  <MotionDiv 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="relative flex flex-col items-center group"
  >
    <div className={`w-16 h-16 rounded-2xl bg-white border-2 flex items-center justify-center shadow-xl transition-all duration-500 relative z-10 ${status === 'active' ? `border-hayrok-orange text-hayrok-orange ring-4 ring-orange-500/10` : 'border-slate-200 text-slate-400 opacity-50'}`}>
       <Icon size={24} strokeWidth={2.5} />
       {status === 'active' && (
         <MotionDiv 
           animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
           transition={{ duration: 2, repeat: Infinity }}
           className={`absolute inset-0 bg-hayrok-orange rounded-2xl -z-10`}
         />
       )}
    </div>
    <div className="mt-4 text-center">
       <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{label}</p>
    </div>
  </MotionDiv>
);

const GatedPipelineFlow = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="flex items-center justify-between mb-12">
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">Live Pipeline Status</p>
          <h4 className="text-2xl font-black text-slate-900 tracking-tight">Code-to-Cloud Governance</h4>
        </div>
      </div>

      <div className="relative py-10 px-4">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-[32px] -z-0">
          <MotionDiv 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-slate-200 via-hayrok-orange to-orange-600"
          />
        </div>

        <div className="grid grid-cols-4 gap-4 relative z-10">
          <PipelineGate icon={GitBranch} label="Ingest" status="active" delay={0.1} />
          <PipelineGate icon={SearchCodeIcon} label="Analyze" status="active" delay={0.3} />
          <PipelineGate icon={Target} label="Validate" status="active" delay={0.5} />
          <PipelineGate icon={ShieldCheck} label="Secure" status="active" delay={0.7} />
        </div>
      </div>
    </div>
  );
};

const AuditReadinessMeter = () => {
  const [level, setLevel] = useState(85);
  
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex items-center justify-between mb-12">
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">Compliance Health</p>
          <h4 className="text-xl font-black text-slate-900 tracking-tight">Audit Readiness</h4>
        </div>
        <div className="px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-xl">
          <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Continuous Compliance</span>
        </div>
      </div>

      <div className="relative w-full max-w-[280px] aspect-[2/1] overflow-hidden mb-8">
        <svg viewBox="0 0 100 50" className="w-full h-full">
          <path d="M10,45 A40,40 0 0,1 90,45" fill="none" stroke="#E2E8F0" strokeWidth="8" strokeLinecap="round" />
          <MotionDiv
            as="path"
            d="M10,45 A40,40 0 0,1 90,45"
            fill="none"
            stroke="#FF5F00"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="125.6"
            initial={{ strokeDashoffset: 125.6 }}
            whileInView={{ strokeDashoffset: 125.6 * (1 - level / 100) }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
          <span className="text-5xl font-black text-slate-900 tabular-nums leading-none">{level}%</span>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Governance Score</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
         <div className="p-4 bg-white border border-slate-100 rounded-2xl flex flex-col items-center">
            <span className="text-[9px] font-black text-slate-400 uppercase mb-1">Pre-Hayrok</span>
            <span className="text-lg font-black text-slate-400">22%</span>
         </div>
         <div className="p-4 bg-white border border-hayrok-orange/20 rounded-2xl flex flex-col items-center shadow-lg shadow-orange-500/5">
            <span className="text-[9px] font-black text-hayrok-orange uppercase mb-1">With Hive</span>
            <span className="text-lg font-black text-hayrok-orange">85%</span>
         </div>
      </div>
    </div>
  );
};

const DecisionAuditTimeline = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">Traceability Hub</p>
          <h4 className="text-xl font-black text-slate-900 tracking-tight">Decision Audit Lineage</h4>
        </div>
      </div>

      <div className="space-y-4 relative">
        <div className="absolute left-[27px] top-4 bottom-4 w-px bg-slate-100" />
        
        {[
          { label: "Finding Ingested", icon: Database, color: "text-slate-400", time: "T+0m", detail: "Telemetry from CloudSentry normalized" },
          { label: "Recursive Reasoning", icon: Cpu, color: "text-indigo-500", time: "T+2m", detail: "Hay-AI builds attack graph paths" },
          { label: "Genesis Validation", icon: Zap, color: "text-hayrok-orange", time: "T+8m", detail: "Controlled exploit probe proves risk" },
          { label: "Policy Decision", icon: Gavel, color: "text-emerald-500", time: "T+10m", detail: "OPA Gate 'Reject-Insecure-Build' applied" }
        ].map((step, i) => (
          <MotionDiv 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="flex items-start gap-5 relative z-10"
          >
            <div className={`w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm group hover:border-hayrok-orange transition-all shrink-0`}>
               <step.icon size={20} className={step.color} />
            </div>
            <div className="flex-1 pt-1 pb-4 border-b border-slate-50 last:border-0">
               <div className="flex justify-between items-center mb-1">
                  <h5 className="text-[11px] font-black text-slate-900 uppercase tracking-tight">{step.label}</h5>
                  <span className="text-[9px] font-black text-slate-400">{step.time}</span>
               </div>
               <p className="text-[10px] font-medium text-slate-500">{step.detail}</p>
            </div>
          </MotionDiv>
        ))}
      </div>
      
      <button className="mt-8 w-full py-4 bg-slate-900 rounded-2xl text-white font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-hayrok-orange transition-all">
         <History size={14} /> Export Audit Replay (PDF)
      </button>
    </div>
  );
};

// --- New Software Lifecycle ROI Visualizations ---

const ReleaseGateImpactChart = () => {
  const categories = ['Discovery', 'Prioritization', 'Validation', 'Mobilization'];
  const before = [120, 80, 240, 300]; // Minutes
  const after = [5, 2, 8, 15]; // Minutes

  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">Velocity Metrics</p>
          <h4 className="text-xl font-black text-slate-900 tracking-tight">Cycle Time (Min)</h4>
        </div>
      </div>

      <div className="space-y-6">
        {categories.map((cat, i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
               <span>{cat}</span>
               <span className="text-hayrok-orange">95% faster</span>
            </div>
            <div className="relative h-6 bg-slate-100 rounded-lg overflow-hidden flex items-center">
               <MotionDiv 
                 initial={{ width: 0 }}
                 whileInView={{ width: '85%' }}
                 transition={{ duration: 1, delay: i * 0.1 }}
                 className="absolute inset-y-0 left-0 bg-slate-300 opacity-40"
               />
               <MotionDiv 
                 initial={{ width: 0 }}
                 whileInView={{ width: '4%' }}
                 transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                 className="absolute inset-y-1 left-1 bg-hayrok-orange rounded shadow-lg shadow-orange-500/20"
               />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ShiftLeftVulnerabilityChart = () => {
  return (
    <div className="w-full flex flex-col h-full">
      <div className="flex items-center justify-between mb-12">
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">Shift-Left ROI</p>
          <h4 className="text-xl font-black text-slate-900 tracking-tight">Risk Detection Distribution</h4>
        </div>
      </div>

      <div className="flex-1 flex items-end justify-between gap-4 px-4 h-[180px]">
        {[
          { label: "IDE/Code", val: 40, color: "bg-orange-400" },
          { label: "CI Pipeline", val: 35, color: "bg-hayrok-orange" },
          { label: "Pre-Prod", val: 20, color: "bg-orange-700" },
          { label: "Production", val: 5, color: "bg-slate-900" }
        ].map((bar, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-4 group cursor-help">
            <div className="relative w-full flex flex-col items-center justify-end">
              <MotionDiv 
                initial={{ height: 0 }}
                whileInView={{ height: `${bar.val * 2}px` }}
                transition={{ duration: 1, delay: i * 0.15 }}
                className={`w-full max-w-[40px] ${bar.color} rounded-t-xl group-hover:brightness-110 transition-all shadow-xl`}
              />
              <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                 <span className="text-xs font-black text-slate-900">{bar.val}% Detected</span>
              </div>
            </div>
            <span className="text-[9px] font-black text-slate-400 uppercase text-center leading-none">{bar.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-10 p-4 bg-orange-50 border border-orange-100 rounded-2xl flex items-center gap-3">
         <Sparkles size={16} className="text-hayrok-orange" />
         <p className="text-[10px] font-bold text-slate-600">
           Automated gates catch 95% of exploitable paths before deployment.
         </p>
      </div>
    </div>
  );
};

// --- Standard UI Components ---

const MetricComparison = ({ label, before, after, icon: Icon, unit = "" }: any) => (
  <div className="flex flex-col gap-4 p-6 bg-slate-50 border border-slate-200 rounded-3xl group hover:bg-white hover:shadow-xl transition-all duration-500">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-white rounded-xl shadow-sm text-hayrok-orange">
        <Icon size={18} />
      </div>
      <span className="text-sm font-black text-slate-900 uppercase tracking-tight">{label}</span>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-1">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Before</p>
        <p className="text-xl font-black text-slate-500">{before}{unit}</p>
      </div>
      <div className="space-y-1">
        <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-widest">After</p>
        <p className="text-xl font-black text-hayrok-orange">{after}{unit}</p>
      </div>
    </div>
  </div>
);

const ROICard = ({ title, tagline, icon: Icon, metrics, outcomes, visualization }: any) => (
  <MotionDiv 
    {...fadeInUp}
    className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-12 mb-12 shadow-sm hover:shadow-2xl transition-all duration-700 relative overflow-hidden group"
  >
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">
      <div>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg bg-hayrok-orange group-hover:scale-110 transition-transform duration-500">
            <Icon size={28} />
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-900 leading-tight">{title}</h3>
            <p className="text-hayrok-orange text-[10px] font-black uppercase tracking-[0.4em]">{tagline}</p>
          </div>
        </div>

        <div className="space-y-4 mb-10">
          {metrics.map((m: any, i: number) => (
            <MetricComparison key={i} {...m} />
          ))}
        </div>

        <div className="p-8 bg-slate-900 rounded-[2rem] text-white">
          <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.4em] mb-4">Typical Outcomes</p>
          <ul className="space-y-3">
            {outcomes.map((o: string, i: number) => (
              <li key={i} className="flex gap-3 text-base font-bold leading-snug">
                <CheckCircle2 size={18} className="text-hayrok-orange shrink-0 mt-0.5" />
                {o}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex-1 bg-slate-50 rounded-[2.5rem] border border-slate-100 p-8 md:p-12 lg:p-16 flex flex-col justify-center items-center relative overflow-hidden">
           {visualization}
        </div>
      </div>
    </div>
  </MotionDiv>
);

export const ROIMetrics: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-32 overflow-hidden">
      <section className="relative pt-48 pb-24 px-6 z-10">
        <div className="container mx-auto text-center">
          <MotionDiv 
            {...fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-hayrok-orange text-[10px] font-black mb-8 tracking-[0.4em] uppercase shadow-sm"
          >
            <BarChart3 size={12} className="animate-pulse" />
            MEASURABLE IMPACT
          </MotionDiv>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tight max-w-5xl mx-auto uppercase">
            Proving Value <br/>
            <span className="text-hayrok-orange italic">Through Results.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-semibold leading-relaxed max-w-4xl mx-auto mb-16">
            Hayrok ROI is measured by risk reduced, time saved, and decisions defended.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 relative z-10">
        {/* Risk Reduction ROI */}
        <ROICard 
          title="Risk Reduction ROI"
          tagline="The Genesis Flow"
          icon={TrendingDown}
          metrics={[
            { label: "Critical Risks", before: "Unproven", after: "Validated", icon: ShieldAlert },
            { label: "False Positives", before: "45", after: "<5", icon: Search, unit: "%" },
            { label: "Fix Time", before: "Weeks", after: "Days", icon: Clock }
          ]}
          outcomes={[
            "35-50% reduction in critical risk in 90 days",
            "2-3x faster risk containment",
            "Eliminating noise from static scan results"
          ]}
          visualization={<GatedPipelineFlow />}
        />

        {/* Operational ROI */}
        <ROICard 
          title="Operational ROI"
          tagline="Team Productivity"
          icon={Zap}
          metrics={[
            { label: "Manual Triage", before: "High", after: "Low", icon: Activity },
            { label: "Validation", before: "Days", after: "Minutes", icon: Target },
            { label: "Tracking", before: "Static", after: "Continuous", icon: History }
          ]}
          outcomes={[
            "40-60% reduction in manual triage time",
            "Evidence-backed findings for teams",
            "Autonomous retesting of fix effectiveness"
          ]}
          visualization={<SignalNoisePieChart />}
        />

        {/* Software Lifecycle ROI - NEW SECTION */}
        <ROICard 
          title="Software Lifecycle ROI"
          tagline="Secure Velocity"
          icon={Rocket}
          metrics={[
            { label: "Security Gates", before: "Manual", after: "Automated", icon: GitMerge },
            { label: "Gate Bypass", before: "Frequent", after: "Zero", icon: ShieldX },
            { label: "Release Delay", before: "Days", after: "Seconds", icon: RefreshCw }
          ]}
          outcomes={[
            "90% reduction in security-related release delays",
            "Zero insecure builds reaching production targets",
            "10x improvement in remediation cost by shifting left"
          ]}
          visualization={
            <div className="w-full space-y-12">
               <ReleaseGateImpactChart />
               <div className="h-px w-full bg-slate-200" />
               <ShiftLeftVulnerabilityChart />
            </div>
          }
        />

        {/* Audit & Compliance ROI */}
        <ROICard 
          title="Audit & Compliance ROI"
          tagline="Governed Evidence"
          icon={Gavel}
          metrics={[
            { label: "Audit Prep", before: "Months", after: "Minutes", icon: ClipboardCheck },
            { label: "Evidence Quality", before: "Static", after: "Traceable", icon: FileCheck },
            { label: "Compliance Risk", before: "Hidden", after: "Mapped", icon: Scale }
          ]}
          outcomes={[
            "70% reduction in compliance review preparation time",
            "Real-time lineage for every risk decision",
            "Machine-readable evidence artifacts for regulators"
          ]}
          visualization={
            <div className="w-full space-y-12">
               <AuditReadinessMeter />
               <div className="h-px w-full bg-slate-200" />
               <DecisionAuditTimeline />
            </div>
          }
        />
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
              <div className="max-w-2xl">
                <h2 className="text-[11px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-6">Executive Summary</h2>
                <h3 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-none uppercase">ROI <span className="text-hayrok-orange italic">Snapshot.</span></h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { label: "Risk Reduction", val: "50%", desc: "Verified via proof paths." },
                 { label: "Efficiency", val: "60%", desc: "AI-assisted correlation." },
                 { label: "Confidence", val: "99%", desc: "Evidence-backed validation." },
                 { label: "Readiness", val: "70%", desc: "Automated decision logs." }
               ].map((item, i) => (
                 <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-all shadow-xl">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">{item.label}</p>
                    <div className="text-6xl font-black mb-4 tracking-tighter text-white">{item.val}</div>
                    <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const BrainIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z"></path>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z"></path>
  </svg>
);

const SearchCodeIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m13 13.5 2 2.5 5-5" /><path d="m21 21-4.3-4.3" /><circle cx="11" cy="11" r="8" /><path d="m7 9 2 2-2 2" />
  </svg>
);
