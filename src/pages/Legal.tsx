import { Link } from "react-router-dom";
import { COMPANY } from "../data/siteData";
import Breadcrumbs from "../components/Breadcrumbs";
import { HeroBackdrop } from "../components/Artwork";

function LegalHero({ title, crumb, updated = "29 October 2026" }: { title: string; crumb: string; updated?: string }) {
  return (
    <section className="relative py-16 bg-slate-900 overflow-hidden">
      <HeroBackdrop variant={crumb} skylineOn={false} />
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <Breadcrumbs items={[{ label: crumb }]} />
        <h1 className="text-4xl font-bold text-white" style={{ fontFamily: "Montserrat, Inter, system-ui, sans-serif" }}>
          {title}
        </h1>
        <p className="text-slate-300 mt-3">Last updated {updated}</p>
      </div>
    </section>
  );
}

function Section({ h, children }: { h: string; children: React.ReactNode }) {
  return (
    <>
      <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">{h}</h2>
      <div className="text-slate-600 leading-relaxed space-y-3">{children}</div>
    </>
  );
}

export function Privacy() {
  return (
    <div>
      <LegalHero title="Privacy Policy" crumb="Privacy Policy" updated="30 October 2026" />
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-slate-600 leading-relaxed">
            This policy explains how {COMPANY.legal} ("Megavolt", "we"), a company licensed in Dubai,
            United Arab Emirates, handles personal data you share with us through this website, by phone,
            WhatsApp or email. We handle it in line with UAE law, including Federal Decree-Law No. 45 of
            2021 on the Protection of Personal Data.
          </p>
          <Section h="What we collect">
            <p>
              <strong>Enquiries.</strong> When you use our enquiry form, the details you enter (name, email,
              phone, company, the service you need and your project details) are placed into a WhatsApp
              message or an email on your own device. This website does not store them. We receive them
              only when you press Send, and then keep them in WhatsApp and our email.
            </p>
            <p>
              <strong>Calls, WhatsApp and email.</strong> When you contact us directly we receive your
              number or email address and whatever you choose to tell us about your project.
            </p>
            <p>
              <strong>Technical data.</strong> Our hosting provider records standard technical information,
              such as your IP address, browser type and the pages requested, to deliver the site and keep it
              secure. We also use Vercel Speed Insights, which measures page speed using anonymous data and
              does not use cookies.
            </p>
          </Section>
          <Section h="How we use it">
            <p>
              We use your details only to reply to your enquiry, prepare a quotation, carry out and invoice
              the work, and submit applications to authorities such as DEWA when you ask us to. We do not
              sell your information or use it for unrelated marketing.
            </p>
          </Section>
          <Section h="Who we share it with">
            <p>
              We share project details only where the work requires it, for example with DEWA, Dubai
              Municipality, Dubai Civil Defence, RTA, your landlord or building management, or a specialist
              subcontractor working on your project.
            </p>
            <p>Services we rely on to run this website and talk to you:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Vercel (website hosting and speed measurement)</li>
              <li>Google Maps (office maps on the Contact page)</li>
              <li>WhatsApp (Meta), when you message us or send the enquiry form</li>
              <li>Our email provider, when you email us</li>
            </ul>
            <p>
              Some of these providers may process data outside the UAE under their own privacy policies.
              See our <Link to="/cookies" className="text-amber-700 underline">Cookie Policy</Link> for
              details of the Google services.
            </p>
          </Section>
          <Section h="How long we keep it">
            <p>
              We keep enquiry and project records for as long as needed for the project, warranty and our
              legal and accounting obligations in the UAE. Enquiries that do not lead to a project are
              deleted when they are no longer needed.
            </p>
          </Section>
          <Section h="Your rights">
            <p>
              You can ask us to see, correct or delete your personal data, to stop using it, or to give you
              a copy, by emailing{" "}
              <a href={`mailto:${COMPANY.email}`} className="text-amber-700 underline">{COMPANY.email}</a>.
              We reply within 30 days. Some records may need to be kept where the law requires it.
            </p>
          </Section>
          <Section h="Changes">
            <p>We may update this policy. The date at the top shows the latest version.</p>
          </Section>
          <Section h="Contact">
            <p>
              {COMPANY.legal}, {COMPANY.address}. Phone {COMPANY.phone}. Email{" "}
              <a href={`mailto:${COMPANY.email}`} className="text-amber-700 underline">{COMPANY.email}</a>.
            </p>
          </Section>
        </div>
      </section>
    </div>
  );
}

