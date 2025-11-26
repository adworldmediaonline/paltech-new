import { ProjectConsultantsContent } from "@/components/landing/project-consultants-content";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paltech™ Project Consultants for Industrial Cooling Towers",
  description: "Partner with leading project consultants for world-class cooling tower solutions. 39+ years expertise in engineering, design, and global industrial projects.",
  keywords: [
    "Project Consultants",
    "Cooling Towers",
    "Engineering Services",
    "Industrial Projects",
    "Technical Support",
    "Industrial cooling tower project consultants",
    "Collaboration with international engineering consultants",
    "Custom engineering solutions for cooling towers",
    "Expert project management for industrial cooling systems",
    "ISO-certified cooling tower engineering partners",
    "Multi-disciplinary coordination for complex projects",
    "Technical support for cooling tower installations",
    "Value engineering in industrial cooling projects",
    "Industrial cooling tower solutions",
    "Engineering consultancy for cooling projects",
    "Global project consultants in industrial cooling",
    "Cooling tower design and manufacturing expertise",
    "International industrial project collaborations",
    "Engineering partner for turnkey cooling systems",
    "Project execution services for cooling towers",
    "Technical consulting for process cooling",
    "Complex industrial cooling system projects",
    "Industrial project engineering services",
    "Trusted engineering partners",
    "Collaboration with top consultants",
    "39+ years of engineering excellence",
    "Global network of industrial consultants",
    "Timely delivery of industrial projects",
    "ISO-certified quality assurance in cooling systems"
  ],
  alternates: {
    canonical: '/about/project-consultants',
  },
  openGraph: {
    title: "Paltech™ Project Consultants for Industrial Cooling Towers",
    description: "Partner with leading project consultants for world-class cooling tower solutions. 39+ years expertise in engineering, design, and global industrial projects.",
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

