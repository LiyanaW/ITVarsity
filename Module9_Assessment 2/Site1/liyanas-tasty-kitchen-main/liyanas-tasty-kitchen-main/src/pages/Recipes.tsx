import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import breakfastImg from "@/assets/breakfast.jpg";
import lunchImg from "@/assets/lunch.jpg";
import dinnerImg from "@/assets/dinner.jpg";

const Recipes = () => {
  const recipes = {
    breakfast: [
      {
        title: "Organic Blueberry Pancakes",
        time: "20 mins",
        difficulty: "Easy",
        ingredients: ["Organic flour", "Free-range eggs", "Fresh blueberries", "Raw honey"],
        description: "Fluffy pancakes made with organic ingredients and topped with fresh blueberries."
      },
      {
        title: "Avocado Toast Supreme",
        time: "10 mins", 
        difficulty: "Easy",
        ingredients: ["Organic sourdough", "Ripe avocado", "Heirloom tomatoes", "Sea salt"],
        description: "Creamy avocado on artisan bread with fresh tomatoes and herbs."
      }
    ],
    lunch: [
      {
        title: "Quinoa Power Bowl",
        time: "25 mins",
        difficulty: "Medium",
        ingredients: ["Organic quinoa", "Roasted vegetables", "Tahini dressing", "Pumpkin seeds"],
        description: "Nutritious bowl packed with protein and fresh vegetables."
      },
      {
        title: "Garden Fresh Salad",
        time: "15 mins",
        difficulty: "Easy", 
        ingredients: ["Mixed greens", "Cherry tomatoes", "Cucumber", "Olive oil"],
        description: "Crisp salad with garden-fresh vegetables and herb vinaigrette."
      }
    ],
    dinner: [
      {
        title: "Herb-Crusted Salmon",
        time: "30 mins",
        difficulty: "Medium",
        ingredients: ["Wild salmon", "Fresh herbs", "Lemon", "Olive oil"],
        description: "Perfectly seasoned salmon with a crispy herb crust."
      },
      {
        title: "Roasted Vegetable Medley",
        time: "40 mins",
        difficulty: "Easy",
        ingredients: ["Seasonal vegetables", "Rosemary", "Garlic", "Balsamic glaze"],
        description: "Colorful roasted vegetables with aromatic herbs."
      }
    ]
  };

  const sections = [
    { key: "breakfast", title: "Breakfast", image: breakfastImg, color: "bg-gradient-to-r from-golden/20 to-primary/20" },
    { key: "lunch", title: "Lunch", image: lunchImg, color: "bg-gradient-to-r from-accent/20 to-sage-green/20" },
    { key: "dinner", title: "Dinner", image: dinnerImg, color: "bg-gradient-to-r from-primary/20 to-warm-brown/20" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Delicious Homemade Recipes
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From hearty breakfasts to elegant dinners, discover recipes made with love and organic ingredients.
          </p>
        </div>

        {sections.map((section) => (
          <div key={section.key} className="mb-16">
            <div className={`rounded-2xl p-8 mb-8 ${section.color}`}>
              <div className="flex items-center gap-6">
                <img 
                  src={section.image} 
                  alt={section.title}
                  className="w-24 h-24 rounded-full object-cover shadow-warm"
                />
                <h2 className="text-3xl font-bold text-foreground">{section.title}</h2>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {recipes[section.key as keyof typeof recipes].map((recipe, index) => (
                <Card key={index} className="shadow-warm hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{recipe.title}</CardTitle>
                      <div className="flex gap-2">
                        <Badge variant="secondary">{recipe.time}</Badge>
                        <Badge variant={recipe.difficulty === "Easy" ? "default" : "outline"}>
                          {recipe.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{recipe.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Key Ingredients:</h4>
                      <div className="flex flex-wrap gap-2">
                        {recipe.ingredients.map((ingredient, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {ingredient}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Recipes;