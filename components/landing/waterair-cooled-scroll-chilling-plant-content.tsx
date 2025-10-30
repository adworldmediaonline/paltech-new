"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Zap, Settings, Droplets, Shield, Factory, Thermometer } from "lucide-react";

export function WaterAirCooledScrollChillingPlantContent() {
  const keyFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High Performance & Low Operating Cost",
      description: "Advanced scroll compressor technology delivers superior efficiency with reduced energy consumption, resulting in significantly lower operating costs compared to traditional systems."
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Rapid & Powerful Cooling",
      description: "Scroll compressor design ensures rapid cooling response and powerful performance, maintaining precise temperature control even under varying load conditions."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Superior Energy Efficiency",
      description: "Optimized compressor technology and advanced heat transfer systems deliver exceptional energy efficiency, reducing electricity consumption and operational expenses."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Premium Quality Components",
      description: "Manufactured using high-quality industrial components ensuring reliable operation, extended service life, and minimal maintenance requirements."
    },
  ];

  const technicalSpecs = [
    {
      title: "Water-Cooled Scroll Chillers",
      capacity: "3 TR to unlimited capacity",
      description: "Intended for indoor installation with separate condenser water loop connected to cooling towers. Lower power consumption makes them preferred where optimum energy efficiency is required.",
      advantages: [
        "Longer service life",
        "Higher efficiency",
        "Large capacity capability",
        "Superior refrigerant containment"
      ]
    },
    {
      title: "Air-Cooled Scroll Chillers",
      capacity: "Less than 1 TR to unlimited capacity",
      description: "Absorb heat from process water and transfer it to ambient air. Ideal where heat discharge is not a factor. Require no cooling tower or condenser water pump.",
      advantages: [
        "Lower maintenance requirements",
        "Outdoor installation flexibility",
        "No cooling tower needed",
        "Reduced installation complexity"
      ]
    }
  ];

  return (
    <section className="w-full">
      {/* Hero Introduction */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Water/Air Cooled Scroll Chilling Plants - Advanced Compressor Technology
          </h1>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Paltech's <strong>Water/Air Cooled Scroll Chilling Plants</strong> represent advanced industrial cooling technology utilizing <strong>scroll compressor systems</strong> for superior performance, energy efficiency, and reliability. These sophisticated chilling systems are engineered for applications requiring precise temperature control, rapid cooling response, and optimal energy consumption across diverse industrial and commercial sectors.
            </p>
            <p>
              <strong>Water-cooled scroll chillers</strong> deliver longer service life, higher efficiency, large capacity capability, and superior refrigerant containment compared to alternative technologies. Typically intended for indoor installation and operation, they are cooled by a separate condenser water loop connected to outdoor cooling towers to expel heat to the atmosphere. Due to lower power consumption, water-cooled scroll chillers are preferred where <strong>optimum energy efficiency is a priority</strong>, making them ideal for large-scale industrial applications and facilities with dedicated cooling tower infrastructure.
            </p>
            <p>
              <strong>Air-cooled scroll chillers</strong> absorb heat from process water and transfer it directly to ambient air, making them ideal for applications where heat discharge is not a concern. These systems require no cooling tower or condenser water pump, have lower maintenance requirements than water-cooled units, and are typically installed outdoors with ambient air drawn directly across the condenser coil. Air-cooled scroll chillers offer <strong>maximum installation flexibility</strong> and simplified operation for facilities without access to cooling tower systems.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Features & Advantages
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

      {/* Technical Specifications */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Technical Specifications & Capacity Range
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-primary/5 to-blue-50 p-8 rounded-xl border border-primary/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{spec.title}</h3>
                <div className="mb-4">
                  <p className="text-lg font-semibold text-primary mb-2">Capacity Range:</p>
                  <p className="text-gray-700">{spec.capacity}</p>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{spec.description}</p>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Key Advantages:</p>
                  <ul className="space-y-2">
                    {spec.advantages.map((advantage, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Engineering Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Factory className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Superior Performance</h3>
                    <p className="text-gray-600 text-sm">Advanced Screw/Scroll/Reciprocating compressors with multi-circuit design ensuring uptime and low-noise heat transfer for optimal performance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Settings className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Easy Installation</h3>
                    <p className="text-gray-600 text-sm">Compact structure and minimal space requirements save installation time and costs while maintaining optimal performance characteristics.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Droplets className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Water vs Air Cooling</h3>
                    <p className="text-gray-600 text-sm">Water has superior heat transfer properties versus air, with higher film coefficient at given area and temperature difference ensuring optimal efficiency.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Thermometer className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Heat Transfer Efficiency</h3>
                    <p className="text-gray-600 text-sm">Optimized heat transfer systems ensure rapid cooling response and precise temperature control across varying load conditions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Industrial Applications & Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Plastic Injection Molding",
              "Commercial HVAC Systems",
              "Industrial Process Cooling",
              "Food & Beverage Processing",
              "Pharmaceutical Manufacturing",
              "Chemical Processing",
              "Data Center Cooling",
              "Laser Cutting & Welding",
              "Metal Processing",
              "Cold Storage Facilities",
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need Help Selecting the Right Scroll Chiller?</h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Share your process load requirements, ambient conditions, and capacity needs. Our chiller experts will provide tailored recommendations, detailed specifications, and competitive pricing for your water or air-cooled scroll chilling plant.
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

export default WaterAirCooledScrollChillingPlantContent;
