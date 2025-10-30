import Link from "next/link";
import { ArrowRight, CheckCircle, Zap, Settings, Droplets, Shield, Award, Factory, Building2 } from "lucide-react";

export function PultrudedFRPCoolingTowersContent() {
  const availableTypes = [
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Pultruded FRP Counter Flow Cooling Tower with Splash Fill",
      description: "Traditional splash fill design ensuring reliable cooling performance through enhanced water-air contact surface area. Ideal for applications requiring consistent thermal efficiency and proven cooling technology."
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Pultruded FRP Counter Flow Cooling Tower with Film Fill",
      description: "Advanced film fill technology delivering superior heat transfer efficiency, reduced water consumption, and compact footprint. Perfect for applications prioritizing energy efficiency and space optimization."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Pultruded FRP Cross Flow Cooling Tower with Splash Fill",
      description: "Cross flow design optimized for specific industrial applications requiring lower pump head, simplified maintenance access, and versatile installation configurations."
    }
  ];

  const technicalSpecs = [
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Single Cell Capacity",
      description: "Up to 4,500 cubic meters per hour per cell, suitable for medium to large-scale industrial cooling applications requiring substantial capacity."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Multi-Cell Configurations",
      description: "Designed to accommodate unlimited capacity requirements through multicellular construction with both film and splash fill options for maximum flexibility."
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Pultruded FRP Structure",
      description: "Constructed from high-strength pultruded fiberglass for enhanced structural integrity, corrosion resistance, and extended service life exceeding 20 years."
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Corrosion-Resistant Hardware",
      description: "Hot-dip galvanized mild steel hardware standard, with stainless steel hardware available as upgrade option for enhanced durability in aggressive environments."
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Robust Casing Construction",
      description: "Manufactured from pultruded FRP sections or corrugated FRP sheets, providing exceptional structural strength, weather resistance, and minimal maintenance requirements."
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Advanced Fan Deck Design",
      description: "Built with strong pultruded FRP panels and sheets ensuring stability, durability, and optimal air distribution for maximum cooling efficiency."
    }
  ];

  const additionalFeatures = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "IIT-Designed FRP Fan Systems",
      description: "Features highly efficient FRP fans engineered by the Indian Institute of Technology, Mumbai, delivering optimal air flow with minimal energy consumption and enhanced cooling performance."
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Durable FRP/GRP Fan Cylinders",
      description: "Constructed from tough and durable FRP/GRP composite materials ensuring long-lasting performance, weather resistance, and minimal maintenance requirements even in harsh industrial environments."
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "High-Efficiency Drift Eliminators",
      description: "Incorporates advanced PVC drift eliminators in cellular and full wave designs minimizing water loss, reducing fan air pressure requirements, and achieving low energy consumption."
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Non-Clogging Nozzle Systems",
      description: "Equipped with specialized non-clogging nozzles manufactured from PP/PVC, stainless steel/hot-dip galvanized materials, or carbon fiber for optimal water distribution and efficiency."
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Precision Gearbox Technology",
      description: "Features spiral bevel or spiral bevel cum helical gearboxes validated by IIT New Delhi, manufactured to CTI (USA) and AGMA standards ensuring reliability and optimal performance."
    }
  ];

  const uspFeatures = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Superior Thermal Efficiency",
      description: "Engineered for optimal heat transfer rates ensuring maximum cooling performance with minimal energy consumption, reducing operational costs significantly."
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Exceptional Quality & Longevity",
      description: "Manufactured using premium-grade materials and advanced pultrusion technology guaranteeing durable, long-term solutions with minimal maintenance requirements and extended service life."
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Challenging Water Source Compatibility",
      description: "Effective operation in environments with seawater, hard water, or contaminated water sources, making them ideal for coastal and industrial applications where water quality is a concern."
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Modern Alternative to Wooden Towers",
      description: "Offers superior corrosion resistance, longer lifespan, and reduced maintenance compared to traditional wooden cooling towers while maintaining cost-effectiveness."
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Space & Cost Optimization",
      description: "Practical solution for replacing large RCC cooling towers, offering significant space savings and cost reduction while maintaining or improving cooling performance."
    }
  ];

  return (
    <>
      {/* Hero Product Description */}
      <section className="py-16 bg-gray-50 pt-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Pultruded FRP Cooling Towers - Advanced Composite Technology for Superior Performance
            </h1>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Paltech's <strong>Pultruded FRP (Fiber Reinforced Plastic) Cooling Towers</strong> represent the pinnacle of modern composite cooling technology, engineered for industries requiring <strong>lightweight construction, exceptional corrosion resistance, rapid installation, and superior durability</strong>. These advanced cooling systems combine the structural strength of pultruded fiberglass with innovative design engineering, delivering unmatched performance in challenging industrial environments.
              </p>
              <p>
                Our pultruded FRP cooling towers are distinguished by their <strong>lightweight construction</strong> (approximately 70% lighter than concrete), <strong>non-corrosive properties</strong>, <strong>extended service life</strong> (20+ years), <strong>exceptional durability</strong>, and <strong>high structural strength</strong> comparable to traditional materials. These characteristics make them ideal for applications requiring quick installation, resistance to harsh environments, and reduced maintenance overhead.
              </p>
              <p>
                The <strong>rapid construction and installation</strong> capabilities of pultruded FRP cooling towers significantly reduce project timelines compared to conventional RCC or wooden cooling towers. This advantage, combined with superior corrosion resistance and minimal maintenance requirements, positions pultruded FRP cooling towers as the preferred choice for modern industrial cooling applications, particularly in coastal regions, chemical processing facilities, and facilities requiring quick deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key USPs */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Pultruded FRP Cooling Towers?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {uspFeatures.map((usp, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                      {usp.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{usp.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {usp.description}
                  </p>
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
                Precision-engineered components and specifications designed for superior performance, reliability, and long-term operational efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technicalSpecs.map((spec, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {spec.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{spec.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Premium Components & Engineering Excellence
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every component engineered by leading institutions and manufactured to international standards, ensuring optimal performance and reliability.
              </p>
            </div>

            <div className="space-y-6">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Available Types */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Range of Pultruded FRP Cooling Tower Configurations
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our diverse lineup of pultruded FRP cooling towers, each engineered for specific performance characteristics and industrial cooling requirements.
              </p>
            </div>

            <div className="space-y-6">
              {availableTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {type.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{type.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Ideal Applications & Industries
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Coastal Power Generation Facilities",
                "Chemical Processing Plants",
                "Petrochemical Refineries",
                "Seawater Cooling Applications",
                "HVAC Systems for Commercial Buildings",
                "Manufacturing Facilities",
                "Water Treatment Plants",
                "Food Processing Industries",
                "Pharmaceutical Manufacturing",
                "Steel & Metal Processing",
                "Pulp & Paper Mills",
                "Industrial HVAC Systems"
              ].map((app, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-primary/5 hover:border-primary transition-colors">
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
            Ready to Upgrade Your Cooling System?
          </h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Get detailed information about our Pultruded FRP Cooling Towers and discover how advanced composite technology can benefit your industrial operations. Request a comprehensive quote and expert consultation today.
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
              href="/cooling-towers"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              Explore All Cooling Towers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
