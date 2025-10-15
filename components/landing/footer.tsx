import { Separator } from "@/components/ui/separator";
import { footerData } from "@/lib/data/landing-data";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerData.columns.map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">{footerData.copyright}</p>
          <div className="flex items-center gap-6">
            {footerData.socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {social.platform}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

