"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Syringe,
  Pill,
  Salad,
  ShieldCheck,
  Stethoscope,
  ClipboardList,
  LineChart,
  CalendarCheck,
  ChevronDown,
  Check,
  Quote,
  MessageCircle,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand, getWhatsAppUrl } from "@/lib/brand";
import { cn } from "@/lib/utils";

const pillars = [
  {
    id: "injection",
    icon: Syringe,
    title: "Weight Loss Injection",
    summary:
      "GLP-1 based injectable therapy that helps reduce appetite and improve blood sugar control, prescribed and supervised by our doctor.",
  },
  {
    id: "medicine",
    icon: Pill,
    title: "Weight Loss Medicine",
    summary:
      "Oral prescription medication tailored to your medical profile, with regular reviews to ensure both safety and progress.",
  },
  {
    id: "diet",
    icon: Salad,
    title: "Personalised Dietary Plan",
    summary:
      "Practical, halal-friendly nutrition guidance designed around your lifestyle so changes are sustainable, not extreme.",
  },
];

const detailedServices = [
  {
    id: "injection",
    title: "Weight Loss Injection",
    image: "/images/kepakaran/weight-loss-injection.avif",
    description:
      "Our injectable weight loss therapy uses GLP-1 receptor agonists, the same class of medication widely studied for managing type 2 diabetes and obesity. It works by reducing appetite, slowing gastric emptying, and helping you feel fuller for longer.",
    suitableFor: [
      "Adults with BMI ≥ 30",
      "Adults with BMI ≥ 27 plus a weight-related condition (e.g., hypertension, type 2 diabetes, high cholesterol)",
      "Patients who have struggled to achieve results through diet and exercise alone",
    ],
    safety:
      "Every injection plan is prescribed after a medical assessment. We review your history, medications, and goals before starting, and follow up regularly to monitor side effects and progress.",
  },
  {
    id: "medicine",
    title: "Weight Loss Medicine",
    image: "/images/kepakaran/weight-loss-medicine.avif",
    description:
      "For patients who prefer oral treatment or have specific medical considerations, we offer prescription weight loss medication. Each prescription is matched to your health profile, with the dose adjusted over time based on your response.",
    suitableFor: [
      "Patients seeking an alternative to injection therapy",
      "Adults with weight-related health risks who would benefit from pharmacological support",
      "Patients with previous unsuccessful weight loss attempts",
    ],
    safety:
      "We only dispense medication that is approved and registered for weight management. Our doctor will explain how it works, what to expect, and what to watch for before you start.",
  },
  {
    id: "diet",
    title: "Personalised Dietary Plan",
    image: "/images/kepakaran/weight-management.jpg",
    description:
      "Lasting weight loss requires more than medication — it requires a way of eating you can keep up with. We build a flexible meal framework around your daily routine, food preferences, and cultural needs, so it fits your life in Malaysia.",
    suitableFor: [
      "Patients on injection or medicine therapy who want to maximise results",
      "Patients with mild-to-moderate weight concerns not yet requiring medication",
      "Anyone seeking a clear, doctor-guided plan instead of trend diets",
    ],
    safety:
      "Plans are designed to be nutritionally balanced and halal-friendly. We adjust them at each follow-up based on your progress and feedback.",
  },
];

const eligibility = [
  "BMI of 30 or above (obesity)",
  "BMI of 27 or above with weight-related conditions such as hypertension, type 2 diabetes, or high cholesterol",
  "Difficulty achieving results despite consistent diet and exercise",
  "Weight that is affecting daily activities, joint health, or quality of life",
];

const bmiCategories = [
  { range: "Below 18.5", label: "Underweight", color: "bg-blue-100 text-blue-700" },
  { range: "18.5 – 22.9", label: "Healthy weight", color: "bg-green-100 text-green-700" },
  { range: "23.0 – 27.4", label: "Overweight", color: "bg-yellow-100 text-yellow-700" },
  { range: "27.5 – 34.9", label: "Obese I", color: "bg-orange-100 text-orange-700" },
  { range: "35.0 and above", label: "Obese II", color: "bg-red-100 text-red-700" },
];

