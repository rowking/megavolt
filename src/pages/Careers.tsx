import { Link } from "react-router-dom";
import { Briefcase, Mail, MapPin, Heart, TrendingUp, Award } from "lucide-react";
import { COMPANY } from "../data/siteData";
import Breadcrumbs from "../components/Breadcrumbs";
import CTASection from "../components/CTASection";

const positions = [
  { title: "MEP Design Engineer (Electrical)", type: "Full-time", location: "Dubai" },
  { title: "Mechanical Engineer (HVAC)", type: "Full-time", location: "Dubai" },
  { title: "Authority Approvals Coordinator", type: "Full-time", location: "Dubai" },
  { title: "Site Supervisor (Electrical)", type: "Contract", location: "Dubai" },
];

const benefits = [
  { icon: Award, title: "Professional Growth", desc: "Mentorship from senior engineers and support for professional certifications." },
  { icon: TrendingUp, title: "Career Progression", desc: "Clear advancement path from junior to senior to management roles." },
  { icon: Heart, title: "Health & Wellbeing", desc: "Comprehensive health insurance and wellbeing support for all staff." },
  { icon: Briefcase, title: "Diverse Projects", desc: "Work across residential, commercial, industrial, and cutting-edge sectors." },
];

export default function Careers() {
  return (
    <div>
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Careers"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ label: "Careers" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
            Build Your Career With Us
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Join a team that's shaping Dubai's engineering landscape. We're always looking
            for talented engineers, project managers, and technical professionals.
          </p>
        </div>
      </section>

      {/* Why work with us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Why Join Us</span>
            <h2 className="section-heading mt-2">More Than a Job — a Career</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="text-center p-6 rounded-2xl hover:bg-amber-50 transition-colors">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <b.icon size={28} className="text-amber-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Open Positions</h2>
          <div className="space-y-4">
            {positions.map((pos, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-slate-100 card-hover flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-slate-900">{pos.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-slate-500 mt-1">
                    <span className="flex items-center gap-1"><MapPin size={14} /> {pos.location}</span>
                    <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-xs">{pos.type}</span>
                  </div>
                </div>
                <Link to="/contact" className="btn-outline text-sm whitespace-nowrap">
                  Apply Now
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-slate-900 rounded-2xl p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-2">Don't See Your Role?</h3>
            <p className="text-slate-400 text-sm mb-4">
              We're always looking for great talent. Send us your CV and we'll keep you in mind for future opportunities.
            </p>
            <a href={`mailto:${COMPANY.email}`} className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-amber-400 transition-all">
              <Mail size={18} /> Send Your CV
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
