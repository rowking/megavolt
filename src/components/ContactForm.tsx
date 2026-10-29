import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { Send, CheckCircle, Mail } from "lucide-react";
import { COMPANY } from "../data/siteData";

type Sent = { text: string; mailto: string };

/**
 * The site has no server, so the enquiry is handed to WhatsApp (pre-filled) with an
 * email link as the alternative. Nothing is stored or sent by the website itself.
 */
export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const uid = useId();
  const [sent, setSent] = useState<Sent | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const v = (k: string) => String(d.get(k) || "").trim();
    const lines = [
      "Website enquiry (megavolt.ae)",
      `Name: ${v("name")}`,
      `Email: ${v("email")}`,
      `Phone: ${v("phone")}`,
      v("company") && `Company: ${v("company")}`,
      `Service: ${v("service")}`,
      `Details: ${v("details")}`,
    ].filter(Boolean) as string[];
    const text = lines.join("\n");
    const mailto = `mailto:${COMPANY.email}?subject=${encodeURIComponent(`Website enquiry: ${v("service")}`)}&body=${encodeURIComponent(text)}`;
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent({ text, mailto });
  };

  const cols = compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2";
  const label = "block text-sm font-medium text-slate-700 mb-1";

  if (sent) {
    return (
      <div role="status" aria-live="polite" className={`bg-green-50 border border-green-200 rounded-xl p-8 text-center ${compact ? "" : "py-16"}`}>
        <CheckCircle size={48} className="text-green-600 mx-auto mb-4" aria-hidden="true" />
        <h3 className="text-xl font-bold text-slate-900 mb-2">Almost done: press Send in WhatsApp</h3>
        <p className="text-slate-700">
          WhatsApp has opened in a new tab with your enquiry filled in. Your enquiry reaches us only
          after you press Send there.
        </p>
        <p className="text-slate-700 mt-3">
          No WhatsApp? <a href={sent.mailto} className="text-amber-700 font-semibold underline inline-flex items-center gap-1"><Mail size={16} aria-hidden="true" /> Send it by email instead</a>, or call{" "}
          <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="text-amber-700 font-semibold underline">{COMPANY.phone}</a>.
        </p>
        <button type="button" onClick={() => setSent(null)} className="btn-outline mt-6">Edit enquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-describedby={`${uid}-note`}>
      <div className={`grid ${cols} gap-4`}>
        <div>
          <label htmlFor={`${uid}-name`} className={label}>Full name <span aria-hidden="true">*</span></label>
          <input id={`${uid}-name`} name="name" type="text" autoComplete="name" required className="input-field" />
        </div>
        <div>
          <label htmlFor={`${uid}-email`} className={label}>Email address <span aria-hidden="true">*</span></label>
          <input id={`${uid}-email`} name="email" type="email" autoComplete="email" required className="input-field" />
        </div>
      </div>
      <div className={`grid ${cols} gap-4`}>
        <div>
          <label htmlFor={`${uid}-phone`} className={label}>Phone number <span aria-hidden="true">*</span></label>
          <input id={`${uid}-phone`} name="phone" type="tel" autoComplete="tel" required className="input-field" />
        </div>
        <div>
          <label htmlFor={`${uid}-company`} className={label}>Company name (optional)</label>
          <input id={`${uid}-company`} name="company" type="text" autoComplete="organization" className="input-field" />
        </div>
      </div>
      <div>
        <label htmlFor={`${uid}-service`} className={label}>Service needed <span aria-hidden="true">*</span></label>
        <select id={`${uid}-service`} name="service" required className="input-field" defaultValue="">
        <option value="" disabled>Select a service</option>
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
      </div>
      <div>
        <label htmlFor={`${uid}-details`} className={label}>Project details <span aria-hidden="true">*</span></label>
        <textarea
          id={`${uid}-details`}
          name="details"
          required
          rows={compact ? 3 : 5}
          placeholder="Property type, location and what you need"
          className="input-field resize-none"
        />
      </div>
      <button type="submit" className="btn-primary w-full justify-center">
        <Send size={18} aria-hidden="true" /> Send enquiry via WhatsApp
      </button>
      <p id={`${uid}-note`} className="text-xs text-slate-600 text-center">
        Fields marked * are required. Your enquiry opens in WhatsApp for you to send; we use it only to
        reply and quote, as explained in our{" "}
        <Link to="/privacy" className="underline text-slate-800">Privacy Policy</Link>.
      </p>
    </form>
  );
}
