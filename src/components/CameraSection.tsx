import { useState } from "react";
import { Camera, Upload, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface CameraSectionProps {
  onImageSelect: (file: File) => void;
}

const CameraSection = ({ onImageSelect }: CameraSectionProps) => {
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageSelect(file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      onImageSelect(file);
    }
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Discover Wildlife Around You
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Capture or upload an animal photo to identify the species and learn about their behavior
        </p>

        <Card 
          className={`p-8 border-2 border-dashed transition-nature cursor-pointer hover:shadow-nature ${
            dragActive ? "border-primary bg-accent/50" : "border-muted hover:border-primary/50"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center shadow-nature">
                <Camera className="w-16 h-16 text-primary-foreground" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-soft">
                <ImageIcon className="w-4 h-4 text-accent-foreground" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">
                Ready to Identify?
              </h3>
              <p className="text-muted-foreground">
                Drop your animal photo here or click to browse
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-nature transition-nature"
              >
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Camera className="w-5 h-5 mr-2" />
                Capture Photo
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-nature"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Upload className="w-5 h-5 mr-2" />
                Upload Image
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CameraSection;