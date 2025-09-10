import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-nature">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-4">
          <TreePine className="w-16 h-16 text-primary mx-auto" />
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">Lost in the Wild?</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Looks like you've wandered off the trail. This page doesn't exist in our wildlife sanctuary.
          </p>
        </div>
        
        <Button 
          asChild 
          size="lg"
          className="bg-gradient-primary hover:shadow-nature transition-nature"
        >
          <a href="/">
            <Home className="w-5 h-5 mr-2" />
            Return to Wildlife Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
