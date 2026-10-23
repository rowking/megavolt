/*
 * Page-specific copy, so every industry, location and article page says
 * something of its own instead of repeating one template.
 */

export type IndustryContent = {
  intro: string;
  focus: string[];
  authorities: string[];
};

export const INDUSTRY_CONTENT: Record<string, IndustryContent> = {
  warehouses: {
    intro:
      "Warehouses usually need more power than the unit was first built for: racking lights, forklift charging, cold rooms and dock equipment all add load. We size the supply, prepare the load schedule and handle the DEWA load approval before the equipment arrives.",
    focus: [
      "Power upgrades and new MDB or SMDB for added equipment",
      "High-bay LED lighting layouts and emergency lighting",
      "Dedicated circuits for forklift charging and cold rooms",
      "Approvals in JAFZA (Trakhees), Dubai South and mainland industrial areas",
    ],
    authorities: ["DEWA", "Trakhees", "Dubai South", "Dubai Municipality", "Dubai Civil Defence"],
  },
  offices: {
    intro:
      "Office fit-outs change partitions, ceilings and power layouts, so they normally need Dubai Municipality and Civil Defence approval, or DDA approval in TECOM communities. We prepare the electrical drawings and run the approvals in parallel so the fit-out is not held up at handover.",
    focus: [
      "Small power, lighting and data layouts for the new floor plan",
      "Sub-metering for shared floors and separate tenants",
      "DB modifications and load checks against the building's approved schedule",
      "Emergency lighting coverage that matches the new partitions",
    ],
    authorities: ["DEWA", "Dubai Municipality", "Dubai Civil Defence", "DDA"],
  },
  villas: {
    intro:
      "Most villa work starts with a load question: a new AC system, a pool, an EV charger or an extension. We check what the existing supply can carry, apply to DEWA for a load increase if needed, and replace or extend the distribution boards.",
    focus: [
      "DEWA load increase applications for villas",
      "DB replacement, rewiring and earthing checks",
      "EV charger installation with the right protection",
      "Rooftop solar under DEWA's Shams Dubai scheme",
    ],
    authorities: ["DEWA", "Dubai Municipality"],
  },
  hotels: {
    intro:
      "Hotels run around the clock, so electrical works are phased floor by floor or room by room to keep guests unaffected. We plan shutdowns with the hotel's engineering team and keep each phase within its approval.",
    focus: [
      "Phased room and corridor upgrades with planned shutdowns",
      "Kitchen and F&B outlet power for new equipment",
      "Back-of-house DB upgrades and sub-metering",
      "Emergency lighting and supplies for fire systems, coordinated with DCD-approved fire contractors",
    ],
    authorities: ["DEWA", "Dubai Municipality", "Dubai Civil Defence"],
  },
  hospitals: {
    intro:
      "Clinics and medical centres need reliable, well-separated circuits and premises that pass licensing inspections. We design and install power for treatment rooms and equipment and keep works away from patient areas.",
    focus: [
      "Clinic fit-out electrical design and installation",
      "Dedicated circuits for medical and IT equipment, with UPS supplies where required",
      "Emergency lighting and clear circuit labelling for inspections",
      "Out-of-hours work to avoid disturbing patients",
    ],
    authorities: ["DEWA", "Dubai Municipality", "Dubai Civil Defence"],
  },
  schools: {
    intro:
      "School and nursery works are best done in the holidays, with safe, closed-off work areas when term is running. We plan the programme around the academic calendar and hand over with test certificates.",
    focus: [
      "Classroom lighting and power upgrades",
      "Added load for new air-conditioning and labs",
      "Emergency lighting and exit signage checks",
      "Works scheduled for holidays and weekends",
    ],
    authorities: ["DEWA", "Dubai Municipality", "Dubai Civil Defence"],
  },
  retail: {
    intro:
      "Shops and showrooms usually need mall or landlord approval as well as the authority approvals. We prepare the electrical drawings in the format the mall asks for and arrange separate DEWA metering where the unit needs its own meter.",
    focus: [
      "Shop and showroom lighting, display and signage power",
      "New or separate DEWA meters for retail units",
      "Drawings for mall management and landlord approval",
      "Night-time works to suit mall opening hours",
    ],
    authorities: ["DEWA", "Dubai Municipality", "Dubai Civil Defence"],
  },
  restaurants: {
    intro:
      "Kitchens bring heavy three-phase loads: ovens, fryers, dishwashers, cold rooms and extract fans. We size the supply for the equipment list, prepare the load schedule and coordinate with the hood suppression and fire alarm contractors.",
    focus: [
      "Kitchen equipment power and load schedules",
      "Extract and fresh-air fan supplies",
      "DEWA load increase where the unit's supply is too small",
      "Coordination with DCD-approved contractors for hood suppression and fire alarm",
    ],
    authorities: ["DEWA", "Dubai Municipality", "Dubai Civil Defence", "DMCC"],
  },
  factories: {
    intro:
      "Production lines add motor loads that affect the whole installation. We assess the existing supply, plan upgrades to the main panels and keep shutdowns short.",
    focus: [
      "MDB, SMDB and motor control panel upgrades",
      "Power factor correction to reduce losses on the supply",
      "Cable sizing for new machines and production lines",
      "Approvals in JAFZA, Dubai Industrial City and other industrial areas",
    ],
    authorities: ["DEWA", "Trakhees", "Dubai Municipality", "Dubai Civil Defence"],
  },
  "data-centres": {
    intro:
      "Server and comms rooms need clean, dedicated power and a supply that does not drop. We install dedicated circuits, UPS supplies and the power for cooling equipment, sized for the racks you have and the ones you plan to add.",
    focus: [
      "Dedicated server room and comms room circuits",
      "UPS supplies and changeover arrangements",
      "Power for precision cooling units",
      "Containment, cable routes and labelling for easy maintenance",
    ],
    authorities: ["DEWA", "Dubai Municipality", "Dubai Civil Defence"],
  },
  government: {
    intro:
      "Public buildings need careful documentation and work that follows the client's site access and security rules. We provide method statements, drawings and test certificates for every stage.",
    focus: [
      "Electrical upgrades in occupied public buildings",
      "Method statements and risk assessments before work starts",
      "As-built drawings and test certificates at handover",
      "Planned shutdowns agreed with the facility team",
    ],
    authorities: ["DEWA", "Dubai Municipality", "Dubai Civil Defence"],
  },
  mosques: {
    intro:
      "Mosque works are planned around prayer times and Ramadan. Air-conditioning is usually the largest load, so we check the supply before new units are added.",
    focus: [
      "Supply checks and load increases for new AC units",
      "Interior and exterior lighting upgrades",
      "Power for sound systems and ablution areas",
      "Works scheduled around prayer times",
    ],
    authorities: ["DEWA", "Dubai Municipality", "Dubai Civil Defence"],
  },
};

