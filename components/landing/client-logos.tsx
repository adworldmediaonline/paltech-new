"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { clientLogosData } from "@/lib/data/landing-data";

export function ClientLogos() {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <section ref={ref} className="py-20 md:py-28 lg:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
            {clientLogosData.headline}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogosData.logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="w-full h-16 bg-muted-foreground/20 rounded flex items-center justify-center">
                  <span className="text-xs text-muted-foreground font-medium">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

