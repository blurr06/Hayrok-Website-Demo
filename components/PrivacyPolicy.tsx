import React from 'react';
import { motion } from 'framer-motion';
import { Lock, ChevronRight } from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

export const PrivacyPolicy: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FCFCFA] min-h-screen text-slate-900 font-sans pb-24">
      <IntelligenceFabric density={0.8} isDark={false} />
      
      <section className="relative pt-48 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 mb-8">
              <Lock size={12} className="text-hayrok-orange" />
              Legal
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6">Privacy Policy</h1>
            <p className="text-xl text-slate-500 font-medium">Last updated: January 1, 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="prose prose-lg prose-slate max-w-none"
          >
            <div className="bg-white rounded-3xl border border-slate-100 p-10 md:p-16 space-y-10">
              
              <section>
                <h2 className="text-2xl font-black text-slate-900 mb-4">Introduction</h2>
                <p className="text-slate-600 leading-relaxed">
                  Hayrok Security Inc. ("Hayrok," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-slate-900 mb-4">Information We Collect</h2>
                
                <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">Information You Provide</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li><strong>Account Information:</strong> Name, email address, company name, job title</li>
                  <li><strong>Payment Information:</strong> Billing address and payment details (processed by our payment provider)</li>
                  <li><strong>Communications:</strong> Information you provide when contacting support or sales</li>
                </ul>

                <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">Information Collected Automatically</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li><strong>Usage Data:</strong> Features used, actions taken, timestamps</li>
                  <li><strong>Device Information:</strong> Browser type, operating system, IP address</li>
                  <li><strong>Cookies:</strong> Session and preference cookies for platform functionality</li>
                </ul>

                <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">Customer Security Data</h3>
                <p className="text-slate-600 leading-relaxed">
                  When you connect your security tools to Hayrok, we process security telemetry data as a data processor on your behalf. This may include vulnerability data, asset information, and configuration data. We process this data solely to provide our Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-slate-900 mb-4">How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>Provide, maintain, and improve our Services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and security alerts</li>
                  <li>Respond to your comments, questions, and support requests</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, investigate, and prevent security incidents</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-slate-900 mb-4">Data Sharing</h2>
                <p className="text-slate-600 leading-relaxed mb-4">We do not sell your personal information. We may share information with:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li><strong>Service Providers:</strong> Third parties that perform services on our behalf (hosting, analytics, payment processing)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-slate-900 mb-4">Data Retention</h2>
                <p className="text-slate-600 leading-relaxed">
                  We retain your information for as long as your account is active or as needed to provide Services. We will retain and use information as necessary to comply with legal obligations, resolve disputes, and enforce our agreements. Upon account termination, you may request data deletion within 30 days.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-slate-900 mb-4">Data Security</h2>
                <p className="text-slate-600 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your information, including encryption at rest (AES-256) and in transit (TLS 1.2+), access controls, and regular security assessments. However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-slate-900 mb-4">Your Rights</h2>
                <p className="text-slate-600 leading-relaxed mb-4">Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>Access, correct, or delete your personal information</li>
                  <li>Object to or restrict certain processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent where processing is based on consent</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
                <p className="text-slate-600 leading-relaxed mt-4">
                  To exercise these rights, contact us at <a href="mailto:privacy@hayrok.com" className="text-hayrok-orange font-bold hover:underline">privacy@hayrok.com</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-slate-900 mb-4">International Transfers</h2>
                <p className="text-slate-600 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place, including Standard Contractual Clauses where required.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-slate-900 mb-4">Children's Privacy</h2>
                <p className="text-slate-600 leading-relaxed">
                  Our Services are not directed to individuals under 18. We do not knowingly collect personal information from children.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-slate-900 mb-4">Changes to This Policy</h2>
                <p className="text-slate-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-slate-900 mb-4">Contact Us</h2>
                <p className="text-slate-600 leading-relaxed">
                  For questions about this Privacy Policy or our privacy practices, please contact us at:{' '}
                  <a href="mailto:privacy@hayrok.com" className="text-hayrok-orange font-bold hover:underline">privacy@hayrok.com</a>
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  Hayrok Security Inc.<br />
                  Attn: Privacy Team<br />
                  United States
                </p>
              </section>

            </div>
          </motion.div>

          <div className="mt-12 flex gap-4">
            <button
              onClick={() => onNavigate?.('terms')}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-hayrok-orange transition-colors"
            >
              Terms of Service <ChevronRight size={16} />
            </button>
            <button
              onClick={() => onNavigate?.('trust-center')}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-hayrok-orange transition-colors"
            >
              Trust Center <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
