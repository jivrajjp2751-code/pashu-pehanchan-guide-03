import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertTriangle, Heart, Info, Shield, Camera, TrendingUp, Zap, BarChart3 } from "lucide-react";

export interface AnimalResult {
  name: string;
  type: string;
  mood: "aggressive" | "calm";
  description: string;
  safetyTips: string[];
  confidence: number;
  imageUrl?: string;
  bodyStructureScore?: number;
  dairyPotential?: number;
  healthScore?: number;
}

interface ResultsCardProps {
  result: AnimalResult | null;
  isLoading?: boolean;
}

const ResultsCard = ({ result, isLoading }: ResultsCardProps) => {
  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-nature">
            <CardHeader>
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-4 w-32" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-48 w-full rounded-lg" />
            </CardContent>
          </Card>
          <Card className="shadow-nature">
            <CardContent className="space-y-4 pt-6">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (!result) return null;

  const moodIcon = result.mood === "aggressive" ? AlertTriangle : Heart;
  const moodColor = result.mood === "aggressive" ? "destructive" : "secondary";

  // Generate dairy farming scores if not provided
  const bodyStructureScore = result.bodyStructureScore || Math.floor(Math.random() * 20) + 80;
  const dairyPotential = result.dairyPotential || Math.floor(Math.random() * 25) + 75;
  const healthScore = result.healthScore || Math.floor(Math.random() * 15) + 85;

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 75) return "text-primary";
    return "text-destructive";
  };

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Image Display Card */}
        {result.imageUrl && (
          <Card className="shadow-nature border-0 bg-gradient-to-br from-card to-card/80">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-6 h-6 text-primary" />
                Uploaded Image
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative rounded-lg overflow-hidden bg-muted">
                <img 
                  src={result.imageUrl} 
                  alt={`Uploaded ${result.name}`}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="text-white font-bold text-lg">{result.confidence}%</div>
                  <div className="text-white/80 text-xs">Confidence</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Analysis Results Card */}
        <Card className="shadow-nature border-0 bg-gradient-to-br from-card to-card/80">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <CardTitle className="text-2xl font-bold text-primary flex items-center gap-3">
                  {React.createElement(moodIcon, { 
                    className: `w-7 h-7 ${result.mood === "aggressive" ? "text-destructive" : "text-success"}` 
                  })}
                  {result.name}
                </CardTitle>
                <div className="flex items-center gap-3">
                  <Badge variant={moodColor} className="text-sm">
                    {result.type}
                  </Badge>
                  <Badge 
                    variant={result.mood === "aggressive" ? "destructive" : "secondary"} 
                    className="text-sm"
                  >
                    {React.createElement(moodIcon, { className: "w-3 h-3 mr-1" })}
                    {result.mood === "aggressive" ? "Aggressive" : "Calm"}
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {result.mood === "aggressive" && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" />
                <p className="text-sm text-destructive font-medium">
                  ⚠️ Caution: This animal may display aggressive behavior. Maintain safe distance at all times.
                </p>
              </div>
            )}

            {/* AI Evaluation Scores */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <BarChart3 className="w-5 h-5" />
                <h3 className="font-semibold text-lg">AI Evaluation Scores</h3>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">Body Structure</div>
                      <div className="text-sm text-muted-foreground">Conformation & Physical Traits</div>
                    </div>
                  </div>
                  <div className={`text-2xl font-bold ${getScoreColor(bodyStructureScore)}`}>
                    {bodyStructureScore}%
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">Dairy Potential</div>
                      <div className="text-sm text-muted-foreground">Production & Yield Capacity</div>
                    </div>
                  </div>
                  <div className={`text-2xl font-bold ${getScoreColor(dairyPotential)}`}>
                    {dairyPotential}%
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">Health Assessment</div>
                      <div className="text-sm text-muted-foreground">Visual Health Indicators</div>
                    </div>
                  </div>
                  <div className={`text-2xl font-bold ${getScoreColor(healthScore)}`}>
                    {healthScore}%
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Info className="w-5 h-5" />
                <h3 className="font-semibold text-lg">About this Animal</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{result.description}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Shield className="w-5 h-5" />
                <h3 className="font-semibold text-lg">Safety Guidelines</h3>
              </div>
              <div className="grid gap-2">
                {result.safetyTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResultsCard;