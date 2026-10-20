import { Link } from "react-router-dom";
import { COMPANY } from "../data/siteData";
import Breadcrumbs from "../components/Breadcrumbs";
import { HeroBackdrop } from "../components/Artwork";

function LegalHero({ title, crumb }: { title: string; crumb: string }) {
  return (
    <section className="relative py-16 bg-slate-900 overflow-hidden">
      <HeroBackdrop variant={crumb} skylineOn={false} />
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <Breadcrumbs items={[{ label: crumb }]} />
        <h1 className="text-4xl font-bold text-white" style={{ fontFamily: "Montserrat" }}>
          {title}
        </h1>
        <p className="text-slate-300 mt-3">Last updated 20 October 2026</p>
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
      <LegalHero title="Privacy Policy" crumb="Privacy Policy" />
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-slate-600 leading-relaxed">
            This policy explains how {COMPANY.legal} ("Megavolt", "we") handles information you
            send us through this website, by phone, WhatsApp or email.
          </p>
          <Section h="What we collect">
            <p>
              When you send an enquiry we receive the details you enter, such as your name, phone
              number, email address, the property or project location and a description of the work.
              Our hosting provider also records standard technical information, such as your IP
              address and browser type, to keep the site secure and measure its speed.
            </p>
          </Section>
          <Section h="How we use it">
            <p>
              We use your details only to reply to your enquiry, prepare a quotation, carry out and
              invoice the work, and submit applications to authorities such as DEWA when you ask us to.
              We do not sell your information or use it for unrelated marketing.
            </p>
          </Section>
          <Section h="Who we share it with">
            <p>
              We share project details only where the work requires it, for example with DEWA,
              Dubai Municipality, Dubai Civil Defence, your landlord or building management, or a
              specialist subcontractor working on your project.
            </p>
          </Section>
          <Section h="How long we keep it">
            <p>
              We keep enquiry and project records for as long as needed for the project, warranty and
              our legal and accounting obligations in the UAE.
            </p>
          </Section>
          <Section h="Your choices">
            <p>
              You can ask us to see, correct or delete your details by emailing{" "}
              <a href={`mailto:${COMPANY.email}`} className="text-amber-600 hover:underline">{COMPANY.email}</a>.
            </p>
          </Section>
          <Section h="Contact">
            <p>
              {COMPANY.legal}, {COMPANY.address}. Registered office: {COMPANY.registeredOffice}.
              Phone {COMPANY.phone}.
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
      <LegalHero title="Terms of Use" crumb="Terms of Use" />
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
              The text and illustrations on this site belong to {COMPANY.legal}. Authority names and
              logos belong to their owners and are shown only to identify the authorities we submit to.
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

export function NotFound() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-xl mx-auto px-4 text-center">
        <p className="text-amber-600 font-bold">404</p>
        <h1 className="text-3xl font-bold text-slate-900 mt-2" style={{ fontFamily: "Montserrat" }}>
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
