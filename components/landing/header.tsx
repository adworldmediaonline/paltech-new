"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ProductDropdownMobile } from "@/components/landing/product-dropdown";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { navItems } from "@/lib/data/landing-data";
import { ChevronDown, Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const [mobileProductDropdownOpen, setMobileProductDropdownOpen] = useState(false);
  const scrolled = useScrollPosition(50);
  const pathname = usePathname();

  // Check if we're on a category page (not home page)
  const isCategoryPage = pathname !== "/";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 md:pt-6 px-3 sm:px-4 md:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-7xl transition-all duration-500 ${scrolled || isCategoryPage
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 border border-gray-200/50"
          : "bg-white/10 backdrop-blur-md border border-white/10"
          } rounded-xl md:rounded-2xl`}
      >
        <div className="flex h-16 sm:h-18 md:h-20 items-center justify-between px-4 sm:px-6 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 group-hover:scale-105 transition-transform">
              <Image
                src="/logo/logo.png"
                alt="PALTECH Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex items-center gap-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  {item.hasDropdown && item.label === "Products" && item.productCategories ? (
                    <>
                      <NavigationMenuTrigger className={`flex bg-transparent items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all ${scrolled || isCategoryPage
                        ? "text-foreground/70 hover:text-foreground hover:bg-gray-100/50"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                        }`}>
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="navigation-menu-content">
                        <div className="px-4 sm:px-6 py-6 sm:py-8 max-h-[70vh] overflow-y-auto w-[90vw] sm:w-[800px] max-w-6xl">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                            {item.productCategories.map((category) => (
                              <div key={category.title} className="min-w-0">
                                {/* Category Header */}
                                <NavigationMenuLink asChild>
                                  <Link href={category.href} className="block mb-3 sm:mb-4">
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900 hover:text-primary transition-colors">
                                      {category.title}
                                    </h3>
                                  </Link>
                                </NavigationMenuLink>

                                {/* Products List - All Visible */}
                                <div className="space-y-1 sm:space-y-2">
                                  {category.subItems?.map((subItem) => (
                                    <div key={subItem.label} className="min-w-0">
                                      {/* Parent Product */}
                                      <NavigationMenuLink asChild>
                                        <Link
                                          href={subItem.href}
                                          className="block py-1.5 sm:py-2 text-xs sm:text-sm hover:text-primary transition-colors break-words leading-relaxed"
                                        >
                                          {subItem.label}
                                        </Link>
                                      </NavigationMenuLink>

                                      {/* Nested Items - Always Visible */}
                                      {subItem.nestedItems && (
                                        <div className="ml-3 sm:ml-4 pl-2 sm:pl-3 border-l-2 border-gray-200 space-y-0.5 sm:space-y-1 bg-gray-50/50 py-0.5 sm:py-1 rounded-r-lg">
                                          {subItem.nestedItems.map((nested) => (
                                            <NavigationMenuLink asChild key={nested.label}>
                                              <Link
                                                href={nested.href}
                                                className="block py-1 sm:py-1.5 text-xs text-gray-600 hover:text-primary transition-colors break-words leading-relaxed"
                                              >
                                                • {nested.label}
                                              </Link>
                                            </NavigationMenuLink>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : item.hasDropdown && item.subItems ? (
                    <>
                      <NavigationMenuTrigger className={`flex bg-transparent items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all ${scrolled || isCategoryPage
                        ? "text-foreground/70 hover:text-foreground hover:bg-gray-100/50"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                        }`}>
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[180px] sm:w-[200px] gap-1 sm:gap-2 p-3 sm:p-4">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.href}
                                  className="block px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-gray-50 transition-colors rounded-md"
                                >
                                  {subItem.label}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link
                        href={item.href}
                        className={`bg-transparent px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${scrolled || isCategoryPage
                          ? "text-foreground/70 hover:text-foreground hover:bg-gray-100/50"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                          }`}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              className={`p-2 rounded-lg transition-all ${scrolled || isCategoryPage
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

          {/* Mobile Navigation - Collapsible */}
          <div className="flex md:hidden items-center gap-2">
            <button
              className={`p-2 transition-colors ${scrolled || isCategoryPage ? "text-foreground/60 hover:text-foreground" : "text-white/70 hover:text-white"
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
                    className={`transition-colors ${scrolled || isCategoryPage
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
                              <ChevronDown className={`w-4 h-4 opacity-50 transition-transform duration-300 ${expandedMobileItem === item.label ? "rotate-180" : ""
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
