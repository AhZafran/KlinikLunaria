import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import OurServices from "@/components/OurServices";
import OurExpertise from "@/components/OurExpertise";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import PanelKlinik from "@/components/PanelKlinik";
import FAQ from "@/components/FAQ";
import ContactUs from "@/components/ContactUs";

export default function Home() {
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
