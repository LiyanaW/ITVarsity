import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Measurements = () => {
  const conversions = [
    {
      category: "Volume Conversions",
      items: [
        { from: "1 cup", to: "240ml / 16 tablespoons / 48 teaspoons" },
        { from: "1/2 cup", to: "120ml / 8 tablespoons" },
        { from: "1/4 cup", to: "60ml / 4 tablespoons" },
        { from: "1 tablespoon", to: "15ml / 3 teaspoons" },
        { from: "1 teaspoon", to: "5ml" },
        { from: "1 fluid ounce", to: "30ml / 2 tablespoons" },
        { from: "1 pint", to: "475ml / 2 cups" },
        { from: "1 quart", to: "950ml / 4 cups" }
      ]
    },
    {
      category: "Weight Conversions",
      items: [
        { from: "1 pound", to: "454g / 16 ounces" },
        { from: "1 ounce", to: "28g" },
        { from: "1 kilogram", to: "2.2 pounds / 1000g" },
        { from: "100g", to: "3.5 ounces" },
        { from: "50g", to: "1.75 ounces" },
        { from: "25g", to: "0.9 ounces" }
      ]
    },
    {
      category: "Temperature Conversions",
      items: [
        { from: "325°F", to: "165°C / Gas Mark 3" },
        { from: "350°F", to: "175°C / Gas Mark 4" },
        { from: "375°F", to: "190°C / Gas Mark 5" },
        { from: "400°F", to: "200°C / Gas Mark 6" },
        { from: "425°F", to: "220°C / Gas Mark 7" },
        { from: "450°F", to: "230°C / Gas Mark 8" }
      ]
    }
  ];

  const commonIngredients = [
    {
      category: "Flour & Grains",
      items: [
        { ingredient: "All-purpose flour", cup: "120g", tablespoon: "8g" },
        { ingredient: "Whole wheat flour", cup: "130g", tablespoon: "8g" },
        { ingredient: "Rice (uncooked)", cup: "185g", tablespoon: "12g" },
        { ingredient: "Quinoa (uncooked)", cup: "170g", tablespoon: "11g" }
      ]
    },
    {
      category: "Sugars & Sweeteners",
      items: [
        { ingredient: "Granulated sugar", cup: "200g", tablespoon: "12g" },
        { ingredient: "Brown sugar (packed)", cup: "220g", tablespoon: "14g" },
        { ingredient: "Honey", cup: "340g", tablespoon: "21g" },
        { ingredient: "Maple syrup", cup: "315g", tablespoon: "20g" }
      ]
    },
    {
      category: "Fats & Oils",
      items: [
        { ingredient: "Butter", cup: "225g", tablespoon: "14g" },
        { ingredient: "Coconut oil", cup: "200g", tablespoon: "13g" },
        { ingredient: "Olive oil", cup: "215g", tablespoon: "13g" },
        { ingredient: "Vegetable oil", cup: "220g", tablespoon: "14g" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Kitchen Measurements & Conversions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your handy reference guide for accurate cooking and baking measurements.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Basic Conversions</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {conversions.map((section, index) => (
              <Card key={index} className="shadow-warm hover:shadow-glow transition-all duration-300">
                <CardHeader className="bg-gradient-organic">
                  <CardTitle className="text-center">{section.category}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                        <span className="font-medium text-foreground">{item.from}</span>
                        <span className="text-sm text-muted-foreground">=</span>
                        <span className="text-sm text-muted-foreground text-right">{item.to}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Common Ingredient Weights</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {commonIngredients.map((section, index) => (
              <Card key={index} className="shadow-warm hover:shadow-glow transition-all duration-300">
                <CardHeader className="bg-gradient-warm text-primary-foreground">
                  <CardTitle className="text-center">{section.category}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-foreground mb-2">{item.ingredient}</h3>
                        <div className="flex gap-4 text-sm">
                          <Badge variant="secondary">1 cup = {item.cup}</Badge>
                          <Badge variant="outline">1 tbsp = {item.tablespoon}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-warm">
            <CardHeader className="bg-accent text-accent-foreground">
              <CardTitle>Quick Tips</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-2 text-sm">
                <li>• Use dry measuring cups for dry ingredients</li>
                <li>• Use liquid measuring cups for wet ingredients</li>
                <li>• Level off dry ingredients with a knife</li>
                <li>• Measure at eye level for accuracy</li>
                <li>• Weigh ingredients for best precision</li>
                <li>• Sift flour before measuring if recipe calls for it</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-warm">
            <CardHeader className="bg-sage-green text-accent-foreground">
              <CardTitle>Altitude Adjustments</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-sm space-y-2">
                <p><strong>Above 3,000 feet:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Increase liquid by 2-4 tablespoons</li>
                  <li>• Decrease sugar by 1-2 tablespoons</li>
                  <li>• Increase temperature by 15-25°F</li>
                  <li>• Decrease baking time by 5-8 minutes</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Measurements;