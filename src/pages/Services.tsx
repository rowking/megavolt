import { Link, useParams } from "react-router-dom";
import {
  Cpu, ShieldCheck, Wrench, Building2, Zap, Sun,
  ArrowRight, CheckCircle, ChevronRight,
} from "lucide-react";
import { SERVICES, COMPANY } from "../data/siteData";
import Breadcrumbs from "../components/Breadcrumbs";
import CTASection from "../components/CTASection";

import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Cpu, ShieldCheck, Wrench, Building2, Zap, Sun,
};

export function ServicesOverview() {
  return (
    <div>
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="MEP services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
            Our Services
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Complete MEP engineering, authority approvals, contracting, fit-out, EV charging,
            and solar solutions — all under one roof.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {SERVICES.map((cat) => {
            const Icon = iconMap[cat.icon] || Cpu;
            return (
              <div key={cat.slug} id={cat.slug}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon size={30} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900" style={{ fontFamily: 'Montserrat' }}>
                      {cat.category}
                    </h2>
                    <p className="text-slate-600 mt-1">{cat.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.items.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/services/${cat.slug}/${item.slug}`}
                      className="group bg-white rounded-xl p-5 border border-slate-100 card-hover flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <ChevronRight size={18} className="text-amber-400 group-hover:translate-x-1 transition-transform" />
                        <span className="font-medium text-slate-800 group-hover:text-amber-600 transition-colors">
                          {item.name}
                        </span>
                      </div>
                      <ArrowRight size={16} className="text-slate-300 group-hover:text-amber-500 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </div>
  );
}

export function ServiceCategory() {
  const { category } = useParams();
  const cat = SERVICES.find((s) => s.slug === category);

  if (!cat) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Service category not found</h1>
        <Link to="/services" className="text-amber-600 mt-4 inline-block">← Back to Services</Link>
      </div>
    );
  }

  const Icon = iconMap[cat.icon] || Cpu;

  return (
    <div>
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt={cat.category}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ label: "Services", path: "/services" }, { label: cat.category }]} />
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Icon size={30} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Montserrat' }}>
              {cat.category}
            </h1>
          </div>
          <p className="text-lg text-slate-300 max-w-2xl">{cat.description}</p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.items.map((item) => (
              <Link
                key={item.slug}
                to={`/services/${cat.slug}/${item.slug}`}
                className="group bg-white rounded-2xl p-6 border border-slate-100 card-hover"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <ChevronRight size={18} className="text-amber-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {item.name}
                  </h3>
                </div>
                <p className="text-sm text-slate-600">
                  Professional {item.name.toLowerCase()} services in Dubai. Fully compliant with
                  all UAE authority requirements.
                </p>
                <span className="inline-flex items-center gap-1 text-amber-600 font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Need ${cat.category}?`}
        subtitle="Get a free consultation with our licensed UAE engineers today."
      />
    </div>
  );
}

export function ServiceDetail() {
  const { category, service } = useParams();
  const cat = SERVICES.find((s) => s.slug === category);
  const item = cat?.items.find((i) => i.slug === service);

  if (!cat || !item) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Service not found</h1>
        <Link to="/services" className="text-amber-600 mt-4 inline-block">← Back to Services</Link>
      </div>
    );
  }

  const Icon = iconMap[cat.icon] || Cpu;

  return (
    <div>
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Services", path: "/services" },
              { label: cat.category, path: `/services/${cat.slug}` },
              { label: item.name },
            ]}
          />
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Icon size={30} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Montserrat' }}>
              {item.name}
            </h1>
          </div>
          <p className="text-lg text-slate-300 max-w-3xl">
            Professional {item.name.toLowerCase()} services in Dubai, delivered by UAE-licensed
            engineers. Fully compliant with all authority requirements.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our {item.name} service is part of our {cat.category} division. We provide
              end-to-end solutions for residential, commercial, and industrial projects across
              Dubai and the wider UAE. With {COMPANY.years} of experience and registration with
              {COMPANY.authorities} UAE authorities, we ensure your project meets every regulatory
              requirement — first time, every time.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">What We Deliver</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Site survey and requirements assessment",
                "Detailed engineering design and calculations",
                "Authority-ready drawings and documentation",
                "Submission and follow-up with relevant authorities",
                "Installation and commissioning (if required)",
                "Testing, certification, and handover",
                "Ongoing maintenance and support",
                "24/7 emergency response for critical systems",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{point}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why Choose Us for {item.name}</h2>
            <ul className="space-y-2 text-slate-600">
              <li>UAE-licensed engineers with deep regulatory knowledge</li>
              <li>First-submission approval track record</li>
              <li>Transparent pricing with no hidden costs</li>
              <li>Full project management from design to handover</li>
              <li>ISO 9001 quality management certified</li>
              <li>Response within 24 hours on all enquiries</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Service Process</h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Free Consultation", desc: "We assess your project requirements and provide a scope and quotation." },
                { step: "2", title: "Engineering & Design", desc: "Our licensed engineers prepare compliant designs and documentation." },
                { step: "3", title: "Authority Submission", desc: "We submit to the relevant authority and manage the entire approval process." },
                { step: "4", title: "Installation & Commissioning", desc: "If required, our certified team handles installation and testing." },
                { step: "5", title: "Handover & Support", desc: "We hand over all certifications and provide ongoing maintenance support." },
              ].map((s, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{s.title}</h4>
                    <p className="text-slate-600 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related services */}
          <div className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="font-bold text-slate-900 mb-4">Other {cat.category} Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {cat.items.filter((i) => i.slug !== item.slug).map((i) => (
                <Link
                  key={i.slug}
                  to={`/services/${cat.slug}/${i.slug}`}
                  className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors"
                >
                  <ChevronRight size={16} className="text-amber-400" /> {i.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to Start Your ${item.name} Project?`}
        subtitle="Free consultation. Response within 24 hours."
      />
    </div>
  );
}
