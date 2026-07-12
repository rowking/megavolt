import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { COMPANY } from "../data/siteData";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div>
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
            Get In Touch
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Free consultation with a licensed UAE engineer. Response within 24 hours.
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
                  <div className="text-sm text-slate-500">Office</div>
                  <div className="font-bold text-slate-900">{COMPANY.address}</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-amber-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Business Hours</div>
                  <div className="font-bold text-slate-900">Mon–Sat: 8am–6pm</div>
                  <div className="text-sm text-slate-500">Emergency: 24/7</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7211.5!2d55.327!3d25.263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5e4e4e4e4e4e%3A0x0!2sPort%20Saeed%2C%20Deira%2C%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
