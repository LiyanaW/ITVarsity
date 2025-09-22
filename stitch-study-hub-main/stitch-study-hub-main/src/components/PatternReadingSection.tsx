import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PatternReadingSection = () => {
  const abbreviations = [
    { abbrev: "ch", meaning: "chain" },
    { abbrev: "sc", meaning: "single crochet" },
    { abbrev: "hdc", meaning: "half double crochet" },
    { abbrev: "dc", meaning: "double crochet" },
    { abbrev: "tr", meaning: "triple crochet" },
    { abbrev: "sl st", meaning: "slip stitch" },
    { abbrev: "yo", meaning: "yarn over" },
    { abbrev: "rep", meaning: "repeat" },
    { abbrev: "st(s)", meaning: "stitch(es)" },
    { abbrev: "rnd", meaning: "round" },
    { abbrev: "blo", meaning: "back loop only" },
    { abbrev: "flo", meaning: "front loop only" }
  ];

  const symbols = [
    { symbol: "( )", meaning: "Work instructions within parentheses as many times as specified" },
    { symbol: "[ ]", meaning: "Work instructions within brackets as a group" },
    { symbol: "*", meaning: "Repeat the instructions following the asterisk" },
    { symbol: "**", meaning: "Repeat instructions between asterisks" }
  ];

  return (
    <section id="reading-patterns" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How to Read Crochet Patterns
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Decode crochet patterns like a pro! Learn the abbreviations, symbols, 
            and conventions that will help you follow any pattern with confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                📝 Common Abbreviations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {abbreviations.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded border border-border">
                    <Badge variant="outline" className="font-mono font-bold">
                      {item.abbrev}
                    </Badge>
                    <span className="text-muted-foreground">{item.meaning}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                🔤 Pattern Symbols
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {symbols.map((item, index) => (
                  <div key={index} className="p-4 rounded border border-border">
                    <div className="font-bold text-primary text-lg mb-2">{item.symbol}</div>
                    <p className="text-muted-foreground text-sm">{item.meaning}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">
              🎯 Reading Pattern Example
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-6 rounded-lg mb-6">
              <code className="text-sm">
                Row 1: Ch 20, sc in 2nd ch from hook and in each ch across. (19 sc)<br/>
                Row 2: Ch 1, turn, sc in each st across. (19 sc)<br/>
                Rows 3-10: Rep Row 2.<br/>
                *Sc in next 2 sts, 2 sc in next st; rep from * across.
              </code>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Let's break this down:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Row 1:</strong> Make 20 chains, then single crochet starting from the 2nd chain</li>
                  <li><strong>(19 sc):</strong> Stitch count - you should have 19 single crochets</li>
                  <li><strong>Ch 1, turn:</strong> Chain 1 and turn your work for the next row</li>
                  <li><strong>Rep Row 2:</strong> Repeat the instructions from Row 2</li>
                  <li><strong>* to *:</strong> Repeat everything between the asterisks</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-16 text-center">
          <Card className="inline-block border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">💡 Pro Tip</h3>
              <p className="text-muted-foreground">
                Always read through the entire pattern before starting. 
                Check for any special stitches or techniques you might need to learn first!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PatternReadingSection;