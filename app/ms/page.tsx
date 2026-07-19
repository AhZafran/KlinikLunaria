import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import OurServices from "@/components/OurServices";
import OurExpertise from "@/components/OurExpertise";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import PanelKlinik from "@/components/PanelKlinik";
import FAQ from "@/components/FAQ";
import ContactUs from "@/components/ContactUs";
import { brand } from "@/lib/brand";

const description =
  "Diasaskan oleh Dr Jihan Hanis, Klinik Lunaria menumpukan kepada kesihatan pencegahan am, kesihatan pekerjaan dan saringan pemantauan perubatan, pendidikan dan kaunseling kesihatan. Kami menyediakan perkhidmatan penjagaan kesihatan menyeluruh termasuk rawatan pesakit luar, penjagaan pediatrik, lawatan ke rumah, dan prosedur khusus di Petaling Jaya.";

export const metadata: Metadata = {
  title: {
    absolute: `${brand.name} | Penjagaan Kesihatan Yang Prihatin di Petaling Jaya`,
  },
  description,
  alternates: {
    canonical: "/ms",
    languages: {
      "en-MY": "/",
      "ms-MY": "/ms",
      "x-default": "/",
    },
  },
  openGraph: {
    title: `${brand.name} | Penjagaan Kesihatan Yang Prihatin`,
    description,
    url: "https://www.kliniklunaria.my/ms",
    siteName: brand.name,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${brand.name} - Penjagaan Kesihatan Yang Prihatin`,
      },
    ],
    locale: "ms_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} | Penjagaan Kesihatan Yang Prihatin`,
    description,
    images: ["/images/og-image.jpg"],
  },
};

export default function HomeMs() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <OurServices />
      <OurExpertise />
      <WhyChooseUs />
      <Testimonials />
      <PanelKlinik />
      <FAQ />
      <ContactUs />
    </>
  );
}
