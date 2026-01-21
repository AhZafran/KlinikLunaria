"use client";

import { motion } from "framer-motion";
import { FeatureSection } from "@/components/ui/feature-section";
import { brand } from "@/lib/brand";

export default function OurExpertise() {
  return (
    <section id="expertise" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Specialized Healthcare <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground">
            We offer specialized services backed by professional training and
            experience to ensure you receive the best possible care.
          </p>
        </motion.div>

        {/* Feature Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <FeatureSection
            features={brand.expertise}
          />
        </motion.div>
      </div>
    </section>
  );
}
