"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const panels = [
  { name: "Panel 1", logo: "/images/panels/panel-1.png" },
  { name: "Panel 2", logo: "/images/panels/panel-2.jpg" },
  { name: "Panel 3", logo: "/images/panels/panel-3.jpg" },
  { name: "Panel 4", logo: "/images/panels/panel-4.jpg" },
  { name: "Panel 5", logo: "/images/panels/panel-5.jpg" },
  { name: "Panel 6", logo: "/images/panels/panel-6.jpg" },
  { name: "Panel 7", logo: "/images/panels/panel-7.jpg" },
  { name: "Panel 8", logo: "/images/panels/panel-8.jpg" },
  { name: "Panel 9", logo: "/images/panels/panel-9.jpg" },
  { name: "Panel 10", logo: "/images/panels/panel-10.jpg" },
  { name: "Panel 11", logo: "/images/panels/panel-11.jpg" },
  { name: "Panel 12", logo: "/images/panels/panel-12.jpg" },
  { name: "Panel 13", logo: "/images/panels/panel-13.jpeg" },
];

export default function PanelKlinik() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-4">
            Insurance Panels
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Accepted <span className="text-primary">Insurance Panels</span>
          </h2>
          <p className="text-muted-foreground">
            We accept a wide range of corporate and insurance panels for your
            convenience. Contact us to verify your coverage.
          </p>
        </motion.div>

        {/* Panels Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {panels.map((panel, index) => (
            <motion.div
              key={panel.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-muted rounded-xl p-6 flex items-center justify-center hover:shadow-md hover:bg-white transition-all border border-transparent hover:border-border group"
            >
              <div className="relative h-20 w-full">
                <Image
                  src={panel.logo}
                  alt={panel.name}
                  fill
                  className="object-contain"
                  sizes="150px"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          Panel list may vary. Please contact us via WhatsApp to confirm your
          insurance coverage.
        </motion.p>
      </div>
    </section>
  );
}
