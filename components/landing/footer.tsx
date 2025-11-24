import { Mail } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const uspItems = [
    "Quality Products & Most Reliable Services",
    "More than 37 years of mfg. Excellence",
    "More than 9000 clients",
    "Export to 46+ countries",
    "More than 11000 Installations Worldwide",
    "Associate Member of Cooling Technology Institute (CTI) USA, Since more than Last Two Decades",
    "ISO 9001: 2015 Quality Management System, ISO 14001:2015 Environmental Management System and OHSAS 45001:2018 Occupational Health and Safety Management Systems Certified Company"
  ];

  return (
    <footer className="bg-gray-50 border-t border-border">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section - Visit Us */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Visit Us</h3>

            {/* Location */}
            <div>
              <h4 className="text-foreground font-semibold mb-2">Location:</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Plot No. 774, IInd Floor, Udyog Vihar,<br />
                Phase - V, Gurugram, Haryana-122016
              </p>
            </div>

            {/* Phone */}
            <div>
              <h4 className="text-foreground font-semibold mb-2">Phone No (s):</h4>
              <a href="tel:+911244499700" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                +91.124.4499700
              </a>
            </div>

            {/* Email */}
            <div>
              <h4 className="text-foreground font-semibold mb-2">E-mail:</h4>
              <div className="space-y-1">
                <a href="mailto:paltech@paltech.net.in" className="block text-muted-foreground text-sm hover:text-foreground transition-colors underline">
                  paltech@paltech.net.in
                </a>
                <a href="mailto:bd@paltech.net.in" className="block text-muted-foreground text-sm hover:text-foreground transition-colors underline">
                  bd@paltech.net.in
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.facebook.com/Paltech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/paltech_real"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Twitter/X"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCXr-M7feSEfRgqATA-2x6yQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Section - Our USP */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Our USP</h3>
            <ul className="space-y-3">
              {uspItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                  <span className="text-foreground mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2024 Paltech™ Cooling Towers & Equipments Ltd. | Website Concept by: GetonTheWeb.In
          </p>

          {/* Footer Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="/about/awards-recognition" className="text-muted-foreground hover:text-foreground transition-colors">
              Awards & Recognition
            </Link>
            <Link href="/about/policies-certification" className="text-muted-foreground hover:text-foreground transition-colors">
              Policies & Certification
            </Link>
            <Link href="/contact-us" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              Request a Quote
              <Mail className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

