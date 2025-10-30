"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Thermometer, Zap, Settings, Shield } from "lucide-react";

export function ChillingPlantsContent() {
  const chillingPlantTypes = [
    { name: "Water/Air Cooled Scroll Chilling Plant", href: "/chilling-plants/waterair-cooled-scroll-chilling-plant" },
    { name: "CFC Free Water/Air Cooled Chilling Plant", href: "/chilling-plants/cfc-free-water-air-cooled-chilling-plant" },
    { name: "Glycol-based Water/Air Cooled Chilling Plant", href: "/chilling-plants/glycol-based-waterair-cooled-chilling-plant" },
    { name: "Micro Processor based Water/Air Cooled Chilling Plants", href: "/chilling-plants/micro-processor-based-water-air-cooled-chilling-plant" },
    { name: "Multi Circuit Power Saver Scroll / Screw Chilling Plant", href: "/chilling-plants/multi-circuit-power-saver-scroll-screw-chilling-plant-water-air-cooled" },
    { name: "Reciprocating Water / Air Cooled Chilling Plants", href: "/chilling-plants/reciprocating-water-air-cooled-chilling-plant" },
    { name: "Standard Capacity Screw / Scroll Chilling Plants", href: "/chilling-plants/standard-capacity-screw-scroll-chilling-plant-water-air-cooled" },
    { name: "Tailor Made Power Saver Screw / Scroll Chilling Plant", href: "/chilling-plants/tailor-made-power-saver-screw-scroll-chilling-plant-water-air-cooled" },
    { name: "Trolley Mounted Water / Air Cooled Chilling Plant", href: "/chilling-plants/trolley-mounted-water-air-cooled-chilling-plant" },
  ];

  const keyFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Wide Capacity Range",
      description: "Water-cooled chillers from 3TR to unlimited capacity, air-cooled chillers from less than 1TR to any capacity requirement."
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Extreme Temperature Range",
      description: "Process chillers operating from +32°C down to -50°C, suitable for diverse industrial cooling applications."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Factory Assembled & Pre-Commissioned",
      description: "Skid-mounted systems ready for quick installation, reducing on-site assembly time and ensuring quality control."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "International Standards Compliance",
      description: "Manufactured per IS-2825, TEMA, ASHRAE, and ASME standards with full-fledged in-house testing facilities."
    },
  ];

  return (
    <section className="w-full">
      {/* Hero Introduction */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Industrial Chilling Plants & Process Chillers - Expert Manufacturing Since 1986
          </h1>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Paltech Cooling Towers & Equipments Limited stands as a leading manufacturer of <strong>industrial chilling plants and process chillers</strong>, delivering high-performance cooling solutions for manufacturing processes, HVAC systems, and specialized applications. With <strong>over three decades of manufacturing excellence</strong> and expertise spanning multiple industries, we design and manufacture chilling systems that remove unwanted heat, maintain precise temperature control, and ensure optimal process efficiency.
            </p>
            <p>
              Our <strong>environment-friendly packaged chillers</strong> are engineered using heavy-duty industrial components manufactured per national and international fabrication standards including <strong>IS-2825, TEMA, ASHRAE, and ASME</strong>. Each system undergoes rigorous quality control at our in-house test laboratory, ensuring reliable performance, energy efficiency, and extended operational life. Our manufacturing facilities, equipped with advanced machinery and technology, enable us to deliver custom-engineered solutions tailored to specific capacity requirements, temperature ranges, and application needs.
            </p>
            <p>
              Beyond manufacturing, Paltech provides comprehensive support including <strong>technical consultation, system design, installation supervision, commissioning services, and after-sales maintenance</strong>. Our engineering team conducts detailed application analysis, recommends optimal chiller configurations, and ensures seamless integration with your existing processes.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Features & Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity & Specifications */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl p-8 border border-primary/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Capacity Offering</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Water-Cooled Chillers
                </h3>
                <p className="text-gray-700">Available from <strong>3TR to unlimited capacity</strong>, ideal for large-scale industrial applications requiring high cooling capacity and efficiency.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Air-Cooled Chillers
                </h3>
                <p className="text-gray-700">Ranging from <strong>less than 1TR to any capacity</strong>, perfect for applications where water availability is limited or preferred for ease of installation.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Temperature Range</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our process chillers operate across an extensive temperature spectrum from <strong>+32°C down to -50°C</strong>, enabling precise temperature control for diverse industrial processes including plastic injection molding, pharmaceutical manufacturing, food processing, chemical production, and precision machining applications.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Manufacturing & Design Approach</h3>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Process chillers play a critical role in removing unwanted heat generated during manufacturing operations, maintaining optimal process temperatures, and ensuring product quality. Paltech's chilling plants are <strong>factory assembled, pre-commissioned, and skid-mounted</strong>, minimizing on-site installation time and ensuring consistent quality control.
              </p>
              <p className="font-semibold text-gray-900">Our customization process includes:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                <li><strong>Application Analysis:</strong> Understanding your specific process requirements, heat load, and operating conditions</li>
                <li><strong>Optimal Solution Design:</strong> Engineering capacity-matched systems considering ambient conditions, water quality, and energy efficiency</li>
                <li><strong>World-Class Materials:</strong> Using premium-grade components, refrigerants, and construction materials for reliability and durability</li>
                <li><strong>Superior Workmanship:</strong> Skilled fabrication and assembly ensuring leak-free operation and optimal performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Range of Chilling Plant Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our diverse lineup of chilling plants engineered for specific applications, capacity requirements, and operational preferences.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {chillingPlantTypes.map((type, index) => (
              <Link
                key={index}
                href={type.href}
                className="group p-5 bg-white rounded-xl border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-gray-700 font-medium group-hover:text-primary transition-colors flex-1">{type.name}</p>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-600 text-center">
            <span className="font-semibold text-gray-900">Note:</span> Detailed engineering data, specifications, and technical drawings are provided with formal proposals and quotations upon request.
          </p>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Industrial Applications & Industries Served
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Plastic Injection Molding",
              "Pharmaceutical Manufacturing",
              "Food & Beverage Processing",
              "Chemical Processing",
              "HVAC Systems",
              "Data Center Cooling",
              "Laser Cutting & Welding",
              "Metal Processing",
              "Pharmaceutical Cold Storage",
              "Brewery & Distillery",
              "Printing & Packaging",
              "Medical Equipment Cooling"
            ].map((app, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-primary/5 hover:border-primary transition-colors">
                <p className="text-gray-700 font-medium">{app}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need Sizing or Selection Assistance?</h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Share your process requirements, ambient conditions, and capacity needs. Our chiller experts will provide tailored recommendations, detailed specifications, and competitive pricing for your industrial cooling application.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-primary px-8 py-4 font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Request Custom Proposal
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ChillingPlantsContent;
