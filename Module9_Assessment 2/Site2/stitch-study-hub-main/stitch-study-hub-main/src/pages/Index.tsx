import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PatternsSection from "@/components/PatternsSection";
import TutorialsSection from "@/components/TutorialsSection";
import PatternReadingSection from "@/components/PatternReadingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PatternsSection />
        <TutorialsSection />
        <PatternReadingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
