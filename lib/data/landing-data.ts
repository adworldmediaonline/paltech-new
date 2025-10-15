export interface SubNavItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  subItems?: SubNavItem[];
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

export interface ProductCategory {
  icon: string;
  title: string;
  description: string;
  products: string[];
}

export interface SolutionsShowcaseData {
  eyebrow: string;
  headline: string;
  description: string;
  categories: ProductCategory[];
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
      { label: "Our Mission", href: "#mission" },
      { label: "Our Clients", href: "#clients" },
      { label: "Awards & Recognition", href: "#awards" },
      { label: "Policies & Certification", href: "#certifications" },
      { label: "Executed Projects", href: "#projects" },
      { label: "Project Consultants", href: "#consultants" },
      { label: "Affilliated Bodies", href: "#affiliations" },
      { label: "Export Countries", href: "#exports" },
    ]
  },
  {
    label: "Products",
    href: "#products",
    hasDropdown: true,
    subItems: [
      { label: "Cooling Towers", href: "#cooling-towers" },
      { label: "Heat Exchangers", href: "#heat-exchangers" },
      { label: "HVAC Systems", href: "#hvac" },
      { label: "Custom Solutions", href: "#custom" },
    ]
  },
  { label: "Spares", href: "#spares" },
  { label: "Other Services", href: "#services" },
  { label: "Career", href: "#career" },
  { label: "Contact Us", href: "#contact" },
];

export const heroData: HeroData = {
  headline: "Precision-Engineered Cooling Solutions for Critical Industries",
  subheadline: "3+ decades of excellence serving 25+ countries",
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
  description: "PALTECH is a trusted name in the business of cooling solutions, specializing in comprehensive industrial cooling systems with proven expertise across diverse applications.",
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
    "PALTECH is synonymous with the highest standards of quality and integrity in the business of cooling solutions. Specializing in a wide range of cooling towers, including Packaged FRP, Wooden, Pultruded FRP, and RCC (Reinforced Concrete Cement) models, PALTECH is a trusted name in the industry. Additionally, we excel in the production of Chilling Plants, catering to both air and water-cooled systems.",
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
        "Paltech, our brand name, stands for the best quality products, genuine accessories, and the most reliable services at the most reasonable prices in the market. With over 36 years of experience in the industry, we are here to provide you with the best quality products and services compared to any other company in India.",
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
    { value: "30+", label: "Years of Excellence" },
    { value: "11,000+", label: "Clients Served" },
    { value: "13,000+", label: "Installations Worldwide" },
    { value: "25+", label: "Export Countries" },
  ],
};

export const clientLogosData: ClientLogosData = {
  headline: "Trusted by Leading Organizations",
  logos: [
    { name: "Client Partner", imageUrl: "/clients/17.jpg" },
    { name: "Industry Leader", imageUrl: "/clients/19.jpg" },
    { name: "Global Corporation", imageUrl: "/clients/20.jpg" },
    { name: "Tech Enterprise", imageUrl: "/clients/22.jpg" },
    { name: "Manufacturing Giant", imageUrl: "/clients/23.jpg" },
    { name: "Industrial Solutions", imageUrl: "/clients/24.jpg" },
    { name: "Engineering Group", imageUrl: "/clients/25.jpg" },
    { name: "Power Systems", imageUrl: "/clients/26.jpg" },
    { name: "Process Industries", imageUrl: "/clients/27.jpg" },
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
  copyright: `© ${new Date().getFullYear()} Paltech Industrial Solutions. All rights reserved.`,
  socialLinks: [
    { platform: "LinkedIn", href: "#linkedin" },
    { platform: "Twitter", href: "#twitter" },
    { platform: "YouTube", href: "#youtube" },
  ],
};

