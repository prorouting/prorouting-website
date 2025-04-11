
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CancellationRefund = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Cancellation and Refund Policy</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">Last updated: April 11, 2025</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Cancellation Policy</h2>
            <p className="mb-4">
              You may cancel your subscription to our services by contacting our customer support team. The cancellation will be effective at the end of your current billing cycle.
            </p>
            
            <div className="p-6 bg-red-50 border border-red-200 rounded-lg my-8">
              <h2 className="text-2xl font-semibold mb-4 text-red-700">Refund Policy</h2>
              <p className="text-red-700 font-medium text-lg">
                There is no refund available for our services. All payments made are non-refundable.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our Cancellation and Refund Policy, please contact us at merchant-support@prorouting.in.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CancellationRefund;
