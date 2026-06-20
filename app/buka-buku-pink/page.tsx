import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import BukaBukuPinkContent from "./content";

export const metadata: Metadata = {
  title: "Buka Buku Pink & Penjagaan Antenatal",
  description: `Buka Buku Pink anda dan mulakan penjagaan antenatal di ${brand.name}, Petaling Jaya. Pemeriksaan kehamilan diselia doktor, pendaftaran Buku Rekod Kesihatan Ibu Mengandung, dan susulan berterusan sepanjang perjalanan kehamilan anda.`,
  keywords: [
    "buka buku pink petaling jaya",
    "buku pink klinik swasta",
    "buku rekod ibu mengandung",
    "pendaftaran buku pink pj",
    "penjagaan antenatal petaling jaya",
    "klinik ibu mengandung pj",
    "pemeriksaan kehamilan pj",
    "klinik lunaria buku pink",
  ],
  alternates: {
    canonical: "/buka-buku-pink",
    languages: {
      ms: "/buka-buku-pink",
    },
  },
  openGraph: {
    title: `Buka Buku Pink & Penjagaan Antenatal | ${brand.name}`,
    description:
      "Mulakan perjalanan antenatal anda bersama kami — pendaftaran Buku Pink, pemeriksaan kehamilan, dan susulan diselia doktor di Petaling Jaya.",
    url: "https://kliniklunaria.com/buka-buku-pink",
    type: "website",
    locale: "ms_MY",
    images: [
      {
        url: "/images/kepakaran/buku-pink-lunaria.png",
        width: 1200,
        height: 630,
        alt: `Buka Buku Pink di ${brand.name}`,
      },
    ],
  },
};

export default function BukaBukuPinkPage() {
  return <BukaBukuPinkContent />;
}
