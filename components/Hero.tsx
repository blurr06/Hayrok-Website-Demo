import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, Play, Brain, Target, Presentation, 
  Shield, Activity, Zap, Layers, Bot, Cpu, FileSpreadsheet
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const MotionDiv = motion.div as any;

const LiveLogFeed = () => {
  const [logs, setLogs] = useState<string[]>([
    "Ingesting cloud exposure signals...",
    "Genesis: validating external attack paths...",
    "CodeFabrics: analyzing supply-chain risk...",
  ]);

  useEffect(() => {
    const events = [
      "Hay-AI: reasoning about transitive trust...",
      "Found reachable CVE in 'auth-service'",
      "Genesis: running safe SSRF validation",
      "Evidence captured: IAM Metadata Exposure",
      "Risk Score updated: High Criticality confirmed",
      "Policy check: OPA-Governance-Verified",
      "Reporting: generating board-ready summary",
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
    <section className="relative pt-40 pb-20 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-white opacity-100 pointer-events-none" />
      <IntelligenceFabric density={1.2} isDark={false} />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-10 mb-24">
          <MotionDiv 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white border border-slate-200 text-slate-900 text-[10px] font-black uppercase tracking-[0.25em] shadow-sm mx-auto"
          >
            <div className="flex items-center gap-1.5">
               <span className="text-hayrok-orange text-lg leading-none mt-[-2px] tracking-tight font-sans">&gt;_</span>
            </div>
            Governed, AI-Driven Security Risk Intelligence
          </MotionDiv>
          
          <h1 className="text-6xl md:text-[8.5rem] font-black tracking-tighter leading-[0.85] text-[#0F172A]">
            Aligned to <span className="text-slate-400">CTEM</span> and <br />
            <span className="bg-gradient-to-r from-hayrok-orange via-[#FF5F00] to-[#7C3AED] bg-clip-text text-transparent italic">Security Validation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium">
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
              <Play size={18} fill="currentColor" className="text-hayrok-orange" />
              Talk to a Security Architect
            </button>
          </div>
        </div>

        {/* Risk Intelligence Dashboard Mock (Decision Core) */}
        <div className="relative w-full max-w-[1200px] mx-auto">
           <div className="bg-slate-900 rounded-[3rem] p-1.5 shadow-2xl shadow-black/20 overflow-hidden group">
              <div className="bg-white rounded-[2.8rem] overflow-hidden flex flex-col md:flex-row h-auto md:h-[500px]">
                 <div className="flex-1 p-8 md:p-12 text-left flex flex-col justify-center">
                    <h4 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-4">The Decision Core</h4>
                    <h5 className="text-3xl font-black text-slate-900 mb-6 leading-tight">Moving from <span className="text-slate-400">Alerts</span> to <span className="text-hayrok-orange italic">Defensible Decisions.</span></h5>
                    <div className="space-y-4 mb-10">
                       {[
                         { icon: Brain, text: "Explainable AI reasoning for every finding.", color: "text-blue-500" },
                         { icon: Target, text: "Evidence-backed prioritization of real risk.", color: "text-purple-500" },
                         { icon: Presentation, text: "Board-ready visualizations of posture.", color: "text-hayrok-orange" }
                       ].map((item, i) => (
                          <div key={i} className="flex items-center gap-4">
                             <div className={`w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center ${item.color}`}>
                                <item.icon size={16} />
                             </div>
                             <span className="text-sm font-bold text-slate-600">{item.text}</span>
                          </div>
                       ))}
                    </div>
                    <LiveLogFeed />
                 </div>
                 <div className="w-full md:w-1/2 bg-slate-50 border-l border-slate-100 flex flex-col items-center justify-center p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-grid-white" />
                    <div className="p-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl relative z-10 w-full max-w-sm">
                       <div className="flex justify-between items-center mb-8">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Risk Decision</span>
                          <span className="px-3 py-1 bg-hayrok-orange text-white text-[9px] font-black rounded-full uppercase">Pending Review</span>
                       </div>
                       <div className="space-y-6">
                          <div>
                             <h6 className="text-lg font-black text-slate-900 leading-tight">IAM Privilege Escalation Path</h6>
                             <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">Validated via Genesis v1.2</p>
                          </div>
                          <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                             <p className="text-xs font-medium text-slate-700 leading-relaxed italic">"Evidence: SSRF confirmed on Port 443 with direct reachability to IAM Metadata. Path verified as critically exploitable."</p>
                          </div>
                          <div className="flex gap-4">
                             <button className="flex-1 bg-slate-900 text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-hayrok-orange transition-colors">Remediate</button>
                             <button className="flex-1 border border-slate-200 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:bg-slate-50 transition-colors">Accept Risk</button>
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