
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingDown, Zap, Rocket, ShieldCheck, 
  ArrowRight, BarChart3, Clock, CheckCircle2, 
  Search, ShieldAlert, Target, Sparkles, 
  FileCheck, LayoutDashboard, Database, Activity,
  TrendingUp, FileText, MousePointer2, AlertCircle,
  Cpu, Lock, SearchCode, GitBranch, Layers,
  Terminal, Server, Globe, ShieldX,
  FileSearch, ClipboardCheck, History, HardDrive, Download,
  Info
} from 'lucide-react';

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
    { label: "Noise Reduction", value: 85, color: "#F1F5F9", detail: "Automated AI Filtering of Non-Exploitable Noise" }
  ];

  const data = view === 'before' ? beforeData : afterData;
  
  // SVG Donut Logic
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
                <motion.circle
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
                  style={{ strokeDashoffset: dashOffset, transformOrigin: 'center', rotate: `${(currentOffset / circumference) * 360}deg` }}
                  onMouseEnter={() => setHoveredSegment(segment.label)}
                  onMouseLeave={() => setHoveredSegment(null)}
                  className="cursor-pointer transition-all duration-300 hover:opacity-80"
                />
              );
            })}
          </AnimatePresence>
        </svg>

        {/* Center Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <motion.span 
            key={view}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`text-4xl font-black tracking-tighter ${view === 'after' ? 'text-hayrok-orange' : 'text-slate-400'}`}
          >
            {view === 'after' ? '15%' : '100%'}
          </motion.span>
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
            {view === 'after' ? 'True Signal' : 'Unfiltered'}
          </span>
        </div>

        {/* Rich Tooltip */}
        <AnimatePresence>
          {hoveredSegment && (
            <motion.div
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 w-full">
         <div className="p-4 bg-white border border-slate-100 rounded-2xl">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Signal Quality</p>
            <p className="text-xl font-black text-slate-900">{view === 'after' ? 'Excellent' : 'Poor'}</p>
         </div>
         <div className="p-4 bg-white border border-slate-100 rounded-2xl">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Analysis Mode</p>
            <p className="text-xl font-black text-slate-900">{view === 'after' ? 'Agentic AI' : 'Static'}</p>
         </div>
      </div>
      
      <p className="mt-6 text-[10px] text-slate-400 font-bold italic text-center">
        * Hover segments for detailed analysis metrics.
      </p>
    </div>
  );
};

const PipelineGate = ({ icon: Icon, label, status, color, delay = 0 }: any) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="relative flex flex-col items-center group"
  >
    <div className={`w-16 h-16 rounded-2xl bg-white border-2 flex items-center justify-center shadow-xl transition-all duration-500 relative z-10 ${status === 'active' ? `border-${color}-500 text-${color}-500 ring-4 ring-${color}-500/10` : 'border-slate-200 text-slate-400 opacity-50'}`}>
       <Icon size={24} strokeWidth={2.5} />
       {status === 'active' && (
         <motion.div 
           animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
           transition={{ duration: 2, repeat: Infinity }}
           className={`absolute inset-0 bg-${color}-500 rounded-2xl -z-10`}
         />
       )}
    </div>
    <div className="mt-4 text-center">
       <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{label}</p>
       <div className="flex items-center justify-center gap-1 mt-1">
          <div className={`w-1.5 h-1.5 rounded-full ${status === 'active' ? `bg-${color}-500` : 'bg-slate-300'}`} />
          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">
            {status === 'active' ? 'Scanning' : 'Standby'}
          </span>
       </div>
    </div>
  </motion.div>
);

