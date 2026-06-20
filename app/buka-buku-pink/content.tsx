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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

// Page-specific WhatsApp link for the Buka Buku Pink landing page.
const whatsAppLink = "https://wa.link/6fwv44";

const pillars = [
  {
    id: "buku-pink",
    icon: BookHeart,
    title: "Buka Buku Pink",
    summary:
      "Kami bantu buka dan isi Buku Rekod Kesihatan Ibu Mengandung (Buku Pink) anda — rekod rasmi kehamilan yang digunakan di setiap klinik dan hospital sepanjang perjalanan anda.",
  },
  {
    id: "antenatal",
    icon: Stethoscope,
    title: "Pemeriksaan Antenatal",
    summary:
      "Pemeriksaan kehamilan berkala — tekanan darah, berat, air kencing, ujian darah, dan degupan jantung bayi — direkod terus dalam Buku Pink anda pada setiap lawatan.",
  },
  {
    id: "susulan",
    icon: HeartPulse,
    title: "Susulan Berterusan",
    summary:
      "Penjagaan yang konsisten di bawah doktor yang sama, dengan rujukan kepada pakar O&G atau hospital jika kehamilan anda memerlukan pemantauan lebih rapi.",
  },
];

const bukuPinkIncludes = [
  "Pengesahan kehamilan dan jangkaan tarikh bersalin (EDD)",
  "Sejarah penuh: latar belakang perubatan, obstetrik, dan keluarga",
  "Tekanan darah, berat, tinggi, dan BMI asas",
  "Ujian darah — FBC, kumpulan darah, Rhesus, HIV, Hepatitis B, VDRL",
  "Ujian air kencing untuk protein dan gula",
  "Penilaian risiko dan klasifikasi kehamilan mengikut kod warna",
  "Rekod vaksin dan suplemen (asid folik, zat besi, kalsium)",
];

const detailedServices = [
  {
    id: "buku-pink",
    title: "Buka Buku Pink — Rekod Kehamilan Anda",
    image: "/images/kepakaran/buku-pink-rekod.jpg",
    containImage: true,
    description:
      "Buku Rekod Kesihatan Ibu Mengandung — lebih dikenali sebagai Buku Pink — ialah rekod rasmi kehamilan yang digunakan di seluruh Malaysia. Setiap pemeriksaan, ujian darah, imbasan, dan vaksin sepanjang kehamilan direkod di dalamnya, supaya mana-mana klinik atau hospital yang anda kunjungi seterusnya boleh menyambung tepat dari lawatan terakhir. Di Klinik Lunaria, kami daftar dan buka Buku Pink anda pada lawatan booking, kemudian terus mengemas kininya pada setiap pemeriksaan antenatal bersama kami.",
    suitableFor: [
      "Ibu kali pertama yang ingin buka Buku Pink dalam suasana persendirian",
      "Ibu yang mahukan kesinambungan dengan doktor yang sama sepanjang kehamilan",
      "Ibu bekerja yang perlukan waktu temujanji fleksibel di luar waktu klinik kesihatan",
      "Ibu yang merancang bersalin di hospital swasta tetapi tetap mahukan Buku Pink untuk kesinambungan",
    ],
    safety:
      "Buku Pink anda kekal bersama anda sepanjang kehamilan dan diiktiraf oleh setiap penyedia penjagaan kesihatan kerajaan dan swasta di Malaysia — jadi anda tidak terikat dengan satu klinik sahaja.",
  },
  {
    id: "antenatal",
    title: "Pemeriksaan Antenatal",
    image: "/images/kepakaran/preventive-health.jpg",
    description:
      "Setelah Buku Pink anda dibuka, kami menyediakan pemeriksaan antenatal berkala pada selang masa yang disyorkan — biasanya bulanan pada awal kehamilan, dua minggu sekali dari sekitar 28 minggu, dan mingguan pada bulan terakhir. Setiap lawatan termasuk pemeriksaan standard (tekanan darah, berat, air kencing, degupan jantung bayi) dan peluang untuk berbincang terus dengan doktor.",
    suitableFor: [
      "Ibu yang mahukan penjagaan antenatal berisiko rendah dekat rumah atau tempat kerja",
      "Pesakit yang lebih suka pemeriksaan oleh doktor berbanding jururawat sahaja",
      "Ibu yang perlukan suplemen (asid folik, zat besi, kalsium) disemak dan dipreskripsi",
      "Sesiapa yang inginkan pendapat kedua selain pakar O&G utama mereka",
    ],
    safety:
      "Jika kehamilan anda menjadi berisiko tinggi pada bila-bila peringkat, kami akan merujuk anda dengan sewajarnya kepada pakar O&G atau hospital — dan Buku Pink anda membawa sejarah lengkap bersama anda.",
  },
  {
    id: "susulan",
    title: "Susulan & Penjagaan Berterusan",
    image: "/images/kepakaran/pediatric.jpg",
    description:
      "Kehamilan bukan satu lawatan sahaja — ia satu perjalanan. Kami menetapkan lawatan antenatal anda yang seterusnya, menerangkan apa yang perlu diperhatikan antara temujanji, dan memastikan setiap penemuan direkod dalam Buku Pink. Doktor yang sama mengikuti perkembangan anda dari trimester pertama hingga ke kelahiran.",
    suitableFor: [
      "Ibu yang mahukan satu doktor mengikuti seluruh kehamilan mereka",
      "Pesakit yang inginkan penjelasan jelas pada setiap peringkat kehamilan",
      "Ibu yang mahukan susulan teratur tanpa beratur lama",
      "Keluarga yang mahukan sokongan ibu dan bayi dari lawatan pertama",
    ],
    safety:
      "Setiap lawatan susulan direkod dalam Buku Pink anda. Sekiranya keadaan memerlukan penjagaan peringkat hospital, rujukan dibuat lebih awal dengan rekod penuh anda dibawa bersama.",
  },
];

