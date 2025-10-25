"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProductCategory } from "@/lib/data/landing-data";

interface ProductDropdownProps {
  categories: ProductCategory[];
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDropdown({ categories, isOpen, onClose }: ProductDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, onClose]);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, onClose]);

  return (
    <div
      ref={dropdownRef}
      className={cn(
        "absolute top-full left-0 z-50 w-screen max-w-7xl bg-white border border-gray-200 shadow-2xl transition-all duration-300 ease-out",
        isOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible translate-y-2"
      )}
      style={{ left: "50%", transform: "translateX(-50%)" }}
    >
      {/* Mega Menu Content */}
      <div className="px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <div key={category.title} className="min-w-0">
              {/* Category Header */}
              <Link href={category.href} className="block mb-4" onClick={onClose}>
                <h3 className="text-lg font-bold text-gray-900 hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </Link>

              {/* Products List - All Visible */}
              <div className="space-y-2">
                {category.subItems?.map((item) => (
                  <div key={item.label} className="min-w-0">
                    {/* Parent Product */}
                    <Link
                      href={item.href}
                      className="block py-2 text-sm hover:text-primary transition-colors break-words leading-relaxed"
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>

                    {/* Nested Items - Always Visible */}
                    {item.nestedItems && (
                      <div className="ml-4 pl-3 border-l-2 border-gray-200 space-y-1 bg-gray-50/50 py-1 rounded-r-lg">
                        {item.nestedItems.map((nested) => (
                          <Link
                            key={nested.label}
                            href={nested.href}
                            className="block py-1.5 text-xs text-gray-600 hover:text-primary transition-colors break-words"
                            onClick={onClose}
                          >
                            • {nested.label}
                          </Link>
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
    </div>
  );
}

// Mobile version for smaller screens
export function ProductDropdownMobile({ categories, isOpen, onClose }: ProductDropdownProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-white transition-all duration-300",
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}
    >
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200">
        <div className="flex items-center gap-4 p-4">
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ChevronDown className="w-6 h-6 text-gray-600" />
          </button>
          <h2 className="text-xl font-bold text-gray-900">Products</h2>
        </div>

        {/* Search Bar */}
        <div className="px-4 pb-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* All Products - Single Scrollable List */}
      <div className="overflow-y-auto pb-20">
        {categories.map((category) => (
          <div key={category.title} className="px-4 py-4">
            {/* Category Header */}
            <Link href={category.href} onClick={onClose}>
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-3 hover:text-primary transition-colors">
                {category.title}
              </h3>
            </Link>

            {/* All Products Visible */}
            <div className="space-y-1">
              {category.subItems?.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block py-3 text-base text-gray-900 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>

                  {/* Nested - Always Visible */}
                  {item.nestedItems && (
                    <div className="ml-4 space-y-1 border-l-2 border-gray-200 pl-3 bg-gray-50/50">
                      {item.nestedItems.map((nested) => (
                        <Link
                          key={nested.label}
                          href={nested.href}
                          onClick={onClose}
                          className="block py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                        >
                          • {nested.label}
                        </Link>
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
  );
}
