import React from 'react';
import { BarChart3, TrendingUp, Award, ArrowUp } from 'lucide-react';

export const ScorecardSection: React.FC = () => {
  return (
    <section id="scorecard" className="py-24 relative bg-hayrok-dark overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-gradient-to-l from-hayrok-orange/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Visual UI Card */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-hayrok-orange via-yellow-500 to-orange-600 rounded-2xl opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <div className="relative bg-hayrok-panel border border-hayrok-border rounded-xl p-6 md:p-8 shadow-2xl">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-1">Security Health Score</h3>
                    <div className="flex items-baseline gap-2">
                       <span className="text-5xl font-bold text-white">A+</span>
                       <span className="text-green-500 text-sm font-bold flex items-center gap-1">
                          <ArrowUp size={14} /> 94/100
                       </span>
                    </div>
                  </div>
                  <div className="p-3 bg-hayrok-orange/10 rounded-lg text-hayrok-orange">
                     <Award size={24} />
                  </div>
                </div>

                {/* Benchmark Graph Simulation */}
                <div className="space-y-6">
                   <div className="space-y-2">
                      <div className="flex justify-between text-xs text-slate-400">
                         <span>Your Organization</span>
                         <span className="text-white font-bold">94</span>
                      </div>
                      <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                         <div className="h-full bg-hayrok-orange w-[94%] rounded-full relative">
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                         </div>
                      </div>
                   </div>
                   
                   <div className="space-y-2 opacity-60">
                      <div className="flex justify-between text-xs text-slate-400">
                         <span>Industry Average (Fintech)</span>
                         <span>72</span>
                      </div>
                      <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                         <div className="h-full bg-slate-500 w-[72%] rounded-full"></div>
                      </div>
                   </div>
                   
                   <div className="space-y-2 opacity-60">
                      <div className="flex justify-between text-xs text-slate-400">
                         <span>Bottom 20%</span>
                         <span>45</span>
                      </div>
                      <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                         <div className="h-full bg-red-900 w-[45%] rounded-full"></div>
                      </div>
                   </div>
                </div>

                <div className="mt-8 pt-6 border-t border-hayrok-border flex gap-4">
                   <div className="flex-1">
                      <div className="text-xs text-slate-500 mb-1">Critical Issues</div>
                      <div className="text-xl font-bold text-white">0</div>
                   </div>
                   <div className="flex-1 border-l border-hayrok-border pl-4">
                      <div className="text-xs text-slate-500 mb-1">Mean Time to Fix</div>
                      <div className="text-xl font-bold text-white">4h 12m</div>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">
               Board-Ready <br />
               <span className="text-hayrok-orange">Security Benchmarking</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
               Stop guessing where you stand. Our <strong>Security Scorecard</strong> provides an objective, real-time rating of your security posture compared to industry peers.
            </p>
            
            <ul className="space-y-6">
               <li className="flex gap-4">
                  <div className="mt-1 bg-hayrok-orange/10 p-2 rounded-lg text-hayrok-orange">
                     <BarChart3 size={20} />
                  </div>
                  <div>
                     <h4 className="text-white font-bold text-lg mb-1">Executive Reporting</h4>
                     <p className="text-slate-500 text-sm">Beautiful, jargon-free reports designed for CISOs and Board of Directors.</p>
                  </div>
               </li>
               <li className="flex gap-4">
                  <div className="mt-1 bg-hayrok-orange/10 p-2 rounded-lg text-hayrok-orange">
                     <TrendingUp size={20} />
                  </div>
                  <div>
                     <h4 className="text-white font-bold text-lg mb-1">Competitive Benchmarking</h4>
                     <p className="text-slate-500 text-sm">See how you stack up against companies of similar size and sector.</p>
                  </div>
               </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};
