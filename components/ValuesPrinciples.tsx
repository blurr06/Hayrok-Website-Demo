
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Gavel, UserCheck, Eye, FileSearch, Target, Users, 
  ShieldCheck, Briefcase, CheckCircle2,
  Scale, FileText, Globe, Layers, Activity
} from 'lucide-react';

// Cast motion elements to any to bypass type sync issues in this environment
const MotionH1 = motion.h1 as any;
const MotionH2 = motion.h2 as any;
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
      staggerChildren: 0.1
    }
  }
};

const principles = [
  {
    title: "Governance‑Led Design",
    desc: "Hayrok designs AI‑driven security capabilities with governance considerations integrated from the outset. Automation is implemented within defined policies, controls, and approval mechanisms to support predictable and reviewable behavior.",
    practice: [
      "Policy‑based operation of automated components",
      "Defined boundaries for autonomous actions",
      "Configuration options aligned with risk tolerance"
    ],
    icon: Gavel
  },
  {
    title: "Accountability and Ownership",
    desc: "Hayrok operates on the assumption that security decisions require clear ownership. AI‑assisted recommendations and actions are designed to support human decision‑making rather than replace accountability.",
    practice: [
      "Attribution of actions and recommendations",
      "Clear role separation between systems and users",
      "Support for escalation and approval workflows"
    ],
    icon: UserCheck
  },
  {
    title: "Transparency and Explainability",
    desc: "Hayrok prioritizes transparency in how AI‑assisted decisions are generated and presented. The platform is designed to help users understand contributing factors and rationale behind outputs.",
    practice: [
      "Contextual explanations of findings",
      "Visibility into contributing data sources and signals",
      "Documentation suitable for internal review and external scrutiny"
    ],
    icon: Eye
  },
  {
    title: "Auditability and Evidence",
    desc: "Security operations often require retrospective analysis and external validation. Hayrok emphasizes the ability to generate records and artifacts that support audit, compliance, and review processes.",
    practice: [
      "Persistent logging of actions and decisions",
      "Historical visibility into changes over time",
      "Reporting aligned with common governance workflows"
    ],
    icon: FileSearch
  },
  {
    title: "Outcome‑Oriented Risk Management",
    desc: "Hayrok focuses on helping organizations understand and manage security risk over time, rather than emphasizing activity metrics or alert volume.",
    practice: [
      "Emphasis on exploitability and practical risk context",
      "Tracking of risk trends and remediation progress",
      "Support for executive‑level risk reporting"
    ],
    icon: Target
  },
  {
    title: "Human Oversight",
    desc: "Hayrok’s platform is designed to support human oversight of automated processes. Users retain control over high‑impact decisions, with the ability to review, approve, or adjust actions as needed.",
    practice: [
      "Human‑in‑the‑loop workflows",
      "Configurable approval thresholds",
      "Mechanisms for review and adjustment"
    ],
    icon: Users
  },
  {
    title: "Responsible Use of Automation",
    desc: "Hayrok takes a measured approach to automation, particularly in environments with regulatory, compliance, or operational sensitivity. Automation is introduced incrementally and with monitoring to reduce unintended outcomes.",
    practice: [
      "Conservative defaults for autonomous behavior",
      "Monitoring for unexpected system behavior",
      "Iterative refinement based on customer feedback"
    ],
    icon: ShieldCheck
  },
  {
    title: "Alignment With Business Context",
    desc: "Hayrok views security as part of broader enterprise risk management. Platform design and reporting are intended to align security findings with business, operational, and governance considerations.",
    practice: [
      "Mapping technical risk to business assets",
      "Supporting communication with executives",
      "Enabling cross‑functional collaboration"
    ],
    icon: Briefcase
  }
];

