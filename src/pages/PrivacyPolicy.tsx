
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">Last updated: April 11, 2025</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
            <p className="mb-4">
              PROROUTING Technology Private Limited ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you how we collect, use, and safeguard your personal information when you visit our website or use our services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <p className="mb-4">
              We may collect various types of information from you, including:
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>Personal identification information (Name, email address, phone number, etc.)</li>
              <li>Business information (Company name, address, etc.)</li>
              <li>Technical data (IP address, browser information, device information)</li>
              <li>Usage data (how you use our website and services)</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>Providing and maintaining our services</li>
              <li>Notifying you about changes to our services</li>
              <li>Providing customer support</li>
              <li>Gathering analysis or valuable information to improve our services</li>
              <li>Monitoring the usage of our services</li>
              <li>Detecting, preventing, and addressing technical issues</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
            <p className="mb-4">
              The security of your data is important to us. We implement appropriate security measures to protect your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at merchant-support@prorouting.in.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
