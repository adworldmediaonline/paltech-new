"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Zap, Settings, Shield, Monitor, Cpu } from "lucide-react";

export function MicroProcessorBasedWaterAirCooledChillingPlantContent() {
  const keyFeatures = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Advanced Microprocessor Controls",
      description: "State-of-the-art microprocessor-based control systems with LCD display and data recording capability, ensuring precise operation, monitoring, and performance optimization."
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "LCD Display & Data Recording",
      description: "Integrated LCD display and comprehensive data recording facility enabling real-time monitoring, performance tracking, and historical data analysis for optimal system management."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Multiple Independent Circuits",
      description: "Single or multiple truly independent refrigeration circuits providing flexibility via multi-compressor configurations, ensuring maximum uptime and serviceability."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Rugged Construction & Quality",
      description: "Optimum design, quality construction, rugged skid, and sturdy casing ensuring durability, reliability, and long-term performance in demanding industrial environments."
    },
  ];

  return (
    <section className="w-full">
      {/* Hero Introduction */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Microprocessor-Based Water/Air Cooled Chilling Plants - Intelligent Control Technology
          </h1>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Paltech's <strong>Microprocessor-Based Water/Air Cooled Chilling Plants</strong> represent the pinnacle of intelligent industrial cooling technology, featuring <strong>advanced microprocessor control systems</strong> with LCD display and comprehensive data recording capabilities. These sophisticated chilling systems combine cutting-edge control technology with robust engineering, delivering precise operation, optimal energy efficiency, and comprehensive system management capabilities.
            </p>
            <p>
              Our microprocessor-based chilling plants feature <strong>optimum design, quality construction, rugged skid mounting, and sturdy casing</strong>, ensuring durability and reliability in demanding industrial environments. The advanced control systems provide <strong>single or multiple truly independent refrigeration circuits</strong>, offering flexibility through multi-compressor configurations that ensure maximum uptime, serviceability, and operational efficiency.
            </p>
            <p>
              The integrated <strong>LCD display and data recording facility</strong> enable real-time monitoring of critical parameters, performance tracking, and historical data analysis. This comprehensive monitoring capability allows operators to optimize system performance, identify potential issues proactively, and maintain optimal efficiency throughout the operational lifecycle. The microprocessor-based controls ensure precise temperature control, intelligent load management, and adaptive operation based on changing conditions.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Features & Advanced Control Capabilities
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

      {/* Control System Benefits */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl p-8 border border-primary/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Control System Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Precise Temperature Control</h3>
                    <p className="text-gray-600 text-sm">Microprocessor-based controls ensure accurate temperature regulation within tight tolerances, maintaining optimal process conditions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Intelligent Load Management</h3>
                    <p className="text-gray-600 text-sm">Advanced algorithms optimize compressor operation based on load demand, ensuring energy efficiency and extended component life.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Fault Detection & Diagnostics</h3>
                    <p className="text-gray-600 text-sm">Comprehensive diagnostic capabilities identify potential issues early, enabling proactive maintenance and preventing downtime.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Data Logging & Analysis</h3>
                    <p className="text-gray-600 text-sm">Historical data recording enables performance analysis, trend monitoring, and optimization opportunities identification.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Multi-Circuit Flexibility</h3>
                    <p className="text-gray-600 text-sm">Independent refrigeration circuits provide redundancy, enhanced reliability, and flexible operation for varying load conditions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">User-Friendly Interface</h3>
                    <p className="text-gray-600 text-sm">Intuitive LCD display provides clear system status, operational parameters, and easy access to control functions.</p>
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
              "Precision Process Cooling",
              "Pharmaceutical Manufacturing",
              "Food & Beverage Processing",
              "Data Center Cooling",
              "Commercial HVAC Systems",
              "Laboratory Cooling",
              "Industrial Manufacturing",
              "Cold Storage Facilities",
              "Chemical Processing",
              "Medical Equipment Cooling",
              "Research Facilities",
              "Controlled Environment Applications"
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Interested in Microprocessor-Based Chilling Plants?</h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Share your load profile, control requirements, and operational needs. Our chiller experts will provide tailored microprocessor-based solutions with advanced control capabilities, detailed specifications, and competitive pricing.
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

export default MicroProcessorBasedWaterAirCooledChillingPlantContent;
