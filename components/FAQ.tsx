"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/brand";
import { useDictionary } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const dict = useDictionary();

  return (
    <section id="faq" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Header & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {dict.faq.label}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {dict.faq.heading.before}
              <span className="text-primary">{dict.faq.heading.highlight}</span>
              {dict.faq.heading.after}
            </h2>
            <p className="text-muted-foreground mb-8">
              {dict.faq.subtitle}
            </p>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl p-6">
              <HelpCircle className="size-10 mb-4 opacity-80" />
              <h3 className="font-semibold text-lg mb-2">{dict.faq.ctaTitle}</h3>
              <p className="text-sm text-white/80 mb-4">
                {dict.faq.ctaText}
              </p>
              <Button variant="secondary" asChild>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dict.faq.ctaButton}
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - FAQ Items */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {dict.faq.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border border-border"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium pr-4">{item.question}</span>
                  <ChevronDown
                    className={cn(
                      "size-5 text-primary shrink-0 transition-transform duration-200",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
