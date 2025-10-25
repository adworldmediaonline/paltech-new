"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Home, Zap, Settings, Droplets, Shield, Award, Clock, Users, Globe } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function WoodenTimberReductionGearboxDriveSystemContent() {
  const keyFeatures = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "Quality Products & Most Reliable Services",
      description: "Paltech ensures top-tier quality and dependable services for all cooling tower components."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "More than 34 years of mfg. Excellence",
      description: "Decades of experience in manufacturing ensure superior product quality and performance."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "More than 9000 clients",
      description: "A vast client base trusts Paltech for their industrial cooling solutions worldwide."
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Export to 25+ countries",
      description: "Our cooling towers are supplied globally, meeting international standards and demands."
    },
  ];

  const technicalSpecs = [
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Fan Assembly",
      items: [
        "Specialized fan assembly driven by a reduction gear reducer of the spiral bevel type",
        "Fan assembly operates with the assistance of a non-lubricated balanced drive shaft fitted with flexible links",
        "Innovative design ensures efficient and smooth fan operation"
      ]
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Motor & Drive System",
      items: [
        "Fans are powered by an electric motor connected to a gearbox through a dynamically balanced tubular drive shaft",
        "Setup guarantees optimal performance and minimizes vibrations",
        "Enhances the overall efficiency of the cooling tower"
      ]
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Structural Framework",
      items: [
        "Entire equipment is mounted on a single fabricated mild steel frame",
        "Adequately weatherproofed to withstand various environmental conditions",
        "Robust construction ensures the reliability and longevity of our cooling towers"
      ]
    }
  ];

  const structuralDetails = [
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Structural Joints",
      description: "All structural joints are securely fastened with galvanized bolts and S.S./Brass nails, ensuring robust construction. Stainless Steel or phosphor bronze hardware can be provided upon request, subject to an additional cost."
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Water Distribution",
      description: "To achieve uniform water distribution, the hot water basin is equipped with a distribution box. This mechanism ensures equal distribution of water within the hot water basin. The water is then efficiently splashed downward through strategically positioned spray target nozzles, optimizing the cooling process."
    }
  ];

  return (
    <>
      {/* Breadcrumb Section */}
      <section className="pt-36 sm:pt-40 md:pt-44 pb-8 bg-white border-b">
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/cooling-towers">Cooling Towers</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/cooling-towers/wooden-timber-cooling-towers">
                  Wooden/Timber Cooling Towers
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-semibold">Reduction Gearbox Drive System</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mt-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Wooden/Timber Single & Double Flow Induced Draft Crossflow with Reduction Gearbox Drive System
            </h1>
            <p className="text-lg text-gray-600">
              Medium capacity cooling towers with specialized fan assembly and reduction gear reducer technology
            </p>
          </div>
        </div>
      </section>

      {/* Product Description Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Product Description
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Our medium capacity cooling towers are equipped with a specialized fan assembly driven by a reduction gear reducer of the spiral bevel type. The fan assembly operates with the assistance of a non-lubricated balanced drive shaft fitted with flexible links. This innovative design ensures efficient and smooth fan operation.
                </p>
                <p>
                  The fans are powered by an electric motor connected to a gearbox through a dynamically balanced tubular drive shaft. This setup guarantees optimal performance and minimizes vibrations, enhancing the overall efficiency of the cooling tower.
                </p>
                <p>
                  To ensure stability and durability, the entire equipment is mounted on a single fabricated mild steel frame, which is adequately weatherproofed to withstand various environmental conditions. This robust construction ensures the reliability and longevity of our cooling towers.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-2 shadow-xl">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/categories/wooden-timber-cooling-towers/wooden-single-double-flow-induced-draft-crossflow-with-reduction-gearbox-drive-system.png"
                  alt="Wooden/Timber Single & Double Flow Induced Draft Crossflow with Reduction Gearbox Drive System"
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

      {/* Technical Specifications Section */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Advanced engineering specifications designed for medium capacity cooling applications
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-primary/5 to-blue-50 p-6 rounded-xl border border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
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
      </section>

      {/* Structural Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Structural Details
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Robust construction and precision engineering for reliable performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {structuralDetails.map((detail, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {detail.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{detail.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{detail.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Paltech Reduction Gearbox Drive Systems?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our proven track record and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 rounded-xl border border-green-200">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-3 sm:mb-4">
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

      {/* Additional Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Engineering Data & Dimensions</h3>
              <p className="text-gray-600 mb-6">
                Dimensions & other Engineering Data are available with Proposal / Quotation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Proposal/Quotation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/cooling-towers/wooden-timber-cooling-towers"
                  className="inline-flex items-center px-6 py-3 bg-transparent text-primary border-2 border-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  Back to Wooden/Timber Cooling Towers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Interested in our Products? Let's Talk Business
          </h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Contact us today to learn more about our reduction gearbox drive wooden/timber cooling towers and how they can benefit your industrial operations.
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
