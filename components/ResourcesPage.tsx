import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Search, Filter, ArrowRight, ArrowLeft, 
  ChevronDown, Clock, Calendar, User, Share2, 
  Download, Sparkles, FileText, Zap, BarChart3, 
  Globe, Code, Video, Mic, Compass, GraduationCap, 
  Users, Bot, Layout, List, SortAsc, Grid, X
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

// Pull data from other components
import { BLOG_POSTS } from './BlogPage';
import { DOCS } from './DatasheetsSolutionsPage';
import { MULTIMEDIA } from './VideoPodcastsPage';
import { WHITEPAPERS } from './WhitepapersPage';
import { STORIES } from './CustomerStoriesPage';
import { TOURS } from './ToursWalkthroughsPage';

// Standardized Interface
interface UnifiedResource {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: string;
  type: 'Blog' | 'Datasheet' | 'Video' | 'Podcast' | 'Whitepaper' | 'Customer Story' | 'Tour' | 'Course';
  date: string;
  author: string;
  effort: string; // readTime or duration
  image: string;
  tags: string[];
  icon: any;
}

export const ResourcesPage: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'latest' | 'effort'>('latest');
  const [selectedResourceId, setSelectedResourceId] = useState<string | null>(null);

  // Normalize all data sources into a single array
  const allResources: UnifiedResource[] = useMemo(() => {
    const items: UnifiedResource[] = [];

    BLOG_POSTS.forEach(p => items.push({
      id: p.id, title: p.title, description: p.snippet, category: p.category, type: 'Blog',
      date: p.date, author: p.author, effort: p.readTime, image: p.image, tags: [], icon: BookOpen
    }));

    DOCS.forEach(d => items.push({
      id: d.id, title: d.title, description: d.snippet, category: d.category, type: 'Datasheet',
      date: d.date, author: 'Hayrok Tech', effort: d.readTime, image: d.image, tags: [], icon: FileText
    }));

    MULTIMEDIA.forEach(m => items.push({
      id: m.id, title: m.title, description: m.description, category: m.category, 
      type: m.type as any, date: m.date, author: m.author, effort: m.duration, image: m.image, tags: [], icon: m.type === 'Video' ? Video : Mic
    }));

    WHITEPAPERS.forEach(w => items.push({
      id: w.id, title: w.title, description: w.snippet, category: 'Technical', type: 'Whitepaper',
      date: w.date, author: w.author, effort: w.readTime, image: "https://images.unsplash.com/photo-1586281380349-631531a3d245?q=80&w=2070", tags: w.tags, icon: Sparkles
    }));

    STORIES.forEach(s => items.push({
      id: s.id, title: s.title, description: s.description, category: s.industry, type: 'Customer Story',
      date: 'Success Record', author: s.author, effort: '5 min read', image: s.image, tags: s.tags, icon: Users
    }));

    TOURS.forEach(t => items.push({
      id: t.id, title: t.title, description: t.subtitle, category: t.category, type: 'Tour',
      date: 'Interactive', author: 'Hayrok Lab', effort: t.duration, image: t.image, tags: [], icon: Compass
    }));

    // Mock Learning Center Data
    items.push({
      id: 'ctem-101', title: 'CTEM Fundamentals', description: 'A structured curriculum on Continuous Threat Exposure Management.',
      category: 'Education', type: 'Course', date: 'Self-Paced', author: 'Hayrok Academy', effort: '2h course',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074', tags: ['Academy'], icon: GraduationCap
    });

    return items;
  }, []);

  const filteredResources = useMemo(() => {
    return allResources
      .filter(r => {
        const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             r.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = selectedType === 'All' || r.type === selectedType;
        return matchesSearch && matchesType;
      })
      .sort((a, b) => {
        if (sortBy === 'latest') return new Date(b.date).getTime() - new Date(a.date).getTime();
        return a.effort.localeCompare(b.effort);
      });
  }, [allResources, searchQuery, selectedType, sortBy]);

  const activeResource = allResources.find(r => r.id === selectedResourceId);

  // Map normalized type to application page slugs for navigation
  const typeToPage: Record<string, string> = {
    'Blog': 'blog',
    'Datasheet': 'datasheets',
    'Video': 'multimedia',
    'Podcast': 'multimedia',
    'Whitepaper': 'whitepapers',
    'Customer Story': 'customer-stories',
    'Tour': 'tours',
    'Course': 'learning-center'
  };

  if (selectedResourceId && activeResource) {
    return (
      <div className="bg-white min-h-screen text-slate-900 pb-24 relative overflow-x-hidden">
        <section className="relative pt-48 pb-24 overflow-hidden border-b border-slate-100">
          <IntelligenceFabric density={1} isDark={false} />
          <div className="container mx-auto px-6 relative z-10">
            <button 
              onClick={() => setSelectedResourceId(null)}
              className="flex items-center gap-2 text-slate-400 hover:text-hayrok-orange transition-colors font-black text-[10px] uppercase tracking-widest mb-12 group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Intelligence Hub
            </button>
            <div className="max-w-5xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="px-5 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                  {activeResource.type}
                </span>
                <span className="text-hayrok-orange font-black text-[10px] uppercase tracking-widest">
                  {activeResource.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-[0.95] text-slate-900 mb-12 uppercase">
                {activeResource.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium mb-12">
                {activeResource.description}
              </p>
              <div className="flex flex-wrap items-center gap-10 pt-10 border-t border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Authored by</p>
                    <p className="text-sm font-black text-slate-900">{activeResource.author}</p>
                  </div>
                </div>
                <div className="flex-1" />
                
                {/* Updated "OPEN FULL INSIGHT" button styling to match requested UI/UX image */}
                <button 
                  onClick={() => onNavigate?.(typeToPage[activeResource.type] || 'resources')}
                  className="flex items-center gap-4 px-12 py-6 bg-hayrok-orange text-white rounded-full font-black text-lg uppercase tracking-[0.1em] hover:bg-orange-600 transition-all shadow-[0_20px_40px_-10px_rgba(255,95,0,0.3)] hover:scale-[1.02] active:scale-[0.98] group/btn"
                >
                   OPEN FULL INSIGHT 
                   <ArrowRight size={22} className="group-hover/btn:translate-x-2 transition-transform duration-300" strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-[#FCFCFA] min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-24 overflow-x-hidden relative">
      <IntelligenceFabric density={1.2} isDark={false} />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-12 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-900 text-[10px] font-black shadow-sm mb-10 tracking-[0.4em] uppercase"
          >
            <BookOpen size={12} className="text-hayrok-orange" />
            The Intelligence Hub
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[8rem] font-black tracking-tight leading-[0.9] text-slate-900 mb-10 uppercase"
          >
            Research & <br/>
            <span className="text-hayrok-orange italic font-light tracking-tighter">Strategic Intelligence.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-3xl mx-auto font-medium mb-12"
          >
            A unified library of technical specifications, strategic frameworks, and adversarial research for governed security environments.
          </motion.p>
        </div>
      </section>

      {/* Control Bar: Search, Filter, Sort */}
      <section className="container mx-auto px-6 mb-16 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel p-4 md:p-6 rounded-[3rem] shadow-2xl border border-white/50 backdrop-blur-2xl flex flex-col md:flex-row gap-6 items-center">
            
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search technical library..."
                className="w-full pl-16 pr-8 py-5 bg-white rounded-full border border-slate-200 focus:outline-none focus:ring-4 focus:ring-hayrok-orange/10 focus:border-hayrok-orange transition-all font-bold text-slate-900"
              />
            </div>

            {/* Type Filter Dropdown */}
            <div className="flex items-center gap-3 shrink-0">
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest hidden lg:block">Type:</span>
               <div className="relative group/select">
                 <select 
                   value={selectedType}
                   onChange={(e) => setSelectedType(e.target.value)}
                   className="appearance-none pl-6 pr-12 py-5 bg-white border border-slate-200 rounded-full font-black text-[10px] uppercase tracking-widest text-slate-900 focus:outline-none focus:border-hayrok-orange cursor-pointer shadow-sm"
                 >
                   <option value="All">All Intelligence</option>
                   <option value="Blog">Strategic Blogs</option>
                   <option value="Whitepaper">White Papers</option>
                   <option value="Datasheet">Technical Specs</option>
                   <option value="Video">Video Briefings</option>
                   <option value="Podcast">Podcast Episodes</option>
                   <option value="Customer Story">Success Records</option>
                   <option value="Tour">Guided Tours</option>
                   <option value="Course">Academy courses</option>
                 </select>
                 <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover/select:text-hayrok-orange transition-colors" size={14} />
               </div>
            </div>

            {/* Sort Toggle */}
            <div className="flex bg-slate-100 p-1.5 rounded-full border border-slate-200 shrink-0">
               <button 
                 onClick={() => setSortBy('latest')}
                 className={`px-6 py-3.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${sortBy === 'latest' ? 'bg-white text-slate-900 shadow-xl' : 'text-slate-400 hover:text-slate-600'}`}
               >
                 Latest
               </button>
               <button 
                 onClick={() => setSortBy('effort')}
                 className={`px-6 py-3.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${sortBy === 'effort' ? 'bg-white text-slate-900 shadow-xl' : 'text-slate-400 hover:text-slate-600'}`}
               >
                 Effort
               </button>
            </div>
          </div>
          
          {/* Active Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {selectedType !== 'All' && (
              <button 
                onClick={() => setSelectedType('All')}
                className="flex items-center gap-2 px-5 py-2 bg-hayrok-orange/10 border border-hayrok-orange/20 text-hayrok-orange rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-hayrok-orange hover:text-white transition-all group"
              >
                {selectedType} <X size={12} className="group-hover:rotate-90 transition-transform" />
              </button>
            )}
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="flex items-center gap-2 px-5 py-2 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-hayrok-orange transition-all group"
              >
                "{searchQuery}" <X size={12} className="group-hover:rotate-90 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Grid of Resources */}
      <section className="container mx-auto px-6 relative z-10 min-h-[400px]">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredResources.length > 0 ? (
              <motion.div 
                layout
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredResources.map((item, i) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setSelectedResourceId(item.id)}
                    className="group bg-white border border-slate-200 rounded-[3rem] overflow-hidden hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:border-hayrok-orange/30 transition-all duration-500 flex flex-col h-full cursor-pointer relative"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute top-6 left-6">
                        <div className="px-4 py-1.5 bg-hayrok-dark text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg group-hover:bg-hayrok-orange transition-colors">
                          {item.type}
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                         <div className="flex gap-2">
                           {item.tags.slice(0, 2).map(t => (
                             <span key={t} className="px-2 py-1 bg-white/20 backdrop-blur-md rounded-md text-[8px] font-black text-white uppercase">{t}</span>
                           ))}
                         </div>
                         <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-hayrok-orange shadow-2xl">
                            <item.icon size={20} />
                         </div>
                      </div>
                    </div>
                    
                    <div className="p-10 flex flex-col flex-1">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-[10px] font-black text-hayrok-orange uppercase tracking-widest">{item.category}</span>
                        <div className="w-1 h-1 rounded-full bg-slate-200" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.effort}</span>
                      </div>
                      
                      <h3 className="text-2xl font-black text-slate-900 mb-6 leading-tight group-hover:text-hayrok-orange transition-colors uppercase tracking-tight">
                        {item.title}
                      </h3>
                      
                      <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-1 line-clamp-3">
                        {item.description}
                      </p>

                      <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300">
                             <User size={14} />
                          </div>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.author}</span>
                        </div>
                        <div className="text-hayrok-orange opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                           <ArrowRight size={20} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-32 text-center"
              >
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-8 text-slate-300">
                   <Search size={40} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase">No Intelligence Matches</h3>
                <p className="text-xl text-slate-400 font-medium mb-10">Refine your search or clear filters to view the full technical library.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedType('All'); }}
                  className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-hayrok-orange transition-all shadow-xl"
                >
                  Reset Library View
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Subscription Footer */}
      <section className="container mx-auto px-6 pt-32 pb-12 relative z-10">
         <div className="max-w-4xl mx-auto p-12 md:p-24 bg-slate-900 rounded-[4rem] text-white text-center relative overflow-hidden shadow-2xl border border-white/5 group">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-hayrok-orange/10 blur-[120px] rounded-full group-hover:bg-hayrok-orange/20 transition-all duration-700" />
            <div className="relative z-10">
               <h4 className="text-4xl md:text-6xl font-black mb-8 tracking-tight uppercase leading-none">Intelligence <br/> <span className="text-hayrok-orange italic">In Your Inbox.</span></h4>
               <p className="text-xl text-slate-400 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                 Get the latest strategic research, adversarial analysis, and platform technical updates delivered directly to your team.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
                 <input 
                   type="email" 
                   placeholder="security@enterprise.com" 
                   className="flex-1 px-8 py-5 bg-white/5 border border-white/10 rounded-2xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-hayrok-orange/50 transition-all"
                 />
                 <button className="px-10 py-5 bg-hayrok-orange text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/30">
                    Subscribe
                 </button>
               </div>
            </div>
         </div>
      </section>

      {/* Signature Footer */}
      <div className="h-32 flex items-center justify-center border-t border-slate-100 bg-[#FCFCFA] mt-24">
         <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em] text-center px-6 leading-relaxed max-w-5xl">
            Strategic Resource Hub. Published by Hayrok Research & Strategy. All rights reserved. Decisions powered by proof.
         </p>
      </div>
    </div>
  );
};