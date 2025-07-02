import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Rooms", href: "/rooms" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-luxury-gold/20">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center">
              <span className="text-luxury-navy font-bold text-lg">L</span>
            </div>
            <span className="font-display text-2xl font-semibold text-luxury-navy">
              Luxora
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-all duration-300 relative group ${
                  isActive(item.href)
                    ? "text-luxury-gold"
                    : "text-luxury-navy hover:text-luxury-gold"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-300 group-hover:w-full ${
                    isActive(item.href) ? "w-full" : ""
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="gold" size="lg">
              Book Now
            </Button>
            <Link to="/admin">
              <Button variant="outline" size="lg">
                Admin
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-luxury-navy hover:bg-luxury-gold/10 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-luxury-gold/20 bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-2 font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-luxury-gold bg-luxury-gold/10"
                      : "text-luxury-navy hover:text-luxury-gold hover:bg-luxury-gold/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4 space-y-2">
                <Button variant="gold" size="lg" className="w-full">
                  Book Now
                </Button>
                <Link to="/admin" className="block">
                  <Button variant="outline" size="lg" className="w-full">
                    Admin
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;