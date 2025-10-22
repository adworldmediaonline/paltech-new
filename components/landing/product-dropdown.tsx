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
  const [activeCategory, setActiveCategory] = useState<string | null>(categories[0]?.title || null);
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
        "absolute top-full left-0 z-50 w-screen max-w-6xl bg-white border border-gray-200 shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 ease-out",
        isOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible translate-y-2"
      )}
      style={{ left: "50%", transform: "translateX(-50%)" }}
    >
      {/* Header */}
      <div className="px-8 py-6 border-b border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900">Our Products</h3>
        <p className="text-sm text-gray-600 mt-1">
          Comprehensive cooling solutions for industrial applications
        </p>
      </div>

      {/* Content */}
      <div className="flex">
        {/* Categories Sidebar */}
        <div className="w-80 bg-gray-50 border-r border-gray-100">
          <div className="p-4">
            {categories.map((category, index) => (
              <button
                key={category.title}
                onClick={() => setActiveCategory(activeCategory === category.title ? null : category.title)}
                className={cn(
                  "w-full flex items-center justify-between p-4 rounded-xl text-left transition-all duration-200 group",
                  activeCategory === category.title
                    ? "bg-primary text-white shadow-lg"
                    : "hover:bg-white hover:shadow-sm text-gray-700"
                )}
              >
                <div>
                  <div className="font-medium text-sm">{category.title}</div>
                  <div className={cn(
                    "text-xs mt-1",
                    activeCategory === category.title ? "text-white/80" : "text-gray-500"
                  )}>
                    {category.subItems?.length} products
                  </div>
                </div>
                <ChevronRight
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    activeCategory === category.title ? "rotate-90 text-white" : "text-gray-400 group-hover:text-gray-600"
                  )}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Products Panel */}
        <div className="flex-1 p-6 max-h-[500px] overflow-y-auto">
          {activeCategory ? (
            <div className="space-y-4">
              {categories
                .find(cat => cat.title === activeCategory)
                ?.subItems?.map((item, index) => (
                  <div
                    key={index}
                    className="group p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-sm border border-transparent hover:border-gray-200"
                  >
                    <Link
                      href={item.href}
                      className="block"
                      onClick={onClose}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors text-sm leading-tight">
                            {item.label}
                          </h4>
                          {item.description && (
                            <p className="text-xs text-gray-600 mt-2 leading-relaxed break-words">
                              {item.description}
                            </p>
                          )}
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 text-center">
              <div>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChevronDown className="w-8 h-8 text-gray-400" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Select a Product Category
                </h4>
                <p className="text-gray-600">
                  Choose from the categories on the left to explore our products
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

// Mobile version for smaller screens
export function ProductDropdownMobile({ categories, isOpen, onClose }: ProductDropdownProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [view, setView] = useState<"categories" | "products">("categories");

  const handleCategorySelect = (categoryTitle: string) => {
    setActiveCategory(categoryTitle);
    setView("products");
  };

  const handleBack = () => {
    setView("categories");
    setActiveCategory(null);
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-300",
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}
      onClick={onClose}
    >
      <div
        className={cn(
          "absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {view === "categories" ? "Our Products" : activeCategory}
            </h3>
            <p className="text-sm text-gray-600">
              {view === "categories" ? "Select a category" : "Choose a product"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronDown className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {view === "categories" ? (
            <div className="p-4 space-y-2">
              {categories.map((category, index) => (
                <button
                  key={category.title}
                  onClick={() => handleCategorySelect(category.title)}
                  className="w-full flex items-center justify-between p-4 rounded-xl text-left hover:bg-gray-50 transition-colors group"
                >
                  <div>
                    <div className="font-medium text-gray-900">{category.title}</div>
                    <div className="text-sm text-gray-500 mt-1">
                      {category.subItems?.length} products
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                </button>
              ))}
            </div>
          ) : (
            <div className="p-4">
              <button
                onClick={handleBack}
                className="flex items-center text-sm text-gray-600 hover:text-gray-900 mb-4 transition-colors"
              >
                <ChevronRight className="w-4 h-4 mr-1 rotate-180" />
                Back to Categories
              </button>

              <div className="space-y-3 max-h-[400px] overflow-y-auto">
                {categories
                  .find(cat => cat.title === activeCategory)
                  ?.subItems?.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={onClose}
                      className="block p-4 rounded-xl hover:bg-gray-50 transition-colors group border border-transparent hover:border-gray-200"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors text-sm leading-tight">
                            {item.label}
                          </h4>
                          {item.description && (
                            <p className="text-xs text-gray-600 mt-2 leading-relaxed break-words">
                              {item.description}
                            </p>
                          )}
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
