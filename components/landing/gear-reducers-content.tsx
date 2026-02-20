import { ArrowRight, CheckCircle, Shield, Settings, Zap, Award, TrendingUp, Factory, Wrench, Package, Gauge, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function GearReducersContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Gear Reducers – Precision-Engineered Right-Angle Gear Drives
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          At Paltech™ Cooling Towers and Equipments Ltd., we design and manufacture high-performance <strong>Gear Reducers (Gearboxes)</strong> specifically engineered for industrial cooling tower applications. Built with superior materials and precision engineering, our gear drives deliver high torque, smooth transmission, and extended service life even under the most demanding environmental conditions.
        </p>
        <p className="text-base sm:text-lg text-gray-600">
          With over 39+ of experience in cooling tower engineering, Paltech™ Gear Reducers are trusted globally for their efficiency, reliability, and adherence to international quality standards.
        </p>
      </div>

      {/* High-Efficiency Section */}
      <div className="bg-linear-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl p-6 sm:p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">High-Efficiency Gearboxes Designed for Cooling Tower Operations</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Paltech™ Gear Reducers are right-angle gearboxes available in single and double reduction configurations to meet the varying torque and speed requirements of cooling tower fans and drive systems.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Each gearbox is designed as a direct replacement for industry-standard models, with matching mounting dimensions, shaft alignments, and ratios, ensuring seamless installation and interchangeability.
        </p>
        <p className="text-gray-700 leading-relaxed">
          These heavy-duty gear drives are engineered to perform efficiently in wet, high-load, and continuous operation environments typically found in industrial cooling towers.
        </p>
      </div>

      {/* Key Features */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Key Features and Advantages</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: <Zap className="w-5 h-5" />,
              title: "High Torque Transmission Efficiency",
              description: "Designed to handle large fan loads and high operating speeds."
            },
            {
              icon: <Settings className="w-5 h-5" />,
              title: "Spiral Bevel and Helical Gear Design",
              description: "Ensures smooth, vibration-free power transmission and reduced noise levels."
            },
            {
              icon: <Shield className="w-5 h-5" />,
              title: "Heavy-Duty Construction",
              description: "Made from premium materials for long-lasting reliability and superior strength."
            },
            {
              icon: <Package className="w-5 h-5" />,
              title: "Direct Replacement Design",
              description: "Interchangeable with major standard gear reducer models."
            },
            {
              icon: <TrendingUp className="w-5 h-5" />,
              title: "High Load Capacity",
              description: "Optimized gear geometry for higher torque output and reduced wear."
            },
            {
              icon: <Wrench className="w-5 h-5" />,
              title: "Low Maintenance Operation",
              description: "Built for durability, requiring minimal servicing."
            },
            {
              icon: <Award className="w-5 h-5" />,
              title: "CTI Compliant",
              description: "Designed and rated as per CTI STD-111 (86) performance standards."
            },
            {
              icon: <Gauge className="w-5 h-5" />,
              title: "Corrosion-Resistant Finish",
              description: "Suitable for harsh and humid cooling tower environments."
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

      {/* Product Highlights */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: <Cog className="w-8 h-8" />,
            title: "Single Reduction",
            description: "Ideal for moderate speed reduction requirements with compact design."
          },
          {
            icon: <Settings className="w-8 h-8" />,
            title: "Double Reduction",
            description: "Perfect for high torque and lower speed applications requiring greater reduction ratios."
          },
          {
            icon: <Factory className="w-8 h-8" />,
            title: "Industrial Grade",
            description: "Built to withstand continuous operations in demanding industrial environments."
          }
        ].map((highlight, index) => (
          <div
            key={index}
            className="p-6 bg-linear-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
              {highlight.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{highlight.title}</h3>
            <p className="text-gray-600 text-sm">{highlight.description}</p>
          </div>
        ))}
      </div>

      {/* Technical Specifications */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Technical Specifications</h2>

        {/* PSB-200 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-primary text-white px-6 py-4">
            <h3 className="text-xl font-semibold">Spiral Bevel Gear Reducer PSB - 200</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Model</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Gear Rated HP with SF &gt; 2 Over Prime Mover Power</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Output RPM at 1500 Input-RPM</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Net Weight (Kg)</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Gross Weight with Packing (Kg)</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Oil Capacity (Ltrs.)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { model: "PSB 200", hp: "35", rpm: "553", netWeight: "95", grossWeight: "105", oilCapacity: "9.5" },
                  { model: "PSB 200", hp: "35", rpm: "459", netWeight: "95", grossWeight: "105", oilCapacity: "9.5" },
                  { model: "PSB 200", hp: "25", rpm: "365", netWeight: "95", grossWeight: "105", oilCapacity: "9.5" }
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900 border-t border-gray-200">{row.model}</td>
                    <td className="px-4 py-3 text-gray-700 border-t border-gray-200">{row.hp}</td>
                    <td className="px-4 py-3 text-gray-700 border-t border-gray-200">{row.rpm}</td>
                    <td className="px-4 py-3 text-gray-700 border-t border-gray-200">{row.netWeight}</td>
                    <td className="px-4 py-3 text-gray-700 border-t border-gray-200">{row.grossWeight}</td>
                    <td className="px-4 py-3 text-gray-700 border-t border-gray-200">{row.oilCapacity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* PSB-300 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-primary text-white px-6 py-4">
            <h3 className="text-xl font-semibold">Spiral Bevel Gear Reducer PSB - 300</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Model</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Gear Rated HP with SF &gt; 2 Over Prime Mover Power</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Output RPM at 1500 Input-RPM</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Net Weight (Kg)</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Gross Weight with Packing (Kg)</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Oil Capacity (Ltrs.)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { model: "PSB 300", hp: "60", rpm: "272", netWeight: "170", grossWeight: "195", oilCapacity: "15" },
                  { model: "PSB 300", hp: "70", rpm: "328", netWeight: "170", grossWeight: "195", oilCapacity: "15" }
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900 border-t border-gray-200">{row.model}</td>
                    <td className="px-4 py-3 text-gray-700 border-t border-gray-200">{row.hp}</td>
                    <td className="px-4 py-3 text-gray-700 border-t border-gray-200">{row.rpm}</td>
                    <td className="px-4 py-3 text-gray-700 border-t border-gray-200">{row.netWeight}</td>
                    <td className="px-4 py-3 text-gray-700 border-t border-gray-200">{row.grossWeight}</td>
                    <td className="px-4 py-3 text-gray-700 border-t border-gray-200">{row.oilCapacity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* PSB-400 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-primary text-white px-6 py-4">
            <h3 className="text-xl font-semibold">Spiral Bevel Gear Reducer PSB - 400</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Model</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Gear Rated HP with SF &gt; 2 Over Prime Mover Power</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Output RPM at 1500 Input-RPM</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Net Weight (Kg)</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Gross Weight with Packing (Kg)</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Oil Capacity (Ltrs.)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { model: "PSB 400", hp: "80", rpm: "260", netWeight: "375", grossWeight: "405", oilCapacity: "40" },
                  { model: "PSB 400", hp: "75", rpm: "195", netWeight: "375", grossWeight: "405", oilCapacity: "40" }
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900 border-t border-gray-200">{row.model}</td>
                    <td className="px-4 py-3 text-gray-700 border-t border-gray-200">{row.hp}</td>
                    <td className="px-4 py-3 text-gray-700 border-t border-gray-200">{row.rpm}</td>
                    <td className="px-4 py-3 text-gray-700 border-t border-gray-200">{row.netWeight}</td>
                    <td className="px-4 py-3 text-gray-700 border-t border-gray-200">{row.grossWeight}</td>
                    <td className="px-4 py-3 text-gray-700 border-t border-gray-200">{row.oilCapacity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* PSB-500 & PSB-600 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-primary text-white px-6 py-4">
            <h3 className="text-xl font-semibold">Spiral Bevel Cum Helical Gear Reducer PSB - 500 & PSB 600</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Model</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Gear Rated HP with SF &gt; 2 Over Prime Mover Power</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Output RPM at 1500 Input-RPM</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Net Weight (Kg)</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Gross Weight with Packing (Kg)</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Oil Capacity (Ltrs.)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { model: "PSB 500", hp: "160", rpm: "134", netWeight: "850", grossWeight: "925", oilCapacity: "45" },
                  { model: "PSB 500", hp: "160", rpm: "116", netWeight: "850", grossWeight: "925", oilCapacity: "45" },
                  { model: "PSB 500", hp: "160", rpm: "170", netWeight: "850", grossWeight: "925", oilCapacity: "45" },
                  { model: "PSB 500", hp: "175", rpm: "100", netWeight: "850", grossWeight: "925", oilCapacity: "45" },
                  { model: "PSB 600", hp: "220", rpm: "115", netWeight: "1400", grossWeight: "1500", oilCapacity: "75" }
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900 border-t border-gray-200">{row.model}</td>
                    <td className="px-4 py-3 text-gray-700 border-t border-gray-200">{row.hp}</td>
                    <td className="px-4 py-3 text-gray-700 border-t border-gray-200">{row.rpm}</td>
                    <td className="px-4 py-3 text-gray-700 border-t border-gray-200">{row.netWeight}</td>
                    <td className="px-4 py-3 text-gray-700 border-t border-gray-200">{row.grossWeight}</td>
                    <td className="px-4 py-3 text-gray-700 border-t border-gray-200">{row.oilCapacity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Design Features */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Design Excellence</h2>
        <div className="grid gap-6">
          {[
            {
              icon: <Settings className="w-7 h-7" />,
              title: "Spiral Bevel Gear Technology",
              description: "Advanced spiral bevel gear design ensures smooth meshing, reduced noise, and higher load capacity. The curved tooth profile distributes load evenly across the gear face, resulting in longer service life and quieter operation."
            },
            {
              icon: <Cog className="w-7 h-7" />,
              title: "Helical Gear Integration",
              description: "Double reduction models incorporate helical gears in the second stage, providing additional torque multiplication while maintaining compact dimensions and operational efficiency."
            },
            {
              icon: <Shield className="w-7 h-7" />,
              title: "Robust Housing Design",
              description: "Heavy-duty cast iron housing with precision-machined mounting surfaces ensures perfect alignment and long-term dimensional stability even under high-load conditions."
            },
            {
              icon: <Gauge className="w-7 h-7" />,
              title: "Optimized Lubrication System",
              description: "Splash lubrication design ensures all critical components receive adequate oil coverage during operation, reducing friction and extending gear life without the need for forced lubrication."
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6 sm:p-8 flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  {feature.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Applications</h2>
        <p className="text-gray-700 mb-4">Paltech™ Gear Reducers are used in:</p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {[
            "Industrial Cooling Towers (FRP, Timber, RCC, Crossflow, Counterflow)",
            "Power Generation Units",
            "HVAC and Process Cooling Systems",
            "Chemical and Petrochemical Plants",
            "Fertilizer, Steel, and Sugar Industries"
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
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Why Choose Paltech™ Gear Reducers?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: <Award className="w-5 h-5" />,
              text: "39+ Years of Engineering Expertise in cooling tower and power transmission systems."
            },
            {
              icon: <CheckCircle className="w-5 h-5" />,
              text: "ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 Certified Manufacturing."
            },
            {
              icon: <Factory className="w-5 h-5" />,
              text: "Global Installations across 30+ countries."
            },
            {
              icon: <Settings className="w-5 h-5" />,
              text: "Precision Design & Durability: Manufactured under strict quality control for consistent performance."
            },
            {
              icon: <Wrench className="w-5 h-5" />,
              text: "Custom Design Support: Paltech™ engineers can modify gear ratios, mounting, or materials based on your cooling tower specifications."
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
              question: "What makes Paltech™ Gear Reducers suitable for cooling towers?",
              answer: "They are purpose-built for cooling tower applications, offering high torque transmission, low noise, and corrosion-resistant construction, ensuring long-term reliability."
            },
            {
              question: "Can these gear reducers replace my existing gearbox model?",
              answer: "Yes. Paltech™ Gear Reducers are dimensionally compatible with standard industry models, allowing direct replacement without modification."
            },
            {
              question: "Are the gear reducers compliant with international standards?",
              answer: "Absolutely. They are rated and designed as per CTI STD-111 (86) and ANSI/AGMA guidelines, meeting global engineering standards."
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
          Enhance Your Cooling Tower's Efficiency
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-2">
          Trust Paltech™ Gear Reducers — the proven choice for high-torque industrial applications
        </p>
        <p className="text-base text-white/80 mb-8">
          Paltech™ — Engineering Excellence in Every Revolution.
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

