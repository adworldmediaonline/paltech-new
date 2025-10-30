"use client";

import Link from "next/link";
import Image from "next/image";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export function FrpCoolingTowersContent() {
  return (
    <section className="w-full">
      {/* Breadcrumb and intro spacing under fixed header */}
      <div className="pt-36 sm:pt-40 md:pt-44 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/cooling-towers">Cooling Towers</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>FRP Cooling Towers</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">FRP Cooling Towers</h1>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-3xl">
            FRP Induced Draft Cooling Towers engineered for efficiency, durability, and ease of maintenance. Available in multiple shapes and configurations to match diverse industrial requirements and site constraints.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold">Product Description</h2>
              <p className="text-muted-foreground">
                We offer a vast selection of FRP Cooling Towers available in various shapes and colors to complement your aesthetics and surroundings. As one of the leading manufacturers of FRP Induced Draft Cooling Towers, we provide efficient and reliable cooling solutions.
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold">Note:</span> Detailed dimensions and engineering data can be provided with a formal proposal/quotation.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold">Types of FRP cooling towers available with us:</h3>
              <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                <li>
                  <Link href="#counter-flow-bottle" className="text-primary hover:underline">Counter Flow Bottle Shape</Link>
                </li>
                <li>
                  <Link href="#counter-flow-rect-square" className="text-primary hover:underline">Counter Flow Rectangular/Square Shape</Link>
                </li>
                <li>
                  <Link href="#fanless-jet-type" className="text-primary hover:underline">Fan less Induced Draft, Jet Type FRP</Link>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h4 className="text-base sm:text-lg font-medium">Need a tailored configuration?</h4>
              <p className="mt-1 text-sm text-muted-foreground">Share your application details and get a customized proposal.</p>
              <div className="mt-4">
                <Link href="/contact" className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  Request Proposal
                </Link>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative w-full rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/categories/frp-cooling-towers.png"
                alt="FRP Cooling Towers"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 560px, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FrpCoolingTowersContent;


