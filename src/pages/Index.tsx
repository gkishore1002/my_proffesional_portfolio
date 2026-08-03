import { lazy, Suspense, useState } from "react";
import { useLenis } from "@/hooks/useLenis";
import BackgroundEffects from "@/components/effects/BackgroundEffects";
import LoadingScreen from "@/components/effects/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorFollower from "@/components/ui/CursorFollower";
import BackToTop from "@/components/ui/BackToTop";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";

const CaseStudiesSection = lazy(() => import("@/components/sections/CaseStudiesSection"));
const ProcessSection = lazy(() => import("@/components/sections/ProcessSection"));
const WhyChooseUsSection = lazy(() => import("@/components/sections/WhyChooseUsSection"));
const TechStackSection = lazy(() => import("@/components/sections/TechStackSection"));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection"));
const StatisticsSection = lazy(() => import("@/components/sections/StatisticsSection"));
const PricingSection = lazy(() => import("@/components/sections/PricingSection"));
const FAQSection = lazy(() => import("@/components/sections/FAQSection"));
const ContactSection = lazy(() => import("@/components/sections/ContactSection"));

const SectionFallback = () => <div className="section-padding" aria-hidden="true" />;

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  useLenis();

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <div className={`relative min-h-screen transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <BackgroundEffects />
        <Navbar />
        <main className="relative z-10">
          <HeroSection />
          <ServicesSection />
          <Suspense fallback={<SectionFallback />}>
            <CaseStudiesSection />
            <ProcessSection />
            <WhyChooseUsSection />
            <TechStackSection />
            <TestimonialsSection />
            <StatisticsSection />
            <PricingSection />
            <FAQSection />
            <ContactSection />
          </Suspense>
        </main>
        <Footer />
        <BackToTop />
        <CursorFollower />
      </div>
    </>
  );
};

export default Index;
