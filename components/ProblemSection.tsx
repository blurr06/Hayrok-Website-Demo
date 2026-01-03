
import React from 'react';
import { ShieldAlert, Terminal, Search, Layers, Box, Gavel, Cpu, CheckCircle2 } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-widest mb-6">The Visibility Paradox</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 leading-[1.1]">
              Security Has Visibility. <br/>
              <span className="text-hayrok-orange">What It Lacks Is Validated Decision Ownership.</span>
            </h3>
            
            <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed">
              Organizations today deploy specialized tools to understand posture, yet leadership still lacks clear answers on owned risk.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
               {[
                 { l: "Understand cloud posture", t: "CNAPP", i: Layers },
                 { l: "Prioritize exposure", t: "CTEM", i: Search },
                 { l: "Test security controls", t: "BAS", i: Box },
                 { l: "Manage software risk", t: "SCA", i: Terminal },
                 { l: "Document outcomes", t: "GRC", i: Gavel }
               ].map((tool, i) => (
                 <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 border border-slate-100 rounded-3xl transition-all hover:bg-white hover:shadow-xl group">
                    <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-slate-400 group-hover:text-hayrok-orange shadow-sm border border-slate-100">
                       <tool.i size={18} />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{tool.l}</p>
                       <p className="text-sm font-black text-slate-900">{tool.t}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="p-10 bg-hayrok-dark text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <ShieldAlert size={120} />
               </div>
               <p className="text-2xl font-bold leading-tight relative z-10 mb-4">
                  Security produces insights. <br/>
                  <span className="text-hayrok-orange italic font-black">No system owns the final decision.</span>
               </p>
               <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] relative z-10">Hayrok doesn't replace your stack. It completes it.</p>
            </div>
          </div>

          <div className="relative">
             <div className="bg-slate-900 rounded-[4rem] p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] relative overflow-hidden text-white min-h-[600px] flex flex-col items-center justify-center border border-slate-800">
                <div className="absolute inset-0 bg-grid-white opacity-5" />
                
                <div className="relative z-10 text-center space-y-12">
                   <div className="inline-block p-4 bg-white/5 rounded-2xl backdrop-blur-md border border-white/5 shadow-xl">
                      <p className="text-xs font-black uppercase tracking-widest text-hayrok-orange">The Current Answer</p>
                   </div>
                   
                   <h4 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                      When leadership asks <br/> <span className="text-slate-500 italic">“Which risks do we actually own?”</span>
                   </h4>
                   
                   <div className="space-y-4 max-w-sm mx-auto text-left">
                      {[
                        "High volumes of limited context",
                        "Point-in-time assessments",
                        "Disconnected tools without validation",
                        "Manual spreadsheet decisions"
                      ].map((ans, i) => (
                        <div key={i} className="flex gap-3 items-center">
                           <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                           <p className="text-slate-300 font-bold text-sm uppercase tracking-tight">{ans}</p>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
