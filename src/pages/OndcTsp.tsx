
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Clock3, Zap } from "lucide-react";

const tspClients = [
  { name: "Swiggy Genie", logo: "Swiggy Genie" },
  { name: "Loadshare Networks", logo: "Loadshare Networks" },
  { name: "Porter", logo: "Porter" },
  { name: "Yulu", logo: "Yulu" },
  { name: "Telyport", logo: "Telyport" },
  { name: "Zypp Electric", logo: "Zypp Electric" },
];

const pastClients = [
  { name: "OLA Logistics", logo: "OLA Logistics" },
  { name: "Pidge", logo: "Pidge" },
];

const OndcTsp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                ONDC <span className="text-gradient">TSP</span> for Logistics
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                As a Technology Service Provider (TSP), we help you go live on the ONDC network and start receiving orders within a week by integrating your API with our already certified tech stack.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="font-medium">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="font-medium">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our TSP Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get up and running on ONDC quickly with our certified technology stack
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Quick Integration</h3>
                  <p className="text-muted-foreground">
                    Go live on ONDC within a week with our pre-certified technology stack
                  </p>
                </CardContent>
              </Card>

              <Card className="border hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">ONDC Certified</h3>
                  <p className="text-muted-foreground">
                    Our technology stack is already certified, saving you time and resources
                  </p>
                </CardContent>
              </Card>

              <Card className="border hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Clock3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                  <p className="text-muted-foreground">
                    Dedicated technical support to ensure your operations run smoothly
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Current TSP Clients */}
        <section className="section-padding">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Current TSP Clients</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trusted by leading logistics service providers for ONDC integration
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {tspClients.map((client) => (
                <Card key={client.name} className="border bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="flex items-center justify-center p-6 h-32">
                    <span className="font-bold text-xl text-center">{client.logo}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Past ONDC LSP Clients */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Past ONDC LSP Clients</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Companies we've successfully onboarded to the ONDC network
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-md mx-auto">
              {pastClients.map((client) => (
                <Card key={client.name} className="border bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="flex items-center justify-center p-6 h-32">
                    <span className="font-bold text-xl text-center">{client.logo}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Join the ONDC Network?
              </h2>
              <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Get your logistics business on ONDC in just one week with our certified tech stack
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="font-medium text-primary">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OndcTsp;