export type LocationContent = {
  intro: string;
  authorityNote: string;
  points: string[];
};

export const LOCATION_CONTENT: Record<string, LocationContent> = {
  dubai: {
    intro:
      "Our main office is in Deira, with a second office in International City, and Dubai is where most of our work is. We prepare drawings, submit to DEWA and the other Dubai authorities, and carry out the electrical work ourselves.",
    authorityNote:
      "In Dubai, DEWA supplies electricity across the emirate. Building and fit-out approvals go to Dubai Municipality, or to DDA, Trakhees or another master developer depending on where the plot is.",
    points: [
      "Main office in Deira, second office in International City",
      "DEWA registered contractor",
      "Design, approval and installation in one team",
      "Available 24 hours for urgent electrical work",
    ],
  },
  "abu-dhabi": {
    intro:
      "We are based in Dubai. For projects in Abu Dhabi we can provide electrical design, load schedules and installation. Call us first so we can confirm whether we can take on your project.",
    authorityNote:
      "DEWA does not supply Abu Dhabi. Electricity connections there are handled by Abu Dhabi's own distribution company, and building approvals by the Abu Dhabi municipalities, each with its own requirements.",
    points: [
      "Electrical design and load schedules",
      "Installation and testing",
      "Call to confirm scope before you plan around us",
      "Transparent quotations",
    ],
  },
  sharjah: {
    intro:
      "We are based in Dubai and take on selected electrical design and installation work in Sharjah. Call us first so we can confirm whether we can take on your project.",
    authorityNote:
      "DEWA does not supply Sharjah. Electricity connections there are handled by SEWA (Sharjah Electricity, Water and Gas Authority), and building approvals by Sharjah Municipality.",
    points: [
      "Electrical design and load schedules",
      "Installation and testing",
      "Call to confirm scope before you plan around us",
      "Transparent quotations",
    ],
  },
  jafza: {
    intro:
      "Many of our warehouse and factory projects are in Jebel Ali Free Zone. We handle power upgrades, new panels and the approvals both for the free zone and for DEWA.",
    authorityNote:
      "Building and fit-out approvals in JAFZA are handled by Trakhees (Ports, Customs and Free Zone Corporation). DEWA still supplies the power, so load and metering changes also need DEWA approval.",
    points: [
      "Warehouse and factory power upgrades",
      "Trakhees and DEWA submissions",
      "Work planned to keep operations running",
      "Available 24 hours for urgent electrical work",
    ],
  },
  "dubai-south": {
    intro:
      "Dubai South has a growing number of logistics and light-industrial units. We prepare electrical drawings and load schedules and carry out the installation.",
    authorityNote:
      "Building approvals in Dubai South go through Dubai South's own authority. DEWA supplies the power, so load and metering changes also need DEWA approval.",
    points: [
      "Logistics and warehouse electrical works",
      "Load schedules and DEWA submissions",
      "Fit-out electrical installation",
      "Transparent quotations",
    ],
  },
  "business-bay": {
    intro:
      "Business Bay is mostly offices and retail on high floors of shared towers. We work with building management on access, shutdowns and approvals for office and shop fit-outs.",
    authorityNote:
      "Business Bay fit-outs normally need Dubai Municipality and Dubai Civil Defence approval, the building management's NOC, and DEWA approval for any load or metering change.",
    points: [
      "Office and retail fit-out electrical works",
      "Coordination with building management",
      "DB modifications and sub-metering",
      "DM, DCD and DEWA submissions",
    ],
  },
};