const whenToStart = [
  "Sebaik sahaja anda mendapat keputusan positif ujian kehamilan di rumah",
  "Sebaiknya sebelum 12 minggu (trimester pertama) supaya ujian saringan dapat dibuat tepat pada masanya",
  "Lebih awal jika anda mempunyai keadaan sedia ada (diabetes, darah tinggi, tiroid) yang perlu dipantau",
  "Lebih awal jika anda pernah mengalami keguguran, kehamilan ektopik, atau komplikasi kehamilan",
];

const steps = [
  {
    icon: CalendarCheck,
    title: "Tempah Lawatan Booking",
    description:
      "Hubungi kami di WhatsApp atau walk-in. Bawa IC anda dan IC suami. Lawatan booking biasanya mengambil masa lebih lama daripada konsultasi biasa, jadi beritahu kami ini lawatan antenatal pertama anda.",
  },
  {
    icon: Stethoscope,
    title: "Sejarah & Pemeriksaan",
    description:
      "Doktor mengambil sejarah perubatan, obstetrik, dan keluarga sepenuhnya, memeriksa tekanan darah, berat, dan tinggi anda, serta melakukan pemeriksaan fizikal — semuanya dimasukkan ke dalam Buku Pink baharu anda.",
  },
  {
    icon: ClipboardList,
    title: "Ujian & Imbasan",
    description:
      "Ujian darah, ujian air kencing, dan imbasan dating untuk mengesahkan kehamilan dan menganggar tarikh bersalin anda. Keputusan direkod dalam Buku Pink sebelum anda pulang.",
  },
  {
    icon: HeartPulse,
    title: "Susulan Berterusan",
    description:
      "Kami menjadualkan lawatan antenatal anda yang seterusnya dan menerangkan apa yang perlu diperhatikan antara temujanji. Buku Pink anda dibawa pulang — bawanya pada setiap lawatan akan datang.",
  },
];

