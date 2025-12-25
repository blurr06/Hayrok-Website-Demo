
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';

const navItems = [
  { label: 'Platform', id: 'platform' },
  { label: 'Industries', id: 'industries' },
  { 
    label: 'Partners', 
    id: 'partners',
    subItems: [
      { label: 'Overview', id: 'partners' },
      { label: 'Integrations', id: 'partners-integrations' },
      { label: 'Cloud (CSPs)', id: 'partners-csps' },
      { label: 'MSSPs', id: 'partners-mssps' }
    ]
  },
  { label: 'ROI Metrics', id: 'roi' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'Comparison', id: 'comparison' },
];

interface NavbarProps {
  onNavigate: (page: string) => void;
  activePage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isPartnersOpen, setIsPartnersOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    setIsCompanyOpen(false);
    setIsPartnersOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-hayrok-border py-4 shadow-sm shadow-black/5'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => handleNavClick('home')} className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity">
          <Logo className="h-10" color="dark" />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            item.subItems ? (
              <div 
                key={item.id}
                className="relative group"
                onMouseEnter={() => setIsPartnersOpen(true)}
                onMouseLeave={() => setIsPartnersOpen(false)}
              >
                <button 
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1 text-sm font-semibold transition-all ${
                    activePage.startsWith('partners') ? 'text-hayrok-orange' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${isPartnersOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-full left-0 pt-4 w-52 transition-all duration-200 ${isPartnersOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}>
                  <div className="bg-white border border-hayrok-border rounded-xl shadow-2xl overflow-hidden p-2">
                    {item.subItems.map((sub) => (
                      <button 
                        key={sub.id}
                        onClick={() => handleNavClick(sub.id)}
                        className={`w-full text-left px-4 py-2 text-sm rounded-lg transition-colors ${activePage === sub.id ? 'text-hayrok-orange bg-slate-50' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-semibold transition-all ${
                  activePage === item.id 
                    ? 'text-hayrok-orange' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            )
          ))}
          
          {/* Company Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
          >
            <button 
              className={`flex items-center gap-1 text-sm font-semibold transition-all ${
                ['about', 'values', 'leadership', 'contact', 'newsroom'].includes(activePage) ? 'text-hayrok-orange' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Company
              <ChevronDown size={14} className={`transition-transform duration-200 ${isCompanyOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 pt-4 w-56 transition-all duration-200 ${isCompanyOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}>
               <div className="bg-white border border-hayrok-border rounded-xl shadow-2xl overflow-hidden p-2">
                 <button 
                   onClick={() => handleNavClick('about')}
                   className={`w-full text-left px-4 py-2 text-sm rounded-lg transition-colors ${activePage === 'about' ? 'text-hayrok-orange bg-slate-50' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                 >
                   About Us
                 </button>
                 <button 
                   onClick={() => handleNavClick('leadership')}
                   className={`w-full text-left px-4 py-2 text-sm rounded-lg transition-colors ${activePage === 'leadership' ? 'text-hayrok-orange bg-slate-50' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                 >
                   Leadership
                 </button>
                 <button 
                   onClick={() => handleNavClick('contact')}
                   className={`w-full text-left px-4 py-2 text-sm rounded-lg transition-colors ${activePage === 'contact' ? 'text-hayrok-orange bg-slate-50' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                 >
                   Contact Us
                 </button>
                 <button 
                   onClick={() => handleNavClick('values')}
                   className={`w-full text-left px-4 py-2 text-sm rounded-lg transition-colors ${activePage === 'values' ? 'text-hayrok-orange bg-slate-50' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                 >
                   Values & Principles
                 </button>
                 <button 
                   onClick={() => handleNavClick('newsroom')}
                   className={`w-full text-left px-4 py-2 text-sm rounded-lg transition-colors ${activePage === 'newsroom' ? 'text-hayrok-orange bg-slate-50' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                 >
                   Newsroom
                 </button>
                 <button className="w-full text-left px-4 py-2 text-sm text-slate-400 cursor-not-allowed rounded-lg">
                   Careers (Hiring)
                 </button>
               </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => handleNavClick('home')} className="text-sm font-semibold text-slate-600 hover:text-hayrok-orange transition-colors">
            Sign In
          </button>
          <button onClick={() => handleNavClick('contact')} className="bg-hayrok-orange text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-orange-600 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-orange-500/30">
            Request Early Access
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-hayrok-border p-6 flex flex-col gap-4 md:hidden shadow-2xl h-screen overflow-y-auto pb-24 text-left">
          {navItems.map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              <button
                onClick={() => !item.subItems && handleNavClick(item.id)}
                className={`text-lg font-bold text-left flex items-center justify-between ${
                  activePage === item.id || (item.subItems && activePage.startsWith('partners')) ? 'text-hayrok-orange' : 'text-slate-600'
                }`}
              >
                {item.label}
                {item.subItems && <ChevronDown size={18} />}
              </button>
              {item.subItems && (
                <div className="pl-4 flex flex-col gap-2 border-l border-slate-100">
                  {item.subItems.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => handleNavClick(sub.id)}
                      className={`text-base font-semibold text-left py-1 ${activePage === sub.id ? 'text-hayrok-orange' : 'text-slate-500'}`}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <div className="border-t border-slate-100 pt-4 mt-2">
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 text-left">Company</p>
             <button
                onClick={() => handleNavClick('about')}
                className={`text-lg font-bold text-left w-full mb-3 ${
                   activePage === 'about' ? 'text-hayrok-orange' : 'text-slate-600'
                }`}
             >
                About Us
             </button>
             <button
                onClick={() => handleNavClick('leadership')}
                className={`text-lg font-bold text-left w-full mb-3 ${
                   activePage === 'leadership' ? 'text-hayrok-orange' : 'text-slate-600'
                }`}
             >
                Leadership
             </button>
             <button
                onClick={() => handleNavClick('contact')}
                className={`text-lg font-bold text-left w-full mb-3 ${
                   activePage === 'contact' ? 'text-hayrok-orange' : 'text-slate-600'
                }`}
             >
                Contact Us
             </button>
             <button
                onClick={() => handleNavClick('newsroom')}
                className={`text-lg font-bold text-left w-full mb-3 ${
                   activePage === 'newsroom' ? 'text-hayrok-orange' : 'text-slate-600'
                }`}
             >
                Newsroom
             </button>
             <button
                onClick={() => handleNavClick('values')}
                className={`text-lg font-bold text-left w-full mb-3 ${
                   activePage === 'values' ? 'text-hayrok-orange' : 'text-slate-600'
                }`}
             >
                Values & Principles
             </button>
          </div>

          <div className="h-px bg-slate-100 my-2" />
          <button onClick={() => handleNavClick('contact')} className="bg-hayrok-orange text-white px-5 py-4 rounded-xl text-lg font-bold text-center w-full shadow-xl shadow-orange-500/20">
            Request Early Access
          </button>
        </div>
      )}
    </nav>
  );
};
