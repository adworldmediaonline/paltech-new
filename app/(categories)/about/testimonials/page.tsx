import { TestimonialsContent } from "@/components/landing/testimonials-content";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paltech™ Client Testimonials & Appreciation Certificates",
  description: "Read testimonials and appreciation certificates from satisfied clients across 46+ countries. Trusted by leading industries worldwide for 39+ years.",
  keywords: [
    "Cooling Towers",
    "Client Testimonials",
    "Appreciation Certificates",
    "Industrial Cooling",
    "Client Reviews",
    "Customer Testimonials",
    "Cooling tower client feedback",
    "Industrial cooling solutions testimonials",
    "FRP cooling tower reviews",
    "RCC cooling tower client satisfaction",
    "Wooden cooling tower testimonials",
    "Chilling plant client reviews",
    "Water treatment system testimonials",
    "ISO-certified cooling tower company reviews",
    "39+ years client testimonials",
    "Global cooling solutions client feedback",
    "Industrial cooling equipment reviews",
    "Cooling tower manufacturer testimonials",
    "Client appreciation certificates",
    "Satisfied cooling tower clients",
    "Industrial process cooling testimonials",
    "Energy-efficient cooling solutions reviews",
    "CTI USA member client testimonials",
    "Cooling tower performance certificates",
    "Industrial HVAC client feedback",
    "Proven cooling solutions testimonials",
    "Trusted cooling tower manufacturer",
    "Client success stories",
    "Industrial cooling excellence testimonials",
    "Global industrial cooling client reviews"
  ],
  alternates: {
    canonical: '/about/testimonials',
  },
  openGraph: {
    title: "Paltech™ Client Testimonials & Appreciation Certificates",
    description: "Read testimonials and appreciation certificates from satisfied clients across 46+ countries. Trusted by leading industries worldwide for 39+ years.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paltech™ Client Testimonials & Appreciation Certificates",
    description: "Read testimonials and appreciation certificates from satisfied clients across 46+ countries.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/" className="text-foreground/60 hover:text-foreground">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/about" className="text-foreground/60 hover:text-foreground">About Us</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-foreground font-semibold">Testimonials</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <TestimonialsContent />
    </div>
  );
}

