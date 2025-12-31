import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, Mic, Video, Headphones, Users, Zap, 
  BarChart3, ArrowLeft, ArrowRight, Clock, 
  Calendar, Share2, Download, Sparkles, 
  Bot, Gavel, ShieldCheck, Search, Filter,
  Volume2, Maximize2, SkipForward, SkipBack,
  Monitor, Smartphone, Globe, MessageSquare,
  Pause, Activity, Layout, ChevronRight, Settings
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

export const MULTIMEDIA = [
  {
    id: 'ctem-masterclass-01',
    type: 'Video',
    category: 'Technical',
    title: 'The CTEM Operating Model: Implementation Guide',
    duration: '18:42',
    date: 'Apr 10, 2025',
    author: 'Hayrok Architecture Team',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070',
    description: 'A step-by-step technical walkthrough of implementing the Continuous Threat Exposure Management (CTEM) lifecycle using Hayrok Hive and Genesis.',
    featured: true
  },
  {
    id: 'hive-pulse-ep12',
    type: 'Podcast',
    category: 'The Hive Pulse',
    title: 'Ep. 12: Why "Detection" Is No Longer Enough',
    duration: '45:00',
    date: 'Apr 05, 2025',
    author: 'Herberth Oshiemele + Guests',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070',
    description: 'A conversation on the shift from reactive detection to proactive validation and the future of governed security autonomy.',
    featured: true
  },
  {
    id: 'genesis-demo-aws',
    type: 'Video',
    category: 'Demo',
    title: 'Genesis: Autonomous AWS Path Validation',
    duration: '06:15',
    date: 'Mar 28, 2025',
    author: 'Solutions Engineering',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072',
    description: 'See Genesis autonomously map and validate an IAM-to-S3 lateral movement path in a live production environment simulation.'
  },
  {
    id: 'governed-ai-roundtable',
    type: 'Video',
    category: 'Strategy',
    title: 'Executive Roundtable: The ROI of Governed AI',
    duration: '32:10',
    date: 'Mar 15, 2025',
    author: 'Executive Panel',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070',
    description: 'Three Fortune 500 CISOs discuss how they justify AI security investments and manage the "Black Box" governance risk.'
  },
  {
    id: 'hive-pulse-ep11',
    type: 'Podcast',
    category: 'The Hive Pulse',
    title: 'Ep. 11: The Psychology of False Positives',
    duration: '38:20',
    date: 'Mar 02, 2025',
    author: 'Ebuka Igwegbe',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070',
    description: 'Exploring why security teams struggle to ignore "Critical" alerts even when they suspect the findings are non-exploitable.'
  }
];