const faqs = [
  {
    q: "Apa itu Buku Pink sebenarnya?",
    a: "Buku Pink ialah Buku Rekod Kesihatan Ibu Mengandung — buku rekod kehamilan rasmi bersampul merah jambu yang digunakan di Malaysia. Ia mengandungi sejarah antenatal penuh anda, keputusan ujian darah, penemuan imbasan, dan rekod vaksin. Mana-mana klinik atau hospital yang anda kunjungi sepanjang kehamilan akan membaca dan menulis dalam buku yang sama.",
  },
  {
    q: "Bolehkah klinik swasta benar-benar buka Buku Pink?",
    a: "Ya. Buku Pink adalah milik anda, bukan milik klinik tertentu. Kami daftar dan buka untuk anda pada lawatan booking, lengkapkan pemeriksaan asas dan ujian, dan terus mengemas kininya pada setiap susulan. Anda juga boleh terus menggunakannya di mana-mana klinik kesihatan atau hospital kemudian.",
  },
  {
    q: "Apa yang perlu saya bawa pada lawatan antenatal (booking) pertama?",
    a: "Sila bawa IC anda, IC suami (jika ada), tarikh haid terakhir (LMP), dan sebarang rekod perubatan atau kehamilan terdahulu. Jika anda telah membuat ujian kehamilan di rumah, anda boleh bawa keputusannya, walaupun ia tidak diwajibkan.",
  },
  {
    q: "Adakah saya masih perlu ke klinik kesihatan jika saya buka Buku Pink di sini?",
    a: "Tidak semestinya. Anda boleh mendapatkan semua penjagaan antenatal berkala bersama kami jika anda mahu. Sesetengah ibu memilih untuk berselang antara kami dan klinik kesihatan, dan itu juga tidak mengapa — Buku Pink memastikan semuanya konsisten. Jika kehamilan anda menjadi berisiko tinggi, kami akan merujuk anda kepada pakar O&G hospital.",
  },
  {
    q: "Berapa kerap saya perlu pemeriksaan sepanjang kehamilan?",
    a: "Untuk kehamilan berisiko rendah: lebih kurang bulanan sehingga 28 minggu, dua minggu sekali dari 28 hingga 36 minggu, kemudian mingguan sehingga bersalin. Doktor mungkin mencadangkan pemeriksaan lebih kerap bergantung pada keadaan anda.",
  },
  {
    q: "Adakah lawatan booking termasuk imbasan?",
    a: "Ya. Imbasan dating biasanya dilakukan pada lawatan booking untuk mengesahkan kehamilan dan menganggar tarikh bersalin. Untuk imbasan kehamilan yang lebih terperinci (2D hingga 5D), lihat halaman Scan Kehamilan kami.",
  },
  {
    q: "Adakah ujian darah disertakan?",
    a: "Ya. Lawatan booking termasuk satu set ujian darah asas — FBC, kumpulan darah, Rhesus, saringan HIV, Hepatitis B, dan VDRL — bersama ujian air kencing. Keputusan direkod dalam Buku Pink anda.",
  },
  {
    q: "Berapakah kos lawatan booking dan pendaftaran Buku Pink?",
    a: "Kos bergantung pada ujian yang disertakan (ujian darah, ujian air kencing, imbasan). Kami akan menerangkan harga dengan jelas sebelum apa-apa dilakukan. Lawatan antenatal susulan dikenakan caj berasingan pada setiap temujanji.",
  },
];

