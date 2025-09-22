import PatternCard from "./PatternCard";
import patternsImage from "@/assets/patterns-showcase.jpg";

const PatternsSection = () => {
  const patterns = [
    {
      title: "Basic Granny Square",
      difficulty: "Beginner" as const,
      time: "30 minutes",
      description: "Learn the foundation of crochet with this classic granny square pattern. Perfect for beginners starting their crochet journey.",
      image: patternsImage
    },
    {
      title: "Simple Dishcloth",
      difficulty: "Beginner" as const,
      time: "1 hour",
      description: "A practical first project that's useful and forgiving. Great for practicing basic stitches while creating something functional.",
    },
    {
      title: "Cozy Scarf",
      difficulty: "Beginner" as const,
      time: "3-4 hours",
      description: "A warm and stylish scarf using basic double crochet stitches. Choose your favorite colors and get creative!",
    },
    {
      title: "Amigurumi Bear",
      difficulty: "Intermediate" as const,
      time: "6-8 hours",
      description: "Create an adorable stuffed bear using single crochet in the round. Perfect introduction to amigurumi techniques.",
    },
    {
      title: "Baby Blanket",
      difficulty: "Intermediate" as const,
      time: "20-25 hours",
      description: "A beautiful heirloom baby blanket featuring multiple stitch patterns and color combinations.",
    },
    {
      title: "Intricate Doily",
      difficulty: "Advanced" as const,
      time: "15-20 hours",
      description: "An elegant vintage-style doily with complex lacework patterns. A true test of advanced crochet skills.",
    }
  ];

  return (
    <section id="patterns" className="py-20 bg-warm-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Crochet Patterns
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of carefully crafted patterns designed for every skill level. 
            From your first stitch to advanced masterpieces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {patterns.map((pattern, index) => (
            <PatternCard key={index} {...pattern} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Looking for more patterns? Join our community for access to hundreds more!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PatternsSection;