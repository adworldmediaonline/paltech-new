import { WoodenTimberDirectDriveSystemsContent } from "@/components/landing/wooden-single-double-flow-induced-draft-crossflow-with-direct-drive-systems-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import directDrive1 from '../../../../../public/categories/wooden-timber-single-double-flow-induced-draft-crossflow-with-direct-drive-systems-1.webp';
import directDrive2 from '../../../../../public/categories/wooden-timber-single-double-flow-induced-draft-crossflow-with-direct-drive-systems-2.webp';
import directDrive3 from '../../../../../public/categories/wooden-timber-single-double-flow-induced-draft-crossflow-with-direct-drive-systems-3.webp';
import directDrive4 from '../../../../../public/categories/wooden-timber-single-double-flow-induced-draft-crossflow-with-direct-drive-systems-4.webp';

const images = [directDrive1, directDrive2, directDrive3, directDrive4];

export default function WoodenTimberDirectDriveSystemsPage() {
  return (
    <>
      {/* Full-width Hero Slider */}
      <CategoryHero images={images}>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="text-white/90 hover:text-white">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/70" />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/cooling-towers" className="text-white/90 hover:text-white">Cooling Towers</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/70" />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/cooling-towers/wooden-timber-cooling-towers" className="text-white/90 hover:text-white">Wooden/Timber Cooling Towers</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/70" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white font-semibold">Direct Drive Systems</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      {/* Content Section with USP Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <WoodenTimberDirectDriveSystemsContent />
          </main>

          {/* USP Sidebar */}
          <USPSidebar />
        </div>
      </div>
    </>
  );
}
