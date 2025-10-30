"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Zap, Settings, Shield, Factory, Truck } from "lucide-react";

export function TrolleyMountedWaterAirCooledChillingPlantContent() {
  const keyFeatures = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Field Mobility & Portability",
      description: "Trolley-mounted design combines field mobility with dependable performance, enabling easy relocation and deployment across multiple locations."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Deployment",
      description: "Quick setup and commissioning capabilities enable rapid deployment for temporary or mobile cooling requirements, minimizing downtime."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Advanced Control Systems",
      description: "LCD display and comprehensive data logging capabilities controlled by reliable electronics used across global markets ensuring precise operation."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Long-Life Components",
      description: "Constructed with long-life industrial components adhering to national and international design and fabrication standards ensuring reliability and durability."
    },
  ];

  return (
    <section className="w-full">
      {/* Hero Introduction */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Trolley-Mounted Water/Air Cooled Chilling Plants - Mobile Cooling Solutions
          </h1>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Paltech's <strong>Trolley-Mounted Water/Air Cooled Chilling Plants</strong> combine <strong>field mobility with dependable performance</strong>, providing versatile cooling solutions for applications requiring portability, temporary deployment, or mobile operation. These innovative chilling systems feature robust trolley mounting enabling easy relocation and deployment across multiple locations while maintaining optimal cooling performance.
            </p>
            <p>
              Our trolley-mounted chilling plants feature <strong>LCD display and comprehensive data logging capabilities</strong>, controlled by reliable electronics used across global markets. The advanced control systems ensure precise operation, real-time monitoring, and performance tracking, enabling operators to maintain optimal efficiency and identify potential issues proactively. The portable design makes these systems ideal for temporary cooling requirements, mobile applications, or facilities requiring flexible cooling deployment.
            </p>
            <p>
              These systems are constructed with <strong>long-life industrial components</strong> adhering to relevant national and international design and fabrication standards including <strong>IS-2825, TEMA, ASHRAE, and ASME</strong>. The robust construction ensures reliable operation even during transportation and frequent relocation, making trolley-mounted chilling plants ideal for rental applications, temporary installations, or facilities requiring mobile cooling capabilities.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Features & Mobility Advantages
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

      {/* Mobility Benefits */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl p-8 border border-primary/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Mobility & Deployment Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Easy Transportation</h3>
                    <p className="text-gray-600 text-sm">Trolley-mounted design enables easy transportation between locations, reducing setup time and deployment complexity.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Quick Setup</h3>
                    <p className="text-gray-600 text-sm">Rapid deployment capabilities minimize installation time, enabling quick response to temporary cooling requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Flexible Deployment</h3>
                    <p className="text-gray-600 text-sm">Suitable for multiple locations, temporary installations, or facilities requiring mobile cooling capabilities.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Rental Applications</h3>
                    <p className="text-gray-600 text-sm">Ideal for rental applications where equipment needs to be deployed and redeployed across multiple sites.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Emergency Cooling</h3>
                    <p className="text-gray-600 text-sm">Rapid deployment capabilities make these systems ideal for emergency cooling requirements or temporary capacity needs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Maintenance Support</h3>
                    <p className="text-gray-600 text-sm">Mobility enables deployment during maintenance of permanent systems, ensuring uninterrupted cooling operation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ideal Applications & Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Temporary Cooling Requirements",
              "Mobile Applications",
              "Rental & Leasing",
              "Emergency Cooling",
              "Maintenance Backup",
              "Construction Sites",
              "Event Cooling",
              "Temporary Process Cooling",
              "Multi-Location Operations",
              "Field Testing",
              "Mobile Manufacturing",
              "Portable Cooling Solutions"
            ].map((app, index) => (
              <div key={index} className="p-4 bg-white rounded-lg border border-gray-200 hover:bg-primary/5 hover:border-primary transition-colors">
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need Mobile or Portable Chilling Solutions?</h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Share your site conditions, mobility requirements, and cooling load needs. Our chiller experts will provide tailored trolley-mounted solutions with detailed specifications and competitive pricing.
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

export default TrolleyMountedWaterAirCooledChillingPlantContent;
