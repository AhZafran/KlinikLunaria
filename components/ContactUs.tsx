"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand, getWhatsAppUrl, getEmailUrl, getPhoneUrl } from "@/lib/brand";

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    href: getWhatsAppUrl(),
    color: "bg-[#25D366]",
    isExternal: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: brand.contact.phone[0],
    href: undefined,
    color: "bg-primary",
    isExternal: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: brand.contact.email,
    href: getEmailUrl(),
    color: "bg-secondary",
    isExternal: false,
  },
];

export default function ContactUs() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Contact Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visit Us at <span className="text-primary">Menara PKNS</span>
          </h2>
          <p className="text-muted-foreground">
            We're conveniently located at the heart of Petaling Jaya. Come visit
            us or get in touch through any of the channels below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-border"
          >
            <iframe
              src={brand.contact.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Klinik Lunaria Location"
              className="absolute inset-0"
            />
            {/* Get Directions Button */}
            <div className="absolute bottom-4 left-4 right-4">
              <Button className="w-full" asChild>
                <a
                  href={brand.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="size-4" />
                  Get Directions
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="bg-muted rounded-2xl p-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Our Location</h3>
                  <p className="text-muted-foreground text-sm">
                    {brand.contact.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-muted rounded-2xl p-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="size-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-3">Operating Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Saturday</span>
                      <span className="font-medium">{brand.hours.weekdays}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium">{brand.hours.sunday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Public Holidays</span>
                      <span className="font-medium text-destructive">
                        {brand.hours.holidays}
                      </span>
                    </div>
                  </div>
                  {brand.hours.note && (
                    <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border">
                      {brand.hours.note}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-3 gap-4">
              {contactMethods.map((method) => {
                const content = (
                  <>
                    <div
                      className={`w-10 h-10 rounded-full ${method.color} text-white flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}
                    >
                      <method.icon className="size-5" />
                    </div>
                    <p className="font-medium text-sm">{method.label}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {method.value}
                    </p>
                  </>
                );

                if (method.href) {
                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      target={method.isExternal ? "_blank" : undefined}
                      rel={method.isExternal ? "noopener noreferrer" : undefined}
                      className="bg-card border border-border rounded-xl p-4 text-center hover:shadow-md hover:border-primary/30 transition-all group"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div
                    key={method.label}
                    className="bg-card border border-border rounded-xl p-4 text-center group"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-2">
                Ready to Book an Appointment?
              </h3>
              <p className="text-sm text-white/80 mb-4">
                Contact us via WhatsApp for the fastest response. We're here to
                help you with your healthcare needs.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-5" />
                  Book via WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
