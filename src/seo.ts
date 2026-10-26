import { SERVICES, INDUSTRIES, PROJECTS, BLOG_POSTS, LOCATIONS, COMPANY } from "./data/siteData";

export const SITE = "https://megavolt.ae";
export const OG_IMAGE = `${SITE}/og-image.png`;

export type Seo = {
  title: string;
  description: string;
  robots?: string;
  type?: "website" | "article";
  /** false for pages that should not be in the sitemap */
  indexable: boolean;
  lastmod?: string;
};

const brand = "Megavolt Technical Services";

const STATIC: Record<string, Omit<Seo, "indexable">> = {
  "/": {
    title: "Megavolt Technical Services | Electrical & MEP Contractor Dubai",
    description:
      "Electrical and MEP contractor in Dubai since 2020. DEWA registered contractor for load upgrades, new meters, DB works, EV chargers and fit-outs. Open 24 hours.",
  },
  "/about": {
    title: `About Us | ${brand}`,
    description:
      "Megavolt Technical Services Co. LLC is a Dubai electrical and MEP contractor working since 2020, with its main office in Deira and a second office in International City. Authority approvals are handled through its division, UAE Approval Hub.",
  },
  "/services": {
    title: `Electrical, MEP & Approval Services in Dubai | ${brand}`,
    description:
      "MEP design, DEWA and authority approvals, MEP contracting, fit-out, EV charger and solar services in Dubai, delivered by one team from design to handover.",
  },
  "/industries": {
    title: `Industries We Serve in Dubai | ${brand}`,
    description:
      "Electrical and MEP works for warehouses, offices, villas, hotels, clinics, schools, shops, restaurants, factories, server rooms, public buildings and mosques in Dubai.",
  },
  "/projects": {
    title: `Projects | ${brand}`,
    description:
      "Selected Megavolt projects in Dubai: warehouse power upgrades, office fit-outs, Civil Defence approvals, villa solar and logistics MEP design.",
  },
  "/blog": {
    title: `Guides on DEWA, DCD & Fit-out Approvals | ${brand}`,
    description:
      "Practical guides on DEWA approvals, load increases, Civil Defence, office and warehouse fit-outs and EV chargers in Dubai.",
  },
  "/resources": {
    title: `Free Resources | ${brand}`,
    description:
      "Checklists and guides for DEWA applications, Civil Defence approvals, office fit-out planning and EV charger installation in Dubai.",
  },
  "/faq": {
    title: `FAQ: DEWA, Civil Defence, MEP & EV Charging | ${brand}`,
    description:
      "Answers to common questions about DEWA approvals, Dubai Civil Defence, MEP works, fit-out approvals and EV chargers in Dubai.",
  },
  "/careers": {
    title: `Careers | ${brand}`,
    description: "Electrical and MEP jobs in Dubai at Megavolt Technical Services. Send us your CV.",
  },
  "/contact": {
    title: `Contact Us | ${brand}, Deira, Dubai`,
    description:
      "Call or WhatsApp +971 56 596 6254 or email info@megavolt.ae. Main office in Deira, second office in International City. Open 24 hours for urgent electrical work.",
  },
  "/locations": {
    title: `Areas We Serve | ${brand}`,
    description: "Electrical, MEP and approval services across Dubai, JAFZA, Dubai South and Business Bay, with selected work in Abu Dhabi and Sharjah.",
  },
  "/privacy": {
    title: `Privacy Policy | ${brand}`,
    description: "How Megavolt Technical Services Co. LLC collects and uses the information you send us.",
  },
  "/terms": {
    title: `Terms of Use | ${brand}`,
    description: "Terms for using the Megavolt Technical Services website.",
  },
};

function clip(s: string, n = 158) {
  return s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, "") + "…";
}

