"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import Image from "next/image";
import { useState } from "react";
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, EffectCoverflow, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

const products = [
  {
    title: "Wooden Timber Cooling Towers",
    images: [
      "/products/Wooden Timber Cooling Towers 1_11zon.webp",
      "/products/Wooden Timber Cooling Towers 2_11zon.webp",
      "/products/Wooden Timber Cooling Towers 3_11zon.webp",
      "/products/Wooden Timber Cooling Towers 4_11zon.webp",
      "/products/Wooden Timber Cooling Towers 5_11zon.webp",
      "/products/WoodenTimber Single & Double Flow Induced Draft Crossflow with Direct Drive Systems.jpg",
    ],
  },
  {
    title: "Pultruded FRP Cooling Towers",
    images: [
      "/products/Pultruded FRP Cooling Towers_11zon.webp",
      "/products/Pultruded FRP Cooling Towers2_11zon.webp",
      "/products/Pultruded FRP Cooling Towers 3_11zon.webp",
      "/products/Pultruded FRP Cooling Towers 4_11zon.webp",
      "/products/Pultruded FRP Cooling Towers 5_11zon.webp",
    ],
  },
  {
    title: "RCC Concrete Cooling Towers",
    images: [
      "/products/RCC Concrete Cooling Towers.jpg",
    ],
  },
];

// Flatten all images for the main swiper
const allImages = products.flatMap(category =>
  category.images.map(img => ({
    src: img,
    category: category.title
  }))
);

export function ProductShowcase() {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <section ref={ref} className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">
            OUR PRODUCTS
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight max-w-4xl mx-auto">
            Precision Engineering in Action
          </h2>
        </div>

        {/* Main Swiper */}
        <div
          className={`mb-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation, Thumbs]}
            className="product-swiper"
          >
            {allImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full aspect-[4/3] bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200">
                  <Image
                    src={image.src}
                    alt={image.category}
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority={index < 3}
                  />
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200">
                    <span className="text-sm font-semibold text-foreground">
                      {image.category}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Thumbnail Swiper */}
        <div
          className={`transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={12}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[Navigation, Thumbs]}
            breakpoints={{
              640: {
                slidesPerView: 5,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 6,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 8,
                spaceBetween: 20,
              },
            }}
            className="thumbnail-swiper"
          >
            {allImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative aspect-video rounded-xl overflow-hidden cursor-pointer border-2 border-gray-200 hover:border-primary transition-all duration-300 bg-white">
                  <Image
                    src={image.src}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="150px"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .product-swiper {
          padding: 40px 0 60px;
        }

        .product-swiper .swiper-slide {
          width: 85%;
          max-width: 800px;
        }

        .product-swiper .swiper-slide-shadow-left,
        .product-swiper .swiper-slide-shadow-right {
          background-image: linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0));
        }

        .product-swiper .swiper-button-next,
        .product-swiper .swiper-button-prev {
          color: hsl(var(--primary));
          background: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: all 0.3s;
        }

        .product-swiper .swiper-button-next:hover,
        .product-swiper .swiper-button-prev:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 30px rgba(0,0,0,0.15);
        }

        .product-swiper .swiper-button-next::after,
        .product-swiper .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }

        .product-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: hsl(var(--primary));
          opacity: 0.4;
        }

        .product-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }

        .thumbnail-swiper .swiper-slide {
          opacity: 0.5;
          transition: opacity 0.3s;
        }

        .thumbnail-swiper .swiper-slide-thumb-active {
          opacity: 1;
        }

        .thumbnail-swiper .swiper-slide-thumb-active > div {
          border-color: hsl(var(--primary));
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
      `}</style>
    </section>
  );
}
