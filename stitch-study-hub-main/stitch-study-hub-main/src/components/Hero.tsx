import { Button } from "@/components/ui/button";
import heroImage from "@/assets/crochet-hero.jpg";

const Hero = () => {
  const scrollToPatterns = () => {
    const element = document.getElementById('patterns');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/40 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
          Crochet for{" "}
          <span className="text-primary">All Ages</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover the joy of crocheting with our comprehensive patterns, tutorials, and guides. 
          Perfect for beginners and experts alike.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={scrollToPatterns}
            className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Browse Patterns
          </Button>
          <Button 
            variant="secondary" 
            size="lg"
            className="text-lg px-8 py-6"
            onClick={() => document.getElementById('tutorials')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Learning
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;