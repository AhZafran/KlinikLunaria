"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Scan,
  Heart,
  Sparkles,
  ShieldCheck,
  CalendarCheck,
  Stethoscope,
  Camera,
  ChevronDown,
  Check,
  Quote,
  MessageCircle,
  HelpCircle,
  Activity,
  Baby,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/brand";
import { cn } from "@/lib/utils";
import { faqs } from "./faqs";

// Page-specific WhatsApp link for the Scan Kehamilan landing page.
const whatsAppLink = "https://wa.link/59re29";

const pillars = [
  {
    id: "2d",
    icon: Scan,
    title: "Imbasan Klinikal 2D",
    summary:
      "Imbasan 2D standard untuk mengesahkan kehamilan, menganggar tarikh bersalin, dan memantau pertumbuhan serta kedudukan bayi anda.",
  },
  {
    id: "bonding",
    icon: Heart,
    title: "Imbasan Bonding 3D / 4D / 5D",
    summary:
      "Imej dan video hidup wajah serta pergerakan bayi anda — kenangan indah sebelum si manja tiba.",
  },
  {
    id: "kepastian",
    icon: Sparkles,
    title: "Imbasan Kepastian",
    summary:
      "Imbasan ringkas untuk ketenangan minda — sekadar mengesahkan bayi anda sihat antara lawatan antenatal berkala.",
  },
];

const scanTypes = [
  {
    title: "Imbasan Dating",
    weeks: "6 – 12 minggu",
    description:
      "Mengesahkan kehamilan berada dalam rahim, memeriksa degupan jantung, dan memberikan jangkaan tarikh bersalin yang tepat berdasarkan saiz bayi.",
  },
  {
    title: "Imbasan Pertumbuhan & Kesejahteraan",
    weeks: "Dari trimester kedua",
    description:
      "Memeriksa pertumbuhan bayi, kedudukan, cecair amnion, dan plasenta — berguna sebagai kepastian antara lawatan antenatal berkala.",
  },
  {
    title: "Imbasan Persembahan (Presentation)",
    weeks: "Trimester ketiga",
    description:
      "Mengesahkan kedudukan bayi (kepala ke bawah, songsang, melintang) menjelang kelahiran, supaya anda dan pakar O&G boleh merancang lebih awal.",
  },
];

const detailedServices = [
  {
    id: "2d",
    title: "Imbasan Ultrasound 2D — Penilaian Klinikal",
    image: "/images/kepakaran/baby-ultrasound.jpeg",
    description:
      "Imbasan ultrasound di sisi katil yang dilakukan oleh doktor kami semasa konsultasi anda. Imbasan 2D ialah imbasan klinikal asas — kami gunakannya untuk mengesahkan kehamilan, menganggar tarikh bersalin, memeriksa pertumbuhan dan kedudukan bayi, serta merekod penemuan penting. Kami menerangkan apa yang kami lihat secara langsung.",
    suitableFor: [
      "Mengesahkan kehamilan selepas ujian rumah positif",
      "Menetapkan tarikh bersalin yang tepat pada trimester pertama",
      "Memantau pertumbuhan dan kedudukan bayi pada kehamilan lewat",
      "Memeriksa degupan jantung dan kesejahteraan bayi",
    ],
    safety:
      "Ultrasound adalah tidak invasif dan dianggap selamat dalam kehamilan apabila digunakan dengan sewajarnya. Imbasan kami bersifat diagnostik — untuk imbasan anomali terperinci (cth. imbasan 20 minggu) kami akan merujuk anda kepada sonografer atau pakar O&G.",
  },
  {
    id: "bonding",
    title: "Imbasan Bonding 3D / 4D / 5D",
    image: "/images/kepakaran/imbasan-bonding.webp",
    description:
      "Untuk detik istimewa, imbasan 3D, 4D dan 5D kami menghasilkan imej dan video hidup wajah serta pergerakan bayi anda. Ia sempurna sebagai kenangan dan untuk dikongsi bersama keluarga. Imbasan bonding ini dilakukan oleh doktor yang sama dalam suasana yang tenang dan peribadi.",
    suitableFor: [
      "Ibu bapa yang inginkan gambar dan video kenangan bayi",
      "Keluarga yang ingin berkongsi detik melihat wajah bayi",
      "Kehamilan trimester kedua dan ketiga untuk imej wajah yang lebih jelas",
      "Hadiah istimewa untuk diri sendiri sepanjang perjalanan kehamilan",
    ],
    safety:
      "Imbasan bonding menggunakan teknologi ultrasound yang sama selamatnya seperti imbasan klinikal. Kualiti imej bergantung pada kedudukan bayi, usia kehamilan, dan jumlah cecair amnion pada hari imbasan.",
  },
  {
    id: "kepastian",
    title: "Imbasan Kepastian & Pemantauan",
    image: "/images/kepakaran/preventive-health.jpg",
    description:
      "Kadangkala anda hanya mahu pasti bayi anda sihat. Imbasan kepastian ialah pemeriksaan ringkas untuk ketenangan minda — berguna antara lawatan antenatal berkala atau jika anda mempunyai kebimbangan tertentu. Doktor akan menyemak degupan jantung, pergerakan, dan tanda-tanda kesejahteraan bayi.",
    suitableFor: [
      "Ibu yang inginkan kepastian antara lawatan berkala",
      "Selepas tempoh tanpa merasai pergerakan bayi seperti biasa",
      "Kehamilan dengan kebimbangan ringan yang ingin disemak",
      "Ibu yang lebih tenang dengan pemantauan tambahan",
    ],
    safety:
      "Kami hanya mengimbas apabila terdapat sebab klinikal yang munasabah. Jika sesuatu memerlukan penilaian lanjut, kami akan merujuk anda kepada pakar yang sesuai dengan segera.",
  },
];

