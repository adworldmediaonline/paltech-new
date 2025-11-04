import { CheckCircle, Shield, Droplets, Factory, Zap, Settings, Award, Package, ThermometerSun, Gauge } from "lucide-react";

export function PPBallFillsContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Paltech™ Cooling Tower PP Ball Fills
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Paltech™ Cooling Tower <strong>PP (Polypropylene) Ball Fills</strong> deliver superior thermal performance combined with durability and chemical resistance, making them ideal for modern industrial cooling towers. Designed to maximize heat transfer, these ball fills increase surface area and improve water distribution while resisting fouling and clogging in challenging environments.
        </p>
      </div>

      {/* What Are PP Ball Fills */}
      <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl p-6 sm:p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What Are PP Ball Fills?</h2>
        <p className="text-gray-700 leading-relaxed">
          PP Ball Fills are <strong>spherical structured fill media</strong> made of high-quality polypropylene, providing an extensive surface area that facilitates efficient heat exchange between water and air. Their unique shape breaks water into smaller droplets and enables greater water-air interaction, optimizing cooling performance with reduced pressure drop.
        </p>
      </div>

      {/* Key Features & Benefits */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Key Features & Benefits</h2>
        <div className="grid gap-4">
          {[
            {
              icon: <Zap className="w-6 h-6" />,
              title: "High Heat Transfer Efficiency",
              description: "The spherical shape and open structure maximize the water-to-air contact surface, enhancing evaporation and cooling rates."
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Superior Chemical & Corrosion Resistance",
              description: "Polypropylene material withstands aggressive chemical environments, including acidic and alkaline conditions, for prolonged lifespan."
            },
            {
              icon: <Package className="w-6 h-6" />,
              title: "Lightweight & Durable",
              description: "PP Ball Fills have excellent strength-to-weight ratio, reducing structural stress on cooling towers."
            },
            {
              icon: <Settings className="w-6 h-6" />,
              title: "Low Fouling & Easy Maintenance",
              description: "Their design minimizes debris accumulation and biological growth, lowering maintenance frequency and downtime."
            },
            {
              icon: <Factory className="w-6 h-6" />,
              title: "Adaptable for Various Tower Types",
              description: "Suitable for induced draft, forced draft, crossflow, and counterflow cooling towers in industries like power generation, petrochemical, and HVAC."
            },
            {
              icon: <ThermometerSun className="w-6 h-6" />,
              title: "Temperature Resistance",
              description: "Efficiently operate at temperatures up to 60°C, supporting high-heat industrial applications."
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
                <th className="px-6 py-4 text-left font-semibold">Specification</th>
                <th className="px-6 py-4 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                { spec: "Material", desc: "High-Grade Polypropylene (PP)" },
                { spec: "Shape", desc: "Spherical (Ball)" },
                { spec: "Operating Temperature", desc: "Up to 60°C" },
                { spec: "Chemical Resistance", desc: "Acidic & Alkaline Tolerant" },
                { spec: "Typical Size", desc: "Standard modular sizes (custom available)" },
                { spec: "Application", desc: "Industrial Cooling Towers" },
                { spec: "Fouling Resistance", desc: "High, minimizes clogging and growth" }
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-6 py-4 font-medium text-gray-900 border-t border-gray-200">{row.spec}</td>
                  <td className="px-6 py-4 text-gray-700 border-t border-gray-200">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Design Advantages */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Design Advantages</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Droplets className="w-7 h-7" />,
              title: "Spherical Design",
              description: "Breaks water into smaller droplets for maximum surface exposure"
            },
            {
              icon: <Gauge className="w-7 h-7" />,
              title: "Low Pressure Drop",
              description: "Open structure reduces airflow resistance and energy consumption"
            },
            {
              icon: <Shield className="w-7 h-7" />,
              title: "Anti-Fouling",
              description: "Smooth spherical surface prevents debris accumulation"
            },
            {
              icon: <Award className="w-7 h-7" />,
              title: "Long Lifespan",
              description: "Resistant to UV, chemicals, and mechanical stress"
            }
          ].map((advantage, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{advantage.title}</h3>
              <p className="text-gray-600 text-sm">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Applications</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Power plants and thermal power stations",
            "Petrochemical processing facilities",
            "Steel and iron manufacturing",
            "HVAC and large-scale commercial cooling",
            "Wastewater treatment and desalination plants"
          ].map((app, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-gray-700">{app}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Section */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">PP Ball Fills vs. Traditional Fills</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/3 rounded-xl border border-primary/10">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-primary" />
              PP Ball Fills
            </h3>
            <ul className="space-y-2">
              {[
                "Superior chemical resistance",
                "Longer service life (15+ years)",
                "Reduced maintenance requirements",
                "Better heat transfer efficiency",
                "Low fouling and clogging",
                "Operates up to 60°C",
                "Lightweight construction",
                "Easy installation and replacement"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Traditional Wood/PVC Fills</h3>
            <ul className="space-y-2">
              {[
                "Limited chemical resistance",
                "Shorter lifespan (5-10 years)",
                "Frequent maintenance needed",
                "Variable heat transfer efficiency",
                "Prone to fouling and bio-growth",
                "Lower temperature tolerance",
                "Heavier, more structural load",
                "More complex replacement"
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
              question: "What advantages do PP Ball Fills offer over traditional wood or PVC fills?",
              answer: "PP Ball Fills provide higher chemical resistance, longer service life, improved heat transfer efficiency, and lower maintenance, especially in harsh or contaminated water conditions."
            },
            {
              question: "Can Paltech™ PP Ball Fills be customized in size or configuration?",
              answer: "Yes, we offer tailored solutions to fit specific cooling tower designs and performance requirements for optimized thermal efficiency."
            },
            {
              question: "How do PP Ball Fills reduce cooling tower downtime?",
              answer: "Their low fouling design prevents clogging and biofilm formation, enabling stable operation and reducing cleaning frequency."
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
          Upgrade to Paltech™ PP Ball Fills for Superior Cooling Performance!
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Enhance your cooling tower's effectiveness and reliability with Paltech™'s high-quality PP Ball Fills. Contact us today to discuss your project needs and receive a detailed quote.
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

