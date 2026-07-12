import { Link } from "react-router-dom";
import {
  FileCheck, Shield, Table, Calculator, BookOpen, Zap,
  ArrowRight, Download,
} from "lucide-react";
import { RESOURCES } from "../data/siteData";
import Breadcrumbs from "../components/Breadcrumbs";
import CTASection from "../components/CTASection";

import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  FileCheck, Shield, Table, Calculator, BookOpen, Zap,
};

export default function Resources() {
  return (
    <div>
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/261663/pexels-photo-261663.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Resources"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ label: "Resources" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
            Free Resources
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Download free checklists, guides, and tools to help you plan your UAE project.
            No registration required.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCES.map((r, i) => {
              const Icon = iconMap[r.icon] || FileCheck;
              return (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm card-hover border border-slate-100 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <Icon size={24} className="text-amber-600" />
                    </div>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-medium">
                      {r.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{r.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{r.description}</p>
                  <button className="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm hover:gap-3 transition-all">
                    <Download size={16} /> Download Free
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lead capture */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
              Get All Resources in One Pack
            </h2>
            <p className="text-slate-800 text-lg mb-6">
              Download our complete UAE Authority Approval Resource Pack — all checklists,
              guides, and templates in one file.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-800 transition-all">
              Request the Full Pack <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
