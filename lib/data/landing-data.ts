export interface NavItem {
  label: string;
  href: string;
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

export interface WhatWeDoItem {
  text: string;
}

export interface WhatWeDoData {
  eyebrow: string;
  headline: string;
  description: string;
  items: WhatWeDoItem[];
  ctaText: string;
  ctaHref: string;
}

export interface SolutionsShowcaseData {
  eyebrow: string;
  headline: string;
  paragraphs: string[];
  ctaText: string;
  ctaHref: string;
}

export interface WhoWeServeItem {
  text: string;
}

export interface WhoWeServeData {
  eyebrow: string;
  headline: string;
  description: string;
  items: WhoWeServeItem[];
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
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
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

export const whatWeDoData: WhatWeDoData = {
  eyebrow: "WHAT WE DO",
  headline:
    "Paltech delivers world-class cooling systems engineered for reliability and efficiency",
  description:
    "We design, manufacture, and deploy industrial cooling solutions that keep critical operations running smoothly. Our collaborative approach ensures precision-built systems that meet the exact needs of complex industrial environments.",
  items: [
    { text: "Industrial Cooling Tower Design & Manufacturing" },
    { text: "Custom Heat Exchanger Solutions" },
    { text: "HVAC System Integration" },
    { text: "Energy-Efficient Cooling Technology" },
    { text: "Precision Engineering & Testing" },
    { text: "24/7 Technical Support & Maintenance" },
  ],
  ctaText: "Learn More About Our Capabilities",
  ctaHref: "#solutions",
};

export const solutionsShowcaseData: SolutionsShowcaseData = {
  eyebrow: "OUR SOLUTIONS",
  headline: "Engineering excellence meets operational reliability",
  paragraphs: [
    "Our cooling solutions are built to withstand the most demanding industrial environments. From power generation to petrochemical processing, we deliver systems that maintain optimal performance even under extreme conditions.",
    "Every project begins with a thorough analysis of your operational requirements. We combine decades of field experience with cutting-edge technology to design cooling systems that maximize efficiency while minimizing downtime and maintenance costs.",
  ],
  ctaText: "Explore Our Products",
  ctaHref: "#products",
};

export const whoWeServeData: WhoWeServeData = {
  eyebrow: "WHO WE SERVE",
  headline:
    "Industrial cooling solutions for complex, mission-critical operations",
  description:
    "For over 30 years, we've partnered with B2B industrial and manufacturing companies that demand specialized cooling systems. Our clients share certain characteristics that require a customized engineering approach:",
  items: [
    { text: "Complex equipment requiring precise temperature control" },
    { text: "Mission-critical operations with zero tolerance for downtime" },
    { text: "Long operational cycles requiring durable, reliable systems" },
    { text: "Global operations requiring international support" },
    { text: "Strict compliance with industry standards (ISO, CTI, ASHRAE)" },
    { text: "Integration with existing infrastructure and control systems" },
  ],
  ctaText: "See Our Industries",
  ctaHref: "#industries",
};

export const whyChooseData: WhyChooseData = {
  eyebrow: "WHY COMPANIES CHOOSE US",
  headline: "A trusted partner in industrial cooling excellence",
  cards: [
    {
      icon: "target",
      title: "Precision Engineering",
      description:
        "Every system is designed with meticulous attention to detail, ensuring optimal performance and long-term reliability for your critical operations.",
    },
    {
      icon: "magnet",
      title: "Customer-Focused Solutions",
      description:
        "We don't offer one-size-fits-all products. Our team collaborates closely with you to deliver cooling systems tailored to your exact specifications.",
    },
    {
      icon: "trending-up",
      title: "Proven Track Record",
      description:
        "With 30+ years of experience and 500+ successful installations across 25+ countries, we deliver results that exceed expectations.",
    },
    {
      icon: "wrench",
      title: "Comprehensive Support",
      description:
        "From initial design through installation and ongoing maintenance, our expert team provides 24/7 support to keep your systems running smoothly.",
    },
  ],
  ctaText: "Get Started",
  ctaHref: "#contact",
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
    { value: "500+", label: "Projects Delivered" },
    { value: "25+", label: "Countries Served" },
    { value: "99.8%", label: "System Uptime" },
  ],
};

export const clientLogosData: ClientLogosData = {
  headline: "Trusted by Leading Organizations",
  logos: [
    { name: "Client 1", imageUrl: "/clients/client-1.png" },
    { name: "Client 2", imageUrl: "/clients/client-2.png" },
    { name: "Client 3", imageUrl: "/clients/client-3.png" },
    { name: "Client 4", imageUrl: "/clients/client-4.png" },
    { name: "Client 5", imageUrl: "/clients/client-5.png" },
    { name: "Client 6", imageUrl: "/clients/client-6.png" },
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
    address: "Paltech Industrial Solutions\n123 Industry Drive\nMumbai, India 400001",
    phone: "+91 (22) 1234-5678",
    email: "info@paltech.in",
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

