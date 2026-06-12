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
    id: "suntikan",
    icon: Syringe,
    title: "Suntikan Penurunan Berat Badan",
    summary:
      "Terapi suntikan berasaskan GLP-1 yang membantu mengurangkan selera makan dan memperbaiki kawalan gula darah, dipreskripsi dan diselia oleh doktor kami.",
  },
  {
    id: "ubat",
    icon: Pill,
    title: "Ubat Penurunan Berat Badan",
    summary:
      "Ubat preskripsi oral yang disesuaikan dengan profil perubatan anda, dengan semakan berkala untuk memastikan keselamatan dan kemajuan.",
  },
  {
    id: "diet",
    icon: Salad,
    title: "Pelan Pemakanan Peribadi",
    summary:
      "Panduan pemakanan praktikal dan mesra halal yang direka mengikut gaya hidup anda supaya perubahan boleh dikekalkan, bukan ekstrem.",
  },
];

const detailedServices = [
  {
    id: "suntikan",
    title: "Suntikan Penurunan Berat Badan",
    image: "/images/kepakaran/weight-loss-injection.avif",
    description:
      "Terapi suntikan penurunan berat badan kami menggunakan agonis reseptor GLP-1, kelas ubat yang sama yang banyak dikaji untuk pengurusan diabetes jenis 2 dan obesiti. Ia berfungsi dengan mengurangkan selera makan, melambatkan pengosongan perut, dan membantu anda berasa kenyang lebih lama.",
    suitableFor: [
      "Dewasa dengan BMI ≥ 30",
      "Dewasa dengan BMI ≥ 27 dan keadaan berkaitan berat badan (cth. darah tinggi, diabetes jenis 2, kolesterol tinggi)",
      "Pesakit yang sukar mencapai hasil melalui diet dan senaman sahaja",
    ],
    safety:
      "Setiap pelan suntikan dipreskripsi selepas penilaian perubatan. Kami menyemak sejarah perubatan, ubat-ubatan, dan matlamat anda sebelum memulakan, dan membuat susulan berkala untuk memantau kesan sampingan dan kemajuan.",
  },
  {
    id: "ubat",
    title: "Ubat Penurunan Berat Badan",
    image: "/images/kepakaran/weight-loss-medicine.avif",
    description:
      "Untuk pesakit yang lebih suka rawatan oral atau mempunyai pertimbangan perubatan tertentu, kami menawarkan ubat preskripsi untuk penurunan berat badan. Setiap preskripsi dipadankan dengan profil kesihatan anda, dengan dos yang diselaraskan dari masa ke masa berdasarkan tindak balas anda.",
    suitableFor: [
      "Pesakit yang mencari alternatif kepada terapi suntikan",
      "Dewasa dengan risiko kesihatan berkaitan berat badan yang akan mendapat manfaat daripada sokongan farmakologi",
      "Pesakit yang pernah mencuba menurunkan berat badan tetapi tidak berjaya",
    ],
    safety:
      "Kami hanya membekalkan ubat yang diluluskan dan didaftarkan untuk pengurusan berat badan. Doktor kami akan menerangkan cara ia berfungsi, apa yang perlu dijangkakan, dan apa yang perlu diawasi sebelum anda memulakannya.",
  },
  {
    id: "diet",
    title: "Pelan Pemakanan Peribadi",
    image: "/images/kepakaran/weight-management.jpg",
    description:
      "Penurunan berat badan yang berkekalan memerlukan lebih daripada sekadar ubat — ia memerlukan cara pemakanan yang anda boleh teruskan. Kami membina rangka makanan yang fleksibel mengikut rutin harian, citarasa makanan, dan keperluan budaya anda, supaya ia sesuai dengan kehidupan anda di Malaysia.",
    suitableFor: [
      "Pesakit yang menjalani terapi suntikan atau ubat yang ingin memaksimumkan hasil",
      "Pesakit dengan masalah berat badan ringan hingga sederhana yang belum memerlukan ubat",
      "Sesiapa yang mahukan pelan yang jelas dan dipandu doktor berbanding diet ikut trend",
    ],
    safety:
      "Pelan direka untuk seimbang dari segi nutrisi dan mesra halal. Kami menyesuaikannya pada setiap susulan berdasarkan kemajuan dan maklum balas anda.",
  },
];

const eligibility = [
  "BMI 30 atau ke atas (obesiti)",
  "BMI 27 atau ke atas dengan keadaan berkaitan berat badan seperti darah tinggi, diabetes jenis 2, atau kolesterol tinggi",
  "Sukar mencapai hasil walaupun konsisten dengan diet dan senaman",
  "Berat badan yang menjejaskan aktiviti harian, kesihatan sendi, atau kualiti hidup",
];

