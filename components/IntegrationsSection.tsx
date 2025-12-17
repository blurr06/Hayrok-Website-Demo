import React from 'react';
import { CheckCircle2, Shield } from 'lucide-react';

const integrations = [
   "Okta", "OneLogin", "Azure AD", "Jira", "GitHub", "Slack", "ServiceNow", "Splunk"
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

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-8 items-center justify-center opacity-80">
             {integrations.map((name, i) => (
                <div key={i} className="flex flex-col items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-hayrok-orange/30 transition-all duration-300">
                   <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-400 border border-slate-700">
                      {name[0]}
                   </div>
                   <span className="text-sm font-medium text-slate-300">{name}</span>
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
