
import React from 'react';
import { XCircle, ShieldAlert, AlertTriangle, Search, Activity, Terminal } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-widest mb-6">The Hard Truths</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 leading-[1.1]">
              Security Tools Create Activity. <br/>
              <span className="text-hayrok-orange">Not Confidence.</span>
            </h3>
            
            <div className="space-y-8 mb-12">
               {[
                 { 
                   title: "The Alert Treadmill", 
                   desc: "Alerts keep increasing — but breaches still happen. Most tools optimize for finding more issues, not fewer.", 
                   icon: Activity 
                 },
                 { 
                   title: "The Governance Gap", 
                   desc: "“AI security” tools act fast but can’t be explained or governed. They create black boxes instead of defensible evidence.", 
                   icon: Terminal 
                 },
                 { 
                   title: "The Auditor Disconnect", 
                   desc: "Boards and auditors ask questions tools can’t answer. They want to know 'Are we safer?', not 'How many vulnerabilities do we have?'", 
                   icon: Search 
                 }
               ].map((truth, i) => (
                 <div key={i} className="flex gap-6 items-start p-6 bg-slate-50 rounded-3xl border border-slate-100 transition-all hover:bg-white hover:shadow-xl">
                    <div className="p-3 bg-white rounded-xl shadow-sm text-hayrok-orange">
                       <truth.icon size={24} />
                    </div>
                    <div>
                       <h4 className="text-xl font-bold text-slate-900 mb-2">{truth.title}</h4>
                       <p className="text-slate-500 font-medium leading-relaxed">{truth.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="p-10 bg-hayrok-dark text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <ShieldAlert size={120} />
               </div>
               <p className="text-2xl font-bold leading-tight relative z-10">
                  Most platforms optimize for finding more issues. <br/>
                  <span className="text-hayrok-orange italic font-black">Attackers optimize for exploitable paths.</span>
               </p>
               <p className="mt-4 text-slate-400 font-bold uppercase tracking-widest text-[10px] relative z-10">That gap is where risk lives.</p>
            </div>
          </div>

          <div className="relative">
             <div className="bg-slate-900 rounded-[4rem] p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] relative overflow-hidden text-white h-[600px] flex flex-col items-center justify-center border border-slate-800">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Shield size={320} className="text-hayrok-orange" />
                </div>
                
                <div className="relative z-10 text-center space-y-12">
                   <div className="inline-block p-4 bg-white/5 rounded-2xl backdrop-blur-md border border-white/5 shadow-xl">
                      <p className="text-xs font-black uppercase tracking-widest text-hayrok-orange">The Shift</p>
                   </div>
                   
                   <h4 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                      Hive connects the dots <br/> <span className="text-slate-500">automatically.</span>
                   </h4>
                   
                   <p className="text-slate-400 max-w-sm mx-auto font-medium text-lg leading-relaxed">
                      We shift your team from reactive manual triage to autonomous security validation.
                   </p>

                   <div className="flex items-center justify-center gap-10">
                      <div className="text-center">
                         <div className="text-2xl md:text-4xl font-black">200k</div>
                         <div className="text-[10px] font-bold uppercase text-slate-500 tracking-widest">Activity (Lists)</div>
                      </div>
                      <div className="h-16 w-px bg-slate-800"></div>
                      <div className="text-center">
                         <div className="text-2xl md:text-4xl font-black text-hayrok-orange">1</div>
                         <div className="text-[10px] font-bold uppercase text-slate-500 tracking-widest">Confidence (Exploit Path)</div>
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

const Shield = ({ size, className }: { size: number, className: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);
