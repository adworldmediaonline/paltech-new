"use client";

import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { solutionsShowcaseData } from "@/lib/data/landing-data";
import Link from "next/link";

export function SolutionsShowcase() {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <section ref={ref} className="py-20 md:py-28 lg:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">
              {solutionsShowcaseData.eyebrow}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              {solutionsShowcaseData.headline}
            </h2>
            {solutionsShowcaseData.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
            <Button asChild size="lg" className="mt-4 bg-primary text-primary-foreground">
              <Link href={solutionsShowcaseData.ctaHref}>
                {solutionsShowcaseData.ctaText}
              </Link>
            </Button>
          </div>

          {/* Visual Placeholder */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
              <div className="relative text-center p-8">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/30" />
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Product visualization placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

