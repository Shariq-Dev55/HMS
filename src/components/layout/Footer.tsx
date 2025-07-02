import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-luxury-navy text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-luxury-navy font-bold text-lg">L</span>
              </div>
              <span className="font-display text-2xl font-semibold">
                Luxora
              </span>
            </div>
            <p className="text-luxury-cream/80 leading-relaxed">
              Experience unparalleled luxury and sophistication at Luxora Hotel.
              Where every moment becomes a cherished memory.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-luxury-gold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Rooms", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-luxury-cream/80 hover:text-luxury-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-luxury-gold">
              Services
            </h3>
            <ul className="space-y-2">
              {["Luxury Spa", "Fine Dining", "Concierge", "Room Service"].map((service) => (
                <li key={service}>
                  <span className="text-luxury-cream/80 hover:text-luxury-gold transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-luxury-gold">
              Contact
            </h3>
            <div className="space-y-2 text-luxury-cream/80">
              <p>123 Luxury Avenue</p>
              <p>Beverly Hills, CA 90210</p>
              <p>+1 (555) 123-4567</p>
              <p>hello@luxora.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-luxury-cream/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-luxury-cream/60 text-sm">
            © 2024 Luxora Hotel. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-luxury-cream/60 hover:text-luxury-gold text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-luxury-cream/60 hover:text-luxury-gold text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;