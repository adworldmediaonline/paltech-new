import { ArrowRight, CheckCircle, Shield, Settings, Zap, Award, TrendingUp, Factory, Wrench, Package, Wind, Gauge, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AxialFansContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Paltech™ High-Efficiency FRP Cooling Tower Fans
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Elevate your plant's cooling tower performance with Paltech™ <strong>FRP Fans</strong> — expertly engineered for superior airflow, maximum energy savings, and long-term reliability. Manufactured from top-grade Fiberglass Reinforced Plastic (FRP), these fans are ideal for high-demand, corrosive, and humid industrial environments.
        </p>
      </div>

      {/* Energy Savings Highlight */}
      <div className="bg-gradient-to-br from-green-50 via-green-50/50 to-transparent rounded-2xl p-6 sm:p-8 border border-green-200">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600 shrink-0">
            <Zap className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Up to 40% Energy Savings</h3>
            <p className="text-gray-700 leading-relaxed">
              Achieve substantial reduction in plant operating costs with our advanced aerodynamic design and premium FRP construction.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Why Choose Paltech™ FRP Cooling Tower Fans?</h2>
        <div className="grid gap-4">
          {[
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Exceptional Energy Efficiency",
              description: "Achieve up to 40% power savings compared to conventional metallic fans, supporting substantial reduction in plant operating costs."
            },
            {
              icon: <Wind className="w-6 h-6" />,
              title: "Advanced Aerodynamic Design",
              description: "Hollow aerofoil blades provide smoother laminar flow, higher coefficient of lift, and minimized drag, resulting in enhanced cooling performance."
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Superior Corrosion Resistance",
              description: "FRP construction resists rust, chemical fumes, salt, and harsh climates — ensuring consistent, reliable operation for 15–25 years."
            },
            {
              icon: <Package className="w-6 h-6" />,
              title: "Lightweight yet Strong",
              description: "Robust yet light impellers lower stress on gearboxes, motors, and bearings, improving component life and reducing downtime."
            },
            {
              icon: <Volume2 className="w-6 h-6" />,
              title: "Whisper-Quiet Operation",
              description: "Mirror-finished blade surfaces and optimized hub design ensure minimal turbulence, low vibration, and silent performance."
            },
            {
              icon: <TrendingUp className="w-6 h-6" />,
              title: "Rapid ROI",
              description: "Typical payback period of 3–8 months through lower energy bills and reduced maintenance."
            },
            {
              icon: <Settings className="w-6 h-6" />,
              title: "Custom Tailored",
              description: "Available in multiple diameters, blade counts, and adjustable pitch designs — ideal for both new installations and retrofits."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fan Type Options */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Fan Type Options</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              icon: <Wind className="w-8 h-8" />,
              title: "FRP Fans",
              description: "Lightweight, low-noise, and ideal for high-humidity environments with superior corrosion resistance.",
              link: "/spares/axial-fans/frp",
              features: [
                "Up to 40% energy savings",
                "15-25 years lifespan",
                "Corrosion resistant",
                "Whisper-quiet operation"
              ]
            },
            {
              icon: <Factory className="w-8 h-8" />,
              title: "Aluminum Fans",
              description: "High static pressure, robust design, and superior balance for long-term industrial use.",
              link: "/spares/axial-fans/aluminum",
              features: [
                "High static pressure",
                "Robust construction",
                "Superior balance",
                "Heavy-duty performance"
              ]
            }
          ].map((type, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                {type.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <ul className="space-y-2 mb-6">
                {type.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={type.link}>
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Technical Specifications</h2>

        {/* Performance & Operating Ranges */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="bg-primary text-white px-6 py-4">
            <h3 className="text-xl font-semibold">Performance & Operating Ranges</h3>
          </div>
          <div className="p-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Air Flow</h4>
                  <p className="text-gray-700">3.0 million CMH (850 M³/Sec) maximum</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Static Pressure</h4>
                  <p className="text-gray-700">3.0 inch (75 mm) wc maximum</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Available Size Range & Standard Features */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="bg-primary text-white px-6 py-4">
            <h3 className="text-xl font-semibold">Available Size Range & Standard Features</h3>
          </div>
          <div className="p-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Diameter</h4>
                  <p className="text-gray-700">2 feet (914 mm) to 34 feet (10363 mm)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">No. of Blades</h4>
                  <p className="text-gray-700">3 to 10 blades</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Blade Pitch Angle</h4>
                  <p className="text-gray-700">Adjustable</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Leading Edge Protection</h4>
                  <p className="text-gray-700">Included on all blades</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Material of Construction */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="bg-primary text-white px-6 py-4">
            <h3 className="text-xl font-semibold">Material of Construction</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-6">The best available is used for the manufacturing of fan assemblies confirming various international standards. The specification of these are as below:</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Component</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Material Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { component: "HUB ASSEMBLY", material: "HDGMS TO AISI 304" },
                    { component: "HARDWARE", material: "SST TO AISI 304" },
                    { component: "HUB SPOOL", material: "CI TO IS 210-1970" },
                    { component: "CLAMPS", material: "LM 6 TO BS 1490 1963" },
                    { component: "HUB BODY", material: "HDGMS" },
                    { component: "BLADES", material: "ISO AND EPOXY RESIN AS PER ASTM CODES" }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 font-medium text-gray-900 border-t border-gray-200">{row.component}</td>
                      <td className="px-4 py-3 text-gray-700 border-t border-gray-200">{row.material}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features & Benefits */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Key Features & Benefits</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Up to 40% energy saving over conventional fans",
            "Excellent corrosion resistance; perfect for chemical, coastal, or humid locations",
            "Low vibration reduces wear on drive components and extends equipment life",
            "Single-piece molded blades eliminate weak joints for increased durability",
            "Customizable blade pitch for on-site performance optimization",
            "Minimal maintenance and easy cleaning for long-term dependability",
            "Available for all cooling tower types: FRP, timber, concrete, induced or forced draft"
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Industries Served */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Industries Served</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            "Power generation plants",
            "Petroleum and chemical processing",
            "Food and beverage manufacturing",
            "HVAC installations",
            "Steel, fertilizer, and sugar industries",
            "Water treatment and renewable energy facilities"
          ].map((industry, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-gray-700">{industry}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Comparison */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">FRP Fans vs. Metal Fans</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/3 rounded-xl border border-primary/10">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-primary" />
              Paltech™ FRP Fans
            </h3>
            <ul className="space-y-2">
              {[
                "15-40% energy savings",
                "15-25 years lifespan",
                "Zero corrosion issues",
                "Lightweight design",
                "Whisper-quiet operation",
                "Minimal maintenance",
                "Field-adjustable pitch",
                "3-8 months ROI"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Conventional Metal Fans</h3>
            <ul className="space-y-2">
              {[
                "Higher energy consumption",
                "Shorter lifespan (5-10 years)",
                "Prone to rust and corrosion",
                "Heavier, more structural load",
                "Noisier operation",
                "Frequent maintenance needed",
                "Fixed pitch design",
                "Longer payback period"
              ].map((limitation, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-4 h-4 text-gray-400 shrink-0 mt-0.5">•</span>
                  <span className="text-gray-600 text-sm">{limitation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "How much energy can Paltech™ FRP Fans save?",
              answer: "Paltech™ FRP fans are engineered for up to 40% power savings over conventional aluminum or steel fans, delivering rapid return on investment."
            },
            {
              question: "Which environments are FRP fans ideal for?",
              answer: "They are perfect for any cooling tower operating in aggressive, saline, or corrosive environments where metal fans would quickly degrade."
            },
            {
              question: "How long do Paltech™ FRP fans last, and what about maintenance?",
              answer: "With molded FRP blades, typical operational life spans 15–25 years with only simple periodic cleaning and zero rust control needed."
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
          Ready to Upgrade? Get a Fast Quote Today!
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Enhance your cooling tower's performance, save on energy, and minimize downtime with Paltech™ High-Efficiency FRP Fans. Contact us now for technical support, customization, or a free quotation!
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

