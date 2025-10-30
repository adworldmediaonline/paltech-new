"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Droplets, Settings, Factory, Building2 } from "lucide-react";

export function FrpCorrugatedSheetsContent() {
  const keyFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Rust-Proof & Fire Retardant",
      description: "Superior corrosion resistance and fire retardant properties ensuring long-term durability and safety in diverse environmental conditions."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Lightweight with High Strength",
      description: "Exceptional strength-to-weight ratio providing structural integrity while maintaining easy handling and installation advantages."
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Acid/Alkali Resistant",
      description: "Resistant to acid and alkali fumes making them ideal for chemical processing, industrial, and corrosive environment applications."
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Weather-Resistant Properties",
      description: "Free from cracking, wrapping, and buckling issues ensuring dimensional stability and long-term performance in harsh weather conditions."
    },
  ];

  const specifications = [
    { label: "Thickness", value: "0.8mm, 1.2mm, 1.5mm, 2mm, 2.5mm, 3mm, 4mm" },
    { label: "Colors", value: "Clear, Sky Blue, Light Green" },
    { label: "Profiles", value: "Over 100 general profiles available" },
    { label: "Length", value: "Cut to requirement (transport-suitable)" },
    { label: "Density", value: "2.1–2.15 g/cm³" },
    { label: "Fiber Content", value: "Greater than 25%" },
    { label: "Light Transmission", value: "60–85%" }
  ];

  return (
    <section className="w-full">
      {/* Hero Introduction */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            FRP Corrugated Sheets - Superior Corrosion Resistance & Weatherproof Solutions
          </h1>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Paltech's <strong>FRP Corrugated Sheets</strong> represent premium-grade composite building materials engineered for <strong>superior corrosion resistance, weatherproof performance, and structural integrity</strong>. These versatile sheets combine the strength of fiberglass reinforcement with the durability of polymer resins, delivering exceptional performance in diverse industrial, commercial, and residential applications.
            </p>
            <p>
              Our FRP corrugated sheets are <strong>completely rust-proof and fire retardant</strong>, ensuring long-term durability and safety in diverse environmental conditions. The lightweight construction with high tensile strength provides exceptional strength-to-weight ratio, enabling easy handling, transportation, and installation while maintaining structural integrity. These sheets are <strong>resistant to acid and alkali fumes</strong>, making them ideal for chemical processing facilities, industrial applications, and corrosive environments where traditional materials fail.
            </p>
            <p>
              Unlike traditional materials that suffer from cracking, wrapping, and buckling issues, FRP corrugated sheets maintain <strong>dimensional stability and structural integrity</strong> even under extreme weather conditions and temperature variations. Available in multiple thicknesses, colors, and profiles, these sheets offer design flexibility while providing superior performance characteristics essential for demanding applications.
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

      {/* Specifications */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Technical Specifications & Options
          </h2>
          <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl p-8 border border-primary/20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specifications.map((spec, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{spec.label}:</h3>
                  <p className="text-gray-600">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Application Areas & Use Cases
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-primary" />
                Domestic Applications
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span>Parking sheds and covered areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span>Room extensions and additions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span>Toilets and bathroom roofing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span>Residential roofing solutions</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Droplets className="w-6 h-6 text-primary" />
                Transportation
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span>Bus stations and waiting areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span>Ticket counters and booking offices</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span>Parcel offices and cargo terminals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span>Transportation shelters</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Factory className="w-6 h-6 text-primary" />
                Agriculture
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span>Farm houses and agricultural buildings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span>Poultry farms and livestock shelters</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span>Generator rooms and equipment shelters</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span>Agricultural storage sheds</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Interested in FRP Corrugated Sheets?</h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Share your profile requirements, thickness specifications, color preferences, and quantity needs. Our team will provide tailored proposals with detailed specifications and competitive pricing.
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

export default FrpCorrugatedSheetsContent;
