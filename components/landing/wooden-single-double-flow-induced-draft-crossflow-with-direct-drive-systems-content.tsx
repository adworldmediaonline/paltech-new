import Link from "next/link";
import { ArrowRight, CheckCircle, Zap, Settings, Droplets, Shield, Award, Clock, Users, Globe, Factory } from "lucide-react";

export function WoodenTimberDirectDriveSystemsContent() {
  const keyFeatures = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "Quality Products & Reliable Services",
      description: "Paltech™ ensures top-tier quality and dependable services for all cooling tower components, backed by over 37 years of manufacturing excellence."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "37+ Years of Manufacturing Excellence",
      description: "Decades of experience in manufacturing ensure superior product quality, performance, and reliability across diverse industrial applications."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "9,000+ Satisfied Clients",
      description: "A vast client base trusts Paltech™ for their industrial cooling solutions worldwide, demonstrating proven track record and customer satisfaction."
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Global Export Network",
      description: "Our cooling towers are supplied globally to 46+ countries, meeting international standards and diverse industrial requirements."
    },
  ];

  const structuralComponents = [
    {
      title: "Preservative Timber Construction",
      description: "Main structural components and lightweight sections crafted from selected preservative timber ensuring durability, resistance to decay, and long-term structural integrity."
    },
    {
      title: "Galvanized Joint Fastening",
      description: "All structural joints bolted using galvanized bolts with Stainless Steel or Phosphor Bronze hardware available as upgrade options for enhanced corrosion resistance."
    },
    {
      title: "Uniform Water Distribution System",
      description: "Hot water basin equipped with distribution box ensuring even water dispersion throughout the basin, with subsequent splashing through spray target nozzles for optimal cooling."
    }
  ];

  const coolingComponents = [
    {
      title: "Weather-Resistant Cladding",
      description: "Standard cladding consists of profile corrugated sheets with joints designed to shed water only inside the cooling tower, preventing external moisture ingress."
    },
    {
      title: "Advanced Drift Eliminators",
      description: "Specially designed eliminators available in single-pass to four-pass patterns made from various materials, minimizing bleed losses and water consumption."
    },
    {
      title: "High-Efficiency Fill Systems",
      description: "Fill bars designed to maximize splash surface and wetted surface area, resulting in superior heat transfer rates and optimal cooling performance."
    },
    {
      title: "Versatile Fill Support Systems",
      description: "Wooden/PVC fills supported on wooden stringers or S.S. wire mesh grids ensuring secure positioning. Various fill materials and shapes available for specific design requirements."
    }
  ];

  const technicalSpecs = [
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Motor Specifications",
      items: [
        "Special low R.P.M., totally enclosed vertical motor designed for cooling tower applications",
        "Flange type configuration with enlarged and threaded shaft, sealed top for weatherproof operation",
        "Totally weatherproof construction with IP-55 protection rating",
        "Suitable for operation in heated and humid environments typical of cooling tower installations"
      ]
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Fan Drive System",
      items: [
        "Direct coupling with low RPM motors (vertical flange-mounted with sealed top and enlarged threaded shaft)",
        "Simplified mechanical design eliminating belt drives and associated maintenance requirements",
        "Optional gear-driven fan systems available for more demanding applications requiring enhanced control"
      ]
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Fan Specifications",
      items: [
        "Fans with diameters up to 8 feet for lower to medium capacity cooling applications",
        "Multi-blade cast Aluminum/FRP adjustable pitch fan blades for optimal air flow control",
        "M.S. fabricated H.D.G./S.S. hub with S.S. hardware ensuring durability and corrosion resistance",
        "Specifically designed for lower to medium capacity cooling needs with proven reliability"
      ]
    }
  ];

  return (
    <>
      {/* Hero Product Description */}
      <section className="py-16 bg-gray-50 pt-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Wooden/Timber Direct Drive Cooling Towers - Lower to Medium Capacity Solutions
            </h1>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Paltech's <strong>Wooden/Timber Single & Double Flow Induced Draft Crossflow Cooling Towers with Direct Drive Systems</strong> are engineered for <strong>lower to medium capacity cooling applications</strong>, combining traditional timber construction with modern mechanical efficiency. These robust cooling systems feature direct drive mechanisms eliminating belt drives and associated maintenance complexities, ensuring reliable operation and simplified service requirements.
              </p>
              <p>
                Our direct drive cooling towers are equipped with <strong>fans up to 8 feet in diameter</strong>, featuring multi-blade cast Aluminum/FRP adjustable pitch fan blades, M.S. fabricated H.D.G./S.S. hubs, and S.S. hardware ensuring efficient cooling performance. The direct coupling configuration with low RPM motors provides simplified mechanical design, reduced maintenance overhead, and enhanced reliability compared to belt-driven systems.
              </p>
              <p>
                These cooling towers are available in both <strong>single flow and double flow induced draft crossflow configurations</strong>, providing flexibility for specific capacity requirements and installation constraints. The traditional timber construction, combined with modern mechanical components, delivers proven reliability and cost-effectiveness for applications requiring medium-capacity cooling solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Paltech™ Direct Drive Cooling Towers?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Technical Specifications & Components
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Detailed insights into core components, operational features, and engineering specifications designed for reliable performance.
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {technicalSpecs.map((spec, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {spec.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{spec.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {spec.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Key Structural Components
                </h2>
                <div className="space-y-4">
                  {structuralComponents.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Key Cooling Components
                </h2>
                <div className="space-y-4">
                  {coolingComponents.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Ideal Applications & Use Cases
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Lower to Medium Capacity Industrial Cooling",
                "Manufacturing Facilities",
                "Process Cooling Applications",
                "HVAC Systems",
                "Food Processing Industries",
                "Textile Manufacturing",
                "Chemical Processing",
                "Small to Medium Power Plants",
                "Commercial Buildings"
              ].map((app, index) => (
                <div key={index} className="p-4 bg-white rounded-lg border border-gray-200 hover:bg-primary/5 hover:border-primary transition-colors">
                  <p className="text-gray-700 font-medium">{app}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Interested in Direct Drive Cooling Towers?
          </h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Get detailed information about our Wooden/Timber Direct Drive Systems and discover how they can benefit your lower to medium capacity cooling applications. Request comprehensive specifications and expert consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Quote & Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/cooling-towers/wooden-timber-cooling-towers"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              View All Wooden Cooling Towers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
