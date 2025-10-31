"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Settings, Factory, Building2, Layers } from "lucide-react";

export function FrpDeckPanelsContent() {
  const keyFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Corrosion-Resistant Construction",
      description: "High-strength, corrosion-resistant GRP deck panels engineered for durability in challenging industrial environments requiring minimal maintenance."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Feather-Light Design",
      description: "Lightweight construction enabling easy handling, transportation, and installation while maintaining exceptional structural strength and load-bearing capacity."
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Staircase Platform Compatibility",
      description: "Compatible with staircase platforms and ladder systems, providing integrated access solutions for industrial and commercial applications."
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Industrial-Grade Strength",
      description: "High-strength construction engineered for demanding industrial applications requiring reliable load-bearing capacity and structural integrity."
    },
  ];

  const applications = [
    {
      title: "Cooling Tower Decking",
      description: "Ideal for cooling tower platforms and decking applications requiring corrosion resistance and structural integrity."
    },
    {
      title: "Odor Control Covers",
      description: "Suitable for odor control cover applications in wastewater treatment and industrial facilities."
    },
    {
      title: "Roofing Walkways",
      description: "Perfect for rooftop walkway applications providing safe access while maintaining weather resistance."
    },
    {
      title: "Temporary Flooring",
      description: "Excellent for temporary flooring solutions requiring quick installation and removal capabilities."
    },
    {
      title: "Scaffolding",
      description: "Lightweight scaffolding solutions providing safe working platforms with corrosion resistance."
    },
    {
      title: "Cellular Wall Panels",
      description: "Versatile cellular wall panel applications for industrial and commercial building requirements."
    }
  ];

  return (
    <section className="w-full">
      {/* Hero Introduction */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            FRP Deck Panels - High-Strength Corrosion-Resistant Structural Solutions
          </h1>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Paltech™ introduces <strong>high-strength, corrosion-resistant, and feather-light GRP deck panels</strong> engineered for demanding industrial applications requiring superior performance, durability, and ease of installation. These premium-grade deck panels combine exceptional structural strength with corrosion resistance, making them ideal for applications where traditional materials fail due to environmental conditions or maintenance requirements.
            </p>
            <p>
              Our FRP deck panels feature <strong>compatibility with staircase platforms and ladder systems</strong>, providing integrated access solutions for industrial and commercial applications. The lightweight construction enables easy handling, transportation, and installation while maintaining exceptional structural strength and load-bearing capacity. This combination of properties makes FRP deck panels ideal for applications requiring both structural integrity and ease of installation.
            </p>
            <p>
              Unlike traditional materials that require frequent maintenance and replacement in corrosive environments, <strong>FRP deck panels resist corrosion</strong> naturally, ensuring long-term durability and reduced maintenance overhead. The high-strength construction ensures reliable performance in demanding industrial applications while the lightweight design reduces structural load requirements and installation complexity.
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

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Applications & Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <div key={index} className="bg-gradient-to-br from-primary/5 to-blue-50 p-6 rounded-xl border border-primary/20">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-primary" />
                  {app.title}
                </h3>
                <p className="text-gray-600 text-sm">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Selection Criteria & Specifications</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For detailed engineering recommendations and specifications, please provide:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span><strong>Size requirements:</strong> Panel dimensions and coverage area</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span><strong>Load class:</strong> Expected load per square meter/foot</span>
                </li>
              </ul>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span><strong>Environment:</strong> Corrosive conditions, temperature range, exposure</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span><strong>Installation requirements:</strong> Access constraints, compatibility needs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Interested in FRP Deck Panels?</h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Share your size requirements, load class specifications, environmental conditions, and installation constraints. Our engineering team will provide tailored deck panel solutions with detailed specifications and competitive pricing.
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

export default FrpDeckPanelsContent;
