import { AwardsRecognitionContent } from "@/components/landing/awards-recognition-content";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paltech™ National Awards for Excellence & Quality",
  description: "Recognized with national awards for excellence & quality in cooling towers, water treatment, and chilling plants. 37+ years of proven industrial expertise.",
  keywords: [
    "Cooling Towers",
    "Industrial Awards",
    "Water Treatment",
    "Chilling Plants",
    "Industrial Excellence",
    "National award-winning cooling tower company",
    "Excellence in industrial cooling solutions",
    "Quality-certified FRP, wooden, and RCC cooling towers",
    "Awarded industrial water treatment and chilling solutions",
    "Proven 37+ years of industrial cooling expertise",
    "ISO-certified cooling tower and equipment manufacturer",
    "Industrial process cooling solutions with national recognition",
    "Award-winning industrial cooling solutions",
    "Cooling tower manufacturer India",
    "Water treatment systems for industries",
    "Chilling plant solutions for factories",
    "ISO 9001:2015 certified cooling towers",
    "Energy-efficient industrial cooling equipment",
    "Industrial HVAC and process cooling solutions",
    "National recognition for industrial excellence",
    "Industrial cooling and water management solutions",
    "Global industrial cooling systems provider",
    "Two consecutive national awards",
    "Excellence & performance in cooling towers",
    "FRP, Wooden, RCC cooling towers recognition",
    "CTI USA member certified cooling solutions",
    "Industrial quality and performance awards",
    "Cooling tower innovation and leadership"
  ],
  alternates: {
    canonical: '/about/awards-recognition',
  },
  openGraph: {
    title: "Paltech™ National Awards for Excellence & Quality",
    description: "Recognized with national awards for excellence & quality in cooling towers, water treatment, and chilling plants. 37+ years of proven industrial expertise.",
    type: "website",
  },
};

export default function AwardsRecognitionPage() {
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
            <BreadcrumbPage className="text-foreground font-semibold">Awards & Recognition</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex gap-8">
        <main className="flex-1 min-w-0">
          <AwardsRecognitionContent />
        </main>
        <USPSidebar />
      </div>
    </div>
  );
}

