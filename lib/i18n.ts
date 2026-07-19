// lib/i18n.ts
// ============================================
// KLINIK LUNARIA - Bilingual (EN / MS) content
// ============================================
// A single dictionary drives the homepage in both English (default, "/")
// and Malay ("/ms"). Components pick the active locale with useLocale(),
// which reads the pathname. Non-translatable data (contact info, images,
// icon names, hours, links) still comes from lib/brand.ts.

"use client";

import { usePathname } from "next/navigation";
import { brand } from "@/lib/brand";

export type Locale = "en" | "ms";

// A heading split so one word/phrase can be highlighted in the brand colour.
type Heading = { before: string; highlight: string; after?: string };

// ============================================
// ENGLISH (source of truth, mirrors current site)
// ============================================
const en = {
  locale: "en" as Locale,
  htmlLang: "en",

  // ---- Header / nav ----
  nav: {
    links: [
      { name: "Home", href: "#" },
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Expertise", href: "#expertise" },
      { name: "FAQ", href: "#faq" },
      { name: "Contact", href: "#contact" },
    ],
    whatsapp: "WhatsApp",
    whatsappMobile: "WhatsApp Us",
  },

  // ---- Hero ----
  hero: {
    badge: brand.tagline, // "Healthcare That Cares"
    heading: {
      before: "Your Trusted ",
      highlight: "Healthcare Partner",
      after: " in Petaling Jaya",
    } as Heading,
    description: `Founded by Dr Jihan Hanis, ${brand.name} provides comprehensive healthcare services focused on preventive health, occupational health, and personalized patient care.`,
    cta: "Book Appointment",
    stats: [
      { icon: "Calendar", value: `Since ${brand.foundedYear}`, label: "Serving the Community" },
      { icon: "Users", value: "1000+", label: "Patients Served" },
      { icon: "Star", value: "4.9", label: "Google Rating" },
    ],
    quickServicesLabel: "Quick Services",
    quickServices: [
      { name: "General Consultation", icon: "🩺" },
      { name: "Circumcision", icon: "✂️" },
      { name: "House Calls", icon: "🏠" },
      { name: "Health Screening", icon: "📋" },
    ],
    locationCity: "Petaling Jaya, Selangor",
    doctors: brand.doctors.map((d) => ({
      name: d.name,
      title: d.title,
      specialty: d.specialty,
      image: d.image,
    })),
  },

  // ---- About ----
  about: {
    label: "About Us",
    heading: {
      before: "Your Trusted Healthcare Partner Since ",
      highlight: `${brand.foundedMonth} ${brand.foundedYear}`,
    } as Heading,
    para1: {
      before: "Founded by ",
      name: "Dr Jihan Hanis",
      after: `, ${brand.name} is dedicated to providing comprehensive healthcare services with a focus on preventive medicine and patient education. Located at Menara PKNS, Petaling Jaya, we serve the community with compassionate and professional care.`,
    },
    para2:
      "Our practice emphasizes general preventive health, occupational health and medical surveillance screenings, health education, and health counselling. We believe in empowering our patients with knowledge and providing care that truly makes a difference.",
    foundedBadge: "Founded",
    features: [
      "General preventive health services",
      "Occupational health & medical surveillance",
      "Health education & counselling",
      "Specialized circumcision procedures",
      "Pediatric care for all ages",
      "Convenient house call services",
    ],
    highlights: [
      { icon: "Award", title: "Experienced Care", description: "Professional healthcare services by qualified practitioners" },
      { icon: "Heart", title: "Patient-Centered", description: "We prioritize your health education and wellbeing" },
      { icon: "Clock", title: "Convenient Hours", description: "Extended operating hours to fit your schedule" },
    ],
  },

  // ---- Services ----
  services: {
    label: "Our Services",
    heading: { before: "Comprehensive ", highlight: "Healthcare Services" } as Heading,
    subtitle:
      "From general consultations to specialized procedures, we offer a wide range of services to meet your healthcare needs.",
    items: brand.services,
  },

  // ---- Expertise ----
  expertise: {
    label: "Our Expertise",
    heading: { before: "Specialized Healthcare ", highlight: "Expertise" } as Heading,
    subtitle:
      "We offer specialized services backed by professional training and experience to ensure you receive the best possible care.",
    items: brand.expertise,
  },

  // ---- Why choose us ----
  whyChooseUs: {
    label: "Why Choose Us",
    heading: { before: "Why Patients Trust ", highlight: brand.name } as Heading,
    subtitle:
      "We are committed to providing exceptional healthcare services with a personal touch. Here's what sets us apart.",
    items: brand.whyChooseUs,
  },

  // ---- Testimonials ----
  testimonials: {
    label: "Testimonials",
    heading: { before: "What Our ", highlight: "Patients Say" } as Heading,
    subtitle: `Real feedback from real patients. We're proud to have served the Petaling Jaya community since ${brand.foundedYear}.`,
    verified: "Verified",
    onGoogle: " on Google",
  },

  // ---- Insurance panels ----
  panels: {
    label: "Insurance Panels",
    heading: { before: "Accepted ", highlight: "Insurance Panels" } as Heading,
    subtitle:
      "We accept a wide range of corporate and insurance panels for your convenience. Contact us to verify your coverage.",
    note: "Panel list may vary. Please contact us via WhatsApp to confirm your insurance coverage.",
  },

  // ---- FAQ ----
  faq: {
    label: "FAQ",
    heading: { before: "Frequently Asked ", highlight: "Questions" } as Heading,
    subtitle:
      "Find answers to common questions about our services, operating hours, and more. Can't find what you're looking for? Reach out to us directly.",
    ctaTitle: "Still have questions?",
    ctaText:
      "Our team is ready to help you with any inquiries about our services or appointments.",
    ctaButton: "Chat with Us",
    items: brand.faq,
  },

  // ---- Contact ----
  contact: {
    label: "Contact Us",
    heading: { before: "Visit Us at ", highlight: "Menara PKNS" } as Heading,
    subtitle:
      "We're conveniently located at the heart of Petaling Jaya. Come visit us or get in touch through any of the channels below.",
    whatsappLabel: "WhatsApp",
    whatsappValue: "Chat with us",
    phoneLabel: "Phone",
    emailLabel: "Email",
    locationTitle: "Our Location",
    hoursTitle: "Operating Hours",
    weekdaysLabel: "Monday - Saturday",
    sundayLabel: "Sunday",
    holidaysLabel: "Public Holidays",
    holidaysValue: brand.hours.holidays,
    hoursNote: brand.hours.note,
    getDirections: "Get Directions",
    ctaTitle: "Ready to Book an Appointment?",
    ctaText:
      "Contact us via WhatsApp for the fastest response. We're here to help you with your healthcare needs.",
    ctaButton: "Book via WhatsApp",
  },

  // ---- Footer ----
  footer: {
    tagline: `${brand.tagline}. Founded by Dr Jihan Hanis in ${brand.foundedMonth} ${brand.foundedYear}, we focus on preventive health, occupational health, and patient education.`,
    quickLinksTitle: "Quick Links",
    quickLinks: [
      { name: "Home", href: "#" },
      { name: "About Us", href: "#about" },
      { name: "Our Services", href: "#services" },
      { name: "Our Expertise", href: "#expertise" },
      { name: "FAQ", href: "#faq" },
      { name: "Contact Us", href: "#contact" },
    ],
    servicesTitle: "Our Services",
    services: brand.services.slice(0, 6).map((s) => s.name),
    contactTitle: "Contact Us",
    monSat: "Mon - Sat",
    sunday: "Sunday",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
};

export type Dictionary = typeof en;

// ============================================
// MALAY
// ============================================
const ms: Dictionary = {
  locale: "ms",
  htmlLang: "ms",

  nav: {
    links: [
      { name: "Utama", href: "#" },
      { name: "Tentang", href: "#about" },
      { name: "Perkhidmatan", href: "#services" },
      { name: "Kepakaran", href: "#expertise" },
      { name: "Soalan Lazim", href: "#faq" },
      { name: "Hubungi", href: "#contact" },
    ],
    whatsapp: "WhatsApp",
    whatsappMobile: "WhatsApp Kami",
  },

  hero: {
    badge: "Penjagaan Kesihatan Yang Prihatin",
    heading: {
      before: "Rakan ",
      highlight: "Penjagaan Kesihatan",
      after: " Yang Dipercayai di Petaling Jaya",
    },
    description: `Diasaskan oleh Dr Jihan Hanis, ${brand.name} menyediakan perkhidmatan penjagaan kesihatan menyeluruh yang menumpukan kepada kesihatan pencegahan, kesihatan pekerjaan, dan penjagaan pesakit secara peribadi.`,
    cta: "Tempah Temujanji",
    stats: [
      { icon: "Calendar", value: `Sejak ${brand.foundedYear}`, label: "Berkhidmat untuk Komuniti" },
      { icon: "Users", value: "1000+", label: "Pesakit Dirawat" },
      { icon: "Star", value: "4.9", label: "Penarafan Google" },
    ],
    quickServicesLabel: "Perkhidmatan Segera",
    quickServices: [
      { name: "Konsultasi Am", icon: "🩺" },
      { name: "Khatan / Sunat", icon: "✂️" },
      { name: "Lawatan ke Rumah", icon: "🏠" },
      { name: "Saringan Kesihatan", icon: "📋" },
    ],
    locationCity: "Petaling Jaya, Selangor",
    doctors: brand.doctors.map((d) => ({
      name: d.name,
      title: "Pengasas & Pengarah Perubatan",
      specialty: "Pengamal Perubatan Am",
      image: d.image,
    })),
  },

  about: {
    label: "Tentang Kami",
    heading: {
      before: "Rakan Penjagaan Kesihatan Anda Yang Dipercayai Sejak ",
      highlight: `Julai ${brand.foundedYear}`,
    },
    para1: {
      before: "Diasaskan oleh ",
      name: "Dr Jihan Hanis",
      after: `, ${brand.name} komited menyediakan perkhidmatan penjagaan kesihatan menyeluruh dengan tumpuan kepada perubatan pencegahan dan pendidikan pesakit. Terletak di Menara PKNS, Petaling Jaya, kami berkhidmat untuk komuniti dengan penjagaan yang penuh belas kasihan dan profesional.`,
    },
    para2:
      "Amalan kami menekankan kesihatan pencegahan am, saringan kesihatan pekerjaan dan pemantauan perubatan, pendidikan kesihatan, serta kaunseling kesihatan. Kami percaya dalam memperkasakan pesakit dengan ilmu dan memberikan penjagaan yang benar-benar membawa perubahan.",
    foundedBadge: "Ditubuhkan",
    features: [
      "Perkhidmatan kesihatan pencegahan am",
      "Kesihatan pekerjaan & pemantauan perubatan",
      "Pendidikan & kaunseling kesihatan",
      "Prosedur khatan pakar",
      "Penjagaan pediatrik untuk semua peringkat usia",
      "Perkhidmatan lawatan ke rumah yang mudah",
    ],
    highlights: [
      { icon: "Award", title: "Penjagaan Berpengalaman", description: "Perkhidmatan kesihatan profesional oleh pengamal bertauliah" },
      { icon: "Heart", title: "Berpusatkan Pesakit", description: "Kami mengutamakan pendidikan kesihatan dan kesejahteraan anda" },
      { icon: "Clock", title: "Waktu Yang Selesa", description: "Waktu operasi lanjutan yang sesuai dengan jadual anda" },
    ],
  },

  services: {
    label: "Perkhidmatan Kami",
    heading: { before: "Perkhidmatan ", highlight: "Penjagaan Kesihatan", after: " Menyeluruh" },
    subtitle:
      "Daripada konsultasi am hingga prosedur pakar, kami menawarkan pelbagai perkhidmatan untuk memenuhi keperluan penjagaan kesihatan anda.",
    items: [
      { name: "Rawatan Pesakit Luar", description: "Konsultasi dan rawatan perubatan am", icon: "Stethoscope" },
      { name: "Pemeriksaan Perubatan Am", description: "Pemeriksaan dan saringan kesihatan menyeluruh", icon: "ClipboardCheck" },
      { name: "Pemeriksaan Kesihatan Kanak-kanak", description: "Penjagaan khusus untuk keperluan kesihatan kanak-kanak", icon: "Baby" },
      { name: "Perkhidmatan Lawatan ke Rumah", description: "Penjagaan perubatan yang dibawa ke rumah anda", icon: "Home" },
      { name: "Prosedur Ortopedik", description: "Rawatan tulang dan sendi bersama pakar bedah", icon: "Bone" },
      { name: "Khatan Lelaki Dewasa", description: "Khatan yang selamat dan profesional untuk dewasa", icon: "UserCheck" },
      { name: "Khatan Kanak-kanak", description: "Prosedur khatan yang lembut untuk kanak-kanak", icon: "Users" },
      { name: "Khatan Bayi Baru Lahir", description: "Khatan bayi baru lahir dengan penjagaan pakar", icon: "Heart" },
      { name: "Pengurusan Berat Badan", description: "Program dan panduan pengurusan berat badan secara peribadi", icon: "Activity" },
      {
        name: "Buka Buku Pink & Penjagaan Antenatal",
        description:
          "Buka Buku Pink anda, tempahan ujian darah, dan imbasan kehamilan — penjagaan antenatal lengkap di bawah satu bumbung",
        icon: "BookHeart",
      },
    ],
  },

  expertise: {
    label: "Kepakaran Kami",
    heading: { before: "Kepakaran Penjagaan Kesihatan ", highlight: "Khusus" },
    subtitle:
      "Kami menawarkan perkhidmatan khusus yang disokong oleh latihan dan pengalaman profesional untuk memastikan anda menerima penjagaan yang terbaik.",
    items: [
      { name: "Kesihatan Pencegahan", description: "Perkhidmatan penjagaan kesihatan pencegahan menyeluruh untuk mengekalkan kesihatan anda", image: brand.expertise[0].image },
      { name: "Kesihatan Pekerjaan", description: "Saringan pemantauan perubatan dan perkhidmatan kesihatan tempat kerja", image: brand.expertise[1].image },
      { name: "Perkhidmatan Khatan", description: "Prosedur khatan pakar untuk semua peringkat usia dengan teknik moden", image: brand.expertise[2].image },
      { name: "Penjagaan Ortopedik", description: "Rawatan khusus tulang dan sendi bersama pakar bedah pelawat", image: brand.expertise[3].image },
      { name: "Penjagaan Pediatrik", description: "Perkhidmatan penjagaan kesihatan khusus untuk bayi dan kanak-kanak", image: brand.expertise[4].image },
      { name: "Pengurusan Berat Badan", description: "Program pengurusan berat badan peribadi untuk gaya hidup sihat", image: brand.expertise[5].image },
      {
        name: "Suntikan Penurunan Berat Badan",
        description:
          "Menawarkan suntikan penurunan berat badan di Petaling Jaya untuk membantu anda mencapai matlamat pengurusan berat badan dengan rawatan yang terbukti berkesan.",
        image: brand.expertise[6].image,
      },
      {
        name: "Ubat Penurunan Berat Badan",
        description:
          "Menawarkan penyelesaian ubat penurunan berat badan yang berkesan dan disesuaikan untuk membantu anda mencapai pengurusan berat badan yang mampan.",
        image: brand.expertise[7].image,
      },
      {
        name: "Buka Buku Pink & Imbasan Kehamilan",
        description:
          "Buka Buku Rekod Kesihatan Ibu Mengandung anda, imbasan ultrasound penetapan tarikh dan pertumbuhan, serta pemeriksaan antenatal berterusan yang dipimpin doktor.",
        image: brand.expertise[8].image,
      },
    ],
  },

  whyChooseUs: {
    label: "Mengapa Pilih Kami",
    heading: { before: "Mengapa Pesakit Mempercayai ", highlight: brand.name },
    subtitle:
      "Kami komited menyediakan perkhidmatan penjagaan kesihatan yang luar biasa dengan sentuhan peribadi. Inilah yang membezakan kami.",
    items: [
      { title: "Doktor Berpengalaman", description: "Diterajui oleh Dr Jihan Hanis dengan kepakaran dalam kesihatan pencegahan dan pekerjaan", icon: "User" },
      { title: "Lokasi Yang Strategik", description: "Terletak di tengah-tengah Menara PKNS, Petaling Jaya dengan akses mudah", icon: "MapPin" },
      { title: "Perkhidmatan Menyeluruh", description: "Daripada pemeriksaan am hingga prosedur pakar di bawah satu bumbung", icon: "Stethoscope" },
      { title: "Penjagaan Berpusatkan Pesakit", description: "Kami menumpukan kepada pendidikan kesihatan dan pelan rawatan peribadi", icon: "Heart" },
      { title: "Kemudahan Moden", description: "Persekitaran yang bersih, selesa dengan peralatan terkini", icon: "Building2" },
      { title: "Waktu Fleksibel", description: "Waktu operasi lanjutan untuk menampung jadual sibuk anda", icon: "Clock" },
    ],
  },

  testimonials: {
    label: "Testimoni",
    heading: { before: "Apa Kata ", highlight: "Pesakit Kami" },
    subtitle: `Maklum balas sebenar daripada pesakit sebenar. Kami berbangga telah berkhidmat untuk komuniti Petaling Jaya sejak ${brand.foundedYear}.`,
    verified: "Disahkan",
    onGoogle: " di Google",
  },

  panels: {
    label: "Panel Insurans",
    heading: { before: "Panel Insurans ", highlight: "Diterima" },
    subtitle:
      "Kami menerima pelbagai panel korporat dan insurans untuk kemudahan anda. Hubungi kami untuk mengesahkan perlindungan anda.",
    note: "Senarai panel mungkin berubah. Sila hubungi kami melalui WhatsApp untuk mengesahkan perlindungan insurans anda.",
  },

  faq: {
    label: "Soalan Lazim",
    heading: { before: "Soalan Yang Kerap ", highlight: "Ditanya" },
    subtitle:
      "Cari jawapan kepada soalan lazim tentang perkhidmatan, waktu operasi, dan banyak lagi. Tidak menemui apa yang anda cari? Hubungi kami secara terus.",
    ctaTitle: "Masih ada soalan?",
    ctaText:
      "Pasukan kami sedia membantu anda dengan sebarang pertanyaan tentang perkhidmatan atau temujanji.",
    ctaButton: "Sembang dengan Kami",
    items: [
      {
        question: "Adakah saya perlu membuat temujanji?",
        answer:
          "Walk-in dialu-alukan untuk konsultasi am. Walau bagaimanapun, kami mengesyorkan anda membuat temujanji untuk prosedur khusus seperti khatan atau konsultasi ortopedik bagi memastikan ketersediaan.",
      },
      {
        question: "Apakah waktu operasi anda?",
        answer:
          "Kami dibuka pada hari Isnin hingga Sabtu dari 8:30 pagi hingga 10:00 malam, dan hari Ahad dari 8:30 pagi hingga 5:00 petang. Kami tutup pada cuti umum.",
      },
      {
        question: "Adakah anda menerima panel insurans?",
        answer:
          "Ya, kami menerima pelbagai panel korporat dan insurans. Sila hubungi kami atau semak senarai panel kami untuk maklumat lanjut.",
      },
      {
        question: "Apakah kaedah khatan yang anda tawarkan?",
        answer:
          "Kami menawarkan prosedur khatan yang selamat dan moden untuk bayi baru lahir, kanak-kanak, dan dewasa. Kaedah kami dijalankan oleh pengamal berpengalaman dengan protokol pensterilan yang betul.",
      },
      {
        question: "Adakah anda menyediakan perkhidmatan lawatan ke rumah?",
        answer:
          "Ya, kami menawarkan perkhidmatan lawatan ke rumah untuk pesakit yang tidak dapat ke klinik. Sila hubungi kami melalui WhatsApp untuk mengatur lawatan ke rumah.",
      },
      {
        question: "Bagaimana saya boleh menghubungi klinik?",
        answer:
          "Anda boleh menghubungi kami melalui WhatsApp untuk respons pantas. Sebagai alternatif, anda boleh menghubungi kami semasa waktu operasi atau melawat kami di Tingkat Bawah, Menara PKNS, Petaling Jaya.",
      },
    ],
  },

  contact: {
    label: "Hubungi Kami",
    heading: { before: "Kunjungi Kami di ", highlight: "Menara PKNS" },
    subtitle:
      "Kami terletak di lokasi yang strategik di tengah-tengah Petaling Jaya. Datang kunjungi kami atau hubungi kami melalui mana-mana saluran di bawah.",
    whatsappLabel: "WhatsApp",
    whatsappValue: "Sembang dengan kami",
    phoneLabel: "Telefon",
    emailLabel: "E-mel",
    locationTitle: "Lokasi Kami",
    hoursTitle: "Waktu Operasi",
    weekdaysLabel: "Isnin - Sabtu",
    sundayLabel: "Ahad",
    holidaysLabel: "Cuti Umum",
    holidaysValue: "Tutup pada Cuti Umum",
    hoursNote: "Walk-in dialu-alukan. Temujanji disyorkan untuk prosedur khusus.",
    getDirections: "Dapatkan Arah",
    ctaTitle: "Sedia untuk Menempah Temujanji?",
    ctaText:
      "Hubungi kami melalui WhatsApp untuk respons terpantas. Kami di sini untuk membantu keperluan penjagaan kesihatan anda.",
    ctaButton: "Tempah melalui WhatsApp",
  },

  footer: {
    tagline: `Penjagaan Kesihatan Yang Prihatin. Diasaskan oleh Dr Jihan Hanis pada Julai ${brand.foundedYear}, kami menumpukan kepada kesihatan pencegahan, kesihatan pekerjaan, dan pendidikan pesakit.`,
    quickLinksTitle: "Pautan Pantas",
    quickLinks: [
      { name: "Utama", href: "#" },
      { name: "Tentang Kami", href: "#about" },
      { name: "Perkhidmatan Kami", href: "#services" },
      { name: "Kepakaran Kami", href: "#expertise" },
      { name: "Soalan Lazim", href: "#faq" },
      { name: "Hubungi Kami", href: "#contact" },
    ],
    servicesTitle: "Perkhidmatan Kami",
    services: [
      "Rawatan Pesakit Luar",
      "Pemeriksaan Perubatan Am",
      "Pemeriksaan Kesihatan Kanak-kanak",
      "Perkhidmatan Lawatan ke Rumah",
      "Prosedur Ortopedik",
      "Khatan Lelaki Dewasa",
    ],
    contactTitle: "Hubungi Kami",
    monSat: "Isnin - Sabtu",
    sunday: "Ahad",
    rights: "Hak cipta terpelihara.",
    privacy: "Dasar Privasi",
    terms: "Terma Perkhidmatan",
  },
};

// ============================================
// LOOKUP
// ============================================
export const dictionaries: Record<Locale, Dictionary> = { en, ms };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Derive the active locale from a pathname (anything under /ms is Malay). */
export function localeFromPathname(pathname: string | null | undefined): Locale {
  if (pathname === "/ms" || pathname?.startsWith("/ms/")) return "ms";
  return "en";
}

/** Client hook: returns the active locale based on the current route. */
export function useLocale(): Locale {
  const pathname = usePathname();
  return localeFromPathname(pathname);
}

/** Client hook: returns the active dictionary. */
export function useDictionary(): Dictionary {
  return getDictionary(useLocale());
}

/** Home path for the active locale (used by logo / language switcher). */
export function homeHref(locale: Locale): string {
  return locale === "ms" ? "/ms" : "/";
}
