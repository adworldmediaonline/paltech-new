"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Award, FileText, Star, Users } from "lucide-react";
import { useState } from "react";

export function TestimonialsContent() {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });
  const [pdfError, setPdfError] = useState(false);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >


      {/* PDF Viewer Section */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
        <div className="bg-linear-to-r from-primary to-primary/80 p-6 md:p-8">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-white" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Appreciation Certificates
            </h2>
          </div>
          <p className="text-white/90 mt-2 text-sm md:text-base">
            View testimonials and appreciation certificates from our esteemed clients
          </p>
        </div>

        <div className="p-4 md:p-6">
          {pdfError ? (
            <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
              <FileText className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-red-900 mb-2">
                Unable to load PDF
              </h3>
              <p className="text-red-700 mb-4">
                The PDF viewer encountered an error. Please try downloading the file instead.
              </p>
              <a
                href="/Appreciation%20Certificates.pdf"
                download="Appreciation Certificates.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <FileText className="w-5 h-5" />
                Download PDF
              </a>
            </div>
          ) : (
            <div className="relative w-full" style={{ minHeight: "800px" }}>
              <iframe
                src="/Appreciation%20Certificates.pdf#toolbar=1&navpanes=1&scrollbar=1"
                className="w-full border border-gray-300 rounded-lg"
                style={{ minHeight: "800px", height: "calc(100vh - 300px)" }}
                title="Appreciation Certificates PDF"
                onError={() => setPdfError(true)}
              />
              <div className="mt-4 flex items-center justify-between flex-wrap gap-4">
                <p className="text-sm text-gray-600">
                  If the PDF doesn't load,{" "}
                  <a
                    href="/Appreciation%20Certificates.pdf"
                    download="Appreciation Certificates.pdf"
                    className="text-primary hover:text-primary/80 font-medium underline"
                  >
                    download it here
                  </a>
                </p>
                <a
                  href="/Appreciation%20Certificates.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium"
                >
                  <FileText className="w-4 h-4" />
                  Open in New Tab
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="mt-12 md:mt-16 bg-linear-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h3>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Our commitment to excellence has earned us the trust of leading companies across various industries including power generation, petrochemicals, textiles, sugar, and more.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "39+ years of proven expertise",
              "ISO 9001:2015, ISO 14001:2015, OHSAS 45001:2018 certified",
              "CTI USA member",
              "46+ countries served globally",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

