import { Link } from "react-router-dom";
import {
  ArrowRight, CheckCircle, ShieldCheck, Zap, Wrench, Building2,
  Sun, Cpu, Clock, Award, Users, Phone, ChevronRight, MapPin,
  TrendingUp, Sparkles,
} from "lucide-react";
import { SERVICES, INDUSTRIES, PROJECTS, STATS, COMPANY } from "../data/siteData";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import CTASection from "../components/CTASection";
import AuthorityLogos from "../components/AuthorityLogos";
import Reveal from "../components/Reveal";
import { HeroBackdrop, CardArt, PanelArt } from "../components/Artwork";
import { industryIcon, projectIcon } from "../components/icons";

import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Cpu, ShieldCheck, Wrench, Building2, Zap, Sun,
  CheckCircle, Award, Users, Clock,
};

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <HeroBackdrop variant="home" />
          <div className="absolute inset-0 hero-overlay animate-gradient" style={{ background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.55) 0%, rgba(30, 41, 59, 0.35) 50%, rgba(15, 23, 42, 0.15) 100%)', backgroundSize: '200% 200%' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <Sparkles size={16} /> {COMPANY.authorities} UAE Authorities Covered
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up" style={{ fontFamily: 'Montserrat', animationDelay: '0.2s' }}>
              Dubai's Trusted <span className="gradient-text">MEP & Authority Approval</span> Specialists
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              From DEWA approvals to full MEP contracting, fit-out, EV charging, and solar —
              we handle every step so your project is compliant, on time, and built to last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/contact" className="btn-primary animate-pulse-glow">
                Get a Free Quote <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              {STATS.map((s, i) => {
                const Icon = iconMap[s.icon] || CheckCircle;
                return (
                  <div key={i} className="text-center group">
                    <Icon size={28} className="text-amber-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <div className="text-sm text-slate-400">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl animate-float-delayed pointer-events-none" />

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 animate-bounce-slow">
          <ChevronRight size={24} className="rotate-90" />
        </div>
      </section>

      {/* Who we are / What we do */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal direction="left">
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
              <h2 className="section-heading mt-2">
                Engineering Excellence. Authority Expertise. One Trusted Partner.
              </h2>
              <p className="text-slate-600 text-lg mt-6 leading-relaxed">
                {COMPANY.brand} ({COMPANY.legal}) is a Dubai-based MEP engineering and
                authority approvals firm serving the UAE since {COMPANY.founded}. We work on residential, commercial, and
                industrial projects — from single-villa DEWA approvals to warehouse power
                upgrades and MEP fit-outs.
              </p>
              <p className="text-slate-600 text-lg mt-4 leading-relaxed">
                We are a DEWA registered contractor and prepare submissions for DEWA, Dubai
                Municipality, Civil Defence, RTA and free zone authorities. We design, install
                and handle the approvals in one place.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  "DEWA registered contractor",
                  "Dubai licensed company since 2020",
                  "Design, approval and installation in one team",
                  "Available 24/7 for urgent electrical work",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-outline mt-8">
                Learn More About Us <ArrowRight size={18} />
              </Link>
              </Reveal>
            </div>

            <div className="relative">
              <Reveal direction="right">
              <PanelArt className="rounded-2xl shadow-2xl w-full h-auto" />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-slate-100 max-w-xs hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <ShieldCheck size={24} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">DEWA Registered</div>
                    <div className="text-sm text-slate-500">Electrical contractor, Dubai</div>
                  </div>
                </div>
              </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="section-heading mt-2">Complete MEP, Approval & Fit-out Services</h2>
            <p className="section-subheading mx-auto text-center">
              Six service divisions covering every aspect of MEP engineering, authority compliance,
              and building systems in the UAE.
            </p>
          </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((cat, idx) => {
              const Icon = iconMap[cat.icon] || Cpu;
              return (
                <Reveal key={cat.slug} delay={idx * 100}>
                <Link
                  to={`/services/${cat.slug}`}
                  className="bg-white rounded-2xl p-8 shadow-sm card-hover border border-slate-100 group block h-full"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{cat.category}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{cat.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cat.items.slice(0, 4).map((item) => (
                      <span key={item.slug} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                        {item.name}
                      </span>
                    ))}
                    {cat.items.length > 4 && (
                      <span className="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">
                        +{cat.items.length - 4} more
                      </span>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-1 text-amber-600 font-semibold text-sm group-hover:gap-2 transition-all">
                    Explore {cat.category} <ArrowRight size={16} />
                  </span>
                </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why trust us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Why Trust Us</span>
            <h2 className="section-heading mt-2">Built on Expertise, Trust & Authority</h2>
            <p className="section-subheading mx-auto text-center">
              What you can expect when you work with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Experience",
                desc: "Working in Dubai since 2020 on villas, offices, warehouses and commercial buildings.",
              },
              {
                icon: ShieldCheck,
                title: "Expertise",
                desc: "Electrical design, load schedules and authority-ready drawings prepared in-house.",
              },
              {
                icon: Users,
                title: "Authoritativeness",
                desc: "DEWA registered contractor. We coordinate DM, Civil Defence, RTA and free zone approvals.",
              },
              {
                icon: TrendingUp,
                title: "Trustworthiness",
                desc: "Clear quotations, honest timelines and 24/7 availability for urgent work.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
              <div className="text-center p-6 rounded-2xl hover:bg-amber-50 transition-colors tilt-hover h-full">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon size={28} className="text-amber-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Authority logos */}
      <AuthorityLogos />

      {/* Industries */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Industries We Serve</span>
            <h2 className="section-heading mt-2">Specialised Expertise for Every Sector</h2>
            <p className="section-subheading mx-auto text-center">
              We understand the unique compliance, design, and operational requirements of each industry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {INDUSTRIES.map((ind, idx) => {
              const Icon = industryIcon(ind.icon);
              return (
                <Reveal key={ind.slug} delay={(idx % 4) * 80}>
                <Link
                  to={`/industries/${ind.slug}`}
                  className="group relative overflow-hidden rounded-xl aspect-[4/3] card-hover block"
                >
                  <div className="absolute inset-0">
                    <CardArt seed={ind.slug} icon={Icon} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Icon size={24} className="text-amber-400 mb-2" />
                    <h3 className="text-white font-bold text-sm">{ind.name}</h3>
                  </div>
                </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Completed Projects</span>
              <h2 className="section-heading mt-2">Recent Work</h2>
            </div>
            <Link to="/projects" className="btn-outline">
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 3).map((p, idx) => (
              <Reveal key={p.id} delay={idx * 120}>
              <Link
                to={`/projects/${p.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm card-hover border border-slate-100 block h-full"
              >
                <div className="relative overflow-hidden h-52">
                  <CardArt seed={p.slug} icon={projectIcon(p.category)} />
                  <div className="absolute top-3 left-3 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                    {p.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm text-slate-500 mb-3">
                    <MapPin size={14} /> {p.location}
                  </div>
                  <p className="text-sm text-slate-600 line-clamp-2">{p.scope}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {p.authorities.map((a) => (
                      <span key={a} className="authority-badge">{a}</span>
                    ))}
                  </div>
                </div>
              </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials limit={4} />

      {/* Contact */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
              <h2 className="section-heading mt-2">Start Your Project Today</h2>
              <p className="text-slate-600 text-lg mt-4">
                Tell us about your project and get a free consultation. We are open 24 hours.
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Phone size={22} className="text-amber-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Call Us</div>
                    <a href={`tel:${COMPANY.phone}`} className="font-bold text-slate-900 hover:text-amber-600 transition-colors">
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <MapPin size={22} className="text-amber-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Office</div>
                    <div className="font-bold text-slate-900">{COMPANY.address}</div>
                    <div className="text-sm text-slate-500 mt-1">Registered office: {COMPANY.registeredOffice}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-100">
                <h4 className="font-bold text-slate-900 mb-2">Emergency MEP Service</h4>
                <p className="text-sm text-slate-600">
                  Electrical emergency? Call our 24-hour line:
                </p>
                <a href={`tel:${COMPANY.phone}`} className="text-amber-600 font-bold text-lg mt-1 inline-block">
                  {COMPANY.phone}
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Request a Free Quote</h3>
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
