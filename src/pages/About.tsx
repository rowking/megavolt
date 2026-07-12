import {
  Target, Eye, ShieldCheck, Award, Users,
  CheckCircle, Star, TrendingUp, Building2, Zap,
} from "lucide-react";
import { COMPANY, TEAM, CERTIFICATIONS, STATS } from "../data/siteData";
import Breadcrumbs from "../components/Breadcrumbs";
import CTASection from "../components/CTASection";
import AuthorityLogos from "../components/AuthorityLogos";

const timeline = [
  { year: "2015", event: "Founded in Dubai as Megavolt Technical Services", icon: Building2 },
  { year: "2017", event: "Registered with DEWA and Dubai Municipality", icon: ShieldCheck },
  { year: "2019", event: "Expanded into MEP contracting and fit-out services", icon: TrendingUp },
  { year: "2021", event: "Launched EV charging division — 100+ chargers installed", icon: Zap },
  { year: "2023", event: "Solar PV division launched with DEWA Shams Dubai approval", icon: Star },
  { year: "2024", event: "500+ projects delivered, 300+ clients served", icon: Award },
];

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "We do what we say. Transparent pricing, honest timelines, no hidden costs." },
  { icon: Award, title: "Excellence", desc: "Every project meets or exceeds UAE authority standards. No shortcuts." },
  { icon: Users, title: "Client Focus", desc: "Your project's success is our success. We respond within 24 hours, every time." },
  { icon: TrendingUp, title: "Innovation", desc: "Embracing BIM, smart building tech, and sustainable energy solutions." },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Engineering team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ label: "About Us" }]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
              About UAE Approval Hub
            </h1>
            <p className="text-lg text-slate-300">
              A Dubai-based MEP engineering and authority approvals firm, powered by {COMPANY.legal}.
              Since {COMPANY.founded}, we've been the trusted partner for businesses navigating
              the UAE's complex regulatory landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-amber-600">{s.value}</div>
                <div className="text-slate-600 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-4">
                <Eye size={28} className="text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                To be the UAE's most trusted MEP and authority approvals brand — the first name
                businesses think of when they need engineering excellence and regulatory compliance
                in Dubai and beyond.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-4">
                <Target size={28} className="text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To deliver fast, accurate, and fully compliant MEP engineering and authority
                approval services — removing the complexity of UAE regulations so our clients
                can focus on building their business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Authority logos */}
      <AuthorityLogos />

      {/* Values */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="section-heading mt-2">What Drives Us Every Day</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center card-hover border border-slate-100">
                <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <v.icon size={26} className="text-amber-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="section-heading mt-2">The Approval Hub Advantage</h2>
              <div className="space-y-4 mt-8">
                {[
                  "Registered with 15+ UAE authorities including DEWA, DCD, DM, Trakhees, JAFZA",
                  "First-submission approval track record — we get it right the first time",
                  "Licensed UAE engineering firm with in-house MEP design team",
                  "Full-service: design, approval, installation, testing, and maintenance",
                  "Transparent pricing with no hidden costs or surprise charges",
                  "24-hour response guarantee on all enquiries",
                  "ISO 9001 quality management certified",
                  "10+ years of Dubai-specific regulatory experience",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={22} className="text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8961062/pexels-photo-8961062.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Engineering team"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="section-heading mt-2">Meet Our Leadership</h2>
            <p className="section-subheading mx-auto text-center">
              Licensed engineers with decades of combined UAE experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover border border-slate-100">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900">{member.name}</h3>
                  <div className="text-amber-600 text-sm font-medium">{member.role}</div>
                  <div className="text-xs text-slate-500 mt-1">{member.credential}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Company Timeline</span>
            <h2 className="section-heading mt-2">Our Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-amber-200 -translate-x-1/2" />
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-6 mb-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center shadow-lg z-10">
                  <item.icon size={24} className="text-white" />
                </div>
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="text-amber-600 font-bold text-lg">{item.year}</div>
                  <div className="text-slate-700 mt-1">{item.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Certifications & Registrations</span>
            <h2 className="section-heading mt-2">Licensed & Approved</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS.map((cert, i) => (
              <div key={i} className="bg-white rounded-xl p-5 flex items-center gap-3 border border-slate-100 card-hover">
                <ShieldCheck size={24} className="text-amber-500 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Quality */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <ShieldCheck size={32} className="text-amber-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Safety First</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Every project follows strict OSHAD and Dubai Municipality safety protocols.
                Our site teams are OSHA-certified and undergo regular safety training.
              </p>
              <div className="space-y-2">
                {["Zero lost-time incidents in 3+ years", "Daily site safety inspections", "Full PPE compliance", "Method statements & risk assessments"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle size={16} className="text-amber-400" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-amber-500 rounded-2xl p-8 text-slate-900">
              <Award size={32} className="mb-4" />
              <h3 className="text-2xl font-bold mb-3">Quality Assured</h3>
              <p className="text-slate-800 leading-relaxed mb-4">
                ISO 9001:2015 certified quality management. Every drawing, installation, and
                approval is reviewed by our senior engineering team before submission.
              </p>
              <div className="space-y-2">
                {["ISO 9001:2015 quality management", "Peer-reviewed engineering designs", "Material compliance verification", "Post-installation testing & commissioning"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-800">
                    <CheckCircle size={16} /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
