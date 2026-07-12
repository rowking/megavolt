import { Link, useParams } from "react-router-dom";
import { MapPin, ArrowRight, CheckCircle, ChevronRight, Phone } from "lucide-react";
import { LOCATIONS, COMPANY, SERVICES } from "../data/siteData";
import Breadcrumbs from "../components/Breadcrumbs";
import CTASection from "../components/CTASection";

export function LocationsOverview() {
  return (
    <div>
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1537008/pexels-photo-1537008.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Locations"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ label: "Locations" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
            Areas We Serve
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            MEP engineering, authority approvals, and fit-out services across Dubai and the wider UAE.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="group bg-white rounded-2xl p-6 border border-slate-100 card-hover"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-amber-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {loc.city}
                  </h3>
                </div>
                <p className="text-sm text-slate-600">{loc.description}</p>
                <span className="inline-flex items-center gap-1 text-amber-600 font-semibold text-sm mt-3 group-hover:gap-2 transition-all">
                  View Services <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

export function LocationDetail() {
  const { slug } = useParams();
  const location = LOCATIONS.find((l) => l.slug === slug);

  if (!location) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Location not found</h1>
        <Link to="/locations" className="text-amber-600 mt-4 inline-block">← Back to Locations</Link>
      </div>
    );
  }

  return (
    <div>
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1537008/pexels-photo-1537008.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt={location.city}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ label: "Locations", path: "/locations" }, { label: location.city }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
            MEP & Authority Approvals in {location.city}
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">{location.description}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Expert MEP Services in {location.city}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            We provide full MEP engineering, authority approval management, contracting, fit-out,
            EV charging, and solar services in {location.city}. Our local team understands the
            specific requirements of authorities in this area and has a proven track record of
            first-submission approvals.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Services Available in {location.city}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {SERVICES.map((cat) => (
              <Link
                key={cat.slug}
                to={`/services/${cat.slug}`}
                className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors"
              >
                <ChevronRight size={16} className="text-amber-400" /> {cat.category}
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why Choose Us in {location.city}</h2>
          <div className="space-y-2">
            {[
              `Local team with ${location.city}-specific authority knowledge`,
              "Fast response — 24 hours or less",
              "Registered with all relevant UAE authorities",
              "500+ projects delivered across the UAE",
              "Transparent pricing and honest timelines",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-amber-50 rounded-2xl p-6 border border-amber-100">
            <h3 className="font-bold text-slate-900 mb-2">Need a Service in {location.city}?</h3>
            <p className="text-slate-600 text-sm mb-4">Call us or send an enquiry for a free consultation.</p>
            <div className="flex gap-3">
              <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm">
                <Phone size={16} /> {COMPANY.phone}
              </a>
              <Link to="/contact" className="btn-outline text-sm">
                Send Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
