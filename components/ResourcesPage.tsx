import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Rss, FileText, FileCode, Video, 
  Users, Compass, GraduationCap, ArrowRight,
  Search, Filter, Play, Sparkles, Database,
  ShieldCheck, Zap, Bot, ChevronRight, Mail
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const ResourceCard = ({ title, category, type, date, icon: Icon, image, description }: any) => (
  <motion.div 
    variants={fadeInUp}
    className="group bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden hover:border-hayrok-orange transition-all duration-500 hover:shadow-2xl flex flex-col h-full"
  >
    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
      <img src={image} alt={title} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
      <div className="absolute top-6 right-6">
        <div className="p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl text-hayrok-orange">
          <Icon size={20} />
        </div>
      </div>
      <div className="absolute bottom-6 left-6">
        <div className="px-4 py-1.5 bg-hayrok-dark text-white text-[10px] font-black uppercase tracking-widest rounded-full">
          {type}
        </div>
      </div>
    </div>
    <div className="p-8 md:p-10 flex flex-col flex-1">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[10px] font-black text-hayrok-orange uppercase tracking-widest">{category}</span>
        <div className="w-1 h-1 rounded-full bg-slate-300" />
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{date}</span>
      </div>
      <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight group-hover:text-hayrok-orange transition-colors">
        {title}
      </h3>
      <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-1">
        {description}
      </p>
      <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
        <button className="text-[10px] font-black text-slate-900 uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
          Read More <ArrowRight size={14} className="text-hayrok-orange" />
        </button>
      </div>
    </div>
  </motion.div>
);

