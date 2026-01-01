
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Users, Target, Lock, 
  Gavel, UserCheck, Eye, Sparkles, 
  Award, ArrowRight, Briefcase, Heart,
  Terminal, Globe, Cpu, CheckCircle2,
  Scale, FileText, History, Zap, Lightbulb, 
  Quote, TrendingUp, Landmark
} from 'lucide-react';

// Cast motion elements to any to bypass type sync issues in this environment
const MotionDiv = motion.div as any;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const ProfileCard = ({ name, role, bio, image, initials, fileName }: { name: string, role: string, bio: string, image: string, initials: string, fileName: string }) => {
  const [imageError, setImageError] = useState(false);
  const [imgSrc, setImgSrc] = useState(image);

  const handleImageError = () => {
    // If the first attempt fails (e.g. /image.png), try checking if the server needs it without the slash or vice versa, 
    // but ultimately fail gracefully to the fallback.
    // For now, we just show the fallback to keep it clean.
    setImageError(true);
  };

  return (
    /* Use MotionDiv cast to any to fix type error on variants prop */
    <MotionDiv 
      variants={fadeInUp as any}
      className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-12 hover:border-hayrok-orange/30 transition-all duration-500 hover:shadow-2xl group"
    >
      <div className="flex flex-col md:flex-row gap-10 items-start md:items-center mb-10">
        <div className="w-32 h-32 rounded-[2.2rem] overflow-hidden bg-slate-100 shrink-0 border-4 border-slate-50 shadow-xl group-hover:shadow-hayrok-orange/10 transition-all duration-500 flex items-center justify-center relative">
          {!imageError ? (
            <img 
              src={imgSrc} 
              alt={name} 
              onError={handleImageError}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
            />
          ) : (
            <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center text-white p-2 text-center">
              <span className="text-2xl font-black tracking-widest mb-1">{initials}</span>
              <span className="text-[7px] text-slate-400 font-mono leading-tight uppercase tracking-wide">Check<br/>{fileName}</span>
            </div>
          )}
        </div>
        <div>
          <h3 className="text-3xl font-black text-slate-900 leading-tight mb-2">{name}</h3>
          <p className="text-sm font-black text-hayrok-orange uppercase tracking-[0.2em]">{role}</p>
        </div>
      </div>
      <p className="text-slate-600 font-medium leading-relaxed text-lg">
        {bio}
      </p>
    </MotionDiv>
  );
};

interface LeadershipPageProps {
  onNavigate?: (page: string) => void;
}

