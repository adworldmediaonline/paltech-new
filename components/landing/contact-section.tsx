"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { contactFormData, ctaSectionData } from "@/lib/data/landing-data";
import { CheckCircle2, Mail, MapPin, Phone, Send, Loader2, AlertCircle } from "lucide-react";
import { useState, useTransition } from "react";
import { sendContactEmail } from "@/app/actions/send-email";

export function ContactSection() {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isPending, startTransition] = useTransition();
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: "" });

    startTransition(async () => {
      const result = await sendContactEmail({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone || undefined,
        message: formData.message,
      });

      if (result.success) {
        setSubmitStatus({ type: "success", message: result.message });
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: "" });
        }, 5000);
      } else {
        setSubmitStatus({ type: "error", message: result.message });
      }
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - CTA Content */}
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            {/* Section badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Let's Connect
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {ctaSectionData.headline}
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              {contactFormData.description}
            </p>

            {/* Value props */}
            <div className="space-y-4 mb-10">
              {[
                "Expert consultation within 24 hours",
                "Tailored solutions for your needs",
                "39+ years of proven expertise",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-base text-white/90">{item}</span>
                </div>
              ))}
            </div>

            {/* Contact info cards - Full Details */}
            <div className="space-y-4">
              {/* Phone */}
              <a
                href="tel:+911244499700"
                className="group flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="shrink-0 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-white/60 uppercase tracking-wider font-medium block mb-1">Phone No (s)</span>
                  <span className="text-base font-semibold text-white group-hover:text-primary transition-colors">
                    +91.124.4499700
                  </span>
                </div>
              </a>

              {/* Emails */}
              <div className="group flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
                <div className="shrink-0 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-white/60 uppercase tracking-wider font-medium block mb-1">E-mail</span>
                  <a href="mailto:paltech@paltech.net.in" className="text-base font-semibold text-white hover:text-primary transition-colors block">
                    paltech@paltech.net.in
                  </a>
                  <a href="mailto:bd@paltech.net.in" className="text-base font-semibold text-white hover:text-primary transition-colors block mt-1">
                    bd@paltech.net.in
                  </a>
                </div>
              </div>

              {/* Location */}
              <a
                href="https://maps.app.goo.gl/Ss4PVVu3ScZ8MiCZ8"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="shrink-0 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-white/60 uppercase tracking-wider font-medium block mb-1">Location</span>
                  <p className="text-sm font-medium text-white leading-relaxed group-hover:text-primary transition-colors">
                    Plot No. 774, IInd Floor, Udyog Vihar,<br />
                    Phase - V, Gurugram, Haryana-122016
                  </p>
                  <span className="text-xs text-primary/80 mt-2 block">Click to view on Google Maps →</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side - Premium Form */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl">
              {/* Glass shine effect */}
              <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent rounded-3xl" />

              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Send us a message
                </h3>
                <p className="text-base text-white/70 mb-8">
                  Fill out the form and our team will get back to you within 24 hours
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white/90 text-sm font-medium">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary/20 rounded-xl h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white/90 text-sm font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@company.com"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary/20 rounded-xl h-12"
                      />
                    </div>
                  </div>

                  {/* Company & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white/90 text-sm font-medium">
                        Company *
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Company name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary/20 rounded-xl h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white/90 text-sm font-medium">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 1234567890"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary/20 rounded-xl h-12"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white/90 text-sm font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your cooling requirements..."
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary/20 rounded-xl resize-none"
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus.type && (
                    <div
                      className={`p-4 rounded-xl border ${submitStatus.type === "success"
                        ? "bg-green-500/10 border-green-500/30 text-green-400"
                        : "bg-red-500/10 border-red-500/30 text-red-400"
                        }`}
                    >
                      <div className="flex items-start gap-3">
                        {submitStatus.type === "success" ? (
                          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        )}
                        <p className="text-sm font-medium">{submitStatus.message}</p>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isPending}
                    className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed text-white rounded-xl py-6 h-auto text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all group"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>

                {/* Trust badge */}
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/60">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>We respect your privacy and never share your data</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

