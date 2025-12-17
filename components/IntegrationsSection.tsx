import React from 'react';
import { CheckCircle2, Shield } from 'lucide-react';

const BrandIcons: Record<string, React.ReactNode> = {
  Okta: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
    </svg>
  ),
  OneLogin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
      <path d="M11 7h2v10h-2z" fill="#000" fillOpacity="0.3"/>
    </svg>
  ),
  AzureAD: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M11.64 2.59L.16 21.41h5.36l8.03-13.14 1.33 3.03 3.3-2.07-4.14-6.64h-2.4zM14.93 11.02L23.84 21.41h5.36L16.27 6.47l-1.34 4.55z"/>
    </svg>
  ),
  Jira: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
       <path d="M11.55 11.55H.27L11.55.27v11.28zM12.45 12.45h11.28L12.45 23.73V12.45zM.27 12.45h11.28L.27 23.73V12.45z"/>
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.05-.015-2.07-3.33.72-4.035-1.605-4.035-1.605-.54-1.38-1.335-1.755-1.335-1.755-1.08-.735.09-.72.09-.72 1.2.075 1.83 1.23 1.83 1.23 1.065 1.815 2.805 1.29 3.495.99.105-.78.42-1.29.765-1.59-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.61-5.475 5.91.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  ),
  Slack: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.52v-6.315zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52h-2.52zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.52V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.522 2.521 2.527 2.527 0 0 1-2.522-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.522 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.522 2.521A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.522-2.522v-2.52h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.522-2.522 2.527 2.527 0 0 1 2.522-2.522h6.312A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.522h-6.313z"/>
    </svg>
  ),
  ServiceNow: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M17.5 14.5c-1.5 0-2.8 1.1-2.8 2.5s1.3 2.5 2.8 2.5 2.8-1.1 2.8-2.5-1.3-2.5-2.8-2.5zm-8.8-3.3c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3-1.5-3.3-3.3-3.3zm0-8C6.9 3.2 5.4 4.7 5.4 6.5s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3S10.5 3.2 8.7 3.2z"/>
    </svg>
  ),
  Splunk: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M15 12l8 4.5-8 4.5V12zM.5 4.5L14 12V3L.5 10.5V4.5zM.5 13.5L14 21v-7.5L.5 6V13.5z"/>
    </svg>
  )
};

const integrations = [
  { name: "Okta", id: "Okta" },
  { name: "OneLogin", id: "OneLogin" },
  { name: "Azure AD", id: "AzureAD" },
  { name: "Jira", id: "Jira" },
  { name: "GitHub", id: "GitHub" },
  { name: "Slack", id: "Slack" },
  { name: "ServiceNow", id: "ServiceNow" },
  { name: "Splunk", id: "Splunk" }
];

export const IntegrationsSection: React.FC = () => {
  return (
    <section id="integrations" className="py-24 bg-black relative">
       {/* Top Gradient Border */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-hayrok-orange/50 to-transparent"></div>

       <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-medium mb-6">
             <Shield size={12} className="text-hayrok-orange" />
             ENTERPRISE READY
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
             Seamlessly Integrated into your <br/>
             <span className="text-hayrok-orange">Security Stack</span>
          </h2>
          
          <p className="text-slate-400 max-w-2xl mx-auto mb-16 text-lg">
             Hayrok fits into your existing workflows. Support for SSO (SAML/OIDC), 
             SCIM provisioning, and native ticketing integrations comes standard.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
             {integrations.map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-4 p-6 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-hayrok-orange/30 transition-all duration-300 group cursor-default hover:-translate-y-1">
                   <div className="w-12 h-12 flex items-center justify-center text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      {BrandIcons[item.id]}
                   </div>
                   <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">{item.name}</span>
                </div>
             ))}
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4 md:gap-8">
             {['SOC2 Type II Certified', 'ISO 27001', 'GDPR Compliant'].map((cert, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-500 text-sm">
                   <CheckCircle2 size={16} className="text-green-500" />
                   {cert}
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};
