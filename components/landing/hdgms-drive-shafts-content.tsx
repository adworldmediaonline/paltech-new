import { ArrowRight, CheckCircle, Shield, Settings, Zap, Award, TrendingUp, Factory, Wrench, Package, Gauge, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HdgmsDriveShaftsContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          HDGMS Drive Shafts – High-Performance Power Transmission
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Paltech™ Cooling Towers and Equipments Ltd. offers premium <strong>HDGMS (High-Density Glass Fiber Reinforced Composite) Drive Shafts</strong> designed for reliable power transmission in industrial cooling tower applications with superior strength, durability, and corrosion resistance.
        </p>
        <p className="text-base sm:text-lg text-gray-600">
          Engineered with advanced composite materials, HDGMS drive shafts provide exceptional mechanical properties, reduced maintenance requirements, and extended service life in demanding industrial environments.
        </p>
      </div>

      {/* Engineered Section */}
      <div className="bg-linear-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl p-6 sm:p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Engineered for Industrial Excellence</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Paltech™ HDGMS Drive Shafts are precision-engineered composite shafts that deliver reliable performance under challenging environmental conditions including high humidity, temperature variations, and corrosive atmospheres.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Each shaft is dynamically balanced and designed for optimal mechanical efficiency, ensuring stable power transfer between motor and gearbox in industrial cooling tower systems.
        </p>
      </div>

      {/* Key Features & Advantages */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Key Features & Advantages</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: <Zap className="w-5 h-5" />,
              title: "High Torque Transmission",
              description: "Supports industrial cooling tower operations efficiently."
            },
            {
              icon: <Shield className="w-5 h-5" />,
              title: "Corrosion Resistant",
              description: "Composite construction eliminates rust and chemical degradation."
            },
            {
              icon: <TrendingUp className="w-5 h-5" />,
              title: "Excellent Strength-to-Weight Ratio",
              description: "Lighter than steel while maintaining structural integrity."
            },
            {
              icon: <Award className="w-5 h-5" />,
              title: "Extended Service Life",
              description: "Enhanced durability for long-term operational reliability."
            },
            {
              icon: <Wrench className="w-5 h-5" />,
              title: "Low Maintenance",
              description: "Reduced servicing requirements compared to traditional shafts."
            },
            {
              icon: <Settings className="w-5 h-5" />,
              title: "Misalignment Tolerance",
              description: "Handles angular and parallel misalignments effectively."
            },
            {
              icon: <Gauge className="w-5 h-5" />,
              title: "Smooth Performance",
              description: "Minimizes vibration for stable system operation."
            },
            {
              icon: <Package className="w-5 h-5" />,
              title: "Easy Installation",
              description: "Modular design for quick setup and alignment."
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-5 bg-white rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Design */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Advanced Product Design</h2>
        <div className="grid gap-6">
          {/* Composite Shaft Core */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Cog className="w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">1. High-Density Composite Core</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Constructed with high-density glass fiber reinforced composites for superior strength and stiffness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Optimized for efficient power transmission with minimal energy losses</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Coupling System */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Settings className="w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">2. Flexible Coupling System</h3>
                  <p className="text-gray-600">
                    Advanced flexible couplings provide smooth torque transfer while accommodating misalignment and reducing vibration transmission.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Protective Coating */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Shield className="w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">3. Corrosion Protection</h3>
                  <p className="text-gray-600">
                    Inherent corrosion resistance protects against harsh environmental conditions, eliminating the need for additional protective coatings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hardware Components */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Package className="w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">4. Premium Hardware</h3>
                  <p className="text-gray-600">
                    All mounting hardware and connecting components are manufactured from high-grade stainless steel for maximum durability and corrosion resistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Standards */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Quality Assurance Standards</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          Every Paltech™ HDGMS Drive Shaft undergoes comprehensive testing to ensure superior performance and reliability.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-6 py-4 text-left font-semibold">Test Parameter</th>
                <th className="px-6 py-4 text-left font-semibold">Standard/Performance</th>
              </tr>
            </thead>
            <tbody>
              {[
                { parameter: "Dynamic Balancing", standard: "ISO 1940-1:2003, Grade 6.3" },
                { parameter: "Torque Capacity", standard: "Tested at Rated Operational Torque" },
                { parameter: "Fatigue Testing", standard: "Extended Cycle Testing at Operating Conditions" },
                { parameter: "Material Quality", standard: "High-Grade Composite Materials Certification" },
                { parameter: "Manufacturing Standards", standard: "ISO 9001:2015 Certified Production" }
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-6 py-4 font-medium text-gray-900 border-t border-gray-200">{row.parameter}</td>
                  <td className="px-6 py-4 text-gray-700 border-t border-gray-200">{row.standard}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Applications */}
      <div className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Applications</h2>
        <p className="text-gray-700 mb-4">Paltech™ HDGMS Drive Shafts are ideal for:</p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {[
            "Industrial Cooling Towers (FRP, Timber, RCC, Crossflow, and Counterflow)",
            "Power Generation Facilities",
            "Chemical and Petrochemical Plants",
            "HVAC and Industrial Process Cooling",
            "Steel, Cement & Manufacturing Industries"
          ].map((app, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-gray-700">{app}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Why Choose Paltech™ */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Why Choose Paltech™ HDGMS Drive Shafts?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: <Award className="w-5 h-5" />,
              text: "37+ Years of Manufacturing Excellence in cooling tower technology."
            },
            {
              icon: <CheckCircle className="w-5 h-5" />,
              text: "ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 Certified."
            },
            {
              icon: <Settings className="w-5 h-5" />,
              text: "Custom-engineered solutions for your specific requirements."
            },
            {
              icon: <Factory className="w-5 h-5" />,
              text: "Trusted by industries across 25+ countries worldwide."
            },
            {
              icon: <Shield className="w-5 h-5" />,
              text: "Comprehensive after-sales support and service network."
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200">
              <div className="text-primary shrink-0 mt-0.5">{item.icon}</div>
              <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "What are the advantages of HDGMS drive shafts?",
              answer: "HDGMS drive shafts offer excellent corrosion resistance, reduced weight, low maintenance requirements, and reliable performance in demanding industrial applications."
            },
            {
              question: "Do HDGMS shafts require special maintenance?",
              answer: "HDGMS shafts require minimal maintenance compared to traditional steel shafts, with no need for frequent lubrication or rust prevention treatments."
            },
            {
              question: "Can Paltech™ provide custom shaft specifications?",
              answer: "Yes. We offer custom-engineered drive shafts tailored to your cooling tower configuration, load requirements, and installation specifications."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary/40 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-linear-to-br from-primary to-primary/90 rounded-2xl p-8 sm:p-12 text-center text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Upgrade Your Cooling System Today
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-2">
          Experience the reliability of HDGMS Drive Shafts from Paltech™
        </p>
        <p className="text-base text-white/80 mb-8">
          Superior performance, extended lifespan, and minimal maintenance — only with Paltech™.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="tel:+911244499700" className="inline-flex items-center gap-2 text-white hover:text-white/90 font-semibold">
            📞 +91-124-4499700
          </a>
          <a href="mailto:paltech@paltech.net.in" className="inline-flex items-center gap-2 text-white hover:text-white/90 font-semibold">
            📩 paltech@paltech.net.in
          </a>
          <a href="https://www.paltech.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-white/90 font-semibold">
            🌐 www.paltech.in
          </a>
        </div>
      </div>
    </div>
  );
}

