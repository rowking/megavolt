import {
  Warehouse, Building2, Home, Hotel, Heart, GraduationCap, ShoppingBag,
  UtensilsCrossed, Factory, Server, Landmark, Building, Wrench, ShieldCheck,
  Cpu, Sun, Zap, FileText,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const INDUSTRY: Record<string, LucideIcon> = {
  Warehouse, Building2, Home, Hotel, Heart, GraduationCap, ShoppingBag,
  UtensilsCrossed, Factory, Server, Landmark, Building,
};

export function industryIcon(name: string): LucideIcon {
  return INDUSTRY[name] || Building2;
}

const PROJECT: Record<string, LucideIcon> = {
  "MEP Contracting": Wrench,
  "Fit-out Services": Building2,
  "Authority Approvals": ShieldCheck,
  "Solar Solutions": Sun,
  "MEP Consultancy": Cpu,
  "EV Solutions": Zap,
};

export function projectIcon(category: string): LucideIcon {
  return PROJECT[category] || FileText;
}

export function blogIcon(category: string): LucideIcon {
  return PROJECT[category] || FileText;
}
