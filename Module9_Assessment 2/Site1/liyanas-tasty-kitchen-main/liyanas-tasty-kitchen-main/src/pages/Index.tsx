import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-food.jpg";

const Index = () => {
  const features = [
    {
      title: "Delicious Recipes",
      description: "From hearty breakfasts to elegant dinners, discover recipes for every meal of the day.",
      link: "/recipes",
      icon: "🍳"
    },
    {
      title: "Organic Ingredients", 
      description: "Learn about the finest organic ingredients that make our dishes special and nutritious.",
      link: "/ingredients",
      icon: "🌱"
    },
    {
      title: "Kitchen Measurements",
      description: "Your handy reference guide for accurate cooking and baking conversions.",
      link: "/measurements", 
      icon: "📏"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={heroImg} 
          alt="Homemade food with organic ingredients"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-6">
            <h1 className="text-5xl font-bold text-primary-foreground mb-6">
              Welcome to Liyana's Tasty Treats
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Discover the joy of homemade cooking with organic ingredients, traditional recipes, and love in every dish.
            </p>
            <Link to="/recipes">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-glow">
                Explore Recipes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Homemade with Love
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every recipe in our collection is crafted with care, using the finest organic ingredients 
            to bring you meals that nourish both body and soul.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-warm hover:shadow-glow transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <Link to={feature.link}>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Section */}
        <div className="bg-gradient-organic rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Philosophy</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            At Liyana's Tasty Treats, we believe that the best meals start with the best ingredients. 
            That's why we're passionate about organic, locally-sourced produce and time-honored cooking techniques. 
            Every recipe tells a story, and we're here to help you create delicious memories in your own kitchen.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;