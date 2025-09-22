import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🧶</span>
            <h1 className="text-xl font-bold text-foreground">CrochetCraft</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('patterns')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Patterns
            </button>
            <button 
              onClick={() => scrollToSection('tutorials')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Tutorials
            </button>
            <button 
              onClick={() => scrollToSection('reading-patterns')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Reading Patterns
            </button>
          </div>

          <Button variant="secondary" className="hidden md:inline-flex">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;