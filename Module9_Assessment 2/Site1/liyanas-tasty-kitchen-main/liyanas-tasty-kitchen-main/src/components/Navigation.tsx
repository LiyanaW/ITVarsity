import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/recipes", label: "Recipes" },
    { path: "/ingredients", label: "Organic Ingredients" },
    { path: "/measurements", label: "Measurements" },
  ];

  return (
    <nav className="bg-card border-b border-border shadow-warm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-warm bg-clip-text text-transparent">
            Liyana's Tasty Treats
          </Link>
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  className="text-foreground hover:bg-secondary"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;