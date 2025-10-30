"use client";

import Image from "next/image";
import { ReactNode } from "react";

export interface CategoryHeroProps {
  imageSrc?: string;
  alt?: string;
  children?: ReactNode;
}

export function CategoryHero({ imageSrc = "/banner/banner.png", alt = "Hero Banner", children }: CategoryHeroProps) {
  return (
    <section className="relative w-full pt-24 sm:pt-28 md:pt-32 pb-[5px] sm:pb-[10px]">
      <div className="relative w-full overflow-hidden bg-gray-100">
        <div className="relative w-full min-h-[200px] sm:min-h-[260px] md:min-h-[320px] lg:min-h-[400px] flex items-center justify-center">
          {/* Image container that maintains aspect ratio */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={imageSrc}
              alt={alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
              style={{
                objectFit: 'contain',
                objectPosition: 'center center'
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none z-[1]" />
          {children && (
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 md:left-8 md:right-8 z-10">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CategoryHero;


