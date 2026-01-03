
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, ChevronDown, BookOpen, Rss, FileText, FileCode, 
  Video, Users, Compass, GraduationCap, Award, ShieldCheck, Gavel, 
  Rocket, Mail, Newspaper, Layout, BarChart3, Zap, Code, Bot, 
  Search, Globe, Sparkles, MousePointer2, Briefcase, Handshake,
  Network, Package, Target, ClipboardCheck, Activity, Landmark,
  Cloud, HeartPulse, ShoppingBag, Building2, Cpu
} from 'lucide-react';
import { Logo } from './Logo';

const navItems = [
  { 
    label: 'Platform', 
    id: 'platform',
    subItems: [
      { label: 'Overview', id: 'platform', icon: Layout },
      { label: 'Hive', id: 'hive', icon: BarChart3 },
      { label: 'Genesis', id: 'genesis', icon: Zap },
      { label: 'Codefabrics', id: 'codefabrics', icon: Code },
      { label: 'Hay-AI', id: 'hay-ai', icon: Bot },
      { label: 'DetectIQ', id: 'detectiq', icon: Search },
      { label: 'SurfaceIQ', id: 'surfaceiq', icon: Globe },
      { label: 'Platform Roadmap', id: 'roadmap', icon: Sparkles },
      { label: 'Request a Demo', id: 'demo', icon: MousePointer2 }
    ]
  },
  { 
    label: 'Solutions', 
    id: 'solutions',
    groupedSubItems: [
      {
        title: 'By Use Case',
        items: [
          { label: 'Application & API Security Validation', id: 'solution-api', icon: Globe },
          { label: 'Software Supply Chain & Dependency Risk', id: 'solution-supply-chain', icon: Package },
          { label: 'Modern Penetration Testing', id: 'solution-pentesting', icon: Zap },
          { label: 'CTEM Readiness', id: 'solution-ctem', icon: Target },
          { label: 'Cloud & Identity Attack Path Validation', id: 'solution-cloud', icon: Network },
          { label: 'DevSecOps & CI/CD Gatekeeping', id: 'solution-devsecops', icon: Code },
          { label: 'Governance & Audit Readiness', id: 'solution-grc', icon: Gavel }
        ]
      },
      {
        title: 'By Role',
        items: [
          { label: 'Application Security Teams', id: 'role-appsec', icon: ShieldCheck },
          { label: 'Security Engineering / Red Teams', id: 'role-eng', icon: Activity },
          { label: 'Developers & Platform Teams', id: 'role-dev', icon: Layout },
          { label: 'CISOs & Executives', id: 'role-ciso', icon: BarChart3 },
          { label: 'Compliance & Risk Teams', id: 'role-compliance', icon: ClipboardCheck }
        ]
      },
      {
        title: 'By Industry',
        items: [
          { label: 'Financial Services & Fintech', id: 'industry-fintech', icon: Landmark },
          { label: 'SaaS & Cloud-Native Companies', id: 'industry-saas', icon: Cloud },
          { label: 'Healthcare & Life Sciences', id: 'industry-healthcare', icon: HeartPulse },
          { label: 'Retail & E-Commerce', id: 'industry-retail', icon: ShoppingBag },
          { label: 'Enterprise & Regulated Industries', id: 'industry-enterprise', icon: Building2 },
          { label: 'Technology & AI-Driven Organizations', id: 'industry-tech-ai', icon: Cpu }
        ]
      }
    ]
  },
  { 
    label: 'Partners', 
    id: 'partners',
    subItems: [
      { label: 'Overview', id: 'partners', icon: Layout },
      { label: 'Integrations', id: 'partners-integrations', icon: Compass },
      { label: 'Cloud (CSPs)', id: 'partners-csps', icon: Globe },
      { label: 'MSSPs', id: 'partners-mssps', icon: Users },
      { label: 'Resellers', id: 'resellers', icon: Handshake },
      { label: 'Become a Partner', id: 'become-partner', icon: HandshakeIcon }
    ]
  },
  { 
    label: 'Resources', 
    id: 'resources',
    subItems: [
      { label: 'View All Resources', id: 'resources', icon: BookOpen },
      { label: 'Blog', id: 'blog', icon: Rss },
      { label: 'Datasheets & Solution Briefs', id: 'datasheets', icon: FileText },
      { label: 'White Papers & Reports', id: 'whitepapers', icon: FileCode },
      { label: 'Videos & Podcasts', id: 'multimedia', icon: Video },
      { label: 'Customer Stories', id: 'customer-stories', icon: Users },
      { label: 'Tours & Walkthroughs', id: 'tours', icon: Compass },
      { label: 'Learning Center', id: 'learning-center', icon: GraduationCap }
    ]
  },
  { label: 'ROI Metrics', id: 'roi' },
  { label: 'Pricing', id: 'pricing' },
];

