import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "../data/siteData";
import Breadcrumbs from "../components/Breadcrumbs";
import CTASection from "../components/CTASection";

export default function FAQ() {
  const [openCategory, setOpenCategory] = useState(0);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <div>
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/6863251/pexels-photo-6863251.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="FAQ"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ label: "FAQ" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Answers to the most common questions about UAE authority approvals, MEP engineering,
            fit-out, EV charging, and more.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {FAQS.map((cat, i) => (
              <button
                key={i}
                onClick={() => setOpenCategory(i)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  openCategory === i
                    ? "bg-amber-500 text-slate-900"
                    : "bg-white text-slate-600 hover:bg-amber-50 border border-slate-200"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Questions */}
          <div className="space-y-3">
            {FAQS[openCategory].questions.map((qa, i) => {
              const key = `${openCategory}-${i}`;
              const isOpen = openQuestion === key;
              return (
                <div key={i} className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                  <button
                    onClick={() => setOpenQuestion(isOpen ? null : key)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle size={20} className="text-amber-500 flex-shrink-0" />
                      <span className="font-semibold text-slate-900">{qa.q}</span>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-slate-400 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pl-12 text-slate-600 leading-relaxed animate-fade-in">
                      {qa.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-amber-50 rounded-2xl p-6 text-center border border-amber-100">
            <h3 className="font-bold text-slate-900 mb-2">Still Have Questions?</h3>
            <p className="text-slate-600 text-sm mb-4">
              Our team is ready to help. Get a free consultation with a licensed UAE engineer.
            </p>
            <Link to="/contact" className="btn-primary text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
