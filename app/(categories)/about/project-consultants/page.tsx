import { ProjectConsultantsContent } from "@/components/landing/project-consultants-content";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Consultants | Paltech™ Engineering Partnerships",
  description: "Paltech™ collaborates with leading national and international engineering consultants including Engineers India, Tata Projects, Jacobs Engineering, and more for world-class cooling tower projects.",
  keywords: [
    "Project Consultants",
    "Engineering Consultants",
    "Paltech™ Partners",
    "Cooling Tower Consultants",
    "Engineers India Limited",
    "Tata Projects",
    "Jacobs Engineering",
    "LURGI",
    "Mecon Limited",
    "Technip KT",
    "Engineering Collaboration",
    "Project Partnerships",
    "Industrial Consultants"
  ],
  openGraph: {
    title: "Project Consultants | Paltech™ Engineering Partnerships",
    description: "Paltech™ collaborates with leading national and international engineering consultants including Engineers India, Tata Projects, Jacobs Engineering, and more for world-class cooling tower projects.",
    type: "website",
  },
};

export default function ProjectConsultantsPage() {
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
            <BreadcrumbPage className="text-foreground font-semibold">Project Consultants</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex gap-8">
        <main className="flex-1 min-w-0">
          <ProjectConsultantsContent />
        </main>
        <USPSidebar />
      </div>
    </div>
  );
}

