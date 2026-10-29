import { Link, useLocation } from "react-router-dom";
import { ArrowRight, CheckCircle, ChevronRight, HelpCircle, MapPin, Phone, ShieldCheck, Clock, Building2 } from "lucide-react";
import { COMPANY, PROJECTS } from "../data/siteData";
import { LANDING_PAGES } from "../data/landing";
import { VEST_IMAGE } from "../data/images";
import Breadcrumbs from "../components/Breadcrumbs";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";
import ProjectThumb from "../components/ProjectThumb";
import { NotFound } from "./Legal";

const heading = { fontFamily: "Montserrat, Inter, system-ui, sans-serif" };

export default function Landing() {
  const { pathname } = useLocation();
  const page = LANDING_PAGES.find((p) => p.path === pathname.replace(/\/+$/, ""));
  if (!page) return <NotFound />;
  const projects = page.projectSlugs
    .map((s) => PROJECTS.find((p) => p.slug === s))
    .filter((p): p is (typeof PROJECTS)[number] => Boolean(p));

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900">
        <img
          src={page.image.src}
          alt=""
          width={page.image.width}
          height={page.image.height}
          {...({ fetchpriority: "high" } as Record<string, string>)}
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/50" />
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: page.h1 }]} />
          <div className="max-w-3xl">
            <span className="eyebrow !text-amber-400 animate-fade-in-up">{page.eyebrow}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mt-3 mb-6" style={{ ...heading, animationDelay: "0.1s" }}>
              {page.h1}
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {page.intro[0]}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/contact" className="btn-primary">
                Get a Free Quote <ArrowRight size={18} />
              </Link>
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="btn-secondary">
                <Phone size={18} /> {COMPANY.phone}
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-slate-200 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-amber-400" /> DEWA registered contractor</span>
              <span className="inline-flex items-center gap-2"><Clock size={16} className="text-amber-400" /> Open 24 hours</span>
              <span className="inline-flex items-center gap-2"><Building2 size={16} className="text-amber-400" /> Offices in Deira &amp; International City</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <span className="eyebrow">Why it matters</span>
            <h2 className="section-heading mt-2">One contractor from drawings to supply release</h2>
            {page.intro.slice(1).map((t) => (
              <p key={t} className="text-slate-600 text-lg mt-5 leading-relaxed">{t}</p>
            ))}
          </Reveal>
          <Reveal direction="right">
            <img
              src={VEST_IMAGE.src}
              alt={VEST_IMAGE.alt}
              width={VEST_IMAGE.width}
              height={VEST_IMAGE.height}
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-2xl shadow-xl ring-1 ring-slate-900/5"
            />
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-12">
              <span className="eyebrow">What we do</span>
              <h2 className="section-heading mt-2">{page.h1}: Our Services</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.services.map((s, i) => {
              const inner = (
                <>
                  <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110">
                    <CheckCircle size={22} className="text-amber-700" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{s.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                  {s.link && (
                    <span className="mt-4 inline-flex items-center gap-1 text-amber-700 text-sm font-semibold group-hover:gap-2 transition-all">
                      Learn more <ArrowRight size={15} />
                    </span>
                  )}
                </>
              );
              return (
                <Reveal key={s.name} delay={(i % 3) * 90}>
                  {s.link ? (
                    <Link to={s.link} className="group block h-full bg-white rounded-2xl p-7 border border-slate-100 shadow-sm card-hover">{inner}</Link>
                  ) : (
                    <div className="group h-full bg-white rounded-2xl p-7 border border-slate-100 shadow-sm">{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-12">
              <span className="eyebrow">How it works</span>
              <h2 className="section-heading mt-2">Our Process</h2>
            </div>
          </Reveal>
          <div className="relative">
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200" aria-hidden="true" />
          <ol className="grid md:grid-cols-5 gap-6 relative">
                        {page.steps.map((st, i) => (
              <li key={st.title} className="relative text-center list-none">
                <Reveal delay={i * 110}>
                  <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white font-bold flex items-center justify-center shadow-lg shadow-orange-500/30 relative z-10">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-slate-900 mt-4 mb-2">{st.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{st.desc}</p>
                </Reveal>
              </li>
            ))}
          </ol>
          </div>
        </div>
      </section>

      {/* Choosing checklist */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal>
            <h2 className="text-3xl font-bold text-white text-center" style={heading}>{page.choose.title}</h2>
          </Reveal>
          <ul className="mt-10 grid sm:grid-cols-2 gap-4">
            {page.choose.points.map((pt, i) => (
              <li key={pt} className="list-none">
                <Reveal delay={(i % 2) * 90} className="h-full">
                  <div className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-5 text-slate-200 leading-relaxed h-full">
                    <CheckCircle size={20} className="text-amber-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{pt}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects */}
      {projects.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <span className="eyebrow">Completed projects</span>
                <h2 className="section-heading mt-2">Related Work by Megavolt</h2>
              </div>
              <Link to="/projects" className="btn-outline">All projects <ArrowRight size={18} /></Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((p, i) => (
                <Reveal key={p.slug} delay={i * 90}>
                  <Link to={`/projects/${p.slug}`} className="group block h-full bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm card-hover">
                    <div className="relative h-44 overflow-hidden"><ProjectThumb project={p} /></div>
                    <div className="p-5">
                      <h3 className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors">{p.title}</h3>
                      <p className="mt-2 text-sm text-slate-500 flex items-center gap-1.5"><MapPin size={14} /> {p.location}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Areas */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900" style={heading}>Areas We Cover in Dubai</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {page.areas.map((a) => (
              <span key={a} className="rounded-full bg-white border border-slate-200 px-4 py-1.5 text-sm text-slate-700">{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-heading mt-2">{page.h1}: Questions</h2>
          </div>
          <div className="space-y-3">
            {page.faq.map((f) => (
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
              "@graph": [
                {
                  "@type": "Service",
                  name: page.h1,
                  serviceType: page.h1.replace(" in Dubai", ""),
                  provider: { "@id": "https://megavolt.ae/#business" },
                  areaServed: { "@type": "City", name: "Dubai" },
                  url: `https://megavolt.ae${page.path}`,
                },
                {
                  "@type": "FAQPage",
                  mainEntity: page.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://megavolt.ae/" },
                    { "@type": "ListItem", position: 2, name: page.h1, item: `https://megavolt.ae${page.path}` },
                  ],
                },
              ],
            }),
          }}
        />
      </section>

      {/* Contact */}
      <section className="py-16 bg-slate-50" id="quote">
        <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <span className="eyebrow">Free quote</span>
            <h2 className="section-heading mt-2">Tell Us About Your Project</h2>
            <p className="text-slate-600 text-lg mt-4 leading-relaxed">
              Send the property type, location and what you need. We reply with a clear written quote covering
              the drawings, approvals and works. DEWA's own charges are billed by DEWA separately.
            </p>
            <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="mt-6 inline-flex items-center gap-2 text-lg font-bold text-slate-900 hover:text-amber-700">
              <Phone size={20} className="text-amber-700" /> {COMPANY.phone}
            </a>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
            <ContactForm compact />
          </div>
        </div>
      </section>
    </div>
  );
}
