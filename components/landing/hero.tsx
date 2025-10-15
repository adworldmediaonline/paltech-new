"use client";

import { Button } from "@/components/ui/button";
import { heroData } from "@/lib/data/landing-data";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            {heroData.headline}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 font-light">
            {heroData.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-lg px-8 py-6 h-auto"
            >
              <Link href={heroData.primaryCta.href}>
                {heroData.primaryCta.text}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-base sm:text-lg px-8 py-6 h-auto"
            >
              <Link href={heroData.secondaryCta.href}>
                {heroData.secondaryCta.text}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

