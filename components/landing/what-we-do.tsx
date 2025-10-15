"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { whatWeDoData } from "@/lib/data/landing-data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function WhatWeDo() {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <section ref={ref} className="py-20 md:py-28 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">
            {whatWeDoData.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 max-w-4xl">
            {whatWeDoData.headline}
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl leading-relaxed">
            {whatWeDoData.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 mb-10">
            {whatWeDoData.items.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-125 transition-transform" />
                <p className="text-base text-foreground/90">{item.text}</p>
              </div>
            ))}
          </div>

          <Link
            href={whatWeDoData.ctaHref}
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            {whatWeDoData.ctaText}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

