import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rss, Clock, User, Share2, ArrowLeft, ArrowRight, 
  CheckCircle2, Sparkles, ShieldAlert, BarChart3, 
  Brain, Gavel, Target, Zap, ChevronRight, 
  BookOpen, MessageSquare, Quote, Globe, Mail,
  TrendingUp, Layers, Lock, Cpu, Eye, XCircle,
  Calendar, ListChecks, Landmark, ShieldCheck,
  ClipboardCheck, History, UserCheck, Scale, AlertCircle,
  Network, Activity, Shield, UserPlus, Info, Package,
  ShieldX, FileSearch, TrendingDown, RefreshCw, Search,
  FileCode, Workflow
} from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

export const BLOG_POSTS = [
  {
    id: 'death-of-point-in-time',
    title: "The Death of Point-in-Time Security Assessments",
    category: "Validation",
    author: "Herberth Oshiemele, CEO",
    date: "Apr 12, 2025",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=2070",
    snippet: "Annual penetration tests and quarterly scans were built for a slower world. In a cloud-native reality, they create a dangerous illusion of safety.",
    content: [
      { type: 'paragraph', text: "For decades, the standard for security assurance has been the 'Snapshot.' A consultant arrives once a year, spends two weeks inside your network, and leaves you with a PDF that is obsolete the moment it hits your inbox. In a world of static data centers and monolithic releases, this was acceptable. In the world of ephemeral cloud infrastructure and hourly CI/CD deploys, it is a liability." },
      { type: 'heading', text: "The Velocity Mismatch" },
      { type: 'paragraph', text: "The fundamental flaw of point-in-time assessments is that they measure posture, not risk. Posture is a description of how things look right now. Risk is a description of how things could fail tomorrow. When your environment changes 100 times a day, a penetration test conducted last month provides zero defensive value today." },
      { type: 'quote', text: "A snapshot is a memory. Real security requires a pulse." },
      { type: 'heading', text: "Enter Continuous Threat Exposure Management (CTEM)" },
      { type: 'paragraph', text: "The industry is shifting toward CTEM because it prioritizes the lifecycle over the event. By moving to a model of continuous discovery and automated validation, organizations can identify exploitable paths in real-time. Hayrok Hive and Genesis were designed specifically to provide this 'Pulse' - replacing the static audit with a governed, live intelligence stream." },
      { type: 'paragraph', text: "To win, security teams must stop managing lists of vulnerabilities and start managing the business's actual exposure to attack paths." }
    ]
  },
  {
    id: 'audit-ai-security-decisions',
    title: "Can You Audit Your AI Security Decisions?",
    category: "AI Governance",
    author: "Ebuka Igwegbe, CPO",
    date: "Apr 08, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070",
    snippet: "If you cannot audit your AI decisions, you do not control them. In cybersecurity, lack of control is risk. Here is why auditability is becoming non-negotiable.",
    content: [
      { type: 'paragraph', text: "AI is no longer a 'nice-to-have' in security; it's a necessity to handle the scale of modern telemetry. However, as we integrate LLMs and reasoning agents into our SOCs, we are inadvertently building 'Black Boxes.' When an AI system prioritizes one risk over another, or suggests a remediation path, can you explain why?" },
      { type: 'heading', text: "The Price of the Black Box" },
      { type: 'paragraph', text: "In regulated industries like finance and healthcare, 'The AI said so' is not a valid defense during an audit. Regulators demand a clear lineage of decision-making. They need to see what data was consumed, what policies were applied, and what human-in-the-loop triggers were satisfied." },
      { type: 'heading', text: "The Hayrok Approach: Governed Reasoning" },
      { type: 'paragraph', text: "At Hayrok, we believe AI should be an infrastructure layer, not a magic trick. This means every decision made by Hay-AI is bound by Open Policy Agent (OPA) constraints. We record every reasoning step - every node in the attack graph, every privilege evaluated - into an immutable audit log." },
      { type: 'quote', text: "If AI isn't auditable, it isn't enterprise-ready." },
      { type: 'paragraph', text: "Accountability is the core of our code. By providing transparent, reviewable reasoning, we enable teams to leverage the speed of AI without sacrificing the control required by the board." }
    ]
  },
  {
    id: 'cbs-vs-pen-testing',
    title: "Continuous Breach Simulation vs Traditional Penetration Testing",
    category: "Validation",
    author: "Ebuka Igwegbe, CPO",
    date: "Apr 05, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070",
    snippet: "Traditional penetration testing was built for a slower world. In today’s reality, change is constant. Here is why Continuous Breach Simulation is the necessary evolution.",
    content: [
      { type: 'paragraph', text: "The 'Red Team' is often viewed as the gold standard of security. But traditional Red Teaming is episodic, expensive, and often destructive if not managed carefully. More importantly, the lessons learned from a Red Team engagement are rarely fed back into the defensive system in a structured way." },
      { type: 'heading', text: "Scaling Adversarial Logic" },
      { type: 'paragraph', text: "Continuous Breach Simulation (CBS) takes the logic of a Red Team - the ability to think in graphs, find lateral movement paths, and pivot through identities - and automates it. But automation without governance is chaos." },
      { type: 'heading', text: "Genesis: The Proof Engine" },
      { type: 'paragraph', text: "Hayrok's Genesis engine doesn't just scan for open ports. it safely simulates real-world attack behaviors to prove exploitability. It provides the technical proof that turns a 'vulnerability finding' into a 'validated risk.' This is the bridge between offensive creativity and defensive operations." }
    ]
  },
  {
    id: 'vulnerability-counts-risk',
    title: "Why Vulnerability Counts Don’t Equal Software Risk",
    category: "Strategy",
    author: "Herberth Oshiemele, CEO",
    date: "Apr 02, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070",
    snippet: "Dashboards light up with counts of critical, high, and medium findings. But a lower count doesn't mean lower risk. It's time to move from counting to reasoning.",
    content: [
      { type: 'paragraph', text: "Every CISO has a dashboard showing counts: 500 criticals, 2,000 highs. We spend millions chasing these numbers. Yet, the majority of 'critical' vulnerabilities are never reachable by an attacker in production. They sit in unused libraries or are blocked by network policies that the scanner can't see." },
      { type: 'heading', text: "The Reachability Gap" },
      { type: 'paragraph', text: "Security risk is a function of Presence x Reachability x Impact. Scanners only measure Presence. Without understanding if a vulnerability is reachable through a valid attack path, 'counting' is just urgent theater." },
      { type: 'paragraph', text: "CodeFabrics enriches findings with actual reachability context. By mapping code to the cloud environment it runs in, we help teams focus on the 5% of vulnerabilities that represent 95% of the actual risk." }
    ]
  },
  {
    id: 'open-source-risk-governance',
    title: "Governing Open-Source Risk in Regulated Industries",
    category: "AppSec Governance",
    author: "Herberth Oshiemele, CEO",
    date: "Mar 28, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070",
    snippet: "Open source is essential for innovation - and a growing source of regulatory risk. Here is how organizations can move from inventory to controlled trust.",
    content: [
      { type: 'paragraph', text: "Modern applications are 80-90% open-source code. We are essentially building enterprise banking systems on top of software written by volunteers. In regulated industries, this creates a massive supply chain blind spot." },
      { type: 'heading', text: "From Inventory to Governance" },
      { type: 'paragraph', text: "Software Bill of Materials (SBOMs) are a start, but an inventory isn't governance. You need to know not just what you have, but who is accountable for it and what policies govern its use. CodeFabrics provides the policy gates to ensure that every dependency is vetted against your specific risk tolerance before it reaches a production environment." }
    ]
  },
  {
    id: 'responsible-ai-hype-reality',
    title: "Responsible AI in Cybersecurity: Hype vs Reality",
    category: "AI Governance",
    author: "Ebuka Igwegbe, CPO",
    date: "Mar 25, 2025",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070",
    snippet: "AI is everywhere. Every platform claims to be AI-powered. But beneath the hype, a harder question is emerging: Is this AI responsible - or just powerful?",
    content: [
      { type: 'paragraph', text: "The term 'AI-powered' has become noise. To differentiate between hype and reality, we must ask: Is the AI governed? Is it explainable? Is it safe? Most AI in security today is built on 'black box' models that prioritize impressive demos over operational trust." },
      { type: 'heading', text: "Responsible AI is a Choice" },
      { type: 'paragraph', text: "At Hayrok, we've made the deliberate choice to build AI TRiSM (Trust, Risk, and Security Management) into the foundation of Hay-AI. This means no unmanaged training, no autonomous exploitation without approval, and a focus on assisting human experts rather than trying to automate them out of the room." }
    ]
  }
];

