
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Users, Eye, Lock, 
  Zap, Cpu, Target, 
  Fingerprint, Sparkles, ShieldAlert, Heart,
  Briefcase, Gavel, FileSearch,
  ArrowRight, Globe, Terminal,
  Search, BarChart3, Code, UserCheck, MousePointer2, History,
  Activity, CheckCircle2, Rocket, Scale, Quote, Lightbulb, User, Award
} from 'lucide-react';

// Cast motion elements to any to bypass type sync issues in this environment
const MotionH1 = motion.h1 as any;
const MotionP = motion.p as any;
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

export const AboutUs: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-hayrok-orange selection:text-white overflow-hidden">
      
      {/* Luminous Hero Section */}
      <section className="relative pt-40 pb-32 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-orange-100/50 blur-[120px] rounded-full animate-smoke"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-100/50 blur-[120px] rounded-full animate-smoke-reverse"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          {/* Use MotionDiv cast to any to fix type error on spread fadeInUp */}
          <MotionDiv 
            {...fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-800 text-[10px] font-black backdrop-blur-md mb-8 tracking-[0.3em] uppercase"
          >
            <Sparkles size={14} className="text-hayrok-orange" />
            <span>Defensible Autonomy</span>
          </MotionDiv>
          
          {/* Use MotionH1 cast to any to fix type error on initial/whileInView props */}
          <MotionH1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black mb-10 tracking-tight leading-[0.85]"
          >
            Building the <br/>
            <span className="text-hayrok-orange">Reasoning Engine</span> <br/>
            for Security.
          </MotionH1>

          {/* Use MotionP cast to any to fix type error on initial/whileInView props */}
          <MotionP 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl md:text-3xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium"
          >
            In a world where threats adapt in milliseconds, security must be as dynamic as the attacks. We bridge the gap between detection and proof.
          </MotionP>
        </div>
      </section>

      {/* Luminous Mission Grid */}
      <section className="container mx-auto px-6 py-24">
        {/* Use MotionDiv cast to any to fix type error on variants/initial/whileInView props */}
        <MotionDiv 
          variants={staggerContainer as any}
          initial="initial"
          whileInView="whileInView"
          className="grid grid-cols-1 md:grid-cols-12 gap-10"
        >
          {/* Use MotionDiv cast to any to fix type error on variants prop */}
          <MotionDiv 
            variants={fadeInUp as any}
            className="md:col-span-7 bg-slate-50 border border-slate-200 p-16 rounded-[4rem] relative overflow-hidden group hover:shadow-2xl transition-all duration-700"
          >
            <h2 className="text-4xl font-black mb-8 text-slate-900 tracking-tight">
              Why We Exist.
            </h2>
            <div className="space-y-8 text-slate-600 text-xl font-medium leading-relaxed">
              <p>
                Cybersecurity has reached a tipping point. Attackers no longer think in linear steps; they think in <span className="text-slate-900 font-black underline decoration-hayrok-orange decoration-4">Attack Graphs</span>.
              </p>
              <p>
                Human teams are fighting a machine-scale war with manual-scale tools. Hayrok provides the intelligence to automate the offensive lifecycle, safely.
              </p>
            </div>
          </MotionDiv>

          {/* Use MotionDiv cast to any to fix type error on variants prop */}
          <MotionDiv 
            variants={fadeInUp as any}
            className="md:col-span-5 bg-hayrok-dark p-16 rounded-[4rem] flex flex-col justify-between text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-hayrok-orange/20 blur-3xl"></div>
            <ShieldAlert size={60} className="text-hayrok-orange mb-12" />
            <div>
              <p className="text-7xl font-black mb-6 tracking-tighter">0%</p>
              <p className="text-2xl font-bold leading-tight opacity-80">Room for False Positives. Accountability is our code.</p>
            </div>
          </MotionDiv>
        </MotionDiv>
      </section>

      {/* Team/Brand Footer Signature */}
      <section className="py-40 text-center relative z-10 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          {/* Use MotionDiv cast to any to fix type error on initial/whileInView props */}
          <MotionDiv 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.5em] mb-12">The Mission</h2>
            <blockquote className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight mb-20">
              "To empower humanity with autonomous systems that we can <span className="text-hayrok-orange italic">trust</span> as much as our own intuition."
            </blockquote>
            
            <div className="flex flex-col items-center gap-10">
               <button className="bg-hayrok-dark text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-hayrok-orange transition-all transform hover:scale-105 shadow-2xl shadow-black/20">
                Join the Mission
              </button>
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
};
