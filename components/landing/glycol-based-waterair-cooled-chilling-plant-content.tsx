"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Thermometer, Zap, Settings, Droplets, Shield } from "lucide-react";

export function GlycolBasedWaterAirCooledChillingPlantContent() {
  const keyFeatures = [
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Low-Temperature Operation",
      description: "Specifically designed for low-temperature applications with outlet glycol temperatures from +5°C down to -50°C, unlike modified medium-temperature chillers."
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Secondary Refrigerant Systems",
      description: "Widely applied for process cooling and as part of secondary refrigerant systems for chilled and cold-storage applications requiring precise temperature control."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Packaged Unit Flexibility",
      description: "Available across comprehensive range of capacities with flexible configuration options for diverse industrial and commercial low-temperature applications."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Purpose-Built Design",
      description: "Engineered specifically for low-temperature operation rather than modified systems, ensuring optimal performance, reliability, and efficiency."
    },
  ];

  return (
    <section className="w-full">
      {/* Hero Introduction */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Glycol-Based Water/Air Cooled Chilling Plants - Low-Temperature Process Cooling Solutions
          </h1>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Paltech's <strong>Glycol-Based Water/Air Cooled Chilling Plants</strong> are engineered specifically for <strong>low-temperature applications</strong>, unlike conventional medium-temperature chillers that have been modified to operate at lower temperatures. These purpose-built systems deliver optimal performance, reliability, and efficiency for applications requiring precise low-temperature control ranging from <strong>+5°C down to -50°C</strong>.
            </p>
            <p>
              Glycol-based chillers are widely applied for <strong>process cooling applications</strong> and as integral components of <strong>secondary refrigerant systems</strong> for chilled and cold-storage facilities. The glycol-based refrigerant provides superior low-temperature performance, ensuring reliable operation even under extreme conditions while maintaining precise temperature control essential for sensitive processes and storage requirements.
            </p>
            <p>
              Our packaged glycol chilling units are available across a <strong>comprehensive range of capacities</strong>, providing flexibility for diverse industrial applications including food processing, pharmaceutical manufacturing, cold storage, and specialized process cooling. Each system is engineered using premium-grade components, advanced control systems, and rigorous quality control processes ensuring reliable performance and extended service life.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Features & Technical Advantages
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

      {/* Temperature Range */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl p-8 border border-primary/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Temperature Range & Capacity</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Thermometer className="w-5 h-5 text-primary" />
                  Operating Temperature Range
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Outlet glycol temperatures from <strong>+5°C down to -50°C</strong>, providing comprehensive coverage for diverse low-temperature applications requiring precise temperature control.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  Capacity Options
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Packaged units available across <strong>wide range of capacities</strong>, from small process cooling applications to large-scale cold storage facilities, ensuring scalability for diverse requirements.
                </p>
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
              "Chilled Storage Facilities",
              "Cold Storage Systems",
              "Food Processing Industries",
              "Pharmaceutical Manufacturing",
              "Ice Making Facilities",
              "Beverage Production",
              "Chemical Processing",
              "Laboratory Cooling",
              "Medical Equipment Cooling",
              "Freeze Drying Processes",
              "Cryogenic Applications"
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Interested in Glycol-Based Low-Temperature Chilling?</h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Share your temperature range requirements, cooling load, and application specifics. Our chiller experts will provide tailored glycol-based solutions with detailed specifications and competitive pricing.
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

export default GlycolBasedWaterAirCooledChillingPlantContent;
