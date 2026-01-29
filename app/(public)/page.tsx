import AboutSection from "../components/AboutSection";
import BlogPreview from "../components/BlogPreview";
import CTASection from "../components/CTASection";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import Manifesto from "../components/Manifest";
import TrustSecurity from "../components/TrustSecurity";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <AboutSection />
      <FeaturesSection />
      <TrustSecurity />
      <BlogPreview />
      <Manifesto />
      <CTASection />
    </>
  );
}
