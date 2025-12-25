
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Brain, Zap, ShieldCheck, FileText, ArrowRight, Target, Layout, Database } from 'lucide-react';

// Moved Activity definition above its first usage in the 'steps' array to fix hoisting issues with block-scoped variables.
const Activity = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

const steps = [
  {
    id: 1,
    title: "Vulnerability Detection",
    description: "CodeFabrics identifies a critical risk in your software supply chain or runtime environment.",
    icon: Code
  },
  {
    id: 2,
    title: "Reachability Check",
    description: "Hay-AI determines if the vulnerability is actually reachable and exploitable in your specific config.",
    icon: Brain
  },
  {
    id: 3,
    title: "Policy Approval",
    description: "OPA policies and security teams review and approve the automated validation task.",
    icon: ShieldCheck
  },
  {
    id: 4,
    title: "Exploit Validation",
    description: "Genesis runs a safe, non-destructive check to confirm if an attacker could really do this.",
    icon: Target
  },
  {
    id: 5,
    title: "Evidence Collection",
    description: "Screenshots, HAR traces, and attack graph logs are collected as defensible proof.",
    icon: FileText
  },
  {
    id: 6,
    title: "Risk Score Update",
    description: "Real-time posture update based on validated findings, not just theoretical scores.",
    icon: Activity
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="solutions">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-widest mb-4">A Continuous Exposure Loop</h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
            How Hive Works <span className="text-slate-400">End-to-End</span>
          </h3>
          <p className="text-slate-500 text-lg">
            A closed-loop system where detection leads to reasoning, reasoning leads to proof, 
            and proof leads to remediation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
           {steps.map((step, i) => (
              <div key={i} className="relative">
                 <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                       <div className="w-12 h-12 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center text-hayrok-orange z-10">
                          <step.icon size={24} />
                       </div>
                       {i < steps.length - 1 && (
                          <div className="w-px h-full bg-slate-200 mt-4"></div>
                       )}
                    </div>
                    <div className="pt-1">
                       <h4 className="text-slate-900 font-bold text-lg mb-2">{step.id}. {step.title}</h4>
                       <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                    </div>
                 </div>
              </div>
           ))}
        </div>

        {/* This loop never stops - Footer Note */}
        <div className="mt-20 flex justify-center">
           <div className="inline-flex items-center gap-3 px-6 py-3 bg-hayrok-orange text-white rounded-full font-bold shadow-xl animate-pulse">
              <Activity size={20} />
              <span>THIS LOOP NEVER STOPS</span>
           </div>
        </div>
      </div>
    </section>
  );
};
