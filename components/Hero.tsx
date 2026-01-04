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
  Sparkles, Home, Package, Crosshair, PieChart, ScanLine,
  Calendar, Download, Play, ChevronUp
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const MotionDiv = motion.div as any;

// Interactive Hive Dashboard - Enterprise Level
const HiveDashboardMock = () => {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [assetExpanded, setAssetExpanded] = useState(true);
  const [vulnCounts, setVulnCounts] = useState({ critical: 0, high: 0, medium: 0, low: 0 });
  const [isScanning, setIsScanning] = useState(false);
  
  // Animate vulnerability counts on mount
  useEffect(() => {
    const targets = { critical: 32, high: 12, medium: 8, low: 40 };
    const duration = 1500;
    const steps = 30;
    const interval = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setVulnCounts({
        critical: Math.round(targets.critical * progress),
        high: Math.round(targets.high * progress),
        medium: Math.round(targets.medium * progress),
        low: Math.round(targets.low * progress),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, active: true },
    { name: 'Asset Management', icon: Package, expandable: true, expanded: assetExpanded },
    { name: 'Scorecards', icon: ClipboardList },
    { name: 'Reporting & Insights', icon: PieChart },
    { name: 'Scan Config', icon: Settings },
    { name: 'Scan Results', icon: ScanLine },
  ];

  const assetSubItems = ['Inventory', 'Continuous Discovery', 'Asset Risk Profiling'];

  return (
    <div className="relative w-full rounded-[1.5rem] shadow-2xl overflow-hidden border border-slate-200/60 bg-white">
      {/* Traffic light dots */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 z-50">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-emerald-400" />
      </div>

      <div className="flex h-[750px]">
        {/* Sidebar */}
        <div className="w-72 bg-slate-900 flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-hayrok-orange rounded-xl flex items-center justify-center">
                <Shield size={18} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-black text-lg tracking-tight">Hayrok</h3>
                <p className="text-hayrok-orange text-[11px] font-medium">Hive</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 py-4 px-3">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider px-3 mb-3">Main</p>
            <nav className="space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => {
                      setActiveNav(item.name);
                      if (item.expandable) setAssetExpanded(!assetExpanded);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      activeNav === item.name 
                        ? 'bg-hayrok-orange text-white' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon size={18} />
                      <span>{item.name}</span>
                    </div>
                    {item.expandable && (
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${item.expanded ? 'rotate-180' : ''}`} 
                      />
                    )}
                  </button>
                  {item.expandable && item.expanded && (
                    <div className="ml-9 mt-1 space-y-1">
                      {assetSubItems.map((sub) => (
                        <button 
                          key={sub}
                          className="w-full text-left px-3 py-2 text-sm text-slate-500 hover:text-slate-300 transition-colors"
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Bottom bar */}
          <div className="p-4 border-t border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Live Dashboard</span>
            </div>
            <p className="text-[10px] text-slate-600 mt-1 ml-5">Hive Platform v2.0</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-slate-50">
          {/* Top Header */}
          <div className="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-hayrok-orange to-orange-500 rounded-xl flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <span className="font-black text-slate-800 text-lg">Genesis</span>
              </div>
              <div className="text-[10px] text-slate-400 font-medium">Governed & Actionable AI Security</div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                <Search size={16} className="text-slate-400" />
                <span className="text-sm text-slate-400">Search</span>
              </div>
              
              {/* Ask Hay-AI */}
              <button className="flex items-center gap-2 px-4 py-2 bg-hayrok-orange/10 rounded-xl border border-hayrok-orange/20 text-hayrok-orange font-bold text-sm hover:bg-hayrok-orange/20 transition-colors">
                <Bot size={16} />
                Ask Hay-AI
              </button>
              
              {/* Notifications */}
              <button className="relative p-2 hover:bg-slate-100 rounded-xl transition-colors">
                <Bell size={20} className="text-slate-500" />
                <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              
              {/* Profile */}
              <div className="flex items-center gap-2 pl-4 border-l border-slate-100">
                <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                  <Users size={14} className="text-slate-500" />
                </div>
                <span className="text-sm font-bold text-slate-700">Hayrok Inc.</span>
                <ChevronDown size={16} className="text-slate-400" />
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="flex-1 p-6 overflow-auto">
            {/* Breadcrumb & Actions */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Home size={16} className="text-hayrok-orange" />
                <ChevronRight size={14} className="text-slate-300" />
                <span className="font-bold text-slate-800">Dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2 hover:bg-white rounded-lg transition-colors">
                  <Calendar size={18} className="text-slate-400" />
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-hayrok-orange text-hayrok-orange rounded-xl font-bold text-sm hover:bg-hayrok-orange/5 transition-colors">
                  <Download size={16} />
                  Report
                </button>
                <button 
                  onClick={() => setIsScanning(!isScanning)}
                  className="flex items-center gap-2 px-4 py-2 bg-hayrok-orange text-white rounded-xl font-bold text-sm hover:bg-orange-600 transition-colors"
                >
                  <Play size={16} />
                  Run Scan
                </button>
              </div>
            </div>

            {/* Target URL Card */}
            <div className="bg-white rounded-2xl border border-slate-100 p-4 mb-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-sm font-bold text-slate-700">www.hayrok.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Status</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-xs font-bold uppercase">
                    {isScanning ? 'Scanning...' : 'Completed'}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-6 text-xs text-slate-400">
                <span>Start time <span className="font-bold text-slate-600">1:46 PM</span></span>
                <span>End time <span className="font-bold text-slate-600">2:46 PM</span></span>
                <span>Duration <span className="font-bold text-slate-600">1 hour</span></span>
              </div>
            </div>

            {/* Vulnerability Status */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-50 rounded-xl">
                  <ShieldAlert size={20} className="text-red-500" />
                </div>
                <h3 className="font-black text-slate-800">Vulnerability Status</h3>
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: 'Critical', count: vulnCounts.critical, color: 'from-red-500 to-red-600', icon: AlertTriangle },
                  { label: 'High', count: vulnCounts.high, color: 'from-orange-400 to-orange-500', icon: AlertTriangle },
                  { label: 'Medium', count: vulnCounts.medium, color: 'from-yellow-400 to-yellow-500', icon: Info },
                  { label: 'Low', count: vulnCounts.low, color: 'from-blue-400 to-blue-500', icon: Info },
                ].map((item) => (
                  <motion.div 
                    key={item.label}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${item.color} p-5 cursor-pointer transition-shadow hover:shadow-lg`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <BarChart3 size={16} className="text-white/80" />
                      <span className="text-white/90 text-sm font-bold">{item.label}</span>
                    </div>
                    <p className="text-4xl font-black text-white">{item.count}</p>
                    <div className="absolute -bottom-4 -right-4 opacity-10">
                      <item.icon size={80} className="text-white" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Active Assets Section */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 mt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-black text-slate-800">Active Assets</h3>
                <span className="text-xs text-slate-400">24 total</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="text-left py-3 px-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Domain</th>
                      <th className="text-left py-3 px-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                      <th className="text-left py-3 px-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Progress</th>
                      <th className="text-left py-3 px-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Timestamp</th>
                      <th className="text-left py-3 px-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { domain: 'www.hayrok.com', status: 'Active', progress: 100, date: '03 Aug 25', action: 'View' },
                      { domain: 'api.hayrok.com', status: 'Active', progress: 100, date: '03 Aug 25', action: 'View' },
                      { domain: 'dashboard.hayrok.com/public', status: 'Pending', progress: 45, date: '02 Aug 25', action: 'Resume' },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-2 font-medium text-slate-700">{row.domain}</td>
                        <td className="py-3 px-2">
                          <span className={`px-2 py-1 rounded-lg text-xs font-bold ${row.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-yellow-100 text-yellow-700'}`}>{row.status}</span>
                        </td>
                        <td className="py-3 px-2">
                          <div className="flex items-center gap-2">
                            <div className="w-20 h-2 bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full bg-hayrok-orange rounded-full" style={{ width: `${row.progress}%` }} />
                            </div>
                            <span className="text-xs text-slate-500">{row.progress}%</span>
                          </div>
                        </td>
                        <td className="py-3 px-2 text-slate-500">{row.date}</td>
                        <td className="py-3 px-2">
                          <button className="text-hayrok-orange font-bold text-xs hover:underline">{row.action}</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bottom Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {/* Remediation Overview */}
              <div className="bg-white rounded-2xl border border-slate-100 p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-slate-700 text-sm">Remediation Overview</span>
                  <Info size={14} className="text-slate-300" />
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-24 h-24">
                    <svg className="w-full h-full -rotate-90">
                      <circle cx="48" cy="48" r="40" stroke="#f1f5f9" strokeWidth="8" fill="none" />
                      <circle cx="48" cy="48" r="40" stroke="#22c55e" strokeWidth="8" fill="none" strokeDasharray="251" strokeDashoffset="63" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-black text-slate-800">75%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compliance Score */}
              <div className="bg-white rounded-2xl border border-slate-100 p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-slate-700 text-sm">Compliance Score</span>
                  <Info size={14} className="text-slate-300" />
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-emerald-500">87%</p>
                  <p className="text-xs text-slate-400 mt-1">SOC 2 Ready</p>
                </div>
              </div>

              {/* Agent Validation */}
              <div className="bg-white rounded-2xl border border-slate-100 p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-slate-700 text-sm">Agent Validation</span>
                  <Info size={14} className="text-slate-300" />
                </div>
                <div className="space-y-2">
                  {[
                    { label: 'MITTO', status: 'Validated', color: 'emerald' },
                    { label: 'SOTTA', status: 'Pending', color: 'yellow' },
                  ].map((agent) => (
                    <div key={agent.label} className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-600">{agent.label}</span>
                      <span className={`px-2 py-0.5 rounded text-${agent.color}-700 bg-${agent.color}-100 font-bold`}>{agent.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed max-w-4xl mx-auto font-bold tracking-tight">
            The security validation platform that connects your tools, validates your findings, and gives you proof — not opinions.
          </p>
          
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto font-medium">
            When the board asks "are we secure?" — answer with evidence.
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
              <HiveDashboardMock />
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