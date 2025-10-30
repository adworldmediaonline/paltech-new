"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Droplets, Settings, Zap, Building2, Factory } from "lucide-react";

export function FrpCounterFlowRectangularSquareShape2Content() {
  const keyFeatures = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "High Capacity Performance",
      description: "Single cell capacity up to 1,500 TR with FRP basin, making it ideal for medium to large-scale industrial cooling applications requiring substantial capacity."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Space-Optimized Design",
      description: "Rectangular and square configurations maximize space utilization while maintaining optimal cooling performance and installation flexibility."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Multi-Cell Capability",
      description: "Larger capacities available through multiple cell construction, providing scalability for diverse cooling requirements from hundreds to thousands of TR."
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Maintenance-Free Distribution",
      description: "Advanced water distribution system ensures uniform water distribution over entire fill area with maintenance-free operation and optimal efficiency."
    },
  ];

  const components = [
    {
      title: "FRP Molded Panel Casing",
      description: "Constructed using premium FRP molded panels with all joints sealed using waterproof compound and fastened together with galvanized steel bolts or stainless steel bolts as specified. Additional embossing enhances casing strength for exceptional durability."
    },
    {
      title: "Advanced Fill Media",
      description: "Equipped with Honeycomb/Film Fills and Splash Type PVC/PP Fills ensuring extended contact area and higher heat transfer efficiency through optimized air-water interaction."
    },
    {
      title: "Aerodynamic Fan Systems",
      description: "Utilizes cast Aluminum alloy/Stainless Steel/FRP fans designed aerodynamically in axial flow type, ensuring high efficiency in cooling operations with minimal energy consumption."
    },
    {
      title: "High-Efficiency Drift Eliminators",
      description: "Specially designed multi-blade rotary drift eliminators made of FRP/Aluminum sheets reduce carryout losses by preventing entrainment of moisture ropes in the air stream."
    },
    {
      title: "Weatherproof Motor Systems",
      description: "Powered by special low RPM totally enclosed motors of vertical, flange type with enlarged threaded shaft. Sealed and weatherproofed to IP-55 protection standards. Gear reducer-driven systems for larger capacities."
    },
    {
      title: "Precision Water Distribution",
      description: "Hot water raised by hot water riser and transported through M.S.H.D.G./P.V.C. hot water header. Branch distribution pipes with Polypropylene Splash cups/non-clogging nozzles ensure uniform water distribution over entire fill area."
    }
  ];

  return (
    <section className="w-full">
      {/* Hero Introduction */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-gradient-to-br from-primary/10 to-blue-50 rounded-2xl border border-primary/20 p-6 mb-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
              FRP Counter Flow Rectangular/Square Cooling Towers - Up to 1,500 TR Capacity
            </h1>
            <p className="text-2xl font-semibold text-primary">
              Single Cell Capacity: Up to 1,500 TR with FRP Basin
            </p>
          </div>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Paltech's <strong>FRP Counter Flow Rectangular/Square Shape Cooling Towers</strong> represent the pinnacle of high-capacity industrial cooling technology, engineered for facilities requiring <strong>substantial cooling capacity in space-efficient configurations</strong>. These versatile cooling systems combine the structural strength of premium FRP composites with innovative design engineering, delivering exceptional thermal performance for medium to large-scale industrial applications.
            </p>
            <p>
              Our rectangular and square shape cooling towers feature <strong>single cell capacity up to 1,500 TR with FRP basin</strong>, making them ideal for power generation facilities, manufacturing plants, chemical processing industries, and large-scale HVAC systems. The versatile rectangular and square configurations maximize space utilization while maintaining optimal cooling performance, providing flexibility for diverse installation requirements and space constraints.
            </p>
            <p>
              For applications requiring even larger capacities, our <strong>multi-cell construction</strong> capabilities enable unlimited scalability, allowing customization from hundreds to thousands of TR based on specific cooling requirements. Each system is engineered using premium-grade FRP materials, precision manufacturing techniques, and rigorous quality control processes ensuring long-term reliability and optimal performance.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Features & Technical Advantages
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

      {/* Components */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Premium Components & Engineering Excellence
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {components.map((component, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  {component.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity & Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Capacity Range & Technical Specifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Settings className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Single Cell Capacity</h3>
                    <p className="text-gray-600">Available from <strong>3TR to 1,500 TR</strong> in a single cell configuration, providing comprehensive coverage for diverse cooling requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Multi-Cell Configurations</h3>
                    <p className="text-gray-600">Larger capacities available through multiple cell construction, providing unlimited scalability for ultra-large capacity requirements.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Design Flexibility</h3>
                    <p className="text-gray-600">Rectangular and square configurations optimized for space-efficient installations while maintaining optimal thermal performance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Droplets className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Basin Options</h3>
                    <p className="text-gray-600">FRP basin standard for capacities up to 1,500 TR. RCC basin options available for larger capacity requirements.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-gray-900">Note:</span> Detailed dimensions, engineering drawings, performance curves, water distribution layouts, and comprehensive technical data are available with formal proposals and quotations. Please contact our technical team for detailed specifications tailored to your specific capacity requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ideal Applications & Industries
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Power Generation Plants",
              "Petrochemical Refineries",
              "Chemical Processing Industries",
              "Large-Scale Manufacturing",
              "Industrial HVAC Systems",
              "Steel & Metal Processing",
              "Pulp & Paper Mills",
              "Food Processing Industries",
              "Pharmaceutical Manufacturing",
              "Data Centers",
              "Water Treatment Facilities",
              "Heavy Industrial Applications"
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need High-Capacity Rectangular/Square FRP Cooling Towers?</h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Share your capacity requirements, space constraints, and installation preferences. Our cooling tower experts will provide customized recommendations, detailed specifications, and competitive pricing for your high-capacity cooling needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-primary px-8 py-4 font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contact Sales Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default FrpCounterFlowRectangularSquareShape2Content;
