import { Link } from "react-router-dom";
import {
  ArrowRight, CheckCircle, ShieldCheck, Zap, Wrench, Building2,
  Sun, Cpu, Clock, Award, Users, Phone, ChevronRight, MapPin,
  TrendingUp, Sparkles, Plug, HelpCircle,
} from "lucide-react";
import { SERVICES, INDUSTRIES, PROJECTS, STATS, COMPANY, OFFICES } from "../data/siteData";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import AuthorityLogos from "../components/AuthorityLogos";
import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";
import { HERO_IMAGE, TEAM_ILLUSTRATION, SERVICE_IMAGES, INDUSTRY_IMAGES } from "../data/images";
import { HOME_FAQ } from "../data/landing";
import { industryIcon } from "../components/icons";
import ProjectThumb from "../components/ProjectThumb";

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
        <div className="absolute inset-0 overflow-hidden bg-slate-900">
          <img
            src={HERO_IMAGE.src}
            srcSet={`${HERO_IMAGE.srcSmall} 1024w, ${HERO_IMAGE.src} 1920w`}
            sizes="100vw"
            alt=""
            width={HERO_IMAGE.width}
            height={HERO_IMAGE.height}
            {...({ fetchpriority: "high" } as Record<string, string>)}
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/40" />
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <g fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.25">
              <path d="M980 0 V180 H1180 V420 H1440" />
              <path d="M1120 0 V110 H1300 V300" />
              <path d="M860 700 V560 H1060 V470 H1440" />
            </g>
            <g fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round">
              <path className="current-flow" d="M980 0 V180 H1180 V420 H1440" />
              <path className="current-flow" style={{ animationDelay: "1.3s" }} d="M1120 0 V110 H1300 V300" />
              <path className="current-flow" style={{ animationDelay: "2.4s" }} d="M860 700 V560 H1060 V470 H1440" />
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <Sparkles size={16} /> DEWA Registered Contractor · Open 24 Hours
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.08] mb-6" style={{ fontFamily: "Montserrat, Inter, system-ui, sans-serif", animationDelay: '0.2s' }}>
              Electrical &amp; MEP Contractor in <span className="gradient-text draw-underline">Dubai</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Power upgrades, new and separate meters, DB and panel works, fit-outs, EV chargers and
              solar for villas, offices, shops and warehouses. We prepare the drawings and handle DEWA,
              RTA, Dubai Municipality and Civil Defence approvals, so one team takes your project from
              design to supply release.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/contact" className="btn-primary">
                Get a Free Quote <ArrowRight size={18} />
              </Link>
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="btn-secondary">
                <Phone size={18} /> {COMPANY.phone}
              </a>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              {STATS.map((s, i) => {
                const Icon = iconMap[s.icon] || CheckCircle;
                return (
                  <div key={i} className="text-center group">
                    <Icon size={28} className="text-amber-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl md:text-3xl font-bold text-white"><CountUp value={s.value} /></div>
                    <div className="text-sm text-slate-300">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

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
              <span className="eyebrow">Who We Are</span>
              <h2 className="section-heading mt-2">
                Design, Approvals and Installation by One Dubai Contractor
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
              <img
                src={TEAM_ILLUSTRATION.src}
                alt={TEAM_ILLUSTRATION.alt}
                width={TEAM_ILLUSTRATION.width}
                height={TEAM_ILLUSTRATION.height}
                loading="lazy"
                decoding="async"
                className="rounded-2xl shadow-2xl w-full h-auto ring-1 ring-slate-900/5"
              />
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
            <span className="eyebrow">What We Do</span>
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
                  className="bg-white rounded-2xl shadow-sm card-hover border border-slate-100 group block h-full overflow-hidden"
                >
                  {SERVICE_IMAGES[cat.slug] && (
                    <div className="relative h-44">
                      <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={SERVICE_IMAGES[cat.slug].src}
                        alt={SERVICE_IMAGES[cat.slug].alt}
                        width={SERVICE_IMAGES[cat.slug].width}
                        height={SERVICE_IMAGES[cat.slug].height}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover img-zoom"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                      </div>
                      <div className="absolute -bottom-6 left-8 z-10 w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:-translate-y-1 transition-transform duration-500">
                        <Icon size={26} className="text-white" />
                      </div>
                    </div>
                  )}
                  <div className="p-8 pt-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{cat.category}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{cat.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cat.items.slice(0, 4).map((item) => (
                      <span key={item.slug} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                        {item.name}
                      </span>
                    ))}
                    {cat.items.length > 4 && (
                      <span className="text-xs bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">
                        +{cat.items.length - 4} more
                      </span>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-1 text-amber-700 font-semibold text-sm group-hover:gap-2 transition-all">
                    Explore {cat.category} <ArrowRight size={16} />
                  </span>
                  </div>
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
            <span className="eyebrow">Why Trust Us</span>
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
                  <item.icon size={28} className="text-amber-700" />
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

      {/* Popular services in Dubai */}
      <section className="py-16 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="max-w-7xl mx-auto px-4 relative">
          <Reveal>
          <div className="text-center mb-10">
            <span className="eyebrow !text-amber-400">Most Requested in Dubai</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2" style={{ fontFamily: "Montserrat, Inter, system-ui, sans-serif" }}>What Clients Ask Us For</h2>
          </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { to: "/electrical-contractor-dubai", icon: Zap, title: "Electrical Contractor Dubai", desc: "DB and panel works, power upgrades, meters and wiring by a DEWA registered contractor." },
              { to: "/mep-contractor-dubai", icon: Wrench, title: "MEP Contractor Dubai", desc: "Electrical, AC, plumbing and fire works with the approvals coordinated by one team." },
              { to: "/ev-charger-installation-dubai", icon: Plug, title: "EV Charger Installation", desc: "Home and commercial chargers: load check, DEWA requirements, NOC and safe installation." },
              { to: "/services/authority-approvals", icon: ShieldCheck, title: "DEWA, RTA & DM Approvals", desc: "Drawings and submissions for DEWA, RTA NOC, Dubai Municipality and Civil Defence." },
            ].map((c, i) => (
              <Reveal key={c.to} delay={i * 90}>
                <Link to={c.to} className="group block h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-amber-400/50 hover:-translate-y-1">
                  <c.icon size={26} className="text-amber-400 mb-4 transition-transform duration-500 group-hover:scale-110" />
                  <h3 className="text-white font-bold mb-2">{c.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{c.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-amber-400 text-sm font-semibold group-hover:gap-2 transition-all">Learn more <ArrowRight size={15} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="eyebrow">Industries We Serve</span>
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
                  <img
                    src={INDUSTRY_IMAGES[ind.slug]?.src}
                    alt={INDUSTRY_IMAGES[ind.slug]?.alt || ""}
                    width={720}
                    height={540}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/35 to-slate-900/10 transition-colors duration-500 group-hover:from-slate-950/80" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Icon size={24} className="text-amber-400 mb-2" />
                    <h3 className="text-white font-bold text-sm md:text-base">{ind.name}</h3>
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
              <span className="eyebrow">Completed Projects</span>
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
                  <ProjectThumb project={p} />
                  <div className="absolute top-3 left-3 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                    {p.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
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

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-heading mt-2">Questions About Hiring an Electrical Contractor in Dubai</h2>
          </div>
          <div className="space-y-3">
            {HOME_FAQ.map((f) => (
              <details key={f.q} className="group rounded-xl border border-slate-200 bg-slate-50 open:bg-white open:shadow-md transition-all">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-semibold text-slate-900 list-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start gap-3"><HelpCircle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />{f.q}</span>
                  <ChevronRight size={20} className="text-slate-500 transition-transform duration-300 group-open:rotate-90 flex-shrink-0" aria-hidden="true" />
                </summary>
                <p className="px-5 pb-5 pl-14 text-slate-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: HOME_FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            }),
          }}
        />
      </section>

      {/* Testimonials */}
      <Testimonials limit={4} />

      {/* Contact */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="eyebrow">Get In Touch</span>
              <h2 className="section-heading mt-2">Start Your Project Today</h2>
              <p className="text-slate-600 text-lg mt-4">
                Tell us about your project and get a free consultation. We are open 24 hours.
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Phone size={22} className="text-amber-700" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Call Us</div>
                    <a href={`tel:${COMPANY.phone}`} className="font-bold text-slate-900 hover:text-amber-700 transition-colors">
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <MapPin size={22} className="text-amber-700" />
                  </div>
                  <div>
                    {OFFICES.map((office) => (
                      <div key={office.name} className="mb-2">
                        <div className="text-sm text-slate-500">{office.name}</div>
                        <div className="font-bold text-slate-900">{office.address}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-100">
                <h3 className="font-bold text-slate-900 mb-2">Emergency MEP Service</h3>
                <p className="text-sm text-slate-600">
                  Electrical emergency? Call our 24-hour line:
                </p>
                <a href={`tel:${COMPANY.phone}`} className="text-amber-700 font-bold text-lg mt-1 inline-block">
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

    </div>
  );
}
