"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function CoolingTowersContent() {
  const coolingTowerTypes = [
    {
      label: "RCC Concrete Cooling Towers",
      href: "/cooling-towers/rcc-concrete-cooling-towers",
      description: "Cross Flow / Counter Flow"
    },
    {
      label: "Pultruded FRP Cooling Towers",
      href: "/cooling-towers/pultruded-frp-cooling-towers",
      description: "Advanced composite technology"
    },
    {
      label: "Wooden/Timber Cooling Towers",
      href: "/cooling-towers/wooden-timber-cooling-towers",
      description: "Traditional yet efficient"
    },
    {
      label: "FRP Cooling Towers",
      href: "/cooling-towers/frp-cooling-towers",
      description: "Fiber Reinforced Plastic"
    },
  ];

  return (
    <>
      {/* Breadcrumb Section */}
      <section className="pt-2  pb-8 bg-white border-b">
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
                <BreadcrumbPage className="font-semibold">Cooling Towers</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mt-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Cooling Towers
            </h1>
            <p className="text-lg text-gray-600">
              Precision-engineered thermal management solutions for industrial excellence
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-1 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Industry-Leading Cooling Solutions
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Manufactured in accordance with industry standards, Paltech Cooling Towers are widely appreciated for exceptional quality, high performance, and prompt after-sales service.
                </p>
                <p>
                  Paltech has earned a reputation as one of the best cooling tower and equipment manufacturers in India. Our after-market services for cooling towers are well-known within the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Cooling Tower Range
            </h2>
            <p className="text-gray-600">
              Comprehensive solutions designed to meet diverse industrial requirements
            </p>
          </div>

          <div className="space-y-4">
            {coolingTowerTypes.map((type, index) => (
              <Link
                key={index}
                href={type.href}
                className="group flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary">
                    {type.label}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {type.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Find Your Perfect Cooling Solution?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Our expert team is ready to help you select the ideal cooling tower
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Expert Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
