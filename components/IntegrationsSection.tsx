
import React from 'react';
import { CheckCircle2, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

// Cast motion elements to any to bypass type sync issues in this environment
const MotionDiv = motion.div as any;

const BrandIcons: Record<string, React.ReactNode> = {
  Okta: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-400">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
    </svg>
  ),
  Jira: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-500">
       <path d="M11.55 11.55H.27L11.55.27v11.28zM12.45 12.45h11.28L12.45 23.73V12.45zM.27 12.45h11.28L.27 23.73V12.45z"/>
    </svg>
  ),
  AzureAD: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-400">
      <path d="M11.64 2.59L.16 21.41h5.36l8.03-13.14 1.33 3.03 3.3-2.07-4.14-6.64h-2.4zM14.93 11.02L23.84 21.41h5.36L16.27 6.47l-1.34 4.55z"/>
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.05-.015-2.07-3.33.72-4.035-1.605-4.035-1.605-.54-1.38-1.335-1.755-1.335-1.755-1.08-.735.09-.72.09-.72 1.2.075 1.83 1.23 1.83 1.23 1.065 1.815 2.805 1.29 3.495.99.105-.78.42-1.29.765-1.59-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.61-5.475 5.91.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  ),
  GitLab: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-orange-500">
      <path d="M23.955 13.587l-1.342-4.135-2.664-8.189c-.135-.417-.724-.417-.859 0l-2.664 8.189H7.574l-2.664 8.189c-.135-.417-.724-.417-.859 0L1.387 9.452.045 13.587c-.121.374.014.786.333 1.017l11.622 8.447 11.622-8.447c.319-.231.454-.643.333-1.017z"/>
    </svg>
  ),
  Slack: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white/90">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.52v-6.315zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52h-2.52zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.52V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.522 2.521 2.527 2.527 0 0 1-2.522-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.522 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.522 2.521A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.522-2.522v-2.52h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.522-2.522 2.527 2.527 0 0 1 2.522-2.522h6.312A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.522h-6.313z"/>
    </svg>
  ),
  ServiceNow: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-green-500">
      <path d="M17.5 14.5c-1.5 0-2.8 1.1-2.8 2.5s1.3 2.5 2.8 2.5 2.8-1.1 2.8-2.5-1.3-2.5-2.8-2.5zm-8.8-3.3c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3-1.5-3.3-3.3-3.3zm0-8C6.9 3.2 5.4 4.7 5.4 6.5s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3S10.5 3.2 8.7 3.2z"/>
    </svg>
  ),
  AWS: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-slate-300">
      <path d="M12.016 4.3c-4.321 0-7.79 3.51-7.79 7.85 0 2.22 0.941 4.22 2.441 5.64 0.16.16 0.16 0.4 0 0.56l-0.81 0.81c-0.16.16-0.41.16-0.57 0-1.99-1.92-3.111-4.52-3.111-7.01 0-5.46 4.43-9.91 9.84-9.91 3.52 0 6.661 1.87 8.431 4.67 0.12.17 0.08 0.43-0.09 0.54l-0.95 0.65c-0.17.12-0.42.08-0.54-0.09-1.4-2.22-3.95-3.71-6.85-3.71z"/>
    </svg>
  ),
  GCP: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-400">
      <path d="M12.5 0C10.7 0 8.9.5 7.4 1.5L20.8 15l3.2-1.9L12.5 0zM5.5 2.7C4.1 3.8 3 5.3 2.3 7L12.5 24l3.2-1.9L5.5 2.7zM0 12.5c0 1.8.5 3.6 1.5 5.1L15 4.2 11.8 1 0 12.5z"/>
    </svg>
  ),
  Jenkins: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-red-500">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.05-.015-2.07-3.33.72-4.035-1.605-4.035-1.605-.54-1.38-1.335-1.755-1.335-1.755"/>
    </svg>
  )
};

