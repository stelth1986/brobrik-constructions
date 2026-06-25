/**
 * Brobrik Constructions — content source of truth.
 * Copy is written to read like an architecture studio, not a contractor listing.
 */

export const company = {
  name: "Brobrik Constructions",
  since: 1994,
  family: "Englezos",
  blurbShort:
    "A family building company, run by the Englezos family since 1994. Three decades of straight lines across Sydney.",
  // numbers used as marginalia, never as a counter row
  ledger: {
    established: "Est. 1994",
    combinedYears: "75 yrs combined trade",
    tradespeople: "50+ on the tools",
    sectors: "Residential",
  },
};

export const contact = {
  phone: "(02) 9584 3999",
  phoneHref: "tel:+61295843999",
  email: "admin@brobrikconstructions.com.au",
  emailHref: "mailto:admin@brobrikconstructions.com.au",
  postal: ["PO Box 870", "Riverwood, NSW 2210"],
  region: "Sydney Metropolitan",
};

export type Service = {
  index: string;
  slug: string;
  title: string;
  lede: string;
  // longer description shown on the service's own page
  body: string;
  scope: string[];
  image: string;
  alt: string;
  // supporting imagery for the service's own page
  images: string[];
};

export const services: Service[] = [
  {
    index: "01",
    slug: "new-builds",
    title: "New Builds",
    lede: "Ground-up homes, taken from a bare site to handover.",
    body: "We build new homes from the slab up, managing the trades, the program and the standard so the finished structure reads exactly as it was drawn. Three decades of doing it means the lines stay true long after we leave the site.",
    scope: [
      "Custom residential homes",
      "Site works & structural",
      "Full project management",
    ],
    image: "/media/hero-still.jpg",
    alt: "A newly built contemporary brick home at dusk with warm interior lighting.",
    images: ["/media/g-01.jpg", "/media/g-06.jpg", "/media/g-12.jpg"],
  },
  {
    index: "02",
    slug: "extensions",
    title: "Extensions",
    lede: "Second storeys, additions and reworked footprints that read as original.",
    body: "Adding to a home is harder than starting fresh. The new work has to disappear into the old. We extend up and out, matching brick, line and roof so the join is invisible and the house simply feels like it was always this size.",
    scope: [
      "Second-storey additions",
      "Ground-floor extensions",
      "Attic & roof conversions",
      "Structural alterations",
    ],
    image: "/media/g-08.jpg",
    alt: "A light-filled attic conversion with a raked ceiling and panoramic window.",
    images: ["/media/g-03.jpg", "/media/g-16.jpg", "/media/g-11.jpg"],
  },
  {
    index: "03",
    slug: "renovations",
    title: "Renovations",
    lede: "Full and partial renovations, from kitchens and bathrooms to whole homes.",
    body: "From a single bathroom to a whole-home rework, we renovate without losing the thread of the original building. Careful sequencing, clean trades and a finish that lifts the entire house rather than patching one corner of it.",
    scope: [
      "Whole-home renovations",
      "Kitchens & bathrooms",
      "Heritage-sensitive work",
      "Interior reconfiguration",
    ],
    image: "/media/g-12.jpg",
    alt: "A renovated open-plan living and dining space in soft stone and timber.",
    images: ["/media/s-10.jpg", "/media/g-16.jpg", "/media/g-07.jpg"],
  },
];

// Masonry gallery — image + a frame ratio to vary the column heights.
// The homepage shows a slice of this; the Projects page shows it in full.
export const gallery: { src: string; ratio: string }[] = [
  { src: "/media/g-06.jpg", ratio: "aspect-[4/5]" },
  { src: "/media/g-12.jpg", ratio: "aspect-[4/3]" },
  { src: "/media/g-00.jpg", ratio: "aspect-[3/4]" },
  { src: "/media/g-08.jpg", ratio: "aspect-[4/3]" },
  { src: "/media/g-03.jpg", ratio: "aspect-square" },
  { src: "/media/g-07.jpg", ratio: "aspect-[4/5]" },
  { src: "/media/g-01.jpg", ratio: "aspect-[4/3]" },
  { src: "/media/g-11.jpg", ratio: "aspect-[3/4]" },
  { src: "/media/s-10.jpg", ratio: "aspect-[4/3]" },
  { src: "/media/g-16.jpg", ratio: "aspect-[4/5]" },
  { src: "/media/g-04.jpg", ratio: "aspect-[4/3]" },
  { src: "/media/s-12.jpg", ratio: "aspect-square" },
];