export const BlogPage: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  if (!selectedPostId) {
    return (
      <div className="bg-[#FCFCFA] min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-24 overflow-x-hidden relative">
        <IntelligenceFabric density={1.2} isDark={false} />
        
        <section className="relative pt-48 pb-12 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-900 text-[10px] font-black shadow-sm mb-10 tracking-[0.4em] uppercase"
            >
              <Rss size={12} className="text-hayrok-orange" />
              Strategic Insights
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-[8rem] font-black tracking-tight leading-[0.9] text-slate-900 mb-10 uppercase"
            >
              The Hayrok <br/>
              <span className="text-hayrok-orange italic font-light tracking-tighter">Perspective.</span>
            </motion.h1>
            
            <motion.p 
              {...fadeInUp}
              className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-3xl mx-auto mb-20"
            >
              Thought leadership at the intersection of cybersecurity, agentic AI, and enterprise governance.
            </motion.p>
          </div>
        </section>

        <section className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2">
            {BLOG_POSTS.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedPostId(post.id)}
                className={`group bg-white border border-slate-200 rounded-[3rem] overflow-hidden transition-all duration-500 flex flex-col h-full hover:shadow-2xl hover:border-hayrok-orange/30 cursor-pointer`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-hayrok-dark text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{post.date}</span>
                    <div className="w-1 h-1 rounded-full bg-slate-200" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{post.readTime}</span>
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 mb-6 leading-tight group-hover:text-hayrok-orange transition-colors uppercase tracking-tight">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8 flex-1">
                    {post.snippet}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                        <User size={14} />
                      </div>
                      <span className="text-xs font-bold text-slate-900">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-hayrok-orange font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                      Read Story <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // --- Article View ---
  const activePost = BLOG_POSTS.find(p => p.id === selectedPostId);

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-hayrok-orange/20 selection:text-hayrok-orange pb-24 overflow-x-hidden relative">
      <section className="relative pt-48 pb-24 overflow-hidden border-b border-slate-50">
        <IntelligenceFabric density={1} isDark={false} />
        <div className="container mx-auto px-6 relative z-10">
          <button 
            onClick={() => setSelectedPostId(null)}
            className="flex items-center gap-2 text-slate-400 hover:text-hayrok-orange transition-colors font-black text-[10px] uppercase tracking-widest mb-12 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Insights
          </button>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="px-5 py-1.5 bg-orange-50 text-hayrok-orange text-[10px] font-black uppercase tracking-widest rounded-full border border-orange-100">
                {activePost?.category}
              </span>
              <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest flex items-center gap-2">
                <Clock size={12} /> {activePost?.readTime}
              </span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-[6.5rem] font-black tracking-tight leading-[0.9] text-slate-900 mb-12 uppercase"
            >
              {activePost?.title}
            </motion.h1>

            <div className="flex flex-wrap items-center gap-10 pt-8 border-t border-slate-100">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center border border-slate-200 shadow-sm">
                     <User size={20} className="text-slate-600" />
                  </div>
                  <div>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Authored by</p>
                     <p className="text-sm font-black text-slate-900">{activePost?.author}</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100">
                     <Calendar size={20} />
                  </div>
                  <div>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Published</p>
                     <p className="text-sm font-black text-slate-900">{activePost?.date}</p>
                  </div>
               </div>
               <div className="flex-1" />
               <div className="flex gap-3">
                  <button className="p-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl transition-all text-slate-400 hover:text-hayrok-orange">
                     <Share2 size={18} />
                  </button>
                  <button className="p-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl transition-all text-slate-400 hover:text-hayrok-orange">
                     <Mail size={18} />
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="container mx-auto px-6 pt-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          <main className="lg:col-span-8 max-w-3xl">
            <div className="prose prose-slate prose-lg max-w-none prose-p:text-xl prose-p:leading-relaxed prose-p:text-slate-600 prose-strong:text-slate-900 prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight">
              {activePost?.content?.map((block, i) => {
                if (block.type === 'paragraph') return <p key={i}>{block.text}</p>;
                if (block.type === 'heading') return <h2 key={i}>{block.text}</h2>;
                if (block.type === 'quote') return (
                  <div key={i} className="my-16 p-10 bg-slate-50 border-l-4 border-hayrok-orange rounded-r-[2.5rem] relative overflow-hidden">
                    <Quote className="absolute -top-4 -left-4 text-hayrok-orange opacity-10" size={100} />
                    <p className="text-3xl font-black text-slate-900 italic leading-tight mb-0 relative z-10">"{block.text}"</p>
                  </div>
                );
                return null;
              })}
            </div>

            <div className="mt-24 p-12 bg-slate-900 rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 p-12 opacity-5">
                  <ShieldCheck size={200} className="text-hayrok-orange" />
               </div>
               <div className="relative z-10">
                  <h4 className="text-2xl font-black mb-6 uppercase tracking-tight">Stay updated with <br/> the Hayrok Perspective.</h4>
                  <p className="text-slate-400 font-medium mb-8 leading-relaxed">Get the latest strategic insights and technical research delivered directly to your inbox.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                     <input type="email" placeholder="security@enterprise.com" className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-hayrok-orange transition-all font-bold text-white" />
                     <button className="px-8 py-4 bg-hayrok-orange text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all">Subscribe</button>
                  </div>
               </div>
            </div>
          </main>

          <aside className="lg:col-span-4 sticky top-32 space-y-12">
             <div className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem]">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">More in {activePost?.category}</h4>
                <div className="space-y-8">
                   {BLOG_POSTS.filter(p => p.category === activePost?.category && p.id !== activePost?.id).slice(0, 2).map((other, i) => (
                      <div key={i} onClick={() => { setSelectedPostId(other.id); window.scrollTo(0, 0); }} className="group cursor-pointer">
                         <h5 className="text-lg font-black text-slate-900 group-hover:text-hayrok-orange transition-colors leading-tight uppercase mb-2">{other.title}</h5>
                         <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{other.date}</p>
                      </div>
                   ))}
                </div>
             </div>

             <div className="p-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl">
                <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-6">Related Roadmap</h4>
                <div className="space-y-6">
                   <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-hayrok-orange">
                         <Zap size={20} />
                      </div>
                      <div>
                         <p className="text-sm font-black uppercase tracking-tight">Genesis Validation</p>
                         <p className="text-xs text-slate-400 font-medium">Coming Q3 2025</p>
                      </div>
                   </div>
                   <button onClick={() => onNavigate?.('roadmap')} className="w-full py-4 bg-hayrok-dark text-white rounded-xl font-black text-[9px] uppercase tracking-[0.2em] hover:bg-hayrok-orange transition-all">
                      View Platform Evolution
                   </button>
                </div>
             </div>
          </aside>
        </div>
      </section>
    </div>
  );
};