"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookHeart,
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  ClipboardList,
  CalendarCheck,
  ChevronDown,
  Check,
  Quote,
  MessageCircle,
  HelpCircle,
  Activity,
  Baby,
  Scan,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand, getWhatsAppUrl } from "@/lib/brand";
import { cn } from "@/lib/utils";

const pillars = [
  {
    id: "buku-pink",
    icon: BookHeart,
    title: "Buka Buku Pink",
    summary:
      "We help open and fill in your Buku Rekod Kesihatan Ibu Mengandung (Buku Pink) — your official pregnancy record used by every clinic and hospital you'll visit.",
  },
  {
    id: "antenatal",
    icon: Stethoscope,
    title: "Antenatal Check-Ups",
    summary:
      "Routine pregnancy reviews — blood pressure, weight, urine, blood tests, and baby's heartbeat — recorded directly in your Buku Pink at every visit.",
  },
  {
    id: "scan",
    icon: Scan,
    title: "Pregnancy Ultrasound Scan",
    summary:
      "Doctor-performed ultrasound — available in 2D, 3D, 4D and 5D — to confirm pregnancy, estimate due date, check baby's growth, and give you keepsake images of your little one.",
  },
];

const bukuPinkIncludes = [
  "Confirmation of pregnancy and estimated due date (EDD)",
  "Full booking history: medical, obstetric, and family background",
  "Baseline blood pressure, weight, height, and BMI",
  "Blood tests — full blood count, blood group, Rhesus, HIV, Hepatitis B, VDRL",
  "Urine test for protein and sugar",
  "Risk assessment and colour-coded pregnancy classification",
  "Vaccination and supplement records (folic acid, iron, calcium)",
];

const scanTypes = [
  {
    title: "Dating Scan",
    weeks: "6 – 12 weeks",
    description:
      "Confirms the pregnancy is in the womb, checks for a heartbeat, and gives an accurate estimated due date based on baby's size.",
  },
  {
    title: "Growth & Wellbeing Scan",
    weeks: "From the second trimester",
    description:
      "Checks baby's growth, position, amniotic fluid, and placenta — useful for reassurance between routine antenatal visits.",
  },
  {
    title: "Presentation Scan",
    weeks: "Third trimester",
    description:
      "Confirms baby's position (head-down, breech, transverse) as you approach delivery, so you and your obstetrician can plan ahead.",
  },
];

const detailedServices = [
  {
    id: "buku-pink",
    title: "Buka Buku Pink — Your Pregnancy Record",
    image: "/images/kepakaran/pediatric.jpg",
    description:
      "The Buku Rekod Kesihatan Ibu Mengandung — better known as the Buku Pink — is the official pregnancy record book used across Malaysia. Every check-up, blood test, scan, and vaccination throughout your pregnancy is recorded inside it, so any clinic or hospital that sees you next can pick up exactly where the last visit left off. At Klinik Lunaria, we register and open your Buku Pink at your booking visit, then continue to update it at every antenatal review with us.",
    suitableFor: [
      "First-time mothers who want to open their Buku Pink in a private setting",
      "Mothers who prefer continuity with the same doctor throughout pregnancy",
      "Working mothers who need flexible appointment times outside klinik kesihatan hours",
      "Mothers planning to deliver at a private hospital but who still want a Buku Pink for continuity",
    ],
    safety:
      "Your Buku Pink stays with you throughout pregnancy and is recognised by every government and private healthcare provider in Malaysia — so you are never tied to one clinic for your care.",
  },
  {
    id: "antenatal",
    title: "Antenatal Check-Ups",
    image: "/images/kepakaran/preventive-health.jpg",
    description:
      "Once your Buku Pink is opened, we provide ongoing antenatal reviews at the recommended intervals — typically monthly in early pregnancy, fortnightly from around 28 weeks, and weekly in the final month. Each visit includes the standard checks (blood pressure, weight, urine, fetal heartbeat) and a chance to raise any concerns directly with the doctor.",
    suitableFor: [
      "Mothers wanting low-risk antenatal care close to home or work",
      "Patients who prefer doctor-led reviews rather than nurse-only visits",
      "Mothers needing supplements (folic acid, iron, calcium) reviewed and prescribed",
      "Anyone wanting a second opinion alongside their main obstetrician",
    ],
    safety:
      "If your pregnancy becomes higher-risk at any stage, we will refer you appropriately to an obstetrician or hospital — and your Buku Pink keeps your full history with you when you go.",
  },
  {
    id: "scan",
    title: "Pregnancy Ultrasound Scan (2D – 5D)",
    image: "/images/kepakaran/baby-ultrasound.jpeg",
    description:
      "A bedside ultrasound performed by our doctor during your consultation, available in 2D, 3D, 4D and 5D. Use 2D for standard clinical assessment — confirming pregnancy, estimating your due date, and checking baby's growth — and 3D / 4D / 5D for lifelike images and video of your baby's face and movements, perfect as a keepsake. We will explain what we see in real time and record key findings in your Buku Pink.",
    suitableFor: [
      "Confirming pregnancy after a positive home test (2D)",
      "Establishing an accurate due date in the first trimester (2D)",
      "Monitoring baby's growth and position in later pregnancy (2D)",
      "3D / 4D / 5D bonding scans for keepsake photos and videos",
      "Reassurance scans when you simply want to check baby is well",
    ],
    safety:
      "Ultrasound is non-invasive and considered safe in pregnancy when used appropriately. Our scans are diagnostic — for detailed anomaly scans (e.g. 20-week scan) we will refer you to a sonographer or obstetrician.",
  },
];