export type BlogSection = { h: string; p?: string[]; list?: string[] };

export const BLOG_CONTENT: Record<string, BlogSection[]> = {
  "how-to-get-dewa-approval-dubai": [
    {
      h: "What \"DEWA approval\" means",
      p: [
        "DEWA approval is DEWA's acceptance of the electrical design for a new connection, a load change or a new meter, followed by an inspection before the supply is energised. Applications are submitted through DEWA's online services by a DEWA-enrolled contractor, not by the property owner directly.",
      ],
    },
    {
      h: "Documents you will normally need",
      list: [
        "Load schedule for the unit or building",
        "Single-line diagram and lighting and power layouts",
        "Title deed or tenancy contract, and the trade licence for commercial premises",
        "Landlord or developer NOC in the format DEWA asks for",
        "The appointed contractor's DEWA enrolment details",
      ],
    },
    {
      h: "The steps",
      list: [
        "Survey the site and check the existing supply and boards",
        "Prepare the load schedule and drawings",
        "Submit to DEWA and answer any comments",
        "Pay DEWA's invoice for its charges and any security deposit",
        "Complete the works, then request DEWA's inspection",
        "Supply is energised or the meter installed after a successful inspection",
      ],
    },
    {
      h: "Where delays usually come from",
      p: [
        "In our experience, most delays come from the paperwork rather than the engineering: a landlord NOC in the wrong format, a load schedule that does not match the building's approved schedule, or a site that is not ready on the inspection day. Checking those three points before submitting saves the most time.",
      ],
    },
  ],
  "dubai-civil-defence-approval-guide": [
    {
      h: "When Civil Defence approval is needed",
      p: [
        "Most commercial fit-outs need Dubai Civil Defence (DCD) approval, because they change partitions, ceilings, fire alarm coverage and emergency lighting. Restaurants, warehouses, clinics and shops are all affected, not just large buildings.",
      ],
    },
    {
      h: "Who does what",
      list: [
        "Fire alarm, fire fighting and suppression systems are designed and installed by DCD-approved fire contractors",
        "The electrical contractor provides the dedicated supplies these systems need, and the emergency lighting",
        "The fit-out drawings are shared between the DCD and Dubai Municipality submissions",
      ],
    },
    {
      h: "Run DCD and Dubai Municipality in parallel",
      p: [
        "Because both approvals use the same fit-out drawings, the most common mistake is to leave Civil Defence until the end. Starting both at the same time avoids a gap between finishing the works and getting the completion approvals.",
      ],
    },
    {
      h: "Before the final inspection",
      list: [
        "Fire alarm and emergency lighting tested and working",
        "Exit signs and escape routes clear",
        "Test certificates from the fire contractor ready",
        "As-built drawings matching what was installed",
      ],
    },
  ],
  "ev-charger-installation-requirements-dubai": [
    {
      h: "Check before you buy a charger",
      p: [
        "Buying a charger first and asking about the installation later is the most common EV mistake we see. Three questions decide what you can install.",
      ],
      list: [
        "Can the existing distribution board carry the extra load? Sometimes a DEWA load increase is needed first.",
        "Does the charger model meet DEWA's requirements for chargers connected to its network?",
        "In an apartment or managed building, will building management issue a NOC?",
      ],
    },
    {
      h: "Villas",
      p: [
        "In a villa the main question is the supply. A 7 kW single-phase charger is the usual choice; faster three-phase chargers need a three-phase supply and enough spare capacity. We check the board and the supply before recommending a rating.",
      ],
    },
    {
      h: "Apartments and workplaces",
      p: [
        "In shared buildings the charger is fed from the building's supply, so building management has to agree to the location, the cable route and the metering. For workplaces with several chargers, load management lets more chargers share a limited supply.",
      ],
    },
    {
      h: "Installation",
      list: [
        "Dedicated circuit with the correct cable size",
        "Protection suitable for EV charging, including residual current protection",
        "Earthing checked and tested",
        "Test certificate at handover",
      ],
    },
  ],
  "office-fit-out-approval-dubai-checklist": [
    {
      h: "1. Confirm which authority regulates the building",
      p: [
        "Most of mainland Dubai is regulated by Dubai Municipality, TECOM communities by DDA, and JAFZA and other PCFC areas by Trakhees. The affection plan shows which applies.",
      ],
    },
    {
      h: "2. Get the landlord and building management on board",
      list: [
        "Landlord or developer NOC for the fit-out",
        "Building management's fit-out guidelines and approved contractor rules",
        "The building's approved electrical load for your unit",
      ],
    },
    {
      h: "3. Prepare the drawings once, for every submission",
      list: [
        "Architectural layout with partitions and ceilings",
        "Lighting, power and data layouts",
        "Load schedule and DB schedule",
        "Fire alarm and emergency lighting layouts from the fire contractor",
      ],
    },
    {
      h: "4. Submit to Dubai Municipality (or DDA) and Civil Defence in parallel",
      p: [
        "Both use the same drawings. Running them together is the single biggest time saver on most office fit-outs.",
      ],
    },
    {
      h: "5. DEWA, only if the load or metering changes",
      p: [
        "If the fit-out needs more power than the unit's approved load, or a separate meter, a DEWA application is needed as well. Check this early, because it affects the DB design.",
      ],
    },
  ],
  "electrical-load-upgrade-dubai": [
    {
      h: "Signs you need more load",
      list: [
        "The main breaker trips when several AC units run together",
        "You are adding a pool, an EV charger, a kitchen or production equipment",
        "The building's approved load for your unit is lower than the new equipment needs",
      ],
    },
    {
      h: "How a DEWA load increase works",
      list: [
        "A DEWA-enrolled contractor surveys the site and calculates the new load",
        "A revised load schedule and drawings are prepared",
        "The application is submitted to DEWA, with a landlord or developer NOC where required",
        "DEWA approves the design and issues its invoice",
        "The works are completed and DEWA inspects before the new load is released",
      ],
    },
    {
      h: "What it costs",
      p: [
        "There are two parts: DEWA's own charges, which DEWA bills directly, and the contractor's cost for drawings, submission and site work. The site work depends on whether the existing cables and boards can be kept or need replacing, so we quote after a survey.",
      ],
    },
  ],
  "warehouse-fit-out-guide-dubai-jafza": [
    {
      h: "Which authority approves your warehouse",
      p: [
        "In Jebel Ali Free Zone, building and fit-out approvals are handled by Trakhees. In Dubai South they go through Dubai South's own authority, and on the mainland through Dubai Municipality. In all of these areas DEWA supplies the power, so load and metering changes also need a DEWA approval.",
      ],
    },
    {
      h: "Electrical items to plan early",
      list: [
        "Total load including racking lights, forklift charging and any cold rooms",
        "Whether the existing supply and MDB can carry it",
        "High-bay lighting layout and emergency lighting",
        "Supplies for fire alarm and fire fighting systems",
      ],
    },
    {
      h: "A typical order of work",
      list: [
        "Survey and load assessment",
        "Drawings and load schedule",
        "Free zone or municipality approval, plus DEWA if the load changes",
        "Installation, testing and inspections",
        "Completion and handover with test certificates",
      ],
    },
  ],
};
