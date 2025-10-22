"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ProductDropdown, ProductDropdownMobile } from "@/components/landing/product-dropdown";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { navItems } from "@/lib/data/landing-data";
import { ChevronDown, Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const [mobileProductDropdownOpen, setMobileProductDropdownOpen] = useState(false);
  const scrolled = useScrollPosition(50);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 md:pt-6 px-3 sm:px-4 md:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-7xl transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 border border-gray-200/50"
            : "bg-white/10 backdrop-blur-md border border-white/10"
        } rounded-xl md:rounded-2xl`}
      >
        <div className="flex h-16 sm:h-18 md:h-20 items-center justify-between px-4 sm:px-6 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 group-hover:scale-105 transition-transform">
              <Image
                src="/logo/image.png"
                alt="PALTECH Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    scrolled
                      ? "text-foreground/70 hover:text-foreground hover:bg-gray-100/50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className={`w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-all ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`} />
                  )}
                </Link>

                {/* Product Dropdown */}
                {item.hasDropdown && item.label === "Products" && item.productCategories && openDropdown === item.label && (
                  <ProductDropdown
                    categories={item.productCategories}
                    isOpen={openDropdown === item.label}
                    onClose={() => setOpenDropdown(null)}
                  />
                )}

                {/* Regular Dropdown Menu */}
                {item.hasDropdown && item.subItems && item.label !== "Products" && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200/50 py-2 animate-fade-in">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-4 py-2.5 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-gray-50 transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              className={`p-2 rounded-lg transition-all ${
                scrolled
                  ? "text-foreground/60 hover:text-foreground hover:bg-gray-100/50"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-primary/90 text-white hover:shadow-lg hover:shadow-primary/20 transition-all rounded-xl font-semibold"
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              className={`p-2 transition-colors ${
                scrolled ? "text-foreground/60 hover:text-foreground" : "text-white/70 hover:text-white"
              }`}
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            {mounted && (
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Open menu"
                    className={`transition-colors ${
                      scrolled
                        ? "text-foreground hover:bg-gray-100/50"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetTitle className="sr-only">Menu</SheetTitle>
                  <SheetContent side="right" className="w-[85vw] max-w-[350px] overflow-y-auto">
                    <div className="flex flex-col gap-6 mt-6">
                      <nav className="flex flex-col gap-1.5">
                        {navItems.map((item) => (
                          <div key={item.href}>
                            <button
                              onClick={() => {
                                if (item.hasDropdown) {
                                  if (item.label === "Products") {
                                    setMobileProductDropdownOpen(true);
                                    setMobileMenuOpen(false);
                                  } else {
                                    setExpandedMobileItem(
                                      expandedMobileItem === item.label ? null : item.label
                                    );
                                  }
                                } else {
                                  setMobileMenuOpen(false);
                                  // Navigate to href
                                  window.location.href = item.href;
                                }
                              }}
                              className="w-full flex items-center justify-between text-base font-medium text-foreground/80 hover:text-foreground hover:bg-gray-100/50 active:bg-gray-100 transition-all py-3.5 px-4 rounded-xl touch-manipulation"
                            >
                              <span>{item.label}</span>
                              {item.hasDropdown && (
                                <ChevronDown className={`w-4 h-4 opacity-50 transition-transform duration-300 ${
                                  expandedMobileItem === item.label ? "rotate-180" : ""
                                }`} />
                              )}
                            </button>
                            {/* Mobile sub-items with smooth expand/collapse */}
                            {item.hasDropdown && item.subItems && item.label !== "Products" && expandedMobileItem === item.label && (
                              <div className="ml-4 mt-1 space-y-0.5 animate-fade-in">
                                {item.subItems.map((subItem, index) => (
                                  <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-sm font-medium text-foreground/60 hover:text-foreground hover:bg-gray-100/50 active:bg-gray-100 transition-all py-3 px-4 rounded-lg touch-manipulation"
                                    style={{ animationDelay: `${index * 30}ms` }}
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </nav>
                      <Button
                        asChild
                        size="lg"
                        className="w-full bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg hover:shadow-xl transition-all rounded-xl py-6 touch-manipulation"
                      >
                        <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                          Contact Us
                        </Link>
                      </Button>

                      {/* Mobile-only quick links */}
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-xs text-muted-foreground px-4 mb-3 uppercase tracking-wider">Quick Contact</p>
                        <div className="space-y-2 text-sm">
                          <a href="tel:+912212345678" className="flex items-center gap-2 px-4 py-2 text-foreground/70 hover:text-foreground transition-colors touch-manipulation">
                            <span>📞</span>
                            <span>+91 (22) 1234-5678</span>
                          </a>
                          <a href="mailto:info@paltech.in" className="flex items-center gap-2 px-4 py-2 text-foreground/70 hover:text-foreground transition-colors touch-manipulation">
                            <span>✉️</span>
                            <span>info@paltech.in</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
              </Sheet>
            )}
            {!mounted && (
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="text-white hover:bg-white/10"
              >
                <Menu className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Product Dropdown */}
      {navItems.find(item => item.label === "Products")?.productCategories && (
        <ProductDropdownMobile
          categories={navItems.find(item => item.label === "Products")!.productCategories!}
          isOpen={mobileProductDropdownOpen}
          onClose={() => setMobileProductDropdownOpen(false)}
        />
      )}
    </header>
  );
}
