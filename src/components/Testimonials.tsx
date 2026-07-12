import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/siteData";

export default function Testimonials({ limit }: { limit?: number }) {
  const testimonials = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="section-heading mt-2">What Our Clients Say</h2>
          <p className="section-subheading mx-auto text-center">
            Trusted by 300+ businesses across Dubai and the wider UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm card-hover border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-6 text-amber-100" size={48} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={18} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 relative z-10">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
