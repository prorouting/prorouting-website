
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms and Conditions</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">Last updated: April 11, 2025</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
            <p className="mb-4">
              These terms and conditions govern your use of the PROROUTING Technology Private Limited website and services. By accessing our website or using our services, you agree to be bound by these terms and conditions.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Services</h2>
            <p className="mb-4">
              The use of our services is subject to the following conditions:
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>You must provide accurate, current, and complete information when using our services.</li>
              <li>You are responsible for maintaining the confidentiality of your account information.</li>
              <li>You agree to use our services only for lawful purposes and in accordance with these terms.</li>
              <li>You agree not to use our services in any way that could damage, disable, or impair the services.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
            <p className="mb-4">
              The content, design, and functionality of our website and services are owned by PROROUTING Technology Private Limited and are protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works based on our content without our express written permission.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall PROROUTING Technology Private Limited be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of or in connection with your use of our services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms and conditions at any time. We will provide notice of any material changes by posting the new terms on our website. Your continued use of our services after such modifications will constitute your acknowledgment and agreement to the modified terms.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms and Conditions, please contact us at merchant-support@prorouting.in.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
