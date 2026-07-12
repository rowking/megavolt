import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram, Twitter, ChevronRight } from "lucide-react";
import { COMPANY, SERVICES, INDUSTRIES, LOCATIONS, AUTHORITY_LOGOS } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* CTA strip */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900" style={{ fontFamily: 'Montserrat' }}>
              Ready to Start Your Project?
            </h3>
            <p className="text-slate-800 mt-1">Free consultation. Response within 24 hours.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/contact" className="bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-800 transition-all">
              Get a Free Quote
            </Link>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-slate-100 transition-all flex items-center gap-2"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Authority logos strip */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center text-slate-400 text-xs uppercase tracking-wider mb-4">Registered & Approved By</div>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {AUTHORITY_LOGOS.map((auth) => (
              <div key={auth.short} className="flex flex-col items-center gap-1">
                <div className="bg-white rounded-lg p-2 shadow-md w-14 h-14 flex items-center justify-center">
                  <img src={auth.logo} alt={auth.name} className="max-w-full max-h-full object-contain" style={{ maxHeight: '36px' }} />
                </div>
                <span className="text-xs text-slate-400 font-medium">{auth.short}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/images/Mega_Volt_logo250.png"
                alt="Megavolt Technical Services"
                className="h-14 w-auto object-contain bg-white rounded-lg p-1"
              />
              <div>
                <div className="font-bold text-white text-lg" style={{ fontFamily: 'Montserrat' }}>
                  UAE Approval Hub
                </div>
                <div className="text-xs text-slate-400">Powered by {COMPANY.legal}</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Dubai's trusted MEP engineering, authority approvals, and fit-out specialist.
              Serving the UAE since {COMPANY.founded}.
            </p>
            <div className="flex gap-3 mt-4">
              {[Linkedin, Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all"
                  aria-label="Social link"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/services/${cat.slug}`}
                    className="flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    <ChevronRight size={14} /> {cat.category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Industries</h4>
            <ul className="space-y-2 text-sm">
              {INDUSTRIES.slice(0, 8).map((ind) => (
                <li key={ind.slug}>
                  <Link
                    to={`/industries/${ind.slug}`}
                    className="flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    <ChevronRight size={14} /> {ind.name.split(" ")[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Locations</h4>
            <ul className="space-y-2 text-sm">
              {LOCATIONS.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    to={`/locations/${loc.slug}`}
                    className="flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    <ChevronRight size={14} /> {loc.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">{COMPANY.address}</span>
              </li>
              <li>
                <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors">
                  <Phone size={16} className="text-amber-400" /> {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors">
                  <Mail size={16} className="text-amber-400" /> {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY.brand}. All rights reserved. | {COMPANY.legal}
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-amber-400 transition-colors">Terms of Service</Link>
            <span>TRN: {COMPANY.trn}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
