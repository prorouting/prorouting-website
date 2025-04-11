
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  const email = "merchant-support@prorouting.in";
  const address = "28, First Floor, 16th Main, 38th Cross, Jayanagar 4th T Block, Bangalore 560041 Karnataka";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 border rounded-lg shadow-sm bg-white">
              <div className="flex flex-col items-center justify-center gap-4 text-center">
                <Mail className="h-12 w-12 text-primary" />
                <h2 className="text-2xl font-semibold">Email Us</h2>
                <p className="text-muted-foreground mb-4">
                  For any inquiries, please email us at:
                </p>
                <div className="p-4 bg-muted rounded-md font-medium text-primary">
                  {email}
                </div>
                <Button className="mt-4 w-full" asChild>
                  <a href={`mailto:${email}`}>
                    Send Email
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="p-8 border rounded-lg shadow-sm bg-white">
              <div className="flex flex-col items-center justify-center gap-4 text-center">
                <MapPin className="h-12 w-12 text-primary" />
                <h2 className="text-2xl font-semibold">Visit Us</h2>
                <p className="text-muted-foreground mb-4">
                  Our office is located at:
                </p>
                <div className="p-4 bg-muted rounded-md font-medium">
                  {address}
                </div>
                <Button className="mt-4 w-full" variant="outline" asChild>
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer">
                    View on Map
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
