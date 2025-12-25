
import React from 'react';
import { Twitter, Linkedin, Github, Mail, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8 cursor-pointer" onClick={() => onNavigate('home')}>
               <Logo color="dark" />
            </div>
            <p className="text-slate-500 max-w-sm mb-10 text-lg font-medium leading-relaxed">
              Hayrok — Agentic AI for Security, Built With Accountability.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-hayrok-orange hover:bg-white hover:border-hayrok-orange hover:shadow-xl transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-hayrok-orange hover:bg-white hover:border-hayrok-orange hover:shadow-xl transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-hayrok-orange hover:bg-white hover:border-hayrok-orange hover:shadow-xl transition-all">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-black text-xs uppercase tracking-widest mb-8">Capabilities</h4>
            <ul className="space-y-5">
              <li><button onClick={() => onNavigate('platform')} className="text-slate-500 font-bold hover:text-hayrok-orange transition-colors">Hive — Intelligence</button></li>
              <li><button onClick={() => onNavigate('platform')} className="text-slate-500 font-bold hover:text-hayrok-orange transition-colors">Genesis — Validation</button></li>
              <li><button onClick={() => onNavigate('roi')} className="text-slate-500 font-bold hover:text-hayrok-orange transition-colors">ROI Metrics</button></li>
              <li><button onClick={() => onNavigate('comparison')} className="text-slate-500 font-bold hover:text-hayrok-orange transition-colors">Comparison Battlecard</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-black text-xs uppercase tracking-widest mb-8">Company</h4>
            <ul className="space-y-5">
              <li><button onClick={() => onNavigate('about')} className="text-slate-500 font-bold hover:text-hayrok-orange transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('values')} className="text-slate-500 font-bold hover:text-hayrok-orange transition-colors">Responsible AI Policy</button></li>
              <li><button className="text-slate-500 font-bold hover:text-hayrok-orange transition-colors">Security Ethics</button></li>
              <li><button className="text-slate-500 font-bold hover:text-hayrok-orange transition-colors">Newsroom</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} Hayrok Security Inc. Built with Governed Autonomy.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-500 text-sm font-bold">
              <Mail size={14} className="text-hayrok-orange" />
              <span>hello@hayrok.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
