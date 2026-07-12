import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { COMPANY } from "../data/siteData";

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-xl p-8 text-center ${compact ? "" : "py-16"}`}>
        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h3>
        <p className="text-slate-600">
          We've received your enquiry. Our team will respond within 24 hours.
          For urgent matters, call us at <a href={`tel:${COMPANY.phone}`} className="text-amber-600 font-semibold">{COMPANY.phone}</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={`grid ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"} gap-4`}>
        <input type="text" placeholder="Full Name *" required className="input-field" />
        <input type="email" placeholder="Email Address *" required className="input-field" />
      </div>
      <div className={`grid ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"} gap-4`}>
        <input type="tel" placeholder="Phone Number *" required className="input-field" />
        <input type="text" placeholder="Company Name" className="input-field" />
      </div>
      <select required className="input-field" defaultValue="">
        <option value="" disabled>Select Service Needed *</option>
        <optgroup label="MEP Consultancy">
          <option>Electrical Design</option>
          <option>Mechanical Design</option>
          <option>Plumbing Design</option>
          <option>ELV Systems</option>
          <option>Load Calculation</option>
          <option>Shop Drawings</option>
          <option>As-Built Drawings</option>
        </optgroup>
        <optgroup label="Authority Approvals">
          <option>DEWA Approval</option>
          <option>Dubai Municipality</option>
          <option>Dubai Civil Defence (DCD)</option>
          <option>RTA Approval</option>
          <option>Trakhees</option>
          <option>JAFZA</option>
          <option>Dubai South</option>
          <option>Nakheel</option>
          <option>TECOM</option>
          <option>Etisalat / e&</option>
          <option>du Telecom</option>
          <option>Empower</option>
          <option>Emicool</option>
        </optgroup>
        <optgroup label="MEP Contracting">
          <option>Electrical Installation</option>
          <option>Mechanical Works</option>
          <option>Plumbing Works</option>
          <option>Fire Fighting</option>
          <option>Fire Alarm</option>
          <option>HVAC Systems</option>
          <option>Testing & Commissioning</option>
          <option>Annual Maintenance</option>
        </optgroup>
        <optgroup label="Fit-out Services">
          <option>Office Fit-out</option>
          <option>Restaurant Fit-out</option>
          <option>Retail Fit-out</option>
          <option>Warehouse Fit-out</option>
          <option>Villa Renovation</option>
          <option>Interior Design</option>
          <option>Joinery</option>
        </optgroup>
        <optgroup label="EV Solutions">
          <option>EV Charger Installation</option>
          <option>DEWA EV Approval</option>
          <option>Commercial Charging</option>
          <option>Residential Charging</option>
          <option>Load Upgrade</option>
        </optgroup>
        <optgroup label="Solar Solutions">
          <option>Solar PV Design</option>
          <option>DEWA Solar Approval</option>
          <option>Solar Installation</option>
        </optgroup>
        <option>Other / Not Sure</option>
      </select>
      <textarea
        placeholder="Project Details *"
        required
        rows={compact ? 3 : 5}
        className="input-field resize-none"
      />
      <button type="submit" className="btn-primary w-full justify-center">
        <Send size={18} /> Send Enquiry
      </button>
      <p className="text-xs text-slate-500 text-center">
        By submitting, you agree to our Privacy Policy. We respond within 24 hours.
      </p>
    </form>
  );
}
