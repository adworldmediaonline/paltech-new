"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroData } from "@/lib/data/landing-data";
import { ArrowRight, Award, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-primary/15 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Hexagonal pattern on the right */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
              <path d="M25 0l25 14.5v29L25 58 0 43.5v-29z" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 lg:py-40 w-full">
        <div className="max-w-5xl mx-auto">
          {/* Content - Centered */}
          <div className="text-center animate-fade-in">
            {/* Eyebrow badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <Badge className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 text-white border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm text-xs sm:text-sm">
                <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5 sm:mr-2 text-primary" />
                ISO 9001:2015 Certified
              </Badge>
              <Badge className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 text-white border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm text-xs sm:text-sm">
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5 sm:mr-2 text-primary" />
                CTI Member Since 1986
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white leading-[1.1] sm:leading-[1.08] tracking-tight mb-6 sm:mb-8 px-2">
              Precision-Engineered{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient inline-block">
                Cooling Solutions
              </span>{" "}
              for Critical Industries
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 sm:mb-12 leading-relaxed max-w-4xl mx-auto font-light px-4">
              Three decades of engineering excellence delivering industrial cooling systems to 25+ countries worldwide.
              Trusted by global leaders for mission-critical operations.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4">
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-primary to-primary/90 text-white hover:shadow-2xl hover:shadow-primary/30 active:scale-95 transition-all text-sm sm:text-base md:text-lg px-8 sm:px-10 py-5 sm:py-6 md:py-7 h-auto rounded-xl sm:rounded-2xl font-semibold hover:scale-105 touch-manipulation"
              >
                <Link href={heroData.primaryCta.href}>
                  {heroData.primaryCta.text}
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/20 text-black hover:bg-primary/10 hover:text-white backdrop-blur-sm active:scale-95 text-sm sm:text-base md:text-lg px-8 sm:px-10 py-5 sm:py-6 md:py-7 h-auto rounded-xl sm:rounded-2xl font-semibold transition-all hover:border-white/40 touch-manipulation"
              >
                <Link href={heroData.secondaryCta.href}>
                  {heroData.secondaryCta.text}
                </Link>
              </Button>
            </div>

            {/* Trust Stats - Horizontal row */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12 px-4">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">30+</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">500+</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Projects Delivered</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">25+</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Countries Served</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 sm:mb-2">99.8%</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">System Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
