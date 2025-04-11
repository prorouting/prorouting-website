
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ShippingDelivery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Shipping and Delivery Policy</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">Last updated: April 11, 2025</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Delivery Services</h2>
            <p className="mb-4">
              PROROUTING Technology Private Limited provides logistics orchestration services that connect businesses with multiple logistics partners through a single integration. This policy outlines how our delivery services operate.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Delivery Areas</h2>
            <p className="mb-4">
              Our delivery services are currently available in select cities across India. The availability of delivery services may vary based on location and the availability of logistics partners in your area.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Delivery Times</h2>
            <p className="mb-4">
              Estimated delivery times are provided when you place an order through our platform. These times are estimates and may vary based on various factors, including but not limited to:
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>Distance between pickup and delivery locations</li>
              <li>Traffic conditions</li>
              <li>Weather conditions</li>
              <li>Availability of delivery personnel</li>
              <li>Any unforeseen circumstances</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Delivery Tracking</h2>
            <p className="mb-4">
              We provide real-time tracking of your deliveries through our platform. You can track the status of your delivery from pickup to delivery.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our Shipping and Delivery Policy, please contact us at merchant-support@prorouting.in.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingDelivery;