const whenToStart = [
  "As soon as you have a positive home pregnancy test",
  "Ideally before 12 weeks (first trimester) so screening tests can be done on time",
  "Earlier if you have existing conditions (diabetes, hypertension, thyroid) that need monitoring",
  "Earlier if you have had previous miscarriage, ectopic pregnancy, or pregnancy complications",
];

const steps = [
  {
    icon: CalendarCheck,
    title: "Book Your Booking Visit",
    description:
      "Message us on WhatsApp or walk in. Bring your IC and your husband's IC. The booking visit typically takes longer than a normal consultation, so let us know it's your first antenatal visit.",
  },
  {
    icon: Stethoscope,
    title: "History & Examination",
    description:
      "The doctor takes a full medical, obstetric, and family history, checks your blood pressure, weight, and height, and performs a physical examination — all entered into your new Buku Pink.",
  },
  {
    icon: ClipboardList,
    title: "Investigations & Scan",
    description:
      "Blood tests, urine test, and a dating ultrasound to confirm pregnancy and estimate your due date. Results are recorded in your Buku Pink before you leave.",
  },
  {
    icon: HeartPulse,
    title: "Ongoing Follow-Up",
    description:
      "We schedule your next antenatal visits and explain what to watch for between appointments. Your Buku Pink goes home with you — bring it to every future visit.",
  },
];

const faqs = [
  {
    q: "What is the Buku Pink, exactly?",
    a: "Buku Pink is the Buku Rekod Kesihatan Ibu Mengandung — the official pink-covered pregnancy record book used in Malaysia. It contains your full antenatal history, blood test results, scan findings, and vaccination records. Any clinic or hospital you visit during pregnancy will read from and write into the same book.",
  },
  {
    q: "Can a private clinic really open a Buku Pink?",
    a: "Yes. The Buku Pink belongs to you, not to a specific clinic. We register and open it for you at your booking visit, complete the baseline checks and investigations, and continue updating it at each follow-up. You can also continue to use it at any klinik kesihatan or hospital later.",
  },
  {
    q: "What should I bring to my first antenatal (booking) visit?",
    a: "Please bring your IC, your husband's IC (if available), the date of your last menstrual period (LMP), and any previous medical or pregnancy records. If you have done a home pregnancy test, you may bring the result, though it is not required.",
  },
  {
    q: "Do I still need to go to klinik kesihatan if I open my Buku Pink here?",
    a: "Not necessarily. You can have all your routine antenatal care with us if you prefer. Some mothers choose to alternate between us and klinik kesihatan, which is also fine — the Buku Pink keeps everything consistent. If your pregnancy becomes higher-risk, we will refer you to a hospital obstetrician.",
  },
  {
    q: "How often will I need check-ups during pregnancy?",
    a: "For a low-risk pregnancy: roughly monthly until 28 weeks, fortnightly from 28 to 36 weeks, then weekly until delivery. The doctor may recommend more frequent reviews depending on your situation.",
  },
  {
    q: "Do you do the 20-week detailed (anomaly) scan?",
    a: "Our in-clinic scans are for dating, growth, and wellbeing assessment. For detailed anomaly scans — usually done around 18 to 22 weeks — we will refer you to a sonographer or fetomaternal specialist who is set up for that level of detail.",
  },
  {
    q: "Will the scan tell me my baby's gender?",
    a: "Gender can often be seen from around 16 to 20 weeks, but accuracy depends on baby's position and the scan's purpose. Our priority during a scan is baby's wellbeing — gender is shared when it can be confidently seen.",
  },
  {
    q: "Is ultrasound safe in pregnancy?",
    a: "Diagnostic ultrasound used in routine antenatal care is considered safe and has been used in pregnancy for decades. We only scan when there is a clinical reason to do so.",
  },
  {
    q: "How much does a booking visit and Buku Pink registration cost?",
    a: "Cost depends on the investigations included (blood tests, urine test, scan). We will explain pricing clearly before anything is done. Follow-up antenatal visits are charged separately at each appointment.",
  },
];

