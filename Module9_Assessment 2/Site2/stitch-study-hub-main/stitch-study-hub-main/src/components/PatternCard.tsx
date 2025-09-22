import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PatternCardProps {
  title: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  time: string;
  description: string;
  image?: string;
}

const PatternCard = ({ title, difficulty, time, description, image }: PatternCardProps) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-accent text-accent-foreground";
      case "Intermediate": return "bg-primary text-primary-foreground";
      case "Advanced": return "bg-yarn-pink text-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-border hover:border-primary/50">
      {image && (
        <div className="aspect-square overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg text-foreground">{title}</CardTitle>
          <Badge className={getDifficultyColor(difficulty)}>
            {difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm mb-3">{description}</p>
        <div className="flex items-center text-xs text-muted-foreground">
          <span className="mr-1">⏱️</span>
          <span>{time}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PatternCard;