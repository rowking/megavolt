/**
 * Keyword landing pages (Oct 2026) and homepage FAQ.
 * Each page targets one main search and has its own content, so it is not a copy of the
 * service template pages (which stay noindex). Facts here match the guides on
 * uaeapprovalhub.com and the real projects in siteData.ts. No prices (owner's decision).
 */
import type { SiteImage } from "./images";
import { SERVICE_IMAGES } from "./images";

export type Faq = { q: string; a: string };

export type LandingPage = {
  path: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string[];
  image: SiteImage;
  services: { name: string; desc: string; link?: string }[];
  steps: { title: string; desc: string }[];
  choose: { title: string; points: string[] };
  projectSlugs: string[];
  areas: string[];
  faq: Faq[];
};

export const HOME_FAQ: Faq[] = [
  {
    q: "Is Megavolt a DEWA approved contractor?",
    a: "Yes. Megavolt Technical Services Co. LLC is a DEWA registered (enrolled) contractor in Dubai. DEWA accepts electricity connection, load and meter applications only from enrolled contractors and consultants, so we prepare and submit them for you.",
  },
  {
    q: "What does an MEP contractor do in Dubai?",
    a: "An MEP contractor designs and installs the mechanical (AC and ventilation), electrical and plumbing systems of a building, and coordinates the approvals they need, such as DEWA for power, Dubai Civil Defence for fire alarm and emergency lighting, and Dubai Municipality, DDA or Trakhees for the building permit.",
  },
  {
    q: "Do you handle RTA NOC and Dubai Municipality approvals?",
    a: "Yes. We prepare the drawings and submissions for DEWA, RTA NOCs, Dubai Municipality, Dubai Civil Defence and free zone authorities, and follow up on comments. Detailed approval guides are on our division's site, UAE Approval Hub.",
  },
  {
    q: "How do I choose the best electrical contractor in Dubai?",
    a: "Check that the contractor is DEWA enrolled, prepares the load schedules and drawings in-house, handles the landlord NOC and authority submissions, gives a written scope, and hands over test results and as-built drawings at the end.",
  },
  {
    q: "Are you available for urgent electrical work?",
    a: "Yes. We are open 24 hours. Call or WhatsApp +971 56 596 6254 for urgent electrical faults and power issues in Dubai.",
  },
];

const DUBAI_AREAS = [
  "Deira", "Bur Dubai", "Al Quoz", "Business Bay", "Downtown Dubai", "JLT", "Dubai Marina",
  "Jumeirah", "Al Barsha", "Dubai Investments Park", "JAFZA", "Dubai South", "International City",
  "Dubai Hills", "Dubai Festival City", "Al Warqa",
];

