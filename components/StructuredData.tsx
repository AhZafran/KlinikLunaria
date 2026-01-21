import { brand } from "@/lib/brand";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: brand.name,
    description: brand.description,
    url: "https://kliniklunaria.com",
    telephone: brand.contact.phone[0],
    email: brand.contact.email,
    image: "https://kliniklunaria.com/images/og-image.jpg",
    logo: "https://kliniklunaria.com/images/logo.png",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ground Floor, Menara PKNS, Jalan Yong Shook Lin",
      addressLocality: brand.contact.city,
      addressRegion: brand.contact.state,
      postalCode: brand.contact.postalCode,
      addressCountry: "MY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 3.1067,
      longitude: 101.6417,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:30",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "08:30",
        closes: "17:00",
      },
    ],
    medicalSpecialty: [
      "GeneralPractice",
      "Pediatrics",
      "OccupationalMedicine",
    ],
    availableService: brand.services.map((service) => ({
      "@type": "MedicalProcedure",
      name: service.name,
      description: service.description,
    })),
    founder: {
      "@type": "Person",
      name: "Dr Jihan Hanis",
      jobTitle: "Founder & Medical Director",
    },
    foundingDate: `${brand.foundedYear}-07`,
    sameAs: [
      brand.social.facebook,
      brand.social.instagram,
      brand.social.tiktok,
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brand.name,
    image: "https://kliniklunaria.com/images/og-image.jpg",
    "@id": "https://kliniklunaria.com",
    url: "https://kliniklunaria.com",
    telephone: brand.contact.phone[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ground Floor, Menara PKNS, Jalan Yong Shook Lin",
      addressLocality: brand.contact.city,
      addressRegion: brand.contact.state,
      postalCode: brand.contact.postalCode,
      addressCountry: "MY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 3.1067,
      longitude: 101.6417,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:30",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "08:30",
        closes: "17:00",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
    </>
  );
}
