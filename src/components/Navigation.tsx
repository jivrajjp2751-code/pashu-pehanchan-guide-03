import { User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="w-full bg-gradient-nature border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Profile Icon */}
          <Button 
            variant="ghost" 
            size="icon"
            className="text-primary hover:bg-accent rounded-full transition-nature"
          >
            <User className="h-6 w-6" />
          </Button>

          {/* Website Name */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-primary tracking-wide">
              PashuPehachan
            </h1>
            <p className="text-xs text-muted-foreground">
              Animal Recognition
            </p>
          </div>

          {/* Empty space for symmetry */}
          <div className="w-10 h-10" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;