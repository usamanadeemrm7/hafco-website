export const company = {
  name: "HAFCO",
  fullName: "HAFCO Trading Company",
  tagline: "The Finest Taste Across Borders.",
  description:
    "HAFCO is a trusted international supplier of premium food commodities, connecting businesses across Africa, the Middle East, Europe, and Asia through quality products and reliable global logistics.",
  address: {
    line1: "Block 397, Tishegu Tamale",
    line2: "Northern Region, Ghana",
  },
  phones: ["+233 24 192 1041", "+971 56 7603995"],
  email: "info@hafcotrading.com",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    whatsapp: "https://wa.me/233241921041",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export type ProductCategory = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  applications: string[];
  benefits: string[];
  image: string;
  bannerImage: string;
};

export const productCategories: ProductCategory[] = [
  {
    slug: "pulses-grains",
    title: "Pulses & Grains",
    shortDescription:
      "Rice, beans, lentils and cereal staples sourced for consistent grade and moisture control.",
    description:
      "Our pulses and grains portfolio covers rice, lentils, beans, chickpeas and cereal staples sourced from vetted growing regions. Every shipment is graded for moisture content, foreign matter and kernel quality before it leaves origin, giving distributors and processors a dependable base ingredient for retail and food service.",
    applications: [
      "Retail and wholesale food distribution",
      "Food processing and milling",
      "Institutional and government supply programs",
      "Food service and catering",
    ],
    benefits: [
      "Consistent grading and moisture control",
      "Traceable origin documentation",
      "Bulk and bagged packaging options",
      "Stable year-round availability",
    ],
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1200&auto=format&fit=crop",
    bannerImage:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    slug: "spices-nuts",
    title: "Spices & Nuts",
    shortDescription:
      "Whole and processed spices, dried nuts and kernels graded for purity and aroma.",
    description:
      "We supply whole and processed spices alongside dried nuts and kernels, each batch tested for purity, moisture and aflatoxin levels. Working with growers who follow proper drying and storage practices allows us to maintain aroma and quality across long-distance shipments.",
    applications: [
      "Food manufacturing and seasoning blends",
      "Retail packaging and private label",
      "Bakery and confectionery",
      "Export re-distribution",
    ],
    benefits: [
      "Purity and aflatoxin testing on every batch",
      "Whole, ground and processed formats",
      "Climate-controlled storage and handling",
      "Flexible order volumes for SMEs and large buyers",
    ],
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
    bannerImage:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2000&auto=format&fit=crop",
  },
  {
    slug: "fruits-vegetables",
    title: "Fruits & Vegetables",
    shortDescription:
      "Fresh and processed produce moved through a temperature-controlled cold chain.",
    description:
      "Fresh and processed fruits and vegetables move through a temperature-controlled cold chain from harvest to port. We work with growers who follow food safety protocols and coordinate shipping schedules to preserve freshness, whether the destination is a retail shelf or a processing line.",
    applications: [
      "Fresh retail and wholesale markets",
      "Juice and food processing",
      "Hospitality and food service",
      "Frozen and semi-processed export lines",
    ],
    benefits: [
      "Cold-chain logistics from origin to destination",
      "Fresh and processed product lines",
      "Seasonal sourcing calendars",
      "Phytosanitary and export documentation handled end to end",
    ],
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1200&auto=format&fit=crop",
    bannerImage:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2000&auto=format&fit=crop",
  },
  {
    slug: "dairy-meat",
    title: "Dairy & Meat",
    shortDescription:
      "Frozen and chilled dairy and meat products handled under strict cold-chain protocols.",
    description:
      "Our dairy and meat lines include frozen and chilled products sourced from certified processing facilities. Cold-chain integrity is monitored from loading to final delivery, with documentation that meets import requirements across our destination markets.",
    applications: [
      "Retail and supermarket supply",
      "Hospitality and catering",
      "Food manufacturing",
      "Institutional distribution",
    ],
    benefits: [
      "Certified processing facility sourcing",
      "Continuous cold-chain monitoring",
      "Halal-certified options available",
      "Full import and veterinary documentation",
    ],
    image:
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=1200&auto=format&fit=crop",
    bannerImage:
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=2000&auto=format&fit=crop",
  },
  {
    slug: "edible-oil-fat",
    title: "Edible Oil & Fat",
    shortDescription:
      "Vegetable oils and edible fats supplied in bulk and retail-ready packaging.",
    description:
      "We supply refined vegetable oils and edible fats in both bulk and retail-ready packaging. Each supplier is assessed for refining standards and consistency, so buyers receive oil that performs the same way from the first drum to the last.",
    applications: [
      "Retail and household cooking oil",
      "Food manufacturing and frying operations",
      "Bakery and confectionery",
      "Bulk industrial supply",
    ],
    benefits: [
      "Refining and quality consistency checks",
      "Bulk drums, jerry cans and retail bottles",
      "Competitive contract pricing",
      "Reliable replenishment scheduling",
    ],
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1200&auto=format&fit=crop",
    bannerImage:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=2000&auto=format&fit=crop",
  },
];

