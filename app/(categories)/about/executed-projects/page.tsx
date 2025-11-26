import { ExecutedProjectsContent } from "@/components/landing/executed-projects-content";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paltech™ Executed Cooling Tower Projects Worldwide",
  description: "Showcasing executed cooling tower projects across industries & countries. 39+ years of expertise delivering high-quality, reliable industrial solutions.",
  keywords: [
    "Cooling Towers",
    "Industrial Projects",
    "Chilling Plants",
    "Water Treatment",
    "HVAC Systems",
    "Executed industrial cooling tower projects",
    "Completed cooling tower installations worldwide",
    "Industrial process cooling solutions for factories",
    "High-capacity FRP, wooden, and RCC cooling towers",
    "International industrial cooling projects",
    "Turnkey cooling tower project execution",
    "Industrial water treatment and chilling plant projects",
    "Industrial cooling projects",
    "Cooling tower installations",
    "Global industrial cooling solutions",
    "ISO-certified cooling tower projects",
    "Energy-efficient industrial cooling systems",
    "FRP, Wooden, RCC cooling tower projects",
    "Industrial HVAC and process cooling installations",
    "Large-scale cooling tower solutions provider",
    "International process cooling projects",
    "Industrial project execution services",
    "Executed projects portfolio",
    "39+ years of industrial cooling expertise",
    "High client satisfaction cooling projects",
    "International and domestic cooling projects",
    "High-capacity industrial cooling systems",
    "Turnkey industrial solutions for process cooling"
  ],
  alternates: {
    canonical: '/about/executed-projects',
  },
  openGraph: {
    title: "Paltech™ Executed Cooling Tower Projects Worldwide",
    description: "Showcasing executed cooling tower projects across industries & countries. 39+ years of expertise delivering high-quality, reliable industrial solutions.",
    type: "website",
  },
};

export default function ExecutedProjectsPage() {
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
            <BreadcrumbPage className="text-foreground font-semibold">Executed Projects</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex gap-8">
        <main className="flex-1 min-w-0">
          <ExecutedProjectsContent />
        </main>
        <USPSidebar />
      </div>
    </div>
  );
}