export const LANDING_PAGES: LandingPage[] = [
  {
    path: "/electrical-contractor-dubai",
    title: "Electrical Contractor in Dubai | DEWA Registered | Megavolt",
    description:
      "DEWA registered electrical contractor in Dubai for DB and panel upgrades, power upgrades, new and separate meters, wiring and fit-outs. Drawings and DEWA approval included. Open 24 hours.",
    h1: "Electrical Contractor in Dubai",
    eyebrow: "DEWA Registered Electrical Contractor",
    intro: [
      "Megavolt Technical Services is a DEWA registered electrical contractor in Dubai, working since 2020 on villas, apartments, offices, shops, restaurants, warehouses and factories.",
      "Most electrical jobs in Dubai need more than an electrician. A power upgrade, a new meter or a fit-out needs load schedules, drawings, a landlord NOC and DEWA approval before the supply is released. Our engineers prepare these in-house and our site team carries out the installation, so you deal with one contractor from survey to handover.",
    ],
    image: SERVICE_IMAGES["mep-contracting"],
    services: [
      { name: "DB & panel upgrades", desc: "Main and sub-distribution boards, MDB and SMDB replacement, breakers and earthing.", link: "/services/mep-contracting" },
      { name: "Power & load upgrades", desc: "More load for new ACs, kitchens, machines or EV chargers, with the DEWA load increase.", link: "/blog/electrical-load-upgrade-dubai" },
      { name: "New & separate meters", desc: "New connections, meter separation and sub-metering for buildings, shops and split units.", link: "/services/authority-approvals" },
      { name: "Fit-out electrical works", desc: "Lighting and power, DBs, emergency lighting and supplies for fire alarm in offices, shops and clinics.", link: "/services/fit-out-services" },
      { name: "Electrical drawings", desc: "Single line diagrams, load schedules, cable sizing and as-built drawings for DEWA submissions.", link: "/services/mep-consultancy" },
      { name: "Maintenance & faults", desc: "Fault finding, testing and urgent repairs. We are open 24 hours.", link: "/contact" },
    ],
    steps: [
      { title: "Site survey", desc: "We check the existing board, cables, approved load and what you need to add." },
      { title: "Design & drawings", desc: "Load calculation, load schedules, single line diagram and layouts in DEWA's format." },
      { title: "Approvals", desc: "Landlord NOC, DEWA submission and follow-up, plus DM, Civil Defence or RTA where the job needs them." },
      { title: "Installation", desc: "Our team installs boards, cables, meters and protection, planned around your operations." },
      { title: "Testing & handover", desc: "Testing, DEWA inspection, supply release, test results and as-built drawings." },
    ],
    choose: {
      title: "How to choose the best electrical contractor in Dubai",
      points: [
        "DEWA enrolment: only enrolled contractors can submit meter, fit-out and load applications.",
        "Drawings in-house: load schedules and single line diagrams that match the panel avoid DEWA comments.",
        "Approvals included: the landlord NOC and authority submissions should be part of the scope, not left to you.",
        "Written scope: drawings, approvals, materials, testing and exclusions listed in the quotation.",
        "Handover: insulation and earth test results and as-built drawings at the end of the job.",
        "Reachability: someone who answers when the power goes off, not only in office hours.",
      ],
    },
    projectSlugs: ["dip-bateel-factory-lv-panels", "jafza-warehouse-power-upgrade", "al-quoz-warehouse-db-sub-metering", "jumeirah-villa-external-db"],
    areas: DUBAI_AREAS,
    faq: [
      { q: "Can I apply to DEWA myself for a load increase or new meter?", a: "No. DEWA accepts electricity permit and connection applications only from enrolled consultants and contractors. The owner appoints one, signs DEWA's supply terms and pays DEWA's connection invoice." },
      { q: "How long does a DEWA approval take?", a: "DEWA publishes 1 working day for LV design approval on most fit-out and smaller load applications. In practice design approval often takes 4 to 7 working days, plus the time for drawings, the landlord NOC, works and inspection." },
      { q: "Do you work on villas as well as commercial buildings?", a: "Yes. We work on villas and apartments as well as offices, shops, restaurants, warehouses and factories across Dubai." },
      { q: "Do you give a free quote?", a: "Yes. Tell us about the property and what you need, and we will survey and send a written quote covering the drawings, approvals and works. DEWA's own charges are billed by DEWA separately." },
    ],
  },
  {
    path: "/mep-contractor-dubai",
    title: "MEP Contractor in Dubai: Electrical, AC & Plumbing | Megavolt",
    description:
      "MEP contractor in Dubai for electrical, HVAC, plumbing and fire life safety works in offices, shops, restaurants, villas and warehouses, with DEWA, Civil Defence and DM approvals coordinated.",
    h1: "MEP Contractor in Dubai",
    eyebrow: "Mechanical · Electrical · Plumbing",
    intro: [
      "Megavolt Technical Services is an MEP contractor in Dubai. We design and install the electrical, mechanical (AC and ventilation) and plumbing systems for fit-outs, modifications and new units, and coordinate the authority approvals they need.",
      "In Dubai the approvals overlap: DEWA reviews the electrical load, Dubai Civil Defence reviews fire alarm and emergency lighting, and Dubai Municipality, DDA or Trakhees review the fit-out drawings. One MEP team coordinates the layouts once and submits in parallel, which is where most of the time is saved.",
    ],
    image: SERVICE_IMAGES["mep-consultancy"],
    services: [
      { name: "Electrical works", desc: "Distribution boards, power and lighting, cabling, earthing, meters and load upgrades.", link: "/electrical-contractor-dubai" },
      { name: "HVAC & ventilation", desc: "AC installation and modification, ducting and ventilation for fit-outs.", link: "/services/mep-contracting" },
      { name: "Plumbing & drainage", desc: "Water supply, drainage and water metering for units and buildings.", link: "/services/mep-contracting" },
      { name: "Fire & life safety", desc: "Emergency lighting and fire alarm supplies, coordinated with DCD-approved fire contractors.", link: "/blog/dubai-civil-defence-approval-guide" },
      { name: "MEP design & drawings", desc: "Electrical, mechanical and plumbing design, shop drawings and as-built drawings.", link: "/services/mep-consultancy" },
      { name: "Fit-out MEP", desc: "Complete MEP for office, shop, restaurant and clinic fit-outs.", link: "/services/fit-out-services" },
    ],
    steps: [
      { title: "Brief & survey", desc: "We review the unit, the landlord's fit-out guidelines and the base-build drawings." },
      { title: "Coordinated design", desc: "Electrical, AC, plumbing and fire layouts drawn together so they do not clash." },
      { title: "Parallel approvals", desc: "DEWA, Civil Defence and the building permit submitted together, not one after another." },
      { title: "Installation", desc: "Our MEP team installs and coordinates with the fit-out contractor on site." },
      { title: "Testing & completion", desc: "Testing and commissioning, inspections and completion certificates." },
    ],
    choose: {
      title: "What to check before hiring an MEP contractor in Dubai",
      points: [
        "One team for design and installation, so drawing changes do not break other approvals.",
        "Experience with DEWA, Dubai Civil Defence and the right building authority for your plot.",
        "Approvals run in parallel, not one after another.",
        "A clear written scope for each trade: electrical, AC, plumbing and fire.",
        "Testing, commissioning records and as-built drawings at handover.",
      ],
    },
    projectSlugs: ["dubai-hills-bega-office-fit-out", "oud-metha-office-fit-out", "al-barsha-office-fit-out", "liwan-shop-db-metering"],
    areas: DUBAI_AREAS,
    faq: [
      { q: "What does MEP stand for?", a: "Mechanical, electrical and plumbing: the AC and ventilation, power and lighting, and water and drainage systems of a building. Fire alarm and emergency lighting are usually coordinated as part of MEP." },
      { q: "Does a fit-out need Civil Defence approval?", a: "Most office, shop, restaurant and clinic fit-outs do, because they change partitions, ceilings, fire alarm and emergency lighting coverage. Fire systems are installed by DCD-approved fire contractors." },
      { q: "Which authority approves my fit-out?", a: "Most of mainland Dubai is under Dubai Municipality, the TECOM communities under DDA, and JAFZA and other PCFC areas under Trakhees. Your affection plan shows which one applies. DEWA still supplies power in most of these areas." },
      { q: "Can you work with my fit-out or interior contractor?", a: "Yes. We often handle the MEP and approvals while another company handles the interior works." },
    ],
  },
  {
    path: "/ev-charger-installation-dubai",
    title: "EV Charger Installation in Dubai | Home & Commercial | Megavolt",
    description:
      "EV charger installation in Dubai for villas, apartments, offices and car parks: load check, DEWA requirements, building NOC and safe installation by a DEWA registered contractor.",
    h1: "EV Charger Installation in Dubai",
    eyebrow: "Home & Commercial EV Charging",
    intro: [
      "We install EV chargers in villas, apartments, offices, malls and car parks in Dubai. Before any charger goes on the wall, we check that your supply can carry it, that the model meets DEWA's requirements, and whether your building needs to issue a NOC.",
      "A home charger adds a large continuous load. Plugging it into an ordinary socket, or onto a board that is already near its limit, is not safe. We install a dedicated circuit with the right cable, protection and earthing, and arrange a DEWA load increase first if the supply is too small.",
    ],
    image: SERVICE_IMAGES["ev-solutions"],
    services: [
      { name: "Villa chargers", desc: "Wall chargers on a dedicated circuit, with a load check of the villa's DB and supply." },
      { name: "Apartment chargers", desc: "Chargers in residential car parks, with the building management or developer NOC." },
      { name: "Commercial & mall charging", desc: "Multiple chargers for offices, malls and fleets, with load planning and metering." },
      { name: "Load upgrades for EV", desc: "DEWA load increase and board upgrade when the existing supply is not enough.", link: "/blog/electrical-load-upgrade-dubai" },
      { name: "Charger advice", desc: "We recommend a charger rating that suits your car, supply and parking." },
      { name: "Testing & handover", desc: "Testing, protection checks and handover documents." },
    ],
    steps: [
      { title: "Survey", desc: "We check the DB, cable route, parking and the supply's spare capacity." },
      { title: "Recommendation", desc: "Charger rating, cable size, protection and any load upgrade needed." },
      { title: "Approvals & NOC", desc: "Building management or developer NOC and DEWA requirements." },
      { title: "Installation", desc: "Dedicated circuit, isolator, protection and earthing, installed neatly." },
      { title: "Test & handover", desc: "Testing, a demonstration and handover paperwork." },
    ],
    choose: {
      title: "Before you buy an EV charger in Dubai",
      points: [
        "Check your board and supply can carry the extra continuous load.",
        "Choose a charger model that meets DEWA's requirements for chargers on its network.",
        "In apartments and gated communities, get the building management or developer NOC first.",
        "Use a DEWA enrolled contractor and a dedicated circuit, never an ordinary socket.",
      ],
    },
    projectSlugs: ["al-badia-residences-ev-charger", "sahara-centre-ev-charger-installation"],
    areas: DUBAI_AREAS,
    faq: [
      { q: "Do I need approval to install an EV charger at home in Dubai?", a: "The charger should meet DEWA's requirements and be installed by a DEWA enrolled contractor. In apartments and managed communities you also need a NOC from building management or the developer." },
      { q: "Can my villa supply handle an EV charger?", a: "Often yes, but a home charger is a large continuous load. We check the board and supply first; if there is not enough spare capacity, a DEWA load increase is needed before installation." },
      { q: "Can I plug my EV into a normal socket?", a: "Not for regular charging. Ordinary sockets and circuits are not designed for hours of high continuous current. A dedicated charger circuit with the correct protection is the safe option." },
      { q: "Do you install chargers in malls and offices?", a: "Yes. We have installed floor-standing fast chargers in a shopping centre car park and wall chargers in residential buildings, and we plan load and metering for multiple chargers." },
    ],
  },
];
