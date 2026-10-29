/**
 * Site imagery.
 * - stock/: licensed photos from Unsplash (free for commercial use, no attribution required).
 *   They illustrate types of work and buildings in general and are never presented as Megavolt projects.
 * - brand/: original Megavolt illustrations.
 * Real project photos live in /projects and are used only for real projects.
 */
export type SiteImage = { src: string; alt: string; width: number; height: number };

const stock = (file: string, alt: string, width = 960, height = 600): SiteImage => ({
  src: `/images/stock/${file}`,
  alt,
  width,
  height,
});

export const HERO_IMAGE = {
  src: "/images/stock/dubai-skyline-hero.webp",
  srcSmall: "/images/stock/dubai-skyline-hero-1024.webp",
  alt: "Dubai skyline with Burj Khalifa, where Megavolt works as an electrical and MEP contractor",
  width: 1920,
  height: 1080,
};

export const TEAM_ILLUSTRATION: SiteImage = {
  src: "/images/brand/megavolt-technicians-hi-vis-vests.webp",
  alt: "Illustration of two Megavolt technicians in branded hi-vis vests working at a main distribution board",
  width: 1200,
  height: 900,
};

export const VEST_IMAGE: SiteImage = {
  src: "/images/brand/megavolt-hi-vis-vest-front-back.webp",
  alt: "Megavolt branded hi-vis safety vest, front and back, with the Megavolt logo, phone number and website",
  width: 1600,
  height: 960,
};

/** One image per service category slug. */
export const SERVICE_IMAGES: Record<string, SiteImage> = {
  "mep-consultancy": stock("mep-design-drawings.webp", "Engineer marking up technical drawings for an MEP design"),
  "authority-approvals": stock("dubai-construction-approvals.webp", "High-rise buildings under construction that need authority approvals in Dubai"),
  "mep-contracting": stock("electrical-distribution-board.webp", "Distribution board with rows of circuit breakers and colour-coded wiring"),
  "fit-out-services": stock("office-fit-out-interior.webp", "Finished modern office interior with glass partitions and meeting table"),
  "ev-solutions": stock("ev-charger-car.webp", "Charging cable plugged into an electric car"),
  "solar-solutions": stock("rooftop-solar-panels.webp", "Rows of solar panels installed on a roof"),
};

/** One image per industry slug. */
export const INDUSTRY_IMAGES: Record<string, SiteImage> = {
  warehouses: stock("industry-warehouses.webp", "Warehouse aisle with high storage racks", 720, 540),
  offices: stock("industry-offices.webp", "Modern office corridor with glass-walled rooms", 720, 540),
  villas: stock("industry-villas.webp", "Modern villa with palm trees", 720, 540),
  hotels: stock("industry-hotels.webp", "Hotel lobby with lounge seating and warm lighting", 720, 540),
  hospitals: stock("industry-hospitals.webp", "Bright hospital corridor", 720, 540),
  schools: stock("industry-schools.webp", "Empty classroom with desks and a board", 720, 540),
  retail: stock("industry-retail.webp", "Modern retail store interior with display shelves", 720, 540),
  restaurants: stock("industry-restaurants.webp", "Restaurant interior with tables and pendant lights", 720, 540),
  factories: stock("industry-factories.webp", "Automated factory production line", 720, 540),
  "data-centres": stock("industry-data-centres.webp", "Data centre aisle with server racks", 720, 540),
  government: stock("industry-government.webp", "Columns of a public building", 720, 540),
  mosques: stock("industry-mosques.webp", "White mosque with domes and arches", 720, 540),
};
