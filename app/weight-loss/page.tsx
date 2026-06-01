import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import WeightLossContent from "./content";

export const metadata: Metadata = {
  title: "Weight Loss & Weight Management Program",
  description: `Doctor-supervised weight loss program at ${brand.name}, Petaling Jaya. Safe, evidence-based treatment combining weight loss injections, prescription medicine, and personalised dietary plans. Consult Dr Jihan Hanis today.`,
  keywords: [
    "weight loss petaling jaya",
    "weight loss injection malaysia",
    "weight loss medicine pj",
    "GLP-1 injection clinic",
    "doctor supervised weight loss",
    "klinik lunaria weight loss",
    "obesity treatment malaysia",
    "weight management clinic pj",
  ],
  alternates: {
    canonical: "/weight-loss",
  },
  openGraph: {
    title: `Weight Loss & Weight Management | ${brand.name}`,
    description:
      "Safe, doctor-supervised weight loss in Petaling Jaya — injections, medication, and tailored dietary support, all under one roof.",
    url: "https://kliniklunaria.com/weight-loss",
    type: "website",
    images: [
      {
        url: "/images/kepakaran/weight-management.jpg",
        width: 1200,
        height: 630,
        alt: `${brand.name} Weight Loss Program`,
      },
    ],
  },
};

export default function WeightLossPage() {
  return <WeightLossContent />;
}