export default function PregnancyContent() {
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
                <BookHeart className="size-4" />
                Antenatal care & Buku Pink registration
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Buka <span className="text-primary">Buku Pink</span> & Pregnancy
                Scan in Petaling Jaya
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl">
                At {brand.name}, we open and register your Buku Rekod Kesihatan
                Ibu Mengandung (Buku Pink), perform your booking blood tests
                and dating scan, and continue your antenatal check-ups — all
                under the care of our doctor.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button size="lg" variant="gradient" asChild>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Your Booking Visit
                    <ArrowRight className="size-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#program">What&rsquo;s Included</a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> Led by Dr Jihan Hanis
                </span>
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> Official Buku Pink registration
                </span>
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> In-clinic ultrasound
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] max-w-md mx-auto rounded-[2rem] overflow-hidden shadow-2xl bg-white">
                <Image
                  src="/images/kepakaran/scan-happy-hour.jpeg"
                  alt="Scan Happy Hour at Klinik Lunaria — Khamis & Jumaat 10am to 4pm"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-10 bg-white rounded-2xl shadow-xl p-4 hidden md:flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Baby className="size-6" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Mother & Baby Care</p>
                  <p className="text-xs text-muted-foreground">
                    From the very first visit
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
              What We Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Antenatal Care,{" "}
              <span className="text-primary">Centred on Your Buku Pink</span>
            </h2>
            <p className="text-muted-foreground">
              From opening your Buku Pink at the very first visit, to routine
              check-ups and ultrasound scans throughout your pregnancy.
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
                    <span className="font-medium text-foreground">Good to know:</span>{" "}
                    {service.safety}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================================
          WHAT'S IN YOUR BUKU PINK + SCAN TYPES
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
                <BookHeart className="size-4" />
                Inside Your Booking Visit
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Goes Into Your{" "}
                <span className="text-primary">Buku Pink</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Your booking visit is the most thorough of your antenatal
                check-ups. Here is what we record in your Buku Pink at that
                first appointment.
              </p>
              <ul className="space-y-3">
                {bukuPinkIncludes.map((item) => (
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
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-4">
                <Scan className="size-4" />
                Pregnancy Scans
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Types of Ultrasound We Perform
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Our scans are performed by the doctor during your consultation,
                available in 2D, 3D, 4D and 5D — for routine monitoring,
                reassurance, and keepsake images of your baby.
              </p>
              <div className="space-y-4">
                {scanTypes.map((s) => (
                  <div
                    key={s.title}
                    className="border border-border rounded-xl p-4 bg-white"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="font-semibold">{s.title}</h4>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary shrink-0">
                        {s.weeks}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Detailed anomaly scans (around 18 – 22 weeks) are referred to a
                sonographer or fetomaternal specialist.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          WHEN TO START
          ============================================ */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                When to Start
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                When Should You Open{" "}
                <span className="text-primary">Your Buku Pink?</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                The earlier the better — first-trimester screening, dating, and
                early supplementation all matter. As a general guide:
              </p>
              <ul className="space-y-3">
                {whenToStart.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 bg-white border border-border rounded-xl p-4"
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
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/images/kepakaran/pediatric.jpg"
                alt="Mother holding her Buku Pink at Klinik Lunaria"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          PROCESS
          ============================================ */}
      <section className="py-16 lg:py-24 bg-white">
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
              Your First Antenatal{" "}
              <span className="text-primary">Visit With Us</span>
            </h2>
            <p className="text-muted-foreground">
              A simple, four-step booking visit — your Buku Pink goes home with
              you the same day.
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
                  className="relative bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow"
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
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Quote className="size-12 text-primary/30 mx-auto mb-6" />
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
              &ldquo;I opened my Buku Pink here on a Saturday evening after work
              — somewhere I would never have managed during klinik kesihatan
              hours. The doctor took her time explaining everything, did the
              dating scan in the same visit, and I went home with my Buku Pink
              already filled in.&rdquo;
            </p>
            <div className="flex flex-col items-center gap-1">
              <p className="font-semibold">A Klinik Lunaria patient</p>
              <p className="text-sm text-muted-foreground">
                Antenatal Care
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          FAQ
          ============================================ */}
      <section className="py-16 lg:py-24 bg-white">
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
                A few things expectant mothers usually ask before their first
                visit. If your question isn&rsquo;t answered here, message us
                and the doctor will respond.
              </p>

              <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl p-6">
                <HelpCircle className="size-10 mb-4 opacity-80" />
                <h3 className="font-semibold text-lg mb-2">
                  Talk to the doctor
                </h3>
                <p className="text-sm text-white/80 mb-4">
                  Have a specific concern about your pregnancy or your Buku
                  Pink? Message us on WhatsApp and we&rsquo;ll get back to you.
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
                  className="bg-card rounded-xl overflow-hidden border border-border"
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
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent text-white p-8 md:p-12 lg:p-16 text-center"
          >
            <Activity className="size-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Open Your Buku Pink?
            </h2>
            <p className="text-white/85 max-w-2xl mx-auto mb-8">
              Visit us at {brand.name}, Menara PKNS, Petaling Jaya. Book your
              first antenatal visit and start your pregnancy journey with a
              doctor who has time to listen.
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
