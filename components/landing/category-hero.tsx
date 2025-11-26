"use client";

import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface CategoryHeroProps {
  imageSrc?: string;
  alt?: string;
  children?: ReactNode;
  images?: StaticImageData[]; // For multiple images in slider
}

export function CategoryHero({
  imageSrc = "/banner/banner.png",
  alt = "Hero Banner",
  children,
  images
}: CategoryHeroProps) {
  // Use provided images array or create array with single image repeated
  const sliderImages = images || [imageSrc, imageSrc, imageSrc];

  return (
    <section className="relative w-full pt-32">
      <div className="relative w-full overflow-hidden bg-gray-100">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          loop={true}
          speed={1000}
          className="category-hero-swiper"
        >
          {sliderImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full min-h-[200px] sm:min-h-[260px] md:min-h-[320px] lg:min-h-[400px] flex items-center justify-center">
                {/* Image container */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={img}
                    alt={`${alt} - Slide ${index + 1}`}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none z-[1]" />
                {/* Breadcrumb overlay - only on first slide */}
                {children && index === 0 && (
                  <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 md:left-8 md:right-8 z-10">
                    {children}
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .category-hero-swiper {
          width: 100%;
          height: 100%;
        }

        .category-hero-swiper .swiper-slide {
          width: 100%;
          height: auto;
        }

        .category-hero-swiper .swiper-button-next,
        .category-hero-swiper .swiper-button-prev {
          color: white;
          background: rgba(255, 255, 255, 0.2);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .category-hero-swiper .swiper-button-next:hover,
        .category-hero-swiper .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .category-hero-swiper .swiper-button-next::after,
        .category-hero-swiper .swiper-button-prev::after {
          font-size: 18px;
          font-weight: bold;
        }

        .category-hero-swiper .swiper-pagination {
          bottom: 20px;
        }

        .category-hero-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .category-hero-swiper .swiper-pagination-bullet-active {
          background: white;
          width: 32px;
          border-radius: 6px;
        }

        @media (max-width: 768px) {
          .category-hero-swiper .swiper-button-next,
          .category-hero-swiper .swiper-button-prev {
            width: 36px;
            height: 36px;
          }

          .category-hero-swiper .swiper-button-next::after,
          .category-hero-swiper .swiper-button-prev::after {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}

export default CategoryHero;
