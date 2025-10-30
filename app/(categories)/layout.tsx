import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { USPSidebar } from "@/components/landing/usp-sidebar";

export default function CategoriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Hero section will be rendered by pages and will be full-width */}
      <div className="flex-1 flex flex-col">
        {children}
      </div>
      <Footer />
    </div>
  );
}
