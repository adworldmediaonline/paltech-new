"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Zap, Settings, Droplets, Shield, Factory } from "lucide-react";

export function FrpFanLessInducedDraftJetTypeFrpContent() {
  const keyFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Zero Fan Energy Consumption",
      description: "Fan-less design eliminates mechanical fan components, reducing energy consumption significantly while maintaining optimal cooling performance through innovative jet-induced draft technology."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Minimal Maintenance Requirements",
      description: "Elimination of fan motors, belts, and related mechanical components results in dramatically reduced maintenance needs, lower operating costs, and extended service life."
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Low Noise Operation",
      description: "Fan-less design ensures exceptionally quiet operation, making these cooling towers ideal for noise-sensitive applications including urban installations and residential areas."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Superior Reliability",
      description: "Fewer moving parts translate to enhanced reliability, reduced failure points, and continuous operation without mechanical component-related downtime."
    },
  ];

  const technicalSpecs = [
    {
      title: "High-Quality FRP Casing",
      description: "Premium FRP molded panels securely joined and sealed with reinforced construction ensuring exceptional strength, corrosion resistance, and weather durability."
    },
    {
      title: "Advanced Fill Media",
      description: "High-efficiency film/splash fills enhance contact between air and water streams, optimizing heat transfer rates and ensuring superior thermal performance."
    },
    {
      title: "Innovative Jet Type System",
      description: "Jet system generates powerful, directed water flow eliminating traditional fans and creating natural draft through the tower for efficient cooling operation."
    },
    {
      title: "Multi-Blade Drift Eliminators",
      description: "Specially designed multi-blade drift eliminators reduce carryout losses by capturing moisture droplets, ensuring optimal water efficiency and environmental compliance."
    },
    {
      title: "Precision Water Distribution",
      description: "Precisely engineered pipes and nozzles ensure uniform water distribution over entire fill area, providing maintenance-free operation and optimal thermal efficiency."
    },
    {
      title: "Corrosion-Resistant Materials",
      description: "Louvers in FRP; distribution systems in GI/PVC; structural components in HDGMS/Pultruded FRP; nozzles in specially designed Nylon/PP ensuring long-term durability."
    }
  ];

  const applications = [
    "Urban Commercial Installations",
    "Residential Complex Cooling",
    "Noise-Sensitive Applications",
    "Energy-Conscious Facilities",
    "Low-Maintenance Requirements",
    "Environmentally Sensitive Areas",
    "Healthcare Facilities",
    "Educational Institutions",
    "Office Buildings",
    "Shopping Malls",
    "Hotels & Resorts",
    "Mixed-Use Developments"
  ];

  return (
    <section className="w-full">
      {/* Hero Introduction */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Fan-less Induced Draft Jet Type FRP Cooling Towers - Energy-Efficient Innovation
          </h1>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Paltech's <strong>Fan-less Induced Draft Jet Type FRP Cooling Towers</strong> represent a revolutionary approach to industrial cooling, combining <strong>zero fan energy consumption, minimal maintenance requirements, and exceptional reliability</strong> with superior thermal performance. These innovative cooling systems eliminate traditional mechanical fan components, utilizing advanced jet-induced draft technology to create natural air flow through the tower.
            </p>
            <p>
              The <strong>fan-less design eliminates motor-driven fans, belts, pulleys, and related mechanical components</strong>, resulting in dramatically reduced energy consumption, lower operating costs, and minimal maintenance requirements. This innovative technology makes these cooling towers ideal for applications prioritizing energy efficiency, noise reduction, low maintenance, and reliable operation without mechanical component-related downtime.
            </p>
            <p>
              Our fan-less jet type cooling towers generate powerful, directed water flow creating natural draft through innovative engineering, ensuring optimal cooling performance while maintaining exceptional energy efficiency. These systems are particularly suitable for <strong>installations requiring low noise operation, energy-conscious facilities, and applications where conventional fan systems are impractical or undesirable</strong>.
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
            Technical Specifications & Components
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  {spec.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity & Basin Options */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Capacity Range & Configuration Options</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Settings className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Capacity Range</h3>
                    <p className="text-gray-600">Available from <strong>150 TR and above</strong>, scalable for diverse industrial and commercial cooling applications with flexible capacity requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Factory className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Scalability</h3>
                    <p className="text-gray-600">Multiple models and configurations available to meet specific cooling demands, capacity requirements, and installation constraints.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Droplets className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Basin Options</h3>
                    <p className="text-gray-600">Available with <strong>FRP-coated MS basin</strong> or <strong>without basin</strong> depending on specific requirements and installation preferences.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Customization</h3>
                    <p className="text-gray-600">Custom-engineered solutions tailored to specific capacity, environmental conditions, and operational requirements.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-gray-900">Note:</span> Detailed dimensions, engineering drawings, performance specifications, and comprehensive technical data are available with formal proposals and quotations. Please contact our technical team for detailed specifications tailored to your specific application requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ideal Applications & Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map((app, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-primary/5 hover:border-primary transition-colors">
                <p className="text-gray-700 font-medium">{app}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Summary */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Fan-less Jet Type Cooling Towers?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Low Maintenance</h3>
                    <p className="text-gray-600 text-sm">Fan-less and jet type design minimizes moving parts and service requirements, reducing maintenance overhead significantly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Efficient Heat Transfer</h3>
                    <p className="text-gray-600 text-sm">Optimized air-water interaction ensures excellent thermal performance with superior heat transfer efficiency.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Durable Construction</h3>
                    <p className="text-gray-600 text-sm">High-quality FRP, GI, PVC with engineered nozzles ensuring longevity and exceptional corrosion resistance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Customization Options</h3>
                    <p className="text-gray-600 text-sm">Multiple models and configurations available to meet specific cooling demands and operational requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Interested in Energy-Efficient Fan-less Cooling Towers?</h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Share your application requirements, capacity needs, and performance objectives. Our cooling tower experts will provide customized recommendations, detailed specifications, and competitive pricing for your fan-less cooling tower needs.
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

export default FrpFanLessInducedDraftJetTypeFrpContent;
