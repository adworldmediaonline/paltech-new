"use client";

import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ctaSectionData } from "@/lib/data/landing-data";
import Link from "next/link";

export function CtaSection() {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 lg:py-32 bg-gradient-to-r from-primary to-primary/80"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
            {ctaSectionData.headline}
          </h2>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 h-auto"
          >
            <Link href={ctaSectionData.ctaHref}>{ctaSectionData.ctaText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

