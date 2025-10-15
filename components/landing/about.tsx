"use client";

import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { aboutData } from "@/lib/data/landing-data";
import Link from "next/link";

export function About() {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-20 md:py-28 lg:py-32 bg-slate-900"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('/industrial-bg.jpg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 to-slate-900/90" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">
            {aboutData.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 max-w-4xl">
            {aboutData.headline}
          </h2>
          <p className="text-lg text-white/80 mb-12 max-w-3xl leading-relaxed">
            {aboutData.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 mb-10">
            {aboutData.items.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 group"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-125 transition-transform" />
                <p className="text-base text-white/90">{item.text}</p>
              </div>
            ))}
          </div>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="mt-4 border-2 border-white text-white hover:bg-white hover:text-slate-900"
          >
            <Link href={aboutData.ctaHref}>{aboutData.ctaText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

