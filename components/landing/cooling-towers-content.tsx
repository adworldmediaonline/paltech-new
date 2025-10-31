"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Building2, Factory, Shield, Award } from "lucide-react";

export function CoolingTowersContent() {
  const coolingTowerTypes = [
    {
      label: "RCC Concrete Cooling Towers",
      href: "/cooling-towers/rcc-concrete-cooling-towers",
      description: "Cross Flow / Counter Flow",
      features: ["Large-scale applications", "Up to 27,000 m³/hr capacity", "Durable concrete construction"]
    },
    {
      label: "Pultruded FRP Cooling Towers",
      href: "/cooling-towers/pultruded-frp-cooling-towers",
      description: "Advanced composite technology",
      features: ["Lightweight & corrosion-resistant", "Up to 4,500 m³/hr per cell", "Quick installation"]
    },
    {
      label: "Wooden/Timber Cooling Towers",
      href: "/cooling-towers/wooden-timber-cooling-towers",
      description: "Traditional yet efficient",
      features: ["Proven reliability", "Cost-effective solution", "Custom maintenance support"]
    },
    {
      label: "FRP Cooling Towers",
      href: "/cooling-towers/frp-cooling-towers",
      description: "Fiber Reinforced Plastic",
      features: ["Design flexibility", "Multiple shapes & colors", "Up to 1,500 TR capacity"]
    },
  ];

  const keyBenefits = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "37+ Years of Manufacturing Excellence",
      description: "Established in 1986, Paltech™ has served over 9,000 clients across 25+ countries with proven expertise in cooling tower manufacturing."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "ISO Certified Quality",
      description: "All cooling towers manufactured in compliance with international standards including CTI, ASHRAE, and IS codes for reliable performance."
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Complete After-Sales Support",
      description: "Comprehensive maintenance, repair, and upgrade services ensuring optimal cooling tower performance throughout its lifecycle."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Custom Engineering Solutions",
      description: "Tailored designs based on specific industrial requirements, water quality, ambient conditions, and capacity needs."
    },
  ];

  return (
    <>
      {/* Hero Content Section */}
      <section className="py-16 bg-gray-50 pt-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Premium Industrial Cooling Towers - India's Leading Manufacturer Since 1986
            </h1>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Paltech™ Cooling Towers & Equipments Limited stands as India's premier manufacturer of industrial cooling towers, serving diverse sectors including power plants, chemical processing, petrochemicals, refineries, HVAC systems, and manufacturing facilities. With <strong>over 37 years of manufacturing excellence</strong> and a track record of <strong>9,000+ successful installations</strong>, we deliver high-performance cooling solutions engineered for reliability, efficiency, and long-term value.
              </p>
              <p>
                Our extensive range of cooling towers encompasses RCC concrete structures for large-scale applications, lightweight pultruded FRP systems for rapid deployment, traditional wooden towers for specific industrial needs, and versatile FRP cooling towers offering design flexibility. Each product category is manufactured using <strong>premium-grade materials</strong>, advanced engineering techniques, and rigorous quality control processes ensuring optimal thermal performance and extended service life.
              </p>
              <p>
                Beyond manufacturing, Paltech™ provides comprehensive cooling tower services including <strong>installation, commissioning, maintenance, repair, and performance optimization</strong>. Our in-house technical team conducts detailed site surveys, offers expert consultation, and delivers customized solutions tailored to your specific cooling requirements, water chemistry, and environmental conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Paltech™ Cooling Towers?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {keyBenefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Cooling Tower Range for Every Industrial Application
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From large-scale power plant cooling systems to compact HVAC installations, discover our complete lineup of high-performance cooling towers engineered for exceptional efficiency and durability.
              </p>
            </div>

            <div className="space-y-4">
              {coolingTowerTypes.map((type, index) => (
                <Link
                  key={index}
                  href={type.href}
                  className="group block p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary mb-2 transition-colors">
                        {type.label}
                      </h3>
                      <p className="text-gray-600 mb-3 font-medium">{type.description}</p>
                      {type.features && (
                        <ul className="flex flex-wrap gap-2">
                          {type.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-1.5 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-primary group-hover:translate-x-2 transition-all flex-shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Industrial Applications & Use Cases
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Power Generation Plants",
                "Chemical Processing Industries",
                "Petrochemical Refineries",
                "HVAC Systems for Commercial Buildings",
                "Manufacturing Facilities",
                "Data Centers & Server Rooms",
                "Food Processing Industries",
                "Pharmaceutical Manufacturing",
                "Steel & Metal Processing",
                "Textile Industries",
                "Pulp & Paper Mills",
                "Air Conditioning Systems"
              ].map((app, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-primary/5 hover:border-primary transition-colors">
                  <p className="text-gray-700 font-medium">{app}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions About Cooling Towers
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What is the typical lifespan of a cooling tower?",
                  a: "Cooling tower lifespan varies by type and maintenance: RCC concrete towers can last 37+ years with proper maintenance, FRP cooling towers typically offer 15-25 years of service life, while wooden towers require more frequent maintenance but can operate effectively for 10-15 years. Regular maintenance, water treatment, and component replacement significantly extend operational life."
                },
                {
                  q: "How do I choose between cross-flow and counter-flow cooling towers?",
                  a: "Cross-flow towers distribute water horizontally across fill media with air flowing vertically upward, ideal for lower-pressure applications. Counter-flow towers direct water downward against upward air flow, offering higher thermal efficiency and compact footprint. Selection depends on available space, capacity requirements, and energy efficiency priorities."
                },
                {
                  q: "What maintenance is required for cooling towers?",
                  a: "Essential maintenance includes regular cleaning of fill media and basins, water treatment to prevent scaling and biological growth, fan and motor inspection, drift eliminator checks, and water quality monitoring. Paltech™ provides comprehensive maintenance contracts ensuring optimal performance and preventing downtime."
                },
                {
                  q: "Can cooling towers be customized for specific applications?",
                  a: "Yes, Paltech™ specializes in custom-engineered cooling towers tailored to specific capacity requirements, water chemistry, ambient conditions, and space constraints. Our engineering team conducts detailed site surveys and provides customized solutions including basin design, fill selection, and structural modifications."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Optimize Your Industrial Cooling System?
          </h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Connect with our cooling tower experts for a free consultation. Get personalized recommendations, detailed specifications, and competitive pricing tailored to your industrial cooling requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/cooling-towers/rcc-concrete-cooling-towers"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              Browse Product Range
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
