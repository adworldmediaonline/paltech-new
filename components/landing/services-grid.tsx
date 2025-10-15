"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { servicesData } from "@/lib/data/landing-data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ServicesGrid() {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <section ref={ref} className="py-20 md:py-28 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">
              {servicesData.eyebrow}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.services.map((service, index) => (
            <Card
              key={index}
              className={`group bg-slate-800/95 border-slate-700 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 h-full flex flex-col">
                <div className="text-6xl font-bold text-primary/20 mb-4">
                  {service.number}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-base text-white/70 mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={service.linkHref}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group-hover:text-primary/80"
                >
                  {service.linkText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

