import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ingredientsImg from "@/assets/ingredients.jpg";

const Ingredients = () => {
  const categories = [
    {
      title: "Fresh Vegetables",
      items: [
        { name: "Organic Tomatoes", benefits: "Rich in lycopene and vitamin C", season: "Summer" },
        { name: "Leafy Greens", benefits: "High in iron and folate", season: "Year-round" },
        { name: "Bell Peppers", benefits: "Packed with vitamin A", season: "Summer" },
        { name: "Organic Carrots", benefits: "Beta-carotene for eye health", season: "Fall" }
      ]
    },
    {
      title: "Herbs & Spices",
      items: [
        { name: "Fresh Basil", benefits: "Anti-inflammatory properties", season: "Summer" },
        { name: "Organic Turmeric", benefits: "Natural anti-inflammatory", season: "Year-round" },
        { name: "Fresh Rosemary", benefits: "Antioxidant-rich", season: "Year-round" },
        { name: "Organic Ginger", benefits: "Digestive health support", season: "Year-round" }
      ]
    },
    {
      title: "Grains & Legumes",
      items: [
        { name: "Organic Quinoa", benefits: "Complete protein source", season: "Year-round" },
        { name: "Wild Rice", benefits: "High in fiber and protein", season: "Year-round" },
        { name: "Organic Lentils", benefits: "Plant-based protein", season: "Year-round" },
        { name: "Ancient Grains", benefits: "Rich in nutrients", season: "Year-round" }
      ]
    },
    {
      title: "Proteins",
      items: [
        { name: "Free-Range Eggs", benefits: "High-quality protein", season: "Year-round" },
        { name: "Wild-Caught Fish", benefits: "Omega-3 fatty acids", season: "Year-round" },
        { name: "Organic Chicken", benefits: "Lean protein source", season: "Year-round" },
        { name: "Plant Proteins", benefits: "Sustainable nutrition", season: "Year-round" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Organic Ingredients
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We believe in using the finest organic ingredients to create delicious and nutritious meals that nourish your body and soul.
          </p>
        </div>

        <div className="mb-12">
          <Card className="overflow-hidden shadow-warm">
            <div className="relative h-64">
              <img 
                src={ingredientsImg} 
                alt="Fresh organic ingredients"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <h2 className="text-3xl font-bold mb-2">Farm to Table</h2>
                  <p className="text-lg">Fresh, organic, and locally sourced whenever possible</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="shadow-warm hover:shadow-glow transition-all duration-300">
              <CardHeader className="bg-gradient-organic rounded-t-lg">
                <CardTitle className="text-2xl text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-l-4 border-primary pl-4 py-2">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-foreground">{item.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {item.season}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.benefits}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card className="bg-gradient-warm text-primary-foreground shadow-glow">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Why Choose Organic?</h2>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h3 className="font-semibold mb-2">Better for Health</h3>
                  <p>No harmful pesticides or chemicals, more nutrients and antioxidants</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Better for Environment</h3>
                  <p>Sustainable farming practices that protect soil and water</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Better Taste</h3>
                  <p>Natural growing methods result in more flavorful ingredients</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Ingredients;