const goodToKnow = [
  "Imbasan dilakukan oleh doktor semasa konsultasi anda, bukan sesi berasingan",
  "Tersedia dalam 2D, 3D, 4D dan 5D mengikut keperluan dan usia kehamilan anda",
  "Penemuan penting boleh direkod dalam Buku Pink anda jika anda mempunyainya",
  "Imbasan anomali terperinci (18 – 22 minggu) dirujuk kepada sonografer atau pakar fetomaternal",
];

const steps = [
  {
    icon: CalendarCheck,
    title: "Tempah Imbasan Anda",
    description:
      "Hubungi kami di WhatsApp atau walk-in. Beritahu kami usia kehamilan anda (jika diketahui) supaya kami boleh mencadangkan jenis imbasan yang paling sesuai.",
  },
  {
    icon: Stethoscope,
    title: "Konsultasi Ringkas",
    description:
      "Doktor menyemak sejarah kehamilan anda dan apa yang anda harapkan daripada imbasan — sama ada penilaian klinikal, kepastian, atau gambar kenangan.",
  },
  {
    icon: Scan,
    title: "Imbasan Langsung",
    description:
      "Doktor melakukan imbasan dan menerangkan apa yang dilihat secara langsung — degupan jantung, pertumbuhan, kedudukan, dan wajah bayi anda untuk imbasan 3D/4D/5D.",
  },
  {
    icon: Camera,
    title: "Imej & Susulan",
    description:
      "Anda boleh membawa pulang imej kenangan dari imbasan bonding. Doktor akan menasihati sama ada imbasan susulan diperlukan dan bila masa yang sesuai.",
  },
];

