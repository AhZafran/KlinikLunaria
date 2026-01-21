"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Feature {
  name: string;
  description: string;
  image: string;
}

interface FeatureSectionProps {
  features: Feature[];
  className?: string;
}

export function FeatureSection({
  features,
  className,
}: FeatureSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={cn("grid lg:grid-cols-2 gap-8 lg:gap-12 items-center", className)}>
      {/* Feature Image - Show first on mobile */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted order-1 lg:order-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={features[activeIndex].image}
              alt={features[activeIndex].name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h4 className="text-white font-semibold text-xl">
                {features[activeIndex].name}
              </h4>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicators */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                activeIndex === index
                  ? "w-8 bg-white"
                  : "bg-white/50 hover:bg-white/75"
              )}
              aria-label={`Go to feature ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Feature List - Show second on mobile */}
      <div className="space-y-4 order-2 lg:order-1">
        {features.map((feature, index) => (
          <motion.div
            key={feature.name}
            className={cn(
              "p-4 rounded-xl cursor-pointer transition-all duration-300",
              activeIndex === index
                ? "bg-primary/10 border-l-4 border-primary"
                : "hover:bg-muted"
            )}
            onClick={() => setActiveIndex(index)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3
              className={cn(
                "font-semibold text-lg transition-colors",
                activeIndex === index ? "text-primary" : "text-foreground"
              )}
            >
              {feature.name}
            </h3>
            <AnimatePresence mode="wait">
              {activeIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-muted-foreground mt-2"
                >
                  {feature.description}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
