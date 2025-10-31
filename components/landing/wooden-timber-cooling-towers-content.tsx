import Link from "next/link";
import { ArrowRight, CheckCircle, Zap, Settings, Droplets, Shield, Award, Clock, Users, Factory } from "lucide-react";

export function WoodenTimberCoolingTowersContent() {
  const coolingTowerTypes = [
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Wooden/Timber Single & Double Flow Induced Draft Crossflow with Direct Drive Systems",
      href: "/cooling-towers/wooden-timber-cooling-towers/wooden-single-double-flow-induced-draft-crossflow-with-direct-drive-systems",
      description: "These systems utilize direct drive mechanisms for both single and double flow induced draft cross flow configurations, ensuring efficient cooling with simplified mechanical design and reduced maintenance requirements."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Wooden/Timber Single & Double Flow Induced Draft Crossflow with Reduction Gearbox Drive System",
      href: "/cooling-towers/wooden-timber-cooling-towers/wooden-single-double-flow-induced-draft-crossflow-with-reduction-gearbox-drive-system",
      description: "These systems incorporate reduction gearbox drive mechanisms, offering enhanced control, reliability, and optimal performance in both single and double flow induced draft cross flow setups for medium to large capacity applications."
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Packaged Wooden/Timber Double Flow Induced Draft Crossflow",
      href: "/cooling-towers/wooden-timber-cooling-towers/packaged-wooden-double-flow-induced-draft-crossflow",
      description: "Complete packaged systems specifically designed for double flow induced draft cross flow cooling, providing convenient installation, comprehensive functionality, and efficient cooling solutions for various industrial applications."
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Fan-less Induced Draft Systems",
      href: "/cooling-towers/wooden-timber-cooling-towers/fan-less-induced-draft",
      description: "Innovative energy-efficient design operating on induced draft principles without traditional fans, providing sustainable cooling solutions particularly suited for specific industrial applications and environmental conditions."
    }
  ];

  const keyFeatures = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "Proven Traditional Strength",
      description: "Decades of industrial use demonstrating proven durability, reliability, and performance in diverse cooling applications across multiple industries."
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Custom Engineering Solutions",
      description: "Tailored designs engineered for specific installation requirements, maintenance needs, and operational conditions, ensuring optimal performance for your unique application."
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Expert Maintenance & Support",
      description: "Specialized maintenance, repair, and upgrade services for existing wooden/timber cooling tower installations, ensuring continued optimal performance and extended service life."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Established Track Record",
      description: "Over 37+ of Years experience in wooden cooling tower construction, maintenance, and optimization, serving clients across diverse industrial sectors."
    }
  ];

  return (
    <>
      {/* Hero Product Description */}
      <section className="py-16 bg-gray-50 pt-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Wooden/Timber Cooling Towers - Traditional Engineering Excellence for Modern Applications
            </h1>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                The evolution of cooling tower construction, driven by environmental considerations and material science advancements, has witnessed a shift toward modern composite materials like Fiberglass Reinforced Plastic (FRP). However, <strong>wooden and timber cooling towers</strong> continue to serve critical roles in specific industrial applications where traditional construction meets unique operational requirements, cost-effectiveness, and proven reliability.
              </p>
              <p>
                Paltech™ recognizes that certain installations have distinctive demands for <strong>wooden/timber cooling tower solutions</strong>. Moreover, numerous existing facilities operate with legacy wooden cooling towers that require expert maintenance, repair, and performance optimization services. As industrial cooling specialists with extensive experience in traditional materials, Paltech™ provides comprehensive solutions tailored to your specific needs—whether you require new wooden cooling tower construction or ongoing maintenance for existing systems.
              </p>
              <p>
                Our expertise spans from <strong>pinewood construction</strong> to modern timber engineering techniques, ensuring optimal performance, durability, and cost-effectiveness. Whether your priority is the advanced durability of FRP cooling towers or the traditional reliability of wooden cooling towers, Paltech™ serves as your trusted partner in industrial cooling solutions, offering expert consultation, custom engineering, and comprehensive support services.
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
              Why Choose Wooden/Timber Cooling Towers?
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

      {/* Types of Systems */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Range of Wooden Cooling Tower Systems
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our diverse lineup of robust and efficient wooden/timber cooling solutions, each engineered for specific capacity requirements and operational characteristics.
              </p>
            </div>

            <div className="space-y-6">
              {coolingTowerTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {type.icon}
                    </div>
                    <div className="flex-1">
                      <Link href={type.href} className="group">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2">
                          {type.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {type.description}
                      </p>
                      <Link
                        href={type.href}
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        Learn More About This System
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
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
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ideal Applications & Use Cases
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                When wooden/timber cooling towers represent the optimal solution for your industrial cooling requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <Settings className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Specific Installation Requirements</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  When project specifications, environmental regulations, or operational conditions require traditional wooden construction for specific industrial applications. Ideal for facilities operating in environments where timber construction aligns with sustainability objectives or specific regulatory compliance.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Existing Tower Maintenance & Upgrades</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive maintenance, repair, refurbishment, and upgrade services for existing wooden/timber cooling towers that remain operational. Our expert team provides condition assessment, performance optimization, component replacement, and structural reinforcement services.
                </p>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {[
                "Legacy Industrial Facilities",
                "Specific Regulatory Compliance",
                "Cost-Effective Cooling Solutions",
                "Maintenance & Repair Services",
                "Performance Upgrades",
                "Component Replacement"
              ].map((app, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-primary/5 hover:border-primary transition-colors">
                  <p className="text-gray-700 font-medium text-center">{app}</p>
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
            Need Expert Wooden/Timber Cooling Tower Solutions?
          </h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Whether you require new wooden cooling tower construction or expert maintenance for existing systems, our specialists are ready to assist you with comprehensive solutions tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Expert Consultation
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
