"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Droplets, Settings, Zap, Building2 } from "lucide-react";

export function FrpCoolingTowersContent() {
  const frpTypes = [
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Counter Flow Bottle Shape FRP Cooling Towers",
      href: "/cooling-towers/frp-cooling-towers/counter-flow-bottle-shape-2",
      description: "Aesthetically pleasing bottle-shaped design combining visual appeal with superior thermal efficiency. Ideal for applications requiring both functional performance and architectural integration."
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Counter Flow Rectangular/Square Shape FRP Cooling Towers",
      href: "/cooling-towers/frp-cooling-towers/counter-flow-rectangularsquare-shape-2",
      description: "Versatile rectangular and square configurations offering maximum capacity up to 1,500 TR per cell with FRP basin. Perfect for space-optimized installations requiring high cooling capacity."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Fan-less Induced Draft Jet Type FRP Cooling Towers",
      href: "/cooling-towers/frp-cooling-towers/fan-less-induced-draft-jet-type-frp",
      description: "Energy-efficient fan-less design utilizing jet-induced draft principles for optimal cooling performance. Eliminates mechanical fan components reducing maintenance and energy consumption."
    }
  ];

  const keyFeatures = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Design Flexibility & Aesthetics",
      description: "Available in various shapes including bottle, rectangular, and square configurations, with multiple color options to complement your facility's aesthetics and surroundings."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High Capacity Performance",
      description: "Single cell capacity up to 1,500 TR with FRP basin, suitable for medium to large-scale industrial cooling applications requiring substantial capacity."
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Corrosion Resistance",
      description: "Superior resistance to corrosion, chemical attack, and environmental degradation, making them ideal for harsh industrial environments and aggressive water conditions."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Low Maintenance Requirements",
      description: "Designed for minimal maintenance with smooth surfaces, non-porous construction, and durable components ensuring long-term operational efficiency."
    },
  ];

  return (
    <section className="w-full">
      {/* Hero Introduction */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            FRP Cooling Towers - Versatile Design Flexibility for Modern Industrial Cooling
          </h1>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Paltech™ offers an extensive selection of <strong>FRP (Fiber Reinforced Plastic) Cooling Towers</strong>, available in various shapes, sizes, and colors to complement your facility's aesthetics and operational requirements. As one of India's <strong>leading manufacturers of FRP Induced Draft Cooling Towers</strong>, we deliver efficient, reliable, and aesthetically pleasing cooling solutions engineered for superior performance across diverse industrial applications.
            </p>
            <p>
              Our FRP cooling towers combine <strong>advanced composite technology</strong> with innovative design engineering, delivering exceptional corrosion resistance, lightweight construction, and design flexibility. Whether you require visually appealing bottle-shaped configurations, space-efficient rectangular/square designs, or energy-efficient fan-less jet type systems, Paltech™ provides comprehensive solutions tailored to your specific capacity requirements, space constraints, and performance objectives.
            </p>
            <p>
              Each FRP cooling tower system is engineered using <strong>premium-grade FRP materials</strong>, precision manufacturing techniques, and rigorous quality control processes. Our comprehensive range includes counter flow configurations with capacities up to 1,500 TR per cell, innovative fan-less designs reducing energy consumption, and customizable aesthetic options ensuring seamless integration with your facility's architectural requirements.
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

      {/* Product Types */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive FRP Cooling Tower Range
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our diverse lineup of FRP cooling towers, each engineered for specific performance characteristics, capacity requirements, and aesthetic preferences.
            </p>
          </div>
          <div className="space-y-6">
            {frpTypes.map((type, index) => (
              <Link
                key={index}
                href={type.href}
                className="group block bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {type.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary mb-2 transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {type.description}
                    </p>
                    <div className="flex items-center text-primary font-medium">
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications & Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-gray-900">Single Cell Capacity:</span>
                  <span className="text-gray-600">Up to 1,500 TR with FRP basin</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-gray-900">Design Options:</span>
                  <span className="text-gray-600">Counter flow, cross flow configurations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-gray-900">Construction Material:</span>
                  <span className="text-gray-600">Premium-grade FRP composites</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-gray-900">Aesthetic Options:</span>
                  <span className="text-gray-600">Multiple shapes & color choices</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-gray-900">Energy Efficiency:</span>
                  <span className="text-gray-600">Fan-less options available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-gray-900">Customization:</span>
                  <span className="text-gray-600">Tailored to specific requirements</span>
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
              "HVAC Systems for Commercial Buildings",
              "Industrial Manufacturing Facilities",
              "Data Centers & Server Rooms",
              "Chemical Processing Plants",
              "Food Processing Industries",
              "Pharmaceutical Manufacturing",
              "Textile Industries",
              "Plastic Processing",
              "Automotive Manufacturing",
              "Air Conditioning Systems",
              "Process Cooling Applications",
              "Water Treatment Facilities"
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need a Tailored FRP Cooling Tower Configuration?</h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Share your application details, capacity requirements, and aesthetic preferences. Our cooling tower experts will provide customized recommendations, detailed specifications, and competitive pricing for your FRP cooling tower needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white text-primary px-8 py-4 font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Request Custom Proposal
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/cooling-towers"
                className="inline-flex items-center justify-center rounded-full bg-transparent text-white border-2 border-white px-8 py-4 font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                View All Cooling Towers
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/80">
              <span className="font-semibold">Note:</span> Detailed dimensions, engineering drawings, and technical specifications are provided with formal proposals and quotations.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default FrpCoolingTowersContent;
