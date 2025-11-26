import Link from "next/link";
import { ArrowRight, CheckCircle, Zap, Settings, Droplets, Shield, Award, Clock, Users, Globe, Factory } from "lucide-react";

export function WoodenTimberReductionGearboxDriveSystemContent() {
  const keyFeatures = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "Quality Products & Reliable Services",
      description: "Paltech™ ensures top-tier quality and dependable services for all cooling tower components, backed by over 39 years of manufacturing excellence."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "39+ Years of Manufacturing Excellence",
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

  const technicalSpecs = [
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Spiral Bevel Gear Reducer Fan Assembly",
      items: [
        "Specialized fan assembly driven by reduction gear reducer of spiral bevel type ensuring optimal torque transmission",
        "Fan assembly operates with non-lubricated balanced drive shaft fitted with flexible links for smooth operation",
        "Innovative design ensures efficient and smooth fan operation with minimal vibration and enhanced reliability"
      ]
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Dynamically Balanced Drive System",
      items: [
        "Fans powered by electric motor connected to gearbox through dynamically balanced tubular drive shaft",
        "Precision balancing guarantees optimal performance and minimizes vibrations for extended component life",
        "Enhanced overall efficiency of cooling tower through optimized mechanical power transmission"
      ]
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Weatherproofed Structural Framework",
      items: [
        "Entire equipment mounted on single fabricated mild steel frame ensuring structural integrity",
        "Adequately weatherproofed to withstand various environmental conditions and operational stresses",
        "Robust construction ensures reliability and longevity of cooling towers in demanding applications"
      ]
    }
  ];

  const structuralDetails = [
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Secure Structural Joints",
      description: "All structural joints securely fastened with galvanized bolts and S.S./Brass nails ensuring robust construction. Stainless Steel or phosphor bronze hardware available upon request for enhanced corrosion resistance."
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Optimized Water Distribution",
      description: "Hot water basin equipped with distribution box ensuring uniform water distribution. Water efficiently splashed downward through strategically positioned spray target nozzles optimizing cooling process and thermal efficiency."
    }
  ];

  return (
    <>
      {/* Hero Product Description */}
      <section className="py-16 bg-gray-50 pt-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Wooden/Timber Reduction Gearbox Drive Cooling Towers - Medium Capacity Solutions
            </h1>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Paltech's <strong>Wooden/Timber Single & Double Flow Induced Draft Crossflow Cooling Towers with Reduction Gearbox Drive Systems</strong> are engineered for <strong>medium capacity cooling applications</strong>, combining traditional timber construction with advanced mechanical drive technology. These robust cooling systems feature specialized fan assemblies driven by reduction gear reducers of spiral bevel type, ensuring optimal torque transmission and enhanced operational control.
              </p>
              <p>
                Our medium capacity cooling towers are equipped with <strong>specialized fan assemblies</strong> driven by reduction gear reducers of spiral bevel type, operating with non-lubricated balanced drive shafts fitted with flexible links. This innovative design ensures efficient and smooth fan operation with minimal vibration, enhanced reliability, and optimal performance for medium-scale industrial cooling requirements.
              </p>
              <p>
                The fans are powered by electric motors connected to gearboxes through <strong>dynamically balanced tubular drive shafts</strong>, guaranteeing optimal performance and minimizing vibrations. This setup enhances overall cooling tower efficiency while ensuring structural stability and extended component life. The entire equipment is mounted on a single fabricated mild steel frame, adequately weatherproofed to withstand various environmental conditions, ensuring reliability and longevity.
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
              Why Choose Paltech™ Reduction Gearbox Drive Systems?
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
                Advanced Engineering Specifications
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Precision-engineered components and drive systems designed for medium capacity applications requiring optimal performance and reliability.
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

      {/* Structural Details */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Structural Components & Construction Details
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {structuralDetails.map((detail, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {detail.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{detail.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{detail.description}</p>
                    </div>
                  </div>
                </div>
              ))}
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
                "Medium Capacity Industrial Cooling",
                "Manufacturing Facilities",
                "Chemical Processing Plants",
                "Process Cooling Applications",
                "Industrial HVAC Systems",
                "Food Processing Industries",
                "Textile Manufacturing",
                "Pharmaceutical Facilities",
                "Paper & Pulp Mills"
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
            Ready for Medium Capacity Cooling Solutions?
          </h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Get detailed information about our Reduction Gearbox Drive Cooling Towers and discover how they can benefit your medium capacity cooling applications. Request comprehensive specifications and expert consultation.
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
