import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import SmartTrafficSection from "@/components/SmartTrafficSection";
import RealWorldSection from "@/components/RealWorldSection";
import TechStackSection from "@/components/TechStackSection";
import FutureVisionSection from "@/components/FutureVisionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProblemSection />
    <SolutionSection />
    <HowItWorksSection />
    <FeaturesSection />
    <SmartTrafficSection />
    <RealWorldSection />
    <TechStackSection />
    <FutureVisionSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
