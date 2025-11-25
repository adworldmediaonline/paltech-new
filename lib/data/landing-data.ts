export interface ProductSubItem {
  label: string;
  href: string;
  description?: string;
  nestedItems?: ProductSubItem[]; // Add nested support
}

export interface ProductCategory {
  title: string;
  href: string; // Make parent clickable
  subItems?: ProductSubItem[];
}

export interface SubNavItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  subItems?: SubNavItem[];
  productCategories?: ProductCategory[];
}

export interface HeroData {
  headline: string;
  subheadline: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
  };
}


export interface SolutionsShowcaseData {
  eyebrow: string;
  headline: string;
  description: string;
  categories: {
    icon: string;
    title: string;
    description: string;
    products: string[];
  }[];
  ctaText: string;
  ctaHref: string;
}

export interface AboutItem {
  text: string;
}

export interface AboutData {
  eyebrow: string;
  headline: string;
  description: string;
  items: AboutItem[];
  ctaText: string;
  ctaHref: string;
}

export interface WhyChooseCard {
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseData {
  eyebrow: string;
  headline: string;
  cards: WhyChooseCard[];
  ctaText: string;
  ctaHref: string;
}

export interface ServiceCard {
  number: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export interface ServicesData {
  eyebrow: string;
  services: ServiceCard[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface StatsData {
  stats: Stat[];
}

export interface PrincipleCard {
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

export interface PrinciplesData {
  eyebrow: string;
  headline: string;
  subheadline: string;
  principles: PrincipleCard[];
}

export interface ClientLogosData {
  headline: string;
  logos: {
    name: string;
    imageUrl: string;
  }[];
}

export interface CtaSectionData {
  headline: string;
  ctaText: string;
  ctaHref: string;
}

export interface ContactFormData {
  headline: string;
  description: string;
  contactInfo: {
    address: string;
    phone: string;
    email: string;
  };
}

export interface FooterColumn {
  title: string;
  links: {
    text: string;
    href: string;
  }[];
}

export interface FooterData {
  columns: FooterColumn[];
  copyright: string;
  socialLinks: {
    platform: string;
    href: string;
  }[];
}

// Landing page content
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "#about",
    hasDropdown: true,
    subItems: [
      { label: "Our Clients", href: "/about/our-clients" },
      { label: "Awards & Recognition", href: "/about/awards-recognition" },
      { label: "Export Countries", href: "/about/export-countries" },
      { label: "Executed Projects", href: "/about/executed-projects" },
      { label: "Project Consultants", href: "/about/project-consultants" },
      { label: "Affilliated Bodies", href: "/about/affiliated-bodies" },
      { label: "Policies & Certification", href: "/about/policies-certification" },
      { label: "Testimonials", href: "/about/testimonials" },
    ]
  },
  {
    label: "Products",
    href: "#products",
    hasDropdown: true,
    productCategories: [
      {
        title: "Cooling Towers",
        href: "/cooling-towers",
        subItems: [
          {
            label: "RCC Concrete Cooling Towers",
            href: "/cooling-towers/rcc-concrete-cooling-towers",
            description: "Cross Flow / Counter Flow"
          },
          {
            label: "Pultruded FRP Cooling Towers",
            href: "/cooling-towers/pultruded-frp-cooling-towers",
            description: "Cross Flow / Counter Flow"
          },
          {
            label: "Wooden/Timber Cooling Towers",
            href: "/cooling-towers/wooden-timber-cooling-towers",
            description: "Wooden/Timber Single & Double Flow Induced Draft Crossflow Cooling Towers",
            nestedItems: [
              {
                label: "Wooden/Timber Single & Double Flow Induced Draft Crossflow with Direct Drive Systems",
                href: "/cooling-towers/wooden-timber-cooling-towers/wooden-single-double-flow-induced-draft-crossflow-with-direct-drive-systems"
              },
              {
                label: "Wooden/Timber Single & Double Flow Induced Draft Crossflow with Reduction Reducer Drive System",
                href: "/cooling-towers/wooden-timber-cooling-towers/wooden-single-double-flow-induced-draft-crossflow-with-reduction-gearbox-drive-system"
              },
              {
                label: "Packaged Wooden/Timber Double Flow Induced Draft Crossflow Cooling Towers",
                href: "/cooling-towers/wooden-timber-cooling-towers/packaged-wooden-double-flow-induced-draft-crossflow"
              }
            ]
          },
          {
            label: "FRP Cooling Towers",
            href: "/cooling-towers/frp-cooling-towers",
            description: "Counter Flow FRP Cooling Towers",
            nestedItems: [
              {
                label: "Counter Flow Bottle Shape",
                href: "/cooling-towers/frp-cooling-towers/counter-flow-bottle-shape-2"
              },
              {
                label: "Counter Flow Rectangular/Square Shape",
                href: "/cooling-towers/frp-cooling-towers/counter-flow-rectangularsquare-shape-2"
              },
              {
                label: "Fan less Induced Draft - Jet Type FRP",
                href: "/cooling-towers/frp-cooling-towers/fan-less-induced-draft-jet-type-frp"
              }
            ]
          }
        ]
      },
      {
        title: "Chilling Plants",
        href: "/chilling-plants",
        subItems: [
          {
            label: "Water/Air Cooled Scroll Chilling Plant",
            href: "/chilling-plants/waterair-cooled-scroll-chilling-plant"
          },
          {
            label: "CFC Free Water/Air Cooled Chilling Plant",
            href: "/chilling-plants/cfc-free-water-air-cooled-chilling-plant"
          },
          {
            label: "Glycol-based Water/Air Cooled Chilling Plant",
            href: "/chilling-plants/glycol-based-waterair-cooled-chilling-plant"
          },
          {
            label: "Micro Processor based Water/Air Cooled Chilling Plant",
            href: "/chilling-plants/micro-processor-based-water-air-cooled-chilling-plant"
          },
          {
            label: "Multi Circuit Power Saver Scroll / Screw Chilling Plant",
            href: "/chilling-plants/multi-circuit-power-saver-scroll-screw-chilling-plant-water-air-cooled",
            description: "Water / Air Cooled"
          },
          {
            label: "Reciprocating Water / Air Cooled Chilling Plant",
            href: "/chilling-plants/reciprocating-water-air-cooled-chilling-plant"
          },
          {
            label: "Standard Capacity Screw / Scroll Chilling Plant",
            href: "/chilling-plants/standard-capacity-screw-scroll-chilling-plant-water-air-cooled",
            description: "Water / Air Cooled"
          },
          {
            label: "Tailor Made Power Saver Screw / Scroll Chilling Plant",
            href: "/chilling-plants/tailor-made-power-saver-screw-scroll-chilling-plant-water-air-cooled",
            description: "Water / Air Cooled"
          },
          {
            label: "Trolley Mounted Water / Air Cooled Chilling Plant",
            href: "/chilling-plants/trolley-mounted-water-air-cooled-chilling-plant"
          }
        ]
      },
      {
        title: "FRP/GRP Structural Profiles",
        href: "/paltech-frpgrp-structural-profiles",
        subItems: [
          {
            label: "FRP Deck Panels",
            href: "/paltech-frpgrp-structural-profiles/frp-deck-panels"
          },
          {
            label: "FRP Corrugated Sheets",
            href: "/paltech-frpgrp-structural-profiles/frp-corrugated-sheets"
          },
          {
            label: "FRP Gratings",
            href: "/paltech-frpgrp-structural-profiles/frp-gratings"
          },
          {
            label: "FRP Ladders",
            href: "/paltech-frpgrp-structural-profiles/frp-ladders"
          }
        ]
      }
    ]
  },
  {
    label: "Spares",
    href: "/spares",
    hasDropdown: true,
    productCategories: [
      {
        title: "Drive Shafts",
        href: "/spares/drive-shafts",
        subItems: [
          {
            label: "HDGMS",
            href: "/spares/drive-shafts/hdgms"
          },
          {
            label: "Carbon Fiber",
            href: "/spares/drive-shafts/carbon-fiber"
          },
          {
            label: "SS (Stainless Steel)",
            href: "/spares/drive-shafts/stainless-steel"
          }
        ]
      },
      {
        title: "Axial Fans",
        href: "/spares/axial-fans",
        subItems: [
          {
            label: "FRP",
            href: "/spares/axial-fans/frp"
          },
          {
            label: "Aluminum",
            href: "/spares/axial-fans/aluminum"
          }
        ]
      },
      {
        title: "Fills",
        href: "/spares/fills",
        subItems: [
          {
            label: "PVC Film",
            href: "/spares/fills/pvc-film"
          },
          {
            label: "PVC Splash Fills",
            href: "/spares/fills/pvc-splash-fills"
          },
          {
            label: "PP Ball Fills",
            href: "/spares/fills/pp-ball-fills"
          },
          {
            label: "Trickle Grid Fills",
            href: "/spares/fills/trickle-grid-fills"
          },
          {
            label: "Cooling Tower Splash Bar",
            href: "/spares/fills/cooling-tower-splash-bar"
          },
          {
            label: "Drift Eliminator",
            href: "/spares/fills/drift-eliminator"
          },
          {
            label: "FC Valve",
            href: "/spares/fills/fc-valve"
          },
          {
            label: "Nozzles",
            href: "/spares/fills/nozzles"
          }
        ]
      },
      {
        title: "Gear Reducers",
        href: "/spares/gear-reducers",
        subItems: []
      },
      {
        title: "Fan Cylinders",
        href: "/spares/fan-cylinders",
        subItems: []
      },
      {
        title: "Fan Guards",
        href: "/spares/fan-guards",
        subItems: []
      }
    ]
  },
  {
    label: "Other Services",
    href: "/other-services",
    hasDropdown: true,
    productCategories: [
      {
        title: "Filtration",
        href: "/other-services/filtration",
        subItems: []
      },
      {
        title: "DM Plant: Demineralization",
        href: "/other-services/dm-plant-demineralization",
        subItems: []
      },
      {
        title: "Water Softening",
        href: "/other-services/water-softening",
        subItems: []
      },
      {
        title: "Ultrapure Water",
        href: "/other-services/ultrapure-water",
        subItems: []
      },
      {
        title: "Reverse Osmosis / R.O",
        href: "/other-services/reverse-osmosis-ro",
        subItems: []
      }
    ]
  },
  // { label: "Career", href: "#career" },
  // { label: "Contact Us", href: "/contact-us" },
];

export const heroData: HeroData = {
  headline: "Precision-Engineered Cooling Solutions for Critical Industries",
  subheadline: "3+ decades of excellence serving 46+ countries",
  primaryCta: {
    text: "Request a Quote",
    href: "#contact",
  },
  secondaryCta: {
    text: "Download Brochure",
    href: "#brochure",
  },
};

export const solutionsShowcaseData: SolutionsShowcaseData = {
  eyebrow: "ABOUT US",
  headline: "Synonymous with the highest standards of quality and integrity",
  description: "Paltech™ is a trusted name in the business of cooling solutions, specializing in comprehensive industrial cooling systems with proven expertise across diverse applications.",
  categories: [
    {
      icon: "building",
      title: "Cooling Towers",
      description: "Comprehensive range of cooling tower solutions engineered for optimal thermal management",
      products: [
        "Packaged FRP Cooling Towers",
        "Wooden Cooling Towers",
        "Pultruded FRP Towers",
        "RCC (Reinforced Concrete Cement) Towers",
      ],
    },
    {
      icon: "snowflake",
      title: "Chilling Plants",
      description: "Advanced chilling plant systems designed for precision temperature control",
      products: [
        "Air-Cooled Chilling Plants",
        "Water-Cooled Chilling Plants",
        "Custom Chilling Solutions",
        "Energy-Efficient Systems",
      ],
    },
  ],
  ctaText: "Explore Our Products",
  ctaHref: "#products",
};

export const aboutData: AboutData = {
  eyebrow: "ABOUT US",
  headline:
    "Synonymous with the highest standards of quality and integrity",
  description:
    "Paltech™ is synonymous with the highest standards of quality and integrity in the business of cooling solutions. Specializing in a wide range of cooling towers, including Packaged FRP, Wooden, Pultruded FRP, and RCC (Reinforced Concrete Cement) models, Paltech™ is a trusted name in the industry. Additionally, we excel in the production of Chilling Plants, catering to both air and water-cooled systems.",
  items: [
    { text: "Packaged FRP Cooling Towers" },
    { text: "Wooden Cooling Towers" },
    { text: "Pultruded FRP Cooling Towers" },
    { text: "RCC (Reinforced Concrete Cement) Cooling Towers" },
    { text: "Air-Cooled Chilling Plants" },
    { text: "Water-Cooled Chilling Plants" },
  ],
  ctaText: "Explore Our Products",
  ctaHref: "#products",
};

export const whyChooseData: WhyChooseData = {
  eyebrow: "WHY COMPANIES CHOOSE US",
  headline: "Excellence in every aspect of industrial cooling",
  cards: [
    {
      icon: "shield-check",
      title: "High Quality Components",
      description:
        "We use only premium-grade components in every product, ensuring you receive the best quality for optimal performance and longevity.",
    },
    {
      icon: "volume-x",
      title: "Low Noise Operation",
      description:
        "Committed to green environment standards, all our products are engineered to produce minimal noise levels in accordance with industry regulations.",
    },
    {
      icon: "zap",
      title: "Low Power Consumption",
      description:
        "Energy-efficient designs that reduce power consumption, benefiting both the environment and your operational costs while maintaining peak performance.",
    },
    {
      icon: "trending-down",
      title: "Economical Production Cost",
      description:
        "Low maintenance requirements and energy-efficient operation significantly reduce your production costs without compromising quality.",
    },
    {
      icon: "target",
      title: "Precision Process Control",
      description:
        "Our entire manufacturing process is meticulously controlled to ensure the highest level of precision in every product we deliver.",
    },
    {
      icon: "cpu",
      title: "Smarter & More Reliable",
      description:
        "Continuously evolving products that are smarter, simpler, safer, and more reliable through innovative design and constant improvement.",
    },
  ],
  ctaText: "Request a Consultation",
  ctaHref: "#contact",
};

export const principlesData: PrinciplesData = {
  eyebrow: "OUR PRINCIPLES",
  headline: "Built on a foundation of excellence and innovation",
  subheadline: "36+ years of delivering the best quality products and most reliable services at the most reasonable prices in the market",
  principles: [
    {
      icon: "award",
      title: "Quality Products & Services",
      description:
        "Paltech™, our brand name, stands for the best quality products, genuine accessories, and the most reliable services at the most reasonable prices in the market. With over 36 years of experience in the industry, we are here to provide you with the best quality products and services compared to any other company in India.",
      highlight: "36+ Years Excellence",
    },
    {
      icon: "crosshair",
      title: "Precision",
      description:
        "To continually innovate and modify process of manufacturing and development of equipments to get best quality products and services.",
      highlight: "Continuous Innovation",
    },
    {
      icon: "zap",
      title: "Efficiency",
      description:
        "To continually innovate, develop and adopt state-of-art technology in methods and materials to enhance productivity and cost effectiveness.",
      highlight: "State-of-Art Technology",
    },
  ],
};

export const servicesData: ServicesData = {
  eyebrow: "STRATEGIC SERVICES",
  services: [
    {
      number: "01",
      title: "Cooling Tower Systems",
      description:
        "Custom-designed cooling towers engineered for maximum efficiency and reliability in demanding industrial applications.",
      linkText: "Explore cooling towers",
      linkHref: "#cooling-towers",
    },
    {
      number: "02",
      title: "Heat Exchange Solutions",
      description:
        "Advanced heat exchanger technology optimized for your specific thermal management requirements and operational constraints.",
      linkText: "View heat exchangers",
      linkHref: "#heat-exchangers",
    },
    {
      number: "03",
      title: "HVAC Integration",
      description:
        "Complete HVAC system design and integration services for industrial facilities requiring precise climate control.",
      linkText: "Discover HVAC solutions",
      linkHref: "#hvac",
    },
    {
      number: "04",
      title: "Energy Optimization",
      description:
        "Retrofit and upgrade services to improve energy efficiency and reduce operational costs of existing cooling systems.",
      linkText: "Learn about optimization",
      linkHref: "#optimization",
    },
    {
      number: "05",
      title: "Maintenance & Support",
      description:
        "Comprehensive preventive maintenance programs and 24/7 emergency support to ensure uninterrupted operations.",
      linkText: "View support services",
      linkHref: "#support",
    },
    {
      number: "06",
      title: "Custom Engineering",
      description:
        "Specialized engineering services for unique cooling challenges requiring innovative, purpose-built solutions.",
      linkText: "Request custom solution",
      linkHref: "#custom",
    },
  ],
};

export const statsData: StatsData = {
  stats: [
    { value: "37+", label: "Years of Excellence" },
    { value: "9,000+", label: "Clients Served" },
    { value: "14,000+", label: "Installations Worldwide" },
    { value: "46+", label: "Export Countries" },
  ],
};

export const clientLogosData: ClientLogosData = {
  headline: "Trusted by Leading Organizations",
  logos: [
    { name: "Client 1", imageUrl: "/clients/images (1).png" },
    { name: "Client 2", imageUrl: "/clients/images (2).png" },
    { name: "Client 3", imageUrl: "/clients/images (3).png" },
    { name: "Client 4", imageUrl: "/clients/images (4).png" },
    { name: "Client 5", imageUrl: "/clients/images (5).png" },
    { name: "Client 6", imageUrl: "/clients/images (6).png" },
    { name: "Client 7", imageUrl: "/clients/images (7).png" },
    { name: "Client 8", imageUrl: "/clients/images (8).png" },
    { name: "Client 9", imageUrl: "/clients/images (9).png" },
    { name: "Client 10", imageUrl: "/clients/images (10).png" },
    { name: "Client 11", imageUrl: "/clients/images (11).png" },
    { name: "Client 12", imageUrl: "/clients/images (12).png" },
    { name: "Client 13", imageUrl: "/clients/images (13).png" },
    { name: "Client 14", imageUrl: "/clients/images (14).png" },
    { name: "Client 15", imageUrl: "/clients/images (15).png" },
    { name: "Client 16", imageUrl: "/clients/images (16).png" },
    { name: "Client 17", imageUrl: "/clients/images (17).png" },
    { name: "Client 18", imageUrl: "/clients/images (18).png" },
    { name: "Client 19", imageUrl: "/clients/images (19).png" },
    { name: "Client 20", imageUrl: "/clients/images (20).png" },
    { name: "Client 21", imageUrl: "/clients/images (21).png" },
    { name: "Client 22", imageUrl: "/clients/images (22).png" },
    { name: "Client 23", imageUrl: "/clients/images (23).png" },
    { name: "Client 24", imageUrl: "/clients/images (24).png" },
    { name: "Client 25", imageUrl: "/clients/images (25).png" },
    { name: "Client 26", imageUrl: "/clients/images (26).png" },
    { name: "Client 27", imageUrl: "/clients/images (27).png" },
    { name: "Client 28", imageUrl: "/clients/images (28).png" },
    { name: "Client 29", imageUrl: "/clients/images (29).png" },
    { name: "Client 30", imageUrl: "/clients/images (30).png" },
    { name: "Client 31", imageUrl: "/clients/images (31).png" },
    { name: "Client 32", imageUrl: "/clients/images (32).png" },
    { name: "Client 33", imageUrl: "/clients/images (33).png" },
    { name: "Client 34", imageUrl: "/clients/images (34).jpeg" },
    { name: "Client 35", imageUrl: "/clients/images (35).jpeg" },
    { name: "Client 36", imageUrl: "/clients/images (36).jpeg" },
    { name: "Client 37", imageUrl: "/clients/images (37).jpeg" },
    { name: "Client 38", imageUrl: "/clients/images (38).jpeg" },
    { name: "Client 39", imageUrl: "/clients/images (39).jpeg" },
    { name: "Client 40", imageUrl: "/clients/images (40).jpeg" },
    { name: "Paltech™ Client", imageUrl: "/clients/images.png" },
  ],
};

export const ctaSectionData: CtaSectionData = {
  headline: "Ready to optimize your cooling systems?",
  ctaText: "Request a Consultation",
  ctaHref: "#contact",
};

export const contactFormData: ContactFormData = {
  headline: "Get in Touch",
  description:
    "Let's discuss how we can help optimize your industrial cooling operations. Our team of experts is ready to answer your questions and provide tailored solutions.",
  contactInfo: {
    address: "Plot No. 774, IInd Floor, Udyog Vihar\nPhase - V, Gurugram, Haryana\nIndia",
    phone: "+91.124.4499700",
    email: "paltech@paltech.in",
  },
};

export const footerData: FooterData = {
  columns: [
    {
      title: "Company",
      links: [
        { text: "About Us", href: "#about" },
        { text: "Our Story", href: "#story" },
        { text: "Certifications", href: "#certifications" },
        { text: "Careers", href: "#careers" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { text: "Cooling Towers", href: "#cooling-towers" },
        { text: "Heat Exchangers", href: "#heat-exchangers" },
        { text: "HVAC Systems", href: "#hvac" },
        { text: "Custom Solutions", href: "#custom" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Case Studies", href: "#case-studies" },
        { text: "Technical Docs", href: "#docs" },
        { text: "Blog", href: "#blog" },
        { text: "Support", href: "#support" },
      ],
    },
    {
      title: "Contact",
      links: [
        { text: "Request Quote", href: "#contact" },
        { text: "Sales Inquiry", href: "#sales" },
        { text: "Support", href: "#support" },
        { text: "Locations", href: "#locations" },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} Paltech™ Industrial Solutions. All rights reserved.`,
  socialLinks: [
    { platform: "LinkedIn", href: "#linkedin" },
    { platform: "Twitter", href: "#twitter" },
    { platform: "YouTube", href: "#youtube" },
  ],
};

