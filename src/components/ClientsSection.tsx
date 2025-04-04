
import { Card, CardContent } from "@/components/ui/card";

const clients = [
  { name: "Tata 1MG", logo: "Tata 1MG" },
  { name: "Apollo24x7", logo: "Apollo24x7" },
  { name: "Rebelfoods", logo: "Rebelfoods" },
  { name: "Shiprocket", logo: "Shiprocket" },
  { name: "Adloggs", logo: "Adloggs" },
  { name: "Pidge", logo: "Pidge" },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client) => (
            <Card key={client.name} className="border bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <CardContent className="flex items-center justify-center p-6 h-32">
                <span className="font-bold text-xl text-center">{client.logo}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
