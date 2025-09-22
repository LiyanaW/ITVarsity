import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import tutorialImage from "@/assets/tutorial-hands.jpg";

const TutorialsSection = () => {
  const tutorials = [
    {
      title: "Getting Started",
      steps: [
        "Choose your yarn and hook size",
        "Learn to hold your hook properly",
        "Practice making a slip knot",
        "Create your first foundation chain"
      ]
    },
    {
      title: "Basic Stitches",
      steps: [
        "Single Crochet (sc)",
        "Half Double Crochet (hdc)", 
        "Double Crochet (dc)",
        "Triple Crochet (tr)"
      ]
    },
    {
      title: "Essential Techniques",
      steps: [
        "Increasing and decreasing",
        "Working in rounds vs rows",
        "Changing colors smoothly",
        "Finishing and weaving in ends"
      ]
    },
    {
      title: "Common Mistakes",
      steps: [
        "Tension too tight or loose",
        "Forgetting turning chains",
        "Losing or gaining stitches",
        "Not counting stitches regularly"
      ]
    }
  ];

  return (
    <section id="tutorials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Learn to Crochet
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master the fundamentals with our step-by-step tutorials. 
            Build confidence as you progress from basic stitches to advanced techniques.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={tutorialImage} 
              alt="Crochet tutorial showing proper hand position"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Start Your Crochet Journey
            </h3>
            <p className="text-muted-foreground mb-6">
              Crocheting is a relaxing and rewarding craft that anyone can learn. 
              Our tutorials break down each technique into simple, manageable steps.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <span className="text-foreground">Learn proper grip and posture</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <span className="text-foreground">Master basic stitches</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <span className="text-foreground">Practice with simple projects</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tutorials.map((tutorial, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">{tutorial.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tutorial.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorialsSection;