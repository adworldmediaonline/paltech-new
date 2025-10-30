"use client";

import Image from "next/image";

interface CategoryHeroProps {
  title: string;
  imageSrc?: string;
}

export function CategoryHero({ title, imageSrc }: CategoryHeroProps) {
  const src = imageSrc || "/banner/banner.png"; // fallback placeholder already in repo
  return (
    <section className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px]">
      <div className="absolute inset-0 overflow-hidden">
        <Image src={src} alt={title} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 h-full flex items-end">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-6">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight drop-shadow">{title}</h1>
        </div>
      </div>
    </section>
  );
}

export default CategoryHero;

"use client";

import Image from "next/image";

export interface CategoryHeroProps {
  title: string;
  imageSrc?: string;
  alt?: string;
}

export function CategoryHero({ title, imageSrc = "/banner/banner.png", alt = title }: CategoryHeroProps) {
  return (
    <section className="relative w-full pt-36 sm:pt-40 md:pt-44">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-white/40 shadow-sm">
          <div className="relative h-[200px] sm:h-[260px] md:h-[320px]">
            <Image src={imageSrc} alt={alt} fill sizes="100vw" className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            <h1 className="absolute bottom-4 left-4 right-4 text-xl sm:text-2xl md:text-3xl font-semibold text-white drop-shadow">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryHero;


