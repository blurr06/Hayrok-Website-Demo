
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Search, LayoutDashboard, Database, ChevronRight, Activity, Terminal, 
  Target, BarChart3, Zap, Layers, Bot, FileText, Code, TrendingUp, TrendingDown,
  Clock, CheckCircle2, AlertCircle, Play, Sparkles
} from 'lucide-react';

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
      "Validation: non-destructive probe sent to Port 443",
      "Analysis: CVE-2024-3812 reachable via public ingress",
      "Evidence Capture: Screenshot of unauthorized access",
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
    <div className="font-mono text-[10px] space-y-1.5 text-left w-full max-w-md bg-slate-900/90 p-4 rounded-xl border border-white/5 shadow-inner">
      {logs.map((log, i) => (
        <div key={i} className="flex gap-2 animate-fade-in">
          <span className="text-hayrok-orange opacity-60">[{new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}]</span>
          <span className={i === logs.length - 1 ? "text-white font-bold" : "text-slate-400"}>
            {i === logs.length - 1 && <span className="inline-block w-2 h-3 bg-hayrok-orange mr-1 animate-pulse" />}
            {log}
          </span>
        </div>
      ))}
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-10 overflow-hidden bg-white">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute inset-0 bg-grid-white opacity-[0.4] [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] animate-grid-move"></div>
         <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(255,95,0,0.08)_0%,transparent_70%)] blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div className="max-w-5xl mx-auto mb-20 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold shadow-sm mx-auto">
             <Terminal size={14} className="text-hayrok-orange" />
             <span className="tracking-widest uppercase">Governed Agentic AI for Real Security Risk Reduction</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.95] text-slate-900">
            AI-Native Continuous <br />
            <span className="bg-gradient-to-r from-hayrok-orange via-orange-400 to-indigo-600 bg-clip-text text-transparent">Exposure Management</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium">
            Hayrok is the first agentic AI security platform built to be <strong>governed, accountable, and auditable</strong>. We prove what’s exploitable, reduce real exposure, and show measurable impact over time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6">
            <button className="w-full sm:w-auto bg-hayrok-orange hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-[0_20px_40px_-10px_rgba(255,95,0,0.3)] group">
              Request a Demo
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-lg text-slate-900 border border-slate-200 hover:bg-slate-50 flex items-center justify-center gap-2 transition-all bg-white shadow-sm">
              <Play size={18} fill="currentColor" className="text-hayrok-orange" />
              See How It Works
            </button>
          </div>
        </div>

        {/* Dashboard Visualization */}
        <div className="relative w-full max-w-[1300px] perspective-1000 mx-auto group">
           {/* SUNSET COLOR GLOW - Visible from the sides */}
           <div className="absolute -inset-10 md:-inset-20 pointer-events-none">
              <motion.div animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/2 left-0 -translate-y-1/2 w-[40%] h-[120%] bg-orange-600/30 blur-[100px] rounded-full" />
              <motion.div animate={{ opacity: [0.2, 0.4, 0.2], scale: [1.1, 1, 1.1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/2 right-0 -translate-y-1/2 w-[40%] h-[120%] bg-indigo-600/20 blur-[100px] rounded-full" />
              <motion.div animate={{ opacity: [0.2, 0.5, 0.2], y: [-20, 20, -20] }} transition={{ duration: 12, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[140%] bg-rose-500/10 blur-[120px] rounded-full" />
           </div>
           
           <div className="relative bg-[#F1F5F9] rounded-2xl md:rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-2xl transform transition-all duration-1000 group-hover:-translate-y-2 ring-1 ring-black/[0.03]">
              {/* Hay-AI Status Float */}
              <div className="absolute top-12 right-12 z-20 hidden lg:flex items-center gap-3 bg-white/90 backdrop-blur-xl border border-slate-200 p-4 rounded-2xl shadow-2xl">
                 <div className="w-10 h-10 bg-hayrok-orange rounded-xl flex items-center justify-center text-white animate-pulse">
                    <Bot size={22} />
                 </div>
                 <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Hay-AI Active</div>
                    <div className="text-xs font-bold text-slate-900 leading-none">Reasoning Engine v2.0</div>
                 </div>
              </div>

              <div className="flex flex-col md:flex-row h-[600px] md:h-[800px]">
                 {/* Sidebar */}
                 <div className="hidden md:flex w-64 bg-white h-full flex-col shrink-0 border-r border-slate-200">
                    <div className="p-8 mb-4">
                       <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-hayrok-orange rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                             <Shield className="text-white" size={20} />
                          </div>
                          <span className="font-black text-xl text-slate-900">Hayrok</span>
                       </div>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto custom-scrollbar px-5 space-y-1">
                       <div className="flex items-center gap-3 text-white bg-hayrok-orange px-4 py-3 rounded-xl font-bold text-sm cursor-pointer shadow-xl shadow-orange-500/30">
                          <LayoutDashboard size={18} />
                          <span>Dashboard</span>
                       </div>
                       {[
                          { icon: Database, label: "Asset Center" },
                          { icon: BarChart3, label: "Scorecards" },
                          { icon: Zap, label: "Live Validation" },
                          { icon: Target, label: "Attack Paths" },
                          { icon: Code, label: "CodeFabrics" },
                          { icon: FileText, label: "Trust Reports" },
                          { icon: Layers, label: "Integrations" }
                       ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 px-4 py-3 rounded-xl text-sm transition-all cursor-pointer font-bold">
                             <item.icon size={18} />
                             <span>{item.label}</span>
                          </div>
                       ))}
                    </div>

                    <div className="p-8 mt-auto">
                       <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                          <div className="flex items-center gap-3 mb-2">
                             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                             <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Active Guard</span>
                          </div>
                          <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden">
                             <div className="w-[100%] h-full bg-green-500"></div>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Content */}
                 <div className="flex-1 overflow-hidden flex flex-col bg-slate-50">
                    <div className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-10 shrink-0">
                       <div className="flex items-center gap-2 text-slate-900 font-black text-2xl">Genesis</div>
                       <div className="flex items-center gap-6">
                          <button className="flex items-center gap-2 bg-orange-50 text-hayrok-orange border border-orange-100 px-5 py-2.5 rounded-2xl text-sm font-bold">
                             <Bot size={18} /> Ask Hay-AI
                          </button>
                          <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden">
                             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" className="w-full h-full" />
                          </div>
                       </div>
                    </div>

                    <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
                       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                          {[
                            { label: "Total Assets", val: "2,410", inc: "+12%", trend: "up", color: "blue" },
                            { label: "Critical Risk", val: "0", inc: "-100%", trend: "down", color: "green" },
                            { label: "High Sensitivity", val: "14", inc: "Stable", trend: "stable", color: "orange" },
                            { label: "Security Score", val: "94%", inc: "+4%", trend: "up", color: "indigo" }
                          ].map((stat, i) => (
                            <div key={i} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between relative overflow-hidden group/stat">
                               <div className="flex justify-between items-start mb-4 relative z-10">
                                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
                                  <Sparkline color={stat.color === 'green' ? 'green' : i === 3 ? 'indigo' : 'orange'} />
                               </div>
                               <div className="flex items-end justify-between relative z-10">
                                  <span className="text-3xl font-black text-slate-900">{stat.val}</span>
                                  <div className={`flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full ${stat.trend === 'up' ? 'bg-green-50 text-green-600' : stat.trend === 'down' ? 'bg-orange-50 text-hayrok-orange' : 'bg-slate-50 text-slate-500'}`}>
                                     {stat.inc}
                                  </div>
                               </div>
                            </div>
                          ))}
                       </div>

                       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col p-10 min-h-[400px]">
                             <div className="flex items-center justify-between mb-10">
                                <div className="flex items-center gap-4">
                                   <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-hayrok-orange shadow-lg shadow-orange-500/10">
                                      <Activity size={28} strokeWidth={2.5} />
                                   </div>
                                   <div>
                                      <h4 className="text-xl font-bold text-slate-900">Posture Monitoring Active</h4>
                                      <div className="flex items-center gap-2 text-xs font-medium text-slate-500"><Clock size={12} /> Last validation 2m ago</div>
                                   </div>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full">
                                   <Sparkles size={12} className="text-hayrok-orange" />
                                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Hay-AI Insights Enabled</span>
                                </div>
                             </div>
                             <div className="flex-1 flex flex-col items-center justify-center gap-8">
                                <p className="text-slate-500 max-w-sm text-center font-medium">Hay-AI is currently analyzing <strong>214 attack vectors</strong> across your cloud environment.</p>
                                <LiveLogFeed />
                                <div className="w-full max-w-md bg-slate-100 h-2.5 rounded-full overflow-hidden relative shadow-inner">
                                   <div className="w-2/3 h-full bg-hayrok-orange animate-progress relative z-10"></div>
                                </div>
                             </div>
                          </div>
                          <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col p-8">
                             <div className="flex items-center justify-between mb-8">
                                <h5 className="font-black text-slate-900 text-sm uppercase tracking-widest">Recent Findings</h5>
                                <button className="text-[10px] font-bold text-hayrok-orange uppercase">View All</button>
                             </div>
                             <div className="space-y-4">
                                {[
                                  { label: "Critical", name: "Insecure S3 Policy", status: "Verified by Hay-AI", time: "10m ago" },
                                  { label: "High", name: "Outdated SSH Library", status: "Hay-AI Probe Sent", time: "25m ago" },
                                ].map((finding, idx) => (
                                  <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group/item hover:border-hayrok-orange/30 transition-all">
                                     <h6 className="text-sm font-bold text-slate-800 mb-2 group-hover/item:text-hayrok-orange transition-colors">{finding.name}</h6>
                                     <div className="flex items-center gap-2">
                                        <Bot size={12} className="text-hayrok-orange" />
                                        <span className="text-[9px] text-slate-400 font-bold">{finding.status} • {finding.time}</span>
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
