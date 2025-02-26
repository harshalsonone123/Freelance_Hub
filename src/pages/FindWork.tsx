
import { Navbar } from "@/components/Navbar";
import { Briefcase, Clock, DollarSign, Search } from "lucide-react";

const FindWork = () => {
  // This would typically come from an API
  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      description: "Looking for an experienced React developer for a long-term project...",
      budget: "$50-70/hr",
      type: "Hourly",
      postedTime: "2 hours ago",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      description: "Need a talented designer to help create modern and intuitive interfaces...",
      budget: "$3000-5000",
      type: "Fixed",
      postedTime: "5 hours ago",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      description: "Seeking a full stack developer with experience in React and Node.js...",
      budget: "$45-65/hr",
      type: "Hourly",
      postedTime: "1 day ago",
    },
  ];

  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Search Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for jobs..."
                  className="pl-10 w-full rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary py-2"
                />
              </div>
              <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h2>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    {job.budget}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1" />
                    {job.type}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {job.postedTime}
                  </div>
                </div>
                <div className="mt-4">
                  <button className="bg-white text-primary border border-primary px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors">
                    Apply Now
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

export default FindWork;
