"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Zap, Settings, Droplets, Leaf } from "lucide-react";

export function CfcFreeWaterAirCooledChillingPlantContent() {
  const keyFeatures = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Environmentally Sustainable",
      description: "CFC-free refrigerants eliminate ozone-depleting compounds, ensuring compliance with environmental regulations and contributing to sustainable industrial practices."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Significant Efficiency Improvements",
      description: "Paltech's optimized engineering and conversion expertise deliver substantial efficiency improvements in CFC-free chillers, reducing energy consumption and operational costs."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Regulatory Compliance",
      description: "Fully compliant with international environmental regulations including Montreal Protocol requirements, ensuring long-term operational viability and regulatory approval."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Advanced Conversion Technology",
      description: "Expert conversion capabilities from CFC systems to modern CFC-free alternatives, maintaining or improving performance while ensuring environmental compliance."
    },
  ];

  const benefits = [
    {
      title: "Ozone Layer Protection",
      description: "Elimination of chlorofluorocarbons (CFCs) prevents ozone layer depletion, contributing to global environmental protection efforts and regulatory compliance."
    },
    {
      title: "Enhanced Energy Efficiency",
      description: "Modern CFC-free refrigerants and optimized system design deliver improved energy efficiency compared to traditional CFC-based systems, reducing operating costs."
    },
    {
      title: "Future-Proof Technology",
      description: "CFC-free systems ensure long-term operational viability as regulations continue to phase out ozone-depleting substances, protecting your investment."
    },
    {
      title: "Superior Cooling Performance",
      description: "Advanced CFC-free refrigerants provide equivalent or superior cooling performance while maintaining system reliability and operational efficiency."
    }
  ];

  return (
    <section className="w-full">
      {/* Hero Introduction */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            CFC-Free Water/Air Cooled Chilling Plants - Environmentally Sustainable Cooling Solutions
          </h1>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Paltech's <strong>CFC-Free Water/Air Cooled Chilling Plants</strong> represent the future of environmentally responsible industrial cooling, eliminating chlorofluorocarbons (CFCs) that have been extensively used in air-conditioning and refrigeration systems worldwide. These advanced chilling systems provide <strong>sustainable alternatives to conventional centrifugal, screw, and reciprocating equipment</strong>, ensuring compliance with international environmental regulations while maintaining or improving cooling performance.
            </p>
            <p>
              CFCs have been identified as significant contributors to ozone layer depletion, leading to global regulatory initiatives including the Montreal Protocol phasing out these substances. <strong>CFC-free chilling plants utilize modern alternative refrigerants</strong> that eliminate ozone-depleting compounds while delivering equivalent or superior cooling performance. These systems ensure long-term operational viability, regulatory compliance, and environmental responsibility.
            </p>
            <p>
              Paltech's <strong>optimized engineering and conversion expertise</strong> can deliver significant efficiency improvements in CFC-free chillers, provided adequate cooling capacity is available. Our technical team specializes in converting existing CFC-based systems to modern CFC-free alternatives, maintaining or improving performance while ensuring environmental compliance and future-proofing your cooling infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Features & Environmental Advantages
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

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Benefits of CFC-Free Chilling Plants
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Conversion & Optimization Services</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Paltech specializes in converting existing CFC-based chilling systems to modern CFC-free alternatives, ensuring smooth transition while maintaining or improving system performance. Our conversion process includes:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 mt-6">
                {[
                  "Complete system assessment and evaluation",
                  "Refrigerant replacement with CFC-free alternatives",
                  "Component optimization for new refrigerants",
                  "Performance testing and validation",
                  "Efficiency improvements and optimization",
                  "Regulatory compliance documentation"
                ].map((service, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{service}</span>
                  </li>
                ))}
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
              "Environmentally Conscious Facilities",
              "Regulatory Compliance Requirements",
              "System Modernization Projects",
              "Industrial Process Cooling",
              "Commercial HVAC Systems",
              "Food & Beverage Processing",
              "Pharmaceutical Manufacturing",
              "Cold Storage Facilities",
              "Data Center Cooling",
              "Healthcare Facilities",
              "Educational Institutions",
              "Government Facilities"
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Interested in CFC-Free Chilling Solutions?</h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Share your chilling requirements, capacity needs, and environmental compliance objectives. Our experts will provide tailored CFC-free solutions, conversion services, or new system recommendations with detailed specifications and competitive pricing.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-primary px-8 py-4 font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Request Proposal & Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default CfcFreeWaterAirCooledChillingPlantContent;