const bmiCategories = [
  { range: "Bawah 18.5", label: "Kurang Berat", color: "bg-blue-100 text-blue-700" },
  { range: "18.5 – 22.9", label: "Berat Sihat", color: "bg-green-100 text-green-700" },
  { range: "23.0 – 27.4", label: "Berat Berlebihan", color: "bg-yellow-100 text-yellow-700" },
  { range: "27.5 – 34.9", label: "Obesiti I", color: "bg-orange-100 text-orange-700" },
  { range: "35.0 ke atas", label: "Obesiti II", color: "bg-red-100 text-red-700" },
];

const steps = [
  {
    icon: CalendarCheck,
    title: "Tempah Konsultasi",
    description:
      "Hubungi kami melalui WhatsApp atau datang ke Menara PKNS. Kami akan menjadualkan konsultasi peribadi dengan doktor pada masa yang sesuai untuk anda.",
  },
  {
    icon: Stethoscope,
    title: "Penilaian Perubatan",
    description:
      "Doktor kami menyemak sejarah perubatan, ubat-ubatan semasa, gaya hidup, dan matlamat berat badan anda — serta mengukur petunjuk penting (BMI, tekanan darah dan lain-lain).",
  },
  {
    icon: ClipboardList,
    title: "Pelan Peribadi",
    description:
      "Berdasarkan penilaian, kami mencadangkan kombinasi suntikan, ubat, dan perubahan pemakanan yang sesuai — menerangkan setiap pilihan dengan jelas supaya anda boleh membuat keputusan bersama kami.",
  },
  {
    icon: LineChart,
    title: "Pemantauan Berterusan",
    description:
      "Susulan berkala membolehkan kami menjejaki kemajuan, menguruskan sebarang kesan sampingan, dan menyesuaikan pelan anda supaya hasilnya stabil dan selamat dalam jangka panjang.",
  },
];

const faqs = [
  {
    q: "Adakah rawatan penurunan berat badan di Klinik Lunaria halal?",
    a: "Ya. Ubat-ubatan yang kami preskripsi adalah diluluskan untuk kegunaan di Malaysia, dan kami mengambil kira pertimbangan halal ketika mengesyorkan suntikan, ubat, dan pelan pemakanan. Jika anda mempunyai kebimbangan khusus, sila kemukakannya semasa konsultasi anda.",
  },
  {
    q: "Adakah saya akan mengalami kesan sampingan daripada suntikan atau ubat?",
    a: "Sesetengah pesakit mengalami kesan sampingan ringan seperti loya, kurang selera makan, atau perubahan pencernaan sementara — terutamanya pada beberapa minggu pertama. Doktor kami akan menerangkan apa yang perlu dijangkakan, cara menguruskannya, dan bila perlu datang semula untuk semakan.",
  },
  {
    q: "Berapa banyak berat badan yang akan saya turunkan, dan secepat mana?",
    a: "Hasil berbeza bergantung pada titik permulaan anda, pelan rawatan, dan sejauh mana perubahan gaya hidup diikuti. Penurunan berat badan yang berkekalan biasanya berlaku secara beransur-ansur dan bukannya cepat, dan kami fokus pada hasil yang anda boleh kekalkan dalam jangka panjang.",
  },
  {
    q: "Berapa lama tempoh program ini?",
    a: "Kebanyakan pesakit disemak setiap bulan semasa fasa rawatan aktif, dengan janji temu susulan dikurangkan apabila berat badan anda stabil. Doktor akan membincangkan garis masa yang realistik dengan anda pada lawatan pertama.",
  },
  {
    q: "Adakah saya perlu mengikuti diet yang ketat?",
    a: "Tidak. Kami tidak percaya pada sekatan ekstrem. Pelan pemakanan anda dibina berdasarkan makanan yang anda makan sebenarnya, dengan penyesuaian praktikal supaya perubahan boleh dikekalkan.",
  },
  {
    q: "Berapakah kos program ini?",
    a: "Kos bergantung pada rawatan yang disyorkan selepas penilaian anda. Kami akan menerangkan harga secara telus sebelum anda komited, supaya tiada kejutan kemudian.",
  },
  {
    q: "Bolehkah saya mula program ini jika saya hamil atau menyusu?",
    a: "Tidak. Suntikan dan ubat penurunan berat badan tidak sesuai semasa kehamilan atau penyusuan. Jika anda merancang untuk hamil, sila bincangkan dengan doktor kami supaya kami boleh memberi nasihat yang sewajarnya.",
  },
];

