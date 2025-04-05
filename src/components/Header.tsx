
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">PROROUTING</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link to="/#clients" className="text-sm font-medium hover:text-primary transition-colors">
              Clients
            </Link>
            <Link to="/#partners" className="text-sm font-medium hover:text-primary transition-colors">
              Partners
            </Link>
            <Link to="/ondc-tsp" className="text-sm font-medium hover:text-primary transition-colors">
              ONDC TSP
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Button variant="default" size="sm">
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link 
              to="/#features" 
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/#clients" 
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Clients
            </Link>
            <Link 
              to="/#partners" 
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Partners
            </Link>
            <Link 
              to="/ondc-tsp" 
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              ONDC TSP
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Button variant="default" size="sm" className="w-full">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
