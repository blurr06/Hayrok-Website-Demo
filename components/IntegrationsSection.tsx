import React from 'react';
import { CheckCircle2, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

// Cast motion elements to any to bypass type sync issues in this environment
const MotionDiv = motion.div as any;

const BrandIcons: Record<string, React.ReactNode> = {
  Okta: (
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/okta/okta-original.svg" alt="Okta" className="w-full h-full object-contain" />
  ),
  Jira: (
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg" alt="Jira" className="w-full h-full object-contain" />
  ),
  AzureAD: (
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" alt="Azure AD" className="w-full h-full object-contain" />
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.05-.015-2.07-3.33.72-4.035-1.605-4.035-1.605-.54-1.38-1.335-1.755-1.335-1.755-1.08-.735.09-.72.09-.72 1.2.075 1.83 1.23 1.83 1.23 1.065 1.815 2.805 1.29 3.495.99.105-.78.42-1.29.765-1.59-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.61-5.475 5.91.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  ),
  GitLab: (
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gitlab/gitlab-original.svg" alt="GitLab" className="w-full h-full object-contain" />
  ),
  Slack: (
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/slack/slack-original.svg" alt="Slack" className="w-full h-full object-contain" />
  ),
  ServiceNow: (
    <img src="https://www.vectorlogo.zone/logos/servicenow/servicenow-icon.svg" alt="ServiceNow" className="w-full h-full object-contain" />
  ),
  AWS: (
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="w-full h-full object-contain transform scale-125" />
  ),
  GCP: (
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg" alt="GCP" className="w-full h-full object-contain" />
  ),
  Jenkins: (
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg" alt="Jenkins" className="w-full h-full object-contain" />
  ),
  Splunk: (
    <img src="https://www.vectorlogo.zone/logos/splunk/splunk-icon.svg" alt="Splunk" className="w-full h-full object-contain" />
  ),
  Elastic: (
    <img src="https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg" alt="Elastic" className="w-full h-full object-contain" />
  ),
  Vanta: (
    <img src="https://www.vectorlogo.zone/logos/vanta/vanta-icon.svg" alt="Vanta" className="w-full h-full object-contain" />
  ),
  AuditBoard: (
    <img src="https://www.auditboard.com/favicon.ico" alt="AuditBoard" className="w-full h-full object-contain" />
  ),
  Drata: (
    <img src="https://drata.com/favicon.ico" alt="Drata" className="w-full h-full object-contain" />
  ),
  Datadog: (
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/datadog/datadog-original.svg" alt="Datadog" className="w-full h-full object-contain" />
  ),
  Sentinel: (
    <img src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" alt="Microsoft Sentinel" className="w-full h-full object-contain" />
  ),
  Docker: (
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" alt="Docker" className="w-full h-full object-contain" />
  ),
  Kubernetes: (
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" className="w-full h-full object-contain" />
  ),
  Bitbucket: (
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bitbucket/bitbucket-original.svg" alt="Bitbucket" className="w-full h-full object-contain" />
  ),
  ArgoCD: (
    <img src="https://raw.githubusercontent.com/argoproj/argo-cd/master/assets/logo.png" alt="ArgoCD" className="w-full h-full object-contain" />
  ),
  Harness: (
    <img src="https://www.vectorlogo.zone/logos/harnessio/harnessio-icon.svg" alt="Harness" className="w-full h-full object-contain" />
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
  { name: "Jenkins", id: "Jenkins" },
  { name: "Splunk", id: "Splunk" },
  { name: "Elastic", id: "Elastic" },
  { name: "Vanta", id: "Vanta" },
  { name: "AuditBoard", id: "AuditBoard" },
  { name: "Drata", id: "Drata" },
  { name: "Datadog", id: "Datadog" },
  { name: "Sentinel", id: "Sentinel" },
  { name: "Docker", id: "Docker" },
  { name: "Kubernetes", id: "Kubernetes" },
  { name: "Bitbucket", id: "Bitbucket" },
  { name: "ArgoCD", id: "ArgoCD" },
  { name: "Harness", id: "Harness" }
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
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 items-center max-w-7xl mx-auto">
             {integrations.map((item, i) => (
                /* Use MotionDiv cast to any to fix type error on initial/whileInView props */
                <MotionDiv 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="flex flex-col items-center gap-2 px-5 py-4 rounded-[1.25rem] border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] hover:border-hayrok-orange/30 transition-all duration-500 group cursor-default hover:-translate-y-2 backdrop-blur-xl min-w-[120px] shadow-2xl shadow-black/60 relative overflow-hidden"
                >
                   {/* Card inner glow */}
                   <div className="absolute inset-0 bg-gradient-to-br from-hayrok-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   
                   <div className="w-10 h-10 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 relative z-10">
                      {BrandIcons[item.id] || <Shield className="text-slate-500" />}
                   </div>
                   <span className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-hayrok-orange transition-colors duration-300 relative z-10">
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