export const ResourcesPage: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FCFCFA] min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-12 overflow-x-hidden relative">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <IntelligenceFabric density={1.2} isDark={false} />
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-orange-50/50 blur-[120px] rounded-full"></div>
      </div>

      <div className="h-32 md:h-40"></div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-hayrok-orange text-[10px] font-black mb-10 tracking-[0.4em] uppercase shadow-sm"
          >
            <BookOpen size={12} className="animate-pulse" />
            The Intelligence Hub
          </motion.div>
          <h1 className="text-6xl md:text-[8rem] font-black mb-10 leading-[0.9] tracking-tight text-slate-900">
            Resources <br/>
            <span className="bg-gradient-to-r from-hayrok-orange to-indigo-600 bg-clip-text text-transparent italic tracking-tighter">& Insights.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-4xl">
            Deep dives into CTEM, security validation, and governed AI. Access the technical evidence and strategic perspectives shaping modern risk management.
          </p>
        </div>
      </section>

      {/* Featured Search & Filter */}
      <section className="container mx-auto px-6 mb-20 relative z-10">
        <div className="bg-white border border-slate-200 p-4 rounded-[2.5rem] shadow-xl flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 w-full relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search resources, topics, or technologies..." 
              className="w-full pl-16 pr-6 py-5 bg-slate-50 rounded-[1.8rem] focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20 transition-all font-bold text-slate-900"
            />
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-5 bg-white border border-slate-200 rounded-[1.8rem] font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all">
              <Filter size={16} /> Filters
            </button>
            <button className="flex-1 md:flex-none px-10 py-5 bg-hayrok-dark text-white rounded-[1.8rem] font-black text-[10px] uppercase tracking-widest hover:bg-hayrok-orange transition-all shadow-xl">
              Apply
            </button>
          </div>
        </div>
      </section>

      {/* Categories Horizontal Scroll */}
      <section className="container mx-auto px-6 mb-20 relative z-10">
        <div className="flex overflow-x-auto gap-4 pb-6 scrollbar-hide no-scrollbar">
          {[
            { label: 'All Content', icon: BookOpen, active: true },
            { label: 'Blog', icon: Rss },
            { label: 'Datasheets', icon: FileText },
            { label: 'White Papers', icon: FileCode },
            { label: 'Multimedia', icon: Video },
            { label: 'Customer Stories', icon: Users },
            { label: 'Walkthroughs', icon: Compass },
            { label: 'Learning', icon: GraduationCap }
          ].map((cat, i) => (
            <button 
              key={i} 
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest whitespace-nowrap transition-all border ${cat.active ? 'bg-hayrok-orange text-white border-hayrok-orange shadow-lg shadow-orange-500/20' : 'bg-white text-slate-500 border-slate-200 hover:border-hayrok-orange hover:text-hayrok-orange'}`}
            >
              <cat.icon size={16} />
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Main Grid */}
      <section className="container mx-auto px-6 mb-32 relative z-10">
        <motion.div 
          variants={{
            initial: {},
            whileInView: { transition: { staggerChildren: 0.1 } }
          }}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <ResourceCard 
            title="The 2024 Continuous Threat Exposure Management Report"
            category="Strategic"
            type="White Paper"
            date="October 12, 2024"
            icon={FileCode}
            image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070"
            description="An in-depth analysis of how enterprise organizations are shifting from episodic testing to continuous validation models."
          />
          <ResourceCard 
            title="Genesis Engine: Proving the Exploitability Gap"
            category="Technical"
            type="Datasheet"
            date="November 05, 2024"
            icon={FileText}
            image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070"
            description="Technical specifications of the Genesis validation engine and how it maps attack paths with hard evidence."
          />
          <ResourceCard 
            title="Governed AI vs. The Black Box Problem"
            category="AI Ethics"
            type="Blog Post"
            date="October 28, 2024"
            icon={Rss}
            image="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070"
            description="Why transparency and reviewable decision lineage are critical for AI adoption in high-stakes security environments."
          />
          <ResourceCard 
            title="Financial Services Case Study: Global Bank Alpha"
            category="Success Story"
            type="Case Study"
            date="September 15, 2024"
            icon={Users}
            image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
            description="How a top-tier financial institution reduced their mean-time-to-contain (MTTC) by 45% using Hayrok Hive."
          />
          <ResourceCard 
            title="Code-to-Cloud Governance Masterclass"
            category="Education"
            type="Video Course"
            date="August 22, 2024"
            icon={Video}
            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070"
            description="A four-part series on establishing security gates across the entire software development lifecycle using CodeFabrics."
          />
          <ResourceCard 
            title="Mapping Shadow IT at Scale"
            category="Operations"
            type="Solution Brief"
            date="August 01, 2024"
            icon={Compass}
            image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
            description="Strategies for identifying unknown cloud assets and integrating them into your governed risk lifecycle."
          />
        </motion.div>

        <div className="mt-20 text-center">
           <button className="px-12 py-6 bg-slate-50 border border-slate-200 rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-white hover:shadow-xl transition-all">
              Load More Resources
           </button>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="container mx-auto px-6 mb-48 relative z-10">
        <div className="bg-slate-900 rounded-[4rem] overflow-hidden relative shadow-2xl group">
           <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />
           <div className="grid lg:grid-cols-2">
              <div className="p-12 md:p-24 flex flex-col justify-center text-white">
                 <div className="flex items-center gap-3 text-hayrok-orange font-black text-[10px] uppercase tracking-[0.5em] mb-10">
                    <Zap size={16} className="animate-pulse" /> Trending Content
                 </div>
                 <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
                    The State of <br/> <span className="text-hayrok-orange italic">Agentic Security.</span>
                 </h2>
                 <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                    Watch our CEO discuss why traditional vulnerability management is failing and how agentic reasoning changes the game for SecOps.
                 </p>
                 <div className="flex items-center gap-6">
                    <button className="w-16 h-16 bg-hayrok-orange rounded-full flex items-center justify-center text-white shadow-2xl shadow-orange-500/40 hover:scale-110 transition-transform">
                       <Play size={24} fill="currentColor" />
                    </button>
                    <div>
                       <p className="text-sm font-bold">Watch Keynote</p>
                       <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Duration: 18:42</p>
                    </div>
                 </div>
              </div>
              <div className="relative aspect-video lg:aspect-auto min-h-[400px]">
                 <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070" alt="Video Placeholder" className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000" />
                 <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
              </div>
           </div>
        </div>
      </section>

      {/* Newsletter / Contact Band */}
      <section className="container mx-auto px-6 mb-48 relative z-10 text-center">
        <div className="max-w-4xl mx-auto p-12 md:p-24 bg-white border border-slate-200 rounded-[4rem] shadow-sm relative overflow-hidden">
           <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-50 blur-[100px] rounded-full" />
           <div className="relative z-10">
              <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.4em] mb-8">Stay Informed</h3>
              <h4 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 tracking-tight">Intelligence to your <span className="text-hayrok-orange italic">inbox.</span></h4>
              <p className="text-lg text-slate-500 font-medium mb-12 max-w-2xl mx-auto">
                 Subscribe to our periodic insights on CTEM, governed AI, and enterprise security strategy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                 <input 
                   type="email" 
                   placeholder="Enter work email" 
                   className="flex-1 px-8 py-5 bg-slate-50 border border-slate-200 rounded-[1.5rem] font-bold focus:outline-none focus:ring-2 focus:ring-hayrok-orange/20"
                 />
                 <button className="px-10 py-5 bg-hayrok-orange text-white rounded-[1.5rem] font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
                    Subscribe
                 </button>
              </div>
              <p className="mt-8 text-[10px] text-slate-400 font-bold uppercase tracking-widest">No spam. Only high-fidelity intelligence.</p>
           </div>
        </div>
      </section>

      {/* Footer Branding */}
      <div className="h-32 flex flex-col items-center justify-center border-t border-slate-100 bg-white">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            The Hayrok Intelligence Hub is curated by security practitioners and AI researchers to support accountable innovation.
         </p>
      </div>
    </div>
  );
};