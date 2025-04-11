
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const partners = [
  { name: "OLA Logistics", logo: "/logos/ola-logistics.png" },
  { name: "Swiggy Genie", logo: "/logos/swiggy-genie.png" },
  { name: "Porter", logo: "/logos/porter.png" },
  { name: "Shadowfax", logo: "/logos/shadowfax.png" },
  { name: "Loadshare", logo: "/logos/loadshare.png" },
  { name: "Magicfleet", logo: "/logos/magicfleet.png" },
  { name: "Qwqer", logo: "/logos/qwqer.png" },
  { name: "Zypp", logo: "/logos/zypp.png" },
  { name: "Yulu", logo: "/logos/yulu.png" },
  { name: "Telyport", logo: "/logos/telyport.png" },
  { name: "Pidge", logo: "/logos/pidge.png" },
  { name: "Adloggs", logo: "/logos/adloggs.png" },
  { name: "Shiprocket Quick", logo: "/logos/shiprocket-quick.png" },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Logistics Network</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access the widest network of delivery partners through a single integration. Optimize delivery time and cost.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {partners.map((partner) => (
            <Card key={partner.name} className="border bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <CardContent className={cn(
                "flex items-center justify-center p-6 h-32",
                "relative" // Add relative positioning for the image
              )}>
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentNode as HTMLElement;
                    const fallback = document.createElement('span');
                    fallback.className = 'font-bold text-xl text-center';
                    fallback.textContent = partner.name;
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

export default PartnersSection;