const steps = [
  {
    icon: CalendarCheck,
    title: "Book a Consultation",
    description:
      "Reach out via WhatsApp or visit us at Menara PKNS. We will schedule a private consultation with the doctor at a time that suits you.",
  },
  {
    icon: Stethoscope,
    title: "Medical Assessment",
    description:
      "Our doctor reviews your medical history, current medications, lifestyle, and weight goals — and measures the indicators that matter (BMI, blood pressure and more).",
  },
  {
    icon: ClipboardList,
    title: "Personalised Plan",
    description:
      "Based on the assessment, we recommend the right combination of injection, medicine, and dietary changes — explaining options clearly so you can decide together with us.",
  },
  {
    icon: LineChart,
    title: "Ongoing Monitoring",
    description:
      "Regular follow-ups let us track progress, manage any side effects, and adjust your plan so results are steady and safe over the long term.",
  },
];

const faqs = [
  {
    q: "Is the weight loss treatment at Klinik Lunaria halal?",
    a: "Yes. The medications we prescribe are approved for use in Malaysia, and we are mindful of halal considerations when recommending injections, medicine, and dietary plans. If you have specific concerns, please raise them during your consultation.",
  },
  {
    q: "Will I experience side effects from the injection or medicine?",
    a: "Some patients experience mild side effects such as nausea, reduced appetite, or temporary digestive changes — especially during the first few weeks. Our doctor will explain what to expect, how to manage them, and when to come back for review.",
  },
  {
    q: "How much weight will I lose, and how quickly?",
    a: "Results vary depending on your starting point, treatment plan, and how closely the lifestyle changes are followed. Sustainable weight loss is typically gradual rather than rapid, and we focus on results you can keep long-term.",
  },
  {
    q: "How long does the program last?",
    a: "Most patients are reviewed monthly during the active phase of treatment, with follow-up appointments tapering as your weight stabilises. The doctor will discuss a realistic timeline with you at your first visit.",
  },
  {
    q: "Do I have to follow a strict diet?",
    a: "No. We do not believe in extreme restriction. Your dietary plan is built around foods you actually eat, with practical adjustments so the change is sustainable.",
  },
  {
    q: "How much does the program cost?",
    a: "Cost depends on the treatment recommended after your assessment. We will explain pricing transparently before you commit, so there are no surprises.",
  },
  {
    q: "Can I start the program if I am pregnant or breastfeeding?",
    a: "No. Weight loss injections and medications are not suitable during pregnancy or breastfeeding. If you are planning a pregnancy, please discuss this with our doctor so we can advise accordingly.",
  },
];

