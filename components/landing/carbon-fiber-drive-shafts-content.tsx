import { ArrowRight, CheckCircle, Shield, Settings, Zap, Award, TrendingUp, Factory, Wrench, Package, Gauge, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CarbonFiberDriveShaftsContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Carbon Fiber Drive Shafts – Advanced Composite Power Transmission
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          As the demand for higher torque, lightweight, and corrosion-resistant drive shafts continues to grow, Paltech™ Cooling Towers and Equipments Ltd. has engineered a new generation of <strong>Carbon Fiber Drive Shafts</strong> designed for superior strength, extended service life, and maintenance-free performance.
        </p>
        <p className="text-base sm:text-lg text-gray-600">
          Built using high-modulus carbon fiber composites, these shafts offer exceptional stiffness-to-weight ratio, low vibration, and high torque transmission efficiency, making them ideal for long-span and high-performance industrial cooling tower applications.
        </p>
      </div>

      {/* Engineered Section */}
      <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl p-6 sm:p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Engineered for Modern Industrial Demands</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Paltech™ Carbon Fiber Drive Shafts are precision-engineered, single-span, non-lubricated composite shafts that excel under rugged environmental conditions such as high humidity, chemical exposure, and saline atmospheres.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Each shaft is dynamically balanced and designed for maximum mechanical efficiency, ensuring stable power transfer between the motor and gearbox even in high-capacity cooling tower systems.
        </p>
      </div>

      {/* Key Features & Advantages */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Key Features & Advantages</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: <Zap className="w-5 h-5" />,
              title: "High Torque Capability",
              description: "Supports heavy-duty industrial cooling tower operations."
            },
            {
              icon: <Shield className="w-5 h-5" />,
              title: "Inherent Corrosion Resistance",
              description: "Carbon composite construction eliminates rust and degradation."
            },
            {
              icon: <TrendingUp className="w-5 h-5" />,
              title: "Superior Strength-to-Weight Ratio",
              description: "Up to 60% lighter than traditional steel shafts."
            },
            {
              icon: <Award className="w-5 h-5" />,
              title: "Longer Fatigue Life",
              description: "Enhanced fiber bonding for extended operational lifespan."
            },
            {
              icon: <Wrench className="w-5 h-5" />,
              title: "Maintenance-Free Design",
              description: "Non-lubricated flexible couplings eliminate periodic servicing."
            },
            {
              icon: <Settings className="w-5 h-5" />,
              title: "High Misalignment Tolerance",
              description: "Handles both angular and parallel misalignments efficiently."
            },
            {
              icon: <Gauge className="w-5 h-5" />,
              title: "Smooth Operation",
              description: "Reduces vibration and noise levels for stable system performance."
            },
            {
              icon: <Package className="w-5 h-5" />,
              title: "Easy Installation",
              description: "Lightweight and modular design for quick alignment and setup."
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

      {/* Innovative Product Design */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Innovative Product Design</h2>
        <div className="grid gap-6">
          {/* Central Carbon Composite Shaft */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Cog className="w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">1. Central Carbon Composite Shaft</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>The core section is crafted using high-modulus carbon fiber, providing exceptional longitudinal stiffness for long-span installations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Eliminates the need for intermediate bearings, reduces mechanical losses, and improves power transmission efficiency</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Composite Flanges */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Settings className="w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">2. Composite Flanges</h3>
                  <p className="text-gray-600">
                    High-strength carbon composite flanges connect the shaft assembly securely while minimizing weight and maintaining alignment accuracy under high torque.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Flexi Discs */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Package className="w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">3. Flexi Discs</h3>
                  <p className="text-gray-600 mb-3">
                    Paltech™ Flexi Discs are constructed using advanced composite materials and urethane elastomer encapsulation for:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>High fatigue life and superior vibration damping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Low axial and angular restoring forces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Excellent protection against moisture and chemical exposure in harsh environments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Hubs & Hardware */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Shield className="w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">4. Hubs & Hardware</h3>
                  <p className="text-gray-600">
                    All hubs and hardware are made from <strong>SS 316 stainless steel</strong>, offering superior corrosion resistance in acidic, saline, or chemically active cooling tower conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Assurance & Testing Standards */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Quality Assurance & Testing Standards</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          Every Paltech™ Carbon Fiber Drive Shaft undergoes stringent performance and quality testing to ensure unmatched reliability.
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
                { parameter: "Torque Test", standard: "Tested at 3× Continuous Rated Torque" },
                { parameter: "Flexural Fatigue Test", standard: "Up to 10,000 Cycles at Rated Torque" },
                { parameter: "Critical Speed Testing", standard: "Verified on Dedicated Speed Test Rigs" },
                { parameter: "Safety Certification", standard: "ATEX (CE) Certified for Hazardous Environments" }
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
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Applications</h2>
        <p className="text-gray-700 mb-4">Paltech™ Carbon Fiber Drive Shafts are suitable for:</p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {[
            "Industrial Cooling Towers (FRP, Timber, RCC, Crossflow, and Counterflow types)",
            "Power Generation Units",
            "Petrochemical & Chemical Processing Plants",
            "HVAC and Process Cooling Systems",
            "Steel, Fertilizer & Cement Industries"
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
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Why Choose Paltech™ Carbon Fiber Drive Shafts?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: <Award className="w-5 h-5" />,
              text: "39+ Years of Manufacturing Expertise in cooling tower technology."
            },
            {
              icon: <CheckCircle className="w-5 h-5" />,
              text: "ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 Certified Production."
            },
            {
              icon: <Settings className="w-5 h-5" />,
              text: "Custom-engineered solutions to match your cooling tower design and torque requirements."
            },
            {
              icon: <Factory className="w-5 h-5" />,
              text: "Trusted by 500+ industries across 30+ countries."
            },
            {
              icon: <Shield className="w-5 h-5" />,
              text: "Backed by Paltech's global service network and dedicated after-sales support."
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
              question: "Why choose Carbon Fiber Drive Shafts over steel or aluminum?",
              answer: "Carbon fiber offers higher torque capacity, lighter weight, and zero corrosion, making it ideal for high-performance industrial cooling applications."
            },
            {
              question: "Do Paltech™ shafts require lubrication or maintenance?",
              answer: "No. These shafts feature non-lubricated couplings, making them completely maintenance-free throughout their operational life."
            },
            {
              question: "Can Paltech™ customize shaft dimensions for my cooling tower model?",
              answer: "Yes. We provide custom-built drive shafts based on your tower configuration, load, and installation requirements."
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
      <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 sm:p-12 text-center text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Upgrade Your Cooling System Today
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-2">
          Experience the next generation of Carbon Fiber Drive Shafts from Paltech™
        </p>
        <p className="text-base text-white/80 mb-8">
          Smoother operation, higher efficiency, and longer lifespan — only with Paltech™.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="tel:+911244499700" className="inline-flex items-center gap-2 text-white hover:text-white/90 font-semibold">
            📞 +91-124-4499700
          </a>
          <a href="mailto:paltech@paltech.in" className="inline-flex items-center gap-2 text-white hover:text-white/90 font-semibold">
            📩 paltech@paltech.in
          </a>
          <a href="https://www.paltech.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-white/90 font-semibold">
            🌐 www.paltech.in
          </a>
        </div>
      </div>
    </div>
  );
}

