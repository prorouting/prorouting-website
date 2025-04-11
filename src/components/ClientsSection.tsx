
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const clients = [
  { name: "Tata 1MG", logo: "/logos/tata1mg.png" },
  { name: "Apollo24x7", logo: "/logos/apollo24x7.png" },
  { name: "Rebelfoods", logo: "/logos/rebelfoods.png" },
  { name: "Shiprocket", logo: "/logos/shiprocket.png" },
  { name: "Adloggs", logo: "/logos/adloggs.png" },
  { name: "Pidge", logo: "/logos/pidge.png" },
  { name: "Maruti", logo: "/logos/maruti.png" },
];

const ClientsSection = () => {
  return (
    <section id="clients" className="bg-muted/50 section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We partner with some of the biggest names in healthcare, e-commerce, and logistics to optimize their delivery operations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
          {clients.map((client) => (
            <Card key={client.name} className="border bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <CardContent className={cn(
                "flex items-center justify-center p-6 h-32",
                "relative" // Add relative positioning for the image
              )}>
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentNode as HTMLElement;
                    const fallback = document.createElement('span');
                    fallback.className = 'font-bold text-xl text-center';
                    fallback.textContent = client.name;
                    parent.appendChild(fallback);
                  }} 
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
