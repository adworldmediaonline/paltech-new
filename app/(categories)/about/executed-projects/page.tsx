import { ExecutedProjectsContent } from "@/components/landing/executed-projects-content";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executed Projects | Paltech™ Cooling Tower Installations",
  description: "Explore Paltech's portfolio of successfully executed cooling tower projects across India and international markets, serving power, steel, sugar, and chemical industries.",
  keywords: [
    "Cooling Tower Projects",
    "Executed Projects",
    "Paltech™ Installations",
    "Industrial Cooling Towers",
    "FRP Cooling Towers",
    "RCC Cooling Towers",
    "Wooden Cooling Towers",
    "Power Plant Cooling Towers",
    "Sugar Industry Cooling",
    "Steel Industry Cooling",
    "International Projects",
    "Cooling Tower Case Studies"
  ],
  openGraph: {
    title: "Executed Projects | Paltech™ Cooling Tower Installations",
    description: "Explore Paltech's portfolio of successfully executed cooling tower projects across India and international markets, serving power, steel, sugar, and chemical industries.",
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