const companyItems = [
  { label: 'About Us', id: 'about', icon: Users },
  { label: 'Leadership', id: 'leadership', icon: Award },
  { label: 'Careers', id: 'careers', icon: Briefcase },
  { label: 'Trust Center', id: 'trust-center', icon: ShieldCheck },
  { label: 'Responsible AI Policy', id: 'responsible-ai-policy', icon: Gavel },
  { label: 'Early Adopter Program', id: 'early-adopter', icon: Rocket },
  { label: 'Contact Us', id: 'contact', icon: Mail },
  { label: 'Newsroom', id: 'newsroom', icon: Newspaper },
];

function HandshakeIcon({ size, className }: { size: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m11 17 2 2 4-4" />
      <path d="m18 10 1-1a2 2 0 0 0-2.83-2.83l-1.25 1.25" />
      <path d="m14 13-1.25 1.25a2 2 0 0 1-2.83-2.83l1.25-1.25" />
      <path d="M9.5 14.5 8 16a2 2 0 0 1-2.83-2.83l1.5-1.5" />
      <path d="m14.5 9.5 1.5-1.5a2 2 0 0 1 2.83 2.83l-1.5 1.5" />
      <path d="M5 21v-3.5c0-1.38 1.12-2.5 2.5-2.5H10" />
      <path d="M19 3v3.5c0 1.38-1.12 2.5-2.5 2.5H14" />
    </svg>
  );
}

