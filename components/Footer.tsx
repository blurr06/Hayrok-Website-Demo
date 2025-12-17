import React from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-hayrok-border pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
               <Logo />
            </div>
            <p className="text-slate-500 max-w-sm mb-6">
              Next-generation cybersecurity risk management. 
              Empowering organizations to anticipate and neutralize threats with Genesis.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-hayrok-panel flex items-center justify-center text-slate-400 hover:text-white hover:bg-hayrok-orange transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-hayrok-panel flex items-center justify-center text-slate-400 hover:text-white hover:bg-hayrok-orange transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-hayrok-panel flex items-center justify-center text-slate-400 hover:text-white hover:bg-hayrok-orange transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-hayrok-orange transition-colors">Genesis Pentesting</a></li>
              <li><a href="#" className="text-slate-500 hover:text-hayrok-orange transition-colors">Security Scorecard</a></li>
              <li><a href="#" className="text-slate-500 hover:text-hayrok-orange transition-colors">Hay AI Insights</a></li>
              <li><a href="#" className="text-slate-500 hover:text-hayrok-orange transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-hayrok-orange transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-500 hover:text-hayrok-orange transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-500 hover:text-hayrok-orange transition-colors">Contact</a></li>
              <li><a href="#" className="text-slate-500 hover:text-hayrok-orange transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-hayrok-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Hayrok Security Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <Mail size={14} />
            <span>hello@hayrok.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
