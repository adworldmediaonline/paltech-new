import { CheckCircle, Shield, Droplets, Settings, Zap, Wind, Award, Thermometer, Package, Wrench } from "lucide-react";

export function CoolingTowerNozzlesContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Paltech™ Cooling Tower Spray Nozzles
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Maintain peak cooling tower performance with Paltech™ <strong>Spiral Spray Nozzles</strong> — engineered to deliver uniform water distribution across the fill pack, ensuring optimal heat exchange and consistent cooling efficiency. Crafted from durable polypropylene, these spray nozzles provide reliable operation, even in high-temperature and challenging industrial environments.
        </p>
      </div>

      {/* Why Uniform Water Distribution Matters */}
      <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl p-6 sm:p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Why Uniform Water Distribution Matters?</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Uniform spray distribution is essential to prevent dry spots on the fill media and ensure consistent cooling across the tower. Uneven water flow can lead to inefficient heat transfer, increased energy use, and potential damage to cooling components.
          </p>
          <p className="font-medium text-gray-900">
            Paltech™ spray nozzles optimize water dispersion, maximizing the cooling area and enhancing overall system reliability.
          </p>
        </div>
      </div>

      {/* Key Features & Benefits */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Key Features & Benefits</h2>
        <div className="grid gap-4">
          {[
            {
              icon: <Wind className="w-6 h-6" />,
              title: "Spiral Spray Design",
              description: "Create a solid cone spray pattern that guarantees even coverage of the fill pack."
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Durable Polypropylene Construction",
              description: "Resistant to chemical corrosion and high temperatures, extending operational life."
            },
            {
              icon: <Droplets className="w-6 h-6" />,
              title: "Low Pressure, Non-Clogging",
              description: "Engineered to operate at low pressure and reduce clogging risks, minimizing maintenance requirements."
            },
            {
              icon: <Wrench className="w-6 h-6" />,
              title: "Easy Maintenance & Replacement",
              description: "Designed for simple removal and installation without requiring system shutdowns or downtime."
            },
            {
              icon: <Settings className="w-6 h-6" />,
              title: "Flexible Operation",
              description: "Suitable for various flow rates and adaptable to diverse cooling tower designs."
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Performance Efficiency",
              description: "Improves heat transfer rates through consistent water distribution, reducing operational costs."
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

      {/* Technical Specifications */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Technical Specifications</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-6 py-4 text-left font-semibold">Parameter</th>
                <th className="px-6 py-4 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                { param: "Material", desc: "Inert Polypropylene" },
                { param: "Spray Pattern", desc: "Spiral, Solid Cone" },
                { param: "Pressure Requirement", desc: "Low Pressure Operation" },
                { param: "Maintenance", desc: "Non-Clogging, Maintenance-Free" },
                { param: "Temperature Resistance", desc: "High Temperature Capability" },
                { param: "Application", desc: "Cooling Tower Water Distribution" }
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-6 py-4 font-medium text-gray-900 border-t border-gray-200">{row.param}</td>
                  <td className="px-6 py-4 text-gray-700 border-t border-gray-200">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Design & Performance Features */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Design & Performance Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Wind className="w-7 h-7" />,
              title: "Solid Cone Pattern",
              description: "Even water coverage prevents dry spots on fill media"
            },
            {
              icon: <Droplets className="w-7 h-7" />,
              title: "Low Pressure Design",
              description: "Reduces energy consumption and pump requirements"
            },
            {
              icon: <Shield className="w-7 h-7" />,
              title: "Self-Cleaning",
              description: "Minimizes clogging and maintenance downtime"
            },
            {
              icon: <Thermometer className="w-7 h-7" />,
              title: "Heat Resistant",
              description: "Maintains performance in high-temperature conditions"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Advantages Grid */}
      <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Key Advantages</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Enhanced Efficiency",
              description: "Uniform distribution maximizes heat transfer and reduces energy consumption"
            },
            {
              icon: <Award className="w-8 h-8" />,
              title: "Extended Lifespan",
              description: "Chemical-resistant polypropylene ensures long-lasting performance"
            },
            {
              icon: <Wrench className="w-8 h-8" />,
              title: "Minimal Maintenance",
              description: "Non-clogging design and easy replacement reduce service requirements"
            }
          ].map((advantage, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center text-white mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Applications</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Industrial Cooling Towers",
            "HVAC Systems",
            "Power Plants",
            "Petrochemical Processing",
            "Process Cooling in Manufacturing"
          ].map((app, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-gray-700">{app}</span>
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
              question: "How do Paltech™ spray nozzles improve cooling efficiency?",
              answer: "By delivering uniform water distribution in a solid cone spray, these nozzles ensure consistent contact of water with the fill pack, optimizing heat transfer."
            },
            {
              question: "Are these nozzles prone to clogging?",
              answer: "No. Paltech™ nozzles utilize a low pressure, self-cleaning design that minimizes clogging and maintenance efforts."
            },
            {
              question: "Can Paltech™ spray nozzles be replaced without shutting down the cooling system?",
              answer: "Yes. The design allows for easy removal and replacement without requiring downtime."
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
          Optimize Your Cooling Tower Water Distribution with Paltech™ Spray Nozzles!
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Ensure reliable and efficient cooling with Paltech™ precision-engineered spray nozzles. Contact us for expert assistance and competitive pricing.
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

