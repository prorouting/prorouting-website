
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  const email = "merchant-support@prorouting.in";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h1>
          
          <div className="max-w-md mx-auto p-8 border rounded-lg shadow-sm bg-white">
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