export default function ScanKehamilanContent() {
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
                <Scan className="size-4" />
                Imbasan ultrasound 2D – 5D oleh doktor
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary">Scan Kehamilan</span> 2D – 5D di
                Petaling Jaya
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl">
                Di {brand.name}, doktor kami melakukan imbasan ultrasound dalam
                2D, 3D, 4D dan 5D — untuk mengesahkan kehamilan, memantau
                pertumbuhan bayi, dan memberikan anda imej kenangan si manja.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button size="lg" variant="gradient" asChild>
                  <a
                    href={whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tempah Imbasan Anda
                    <ArrowRight className="size-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#program">Jenis Imbasan</a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> Diketuai Dr Jihan Hanis
                </span>
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> Tersedia 2D, 3D, 4D & 5D
                </span>
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> Imbasan dalam klinik
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
                  src="/images/kepakaran/scan-hero.jpeg"
                  alt="Scan Happy Hour di Klinik Lunaria — Khamis & Jumaat 10am hingga 4pm"
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
                  <p className="font-semibold text-sm">Imbasan oleh Doktor</p>
                  <p className="text-xs text-muted-foreground">
                    Penjelasan secara langsung
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
              Apa Yang Kami Tawarkan
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Imbasan Ultrasound Lengkap,{" "}
              <span className="text-primary">Dari Klinikal ke Kenangan</span>
            </h2>
            <p className="text-muted-foreground">
              Dari imbasan klinikal 2D untuk pemantauan, kepada imbasan bonding
              3D/4D/5D untuk gambar kenangan bayi anda.
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
                    Ketahui lebih lanjut
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
                  <p className="font-medium mb-3">Sesuai untuk:</p>
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
                    <span className="font-medium text-foreground">Baik untuk diketahui:</span>{" "}
                    {service.safety}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================================
          SCAN TYPES + GOOD TO KNOW
          ============================================ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-sm"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-4">
                <Scan className="size-4" />
                Imbasan Kehamilan
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Jenis Ultrasound Yang Kami Lakukan
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Imbasan kami dilakukan oleh doktor semasa konsultasi anda,
                tersedia dalam 2D, 3D, 4D dan 5D — untuk pemantauan rutin,
                kepastian, dan imej kenangan bayi anda.
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
                Imbasan anomali terperinci (sekitar 18 – 22 minggu) dirujuk
                kepada sonografer atau pakar fetomaternal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                <Sparkles className="size-4" />
                Baik Untuk Diketahui
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sebelum Anda Datang{" "}
                <span className="text-primary">Untuk Imbasan</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Beberapa perkara yang baik diketahui supaya anda tahu apa yang
                dijangkakan daripada imbasan kehamilan bersama kami.
              </p>
              <ul className="space-y-3">
                {goodToKnow.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 bg-muted/50 border border-border rounded-xl p-4"
                  >
                    <Check className="size-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 bg-card border border-border rounded-xl p-5">
                <p className="text-sm text-muted-foreground mb-4">
                  Belum membuka Buku Pink anda? Kami juga membantu mendaftar dan
                  membuka Buku Rekod Kesihatan Ibu Mengandung anda.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/buka-buku-pink">
                    Lihat Halaman Buka Buku Pink
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
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
              Bagaimana Ia Berfungsi
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sesi Imbasan{" "}
              <span className="text-primary">Anda Bersama Kami</span>
            </h2>
            <p className="text-muted-foreground">
              Proses empat langkah yang ringkas — dari tempahan hingga membawa
              pulang imej kenangan bayi anda.
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
              &ldquo;Kali pertama saya nampak wajah anak saya dalam 5D, saya
              menangis. Doktor sabar menunggu sehingga bayi berada dalam
              kedudukan yang baik dan menerangkan setiap perkara yang kami lihat.
              Kami bawa pulang gambar yang kami simpan sampai hari ini.&rdquo;
            </p>
            <div className="flex flex-col items-center gap-1">
              <p className="font-semibold">Pesakit Klinik Lunaria</p>
              <p className="text-sm text-muted-foreground">
                Imbasan Bonding 5D
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
                Soalan Lazim
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Soalan <span className="text-primary">Biasa</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Beberapa perkara yang biasa ditanya bakal ibu sebelum imbasan
                mereka. Jika soalan anda tidak terjawab di sini, hubungi kami dan
                doktor akan membalas.
              </p>

              <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl p-6">
                <HelpCircle className="size-10 mb-4 opacity-80" />
                <h3 className="font-semibold text-lg mb-2">
                  Bercakap dengan doktor
                </h3>
                <p className="text-sm text-white/80 mb-4">
                  Ada soalan tentang imbasan kehamilan anda? Hubungi kami di
                  WhatsApp dan kami akan membalas.
                </p>
                <Button variant="secondary" asChild>
                  <a
                    href={whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-4" />
                    Hubungi Kami
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent text-white p-8 md:p-12 lg:p-16 text-center"
          >
            <Activity className="size-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sedia Untuk Melihat Bayi Anda?
            </h2>
            <p className="text-white/85 max-w-2xl mx-auto mb-8">
              Kunjungi kami di {brand.name}, Menara PKNS, Petaling Jaya. Tempah
              imbasan kehamilan anda dan dapatkan kepastian — serta kenangan
              indah — bersama doktor yang ada masa untuk anda.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="lg" variant="whatsapp" asChild>
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-5" />
                  WhatsApp Kami Sekarang
                </a>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link href="/#contact">Lihat Maklumat Klinik</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
