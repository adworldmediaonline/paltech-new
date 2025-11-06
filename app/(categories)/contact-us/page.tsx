import { ContactSection } from "@/components/landing/contact-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Paltech™ Cooling Towers and Equipments Ltd.",
  description: "Get in touch with Paltech™ for cooling tower solutions. Located in Udyog Vihar, Gurugram. Call +91.124.4499700 or email paltech@paltech.net.in for expert consultation.",
  keywords: [
    "Contact Paltech",
    "Cooling Tower Inquiry",
    "Request Quote",
    "Paltech™ Address",
    "Paltech™ Phone",
    "Paltech™ Email",
    "Gurugram Cooling Towers",
    "Contact Form",
    "Get Quote",
    "Customer Support"
  ],
  openGraph: {
    title: "Contact Us | Paltech™ Cooling Towers and Equipments Ltd.",
    description: "Get in touch with Paltech™ for cooling tower solutions. Located in Udyog Vihar, Gurugram. Call +91.124.4499700 or email paltech@paltech.net.in for expert consultation.",
    type: "website",
  },
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen">
      <ContactSection />
    </div>
  );
}

