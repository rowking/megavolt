import { Link, useParams } from "react-router-dom";
import {
  Warehouse, Building2, Home, Hotel, Heart, GraduationCap,
  ShoppingBag, UtensilsCrossed, Factory, Server, Landmark, Building,
  ArrowRight, CheckCircle,
} from "lucide-react";
import { INDUSTRIES } from "../data/siteData";
import { INDUSTRY_CONTENT } from "../data/content";
import { HeroBackdrop, CardArt } from "../components/Artwork";
import Breadcrumbs from "../components/Breadcrumbs";
import CTASection from "../components/CTASection";

import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Warehouse, Building2, Home, Hotel, Heart, GraduationCap,
  ShoppingBag, UtensilsCrossed, Factory, Server, Landmark, Building,
};

export function IndustriesOverview() {
  return (
    <div>
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <HeroBackdrop variant="industries-1" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ label: "Industries" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Montserrat, Inter, system-ui, sans-serif" }}>
            Industries We Serve
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Sector-specific MEP engineering, authority approval, and fit-out expertise.
            We understand the unique compliance requirements of every building type.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => {
              const Icon = iconMap[ind.icon] || Building2;
              return (
                <Link
                  key={ind.slug}
                  to={`/industries/${ind.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm card-hover border border-slate-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <CardArt seed={ind.slug} icon={Icon} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <Icon size={22} className="text-amber-400" />
                      <h3 className="text-white font-bold">{ind.name}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-slate-600">
                      {INDUSTRY_CONTENT[ind.slug]?.focus[0]}.
                    </p>
                    <span className="inline-flex items-center gap-1 text-amber-700 font-semibold text-sm mt-3 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

export function IndustryDetail() {
  const { slug } = useParams();
  const industry = INDUSTRIES.find((i) => i.slug === slug);

  if (!industry) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Industry not found</h1>
        <Link to="/industries" className="text-amber-700 mt-4 inline-block">← Back to Industries</Link>
      </div>
    );
  }

  const Icon = iconMap[industry.icon] || Building2;
  const content = INDUSTRY_CONTENT[industry.slug];

  return (
    <div>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <HeroBackdrop variant={`industry-${industry.slug}`} />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ label: "Industries", path: "/industries" }, { label: industry.name }]} />
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Icon size={30} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "Montserrat, Inter, system-ui, sans-serif" }}>
              {industry.name}
            </h1>
          </div>
          <p className="text-lg text-slate-300 max-w-3xl">
            Electrical and MEP works, drawings and authority approvals for {industry.name.toLowerCase()} in Dubai.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Electrical & MEP Works for {industry.name}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">{content.intro}</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">What We Do for {industry.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {content.focus.map((cap, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{cap}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Authorities Usually Involved</h2>
          <div className="flex flex-wrap gap-2">
            {content.authorities.map((a) => (
              <span key={a} className="authority-badge">{a}</span>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { to: "/services/authority-approvals", label: "Authority approvals (DEWA, DM, DCD)" },
              { to: "/services/mep-contracting", label: "MEP contracting" },
              { to: "/services/mep-consultancy", label: "Electrical design and load schedules" },
              { to: "/services/fit-out-services", label: "Fit-out services" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="flex items-center gap-2 text-slate-600 hover:text-amber-700 transition-colors">
                <ArrowRight size={16} className="text-amber-400" /> {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Have a ${industry.name.split(" ")[0]} Project?`}
        subtitle="Get a free consultation with our sector specialists."
      />
    </div>
  );
}
