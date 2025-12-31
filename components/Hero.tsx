import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ArrowRight, Brain, Target, Presentation, 
  Shield, Activity, Zap, Layers, Bot, Cpu, 
  Users, Search, Bell, MoreHorizontal, Maximize2,
  LayoutDashboard, Compass, ClipboardList,
  Settings, UserPlus, Box, FileText, Globe, ShieldAlert,
  ChevronDown, BarChart3, Clock, CheckCircle2, TrendingUp as TrendingUpIcon,
  AlertTriangle, Filter, Terminal, Info, Share2, Eye,
  Sparkles
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const MotionDiv = motion.div as any;

const GenesisDashboardMock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#FDFDFD] rounded-[2.5rem] shadow-2xl overflow-hidden flex h-[780px] border border-slate-200/60 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-100 flex flex-col shrink-0 relative z-20">
        <div className="p-8 mb-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-hayrok-orange flex items-center justify-center shadow-lg shadow-orange-500/20">
            <Shield size={18} className="text-white" />
          </div>
          <span className="text-slate-900 font-black text-xl tracking-tight">Hayrok</span>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {[
            { label: 'Dashboard', icon: LayoutDashboard, active: true },
            { label: 'Asset Center', icon: DatabaseIcon },
            { label: 'Scorecards', icon: BarChart3 },
            { label: 'Live Validation', icon: Zap },
            { label: 'Attack Paths', icon: Target },
            { label: 'CodeFabrics', icon: CodeIcon },
            { label: 'Trust Reports', icon: FileText },
            { label: 'Integrations', icon: Layers },
          ].map((item, i) => (
            <button 
              key={i} 
              className={`w-full px-5 py-3 rounded-2xl flex items-center gap-4 transition-all duration-300 ${item.active ? 'bg-hayrok-orange text-white shadow-xl shadow-orange-500/20' : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'}`}
            >
              <item.icon size={18} strokeWidth={item.active ? 2.5 : 2} />
              <span className="text-sm font-bold tracking-tight">{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="p-6 border-t border-slate-50">
           <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Active Guard</span>
              </div>
              <div className="h-1 w-12 bg-emerald-500 rounded-full" />
           </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden bg-[#F8F9FB]">
        {/* Header */}
        <header className="h-20 flex items-center justify-between px-10 shrink-0 z-10">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Genesis</h2>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button className="bg-orange-50 text-hayrok-orange px-6 py-2.5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 border border-orange-100 shadow-sm transition-all hover:bg-hayrok-orange hover:text-white group">
                <Bot size={18} />
                Ask Hay-AI
              </button>
              
              {/* Reasoning Engine Bubble */}
              <div className="absolute top-full mt-4 right-0 w-64 bg-white rounded-3xl shadow-2xl border border-slate-100 p-5 z-30">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-hayrok-orange rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-orange-500/20">
                    <Bot size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Hay-AI Active</p>
                    <p className="text-xs font-black text-slate-900 leading-tight">Reasoning Engine v2.0</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="px-10 pb-10 space-y-8 overflow-y-auto no-scrollbar">
          
          {/* Top Stat Cards */}
          <div className="grid grid-cols-4 gap-6">
            {[
              { label: 'Total Assets', value: '2,410', trend: '+12%', color: 'text-hayrok-orange' },
              { label: 'Critical Risk', value: '0', trend: '-100%', color: 'text-emerald-500' },
              { label: 'High Sensitivity', value: '14', trend: 'Stable', color: 'text-slate-400' },
              { label: 'Security Score', value: '94%', trend: '+4%', color: 'text-indigo-500' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm group hover:shadow-xl transition-all">
                <div className="flex justify-between items-start mb-6">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</p>
                  <div className="w-16 h-8 flex items-center justify-center">
                    <svg viewBox="0 0 100 40" className="w-full h-full opacity-30">
                      <path d="M0,35 L20,32 L40,38 L60,25 L80,28 L100,15" fill="none" stroke="currentColor" strokeWidth="3" className={stat.color} />
                    </svg>
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-4xl font-black text-slate-900 tracking-tighter tabular-nums leading-none">{stat.value}</span>
                  <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${stat.trend.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : stat.trend === 'Stable' ? 'bg-slate-50 text-slate-500' : 'bg-orange-50 text-hayrok-orange'}`}>
                    {stat.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Main Posture Card */}
            <div className="col-span-8 space-y-8">
              <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm relative overflow-hidden h-[450px] flex flex-col">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-hayrok-orange shadow-sm border border-orange-100">
                      <Activity size={24} className="animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 tracking-tight">Posture Monitoring Active</h3>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Clock size={12} /> Last validation 2m ago
                      </p>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-[#F8F9FB] border border-slate-100 rounded-xl text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Sparkles size={14} className="text-hayrok-orange" />
                    Hay-AI Insights Enabled
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <p className="text-xl font-medium text-slate-500 max-w-lg mb-10 leading-relaxed">
                    Hay-AI is currently analyzing <span className="text-slate-900 font-black">214 attack vectors</span> across your cloud environment.
                  </p>

                  {/* Log View */}
                  <div className="w-full max-w-xl bg-[#1E293B] rounded-3xl p-6 font-mono text-[11px] text-left shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                      <Terminal size={100} className="text-white" />
                    </div>
                    <div className="space-y-2 relative z-10">
                      <div className="flex gap-3">
                        <span className="text-hayrok-orange opacity-60">[08:56:11]</span>
                        <span className="text-slate-300">Validation: <span className="text-white">non-destructive probe sent to Port 443</span></span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-hayrok-orange opacity-60">[08:56:11]</span>
                        <span className="text-slate-300">Risk Score adjusted: <span className="text-hayrok-orange font-bold">+2.4 impact detected</span></span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-hayrok-orange opacity-60">[08:56:11]</span>
                        <span className="text-slate-300">Scanning software SBOM in 'billing-service' repository</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-hayrok-orange opacity-60">[08:56:11]</span>
                        <span className="text-slate-300">
                          <span className="inline-block w-2.5 h-4 bg-hayrok-orange align-middle mr-2" />
                          Governance: <span className="text-white font-bold italic">OPA policy 'Restricted-Data-Access' verified</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden shadow-inner border border-slate-100">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '65%' }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      className="h-full bg-hayrok-orange rounded-full shadow-[0_0_10px_rgba(255,95,0,0.4)]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Findings Sidebar */}
            <div className="col-span-4 space-y-6 h-full flex flex-col">
              <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-10">
                  <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.3em]">Recent Findings</h4>
                  <button className="text-[10px] font-black text-hayrok-orange uppercase tracking-widest hover:underline transition-all">View All</button>
                </div>

                <div className="space-y-4">
                  {[
                    { title: 'Insecure S3 Policy', tag: 'Verified by Hay-AI • 10m ago', icon: ShieldAlert },
                    { title: 'Outdated SSH Library', tag: 'Hay-AI Probe Sent • 25m ago', icon: Zap },
                  ].map((finding, i) => (
                    <div key={i} className="bg-[#F8F9FB] rounded-[2rem] p-8 border border-slate-50 group hover:border-hayrok-orange/30 transition-all cursor-pointer">
                      <h5 className="text-base font-black text-slate-900 mb-3 tracking-tight">{finding.title}</h5>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-hayrok-orange/10 rounded-lg flex items-center justify-center text-hayrok-orange">
                          <finding.icon size={12} />
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{finding.tag}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-10 text-center">
                   <div className="p-6 bg-slate-50 rounded-[2rem] border border-dashed border-slate-200">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">System is continuously learning from environment shifts.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Custom icons for the sidebar/dashboard to match screenshot
const DatabaseIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
  </svg>
);

const CodeIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);

export const Hero: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-white opacity-100 pointer-events-none" />
      <IntelligenceFabric density={1.2} isDark={false} />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-10 mb-24">
          <MotionDiv 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-white border border-slate-200 text-slate-900 text-[11px] font-black uppercase tracking-[0.35em] shadow-2xl shadow-orange-500/10 mx-auto mb-10 group hover:border-hayrok-orange/40 transition-all duration-500"
          >
            <div className="flex items-center gap-2">
               <span className="text-hayrok-orange text-xl font-mono">&gt;</span>
               <motion.span 
                 animate={{ opacity: [1, 0, 1] }} 
                 transition={{ duration: 1, repeat: Infinity }} 
                 className="w-3 h-[3px] bg-hayrok-orange rounded-full"
               />
            </div>
            Governed, AI-Enabled Security Risk Intelligence
          </MotionDiv>
          
          <h1 className="text-6xl md:text-[8.5rem] font-black tracking-tight leading-[0.85] text-[#0F172A] uppercase">
            Aligned to <span className="text-slate-400 italic">CTEM</span> and <br />
            <span className="bg-gradient-to-r from-hayrok-orange via-[#FF5F00] to-orange-400 bg-clip-text text-transparent italic">Security Validation.</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium tracking-tight">
            Turn continuous security exposure into validated, auditable risk decisions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <button 
              onClick={() => onNavigate?.('demo')} 
              className="w-full sm:w-auto bg-hayrok-orange hover:bg-orange-600 text-white px-12 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-2xl shadow-orange-500/20"
            >
              Request a Demo
              <ChevronRight size={20} />
            </button>
            <button 
              onClick={() => onNavigate?.('contact')} 
              className="w-full sm:w-auto px-12 py-5 rounded-2xl font-black text-lg text-slate-900 border border-slate-200 hover:bg-slate-50 flex items-center justify-center gap-3 transition-all bg-white shadow-sm"
            >
              <Users size={18} fill="currentColor" className="text-hayrok-orange" />
              Talk to a Security Architect
            </button>
          </div>
        </div>

        {/* High Fidelity Dashboard Showcase */}
        <div className="relative w-full max-w-[1400px] mx-auto perspective-1000">
           <MotionDiv 
             initial={{ opacity: 0, y: 100, rotateX: 10 }}
             whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
             className="relative z-20 dashboard-shadow"
           >
              <GenesisDashboardMock />
           </MotionDiv>

           {/* Floating Background Accents */}
           <div className="absolute -top-20 -right-20 w-80 h-80 bg-hayrok-orange/10 blur-[120px] rounded-full pointer-events-none" />
           <div className="absolute -bottom-40 -left-20 w-[600px] h-[600px] bg-blue-500/5 blur-[160px] rounded-full pointer-events-none" />
        </div>
        
        {/* Strategic Impact Bar */}
        <div className="mt-32 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
           {[
             { title: "Risk Ownership", desc: "Clearly defined decision lineage for every finding.", icon: Target },
             { title: "Evidence Standard", desc: "Proof-first validation kills security noise.", icon: Brain },
             { title: "Governance Native", desc: "AI workflows bound by your specific policies.", icon: Presentation }
           ].map((item, i) => (
             <div key={i} className="p-8 text-left border-l border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                   <div className="p-2 bg-slate-50 rounded-lg text-hayrok-orange shadow-sm">
                      <item.icon size={20} />
                   </div>
                   <h6 className="font-black text-slate-900 uppercase tracking-tight">{item.title}</h6>
                </div>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};