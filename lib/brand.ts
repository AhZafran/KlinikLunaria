// lib/brand.ts
// ============================================
// KLINIK LUNARIA - Brand Configuration
// ============================================

export const brand = {
  // ============================================
  // BASIC INFORMATION
  // ============================================
  name: "Klinik Lunaria",
  tagline: "Healthcare That Cares",
  description:
    "Founded by Dr Jihan Hanis, Klinik Lunaria focuses on general preventive health, occupational health and medical surveillance screenings, health education and health counselling. We provide comprehensive healthcare services including outpatient treatment, pediatric care, house calls, and specialized procedures.",
  logo: "/images/logo/logo.png",
  foundedYear: 2023,
  foundedMonth: "July",

  // ============================================
  // BRAND COLORS
  // ============================================
  colors: {
    primary: "#637e4b", // Forest Green
    secondary: "#c2a27c", // Gold/Tan
    accent: "#8fa674", // Light Green
    dark: "#1e293b", // Dark Slate
  },

  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    whatsapp: "+60123456789", // Update with actual number
    whatsappLink: "https://wa.link/4l4b3o",
    phone: ["+60 12-345 6789"], // Update with actual number
    email: "info@kliniklunaria.com",
    address:
      "Ground Floor, Menara PKNS, Jalan Yong Shook Lin, 46050 Petaling Jaya, Selangor",
    city: "Petaling Jaya",
    state: "Selangor",
    postalCode: "46050",
    country: "Malaysia",
    googleMapsUrl: "https://maps.google.com/?q=Menara+PKNS+Petaling+Jaya",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9803587146826!2d101.6427111!3d3.0998783999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d9aaea0dae0b2f%3A0xef6bda39c104068f!2sKlinik%20Lunaria!5e0!3m2!1sen!2smy!4v1768991372028!5m2!1sen!2smy",
  },

  // ============================================
  // OPERATING HOURS
  // ============================================
  hours: {
    weekdays: "8:30 AM - 10:00 PM",
    saturday: "8:30 AM - 10:00 PM",
    sunday: "8:30 AM - 5:00 PM",
    holidays: "Closed on Public Holidays",
    note: "Walk-ins welcome. Appointments recommended for specialized procedures.",
  },

  // ============================================
  // DOCTOR INFORMATION
  // ============================================
  doctors: [
    {
      name: "Dr Jihan Hanis",
      title: "Founder & Medical Director",
      specialty: "General Practitioner",
      qualifications: "MBBS",
      image: "/images/doctors/Dr-Jihan.png",
      description:
        "Dr Jihan Hanis founded Klinik Lunaria with a vision to provide accessible, quality healthcare focused on preventive medicine and patient education.",
    },
  ],

  // ============================================
  // SERVICES OFFERED
  // ============================================
  services: [
    {
      name: "Outpatient Treatment",
      description: "General medical consultations and treatments",
      icon: "Stethoscope",
    },
    {
      name: "General Medical Examinations",
      description: "Comprehensive health check-ups and screenings",
      icon: "ClipboardCheck",
    },
    {
      name: "Pediatric Health Check-ups",
      description: "Specialized care for children's health needs",
      icon: "Baby",
    },
    {
      name: "House Call Services",
      description: "Medical care delivered to your home",
      icon: "Home",
    },
    {
      name: "Orthopedic Procedures",
      description: "Bone and joint treatments with specialist surgeon",
      icon: "Bone",
    },
    {
      name: "Adult Male Circumcision",
      description: "Safe and professional circumcision for adults",
      icon: "UserCheck",
    },
    {
      name: "Child Circumcision",
      description: "Gentle circumcision procedures for children",
      icon: "Users",
    },
    {
      name: "Neonatal Male Circumcision",
      description: "Newborn circumcision with specialist care",
      icon: "Heart",
    },
    {
      name: "Weight Management",
      description: "Personalized weight management programs and guidance",
      icon: "Activity",
    },
  ],

  // ============================================
  // EXPERTISE AREAS
  // ============================================
  expertise: [
    {
      name: "Preventive Health",
      description:
        "Comprehensive preventive healthcare services to keep you healthy",
      image: "/images/kepakaran/preventive-health.jpg",
    },
    {
      name: "Occupational Health",
      description: "Medical surveillance screenings and workplace health services",
      image: "/images/kepakaran/occupational-health.jpg",
    },
    {
      name: "Circumcision Services",
      description:
        "Expert circumcision procedures for all ages with modern techniques",
      image: "/images/kepakaran/circumcision.jpg",
    },
    {
      name: "Orthopedic Care",
      description: "Specialized bone and joint treatments with visiting surgeon",
      image: "/images/kepakaran/orthopedic.jpg",
    },
    {
      name: "Pediatric Care",
      description: "Dedicated healthcare services for infants and children",
      image: "/images/kepakaran/pediatric.jpg",
    },
    {
      name: "Weight Management",
      description: "Personalized weight management programs for healthy lifestyle",
      image: "/images/kepakaran/weight-management.jpg",
    },
  ],

  // ============================================
  // WHY CHOOSE US
  // ============================================
  whyChooseUs: [
    {
      title: "Experienced Doctor",
      description:
        "Led by Dr Jihan Hanis with expertise in preventive and occupational health",
      icon: "User",
    },
    {
      title: "Convenient Location",
      description:
        "Centrally located at Menara PKNS, Petaling Jaya with easy access",
      icon: "MapPin",
    },
    {
      title: "Comprehensive Services",
      description:
        "From general check-ups to specialized procedures under one roof",
      icon: "Stethoscope",
    },
    {
      title: "Patient-Centered Care",
      description: "We focus on health education and personalized treatment plans",
      icon: "Heart",
    },
    {
      title: "Modern Facilities",
      description: "Clean, comfortable environment with up-to-date equipment",
      icon: "Building2",
    },
    {
      title: "Flexible Hours",
      description: "Extended operating hours to accommodate your busy schedule",
      icon: "Clock",
    },
  ],

  // ============================================
  // FAQ
  // ============================================
  faq: [
    {
      question: "Do I need an appointment?",
      answer:
        "Walk-ins are welcome for general consultations. However, we recommend making an appointment for specialized procedures like circumcision or orthopedic consultations to ensure availability.",
    },
    {
      question: "What are your operating hours?",
      answer:
        "We are open Monday to Saturday from 8:30 AM to 10:00 PM, and Sunday from 8:30 AM to 5:00 PM. We are closed on public holidays.",
    },
    {
      question: "Do you accept insurance panels?",
      answer:
        "Yes, we accept various corporate and insurance panels. Please contact us or check our panel list for more details.",
    },
    {
      question: "What circumcision methods do you offer?",
      answer:
        "We offer safe and modern circumcision procedures for neonates, children, and adults. Our methods are performed by experienced practitioners with proper sterilization protocols.",
    },
    {
      question: "Do you provide house call services?",
      answer:
        "Yes, we offer house call services for patients who are unable to visit the clinic. Please contact us via WhatsApp to arrange a home visit.",
    },
    {
      question: "How can I contact the clinic?",
      answer:
        "You can reach us via WhatsApp for quick responses. Alternatively, you can call us during operating hours or visit us at Ground Floor, Menara PKNS, Petaling Jaya.",
    },
  ],

  // ============================================
  // SOCIAL MEDIA
  // ============================================
  social: {
    facebook: "https://facebook.com/kliniklunaria",
    instagram: "https://instagram.com/kliniklunaria",
    tiktok: "https://tiktok.com/@kliniklunaria",
  },

  // ============================================
  // SEO KEYWORDS
  // ============================================
  seoKeywords: [
    "klinik lunaria",
    "clinic petaling jaya",
    "klinik pj",
    "menara pkns clinic",
    "doctor petaling jaya",
    "circumcision petaling jaya",
    "sunat petaling jaya",
    "general practitioner pj",
    "house call doctor pj",
    "pediatric clinic pj",
    "occupational health screening",
    "medical check up pj",
    "klinik kesihatan petaling jaya",
  ],
};

// ============================================
// HELPER FUNCTIONS
// ============================================
export function getWhatsAppUrl() {
  // Always use the direct wa.link
  return brand.contact.whatsappLink;
}

export function getPhoneUrl(index = 0) {
  return `tel:${brand.contact.phone[index].replace(/[^0-9+]/g, "")}`;
}

export function getEmailUrl() {
  return `mailto:${brand.contact.email}`;
}

export function getFullAddress() {
  return `${brand.contact.address}, ${brand.contact.postalCode} ${brand.contact.city}, ${brand.contact.state}, ${brand.contact.country}`;
}
