"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Zap, Settings, Shield, Factory, Cpu } from "lucide-react";

export function MultiCircuitPowerSaverScrollScrewChillingPlantWaterAirCooledContent() {
  const keyFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Power Saver Technology",
      description: "Carefully designed multi-circuit configuration optimizes energy consumption, reducing operational costs through intelligent load management and compressor staging."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Optimum Performance Design",
      description: "Engineered for maximum efficiency utilizing scroll and screw compressor technology with multi-circuit design ensuring optimal performance across varying load conditions."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Advanced Control Systems",
      description: "LCD display and comprehensive data recording capability utilizing best-in-class controls suitable for global markets, ensuring precise operation and monitoring."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Industrial-Grade Components",
      description: "Long-lasting heavy-duty industrial components manufactured per national and international design and fabrication standards ensuring reliability and extended service life."
    },
  ];

  return (
    <section className="w-full">
      {/* Hero Introduction */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Multi-Circuit Power Saver Scroll/Screw Chilling Plants - Maximum Energy Efficiency
          </h1>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Paltech's <strong>Multi-Circuit Power Saver Scroll/Screw Chilling Plants (Water/Air Cooled)</strong> are carefully engineered for <strong>optimum performance and maximum energy efficiency</strong>, utilizing advanced scroll and screw compressor technology with intelligent multi-circuit design. These sophisticated chilling systems combine the reliability of proven compressor technologies with innovative power-saving features, delivering exceptional efficiency while maintaining superior cooling performance.
            </p>
            <p>
              Our multi-circuit power saver chilling plants use <strong>long-lasting heavy-duty industrial components</strong> manufactured per national and international design and fabrication standards including <strong>IS-2825, TEMA, ASHRAE, and ASME</strong>. The multi-circuit configuration enables intelligent compressor staging, allowing the system to match cooling capacity precisely to load demand, resulting in <strong>significantly reduced energy consumption</strong> and operational costs.
            </p>
            <p>
              These chilling plants feature <strong>LCD display and comprehensive data recording capability</strong>, utilizing best-in-class control systems suitable for global markets. The advanced control technology ensures precise operation, optimal energy utilization, and comprehensive system monitoring. Each circuit operates independently, providing redundancy, enhanced reliability, and flexible operation for varying load conditions while maximizing overall system efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Features & Energy-Saving Advantages
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

      {/* Power Saving Benefits */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Power Saver Technology Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Intelligent Compressor Staging</h3>
                    <p className="text-gray-600 text-sm">Multi-circuit design enables precise capacity matching to load demand, activating only required compressors for optimal energy efficiency.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Reduced Energy Consumption</h3>
                    <p className="text-gray-600 text-sm">Optimized operation results in significantly lower electricity consumption compared to single-circuit systems, reducing operational costs substantially.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Enhanced Reliability</h3>
                    <p className="text-gray-600 text-sm">Independent circuits provide redundancy, ensuring continued operation even if individual circuits require service, maximizing uptime.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Optimal Load Distribution</h3>
                    <p className="text-gray-600 text-sm">Intelligent load distribution across multiple circuits ensures balanced operation, extending component life and maintaining efficiency.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Flexible Operation</h3>
                    <p className="text-gray-600 text-sm">Multi-circuit configuration provides flexibility for varying load conditions, ensuring optimal performance across full operational spectrum.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Comprehensive Monitoring</h3>
                    <p className="text-gray-600 text-sm">Advanced control systems with LCD display and data recording enable performance tracking, optimization, and proactive maintenance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compressor Technology */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Scroll & Screw Compressor Technology
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Settings className="w-6 h-6 text-primary" />
                Scroll Compressor Advantages
              </h3>
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
                  <span>Proven reliability and long service life</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Factory className="w-6 h-6 text-primary" />
                Screw Compressor Advantages
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span>High capacity capability for large applications</span>
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
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ideal Applications & Industries
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Energy-Conscious Facilities",
              "Large-Scale Process Cooling",
              "Commercial HVAC Systems",
              "Industrial Manufacturing",
              "Data Centers",
              "Food Processing Industries",
              "Pharmaceutical Manufacturing",
              "Chemical Processing",
              "Plastic Processing",
              "Cold Storage Facilities",
              "Beverage Production",
              "Multi-Shift Operations"
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Interested in Power-Saving Multi-Circuit Chilling Plants?</h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Share your load profile, duty cycle requirements, and energy efficiency objectives. Our chiller experts will provide tailored multi-circuit power saver solutions with detailed specifications and competitive pricing.
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

export default MultiCircuitPowerSaverScrollScrewChillingPlantWaterAirCooledContent;