export const VideoPodcastsPage: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeContent = MULTIMEDIA.find(m => m.id === selectedId);

  if (!selectedId) {
    return (
      <div className="bg-[#FCFCFA] min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-24 overflow-x-hidden relative">
        <IntelligenceFabric density={1.2} isDark={false} />
        
        <section className="relative pt-48 pb-20 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-900 text-[10px] font-black shadow-sm mb-10 tracking-[0.4em] uppercase"
            >
              <Video size={12} className="text-hayrok-orange" />
              Intelligence Media
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-[8rem] font-black tracking-tight leading-[0.9] text-slate-900 mb-10 uppercase"
            >
              Videos & <br/>
              <span className="text-hayrok-orange italic font-light tracking-tighter">Podcasts.</span>
            </motion.h1>
            
            <motion.p 
              {...fadeInUp}
              className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-3xl mx-auto font-medium mb-12"
            >
              Strategic conversations and technical walkthroughs from the frontier of governed security risk intelligence.
            </motion.p>
          </div>
        </section>

        {/* List Grid */}
        <section className="container mx-auto px-6 relative z-10 pb-32">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MULTIMEDIA.map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedId(item.id)}
                className="group bg-white border border-slate-200 rounded-[3rem] overflow-hidden hover:shadow-2xl hover:border-hayrok-orange/30 transition-all duration-500 flex flex-col h-full cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden">
                   <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/40 transition-colors" />
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-hayrok-orange rounded-full flex items-center justify-center text-white shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                         {item.type === 'Video' ? <Play size={24} fill="currentColor" /> : <Mic size={24} />}
                      </div>
                   </div>
                   <div className="absolute bottom-4 right-4">
                      <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg text-[9px] font-black text-white uppercase tracking-widest">
                         {item.duration}
                      </div>
                   </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                   <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-black text-hayrok-orange uppercase tracking-widest">{item.category}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">{item.date}</span>
                   </div>
                   <h4 className="text-xl font-black text-slate-900 mb-4 group-hover:text-hayrok-orange transition-colors uppercase tracking-tight leading-tight">
                      {item.title}
                   </h4>
                   <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-1 line-clamp-2">{item.description}</p>
                   <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.author}</span>
                      <ArrowRight size={16} className="text-hayrok-orange opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // --- Immersive Player View ---
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-24 overflow-x-hidden relative">
      <section className="relative pt-48 pb-12 overflow-hidden bg-slate-50 border-b border-slate-100">
        <IntelligenceFabric density={0.8} isDark={false} />
        <div className="container mx-auto px-6 relative z-10">
           <button 
             onClick={() => { setSelectedId(null); setIsPlaying(false); }}
             className="flex items-center gap-2 text-slate-400 hover:text-hayrok-orange transition-colors font-black text-[10px] uppercase tracking-widest mb-12 group"
           >
             <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Media Library
           </button>

           <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-4 mb-10">
                 <div className="px-5 py-2 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    {activeContent?.type}
                 </div>
                 <div className="px-5 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-black text-hayrok-orange uppercase tracking-widest shadow-sm">
                    {activeContent?.category}
                 </div>
                 <div className="flex-1" />
                 <span className="text-slate-400 font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                    <Calendar size={14} /> {activeContent?.date}
                 </span>
              </div>

              {/* High-Fidelity Player Simulated UI */}
              <div className="relative aspect-video bg-black rounded-[4rem] shadow-2xl overflow-hidden group mb-20 border-8 border-white">
                 <img 
                   src={activeContent?.image} 
                   alt={activeContent?.title} 
                   className={`w-full h-full object-cover transition-opacity duration-1000 ${isPlaying ? 'opacity-30' : 'opacity-100'}`}
                 />
                 
                 {/* Visualizer Effect for Podcasts */}
                 {isPlaying && activeContent?.type === 'Podcast' && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                       <div className="flex items-end gap-1 h-32">
                          {[...Array(16)].map((_, i) => (
                             <motion.div 
                                key={i}
                                animate={{ height: [40, 100, 60, 120, 80] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                                className="w-4 bg-hayrok-orange rounded-full opacity-60" 
                             />
                          ))}
                       </div>
                    </div>
                 )}

                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                 
                 {/* Center Play Button Overlay */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-32 h-32 bg-hayrok-orange text-white rounded-full flex items-center justify-center shadow-2xl transform hover:scale-105 active:scale-95 transition-all"
                    >
                       {isPlaying ? <Pause size={48} fill="currentColor" /> : <Play size={48} className="ml-2" fill="currentColor" />}
                       <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse-slow -z-10" />
                    </button>
                 </div>

                 {/* Player Controls Bar */}
                 <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mb-8 group/progress cursor-pointer">
                       <motion.div 
                         initial={{ width: 0 }}
                         animate={{ width: isPlaying ? '100%' : '15%' }}
                         transition={{ duration: isPlaying ? 100 : 0.5, ease: "linear" }}
                         className="h-full bg-hayrok-orange relative"
                       >
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-xl" />
                       </motion.div>
                    </div>

                    <div className="flex items-center justify-between text-white">
                       <div className="flex items-center gap-10">
                          <div className="flex items-center gap-6">
                             <SkipBack size={24} className="cursor-pointer hover:text-hayrok-orange transition-colors" />
                             <button onClick={() => setIsPlaying(!isPlaying)}>
                                {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                             </button>
                             <SkipForward size={24} className="cursor-pointer hover:text-hayrok-orange transition-colors" />
                          </div>
                          <div className="flex items-center gap-3">
                             <Volume2 size={20} />
                             <div className="w-24 h-1 bg-white/20 rounded-full overflow-hidden">
                                <div className="w-3/4 h-full bg-white" />
                             </div>
                          </div>
                          <span className="text-xs font-black uppercase tracking-widest tabular-nums">04:22 / {activeContent?.duration}</span>
                       </div>
                       
                       <div className="flex items-center gap-8">
                          <button className="p-2 hover:bg-white/10 rounded-xl transition-all">
                             <MessageSquare size={20} />
                          </button>
                          <button className="p-2 hover:bg-white/10 rounded-xl transition-all">
                             <Settings size={20} />
                          </button>
                          <button className="p-2 hover:bg-white/10 rounded-xl transition-all">
                             <Maximize2 size={20} />
                          </button>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-20">
                 <div className="lg:col-span-8">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase leading-tight tracking-tight">
                       {activeContent?.title}
                    </h2>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                       {activeContent?.description}
                    </p>

                    <div className="space-y-12">
                       <div>
                          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-8">Segment Breakdown</h4>
                          <div className="space-y-4">
                             {[
                               { t: "00:00 — Strategic Introduction", d: "Understanding the context of the technical challenge." },
                               { t: "04:15 — Implementation Blueprint", d: "How the multi-domain system handles signal drift." },
                               { t: "12:30 — Live Validation Flow", d: "Proof-first logic applied to production environments." },
                               { t: "16:45 — Outcome Capture", d: "Audit-ready reporting and executive decisions." }
                             ].map((seg, i) => (
                                <div key={i} className="flex gap-6 p-6 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:shadow-xl hover:border-hayrok-orange/20 transition-all group cursor-pointer">
                                   <span className="text-xs font-black text-hayrok-orange shrink-0 pt-1 tracking-widest">{seg.t}</span>
                                   <p className="text-sm font-bold text-slate-600 uppercase">{seg.d}</p>
                                </div>
                             ))}
                          </div>
                       </div>
                    </div>
                 </div>

                 <aside className="lg:col-span-4 sticky top-32 space-y-12 h-fit">
                    <div className="p-10 bg-slate-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-10 opacity-5">
                          <Sparkles size={120} className="text-hayrok-orange" />
                       </div>
                       <div className="relative z-10">
                          <h4 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-10">Content Specs</h4>
                          <div className="space-y-6 mb-12">
                             <div>
                                <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Speaker</p>
                                <p className="text-sm font-black text-white">{activeContent?.author}</p>
                             </div>
                             <div>
                                <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Fidelity</p>
                                <p className="text-sm font-black text-white uppercase">Technical Strategy High</p>
                             </div>
                          </div>
                          <div className="flex flex-col gap-4">
                             <button className="w-full flex items-center justify-center gap-3 py-5 bg-hayrok-orange text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-orange-500/20 hover:bg-orange-600 transition-all">
                                <Download size={16} /> Download Transcript
                             </button>
                             <button className="w-full flex items-center justify-center gap-3 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                                <Share2 size={16} /> Share Episode
                             </button>
                          </div>
                       </div>
                    </div>

                    <div className="p-10 bg-slate-50 border border-slate-200 rounded-[3rem]">
                       <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-8">Up Next</h4>
                       <div className="space-y-8">
                          {MULTIMEDIA.filter(m => m.id !== selectedId).slice(0, 2).map((next, i) => (
                             <div key={i} onClick={() => { setSelectedId(next.id); setIsPlaying(false); }} className="group cursor-pointer">
                                <p className="text-[9px] font-black text-hayrok-orange uppercase tracking-[0.3em] mb-2">{next.category}</p>
                                <h5 className="text-lg font-black text-slate-900 group-hover:text-hayrok-orange transition-colors leading-tight uppercase">{next.title}</h5>
                             </div>
                          ))}
                       </div>
                    </div>
                 </aside>
              </div>
           </div>
        </div>
      </section>

      <div className="h-32 flex items-center justify-center border-t border-slate-100 bg-[#FCFCFA] mt-24">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            Hayrok Media Hub. Produced by Strategy & Research Teams. Decisions powered by trust.
         </p>
      </div>
    </div>
  );
};
