import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import PregnancyContent from "./content";

export const metadata: Metadata = {
  title: "Buka Buku Pink & Pregnancy Scan",
  description: `Open your Buku Pink and start antenatal care at ${brand.name}, Petaling Jaya. Doctor-led pregnancy check-ups, dating and growth ultrasound scans, and continuous care throughout your pregnancy journey.`,
  keywords: [
    "buka buku pink petaling jaya",
    "buku pink klinik swasta",
    "buku rekod ibu mengandung",
    "antenatal care petaling jaya",
    "pregnancy scan pj",
    "ultrasound kehamilan",
    "dating scan malaysia",
    "klinik ibu mengandung pj",
    "klinik lunaria pregnancy",
  ],
  alternates: {
    canonical: "/pregnancy",
  },
  openGraph: {
    title: `Buka Buku Pink & Pregnancy Scan | ${brand.name}`,
    description:
      "Start your antenatal journey with us — Buku Pink registration, pregnancy scans, and doctor-led check-ups under one roof in Petaling Jaya.",
    url: "https://www.kliniklunaria.my/pregnancy",
    type: "website",
    images: [
      {
        url: "/images/kepakaran/pediatric.jpg",
        width: 1200,
        height: 630,
        alt: `${brand.name} Antenatal Care & Pregnancy Scan`,
      },
    ],
  },
};

export default function PregnancyPage() {
  return <PregnancyContent />;
}
