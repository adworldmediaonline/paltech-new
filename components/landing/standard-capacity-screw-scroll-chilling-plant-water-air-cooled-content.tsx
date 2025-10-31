"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Zap, Settings, Shield, Factory, Cpu } from "lucide-react";

export function StandardCapacityScrewScrollChillingPlantWaterAirCooledContent() {
  const keyFeatures = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Optimum Performance Design",
      description: "Carefully engineered for maximum efficiency utilizing scroll and screw compressor technology ensuring optimal performance across diverse load conditions."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Advanced Control Systems",
      description: "LCD display and comprehensive data recording capability utilizing best-in-class controls ensuring precise operation, monitoring, and performance optimization."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Premium Industrial Components",
      description: "Heavy-duty, long-lasting industrial components conforming to national and international standards ensuring reliability, durability, and extended service life."
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Standard & Reliable Operation",
      description: "Proven standard capacity configurations delivering consistent performance and reliable operation for diverse industrial and commercial applications."
    },
  ];

  return (
    <section className="w-full">
      {/* Hero Introduction */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Standard Capacity Screw/Scroll Chilling Plants - Proven Performance & Reliability
          </h1>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Paltech's <strong>Standard Capacity Screw/Scroll Chilling Plants (Water/Air Cooled)</strong> are engineered for <strong>optimum performance and reliable operation</strong>, utilizing advanced scroll and screw compressor technology in proven standard configurations. These dependable chilling systems combine the efficiency of modern compressor technology with robust engineering, delivering consistent performance across diverse industrial and commercial applications.
            </p>
            <p>
              Our standard capacity chilling plants feature <strong>LCD display and comprehensive data recording capability</strong>, utilizing best-in-class control systems ensuring precise operation, real-time monitoring, and performance optimization. The advanced control technology provides operators with comprehensive system visibility, enabling proactive maintenance, performance tracking, and optimal efficiency management.
            </p>
            <p>
              Paltech™ utilizes <strong>heavy-duty, long-lasting industrial components</strong> conforming to relevant national and international standards including <strong>IS-2825, TEMA, ASHRAE, and ASME</strong>. Each system undergoes rigorous quality control and testing processes, ensuring reliable operation, extended service life, and optimal performance throughout the operational lifecycle. The standard capacity configurations provide proven reliability and cost-effectiveness for diverse cooling requirements.
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

      {/* Technology Benefits */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Scroll & Screw Compressor Technology Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/5 to-blue-50 p-6 rounded-xl border border-primary/20">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scroll Compressor Advantages</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span>Superior efficiency at part-load conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span>Reduced noise and vibration levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span>Simplified maintenance requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span>Proven reliability and durability</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-blue-50 p-6 rounded-xl border border-primary/20">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Screw Compressor Advantages</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span>High capacity capability for larger applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span>Excellent efficiency across wide load range</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span>Variable capacity control for optimal efficiency</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span>Durable construction for industrial applications</span>
                </li>
              </ul>
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
              "Industrial Process Cooling",
              "Commercial HVAC Systems",
              "Manufacturing Facilities",
              "Food Processing Industries",
              "Pharmaceutical Manufacturing",
              "Chemical Processing",
              "Plastic Processing",
              "Cold Storage Facilities",
              "Data Center Cooling",
              "Printing & Packaging",
              "Beverage Production",
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Interested in Standard Capacity Chilling Plants?</h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Share your capacity requirements and duty cycle needs. Our chiller experts will provide tailored standard capacity solutions with detailed specifications and competitive pricing.
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

export default StandardCapacityScrewScrollChillingPlantWaterAirCooledContent;
