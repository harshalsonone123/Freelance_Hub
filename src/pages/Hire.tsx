
import { Navbar } from "@/components/Navbar";

const Hire = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Hire Talent</h1>
          {/* We'll implement the full hiring interface in the next iteration */}
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Hire;
