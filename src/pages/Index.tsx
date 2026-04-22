import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import UrgencyBar from "@/components/UrgencyBar";
import ComeFunziona from "@/components/ComeFunziona";
import PricingSection from "@/components/PricingSection";
import AssessmentSection from "@/components/AssessmentSection";
import CredenzialiSection from "@/components/CredenzialiSection";
import TrustBar from "@/components/TrustBar";
import FaqSection from "@/components/FaqSection";
import FooterCta from "@/components/FooterCta";
import UkEuSection from "@/components/UkEuSection";

const sectionWrapper = "mx-4 sm:mx-8 lg:mx-16 my-4 rounded-2xl border border-white/10";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <UrgencyBar />
    <div className={sectionWrapper}><ComeFunziona /></div>
    <div className={sectionWrapper}><TrustBar /></div>
    <div className={sectionWrapper}><PricingSection /></div>
      <div className={sectionWrapper}><UkEuSection /></div>
    <div className={sectionWrapper}><AssessmentSection /></div>
    <div className={sectionWrapper}><CredenzialiSection /></div>
    <div className={sectionWrapper}><FaqSection /></div>
    <FooterCta />
  </div>
);

export default Index;
