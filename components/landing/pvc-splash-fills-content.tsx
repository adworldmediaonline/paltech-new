import { CheckCircle, Shield, Droplets, Factory, Zap, Settings, Award, Package } from "lucide-react";

export function PVCSplashFillsContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Paltech™ PVC Splash Fills
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Boost your cooling tower's heat transfer capabilities with Paltech™ <strong>PVC Splash Fills</strong> — engineered to maximize the water surface area exposed to airflow for superior evaporation and cooling performance. Our splash fills are designed to create fine water droplets, increasing contact time with air and optimizing heat rejection even in challenging industrial environments.
        </p>
      </div>

      {/* How Do Splash Fills Work */}
      <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl p-6 sm:p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How Do Splash Fills Work?</h2>
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Unlike flat sheet or film fills, splash fills break water into smaller droplets rather than thin sheets. This increase in droplet surface area significantly enhances the water-to-air interface, promoting faster cooling.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By suspending water droplets within the media, splash fills allow extended exposure time to airflow, substantially improving evaporation rates and thermal efficiency.
          </p>
        </div>
      </div>

      {/* Construction and Materials */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Construction and Materials</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: <Package className="w-7 h-7" />,
              title: "Robust PVC Construction",
              description: "Our splash fills are manufactured from durable polyvinyl chloride (PVC), known for excellent corrosion resistance and chemical stability."
            },
            {
              icon: <Settings className="w-7 h-7" />,
              title: "Alternative Materials",
              description: "Depending on project needs, splash fills may also be constructed from polyethylene or wood lath matrices."
            },
            {
              icon: <Shield className="w-7 h-7" />,
              title: "Designed for Harsh Conditions",
              description: "PVC splash fills withstand contamination, debris, and aggressive water quality, making them ideal for demanding industrial cooling towers."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Benefits of Paltech™ Splash Fill Media</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Maximizes cooling efficiency by increasing water surface exposure to airflow.",
            "Extends water droplet suspension time for improved evaporation.",
            "Resistant to fouling, chemical corrosion, and physical wear.",
            "Easy to install and maintain with adaptable sizing for various tower designs.",
            "Ideal for cooling towers with compromised water quality or high contaminant loads."
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

      {/* Key Features */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Key Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Droplets className="w-7 h-7" />,
              title: "Enhanced Water Droplet Formation",
              description: "Creates fine droplets for maximum surface area exposure"
            },
            {
              icon: <Zap className="w-7 h-7" />,
              title: "Superior Cooling Efficiency",
              description: "Optimizes heat transfer through extended air-water contact"
            },
            {
              icon: <Shield className="w-7 h-7" />,
              title: "Corrosion Resistant",
              description: "PVC construction withstands harsh chemical environments"
            },
            {
              icon: <Award className="w-7 h-7" />,
              title: "Low Maintenance",
              description: "Resistant to fouling and easy to clean when needed"
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

      {/* Applications */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Applications</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Power plant cooling towers",
            "Petrochemical and refinery operations",
            "Industrial process cooling",
            "Wastewater treatment facilities",
            "HVAC and large commercial cooling systems"
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
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Splash Fills vs. Film Fills</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/3 rounded-xl border border-primary/10">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-primary" />
              PVC Splash Fills
            </h3>
            <ul className="space-y-2">
              {[
                "Creates water droplets for enhanced surface area",
                "Ideal for contaminated or dirty water",
                "Resistant to fouling and clogging",
                "Better for high-debris environments",
                "Longer lifespan in harsh conditions",
                "Easy maintenance and cleaning"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Film Fills</h3>
            <ul className="space-y-2">
              {[
                "Creates thin water sheets",
                "Best for clean water applications",
                "Susceptible to fouling with contaminants",
                "Requires cleaner water conditions",
                "More maintenance in dirty water",
                "Higher efficiency in ideal conditions"
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
              question: "Why choose splash fills over film fills?",
              answer: "Splash fills are preferred in environments with dirty or contaminated water because they resist clogging and maintain effective cooling performance where film fills might fail."
            },
            {
              question: "What materials are used in Paltech™ splash fills?",
              answer: "Primarily high-grade PVC, with options for polyethylene or wood-based fills depending on specific operational and environmental requirements."
            },
            {
              question: "How do splash fills improve cooling tower longevity?",
              answer: "By reducing fouling and corrosion, splash fills help maintain consistent heat transfer rates and lower maintenance frequency, extending overall cooling tower lifespan."
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
          Upgrade Your Cooling Tower with Paltech™ Splash Fills!
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Enhance cooling efficiency and operational reliability with our expertly engineered splash fill solutions. Contact Paltech™ for customized support and competitive quotes today.
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

