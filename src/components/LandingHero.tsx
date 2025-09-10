import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Zap, BarChart3 } from "lucide-react";

const LandingHero = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Body Structure Analysis",
      description: "AI evaluates cattle conformation, udder quality, and physical traits"
    },
    {
      icon: TrendingUp, 
      title: "Dairy Production Optimization",
      description: "Predict milk yield potential and identify high-performing cattle"
    },
    {
      icon: Shield,
      title: "Health Monitoring", 
      description: "Early detection of health issues through visual analysis"
    },
    {
      icon: Zap,
      title: "Instant Classification",
      description: "Real-time breed identification and trait scoring"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-nature">
      <div className="max-w-6xl mx-auto">
        {/* Hero Content */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            🐄 Automated Trait Classification
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Revolutionizing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
              Dairy Farming
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            PashuPehachan uses advanced AI to analyze cattle traits, predict dairy performance, 
            and optimize farm productivity through intelligent visual assessment.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-nature hover:shadow-lg transition-nature">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Importance Section */}
        <Card className="bg-gradient-warm border-0 shadow-nature">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Why ATC Matters in Dairy Farming
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-success-foreground rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Genetic Selection</h4>
                      <p className="text-muted-foreground">Identify superior genetics for breeding programs and improve herd quality</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-success-foreground rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Economic Efficiency</h4>
                      <p className="text-muted-foreground">Reduce costs and maximize ROI through data-driven decisions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-success-foreground rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Objective Assessment</h4>
                      <p className="text-muted-foreground">Remove human bias with consistent, accurate AI evaluation</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">25%</div>
                  <p className="text-muted-foreground mb-4">Average increase in milk production</p>
                  <div className="text-3xl font-bold text-success mb-2">30%</div>
                  <p className="text-muted-foreground mb-4">Reduction in breeding costs</p>
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <p className="text-muted-foreground">Classification accuracy</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LandingHero;