export const whyChooseUs = [
  {
    title: "Premium Quality",
    description:
      "Every product line is selected against clear grading standards before it enters our supply chain.",
    icon: "Award",
  },
  {
    title: "Reliable Supply Chain",
    description:
      "Established sourcing relationships keep shipment schedules consistent, even during seasonal shifts.",
    icon: "Truck",
  },
  {
    title: "Global Distribution",
    description:
      "We move goods across Africa, the Middle East, Europe and Asia through established shipping lanes.",
    icon: "Globe2",
  },
  {
    title: "Strict Quality Control",
    description:
      "Inspection checkpoints at sourcing, packaging and pre-shipment stages protect product integrity.",
    icon: "ShieldCheck",
  },
  {
    title: "Competitive Pricing",
    description:
      "Direct sourcing relationships and efficient logistics keep pricing structures fair and transparent.",
    icon: "BadgePercent",
  },
  {
    title: "Customer Satisfaction",
    description:
      "Long-term partnerships are built on responsive communication and consistent order fulfillment.",
    icon: "Handshake",
  },
];

export const processSteps = [
  {
    title: "Product Sourcing",
    description:
      "We identify and vet growers and processors that meet our quality and compliance requirements.",
  },
  {
    title: "Quality Inspection",
    description:
      "Each batch is inspected against grading standards before it is approved for packaging.",
  },
  {
    title: "Packaging",
    description:
      "Products are packed to preserve freshness and meet the labeling requirements of the destination market.",
  },
  {
    title: "International Shipping",
    description:
      "Shipments are coordinated across sea and air freight with full customs and export documentation.",
  },
  {
    title: "Customer Delivery",
    description:
      "Goods are tracked through to final delivery, with confirmation shared at each key milestone.",
  },
];

export const stats = [
  { value: 100, suffix: "+", label: "Global Clients" },
  { value: 25, suffix: "+", label: "Countries Served" },
  { value: 500, suffix: "+", label: "Products Delivered" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
];

export const coreValues = [
  {
    title: "Integrity",
    description:
      "We represent every product accurately, from specification sheets to final delivery.",
  },
  {
    title: "Quality",
    description:
      "Grading standards and inspection checkpoints are non-negotiable at every stage.",
  },
  {
    title: "Reliability",
    description:
      "Partners can plan around our shipping schedules and order fulfillment commitments.",
  },
  {
    title: "Partnership",
    description:
      "We work as an extension of our clients' supply chains, not a one-time vendor.",
  },
];

export const aboutTimeline = [
  {
    year: "Origin",
    title: "Sourcing Network",
    description:
      "HAFCO built direct relationships with growers and processors across key producing regions.",
  },
  {
    year: "Growth",
    title: "Regional Distribution",
    description:
      "Distribution expanded across West Africa and into Middle Eastern markets.",
  },
  {
    year: "Today",
    title: "International Trade",
    description:
      "HAFCO now connects suppliers and buyers across Africa, the Middle East, Europe and Asia.",
  },
];