export function getSeo(pathname: string): Seo {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (STATIC[path]) return { ...STATIC[path], indexable: true };

  const parts = path.split("/").filter(Boolean);
  const [section, a, b] = parts;

  if (section === "services" && a) {
    const cat = SERVICES.find((s) => s.slug === a);
    if (cat && !b) {
      return {
        title: `${cat.category} in Dubai | ${brand}`,
        description: clip(`${cat.description} Includes ${cat.items.slice(0, 5).map((i) => i.name).join(", ")}.`),
        indexable: true,
      };
    }
    const item = cat?.items.find((i) => i.slug === b);
    if (cat && item) {
      return {
        title: `${item.name} in Dubai | ${brand}`,
        description: clip(`${item.name} in Dubai as part of our ${cat.category} services. Free consultation, call +971 56 596 6254.`),
        robots: "noindex, follow",
        indexable: false,
      };
    }
  }
  if (section === "industries" && a) {
    const ind = INDUSTRIES.find((i) => i.slug === a);
    if (ind) {
      return {
        title: `Electrical & MEP for ${ind.name} in Dubai | ${brand}`,
        description: clip(`Electrical, MEP and authority approval works for ${ind.name.toLowerCase()} in Dubai: load checks, DB works, drawings and DEWA, DM and Civil Defence submissions.`),
        indexable: true,
      };
    }
  }
  if (section === "projects" && a) {
    const p = PROJECTS.find((x) => x.slug === a);
    if (p) {
      return {
        title: `${p.title} | ${brand}`,
        description: clip(`${p.location}: ${p.scope}.${p.results ? ` ${p.results}.` : ""}`),
        indexable: true,
      };
    }
  }
  if (section === "blog" && a) {
    const post = BLOG_POSTS.find((x) => x.slug === a);
    if (post) {
      return {
        title: post.title.length > 58 ? post.title : `${post.title} | Megavolt`,
        description: clip(post.excerpt),
        type: "article",
        indexable: true,
        lastmod: post.updated,
      };
    }
  }
  if (section === "locations" && a) {
    const loc = LOCATIONS.find((l) => l.slug === a);
    if (loc) {
      const primary = ["dubai", "jafza", "dubai-south", "business-bay"].includes(loc.slug);
      return {
        title: primary
          ? `Electrical & MEP Contractor in ${loc.city} | ${brand}`
          : `Electrical Works in ${loc.city} | ${brand}`,
        description: clip(loc.description + ` Call ${COMPANY.phone}.`),
        indexable: true,
      };
    }
  }
  return {
    title: `Page not found | ${brand}`,
    description: "This page does not exist. Go to the Megavolt Technical Services homepage.",
    robots: "noindex, follow",
    indexable: false,
  };
}

/** Every route the site serves, used for prerendering and the sitemap. */
export function allRoutes(): string[] {
  return [
    ...Object.keys(STATIC),
    ...SERVICES.map((s) => `/services/${s.slug}`),
    ...SERVICES.flatMap((s) => s.items.map((i) => `/services/${s.slug}/${i.slug}`)),
    ...INDUSTRIES.map((i) => `/industries/${i.slug}`),
    ...PROJECTS.map((p) => `/projects/${p.slug}`),
    ...BLOG_POSTS.map((p) => `/blog/${p.slug}`),
    ...LOCATIONS.map((l) => `/locations/${l.slug}`),
  ];
}

export function canonical(pathname: string) {
  const path = pathname.replace(/\/+$/, "") || "/";
  return path === "/" ? `${SITE}/` : `${SITE}${path}`;
}

/** Keeps <head> in sync when visitors move between pages in the browser. */
export function applySeo(pathname: string) {
  const seo = getSeo(pathname);
  const url = canonical(pathname);
  document.title = seo.title;
  const set = (selector: string, attr: string, key: string, value: string) => {
    let el = document.head.querySelector<HTMLElement>(selector);
    if (!el) {
      el = document.createElement(selector.startsWith("link") ? "link" : "meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute(selector.startsWith("link") ? "href" : "content", value);
  };
  set('meta[name="description"]', "name", "description", seo.description);
  set('meta[name="robots"]', "name", "robots", seo.robots || "index, follow");
  set('link[rel="canonical"]', "rel", "canonical", url);
  set('meta[property="og:title"]', "property", "og:title", seo.title);
  set('meta[property="og:description"]', "property", "og:description", seo.description);
  set('meta[property="og:url"]', "property", "og:url", url);
  set('meta[property="og:type"]', "property", "og:type", seo.type || "website");
}
