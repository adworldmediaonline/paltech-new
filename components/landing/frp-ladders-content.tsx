"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Zap, Settings, Factory, TrendingUp } from "lucide-react";

export function FrpLaddersContent() {
  const ladderTypes = [
    {
      title: "Straight Ladder",
      description: "Made of high-strength FRP materials for durable industrial use. Available with Flat Ribbed and Fluted Tube type steps.",
      specs: [
        "Channel size: 75×30×6.35 mm (flat ribbed) / 63×30×6.00 mm or 50×50×5.00 mm (fluted)",
        "Step size: 63 mm (flat ribbed) / 32 mm (fluted with/without aluminum pipe)",
        "Rung spacing: 300 mm; Rung length: 450 mm",
        "Workload: 150–175 kg",
        "Height options: 3′ to 20′"
      ]
    },
    {
      title: "Extension Ladder",
      description: "High-strength FRP construction suitable for varied industrial use with extended reach capabilities.",
      specs: [
        "Height range: 16′ to 40′",
        "Channel size: 75×30×6.35 mm",
        "Step size: 63 mm flat ribbed / 32 mm ø fluted tube with or without aluminum pipe",
        "Rung spacing: 300 mm; Rung length: 450 mm",
        "Workload: 125–150 kg",
        "Accessories: Aluminum stopper, hooks, steel sliders, rope"
      ]
    },
    {
      title: "Self-Supported Stool Type Ladder",
      description: "Durable FRP stool ladders for versatile maintenance tasks with self-supporting stability.",
      variants: [
        "Single side flat ribbed/fluted tube step",
        "Double side flat ribbed/fluted tube step",
        "One side flat ribbed and other side fluted step"
      ],
      specs: [
        "Height: 3′ to 20′",
        "Channel size: 75×30×6.35 mm",
        "Step size: 63 mm flat ribbed / 32 mm ø fluted tube with or without aluminum pipe",
        "Rung spacing: 300 mm",
        "Platform size: 325×190 mm",
        "Workload: 150–175 kg"
      ]
    }
  ];

  const keyFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Non-Conductive & Non-Metallic",
      description: "Safe around electricity, making FRP ladders ideal for electrical utility applications and environments with electrical hazards."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Lightweight & Easy Handling",
      description: "Lightweight construction enabling easy carrying, transportation, and setup while maintaining exceptional strength and durability."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Low Maintenance Requirements",
      description: "Minimal maintenance needs compared to traditional materials, reducing long-term operational costs and service requirements."
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "100% Rust & Waterproof",
      description: "Non-corrosive construction ensuring 100% rust and water resistance, ideal for outdoor and corrosive environment applications."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "High Mechanical Strength",
      description: "Exceptional mechanical strength and durability ensuring reliable performance in demanding industrial applications."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Proven Durability",
      description: "Long service life with consistent performance characteristics, making FRP ladders cost-effective long-term solutions."
    }
  ];

  return (
    <section className="w-full">
      {/* Hero Introduction */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            FRP Ladders - Non-Conductive Safety Solutions for Industrial Applications
          </h1>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Paltech's <strong>Fiber Glass Reinforced Polymer (FRP) Ladders</strong> represent premium-grade industrial access solutions engineered for <strong>safety, durability, and reliability</strong> in demanding industrial environments. These non-conductive, non-metallic ladders provide superior safety characteristics compared to traditional materials, making them ideal for applications involving electrical hazards, corrosive environments, or outdoor exposure.
            </p>
            <p>
              Our FRP ladders are <strong>completely non-conductive and non-metallic</strong>, ensuring safety around electricity and making them ideal for electrical utility applications, power transmission facilities, and environments with electrical hazards. The lightweight construction enables easy carrying, transportation, and setup while maintaining exceptional mechanical strength and durability essential for industrial applications.
            </p>
            <p>
              Unlike traditional metal ladders that rust and require frequent maintenance, FRP ladders are <strong>100% rust and waterproof</strong>, ensuring long-term durability even in harsh outdoor and corrosive environments. The high mechanical strength and proven durability ensure reliable performance throughout extended service life, making FRP ladders cost-effective long-term solutions for diverse industrial access requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Features & Safety Advantages
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ladder Types */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Comprehensive FRP Ladder Range
          </h2>
          <div className="space-y-8">
            {ladderTypes.map((ladder, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  {ladder.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{ladder.description}</p>
                {ladder.variants && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Available Variants:</h4>
                    <ul className="space-y-2">
                      {ladder.variants.map((variant, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                          <span>{variant}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technical Specifications:</h4>
                  <ul className="space-y-2">
                    {ladder.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-primary mt-1" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
              "Electrical Utility Applications",
              "Power Transmission Facilities",
              "Cooling Tower Access",
              "Industrial Maintenance",
              "Chemical Processing Plants",
              "Marine Applications",
              "Telecommunications",
              "Defense Applications",
              "Water Treatment Facilities",
              "Petrochemical Facilities",
              "Offshore Platforms",
              "Outdoor Industrial Access"
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need Custom FRP Ladder Configuration?</h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Share your height requirements, duty class specifications, step type preferences, and accessory needs. Our team will provide tailored FRP ladder solutions with detailed specifications and competitive pricing.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-primary px-8 py-4 font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Let's Talk Business
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default FrpLaddersContent;
