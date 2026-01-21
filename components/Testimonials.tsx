"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { brand } from "@/lib/brand";

const testimonials = [
  {
    name: "Ahmad R.",
    rating: 5,
    text: "Dr Jihan sangat professional dan caring. Klinik bersih dan selesa. Highly recommended!",
    service: "General Consultation",
  },
  {
    name: "Siti Aminah",
    rating: 5,
    text: "Membawa anak untuk sunat di sini. Proses sangat smooth dan Dr sangat patient dengan anak saya.",
    service: "Child Circumcision",
  },
  {
    name: "Encik Fazli",
    rating: 5,
    text: "Best clinic in PJ! Staff ramah, waktu tunggu tak lama. Service house call pun sangat convenient.",
    service: "House Call",
  },
  {
    name: "Puan Ramlah",
    rating: 5,
    text: "Buat medical check up untuk company di sini. Very efficient dan well organized.",
    service: "Health Screening",
  },
  {
    name: "Kamal M.",
    rating: 5,
    text: "Terima kasih Dr Jihan. Sangat helpful explain everything dalam detail. Rasa sangat comfortable.",
    service: "General Consultation",
  },
  {
    name: "Nurul H.",
    rating: 5,
    text: "Clinic sangat bersih dan modern. Location senang nak access. Staff pun sangat helpful.",
    service: "Pediatric Care",
  },
  {
    name: "Hafiz A.",
    rating: 5,
    text: "Circumcision procedure went smoothly. Recovery sangat cepat. Thank you Dr!",
    service: "Adult Circumcision",
  },
  {
    name: "Aishah Z.",
    rating: 5,
    text: "Bawa baby untuk check up. Dr sangat gentle dengan baby. Sangat puas hati dengan service.",
    service: "Pediatric Care",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
      {/* Quote Icon */}
      <Quote className="size-8 text-primary/20 mb-4" />

      {/* Rating */}
      <div className="flex gap-1 mb-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="size-4 fill-secondary text-secondary" />
        ))}
      </div>

      {/* Text */}
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-sm">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.service}</p>
        </div>
        <div className="text-xs text-primary font-medium px-2 py-1 bg-primary/10 rounded-full">
          Verified
        </div>
      </div>
    </div>
  );
}

function ScrollingColumn({
  items,
  direction,
  speed,
}: {
  items: typeof testimonials;
  direction: "up" | "down";
  speed: number;
}) {
  const columnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const column = columnRef.current;
    if (!column) return;

    let animationId: number;
    let scrollPosition = direction === "up" ? 0 : column.scrollHeight / 2;

    const animate = () => {
      if (direction === "up") {
        scrollPosition += speed;
        if (scrollPosition >= column.scrollHeight / 2) {
          scrollPosition = 0;
        }
      } else {
        scrollPosition -= speed;
        if (scrollPosition <= 0) {
          scrollPosition = column.scrollHeight / 2;
        }
      }
      column.scrollTop = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [direction, speed]);

  return (
    <div
      ref={columnRef}
      className="h-[600px] overflow-hidden space-y-4"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {/* Double the items for seamless loop */}
      {[...items, ...items].map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const column1 = testimonials.slice(0, 4);
  const column2 = testimonials.slice(4, 8);

  return (
    <section className="py-16 lg:py-24 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-primary">Patients Say</span>
          </h2>
          <p className="text-muted-foreground">
            Real feedback from real patients. We're proud to have served the
            Petaling Jaya community since {brand.foundedYear}.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Column 1 - Scrolling Up */}
          <div className="hidden lg:block">
            <ScrollingColumn items={column1} direction="up" speed={0.3} />
          </div>

          {/* Column 2 - Scrolling Down */}
          <div>
            <ScrollingColumn items={column2} direction="down" speed={0.25} />
          </div>

          {/* Column 3 - Scrolling Up (hidden on tablet) */}
          <div className="hidden lg:block">
            <ScrollingColumn items={[...column2, ...column1]} direction="up" speed={0.35} />
          </div>
        </div>

        {/* Google Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-border">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-secondary text-secondary" />
              ))}
            </div>
            <div className="h-6 w-px bg-border" />
            <div>
              <span className="font-bold">4.9</span>
              <span className="text-muted-foreground text-sm"> on Google</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
