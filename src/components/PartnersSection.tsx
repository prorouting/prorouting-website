
import { Card, CardContent } from "@/components/ui/card";

const partners = [
  { name: "OLA Logistics", logo: "OLA Logistics" },
  { name: "Swiggy Genie", logo: "Swiggy Genie" },
  { name: "Porter", logo: "Porter" },
  { name: "Shadowfax", logo: "Shadowfax" },
  { name: "Loadshare", logo: "Loadshare" },
  { name: "Magicfleet", logo: "Magicfleet" },
  { name: "Qwqer", logo: "Qwqer" },
  { name: "Zypp", logo: "Zypp" },
  { name: "Yulu", logo: "Yulu" },
  { name: "Telyport", logo: "Telyport" },
  { name: "Pidge", logo: "Pidge" },
  { name: "Adloggs", logo: "Adloggs" },
  { name: "Shiprocket Quick", logo: "Shiprocket Quick" },
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
              <CardContent className="flex items-center justify-center p-6 h-32">
                <span className="font-bold text-xl text-center">{partner.logo}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