export function Terms() {
  return (
    <div>
      <LegalHero title="Terms of Use" crumb="Terms of Use" updated="30 October 2026" />
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-slate-600 leading-relaxed">
            These terms apply to your use of megavolt.ae, operated by {COMPANY.legal}.
          </p>
          <Section h="Information on this site">
            <p>
              Our guides and answers are general information about electrical works and authority
              approvals in Dubai. Authority requirements, fees and timelines change, so always confirm
              them for your own project. Nothing on this site is a quotation or a binding offer;
              work is carried out under a separate written quotation.
            </p>
          </Section>
          <Section h="Authority fees">
            <p>
              Charges made by DEWA and other authorities are set and billed by those authorities and
              are separate from our fees unless a quotation says otherwise.
            </p>
          </Section>
          <Section h="Content">
            <p>
              The text, project photos and illustrations on this site belong to {COMPANY.legal} and may
              not be copied without permission. Some general photos of buildings and equipment are stock
              images used under the Unsplash licence; they illustrate types of work and are not photos of our
              projects. Authority names and logos belong to their owners and are shown only to identify the
              authorities we submit to; their use does not mean those authorities endorse us.
            </p>
          </Section>
          <Section h="Links">
            <p>Links to other websites are provided for convenience; we are not responsible for their content.</p>
          </Section>
          <Section h="Governing law">
            <p>These terms are governed by the laws of the Emirate of Dubai and the UAE.</p>
          </Section>
        </div>
      </section>
    </div>
  );
}

export function Cookies() {
  return (
    <div>
      <LegalHero title="Cookie Policy" crumb="Cookie Policy" updated="30 October 2026" />
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-slate-600 leading-relaxed">
            Cookies are small files a website stores in your browser. This page explains what megavolt.ae
            uses.
          </p>
          <Section h="Our own cookies">
            <p>
              None. This website does not set its own cookies and does not use advertising or analytics
              cookies. Page speed is measured with Vercel Speed Insights, which does not use cookies.
            </p>
          </Section>
          <Section h="Third-party services">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Google Maps</strong> (Contact page). The embedded maps are provided by Google, which
                receives your IP address and may set its own cookies when the maps load. See Google's
                privacy policy at policies.google.com/privacy.
              </li>
              <li>
                <strong>Fonts and images</strong>. Our fonts and photos are served from our own website, so
                no third party receives your details when they load.
              </li>
              <li>
                <strong>WhatsApp</strong>. Opens only when you click a WhatsApp link or send the enquiry
                form, and then follows WhatsApp's own terms.
              </li>
            </ul>
          </Section>
          <Section h="Your choices">
            <p>
              You can block or delete cookies in your browser settings. Blocking third-party cookies will
              not stop this website from working, though the embedded maps may not display.
            </p>
          </Section>
          <Section h="Contact">
            <p>
              Questions:{" "}
              <a href={`mailto:${COMPANY.email}`} className="text-amber-700 underline">{COMPANY.email}</a>.
              See also our <Link to="/privacy" className="text-amber-700 underline">Privacy Policy</Link>.
            </p>
          </Section>
        </div>
      </section>
    </div>
  );
}

export function NotFound() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-xl mx-auto px-4 text-center">
        <p className="text-amber-700 font-bold">404</p>
        <h1 className="text-3xl font-bold text-slate-900 mt-2" style={{ fontFamily: "Montserrat, Inter, system-ui, sans-serif" }}>
          This page doesn't exist
        </h1>
        <p className="text-slate-600 mt-3">It may have moved. These pages will help:</p>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <Link to="/" className="btn-primary">Home</Link>
          <Link to="/services" className="btn-outline">Services</Link>
          <Link to="/contact" className="btn-outline">Contact</Link>
        </div>
      </div>
    </section>
  );
}
