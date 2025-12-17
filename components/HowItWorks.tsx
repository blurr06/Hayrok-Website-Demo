import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scan, Brain, ShieldCheck, FileText, ArrowRight, Target, Server, Code } from 'lucide-react';

const steps = [
  {
    id: 0,
    title: "1. Auto-Reconnaissance",
    description: "Hay-AI continuously maps your external attack surface, identifying forgotten assets, shadow IT, and exposed databases before attackers do.",
    icon: Scan,
    visual: "map"
  },
  {
    id: 1,
    title: "2. Intelligent Emulation",
    description: "Unlike dumb scanners, Hay-AI understands business logic. It attempts complex exploit chains and multi-stage attacks just like a human adversary.",
    icon: Brain,
    visual: "brain"
  },
  {
    id: 2,
    title: "3. Expert Validation",
    description: "Our certified pentesting team reviews every AI finding to eliminate false positives. You only get alerted on real, verified threats.",
    icon: ShieldCheck,
    visual: "shield"
  },
  {
    id: 3,
    title: "4. Rapid Remediation",
    description: "Get detailed reproduction steps and fix code snippets delivered directly to your engineering workflow via Jira, Slack, or GitHub.",
    icon: FileText,
    visual: "report"
  }
];

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="solutions">
      {/* Background Decor - Light */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
            The <span className="text-hayrok-orange">Hayrok Workflow</span>
          </h2>
          <p className="text-slate-600 text-lg">
            From discovery to remediation, our hybrid AI-human approach ensures 
            complete coverage with zero noise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps Navigation - Adapted for Light Theme */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-white border-hayrok-orange shadow-xl shadow-orange-500/10' 
                    : 'bg-transparent border-transparent hover:bg-white hover:shadow-sm'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg mt-1 transition-colors ${
                    activeStep === index ? 'bg-hayrok-orange text-white' : 'bg-slate-200 text-slate-500'
                  }`}>
                    <step.icon size={20} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      activeStep === index ? 'text-slate-900' : 'text-slate-500'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${
                      activeStep === index ? 'text-slate-600' : 'text-slate-400'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Visual Area - Dark Window on Light Wall */}
          <div className="relative h-[500px] bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex items-center justify-center p-8 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-hayrok-orange/5 to-transparent pointer-events-none"></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-full max-w-md"
              >
                {activeStep === 0 && (
                   <div className="relative aspect-square">
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-64 h-64 border border-hayrok-orange/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                         <div className="absolute w-48 h-48 border border-dashed border-hayrok-orange/50 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                         <Target size={48} className="text-hayrok-orange animate-pulse" />
                      </div>
                      {/* Floating Assets */}
                      <motion.div animate={{ x: [0, 20, 0], y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/4 left-1/4 bg-slate-800 p-2 rounded border border-slate-700 text-xs flex items-center gap-2 text-white">
                        <Server size={12} className="text-blue-400"/> API Gateway
                      </motion.div>
                      <motion.div animate={{ x: [0, -15, 0], y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-1/3 right-1/4 bg-slate-800 p-2 rounded border border-slate-700 text-xs flex items-center gap-2 text-white">
                        <Code size={12} className="text-yellow-400"/> Dev Repo
                      </motion.div>
                   </div>
                )}

                {activeStep === 1 && (
                  <div className="bg-slate-950 rounded-lg p-4 font-mono text-xs border border-slate-800 shadow-2xl">
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"/>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                      <div className="w-3 h-3 rounded-full bg-green-500"/>
                    </div>
                    <div className="space-y-2">
                      <p className="text-slate-500"># Initializing Attack Simulation...</p>
                      <p className="text-blue-400">{'>'} Payload: SQL Injection (Time-based)</p>
                      <p className="text-slate-300">Target: <span className="text-yellow-400">auth.service.internal</span></p>
                      <p className="text-slate-500">... Bypassing WAF ...</p>
                      <p className="text-slate-500">... Injecting Token ...</p>
                      <div className="p-2 bg-hayrok-orange/10 border border-hayrok-orange/20 rounded mt-2">
                        <p className="text-hayrok-orange font-bold">[!] VULNERABILITY CONFIRMED</p>
                        <p className="text-white">Access granted to admin_users table.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                   <div className="flex flex-col items-center gap-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-slate-800 to-black rounded-full flex items-center justify-center border-2 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                         <ShieldCheck size={48} className="text-green-500" />
                      </div>
                      <div className="bg-hayrok-panel p-4 rounded-xl border border-hayrok-border w-full">
                         <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-bold text-white">Status: <span className="text-green-400">Verified</span></span>
                            <span className="text-xs text-slate-500">Just now</span>
                         </div>
                         <p className="text-sm text-slate-400">
                            "Confirmed SQLi in auth service. Requires admin cookie to exploit. Severity set to High (8.8)."
                         </p>
                         <div className="mt-3 flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-slate-700"></div>
                            <span className="text-xs text-slate-300">Verified by <b>Sarah Jenkins</b> (OSCP)</span>
                         </div>
                      </div>
                   </div>
                )}

                {activeStep === 3 && (
                   <div className="bg-white text-black rounded-lg p-6 shadow-2xl">
                      <div className="flex items-center gap-3 mb-4 border-b border-gray-200 pb-4">
                         <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">J</div>
                         <div>
                            <div className="font-bold text-sm">JIRA-2049</div>
                            <div className="text-xs text-gray-500">Created automatically by Hayrok</div>
                         </div>
                      </div>
                      <h4 className="font-bold mb-2">Fix SQL Injection in Auth</h4>
                      <div className="bg-gray-100 p-3 rounded text-xs font-mono mb-3 text-slate-700">
                         {`// Patched Code\nconst query = 'SELECT * FROM users WHERE id = $1';\nawait db.query(query, [userId]);`}
                      </div>
                      <button className="w-full py-2 bg-hayrok-orange text-white rounded font-bold text-sm hover:bg-orange-600 transition-colors">
                         View Full Report
                      </button>
                   </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
