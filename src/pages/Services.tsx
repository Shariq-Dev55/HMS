import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import spaLuxury from "@/assets/spa-luxury.jpg";
import restaurantDining from "@/assets/restaurant-dining.jpg";
import luxurySuite from "@/assets/luxury-suite.jpg";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Luxury Spa & Wellness",
      image: spaLuxury,
      description: "Indulge in our world-class spa featuring therapeutic treatments, massage therapy, and wellness programs designed to rejuvenate your body and mind.",
      features: [
        "Therapeutic Massage Treatments",
        "Facial & Skincare Services", 
        "Hydrotherapy & Steam Rooms",
        "Personal Wellness Consultations",
        "Yoga & Meditation Classes"
      ],
      pricing: "Treatments from $150"
    },
    {
      id: 2,
      name: "Fine Dining & Culinary",
      image: restaurantDining,
      description: "Experience culinary excellence with our Michelin-starred restaurant, rooftop bar, and 24-hour room service featuring locally sourced ingredients.",
      features: [
        "Michelin-Starred Restaurant",
        "Rooftop Bar & Lounge",
        "24-Hour Room Service",
        "Private Dining Experiences",
        "Wine Tasting & Sommelier Services"
      ],
      pricing: "Prix fixe from $85"
    },
    {
      id: 3,
      name: "Concierge & Personal Services",
      image: luxurySuite,
      description: "Our dedicated concierge team provides personalized services to enhance your stay and help you discover the best of Beverly Hills.",
      features: [
        "Personal Concierge Services",
        "Transportation Arrangements",
        "Event Planning & Coordination",
        "Shopping & Entertainment Booking",
        "Business Center & Meeting Rooms"
      ],
      pricing: "Complimentary for guests"
    },
    {
      id: 4,
      name: "Recreation & Fitness",
      image: luxurySuite,
      description: "Stay active and energized with our state-of-the-art fitness facilities, pool areas, and recreational activities.",
      features: [
        "24-Hour Fitness Center",
        "Rooftop Pool & Sundeck",
        "Personal Training Sessions",
        "Tennis Court Access",
        "Recreational Equipment Rental"
      ],
      pricing: "Included with stay"
    },
    {
      id: 5,
      name: "Business & Events",
      image: restaurantDining,
      description: "Host successful meetings, conferences, and special events in our elegant venues with comprehensive business services.",
      features: [
        "Executive Meeting Rooms",
        "Grand Ballroom for Events",
        "Audio/Visual Equipment",
        "Catering & Event Planning",
        "High-Speed Internet & WiFi"
      ],
      pricing: "Packages from $500"
    },
    {
      id: 6,
      name: "Exclusive Experiences",
      image: spaLuxury,
      description: "Create unforgettable memories with our curated exclusive experiences and luxury amenities available only to our guests.",
      features: [
        "Helicopter Tours",
        "Private Beach Access",
        "Luxury Car Service",
        "VIP Entertainment Tickets",
        "Customized Experience Packages"
      ],
      pricing: "Pricing on request"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-gradient-luxury">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-4">
            Luxury Services
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90">
            Exceptional amenities designed for your ultimate comfort
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-luxury-navy mb-4">
              World-Class Amenities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive collection of luxury services and amenities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden shadow-elegant hover:shadow-luxury transition-all duration-300">
                <div className="relative h-64">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-luxury-gold text-luxury-navy px-3 py-1 rounded-full font-semibold text-sm">
                    {service.pricing}
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-semibold mb-4 text-luxury-navy">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-luxury-navy mb-3">Featured Services:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="luxury" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Hours */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-luxury-navy mb-4">
              Service Hours
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to service excellence around the clock
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { service: "Concierge", hours: "24/7" },
              { service: "Room Service", hours: "24/7" },
              { service: "Spa & Wellness", hours: "6 AM - 10 PM" },
              { service: "Fine Dining", hours: "6 AM - 11 PM" },
              { service: "Fitness Center", hours: "24/7" },
              { service: "Pool & Recreation", hours: "6 AM - 10 PM" },
              { service: "Business Center", hours: "24/7" },
              { service: "Valet Parking", hours: "24/7" }
            ].map((item, index) => (
              <Card key={index} className="text-center shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-luxury-navy mb-2">{item.service}</h3>
                  <p className="text-luxury-gold font-medium">{item.hours}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-luxury">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Experience Luxury Service
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book your stay and enjoy access to all our world-class amenities and services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl">
              Reserve Now
            </Button>
            <Button variant="elegant" size="xl">
              Contact Concierge
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;