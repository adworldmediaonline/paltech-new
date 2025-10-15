"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { navItems } from "@/lib/data/landing-data";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const scrolled = useScrollPosition(50);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 sm:pt-6 px-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-7xl transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 border border-gray-200/50"
            : "bg-white/10 backdrop-blur-md border border-white/10"
        } rounded-2xl`}
      >
        <div className="flex h-14 md:h-16 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-sm md:text-base">P</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-lg md:text-xl font-bold leading-none transition-colors ${
                scrolled ? "text-foreground" : "text-white"
              }`}>
                PALTECH
              </span>
              <span className={`text-[10px] leading-none hidden sm:block transition-colors ${
                scrolled ? "text-muted-foreground" : "text-gray-300"
              }`}>
                Industrial Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  scrolled
                    ? "text-foreground/70 hover:text-foreground hover:bg-gray-100/50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
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
              <Link href="#contact">Get Started</Link>
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
                <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                  <div className="flex flex-col gap-6 mt-8">
                    <nav className="flex flex-col gap-2">
                      {navItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-base font-medium text-foreground/80 hover:text-foreground hover:bg-gray-100/50 transition-all py-3 px-4 rounded-lg"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-primary to-primary/90 text-white"
                    >
                      <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                        Get Started
                      </Link>
                    </Button>
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
    </header>
  );
}


