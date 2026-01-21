"use client";

import { motion } from "framer-motion";
import {
  User,
  MapPin,
  Stethoscope,
  Heart,
  Building2,
  Clock,
} from "lucide-react";
import { brand } from "@/lib/brand";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  User,
  MapPin,
  Stethoscope,
  Heart,
  Building2,
  Clock,
};

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Patients Trust <span className="text-secondary">{brand.name}</span>
          </h2>
          <p className="text-white/80">
            We are committed to providing exceptional healthcare services with a
            personal touch. Here's what sets us apart.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brand.whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Heart;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors group"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all">
                  <IconComponent className="size-7" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