export default function WeightLossContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* ============================================
          HERO
          ============================================ */}
      <section className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-muted via-background to-muted overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23637e4b' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <ShieldCheck className="size-4" />
                Doctor-supervised weight loss program
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Safe, Effective{" "}
                <span className="text-primary">Weight Loss</span> in Petaling
                Jaya
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl">
                At {brand.name}, we help you reach a healthier weight through a
                medical program built around your body, your lifestyle, and
                your goals — combining weight loss injections, prescription
                medicine, and a practical dietary plan, all under the care of
                our doctor.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button size="lg" variant="gradient" asChild>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Consultation
                    <ArrowRight className="size-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#program">Explore the Program</a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> Led by Dr Jihan Hanis
                </span>
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> Evidence-based treatment
                </span>
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> Halal-friendly approach
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] max-w-md mx-auto rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/HeroSecLunaria.png"
                  alt="Weight management consultation at Klinik Lunaria"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-10 bg-white rounded-2xl shadow-xl p-4 hidden md:flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <ShieldCheck className="size-6" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Medically Supervised</p>
                  <p className="text-xs text-muted-foreground">
                    Every plan is doctor-reviewed
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          THREE PILLARS
          ============================================ */}
      <section id="program" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-4">
              Our Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Three Pillars of a{" "}
              <span className="text-primary">Healthier You</span>
            </h2>
            <p className="text-muted-foreground">
              We combine three complementary tools — used together or
              individually based on what your body actually needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.a
                  key={p.id}
                  href={`#${p.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group h-full bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="size-7" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {p.summary}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          DETAILED SERVICES
          ============================================ */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 space-y-16">
          {detailedServices.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "grid lg:grid-cols-2 gap-10 items-center scroll-mt-24",
                index % 2 === 1 && "lg:[&>div:first-child]:order-2"
              )}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-5">
                <h3 className="text-2xl md:text-3xl font-bold">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <div>
                  <p className="font-medium mb-3">Suitable for:</p>
                  <ul className="space-y-2">
                    {service.suitableFor.map((s) => (
                      <li key={s} className="flex gap-3 text-sm text-muted-foreground">
                        <Check className="size-5 text-primary shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border border-border rounded-xl p-4 flex gap-3">
                  <ShieldCheck className="size-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Safety first:</span>{" "}
                    {service.safety}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================================
          ELIGIBILITY & BMI
          ============================================ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Eligibility
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Is This Program{" "}
                <span className="text-primary">Right For You?</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Our weight loss program is generally suitable for adults who
                meet one or more of the following criteria. The doctor will
                confirm eligibility during your consultation.
              </p>
              <ul className="space-y-3">
                {eligibility.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 bg-muted/50 border border-border rounded-xl p-4"
                  >
                    <Check className="size-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-sm"
            >
              <h3 className="font-semibold text-lg mb-2">
                BMI Reference (Asian Adults)
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Body Mass Index is one of several indicators we look at. It is
                not the only factor, but it is a useful starting point.
              </p>
              <div className="space-y-3">
                {bmiCategories.map((c) => (
                  <div
                    key={c.range}
                    className="flex items-center justify-between border border-border rounded-xl p-4 bg-white"
                  >
                    <span className="font-medium">{c.range}</span>
                    <span
                      className={cn(
                        "px-3 py-1 rounded-full text-xs font-medium",
                        c.color
                      )}
                    >
                      {c.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                BMI = weight (kg) ÷ height (m)². WHO Asian-Pacific cutoffs
                shown.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          PROCESS
          ============================================ */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-4">
              How It Works
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Weight Loss{" "}
              <span className="text-primary">Journey</span>
            </h2>
            <p className="text-muted-foreground">
              A simple, four-step process — with the doctor guiding you at
              every stage.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative bg-white border border-border rounded-2xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center shadow-md">
                    {i + 1}
                  </div>
                  <Icon className="size-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          TESTIMONIAL
          ============================================ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Quote className="size-12 text-primary/30 mx-auto mb-6" />
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
              &ldquo;The team explained every step clearly and never pushed
              treatment I didn&rsquo;t need. The plan fit my work schedule, and
              the follow-ups kept me on track. The clinic itself is clean and
              calm — a comfortable place to come back to.&rdquo;
            </p>
            <div className="flex flex-col items-center gap-1">
              <p className="font-semibold">A Klinik Lunaria patient</p>
              <p className="text-sm text-muted-foreground">
                Weight Loss Program
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          FAQ
          ============================================ */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-24"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                FAQ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Common <span className="text-primary">Questions</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                A few things patients usually ask before starting the program.
                If your question isn&rsquo;t answered here, message us and the
                doctor will respond.
              </p>

              <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl p-6">
                <HelpCircle className="size-10 mb-4 opacity-80" />
                <h3 className="font-semibold text-lg mb-2">
                  Talk to the doctor
                </h3>
                <p className="text-sm text-white/80 mb-4">
                  We&rsquo;re happy to answer your specific concerns over
                  WhatsApp before you decide.
                </p>
                <Button variant="secondary" asChild>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-4" />
                    Chat with Us
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {faqs.map((item, index) => (
                <div
                  key={item.q}
                  className="bg-white rounded-xl overflow-hidden border border-border"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-medium pr-4">{item.q}</span>
                    <ChevronDown
                      className={cn(
                        "size-5 text-primary shrink-0 transition-transform duration-200",
                        openFaq === index && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          FINAL CTA
          ============================================ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent text-white p-8 md:p-12 lg:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Weight Loss Journey?
            </h2>
            <p className="text-white/85 max-w-2xl mx-auto mb-8">
              Speak directly to our doctor at {brand.name}, Menara PKNS,
              Petaling Jaya. Book a private consultation to find out which
              treatment is right for you.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="lg" variant="whatsapp" asChild>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-5" />
                  WhatsApp Us Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link href="/#contact">View Clinic Details</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
