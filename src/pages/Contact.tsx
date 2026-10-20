import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { COMPANY, OFFICES } from "../data/siteData";
import { HeroBackdrop } from "../components/Artwork";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div>
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <HeroBackdrop variant="contact-1" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
            Get In Touch
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Free consultation. Call, WhatsApp or email us. We are open 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Contact cards */}
            <div className="space-y-4">
              <a href={`tel:${COMPANY.phone}`} className="bg-white rounded-2xl p-6 border border-slate-100 card-hover flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Phone size={22} className="text-amber-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Call Us</div>
                  <div className="font-bold text-slate-900">{COMPANY.phone}</div>
                </div>
              </a>

              <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 border border-slate-100 card-hover flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <MessageCircle size={22} className="text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">WhatsApp</div>
                  <div className="font-bold text-slate-900">{COMPANY.phone}</div>
                </div>
              </a>

              <a href={`mailto:${COMPANY.email}`} className="bg-white rounded-2xl p-6 border border-slate-100 card-hover flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Mail size={22} className="text-amber-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Email Us</div>
                  <div className="font-bold text-slate-900">{COMPANY.email}</div>
                </div>
              </a>

              <div className="bg-white rounded-2xl p-6 border border-slate-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-amber-600" />
                </div>
                <div>
                  {OFFICES.map((office) => (
                    <div key={office.name} className="mb-3">
                      <div className="text-sm text-slate-500">{office.name}</div>
                      <div className="font-bold text-slate-900">{office.address}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-amber-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Business Hours</div>
                  <div className="font-bold text-slate-900">{COMPANY.hours}</div>
                  <div className="text-sm text-slate-500">Including urgent electrical work</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>

          {/* Maps: one per office (free Google Maps embeds, no API key or billing) */}
          <div className="grid md:grid-cols-2 gap-6">
            {OFFICES.map((office) => (
              <div key={office.name} className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white">
                <iframe
                  src={office.mapEmbed}
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Megavolt ${office.name}, Dubai`}
                />
                <div className="p-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-slate-900">{office.name}</h3>
                    <p className="text-sm text-slate-600 mt-1">{office.address}</p>
                  </div>
                  <a href={office.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-amber-600 font-semibold hover:underline whitespace-nowrap">
                    Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