const integrations = [
  { name: "Okta", id: "Okta" },
  { name: "Azure AD", id: "AzureAD" },
  { name: "GitHub", id: "GitHub" },
  { name: "GitLab", id: "GitLab" },
  { name: "Jira", id: "Jira" },
  { name: "Slack", id: "Slack" },
  { name: "ServiceNow", id: "ServiceNow" },
  { name: "AWS", id: "AWS" },
  { name: "GCP", id: "GCP" },
  { name: "Jenkins", id: "Jenkins" }
];

export const IntegrationsSection: React.FC<{ condensed?: boolean }> = ({ condensed = false }) => {
  return (
    <section id="integrations" className={`relative overflow-hidden py-32 bg-[#050608]`}>
       {/* Vibrant Orange Glow Background Elements */}
       <div className="absolute inset-0 pointer-events-none">
          {/* Main central glow */}
          {/* Use MotionDiv cast to any to fix type error on animate prop */}
          <MotionDiv 
            animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-hayrok-orange/10 blur-[160px] rounded-full" 
          />
          {/* Side glows */}
          <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-hayrok-orange/5 blur-[140px] rounded-full" />
          <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-orange-600/5 blur-[140px] rounded-full" />
       </div>

       <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto mb-16">
             {/* Use MotionDiv cast to any to fix type error on initial/whileInView props */}
             <MotionDiv 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-hayrok-orange text-[10px] font-black mb-10 tracking-[0.4em] uppercase"
             >
                <Shield size={12} className="text-hayrok-orange" strokeWidth={3} />
                ENTERPRISE ECOSYSTEM
             </MotionDiv>
             <h2 className="text-4xl md:text-7xl font-black mb-8 text-white tracking-tight leading-[0.9]">
                Seamlessly Integrated into your <br/>
                <span className="bg-gradient-to-r from-hayrok-orange to-orange-400 bg-clip-text text-transparent">Security Stack</span>
             </h2>
             <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg md:text-xl font-medium leading-relaxed">
                Hayrok Hive flows into your existing environments, automating 
                ticketing, cloud analysis, and security verification natively.
             </p>
             <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12"></div>
          </div>

          {/* Logo Grid - COMPACT VERSION */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 items-center max-w-6xl mx-auto">
             {integrations.map((item, i) => (
                /* Use MotionDiv cast to any to fix type error on initial/whileInView props */
                <MotionDiv 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col items-center gap-2 px-6 py-5 rounded-[1.5rem] border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] hover:border-hayrok-orange/30 transition-all duration-500 group cursor-default hover:-translate-y-2 backdrop-blur-xl min-w-[130px] shadow-2xl shadow-black/60 relative overflow-hidden"
                >
                   {/* Card inner glow */}
                   <div className="absolute inset-0 bg-gradient-to-br from-hayrok-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   
                   <div className="w-10 h-10 flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 relative z-10">
                      {BrandIcons[item.id] || <Shield className="text-slate-500" />}
                   </div>
                   <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-hayrok-orange transition-colors duration-300 relative z-10">
                      {item.name}
                   </span>
                </MotionDiv>
             ))}
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/5 pt-12">
             {[
               { label: 'SOC 2 Type II Certified', color: 'text-green-500' },
               { label: 'ISO 27001 Alignment', color: 'text-blue-500' },
               { label: 'GDPR Compliant Architecture', color: 'text-emerald-500' }
             ].map((cert, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-400 text-sm font-bold tracking-tight">
                   <CheckCircle2 size={18} className={cert.color} strokeWidth={2.5} />
                   {cert.label}
                </div>
             ))}
          </div>
          
          <p className="mt-12 text-xs font-medium text-slate-500 italic max-w-lg mx-auto">
             Trusted by security teams in financial services, SaaS, healthcare, and regulated enterprises. 
             <span className="block mt-2 opacity-60">Some customers remain confidential due to regulatory requirements.</span>
          </p>
       </div>
    </section>
  );
};
