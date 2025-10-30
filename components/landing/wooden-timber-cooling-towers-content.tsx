import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Zap, Settings, Droplets, Shield, Award, Clock, Users } from "lucide-react";

export function WoodenTimberCoolingTowersContent() {
  const coolingTowerTypes = [
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Wooden/Timber Single & Double Flow Induced Draft Crossflow with Direct Drive Systems",
      href: "/cooling-towers/wooden-timber-cooling-towers/direct-drive-systems",
      description: "These systems utilize direct drive mechanisms for both single and double flow induced draft cross flow configurations, ensuring efficient cooling."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Wooden/Timber Single & Double Flow Induced Draft Crossflow with Reduction Gearbox Drive System",
      href: "/cooling-towers/wooden-timber-cooling-towers/reducer-drive-system",
      description: "These systems incorporate reduction gearbox drive mechanisms, offering enhanced control and reliability in both single and double flow induced draft cross flow setups."
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Packaged Wooden/Timber Double Flow Induced Draft Crossflow",
      href: "/cooling-towers/wooden-timber-cooling-towers/packaged-cooling-towers",
      description: "These systems come as complete packages, specifically designed for double flow induced draft cross flow cooling, providing a convenient and efficient cooling solution."
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Fan less Induced Draft",
      href: "/cooling-towers/wooden-timber-cooling-towers/fan-less-induced-draft",
      description: "This innovative design operates on an induced draft principle without traditional fans, providing an energy-efficient cooling solution, particularly suited for specific industrial applications."
    }
  ];

  const keyFeatures = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "Traditional Strength",
      description: "Proven durability and reliability from decades of industrial use"
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Custom Solutions",
      description: "Tailored designs for specific installation requirements and maintenance needs"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Expert Maintenance",
      description: "Specialized support for existing wooden/timber cooling tower installations"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Proven Track Record",
      description: "Decades of experience in wooden cooling tower construction and maintenance"
    }
  ];

  return (
    <>
      {/* Product Description Section */}
      <section className="py-16 bg-gray-50 pt-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                The Enduring Legacy of Wooden/Timber Cooling Towers
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The evolution of cooling tower construction, driven by environmental concerns and advancements in materials, has led to the preference for Fiberglass Reinforced Plastic (FRP) as the ideal material. This transition away from wood cooling towers marks an interesting journey, starting with pinewood construction.
                </p>
                <p>
                  However, specific installations have unique demands for wooden/timber cooling towers. Moreover, there are instances where old wooden/timber cooling towers still exist and require maintenance. As industrial experts in this area, Paltech steps in to provide solutions tailored to your specific needs. Whether it's the durability of FRP or the traditional requirement for wooden cooling towers, Paltech is your reliable partner in the cooling industry.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-2 shadow-xl">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/categories/wooden-timber-cooling-towers.png"
                  alt="Wooden/Timber Cooling Tower"
                  width={1000}
                  height={625}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Wooden/Timber Cooling Towers?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Traditional construction with modern engineering expertise
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 sm:p-6 rounded-xl border border-amber-200">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 sm:w-10 sm:h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-3 sm:mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Systems Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Types of Wooden Cooling Tower Systems
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our range of robust and efficient wooden/timber cooling solutions
            </p>
          </div>

          <div className="space-y-6">
            {coolingTowerTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {type.icon}
                  </div>
                  <div className="flex-1">
                    <Link href={type.href} className="group">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2">
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
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ideal Applications
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              When wooden/timber cooling towers are the right choice
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <Settings className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Specific Installation Requirements</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                When project specifications or environmental conditions require traditional wooden construction for specific industrial applications.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Existing Tower Maintenance</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                For maintenance, repair, and upgrade services for existing wooden/timber cooling towers that are still operational.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need a Reliable Wooden/Timber Cooling Solution?
          </h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Our experts are ready to assist you with traditional and modern timber cooling tower needs. Whether you need new construction or maintenance of existing systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Expert Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/cooling-towers"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              View All Cooling Towers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
