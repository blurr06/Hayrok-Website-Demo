
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, LayoutDashboard, Database, ChevronRight, Activity, Terminal, 
  Target, BarChart3, Zap, Layers, Bot, FileText, Code, Play, Sparkles
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

// Cast motion elements to any to bypass type sync issues in this environment
const MotionDiv = motion.div as any;

const Sparkline = ({ color = "orange" }: { color?: string }) => (
  <svg className="w-16 h-8 opacity-50" viewBox="0 0 100 40">
    <path
      d={`M0 35 L10 32 L25 38 L40 20 L55 25 L70 10 L85 15 L100 5`}
      fill="none"
      stroke={color === "orange" ? "#FF5F00" : color === "green" ? "#22C55E" : "#6366F1"}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const LiveLogFeed = () => {
  const [logs, setLogs] = useState<string[]>([
    "Initialized Hive Engine v2.0",
    "Discovery: found 14 new cloud assets in us-east-1",
    "Mapping attack surface for 'api-gateway-internal'...",
  ]);

  useEffect(() => {
    const events = [
      "Validation: non-destructive BAS probe sent to Port 443",
      "Analysis: CVE-2024-3812 reachable via public ingress",
      "Evidence Capture: Screenshot of unauthorized path",
      "Risk Score adjusted: +2.4 impact detected",
      "Scanning software SBOM in 'billing-service' repository",
      "Governance: OPA policy 'Restricted-Data-Access' verified",
      "Hay-AI: reasoning about transitive trust relationships...",
      "Detected drift in IAM policy 'Dev-User-ReadOnly'",
    ];

    const interval = setInterval(() => {
      setLogs(prev => [...prev.slice(-4), events[Math.floor(Math.random() * events.length)]]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[10px] space-y-1.5 text-left w-full max-w-md bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
      {logs.map((log, i) => (
        <div key={i} className="flex gap-2 animate-fade-in">
          <span className="text-hayrok-orange opacity-60">[{new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}]</span>
          <span className={i === logs.length - 1 ? "text-slate-900 font-bold" : "text-slate-400"}>
            {i === logs.length - 1 && <span className="inline-block w-2 h-3 bg-hayrok-orange mr-1 animate-pulse" />}
            {log}
          </span>
        </div>
      ))}
    </div>
  );
};

export const Hero: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <section className="relative pt-40 pb-10 overflow-hidden bg-white">
      <IntelligenceFabric density={1.5} isDark={false} />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute inset-0 bg-grid-white opacity-[0.05] animate-grid-move"></div>
         <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(255,95,0,0.05)_0%,transparent_70%)] blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div className="max-w-5xl mx-auto mb-20 space-y-8">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 text-[11px] font-black shadow-sm mx-auto relative overflow-hidden group tracking-[0.2em]">
             <div className="flex items-center gap-1.5">
               <span className="text-hayrok-orange text-lg leading-none mt-[-2px] tracking-tight">&gt;</span>
               <span className="w-2.5 h-[2px] bg-hayrok-orange animate-pulse mt-[8px]"></span>
             </div>
             <span className="uppercase relative z-10">Governed AI‑Driven Security Risk Management</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.95] text-slate-900">
            Built for CTEM and <br />
            <span className="text-hayrok-orange italic tracking-tighter">Security Validation.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium">
            Hayrok continuously identifies, validates, and manages security exposure using governed, transparent, and auditable automation. Focus on practical risk, not theoretical noise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6">
            <button onClick={() => onNavigate?.('early-adopter')} className="w-full sm:w-auto bg-hayrok-orange hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-2xl shadow-orange-500/20">
              Request Early Access
              <ChevronRight size={20} />
            </button>
            <button onClick={() => onNavigate?.('platform')} className="w-full sm:w-auto px-10 py-5 rounded-2xl font-black text-lg text-slate-900 border border-slate-200 hover:bg-slate-50 flex items-center justify-center gap-2 transition-all bg-white shadow-sm">
              <Play size={18} fill="currentColor" className="text-hayrok-orange" />
              Explore the Platform
            </button>
          </div>
        </div>

        {/* Dashboard Visualization */}
        <div className="relative w-full max-w-[1300px] perspective-1000 mx-auto group">
           <div className="absolute -inset-10 md:-inset-20 pointer-events-none opacity-30">
              {/* Use MotionDiv cast to any to fix type error on animate/transition props */}
              <MotionDiv animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/2 left-0 -translate-y-1/2 w-[40%] h-[120%] bg-orange-200 blur-[120px] rounded-full" />
              <MotionDiv animate={{ opacity: [0.1, 0.2, 0.1], scale: [1.1, 1, 1.1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/2 right-0 -translate-y-1/2 w-[40%] h-[120%] bg-blue-200 blur-[120px] rounded-full" />
           </div>
           
           <div className="relative bg-white border border-slate-200 rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl transform transition-all duration-1000 group-hover:-translate-y-2">
              <div className="absolute top-12 right-12 z-20 hidden lg:flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-2xl shadow-xl">
                 <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-hayrok-orange animate-pulse">
                    <Bot size={22} />
                 </div>
                 <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Hay-AI Active</div>
                    <div className="text-xs font-bold text-slate-900 leading-none">Governed Reasoning Engine</div>
                 </div>
              </div>

              <div className="flex flex-col md:flex-row h-[600px] md:h-[800px]">
                 {/* Sidebar */}
                 <div className="hidden md:flex w-64 bg-slate-50 h-full flex-col shrink-0 border-r border-slate-200">
                    <div className="p-8 mb-4">
                       <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-hayrok-orange rounded-xl flex items-center justify-center shadow-sm">
                             <Shield className="text-white" size={20} />
                          </div>
                          <span className="font-black text-xl text-slate-900">Hayrok</span>
                       </div>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto px-5 space-y-1">
                       <div className="flex items-center gap-3 text-white bg-hayrok-orange px-4 py-3 rounded-xl font-bold text-sm cursor-pointer shadow-lg shadow-orange-500/20">
                          <LayoutDashboard size={18} />
                          <span>Dashboard</span>
                       </div>
                       {[
                          { icon: Database, label: "Asset Center" },
                          { icon: BarChart3, label: "Intelligence Hub" },
                          { icon: Zap, label: "Validation Engine" },
                          { icon: Target, label: "Exploit Paths" },
                          { icon: Code, label: "CodeFabrics" },
                          { icon: FileText, label: "Audit Evidence" },
                          { icon: Layers, label: "Integrations" }
                       ].map((item, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-center gap-3 text-slate-500 hover:text-slate-900 hover:bg-white hover:shadow-sm px-4 py-3 rounded-xl text-sm transition-all cursor-pointer font-bold"
                          >
                             <item.icon size={18} />
                             <span>{item.label}</span>
                          </div>
                       ))}
                    </div>
                 </div>

                 {/* Content */}
                 <div className="flex-1 overflow-hidden flex flex-col bg-white">
                    <div className="h-20 border-b border-slate-100 flex items-center justify-between px-10 shrink-0">
                       <div className="flex items-center gap-2 text-slate-900 font-black text-2xl tracking-tighter">CTEM Lifecycle</div>
                       <div className="flex items-center gap-6">
                          <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden">
                             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" className="w-full h-full" />
                          </div>
                       </div>
                    </div>

                    <div className="flex-1 p-8 overflow-y-auto">
                       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                          {[
                            { label: "Assets Scoped", val: "2,410", inc: "+12%", trend: "up", color: "blue" },
                            { label: "Validated Risks", val: "14", inc: "-35%", trend: "down", color: "green" },
                            { label: "Supply Chain", val: "82", inc: "Stable", trend: "stable", color: "orange" },
                            { label: "Posture Score", val: "94%", inc: "+4%", trend: "up", color: "indigo" }
                          ].map((stat, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-[2rem] border border-slate-200 flex flex-col justify-between relative overflow-hidden group/stat">
                               <div className="flex justify-between items-start mb-4 relative z-10">
                                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
                                  <Sparkline color={stat.color === 'green' ? 'green' : i === 3 ? 'indigo' : 'orange'} />
                               </div>
                               <div className="flex items-end justify-between relative z-10">
                                  <span className="text-3xl font-black text-slate-900">{stat.val}</span>
                                  <div className={`flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full ${stat.trend === 'up' ? 'bg-green-100 text-green-700' : stat.trend === 'down' ? 'bg-orange-100 text-hayrok-orange' : 'bg-slate-100 text-slate-500'}`}>
                                     {stat.inc}
                                  </div>
                               </div>
                            </div>
                          ))}
                       </div>

                       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          <div className="lg:col-span-2 bg-slate-50 rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col p-10 min-h-[400px]">
                             <div className="flex items-center justify-between mb-10">
                                <div className="flex items-center gap-4">
                                   <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-hayrok-orange shadow-sm">
                                      <Activity size={28} strokeWidth={2.5} />
                                   </div>
                                   <div>
                                      <h4 className="text-xl font-bold text-slate-900">Continuous Validation Active</h4>
                                      <div className="flex items-center gap-2 text-xs font-medium text-slate-400 tracking-tight">BAS-Aligned Analysis Phase</div>
                                   </div>
                                </div>
                             </div>
                             <div className="flex-1 flex flex-col items-center justify-center gap-8">
                                <p className="text-slate-500 max-w-sm text-center font-medium">Hay-AI is validating <strong>practical exploitability</strong> for 214 potential attack paths.</p>
                                <LiveLogFeed />
                                <div className="w-full max-w-md bg-slate-200 h-2.5 rounded-full overflow-hidden relative shadow-inner">
                                   <div className="w-2/3 h-full bg-hayrok-orange animate-progress relative z-10"></div>
                                </div>
                             </div>
                          </div>
                          <div className="bg-slate-50 rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col p-8">
                             <div className="flex items-center justify-between mb-8">
                                <h5 className="font-black text-slate-900 text-sm uppercase tracking-widest">Evidence Vault</h5>
                                <button className="text-[10px] font-bold text-hayrok-orange uppercase">Audit Export</button>
                             </div>
                             <div className="space-y-4">
                                {[
                                  { label: "Critical", name: "IAM Privilege Escalation", status: "Validated with Proof", time: "10m ago" },
                                  { label: "High", name: "Insecure Build Recurrence", status: "Retested: Remediated", time: "25m ago" },
                                ].map((finding, idx) => (
                                  <div key={idx} className="p-4 bg-white rounded-2xl border border-slate-200 group/item hover:border-hayrok-orange/30 transition-all">
                                     <h6 className="text-sm font-bold text-slate-700 mb-2 group-hover/item:text-hayrok-orange transition-colors">{finding.name}</h6>
                                     <div className="flex items-center gap-2">
                                        <Bot size={12} className="text-hayrok-orange" />
                                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">{finding.status}</span>
                                     </div>
                                  </div>
                                ))}
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
