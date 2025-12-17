import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Product {
  id: string;
  name: string;
  status: 'Live' | 'Coming Soon';
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface Stat {
  value: string;
  label: string;
}
