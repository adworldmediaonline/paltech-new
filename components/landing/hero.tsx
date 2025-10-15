"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { heroData } from "@/lib/data/landing-data";
import { ArrowRight, Award, Building2, CheckCircle2, Globe, Shield } from "lucide-react";
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            {/* Eyebrow badge */}
            <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
              <Award className="w-3 h-3 mr-2" />
              ISO Certified • CTI Member Since 1986
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Precision-Engineered{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient">
                Cooling Solutions
              </span>{" "}
              for Critical Industries
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Three decades of engineering excellence delivering industrial cooling systems to 25+ countries.
              Trusted by global leaders for mission-critical operations.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-primary to-primary/90 text-white hover:shadow-xl hover:shadow-primary/20 transition-all text-base px-8 py-6 h-auto rounded-xl font-semibold"
              >
                <Link href={heroData.primaryCta.href}>
                  {heroData.primaryCta.text}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/20 text-black hover:bg-white/10 backdrop-blur-sm text-base px-8 py-6 h-auto rounded-xl font-semibold"
              >
                <Link href={heroData.secondaryCta.href}>
                  {heroData.secondaryCta.text}
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>30+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                <span>25+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                <span>500+ Projects</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            {/* Floating certification cards */}
            <div className="relative h-[600px]">
              {/* Main visual circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                    <Shield className="w-32 h-32 text-primary/40" />
                  </div>
                </div>
              </div>

              {/* Floating card 1 - Top Right */}
              <Card className="absolute top-10 right-10 p-4 bg-white/10 backdrop-blur-md border-white/20 shadow-xl animate-float">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">ISO 9001:2015</p>
                    <p className="text-gray-300 text-xs">Quality Certified</p>
                  </div>
                </div>
              </Card>

              {/* Floating card 2 - Left */}
              <Card className="absolute top-1/4 left-0 p-4 bg-white/10 backdrop-blur-md border-white/20 shadow-xl animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">CTI Member</p>
                    <p className="text-gray-300 text-xs">Since 1986</p>
                  </div>
                </div>
              </Card>

              {/* Floating card 3 - Bottom Right */}
              <Card className="absolute bottom-20 right-0 p-4 bg-white/10 backdrop-blur-md border-white/20 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Global Reach</p>
                    <p className="text-gray-300 text-xs">25+ Countries</p>
                  </div>
                </div>
              </Card>

              {/* Floating card 4 - Bottom Left */}
              <Card className="absolute bottom-10 left-10 p-4 bg-white/10 backdrop-blur-md border-white/20 shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">500+ Projects</p>
                    <p className="text-gray-300 text-xs">Worldwide</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

