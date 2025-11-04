import { CheckCircle, Shield, Droplets, Zap, Settings, Award, BarChart, TrendingDown, Phone, Mail, Globe } from "lucide-react";

export function ReverseOsmosisContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Paltech™ Reverse Osmosis (R.O.) Systems
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Paltech™ <strong>Reverse Osmosis (RO) systems</strong> utilize cutting-edge membrane technology to provide high-purity water solutions essential for cooling towers and industrial applications. By effectively removing dissolved salts, organic compounds, and impurities, our RO plants enhance equipment longevity, improve thermal efficiency, and support sustainable water management.
        </p>
      </div>

      {/* What is Reverse Osmosis */}
      <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl p-6 sm:p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What is Reverse Osmosis?</h2>
        <p className="text-gray-700 leading-relaxed">
          Reverse osmosis is a water purification process in which pressure forces feed water through a semi-permeable membrane, separating contaminants and dissolved solids from purified water (permeate). The reject stream containing concentrated impurities is discharged or further treated. RO systems can reduce total dissolved solids (TDS) to below 100 ppm or as specified by client requirements.
        </p>
      </div>

      {/* Key Features & Benefits */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Key Features & Benefits</h2>
        <div className="grid gap-4">
          {[
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Reliable Operation",
              description: "Designed for continuous, stable operations with capacities ranging from 50 to 100,000 liters per day, and customizable to meet specific plant needs."
            },
            {
              icon: <Award className="w-6 h-6" />,
              title: "High-Quality Construction",
              description: "Available in materials such as MS, SS, UPVC, and FRP to suit various operational environments."
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Energy Efficient",
              description: "Optimized flow rates and pressure modulation reduce power consumption."
            },
            {
              icon: <Settings className="w-6 h-6" />,
              title: "Hassle-Free Maintenance",
              description: "Automated systems with user-friendly controls, backed by Paltech's 1-year manufacturing warranty."
            },
            {
              icon: <Droplets className="w-6 h-6" />,
              title: "Versatility",
              description: "Suitable for applications including mineral water production, drinking water purification, industrial water filtration, boiler feed water treatment, chemical processing, and beverage production."
            },
            {
              icon: <TrendingDown className="w-6 h-6" />,
              title: "Scalability",
              description: "Modular design allows expansion as operational demands increase."
            },
            {
              icon: <Settings className="w-6 h-6" />,
              title: "Custom Compliance",
              description: "Electrical and mechanical components tailored as per specific site requirements."
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Paltech™ RO System Specifications */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Paltech™ RO System Specifications</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-6 py-4 text-left font-semibold">Parameter</th>
                <th className="px-6 py-4 text-left font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              {[
                { param: "Capacity", details: "50 – 100,000 liters/day, customizable" },
                { param: "Material of Construction", details: "Mild Steel (MS), Stainless Steel (SS), UPVC, FRP" },
                { param: "Water Quality Output", details: "TDS < 100 ppm (or client-specified)" },
                { param: "Operating Hours", details: "8-12 hours/day (typical, flexible)" },
                { param: "Automation", details: "PLC control systems, automated operation" },
                { param: "Warranty", details: "1 Year Manufacturing Warranty" }
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-6 py-4 font-medium text-gray-900 border-t border-gray-200">{row.param}</td>
                  <td className="px-6 py-4 text-gray-700 border-t border-gray-200">{row.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Applications */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Applications</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Mineral and packaging water purification",
            "Drinking and potable water treatment",
            "Industrial water filtration and process water purification",
            "Boiler feed water conditioning",
            "Chemical and pharmaceutical water treatment",
            "Institutional and beverage manufacturing water systems"
          ].map((app, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-gray-700">{app}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Highlights */}
      <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-8 border border-primary/10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
              <Droplets className="w-8 h-8" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">&lt; 100 ppm</div>
            <div className="text-sm text-gray-600 font-medium">TDS Output</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
              <BarChart className="w-8 h-8" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">50-100K</div>
            <div className="text-sm text-gray-600 font-medium">Liters/Day Capacity</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">1 Year</div>
            <div className="text-sm text-gray-600 font-medium">Warranty</div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "How does Paltech™ RO system improve cooling tower water quality?",
              answer: "RO removes dissolved impurities and salts, reducing scaling and fouling for efficient system operation."
            },
            {
              question: "What capacities are available for Paltech™ RO plants?",
              answer: "We provide plants ranging from 50 liters per day to 100,000 liters per day, scalable to your needs."
            },
            {
              question: "Are these plants energy efficient and easy to maintain?",
              answer: "Yes, with automation and optimized design, our RO systems minimize energy use and require low maintenance."
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
          Upgrade Your Industrial Water Treatment with Paltech™ RO Systems
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Ensure premium water quality and operational excellence by choosing Paltech™ Reverse Osmosis systems. Contact us for expert guidance, customization, and fast delivery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="tel:+911244499700" className="inline-flex items-center gap-2 text-white hover:text-white/90 font-semibold">
            <Phone className="w-5 h-5" />
            +91-124-4499700
          </a>
          <a href="mailto:paltech@paltech.in" className="inline-flex items-center gap-2 text-white hover:text-white/90 font-semibold">
            <Mail className="w-5 h-5" />
            paltech@paltech.in
          </a>
          <a href="https://www.paltech.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-white/90 font-semibold">
            <Globe className="w-5 h-5" />
            www.paltech.in
          </a>
        </div>
      </div>
    </div>
  );
}