const GatedPipelineFlow = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="flex items-center justify-between mb-12">
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">Live Pipeline Status</p>
          <h4 className="text-2xl font-black text-slate-900 tracking-tight">Code-to-Cloud Governance</h4>
        </div>
        <div className="bg-slate-900 text-white px-4 py-2 rounded-xl flex items-center gap-3 shadow-2xl">
           <Cpu size={14} className="text-hayrok-orange animate-spin" />
           <span className="text-[10px] font-bold uppercase tracking-widest">Genesis-Gate v4.0</span>
        </div>
      </div>

      <div className="relative py-10 px-4">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-[44px] -z-0">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-slate-200 via-hayrok-orange to-emerald-500"
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute top-1/2 left-0 w-full h-1 -translate-y-[44px] overflow-hidden">
           {[...Array(5)].map((_, i) => (
             <motion.div
               key={i}
               initial={{ x: -20 }}
               animate={{ x: '100vw' }}
               transition={{ duration: 3, repeat: Infinity, delay: i * 0.8, ease: "linear" }}
               className="absolute top-0 w-2 h-full bg-white/80 blur-sm rounded-full"
             />
           ))}
        </div>

        <div className="grid grid-cols-4 gap-4 relative z-10">
          <PipelineGate icon={GitBranch} label="Ingest" status="active" color="slate" delay={0.1} />
          <PipelineGate icon={SearchCode} label="Analyze" status="active" color="orange" delay={0.3} />
          <PipelineGate icon={Target} label="Validate" status="active" color="orange" delay={0.5} />
          <PipelineGate icon={ShieldCheck} label="Secure" status="active" color="emerald" delay={0.7} />
        </div>
      </div>

      <div className="mt-16 bg-slate-50 border border-slate-200 rounded-3xl p-6 relative overflow-hidden group">
         <div className="absolute top-0 left-0 w-1 h-full bg-hayrok-orange" />
         <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-hayrok-orange shadow-sm">
               <Sparkles size={18} />
            </div>
            <div className="flex-1">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Hay-AI Automated Proof</p>
               <p className="text-sm font-bold text-slate-800 leading-tight">
                  Genesis validated <span className="text-hayrok-orange italic">Exploitable Path #822</span>. Deploying secure patch to production.
               </p>
            </div>
            <div className="text-right">
               <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">Verified</span>
            </div>
         </div>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">
         {[
           { label: "Throughput", val: "1.2k/hr", icon: Activity },
           { label: "Blocked Risks", val: "412", icon: ShieldAlert },
           { label: "MTTR", val: "12m", icon: Clock }
         ].map((stat, i) => (
           <div key={i} className="text-center p-3 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 flex items-center justify-center gap-1">
                 <stat.icon size={8} /> {stat.label}
              </p>
              <p className="text-sm font-black text-slate-900">{stat.val}</p>
           </div>
         ))}
      </div>
    </div>
  );
};

const ReleaseSuccessPipeline = () => {
  const stages = [
    { label: "Code", icon: Terminal, color: "slate" },
    { label: "Build", icon: Server, color: "slate" },
    { label: "Genesis", icon: Target, color: "orange" },
    { label: "Deploy", icon: Globe, color: "emerald" }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">CI/CD Integrity</p>
          <h4 className="text-2xl font-black text-slate-900 tracking-tight">Security Velocity</h4>
        </div>
        <div className="flex flex-col items-end">
           <span className="text-3xl font-black text-emerald-500 leading-none">99.2%</span>
           <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Success Rate</span>
        </div>
      </div>

      <div className="relative flex justify-between items-center px-4 py-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm">
        {/* Connector Line Background */}
        <div className="absolute top-1/2 left-10 right-10 h-1 bg-slate-100 -translate-y-[28px] -z-0" />
        
        {/* Success Flow Path */}
        <div className="absolute top-1/2 left-10 right-10 h-1 -translate-y-[28px] overflow-hidden">
          <motion.div 
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-1/2 h-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
          />
        </div>

        {stages.map((stage, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center gap-3 relative z-10"
          >
            <div className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center bg-white shadow-lg transition-all duration-300 ${i === 2 ? 'border-hayrok-orange text-hayrok-orange ring-4 ring-orange-500/10' : 'border-slate-100 text-slate-400'}`}>
               <stage.icon size={20} />
            </div>
            <span className="text-[9px] font-black text-slate-900 uppercase tracking-widest">{stage.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Live Pipeline Feed */}
      <div className="mt-8 space-y-3">
        {[
          { id: "REL-2941", status: "Success", time: "2m ago", detail: "Validated by Genesis AI" },
          { id: "REL-2940", status: "Blocked", time: "14m ago", detail: "Proof of Exploitable Path Found", error: true }
        ].map((run, i) => (
          <div key={i} className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-2xl">
             <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${run.error ? 'bg-red-50 text-red-500' : 'bg-emerald-50 text-emerald-500'}`}>
                   {run.error ? <ShieldX size={14} /> : <CheckCircle2 size={14} />}
                </div>
                <div>
                   <p className="text-xs font-black text-slate-900 uppercase">{run.id}</p>
                   <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">{run.detail}</p>
                </div>
             </div>
             <span className="text-[10px] font-black text-slate-400">{run.time}</span>
          </div>
        ))}
      </div>

      <p className="mt-8 text-[11px] text-center font-bold text-slate-400 italic">
        "Security is now a quality gate, not a post-release audit."
      </p>
    </div>
  );
};

