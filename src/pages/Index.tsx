import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import InstallationsSection from "../components/InstallationsSection";
import TeamsSection from "../components/TeamsSection";
import NewsSection from "../components/NewsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <InstallationsSection />
      <TeamsSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