interface NavbarProps {
  onNavigate: (page: string) => void;
  activePage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
    setOpenDropdown(null);
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-slate-200 py-4 shadow-sm'
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
            (item.subItems || item.groupedSubItems) ? (
              <div 
                key={item.id}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.id)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button 
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1 text-sm font-semibold transition-all ${
                    activePage.startsWith(item.id) || ['hive', 'hay-ai', 'detectiq', 'surfaceiq', 'genesis', 'codefabrics', 'roadmap', 'demo'].includes(activePage) ? 'text-hayrok-orange' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === item.id ? 'rotate-180' : ''}`} />
                </button>

                <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${openDropdown === item.id ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible pointer-events-none'}`}>
                  {item.groupedSubItems ? (
                    /* Grouped Mega Menu */
                    <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-2xl overflow-hidden p-8 backdrop-blur-3xl w-[800px] grid grid-cols-3 gap-10">
                      {item.groupedSubItems.map((group) => (
                        <div key={group.title} className="space-y-4">
                          <p className="text-[10px] font-black text-hayrok-orange uppercase tracking-[0.3em] mb-6 pl-4">{group.title}</p>
                          <div className="flex flex-col gap-1">
                            {group.items.map((sub) => (
                              <button 
                                key={sub.id}
                                onClick={() => handleNavClick(sub.id)}
                                className={`w-full text-left px-4 py-3 text-xs rounded-xl transition-all flex items-center gap-3 ${activePage === sub.id ? 'text-hayrok-orange bg-orange-50' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 font-bold'}`}
                              >
                                {sub.icon && <sub.icon size={16} strokeWidth={2} className={activePage === sub.id ? 'text-hayrok-orange' : 'text-slate-400'} />}
                                <span>{sub.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Simple Dropdown */
                    <div className="bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden p-2 backdrop-blur-2xl w-72">
                      <div className="px-4 py-2 mb-1 border-b border-slate-50">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                      </div>
                      {item.subItems?.map((sub: any) => (
                        <button 
                          key={sub.label}
                          onClick={() => handleNavClick(sub.id)}
                          className={`w-full text-left px-4 py-2.5 text-sm rounded-lg transition-colors flex items-center gap-3 ${activePage === sub.id ? 'text-hayrok-orange bg-orange-50' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 font-bold'}`}
                        >
                          {sub.icon && <sub.icon size={16} className={activePage === sub.id ? 'text-hayrok-orange' : 'text-slate-400'} />}
                          <span>{sub.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-semibold transition-all ${
                  activePage === item.id 
                    ? 'text-hayrok-orange' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            )
          ))}
          
          {/* Company Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setOpenDropdown('company')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button 
              className={`flex items-center gap-1 text-sm font-semibold transition-all ${
                ['about', 'values', 'leadership', 'careers', 'contact', 'newsroom', 'early-adopter', 'trust-center', 'responsible-ai-policy'].includes(activePage) ? 'text-hayrok-orange' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Company
              <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === 'company' ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`absolute top-full left-0 pt-4 w-64 transition-all duration-200 ${openDropdown === 'company' ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible pointer-events-none'}`}>
               <div className="bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden p-2 backdrop-blur-2xl">
                 <div className="px-4 py-2 mb-1 border-b border-slate-50">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Company</span>
                 </div>
                 {companyItems.map((item) => (
                   <button 
                     key={item.id}
                     onClick={() => handleNavClick(item.id)}
                     className={`w-full text-left px-4 py-2.5 text-sm rounded-lg transition-colors flex items-center gap-3 ${activePage === item.id ? 'text-hayrok-orange bg-orange-50' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 font-bold'}`}
                   >
                     {item.icon && <item.icon size={16} className={activePage === item.id ? 'text-hayrok-orange' : 'text-slate-400'} />}
                     <span>{item.label}</span>
                   </button>
                 ))}
               </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => handleNavClick('home')} className="text-sm font-semibold text-slate-500 hover:text-hayrok-orange transition-colors">
            Sign In
          </button>
          <button onClick={() => handleNavClick('demo')} className="bg-hayrok-orange text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-orange-600 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-orange-500/30">
            Request a Demo
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
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-4 md:hidden shadow-2xl h-screen overflow-y-auto pb-24 text-left text-slate-900">
          {navItems.map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              <button
                onClick={() => !item.subItems && !item.groupedSubItems && handleNavClick(item.id)}
                className={`text-lg font-bold text-left flex items-center justify-between ${
                  activePage === item.id || (item.subItems && (activePage.startsWith(item.id) || ['hive', 'hay-ai', 'detectiq', 'surfaceiq', 'genesis', 'codefabrics', 'roadmap', 'demo'].includes(activePage))) ? 'text-hayrok-orange' : 'text-slate-900'
                }`}
              >
                {item.label}
                {(item.subItems || item.groupedSubItems) && <ChevronDown size={18} />}
              </button>
              
              {item.groupedSubItems && (
                <div className="pl-4 flex flex-col gap-6 border-l border-slate-100 mt-2">
                   {item.groupedSubItems.map(group => (
                     <div key={group.title} className="space-y-2">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">{group.title}</p>
                        {group.items.map(sub => (
                          <button
                            key={sub.id}
                            onClick={() => handleNavClick(sub.id)}
                            className={`w-full text-left px-4 py-2 text-sm font-bold rounded-lg transition-colors flex items-center gap-3 ${activePage === sub.id ? 'text-hayrok-orange bg-orange-50' : 'text-slate-500 hover:bg-slate-50'}`}
                          >
                            {sub.icon && <sub.icon size={16} />}
                            <span>{sub.label}</span>
                          </button>
                        ))}
                     </div>
                   ))}
                </div>
              )}

              {item.subItems && (
                <div className="pl-4 flex flex-col gap-2 border-l border-slate-100">
                  {item.subItems.map((sub) => (
                    <button
                      key={sub.label}
                      onClick={() => handleNavClick(sub.id)}
                      className={`text-base font-semibold text-left py-1 flex items-center gap-3 ${activePage === sub.id ? 'text-hayrok-orange' : 'text-slate-500'}`}
                    >
                      {sub.icon && <sub.icon size={16} />}
                      <span>{sub.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <div className="border-t border-slate-100 pt-4 mt-2">
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 text-left">Company</p>
             <div className="pl-4 flex flex-col gap-2 border-l border-slate-100">
              {companyItems.map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => handleNavClick(item.id)} 
                    className={`text-base font-semibold text-left py-1 flex items-center gap-3 ${activePage === item.id ? 'text-hayrok-orange' : 'text-slate-900'}`}
                  >
                    {item.icon && <item.icon size={16} className={activePage === item.id ? 'text-hayrok-orange' : 'text-slate-400'} />}
                    <span>{item.label}</span>
                  </button>
              ))}
             </div>
          </div>

          <div className="h-px bg-slate-100 my-2" />
          <button onClick={() => handleNavClick('demo')} className="bg-hayrok-orange text-white px-5 py-4 rounded-xl text-lg font-bold text-center w-full shadow-xl shadow-orange-500/20">
            Request a Demo
          </button>
        </div>
      )}
    </nav>
  );
};
