import { AwardsRecognitionContent } from "@/components/landing/awards-recognition-content";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awards & Recognition | Paltech™ Cooling Towers and Equipments Ltd.",
  description: "Paltech™ has been honored with two National Awards for Quality and Excellence & Performance by the Hon'ble Prime Minister and Vice President of India.",
  keywords: [
    "Paltech™ Awards",
    "National Awards",
    "Quality Excellence",
    "Performance Recognition",
    "Industrial Excellence",
    "Cooling Tower Awards",
    "Manufacturing Excellence",
    "Quality Standards",
    "Industry Recognition",
    "Prime Minister Award",
    "Vice President Award"
  ],
  openGraph: {
    title: "Awards & Recognition | Paltech™ Cooling Towers and Equipments Ltd.",
    description: "Paltech™ has been honored with two National Awards for Quality and Excellence & Performance by the Hon'ble Prime Minister and Vice President of India.",
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

