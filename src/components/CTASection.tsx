import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { COMPANY } from "../data/siteData";

export default function CTASection({
  title = "Let's Discuss Your Project",
  subtitle = "Free consultation with a licensed UAE engineer. Response within 24 hours.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-16 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto px-4 text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
          {title}
        </h2>
        <p className="text-slate-400 text-lg mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="btn-primary">
            Get a Free Quote <ArrowRight size={18} />
          </Link>
          <a
            href={`tel:${COMPANY.phone}`}
            className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 border-2 border-white/30 rounded-lg hover:bg-white/10 transition-all"
          >
            <Phone size={18} /> {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
