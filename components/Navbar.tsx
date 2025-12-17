import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NavItem } from '../types';
import { Logo } from './Logo';

const navItems: NavItem[] = [
  { label: 'Platform', href: '#platform' },
  { label: 'Scorecard', href: '#scorecard' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Company', href: '#company' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-hayrok-dark/90 backdrop-blur-xl border-hayrok-border py-4 shadow-lg shadow-black/50'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity">
          <Logo className="h-10" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-white hover:text-shadow-glow transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-white hover:text-hayrok-orange transition-colors">
            Sign In
          </button>
          <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-hayrok-orange hover:text-white transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,107,0,0.4)]">
            Request Demo
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-hayrok-panel border-b border-hayrok-border p-6 flex flex-col gap-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-medium text-slate-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="h-px bg-hayrok-border my-2" />
          <button className="text-left text-lg font-medium text-white">
            Sign In
          </button>
          <button className="bg-hayrok-orange text-white px-5 py-3 rounded-lg text-lg font-semibold text-center">
            Request Demo
          </button>
        </div>
      )}
    </nav>
  );
};
