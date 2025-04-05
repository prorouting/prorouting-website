
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Abey Zachariah",
    role: "CoFounder and CEO",
    bio: "Experienced entrepreneur with a passion for logistics innovation and supply chain optimization.",
    photo: "https://i.pravatar.cc/300?img=1", // Placeholder image
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Mahesh Herle",
    role: "CoFounder and CTO",
    bio: "Technology expert specializing in API development, systems integration, and scalable architectures.",
    photo: "https://i.pravatar.cc/300?img=2", // Placeholder image
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  },
];

const About = () => {
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
                About <span className="text-gradient">PROROUTING</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                We're building the Razorpay of Logistics. Our mission is to simplify hyperlocal logistics through ONDC integration and provide seamless delivery experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p>
                  Founded with the vision to revolutionize logistics delivery in India, PROROUTING Technology Private Limited is at the forefront of logistics innovation through the Open Network for Digital Commerce (ONDC).
                </p>
                <p>
                  Our platform connects businesses with multiple logistics providers through a single API, simplifying the complex logistics landscape and enabling faster, more efficient deliveries nationwide.
                </p>
                <p>
                  As a certified Technology Service Provider (TSP) for the ONDC network, we help logistics companies go live on ONDC within a week, leveraging our pre-certified technology stack to accelerate their digital transformation journey.
                </p>
                <p className="font-medium mt-6">
                  CIN: U52290KA2025PTC197673
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="section-padding">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the founders driving innovation in logistics technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member) => (
                <Card key={member.name} className="border hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6 flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                      <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-2">{member.role}</p>
                      <p className="text-muted-foreground mb-3">{member.bio}</p>
                      <div className="flex gap-3">
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <Twitter size={18} />
                        </a>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <Linkedin size={18} />
                        </a>
                      </div>
                    </div>
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
                Join Us in Transforming Logistics
              </h2>
              <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Partner with PROROUTING to simplify your logistics operations and deliver exceptional customer experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="font-medium text-primary">
                  Contact Us
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Join Our Team
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

export default About;
