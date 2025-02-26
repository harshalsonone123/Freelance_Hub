
import { Navbar } from "@/components/Navbar";
import { UserRoundPlus, Star, MessagesSquare, Shield } from "lucide-react";

const Hire = () => {
  // This would typically come from an API
  const freelancers = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Full Stack Developer",
      skills: ["React", "Node.js", "TypeScript"],
      rate: "$65/hr",
      rating: 4.9,
      reviews: 47,
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "UI/UX Designer",
      skills: ["Figma", "Adobe XD", "User Research"],
      rate: "$55/hr",
      rating: 4.8,
      reviews: 32,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Frontend Developer",
      skills: ["React", "Vue.js", "CSS"],
      rate: "$45/hr",
      rating: 4.7,
      reviews: 28,
    },
  ];

  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Find the Perfect Freelancer</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with talented professionals who can bring your projects to life
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg text-center">
              <UserRoundPlus className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Verified Professionals</h3>
              <p className="text-gray-600">Access pre-vetted talent ready to start</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Secure Hiring</h3>
              <p className="text-gray-600">Protected payments and agreements</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <MessagesSquare className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Easy Communication</h3>
              <p className="text-gray-600">Direct messaging with candidates</p>
            </div>
          </div>

          {/* Freelancer Listings */}
          <div className="space-y-6">
            {freelancers.map((freelancer) => (
              <div key={freelancer.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">{freelancer.name}</h2>
                    <p className="text-gray-600 mb-2">{freelancer.title}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {freelancer.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <div className="text-lg font-semibold text-primary mb-1">{freelancer.rate}</div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      {freelancer.rating} ({freelancer.reviews} reviews)
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex gap-4">
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    Hire Now
                  </button>
                  <button className="bg-white text-primary border border-primary px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;
