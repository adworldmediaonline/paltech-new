"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Settings, Factory, Building2 } from "lucide-react";

export function FrpGratingsContent() {
  const keyFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Superior Corrosion Resistance",
      description: "Pultruded FRP gratings resist corrosion unlike steel gratings, making them ideal for corrosive environments requiring minimal maintenance."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Multiple Profile Options",
      description: "Available in T-bar, I-bar, and heavy load bar profiles, providing flexibility for diverse load requirements and structural applications."
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Structural Applications",
      description: "Suitable for walkways, platforms, and industrial access areas requiring weight-bearing capacity across spans when engineered correctly."
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Minimal Maintenance",
      description: "Corrosion-resistant construction minimizes maintenance requirements, reducing long-term operational costs and downtime."
    },
  ];

  return (
    <section className="w-full">
      {/* Hero Introduction */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            FRP Gratings - Corrosion-Resistant Structural Solutions
          </h1>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Paltech's <strong>Pultruded FRP Gratings</strong> are corrosion-resistant structural products engineered for <strong>demanding industrial environments requiring minimal maintenance</strong>. These premium-grade gratings provide superior performance compared to traditional steel gratings in corrosive conditions, making them ideal for walkways, platforms, overhead areas, and industrial access applications.
            </p>
            <p>
              Unlike steel gratings that require frequent maintenance and coating in corrosive environments, <strong>FRP gratings resist corrosion</strong> naturally, ensuring long-term durability and reduced maintenance overhead. These gratings can be <strong>weight-bearing across spans when engineered correctly</strong>, providing structural integrity while maintaining the corrosion resistance and lightweight advantages of FRP composite materials.
            </p>
            <p>
              Our FRP gratings are available in <strong>T-bar, I-bar, and heavy load bar profiles</strong>, providing flexibility for diverse load requirements and structural applications. Each profile is engineered for specific load capacities and span requirements, ensuring optimal performance and safety. The pultruded manufacturing process ensures consistent quality, dimensional accuracy, and mechanical properties essential for structural applications.
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

      {/* Technical Specifications */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl p-8 border border-primary/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications & Selection</h2>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="text-gray-700 leading-relaxed mb-4">
                I-Beam sizes and recommended loads vary by cross-rod spacing. For detailed selection and engineering drawings, please provide:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span><strong>Span requirements:</strong> Distance between supports</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span><strong>Load class:</strong> Expected load per square meter/foot</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span><strong>Environment:</strong> Corrosive conditions, temperature range, exposure factors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <span><strong>Profile preference:</strong> T-bar, I-bar, or heavy load bar</span>
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
            Ideal Applications & Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Industrial Walkways",
              "Platform Flooring",
              "Overhead Access Areas",
              "Chemical Processing Plants",
              "Water Treatment Facilities",
              "Cooling Tower Platforms",
              "Marine Applications",
              "Food Processing Facilities",
              "Wastewater Treatment",
              "Petrochemical Facilities",
              "Offshore Platforms",
              "Corrosive Environment Access"
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Interested in FRP Gratings?</h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Share your span requirements, load class, resin system preferences, and profile specifications. Our engineering team will provide detailed selection recommendations, technical drawings, and competitive pricing.
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

export default FrpGratingsContent;
