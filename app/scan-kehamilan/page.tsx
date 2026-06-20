import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import ScanKehamilanContent from "./content";
import { faqs } from "./faqs";

export const metadata: Metadata = {
  title: "Scan Kehamilan 2D – 5D",
  description: `Imbasan kehamilan 2D, 3D, 4D dan 5D diselia doktor di ${brand.name}, Petaling Jaya. Imbasan dating, pertumbuhan, dan bonding untuk mengesahkan kehamilan, memantau bayi, dan mendapatkan imej kenangan si manja.`,
  keywords: [
    "scan kehamilan petaling jaya",
    "imbasan kehamilan pj",
    "ultrasound kehamilan",
    "scan 4d 5d malaysia",
    "imbasan bonding bayi",
    "dating scan pj",
    "scan 3d 4d 5d petaling jaya",
    "klinik lunaria scan kehamilan",
  ],
  alternates: {
    canonical: "/scan-kehamilan",
    languages: {
      ms: "/scan-kehamilan",
    },
  },
  openGraph: {
    title: `Scan Kehamilan 2D – 5D | ${brand.name}`,
    description:
      "Imbasan ultrasound kehamilan 2D hingga 5D diselia doktor di Petaling Jaya — pemantauan, kepastian, dan imej kenangan bayi anda.",
    url: "https://www.kliniklunaria.my/scan-kehamilan",
    type: "website",
    locale: "ms_MY",
    images: [
      {
        url: "/images/kepakaran/scan-happy-hour.jpeg",
        width: 1200,
        height: 630,
        alt: `Scan Kehamilan 2D – 5D di ${brand.name}`,
      },
    ],
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function ScanKehamilanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <ScanKehamilanContent />
    </>
  );
}