export default function BukaBukuPinkContent() {
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
                Penjagaan antenatal & pendaftaran Buku Pink
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Buka <span className="text-primary">Buku Pink</span> Anda di
                Petaling Jaya
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl">
                Di {brand.name}, kami buka dan daftar Buku Rekod Kesihatan Ibu
                Mengandung (Buku Pink) anda, lakukan ujian darah booking dan
                imbasan dating, serta meneruskan pemeriksaan antenatal anda —
                semuanya di bawah jagaan doktor kami.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button size="lg" variant="gradient" asChild>
                  <a
                    href={whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tempah Lawatan Booking
                    <ArrowRight className="size-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#program">Apa Yang Disertakan</a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> Diketuai Dr Jihan Hanis
                </span>
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> Pendaftaran Buku Pink rasmi
                </span>
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> Waktu temujanji fleksibel
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
                  src="/images/kepakaran/buku-pink-lunaria.png"
                  alt="Buka Buku Pink di Klinik Lunaria, Petaling Jaya"
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
                  <p className="font-semibold text-sm">Penjagaan Ibu & Bayi</p>
                  <p className="text-xs text-muted-foreground">
                    Dari lawatan pertama
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
              Penjagaan Antenatal Lengkap,{" "}
              <span className="text-primary">Berpusat pada Buku Pink Anda</span>
            </h2>
            <p className="text-muted-foreground">
              Dari membuka Buku Pink pada lawatan pertama, kepada pemeriksaan
              berkala dan susulan berterusan sepanjang kehamilan anda.
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
              <div
                className={cn(
                  "relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg",
                  service.containImage && "bg-white"
                )}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={service.containImage ? "object-contain p-2" : "object-cover"}
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
          WHAT'S IN YOUR BUKU PINK
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
                Dalam Lawatan Booking Anda
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Apa Yang Direkod Dalam{" "}
                <span className="text-primary">Buku Pink Anda</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Lawatan booking anda adalah yang paling menyeluruh antara semua
                pemeriksaan antenatal. Inilah yang kami rekod dalam Buku Pink
                anda pada temujanji pertama itu.
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
                <Baby className="size-4" />
                Perlukan Imbasan Juga?
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Imbasan Kehamilan 2D – 5D
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Selain pendaftaran Buku Pink dan pemeriksaan antenatal, kami
                turut menawarkan imbasan ultrasound yang dilakukan oleh doktor —
                tersedia dalam 2D, 3D, 4D dan 5D untuk pemantauan, kepastian, dan
                gambar kenangan bayi anda.
              </p>
              <div className="bg-white border border-border rounded-xl p-5">
                <p className="text-sm text-muted-foreground mb-4">
                  Ketahui lebih lanjut tentang jenis imbasan yang kami lakukan,
                  bila masa terbaik untuk imbasan, dan apa yang anda akan lihat.
                </p>
                <Button variant="gradient" asChild>
                  <Link href="/scan-kehamilan">
                    Lihat Halaman Scan Kehamilan
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
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
                Bila Perlu Mula
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Bila Anda Patut Buka{" "}
                <span className="text-primary">Buku Pink?</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Lebih awal lebih baik — saringan trimester pertama, penentuan
                tarikh, dan suplemen awal semuanya penting. Sebagai panduan
                umum:
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
                alt="Ibu memegang Buku Pink di Klinik Lunaria"
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
              Bagaimana Ia Berfungsi
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lawatan Antenatal{" "}
              <span className="text-primary">Pertama Anda Bersama Kami</span>
            </h2>
            <p className="text-muted-foreground">
              Lawatan booking empat langkah yang ringkas — Buku Pink anda dibawa
              pulang pada hari yang sama.
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
              &ldquo;Saya buka Buku Pink di sini pada petang Sabtu selepas kerja
              — sesuatu yang tidak mungkin saya lakukan dalam waktu klinik
              kesihatan. Doktor mengambil masa menerangkan segalanya, membuat
              imbasan dating dalam lawatan yang sama, dan saya pulang dengan
              Buku Pink yang sudah pun diisi.&rdquo;
            </p>
            <div className="flex flex-col items-center gap-1">
              <p className="font-semibold">Pesakit Klinik Lunaria</p>
              <p className="text-sm text-muted-foreground">
                Penjagaan Antenatal
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
                Soalan Lazim
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Soalan <span className="text-primary">Biasa</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Beberapa perkara yang biasa ditanya bakal ibu sebelum lawatan
                pertama mereka. Jika soalan anda tidak terjawab di sini, hubungi
                kami dan doktor akan membalas.
              </p>

              <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl p-6">
                <HelpCircle className="size-10 mb-4 opacity-80" />
                <h3 className="font-semibold text-lg mb-2">
                  Bercakap dengan doktor
                </h3>
                <p className="text-sm text-white/80 mb-4">
                  Ada kebimbangan khusus tentang kehamilan atau Buku Pink anda?
                  Hubungi kami di WhatsApp dan kami akan membalas.
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
              Sedia Untuk Buka Buku Pink Anda?
            </h2>
            <p className="text-white/85 max-w-2xl mx-auto mb-8">
              Kunjungi kami di {brand.name}, Menara PKNS, Petaling Jaya. Tempah
              lawatan antenatal pertama anda dan mulakan perjalanan kehamilan
              bersama doktor yang ada masa untuk mendengar.
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