export const ValuesPrinciples: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-hayrok-orange/10 selection:text-hayrok-orange overflow-hidden font-sans relative">
      
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Use MotionDiv cast to any to fix type error on style y transform */}
        <MotionDiv 
          style={{ y: backgroundY } as any}
          className="absolute top-[-5%] left-[-5%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(255,95,0,0.02)_0%,transparent_70%)] blur-[100px]"
        />
        <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />
      </div>

      <div className="h-32 md:h-40"></div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Use MotionDiv cast to any to fix type error on spread fadeInUp */}
          <MotionDiv {...fadeInUp} className="flex items-center gap-3 mb-8">
            <div className="h-[2px] w-8 bg-hayrok-orange"></div>
            <span className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.5em]">Operating Principles</span>
          </MotionDiv>
          
          {/* Use MotionH1 cast to any to fix type error on initial/whileInView props */}
          <MotionH1 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-6xl font-black mb-8 leading-[1.05] tracking-tight text-slate-900"
          >
            Values & Principles
          </MotionH1>

          {/* Use MotionH2 cast to any to fix type error on initial/whileInView props */}
          <MotionH2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-2xl md:text-3xl text-slate-500 font-bold mb-8 leading-snug"
          >
            Operating Principles for Governed AI‑Driven Security
          </MotionH2>

          {/* Use MotionP cast to any to fix type error on initial/whileInView props */}
          <MotionP 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-slate-600 leading-relaxed max-w-4xl"
          >
            Hayrok’s values and principles reflect how the company designs its technology, operates internally, and engages with customers and partners. These principles are intended to support responsible use of automation, clear accountability, and practical adoption of AI in security environments, particularly where governance and oversight are required.
          </MotionP>
        </div>
      </section>

      {/* Core Principles Grid */}
      <section className="container mx-auto px-6 mb-32 relative z-10">
        {/* Use MotionDiv cast to any to fix type error on variants/initial/whileInView props */}
        <MotionDiv 
          variants={staggerContainer as any}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-2 gap-8"
        >
          {principles.map((p, i) => (
            /* Use MotionDiv cast to any to fix type error on variants prop */
            <MotionDiv 
              key={i}
              variants={fadeInUp as any}
              className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 md:p-10 hover:bg-white hover:shadow-xl hover:border-hayrok-orange/20 transition-all duration-500 group flex flex-col"
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-hayrok-orange shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                  <p.icon size={22} />
                </div>
                <div>
                   <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-hayrok-orange transition-colors">{p.title}</h3>
                </div>
              </div>
              
              <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-1">
                {p.desc}
              </p>

              <div className="bg-white rounded-xl border border-slate-100 p-6">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">In Practice</p>
                <ul className="space-y-3">
                  {p.practice.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm font-bold text-slate-700 leading-snug">
                      <CheckCircle2 size={16} className="text-hayrok-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>
      </section>

      {/* Application of Principles & Summary */}
      <section className="container mx-auto px-6 mb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Use MotionDiv cast to any to fix type error on spread fadeInUp */}
          <MotionDiv 
            {...fadeInUp}
            className="bg-slate-900 rounded-[2.5rem] p-10 md:p-12 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Layers size={140} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                <Activity size={24} className="text-hayrok-orange" />
                Application of Principles
              </h3>
              <p className="text-slate-300 font-medium leading-relaxed mb-8">
                These principles guide:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Platform architecture and feature design",
                  "Internal development and testing practices",
                  "Customer engagement and deployment models",
                  "Partner and ecosystem alignment"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-base font-bold text-white">
                    <div className="w-1.5 h-1.5 rounded-full bg-hayrok-orange mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-400">
                They are reviewed and refined as customer requirements, regulatory expectations, and technology capabilities evolve.
              </p>
            </div>
          </MotionDiv>

          {/* Use MotionDiv cast to any to fix type error on initial/whileInView props */}
          <MotionDiv 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-white border border-slate-200 rounded-[2.5rem] p-10 md:p-12 shadow-sm flex flex-col justify-center"
          >
             <h3 className="text-2xl font-black text-slate-900 mb-6">Summary</h3>
             <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
               Hayrok’s values and principles are intended to support the practical, responsible adoption of AI‑driven security capabilities.
             </p>
             <p className="text-lg text-slate-600 font-medium leading-relaxed">
               By emphasizing governance, transparency, accountability, and measurable outcomes, Hayrok aims to help organizations improve security decision‑making while maintaining alignment with enterprise and regulatory expectations.
             </p>
          </MotionDiv>

        </div>
      </section>

      {/* Footer Anchor */}
      <div className="h-20 text-center container mx-auto px-6 text-slate-400 text-xs font-medium">
        Hayrok focuses on AI‑driven security capabilities designed to support governance, transparency, and accountable risk management in enterprise environments.
      </div>
    </div>
  );
};
