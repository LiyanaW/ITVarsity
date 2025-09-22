const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🧶</span>
              <h3 className="text-xl font-bold">CrochetCraft</h3>
            </div>
            <p className="text-background/80 text-sm">
              Your ultimate destination for crochet patterns, tutorials, and inspiration. 
              Crafting beautiful memories, one stitch at a time.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#patterns" className="hover:text-background transition-colors">Patterns</a></li>
              <li><a href="#tutorials" className="hover:text-background transition-colors">Tutorials</a></li>
              <li><a href="#reading-patterns" className="hover:text-background transition-colors">Reading Patterns</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Skill Levels</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Beginner Friendly</li>
              <li>Intermediate Projects</li>
              <li>Advanced Techniques</li>
              <li>All Ages Welcome</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Pattern Sharing</li>
              <li>Tips & Tricks</li>
              <li>Project Gallery</li>
              <li>Help & Support</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 CrochetCraft. Made with ❤️ for the crochet community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;