export default function PenurunanBeratBadanContent() {
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
                Program penurunan berat badan diselia doktor
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Penurunan{" "}
                <span className="text-primary">Berat Badan</span> yang Selamat
                & Berkesan di Petaling Jaya
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl">
                Di {brand.name}, kami membantu anda mencapai berat badan yang
                lebih sihat melalui program perubatan yang dibina mengikut
                tubuh, gaya hidup, dan matlamat anda — menggabungkan suntikan
                penurunan berat badan, ubat preskripsi, dan pelan pemakanan
                yang praktikal, semuanya di bawah penyeliaan doktor kami.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button size="lg" variant="gradient" asChild>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tempah Konsultasi
                    <ArrowRight className="size-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#program">Terokai Program</a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> Diketuai oleh Dr Jihan Hanis
                </span>
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> Rawatan berasaskan bukti
                </span>
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> Pendekatan mesra halal
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
                  alt="Konsultasi pengurusan berat badan di Klinik Lunaria"
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
                  <p className="font-semibold text-sm">Diselia Doktor</p>
                  <p className="text-xs text-muted-foreground">
                    Setiap pelan disemak doktor
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
              Pendekatan Kami
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tiga Tonggak ke Arah{" "}
              <span className="text-primary">Anda yang Lebih Sihat</span>
            </h2>
            <p className="text-muted-foreground">
              Kami menggabungkan tiga alat yang saling melengkapi — digunakan
              bersama atau secara berasingan berdasarkan keperluan sebenar
              tubuh anda.
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
                    <span className="font-medium text-foreground">Keselamatan diutamakan:</span>{" "}
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
                Kelayakan
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Adakah Program Ini{" "}
                <span className="text-primary">Sesuai untuk Anda?</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Program penurunan berat badan kami biasanya sesuai untuk
                dewasa yang memenuhi satu atau lebih kriteria berikut. Doktor
                akan mengesahkan kelayakan semasa konsultasi anda.
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
                Rujukan BMI (Dewasa Asia)
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Indeks Jisim Badan adalah salah satu daripada beberapa
                petunjuk yang kami lihat. Ia bukan satu-satunya faktor, tetapi
                merupakan titik permulaan yang berguna.
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
                BMI = berat (kg) ÷ tinggi (m)². Nilai garis pemisah WHO
                Asia-Pasifik ditunjukkan.
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
              Cara Ia Berfungsi
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perjalanan Penurunan{" "}
              <span className="text-primary">Berat Badan Anda</span>
            </h2>
            <p className="text-muted-foreground">
              Proses empat langkah yang ringkas — dengan doktor membimbing
              anda pada setiap peringkat.
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
              &ldquo;Pasukan ini menerangkan setiap langkah dengan jelas dan
              tidak pernah memaksa rawatan yang saya tidak perlukan. Pelan
              ini sesuai dengan jadual kerja saya, dan susulan berkala
              membantu saya konsisten. Klinik ini sendiri bersih dan
              tenang — tempat yang selesa untuk datang semula.&rdquo;
            </p>
            <div className="flex flex-col items-center gap-1">
              <p className="font-semibold">Seorang pesakit Klinik Lunaria</p>
              <p className="text-sm text-muted-foreground">
                Program Penurunan Berat Badan
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
                Soalan <span className="text-primary">Biasa Ditanya</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Beberapa perkara yang pesakit biasanya tanya sebelum memulakan
                program. Jika soalan anda tidak dijawab di sini, hantar mesej
                kepada kami dan doktor akan membalas.
              </p>

              <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl p-6">
                <HelpCircle className="size-10 mb-4 opacity-80" />
                <h3 className="font-semibold text-lg mb-2">
                  Berbual dengan doktor
                </h3>
                <p className="text-sm text-white/80 mb-4">
                  Kami berbesar hati menjawab kebimbangan khusus anda melalui
                  WhatsApp sebelum anda membuat keputusan.
                </p>
                <Button variant="secondary" asChild>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-4" />
                    Berbual dengan Kami
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
              Sedia Memulakan Perjalanan Penurunan Berat Badan Anda?
            </h2>
            <p className="text-white/85 max-w-2xl mx-auto mb-8">
              Berbual terus dengan doktor kami di {brand.name}, Menara PKNS,
              Petaling Jaya. Tempah konsultasi peribadi untuk mengetahui
              rawatan yang sesuai untuk anda.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="lg" variant="whatsapp" asChild>
                <a
                  href={getWhatsAppUrl()}
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
