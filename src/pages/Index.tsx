import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import UrgencyBar from "@/components/UrgencyBar";
import ComeFunziona from "@/components/ComeFunziona";
import PricingSection from "@/components/PricingSection";
import AssessmentSection from "@/components/AssessmentSection";
import CredenzialiSection from "@/components/CredenzialiSection";
import FaqSection from "@/components/FaqSection";
import FooterCta from "@/components/FooterCta";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <UrgencyBar />
    <ComeFunziona />
    <PricingSection />
    <AssessmentSection />
    <CredenzialiSection />
    <FaqSection />
    <FooterCta />
  </div>
);

export default Index;