export const LeadershipPage: React.FC<LeadershipPageProps> = ({ onNavigate }) => {
  // We use a timestamp to bust the browser cache in case the user previously got a 404.
  // This ensures that as soon as they upload the file, the browser tries to fetch it again.
  const cacheBuster = useMemo(() => new Date().getTime(), []);
  
  const herberthPhoto = `/herberth.png?t=${cacheBuster}`; 
  const ebukaPhoto = `/ebuka.png?t=${cacheBuster}`;

  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-hayrok-orange/10 selection:text-hayrok-orange overflow-hidden font-sans relative">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(255,95,0,0.03)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />
      </div>

      <div className="h-32 md:h-40"></div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Use MotionDiv cast to any to fix type error on spread fadeInUp */}
          <MotionDiv {...fadeInUp} className="flex items-center gap-3 mb-10">
            <div className="h-[2px] w-12 bg-hayrok-orange"></div>
            <span className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em]">Practitioner-Led Stewardship</span>
          </MotionDiv>
          
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Use MotionDiv cast to any to fix type error on initial/whileInView props */}
            <MotionDiv 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-12"
            >
              {/* SCALED DOWN HEADER - Better visual balance */}
              <h1 className="text-5xl md:text-7xl font-black mb-12 leading-[0.9] tracking-tight text-slate-900 flex flex-col uppercase">
                <span className="block">Leadership Focused</span>
                <span className="block lowercase italic">on</span>
                <span className="bg-gradient-to-r from-[#FF5F00] via-[#D946EF] to-[#8B5CF6] bg-clip-text text-transparent italic block py-2">Accountability and</span>
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#4F46E5] bg-clip-text text-transparent italic block">Execution.</span>
              </h1>
              
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-semibold max-w-2xl">
                  Hayrok is led by founders and operators with deep experience across cybersecurity, AI, and enterprise product development.
                </p>
                <div className="space-y-6">
                  <p className="text-lg text-slate-500 font-medium">
                    The leadership team brings a practical perspective shaped by operating in environments where security decisions, audits, and risk management have real consequences.
                  </p>
                  <p className="text-lg text-slate-500 font-medium">
                    Our approach reflects the same principles embedded in our platform: governance, accountability, transparency, and measurable outcomes.
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="bg-slate-50 border border-slate-200 rounded-[4rem] p-10 md:p-24 overflow-hidden relative shadow-sm group">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Use MotionDiv cast to any to fix type error on spread fadeInUp */}
            <MotionDiv {...fadeInUp} className="lg:col-span-5">
              <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-8">Leadership Philosophy</h3>
              <h4 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 tracking-tight leading-tight">
                Grounded in <br/> <span className="text-slate-400 italic">Core Controls.</span>
              </h4>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-12">
                These principles guide how the company is built, how products are designed, and how customer relationships are managed.
              </p>
              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm italic text-slate-500 font-medium">
                "Long-term trust matters more than short-term speed."
              </div>
            </MotionDiv>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {[
                { title: "Defined Controls", desc: "Automation must operate within defined controls.", icon: Gavel },
                { title: "Human Support", desc: "AI systems should support human decision-making, not replace it.", icon: UserCheck },
                { title: "Scrutiny Readiness", desc: "Platforms must withstand executive, regulatory, and audit scrutiny.", icon: ShieldCheck },
                { title: "Trust Primacy", desc: "Prioritizing long-term trust over short-term expansion speed.", icon: Heart }
              ].map((p, i) => (
                <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group/item">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-hayrok-orange mb-6 group-hover/item:bg-hayrok-orange group-hover/item:text-white transition-all">
                    <p.icon size={22} />
                  </div>
                  <h5 className="text-xl font-black text-slate-900 mb-3">{p.title}</h5>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profiles */}
      <section className="container mx-auto px-6 mb-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
           <h2 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-6">Executive Founders</h2>
           <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Practitioners at the Helm.</h3>
           <p className="text-lg text-slate-500 font-medium">Factual positioning for analyst and procurement reviews.</p>
        </div>

        {/* Use MotionDiv cast to any to fix type error on variants/initial/whileInView props */}
        <MotionDiv 
          variants={staggerContainer as any}
          initial="initial"
          whileInView="whileInView"
          className="grid lg:grid-cols-2 gap-8"
        >
          <ProfileCard 
            name="Herberth Oshiemele"
            role="Founder & Chief Executive Officer"
            image={herberthPhoto}
            initials="HO"
            fileName="herberth.png"
            bio="Herberth Oshiemele is a cybersecurity professional with extensive experience in application security, enterprise security operations, and risk management. As Founder and CEO, he is responsible for Hayrok’s overall strategy, execution, and alignment with enterprise security and governance requirements."
          />
          <ProfileCard 
            name="Ebuka Igwegbe"
            role="Co‑Founder & Chief Product Officer"
            image={ebukaPhoto}
            initials="EI"
            fileName="ebuka.png"
            bio="Ebuka Igwegbe is an AI and product leader with experience in applied AI, machine learning, and enterprise software development. As Co‑Founder and CPO, he leads Hayrok’s product strategy and roadmap, with a focus on delivering AI‑driven capabilities that support transparency, control, and enterprise usability."
          />
        </MotionDiv>
      </section>

      {/* EXECUTIVE SPOTLIGHT */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        {/* Use MotionDiv cast to any to fix type error on spread fadeInUp */}
        <MotionDiv 
          {...fadeInUp}
          className="bg-slate-900 rounded-[4rem] overflow-hidden relative shadow-2xl group border border-white/5"
        >
          <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />
          <div className="absolute top-0 right-0 w-[50%] h-full bg-hayrok-orange/10 blur-[120px] rounded-full" />
          
          <div className="grid lg:grid-cols-12 items-stretch">
            {/* Image Container */}
            <div className="lg:col-span-5 relative overflow-hidden min-h-[400px] lg:min-h-[550px] bg-slate-800">
               <img 
                 src={herberthPhoto} 
                 onError={(e) => { e.currentTarget.style.display = 'none'; }}
                 alt="Herberth Oshiemele" 
                 className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
               />
               {/* Fallback for spotlight if image fails */}
               <div className="absolute inset-0 flex flex-col items-center justify-center text-white/10 select-none">
                  <span className="font-black text-9xl">HO</span>
               </div>
               
               <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-transparent lg:hidden" />
               <div className="absolute bottom-10 left-10 p-6 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl">
                 <div className="flex items-center gap-4 text-white">
                   <div className="w-2.5 h-2.5 rounded-full bg-hayrok-orange animate-pulse" />
                   <span className="font-black uppercase tracking-[0.3em] text-[10px]">Strategic Visionary</span>
                 </div>
               </div>
            </div>

            {/* Content Container */}
            <div className="lg:col-span-7 p-10 md:p-20 text-white flex flex-col justify-center">
              <h3 className="text-hayrok-orange font-black text-[10px] uppercase tracking-[0.5em] mb-6">Executive Highlight</h3>
              <h4 className="text-3xl md:text-6xl font-black mb-8 leading-[0.95] tracking-tight">
                Architecting the Next <br/>
                <span className="italic text-slate-400">Evolution of Trust.</span>
              </h4>
              
              <div className="relative mb-10">
                <Quote size={32} className="absolute -top-4 -left-4 text-hayrok-orange opacity-20" />
                <p className="text-lg md:text-xl text-slate-200 font-medium leading-relaxed relative z-10 italic">
                  "We aren't just building faster tools; we are building systems that inherit the accountability required by the modern enterprise. Security is a governance problem, solved with intelligence."
                </p>
              </div>
              
              <div className="space-y-4 border-t border-white/10 pt-10">
                {[
                  "Expertise in global Enterprise SecOps",
                  "Alignment with critical regulatory frameworks",
                  "Driving the strategy for Auditable Agentic AI"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-4 text-sm font-bold text-slate-400">
                    <div className="p-1 rounded-full bg-hayrok-orange/20 text-hayrok-orange">
                      <CheckCircle2 size={14} strokeWidth={3} />
                    </div>
                    {point}
                  </div>
                ))}
              </div>

              <div className="mt-12 flex items-center gap-6">
                 <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Herberth Oshiemele - CEO</span>
                 <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </section>

      {/* Leadership Standards */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.5em] shrink-0">Leadership Standards</span>
            <div className="h-px w-full bg-slate-100" />
          </div>

          {/* Use MotionDiv cast to any to fix type error on variants/initial/whileInView props */}
          <MotionDiv 
            variants={staggerContainer as any}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: "Decision Ownership", desc: "Clear ownership of decisions and outcomes across the org.", icon: Target },
              { title: "Transparency", desc: "Explicit transparency in company strategy and execution.", icon: Eye },
              { title: "Governance Alignment", desc: "Alignment with governance and compliance expectations.", icon: Scale },
              { title: "Customer-Driven", desc: "Prioritization driven strictly by customer security needs.", icon: Users },
              { title: "Measured Innovation", desc: "Innovation that is responsible, auditable, and safe.", icon: Zap },
              { title: "Operating Integrity", desc: "Applying these standards to product, ops, and partnerships.", icon: Briefcase }
            ].map((std, i) => (
              /* Use MotionDiv cast to any to fix type error on variants prop */
              <MotionDiv key={i} variants={fadeInUp as any} className="p-10 bg-slate-50 border border-slate-200 rounded-[2.5rem] hover:bg-white hover:shadow-xl transition-all duration-500">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-hayrok-orange mb-8 shadow-sm">
                  <std.icon size={20} />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{std.title}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{std.desc}</p>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* Advisors & Ecosystem */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="bg-slate-900 rounded-[4rem] p-10 md:p-24 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />
          <div className="absolute top-0 right-0 w-[50%] h-full bg-hayrok-orange/10 blur-[120px] rounded-full" />
          
          <div className="relative z-10">
            <div className="max-w-3xl mb-16">
              <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-8">Advisors & Ecosystem</h3>
              <h4 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">Ensuring External <br/> <span className="text-hayrok-orange italic">Alignment.</span></h4>
              <p className="text-xl text-slate-400 font-medium leading-relaxed">
                Hayrok works with advisors and partners who bring experience across high-stakes sectors to ensure we remain aligned with evolving market and regulatory requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Enterprise Security", desc: "Practitioner-led insight for CISOs.", icon: ShieldCheck },
                { label: "Risk & Compliance", desc: "Deep audit and GRC expertise.", icon: FileText },
                { label: "Cloud Platforms", desc: "Infrastructure and SaaS scaling.", icon: Globe },
                { label: "Regulated Industries", icon: Landmark, desc: "Alignment with high-stakes sectors." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
                   <item.icon size={24} className="text-hayrok-orange mb-6" />
                   <h5 className="text-lg font-bold text-white mb-2 leading-tight">{item.label}</h5>
                   <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Building the Organization */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Use MotionDiv cast to any to fix type error on spread fadeInUp */}
          <MotionDiv {...fadeInUp}>
            <h3 className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em] mb-8">Intentional Growth</h3>
            <h4 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Building the <br/> <span className="text-hayrok-orange italic text-3xl md:text-5xl">Outcome-Owned Culture.</span></h4>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
              Hayrok is intentionally building its leadership and management team with individuals who have experience operating in environments where security, reliability, and accountability are critical.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Thoughtful execution over speed",
                "Long-term customer trust",
                "Clear communication with stakeholders",
                "Enterprise & Regulated alignment"
              ].map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-black text-slate-900 uppercase tracking-tighter">
                  <CheckCircle2 size={18} className="text-hayrok-orange" />
                  {p}
                </div>
              ))}
            </div>
          </MotionDiv>
          
          <div className="relative">
             <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative group">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070" alt="Team Session" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                   <div className="p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white">
                      <p className="text-xs font-black uppercase tracking-widest mb-2">Focus & Fidelity</p>
                      <p className="text-sm font-bold opacity-80">Building a foundation of accountable security intelligence.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Learn More Final Block */}
      <section className="container mx-auto px-6 mb-48 relative z-10 text-center">
        {/* Use MotionDiv cast to any to fix type error on spread fadeInUp */}
        <MotionDiv 
          {...fadeInUp}
          className="max-w-6xl mx-auto p-12 md:p-32 bg-slate-50 border border-slate-200 rounded-[4rem] relative overflow-hidden"
        >
          <div className="relative z-10">
             <h3 className="text-4xl md:text-7xl font-black mb-12 tracking-tight leading-tight">Learn More.</h3>
             <p className="text-xl text-slate-500 font-medium mb-16 max-w-2xl mx-auto">
               To learn more about Hayrok’s leadership and approach:
             </p>
             
             <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <button 
                  onClick={() => onNavigate && onNavigate('platform')}
                  className="w-full md:w-auto bg-hayrok-orange text-white px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20"
                >
                   Explore the Platform
                </button>
                <button 
                  onClick={() => onNavigate && onNavigate('values')}
                  className="w-full md:w-auto bg-white text-slate-900 border border-slate-200 px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all"
                >
                   Our Values & Principles
                </button>
                <button 
                  onClick={() => onNavigate && onNavigate('contact')}
                  className="w-full md:w-auto bg-hayrok-dark text-white px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl shadow-black/20"
                >
                   Contact Us
                </button>
             </div>
          </div>
        </MotionDiv>
        <p className="mt-12 text-slate-400 font-black text-[10px] uppercase tracking-[0.8em]">Accountability in Every Decision.</p>
      </section>

      <div className="h-32"></div>
    </div>
  );
};
