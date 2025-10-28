"use client";

import Image from "next/image";

export function HeroBanner() {
  return (
    <section className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden bg-no-repeat bg-cover" style={{ backgroundImage: 'url(/banner/hero-banner-1.png)', backgroundPosition: 'top center' }}>
      </div>
    </section>
  );
}
