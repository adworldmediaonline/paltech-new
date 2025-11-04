import { CheckCircle, Shield, Droplets, Zap, TrendingDown, Settings, Award, Layers, Filter, Phone, Mail, Globe } from "lucide-react";

export function FiltrationContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Paltech™ Cooling Tower Filtration Solutions
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Optimize your cooling tower's performance and protect vital equipment with Paltech™ <strong>industrial filtration solutions</strong>. Our expertly engineered filtration systems ensure the removal of suspended solids, scale-forming minerals, and contaminants, enabling enhanced heat transfer, reduced fouling, and prolonged equipment life across diverse industrial sectors.
        </p>
      </div>

      {/* Why Filtration is Crucial */}
      <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl p-6 sm:p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Why Is Filtration Crucial for Cooling Towers?</h2>
        <p className="text-gray-700 leading-relaxed">
          Filtration is essential to maintain the quality of cooling water by removing particles, sediments, and biological matter that can clog fills, corrode equipment, and degrade overall cooling efficiency. Proper filtration minimizes chemical usage, reduces maintenance frequency, and prevents premature system failures.
        </p>
      </div>

      {/* Our Filtration Product Range */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Our Filtration Product Range</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          Paltech™ offers a comprehensive suite of filtration technologies, tailored to specific water quality requirements and system configurations
        </p>
        <div className="grid gap-4">
          {[
            {
              icon: <Layers className="w-6 h-6" />,
              title: "Sand Filters",
              description: "Utilizing high-quality silica sand or garnet, these filters remove suspended solids through granular media filtration, ideal for large-volume water treatment."
            },
            {
              icon: <Filter className="w-6 h-6" />,
              title: "Activated Carbon Filters",
              description: "Designed to adsorb organic impurities and chlorine, improving water clarity and reducing chemical demand."
            },
            {
              icon: <Layers className="w-6 h-6" />,
              title: "Multi-Media Filters",
              description: "Combining different layers (sand, gravel, anthracite) to enhance filtration efficiency and protect downstream components."
            },
            {
              icon: <Filter className="w-6 h-6" />,
              title: "Cartridge Filters",
              description: "Provide fine filtration to trap smaller particulate matter with easy cartridge replacement."
            },
            {
              icon: <Droplets className="w-6 h-6" />,
              title: "Side Stream Filters",
              description: "Continuous filtration loops integrated into cooling water circuits for ongoing contaminant removal without system shutdown."
            },
            {
              icon: <Filter className="w-6 h-6" />,
              title: "Micron Filters & Strainers",
              description: "Capture fine particles and debris to prevent clogging of nozzles, spray headers, and other critical components."
            }
          ].map((product, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                {product.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features & Benefits */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Features & Benefits</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Zap className="w-7 h-7" />,
              title: "Improved Cooling Efficiency",
              description: "Cleaner water enhances heat transfer by reducing fouling on fill media and heat exchange surfaces."
            },
            {
              icon: <TrendingDown className="w-7 h-7" />,
              title: "Reduced Chemical Usage",
              description: "Effective contaminant removal lowers reliance on water treatment chemicals, reducing operational costs."
            },
            {
              icon: <Shield className="w-7 h-7" />,
              title: "Extended Equipment Life",
              description: "Prevents abrasion and corrosion in pumps, pipes, fans, and gearboxes caused by particulate contamination."
            },
            {
              icon: <Settings className="w-7 h-7" />,
              title: "Scalable Solutions",
              description: "From compact industrial units to large municipal water treatment systems, customizable filtration setups meet diverse budgets and capacities."
            },
            {
              icon: <Zap className="w-7 h-7" />,
              title: "Energy Efficient",
              description: "Designed to minimize pressure drops and energy consumption while maintaining high filtration performance."
            },
            {
              icon: <Award className="w-7 h-7" />,
              title: "Easy Maintenance",
              description: "User-friendly designs with accessible components and remote monitoring options simplify upkeep."
            }
          ].map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Technical Specifications Snapshot</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-6 py-4 text-left font-semibold">Filtration Type</th>
                <th className="px-6 py-4 text-left font-semibold">Typical Application</th>
                <th className="px-6 py-4 text-left font-semibold">Key Features</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: "Sand Filters", application: "Large volume particulate removal", features: "Durable media, high flow capacity" },
                { type: "Activated Carbon", application: "Organic impurity removal", features: "High adsorption, chemical resistance" },
                { type: "Multi-Media Filters", application: "Enhanced multi-stage cleaning", features: "Layered media for optimized filtration" },
                { type: "Cartridge Filters", application: "Fine particle capture", features: "Replaceable cartridges, low maintenance" },
                { type: "Side Stream Filters", application: "Continuous system filtration", features: "Non-disruptive operation, consistent purity" },
                { type: "Micron Filters & Strainers", application: "Protection of critical components", features: "High precision, easy cleaning" }
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-6 py-4 font-medium text-gray-900 border-t border-gray-200">{row.type}</td>
                  <td className="px-6 py-4 text-gray-700 border-t border-gray-200">{row.application}</td>
                  <td className="px-6 py-4 text-gray-700 border-t border-gray-200">{row.features}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Advantages */}
      <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Paltech™ Filtration?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Award className="w-8 h-8" />,
              title: "Proven Technology",
              description: "Decades of experience delivering reliable filtration solutions across industries"
            },
            {
              icon: <Settings className="w-8 h-8" />,
              title: "Custom Engineering",
              description: "Tailored filtration systems designed to meet your specific water quality needs"
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Comprehensive Support",
              description: "From design to installation and ongoing maintenance, we're with you every step"
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
            "Power generation cooling water treatment",
            "Petrochemical and chemical process industries",
            "Food and beverage production",
            "HVAC and commercial building systems",
            "Wastewater and municipal water treatment"
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
              question: "How does filtration improve cooling tower efficiency?",
              answer: "By removing solids and contaminants, filtration maintains clean water that enhances heat transfer and reduces equipment wear."
            },
            {
              question: "Which filtration system is best for my cooling tower?",
              answer: "System choice depends on water quality, flow rate, and contamination levels. Paltech™ provides expert consultation to design tailored filtration solutions."
            },
            {
              question: "Can Paltech™ filtration systems reduce chemical usage?",
              answer: "Yes. Filtered water reduces scaling and biological growth, lowering the dependency and costs of chemical treatments."
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
          Enhance Cooling Tower Longevity with Paltech™ Filtration Solutions
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Ensure superior water quality and efficient cooling tower performance with Paltech™ specialized filtration systems. Contact us today for custom designs and competitive quotes.
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

