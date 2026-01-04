import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ChevronRight } from 'lucide-react';
import { IntelligenceFabric } from './IntelligenceFabric';

export const TermsOfService: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
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
              <FileText size={12} className="text-hayrok-orange" />
              Legal
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6">Terms of Service</h1>
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
                <h2 className="text-2xl font-black text-slate-900 mb-4">1. Agreement to Terms</h2>
                <p className="text-slate-600 leading-relaxed">
                  By accessing or using Hayrok's platform, website, or services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you are using our Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-slate-900 mb-4">2. Description of Services</h2>
                <p className="text-slate-600 leading-relaxed">
                  Hayrok provides a security validation platform that includes continuous threat exposure management (CTEM), AI-powered security reasoning, and compliance automation capabilities. Our platform connects to your existing security tools to provide validated, evidence-based risk decisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-slate-900 mb-4">3. Account Responsibilities</h2>
                <p className="text-slate-600 leading-relaxed mb-4">You are responsible for:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Ensuring your use complies with applicable laws and regulations</li>
                  <li>Providing accurate and complete information during registration</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-slate-900 mb-4">4. Acceptable Use</h2>
                <p className="text-slate-600 leading-relaxed mb-4">You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>Use the Services for any unlawful purpose</li>
                  <li>Attempt to gain unauthorized access to any part of the Services</li>
                  <li>Interfere with or disrupt the integrity or performance of the Services</li>
                  <li>Reverse engineer, decompile, or disassemble any portion of the Services</li>
                  <li>Use the Services to develop a competing product</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-slate-900 mb-4">5. Intellectual Property</h2>
                <p className="text-slate-600 leading-relaxed">
                  The Services, including all content, features, and functionality, are owned by Hayrok Security Inc. and are protected by international copyright, trademark, and other intellectual property laws. You retain ownership of your data; we retain ownership of the platform and any improvements derived from aggregated, anonymized usage patterns.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-slate-900 mb-4">6. Data Processing</h2>
                <p className="text-slate-600 leading-relaxed">
                  Our processing of your data is governed by our Privacy Policy and, where applicable, a Data Processing Addendum (DPA). We process data only as necessary to provide the Services and in accordance with your instructions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-slate-900 mb-4">7. Service Level & Availability</h2>
                <p className="text-slate-600 leading-relaxed">
                  We strive to maintain high availability of our Services. Specific uptime commitments and support response times are detailed in your subscription agreement or our standard SLA, available upon request.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-slate-900 mb-4">8. Limitation of Liability</h2>
                <p className="text-slate-600 leading-relaxed">
                  To the maximum extent permitted by law, Hayrok shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly. Our total liability shall not exceed the amounts paid by you in the twelve (12) months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-slate-900 mb-4">9. Indemnification</h2>
                <p className="text-slate-600 leading-relaxed">
                  You agree to indemnify and hold harmless Hayrok from any claims, damages, or expenses arising from your use of the Services or violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-slate-900 mb-4">10. Termination</h2>
                <p className="text-slate-600 leading-relaxed">
                  Either party may terminate the agreement with 30 days written notice. We may suspend or terminate your access immediately if you breach these Terms. Upon termination, you may request export of your data within 30 days.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-slate-900 mb-4">11. Changes to Terms</h2>
                <p className="text-slate-600 leading-relaxed">
                  We may update these Terms from time to time. We will notify you of material changes via email or through the Services. Continued use after changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-slate-900 mb-4">12. Governing Law</h2>
                <p className="text-slate-600 leading-relaxed">
                  These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles. Any disputes shall be resolved in the state or federal courts located in Delaware.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-slate-900 mb-4">13. Contact</h2>
                <p className="text-slate-600 leading-relaxed">
                  For questions about these Terms, please contact us at{' '}
                  <a href="mailto:legal@hayrok.com" className="text-hayrok-orange font-bold hover:underline">legal@hayrok.com</a>.
                </p>
              </section>

            </div>
          </motion.div>

          <div className="mt-12 flex gap-4">
            <button
              onClick={() => onNavigate?.('privacy-policy')}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-hayrok-orange transition-colors"
            >
              Privacy Policy <ChevronRight size={16} />
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
