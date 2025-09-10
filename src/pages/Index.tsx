import { useState } from "react";
import Navigation from "@/components/Navigation";
import LandingHero from "@/components/LandingHero";
import CameraSection from "@/components/CameraSection";
import ResultsCard from "@/components/ResultsCard";
import { useToast } from "@/hooks/use-toast";
import { classifyImage } from "@/lib/classifier";

// Sample data to demonstrate the results card
const sampleResults = [
  {
    name: "Bengal Tiger",
    type: "Big Cat",
    mood: "aggressive" as const,
    description: "The Bengal tiger is a large carnivore native to the Indian subcontinent. Known for their distinctive orange coat with black stripes, they are powerful predators that primarily hunt deer, wild boar, and other large mammals.",
    safetyTips: [
      "Never approach or attempt to feed wild tigers",
      "Maintain at least 100 meters distance at all times",
      "Make noise to avoid surprising the animal",
      "Back away slowly if encountered, never run",
      "Report sightings to local wildlife authorities"
    ],
    confidence: 94
  },
  {
    name: "Indian Elephant",
    type: "Herbivore",
    mood: "calm" as const,
    description: "Asian elephants are gentle giants native to Asia. They are highly intelligent, social animals that live in family groups. These herbivores play a crucial role in maintaining forest ecosystems by dispersing seeds.",
    safetyTips: [
      "Respect their space and observe from a distance",
      "Never feed wild elephants human food",
      "Stay quiet and move slowly around them",
      "Be aware that mothers with calves can be protective"
    ],
    confidence: 88
  }
];

const Index = () => {
  const [selectedResult, setSelectedResult] = useState<typeof sampleResults[0] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleImageSelect = async (file: File) => {
    setIsLoading(true);
    try {
      const result = await classifyImage(file);
      setSelectedResult(result);
      toast({
        title: "Analysis Complete!",
        description: `Identified: ${result.name} (${result.confidence}%)`,
      });
    } catch (error) {
      console.error("Classification failed:", error);
      const fallback = sampleResults[Math.floor(Math.random() * sampleResults.length)];
      setSelectedResult(fallback);
      toast({
        title: "Using demo mode",
        description: `Classifier not available. Showing sample: ${fallback.name}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-nature">
      <Navigation />
      
      <main className="pb-12">
        {!selectedResult && !isLoading && <LandingHero />}
        <CameraSection onImageSelect={handleImageSelect} />
        
        {(selectedResult || isLoading) && (
          <section className="px-4 py-8">
            <ResultsCard result={selectedResult} isLoading={isLoading} />
          </section>
        )}
        
        {/* Footer */}
        <footer className="mt-16 py-8 px-4 text-center">
          <p className="text-muted-foreground text-sm">
            PashuPehachan - Connecting you with wildlife through AI-powered livestock analysis
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Advanced cattle classification for modern dairy farming
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