const AuditEvidenceVault = () => {
  const frameworks = ["SOC2", "ISO27001", "HIPAA", "GDPR"];

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">Evidence Lifecycle</p>
          <h4 className="text-2xl font-black text-slate-900 tracking-tight">Audit-Ready Engine</h4>
        </div>
        <div className="flex items-center gap-2">
           <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
           <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">Vault Secure</span>
        </div>
      </div>

      {/* Framework Readiness */}
      <div className="grid grid-cols-4 gap-2 mb-8">
        {frameworks.map((f, i) => (
          <div key={i} className="p-2 bg-white border border-slate-100 rounded-xl flex flex-col items-center">
             <span className="text-[8px] font-black text-slate-400 uppercase tracking-tighter mb-1">{f}</span>
             <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: i === 0 ? '98%' : i === 1 ? '85%' : '70%' }}
                  className={`h-full ${i === 0 ? 'bg-emerald-500' : 'bg-indigo-500'}`}
                />
             </div>
          </div>
        ))}
      </div>

      {/* Central Vault Visualization */}
      <div className="relative h-48 bg-slate-900 rounded-[2rem] overflow-hidden flex items-center justify-center p-8 group">
         <div className="absolute inset-0 bg-grid-white opacity-5" />
         
         {/* Moving Evidence Particles */}
         {[...Array(6)].map((_, i) => (
           <motion.div
             key={i}
             initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100, y: (i - 3) * 20 }}
             animate={{ opacity: [0, 1, 0], x: 0, y: 0 }}
             transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
             className="absolute"
           >
              <FileText size={16} className="text-indigo-400/40" />
           </motion.div>
         ))}

         <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-20 h-20 bg-indigo-500 rounded-[1.5rem] shadow-[0_0_40px_rgba(99,102,241,0.4)] flex items-center justify-center text-white mb-4"
            >
               <HardDrive size={32} />
            </motion.div>
            <span className="text-[10px] font-black text-indigo-300 uppercase tracking-widest">Evidence Vault</span>
         </div>
      </div>

      {/* Generated Report Preview */}
      <div className="mt-8 bg-indigo-50 border border-indigo-100 rounded-3xl p-6 relative overflow-hidden group">
         <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
               <div className="p-2 bg-white rounded-xl shadow-sm text-indigo-600">
                  <ClipboardCheck size={18} />
               </div>
               <div>
                  <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Latest Export</p>
                  <p className="text-sm font-bold text-slate-900">Q4 Compliance Summary.pdf</p>
               </div>
            </div>
            <button className="p-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20">
               <Download size={16} />
            </button>
         </div>
         
         <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-bold text-slate-500">
               <span>Controls Verified</span>
               <span className="text-emerald-500">214 / 214</span>
            </div>
            <div className="h-1.5 w-full bg-white rounded-full overflow-hidden">
               <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} className="h-full bg-emerald-500" />
            </div>
         </div>
      </div>
    </div>
  );
};

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
        <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-widest">After Hayrok</p>
        <p className="text-xl font-black text-hayrok-orange">{after}{unit}</p>
      </div>
    </div>
  </div>
);

