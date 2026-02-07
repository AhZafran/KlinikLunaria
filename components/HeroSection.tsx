"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Calendar, Users, Star, ArrowRight, ChevronLeft, ChevronRight, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand, getWhatsAppUrl } from "@/lib/brand";
import { cn } from "@/lib/utils";

const stats = [
  {
    icon: Calendar,
    value: `Since ${brand.foundedYear}`,
    label: "Serving the Community",
  },
  {
    icon: Users,
    value: "1000+",
    label: "Patients Served",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Google Rating",
  },
];

const quickServices = [
  { name: "General Consultation", icon: "🩺" },
  { name: "Circumcision", icon: "✂️" },
  { name: "House Calls", icon: "🏠" },
  { name: "Health Screening", icon: "📋" },
];

export default function HeroSection() {
  const [currentDoctor, setCurrentDoctor] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const doctors = brand.doctors;

  const nextDoctor = useCallback(() => {
    setCurrentDoctor((prev) => (prev + 1) % doctors.length);
  }, [doctors.length]);

  const prevDoctor = useCallback(() => {
    setCurrentDoctor((prev) => (prev - 1 + doctors.length) % doctors.length);
  }, [doctors.length]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || doctors.length <= 1) return;

    const interval = setInterval(() => {
      nextDoctor();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextDoctor, doctors.length]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-muted via-background to-muted">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23637e4b' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              <span className="size-2 bg-primary rounded-full animate-pulse" />
              {brand.tagline}
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Trusted{" "}
              <span className="text-primary">Healthcare Partner</span> in
              Petaling Jaya
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-xl">
              Founded by Dr Jihan Hanis, {brand.name} provides comprehensive
              healthcare services focused on preventive health, occupational
              health, and personalized patient care.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" variant="gradient" asChild>
                <a
                  href="https://wa.link/4l4b3o"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Appointment
                  <ArrowRight className="size-5" />
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <stat.icon className="size-5 text-primary" />
                    <span className="text-2xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Doctor Image / Visual - Transparent Border Style */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Main Image Container with Transparent Border */}
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Outer transparent border frame */}
              <div className="absolute inset-0 rounded-[2rem] border-[12px] border-white/40 backdrop-blur-sm shadow-2xl" />

              {/* Inner image container */}
              <div className="absolute inset-3 rounded-[1.5rem] overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
                {/* Image Carousel */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentDoctor}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={doctors[currentDoctor].image}
                      alt={`${doctors[currentDoctor].name} - ${doctors[currentDoctor].title}`}
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                {doctors.length > 1 && (
                  <>
                    <button
                      onClick={prevDoctor}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-10"
                      aria-label="Previous doctor"
                    >
                      <ChevronLeft className="size-5 text-primary" />
                    </button>
                    <button
                      onClick={nextDoctor}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-10"
                      aria-label="Next doctor"
                    >
                      <ChevronRight className="size-5 text-primary" />
                    </button>
                  </>
                )}

                {/* Dot Indicators */}
                {doctors.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {doctors.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentDoctor(index)}
                        className={cn(
                          "w-2 h-2 rounded-full transition-all duration-300",
                          currentDoctor === index
                            ? "w-6 bg-primary"
                            : "bg-primary/30 hover:bg-primary/50"
                        )}
                        aria-label={`Go to doctor ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Floating Badge - Doctor Name (Top Right) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`name-${currentDoctor}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -right-2 top-1/3 bg-white rounded-xl shadow-lg px-4 py-3 hidden md:flex items-center gap-3 z-20"
                >
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <User className="size-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground uppercase tracking-wide">
                      {doctors[currentDoctor].name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {brand.name}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Badge - Specialty (Bottom Left) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`specialty-${currentDoctor}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute -left-2 bottom-1/4 bg-white rounded-xl shadow-lg px-4 py-3 hidden md:flex items-center gap-3 z-20"
                >
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Heart className="size-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground uppercase tracking-wide">
                      {doctors[currentDoctor].specialty.split(" ")[0]}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {doctors[currentDoctor].title}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Quick Services Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -left-4 top-8 bg-white rounded-xl shadow-xl p-4 hidden lg:block"
            >
              <p className="text-sm font-medium mb-3">Quick Services</p>
              <div className="space-y-2">
                {quickServices.map((service) => (
                  <div
                    key={service.name}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span>{service.icon}</span>
                    <span>{service.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -right-4 bottom-8 bg-secondary text-secondary-foreground rounded-xl shadow-xl p-4 hidden lg:block"
            >
              <p className="text-sm font-medium">📍 Menara PKNS</p>
              <p className="text-xs opacity-80">Petaling Jaya, Selangor</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
