
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              FreelanceHub
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/find-work" className="text-gray-700 hover:text-primary transition-colors">
              Find Work
            </Link>
            <Link to="/hire" className="text-gray-700 hover:text-primary transition-colors">
              Hire Talent
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-primary transition-colors">
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b border-gray-100">
            <Link
              to="/find-work"
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Find Work
            </Link>
            <Link
              to="/hire"
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Hire Talent
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="block px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              onClick={toggleMenu}
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
