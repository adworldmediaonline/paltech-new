"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Zap, Settings, Shield, Factory, Cpu } from "lucide-react";

export function ReciprocatingWaterAirCooledChillingPlantContent() {
  const keyFeatures = [
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Proven Reciprocating Technology",
      description: "Robust reciprocating compressor engineering delivers reliable performance across diverse applications with proven durability and long service life."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Independent Refrigeration Circuits",
      description: "Single or multiple truly independent refrigeration circuits providing maximum uptime, serviceability, and operational flexibility through multi-compressor configurations."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Proven Control Systems",
      description: "Reliable control systems ensuring precise operation, optimal performance, and comprehensive monitoring capabilities for diverse industrial applications."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Wide Application Range",
      description: "Versatile design suitable for diverse applications from small process cooling to large-scale industrial cooling requirements with reliable performance."
    },
  ];

  return (
    <section className="w-full">
      {/* Hero Introduction */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Reciprocating Water/Air Cooled Chilling Plants - Proven Reliability & Performance
          </h1>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Paltech's <strong>Reciprocating Water/Air Cooled Chilling Plants</strong> combine <strong>robust engineering with proven control technology</strong>, delivering reliable performance across diverse industrial and commercial applications. These dependable chilling systems utilize reciprocating compressor technology, renowned for its durability, reliability, and proven track record in demanding industrial environments.
            </p>
            <p>
              Our reciprocating chilling plants can be configured with <strong>single or multiple truly independent refrigeration circuits</strong>, providing maximum uptime, enhanced serviceability, and operational flexibility. The multi-compressor configuration ensures continued operation even during maintenance or service requirements, minimizing downtime and ensuring uninterrupted cooling performance.
            </p>
            <p>
              These systems feature <strong>proven control systems</strong> ensuring precise operation, optimal performance, and comprehensive monitoring capabilities. The robust construction and reliable components ensure long-term durability and consistent performance, making reciprocating chilling plants an ideal choice for applications requiring dependable operation and proven reliability.
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

      {/* Reciprocating Compressor Benefits */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl p-8 border border-primary/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Reciprocating Compressor Technology Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Proven Reliability</h3>
                    <p className="text-gray-600 text-sm">Decades of proven performance in industrial applications with demonstrated durability and long service life.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Cost-Effective Solution</h3>
                    <p className="text-gray-600 text-sm">Lower initial investment compared to alternative compressor technologies while maintaining reliable performance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Simple Maintenance</h3>
                    <p className="text-gray-600 text-sm">Straightforward maintenance procedures and readily available components ensuring cost-effective serviceability.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Wide Capacity Range</h3>
                    <p className="text-gray-600 text-sm">Suitable for diverse capacity requirements from small process cooling to medium-scale industrial applications.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Independent Circuit Operation</h3>
                    <p className="text-gray-600 text-sm">Multiple independent circuits provide redundancy and flexibility, ensuring maximum uptime and operational reliability.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Proven Performance</h3>
                    <p className="text-gray-600 text-sm">Established technology with extensive operational history demonstrating consistent performance and reliability.</p>
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
            Ideal Applications & Industries
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Process Cooling Applications",
              "Commercial HVAC Systems",
              "Industrial Manufacturing",
              "Food Processing Industries",
              "Pharmaceutical Manufacturing",
              "Chemical Processing",
              "Plastic Processing",
              "Cold Storage Facilities",
              "Beverage Production",
              "Printing & Packaging",
              "Medical Equipment Cooling",
              "Laboratory Cooling"
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Interested in Reciprocating Chilling Plants?</h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Share your duty cycle requirements, capacity needs, and operational preferences. Our chiller experts will provide tailored reciprocating solutions with detailed specifications and competitive pricing.
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

export default ReciprocatingWaterAirCooledChillingPlantContent;
