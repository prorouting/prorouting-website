
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Truck, Zap, BarChart3, Shield, Clock } from "lucide-react";

const features = [
  {
    title: "ONDC Integration",
    description: "Seamlessly connect with the Open Network for Digital Commerce ecosystem",
    icon: Globe,
  },
  {
    title: "Single API",
    description: "One integration to access multiple logistics providers",
    icon: Zap,
  },
  {
    title: "Smart Routing",
    description: "Intelligent algorithm to select the best logistics partner for each delivery",
    icon: Truck,
  },
  {
    title: "Real-time Analytics",
    description: "Comprehensive dashboards with actionable insights",
    icon: BarChart3,
  },
  {
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guarantee",
    icon: Shield,
  },
  {
    title: "Fast Delivery",
    description: "Optimize for speed with hyperlocal logistics providers",
    icon: Clock,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform offers everything you need to optimize your logistics operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
