
import { ArrowRight, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  // WhatsApp message URL for business delivery services
  const whatsappUrl = "https://wa.me/919113058973?text=I'm%20interested%20in%20availing%20delivery%20services%20for%20my%20business.%20How%20can%20you%20help%20us%3F";
  
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            The <span className="text-gradient">Logistics Orchestrator Engine</span> for Quick Commerce and more
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Simplifying hyperlocal logistics through ONDC integration. Connect with multiple logistics partners through a single API.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-medium" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="font-medium" asChild>
              <a href="https://app.prorouting.in" target="_blank" rel="noopener noreferrer">
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-4xl rounded-xl border bg-background/60 shadow-lg backdrop-blur-sm">
            <div className="absolute -top-3 -left-3 h-14 w-14 rounded-full bg-primary flex items-center justify-center">
              <div className="text-white font-bold text-sm">ONDC</div>
            </div>
            <div className="p-8">
              <div className="flex flex-wrap items-center justify-center gap-8">
                <div className="h-10 w-auto opacity-70 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0">
                  <span className="font-semibold text-xl">Quick Delivery</span>
                </div>
                <div className="h-10 w-auto opacity-70 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0">
                  <span className="font-semibold text-xl">One Integration</span>
                </div>
                <div className="h-10 w-auto opacity-70 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0">
                  <span className="font-semibold text-xl">Real-time Tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