export type Project = {
  slug: string;
  title: string;
  suburb: string;
  category: string;
  // headline spec row, shown as title-block marginalia
  specs: { label: string; value: string }[];
  // short line for the index card
  summary: string;
  // longer description, paragraph by paragraph, on the project's own page
  body: string[];
  hero: string;
  heroAlt: string;
  // gallery for the project's own page
  images: string[];
};

const blanche = "/media/projects/blanche-st-oatley";
const cremin = "/media/projects/cremin-place-menai";

export const projects: Project[] = [
  {
    slug: "cremin-place-menai",
    title: "Cremin Place",
    suburb: "Menai",
    category: "New Build",
    specs: [
      { label: "Bedrooms", value: "5" },
      { label: "Bathrooms", value: "4" },
      { label: "Car spaces", value: "2" },
      { label: "Land", value: "840 m²" },
    ],
    summary:
      "A ground-up luxury home where dark brick, render and glass frame an infinity pool and a leafy bushland edge.",
    body: [
      "A brand-new home built from the ground up on an elevated, bush-backed block in Menai. Dark face brick and crisp white render set a confident street presence, while the rear opens almost entirely to glass, an infinity-edge pool and a covered alfresco made for entertaining.",
      "Inside, five bedrooms and four bathrooms are arranged around a central kitchen with a stone island and butler's pantry, flowing through to open living with a gas fireplace, a dedicated media room and a home gym. Every junction was set out and finished in-house, so the lines hold true from the facade to the last tile.",
    ],
    hero: `${cremin}/01.jpg`,
    heroAlt:
      "The dusk street facade of the Cremin Place new build, lit and landscaped.",
    images: [
      `${cremin}/02.jpg`,
      `${cremin}/03.jpg`,
      `${cremin}/04.jpg`,
      `${cremin}/05.jpg`,
      `${cremin}/06.jpg`,
      `${cremin}/07.jpg`,
      `${cremin}/08.jpg`,
      `${cremin}/09.jpg`,
      `${cremin}/10.jpg`,
      `${cremin}/11.jpg`,
    ],
  },
  {
    slug: "blanche-st-oatley",
    title: "Blanche Street",
    suburb: "Oatley",
    category: "Renovation",
    specs: [
      { label: "Bedrooms", value: "4" },
      { label: "Bathrooms", value: "4" },
      { label: "Car spaces", value: "3" },
      { label: "Land", value: "792 m²" },
    ],
    summary:
      "A substantial family home reworked from the inside out, holding to one line from the street to the pool terrace.",
    body: [
      "A substantial family home in Oatley, reworked from the inside out. The brief was space and light without losing the warmth of the original house, so the renovation reads as one continuous building rather than old and new stitched together.",
      "Across four bedrooms and four bathrooms, the work runs from the raked-ceiling upper floor to the pool terrace cut into the slope below. Glass folds away to the garden, the masonry lines hold true, and the finishes stay quiet enough to live with for decades.",
    ],
    hero: `${blanche}/10.jpg`,
    heroAlt:
      "The rear elevation of the Blanche Street home at dusk, pool terrace below.",
    images: [
      `${blanche}/02.jpg`,
      `${blanche}/08.jpg`,
      `${blanche}/09.jpg`,
      `${blanche}/17.jpg`,
      `${blanche}/11.jpg`,
      `${blanche}/14.jpg`,
      `${blanche}/12.jpg`,
      `${blanche}/13.jpg`,
      `${blanche}/15.jpg`,
      `${blanche}/16.jpg`,
      `${blanche}/01.jpg`,
      `${blanche}/06.jpg`,
      `${blanche}/07.jpg`,
      `${blanche}/05.jpg`,
      `${blanche}/03.jpg`,
      `${blanche}/04.jpg`,
    ],
  },
];

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