const ROICard = ({ title, tagline, icon: Icon, metrics, outcomes, visualization, accentColor }: any) => (
  <motion.div 
    {...fadeInUp}
    className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-12 mb-12 shadow-sm hover:shadow-2xl transition-all duration-700 relative overflow-hidden group"
  >
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">
      <div>
        <div className="flex items-center gap-4 mb-8">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg ${accentColor} group-hover:scale-110 transition-transform duration-500`}>
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
  </motion.div>
);

export const ROIMetrics: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-32 overflow-hidden">
      {/* Blended Background Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-orange-50/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-50/40 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-grid-white opacity-[0.2]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 z-10">
        <div className="container mx-auto text-center">
          <motion.div 
            {...fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-hayrok-orange text-[10px] font-black mb-8 tracking-[0.4em] uppercase shadow-sm"
          >
            <BarChart3 size={12} className="animate-pulse" />
            MEASURABLE IMPACT
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tight max-w-5xl mx-auto">
            Proving Security Value That <br/>
            <span className="bg-gradient-to-r from-hayrok-orange to-orange-400 bg-clip-text text-transparent italic">Leadership Understands.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-semibold leading-relaxed max-w-4xl mx-auto mb-16">
            Hayrok ROI is not measured by alerts processed or scans run. It’s measured by risk reduced, time saved, and decisions defended.
          </p>
        </div>
      </section>

      {/* Main ROI Sections */}
      <section className="container mx-auto px-6 relative z-10">
        {/* 1. Risk Reduction */}
        <ROICard 
          title="Gated Risk Reduction ROI"
          tagline="The Genesis Flow Architecture"
          icon={TrendingDown}
          accentColor="bg-red-600"
          metrics={[
            { label: "Critical Risks", before: "High", after: "Validated", icon: ShieldAlert },
            { label: "False Positives", before: "30-60", after: "<10", icon: Search, unit: "%" },
            { label: "Containment Time", before: "Weeks", after: "Days", icon: Clock }
          ]}
          outcomes={[
            "35–50% reduction in exploitable critical risk in 90 days",
            "2–3x faster risk containment",
            "Near-elimination of remediation on non-exploitable findings"
          ]}
          visualization={<GatedPipelineFlow />}
        />

        {/* 2. Operational Efficiency */}
        <ROICard 
          title="Operational Efficiency ROI"
          tagline="Security Team Productivity"
          icon={Zap}
          accentColor="bg-blue-600"
          metrics={[
            { label: "Triage Time", before: "High", after: "-50", icon: Activity, unit: "%" },
            { label: "Validation Effort", before: "Manual", after: "Automated", icon: Target },
            { label: "Analyst Fatigue", before: "High", after: "Reduced", icon: BrainIcon }
          ]}
          outcomes={[
            "40–60% reduction in manual triage time",
            "Fewer escalations due to evidence-backed findings",
            "Security teams focus on what attackers can actually exploit"
          ]}
          visualization={<SignalNoisePieChart />}
        />

        {/* 3. Engineering Velocity */}
        <ROICard 
          title="Engineering Velocity ROI"
          tagline="Release with Confidence"
          icon={Rocket}
          accentColor="bg-emerald-600"
          metrics={[
            { label: "Secure Releases", before: "Manual", after: "Predictable", icon: CheckCircle2 },
            { label: "Security Blocks", before: "Frequent", after: "Rare", icon: ShieldAlert },
            { label: "Release Rate", before: "Stable", after: "+30", icon: TrendingUp, unit: "%" }
          ]}
          outcomes={[
            "25–35% increase in secure release rates",
            "Fewer last-minute release blocks",
            "Improved trust between security and engineering"
          ]}
          visualization={<ReleaseSuccessPipeline />}
        />

        {/* 4. Audit & Compliance */}
        <ROICard 
          title="Audit & Compliance ROI"
          tagline="Continuous Evidence Preparation"
          icon={ShieldCheck}
          accentColor="bg-indigo-600"
          metrics={[
            { label: "Prep Time", before: "Weeks", after: "Days", icon: Clock },
            { label: "Audit Effort", before: "High", after: "-60", icon: FileCheck, unit: "%" },
            { label: "Explainability", before: "Low", after: "Full", icon: Sparkles }
          ]}
          outcomes={[
            "50–70% reduction in audit preparation effort",
            "Faster responses to customer due-diligence questionnaires",
            "Increased confidence in AI-driven decisions"
          ]}
          visualization={<AuditEvidenceVault />}
        />
      </section>

      {/* Executive View Bento */}
      <section className="container mx-auto px-6 py-24">
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-hayrok-orange to-transparent blur-[120px]" />
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
              <div className="max-w-2xl">
                <h2 className="text-[11px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-6">Executive Summary</h2>
                <h3 className="text-4xl md:text-7xl font-black mb-6 tracking-tight leading-none">Composite ROI Snapshot</h3>
                <p className="text-xl text-slate-400 font-medium">12-Month Value Summary (Typical Customer Enterprise)</p>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                 <ShieldCheck size={24} className="text-hayrok-orange" />
                 <span className="text-sm font-black uppercase tracking-widest">Defensible Outcomes</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { label: "Exploitable Risk Reduction", val: "35–50%", desc: "Verified via Genesis proof paths." },
                 { label: "Security Team Efficiency", val: "+40–60%", desc: "Reduction in manual triage & validation." },
                 { label: "Secure Release Rate", val: "+25–35%", desc: "Confidence via CodeFabrics gates." },
                 { label: "Audit Preparation Effort", val: "−50–70%", desc: "Evidence-by-default architecture." }
               ].map((item, i) => (
                 <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4 group-hover:text-hayrok-orange transition-colors">{item.label}</p>
                    <div className="text-5xl font-black mb-4 tracking-tighter">{item.val}</div>
                    <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>

            <div className="mt-20 pt-12 border-t border-white/5 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 "Measured over time, not a snapshot",
                 "Backed by proof, not assumptions",
                 "Aligned to business criticality",
                 "Auditable even when AI-driven"
               ].map((text, i) => (
                 <div key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-hayrok-orange" />
                    {text}
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 text-center">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto py-24">
          <h3 className="text-4xl md:text-7xl font-black text-slate-900 mb-10 tracking-tight leading-[0.9]">
            This is ROI Security Leaders Can <br/>
            <span className="text-hayrok-orange italic">Stand Behind.</span>
          </h3>
          <p className="text-xl md:text-2xl text-slate-600 font-semibold mb-12 leading-relaxed">
            In boardrooms and audits, Hayrok proves its value through defensible results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="w-full sm:w-auto bg-hayrok-orange text-white px-12 py-6 rounded-2xl text-xl font-black hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/30">
              Request a Value Assessment
            </button>
            <button className="w-full sm:w-auto px-12 py-6 rounded-2xl text-xl font-black text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all bg-white shadow-sm flex items-center justify-center gap-3 group/btn">
              Download ROI Whitepaper <ArrowRight size={24} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
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
