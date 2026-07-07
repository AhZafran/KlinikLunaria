import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import PenurunanBeratBadanContent from "./content";

export const metadata: Metadata = {
  title: "Program Penurunan Berat Badan & Pengurusan Berat",
  description: `Program penurunan berat badan diselia doktor di ${brand.name}, Petaling Jaya. Rawatan selamat berasaskan bukti yang menggabungkan sokongan perubatan diselia doktor dan pelan pemakanan peribadi. Tempah konsultasi dengan Dr Jihan Hanis hari ini.`,
  keywords: [
    "penurunan berat badan petaling jaya",
    "program kurus diselia doktor",
    "klinik pengurusan berat badan pj",
    "rawatan berat badan petaling jaya",
    "rawatan kurus diselia doktor",
    "klinik lunaria penurunan berat badan",
    "pengurusan berat badan malaysia",
    "klinik pengurusan berat pj",
  ],
  alternates: {
    canonical: "/penurunan-berat-badan",
    languages: {
      en: "/weight-loss",
      ms: "/penurunan-berat-badan",
    },
  },
  openGraph: {
    title: `Program Penurunan Berat Badan | ${brand.name}`,
    description:
      "Program penurunan berat badan selamat diselia doktor di Petaling Jaya — rawatan perubatan dan sokongan pemakanan disesuaikan, semua di bawah satu bumbung.",
    url: "https://www.kliniklunaria.my/penurunan-berat-badan",
    type: "website",
    locale: "ms_MY",
    images: [
      {
        url: "/images/kepakaran/weight-management.jpg",
        width: 1200,
        height: 630,
        alt: `Program Penurunan Berat Badan ${brand.name}`,
      },
    ],
  },
};

export default function PenurunanBeratBadanPage() {
  return <PenurunanBeratBadanContent />;
}
