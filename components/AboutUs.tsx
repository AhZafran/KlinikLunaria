"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Award, Heart, Clock } from "lucide-react";
import { brand } from "@/lib/brand";
import { useDictionary } from "@/lib/i18n";

const highlightIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  Heart,
  Clock,
};

export default function AboutUs() {
  const dict = useDictionary();
  const highlights = dict.about.highlights;
  const features = dict.about.features;
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/clinic/clinic-about.jpg"
                alt="Klinik Lunaria - Modern healthcare facility"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/30 rounded-2xl -z-10" />
            </div>

            {/* Founded Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 left-6 bg-primary text-primary-foreground rounded-xl p-4 shadow-xl"
            >
              <p className="text-3xl font-bold">{brand.foundedYear}</p>
              <p className="text-sm opacity-90">{dict.about.foundedBadge}</p>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium">
              {dict.about.label}
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              {dict.about.heading.before}
              <span className="text-primary">{dict.about.heading.highlight}</span>
              {dict.about.heading.after}
            </h2>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {dict.about.para1.before}
              <strong>{dict.about.para1.name}</strong>
              {dict.about.para1.after}
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {dict.about.para2}
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="size-5 text-primary shrink-0" />
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              {highlights.map((item, index) => {
                const HighlightIcon = highlightIconMap[item.icon] || Award;
                return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-muted"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                    <HighlightIcon className="size-6" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
