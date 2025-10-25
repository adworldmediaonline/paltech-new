import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { USPSidebar } from "@/components/landing/usp-sidebar";

export default function CategoriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {/* Main Content */}
            <main className="flex-1 min-w-0">
              {children}
            </main>

            {/* USP Sidebar */}
            <USPSidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
