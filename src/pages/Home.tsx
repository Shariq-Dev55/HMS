import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroLobby from "@/assets/hero-lobby.jpg";
import luxurySuite from "@/assets/luxury-suite.jpg";
import spaLuxury from "@/assets/spa-luxury.jpg";
import restaurantDining from "@/assets/restaurant-dining.jpg";

const Home = () => {
  const rooms = [
    {
      id: 1,
      name: "Presidential Suite",
      image: luxurySuite,
      price: "$1,200",
      features: ["Ocean View", "Private Balcony", "King Bed", "Marble Bath"]
    },
    {
      id: 2,
      name: "Luxury Ocean View",
      image: luxurySuite,
      price: "$800",
      features: ["Ocean View", "Queen Bed", "Sitting Area", "Premium Amenities"]
    },
    {
      id: 3,
      name: "Executive Suite",
      image: luxurySuite,
      price: "$600",
      features: ["City View", "Work Space", "King Bed", "Luxury Bath"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Travel Blogger",
      content: "Absolutely stunning hotel with impeccable service. Every detail was perfect!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Business Executive", 
      content: "The perfect blend of luxury and comfort. Exceeded all expectations.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Wedding Planner",
      content: "Luxora provided the most magical setting for our clients' special day.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroLobby})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Welcome to <span className="text-luxury-gold">Luxora</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-slide-up">
            Experience unparalleled luxury and sophistication in the heart of Beverly Hills
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button variant="hero" size="xl">
              Book Your Stay
            </Button>
            <Button variant="elegant" size="xl">
              Explore Suites
            </Button>
          </div>
        </div>
      </section>

      {/* Rooms Showcase */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-luxury-navy mb-4">
              Luxury Accommodations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our collection of meticulously designed suites and rooms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <Card key={room.id} className="overflow-hidden shadow-elegant hover:shadow-luxury transition-all duration-300 transform hover:scale-105">
                <div className="relative h-64">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-luxury-gold text-luxury-navy px-3 py-1 rounded-full font-semibold">
                    {room.price}/night
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-2xl font-semibold mb-4 text-luxury-navy">
                    {room.name}
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="luxury" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-luxury-navy mb-4">
              World-Class Amenities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Indulge in our exceptional services designed for your comfort and pleasure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-elegant">
              <img 
                src={spaLuxury} 
                alt="Luxury Spa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-luxury/60 flex items-end">
                <div className="p-8 text-primary-foreground">
                  <h3 className="font-display text-3xl font-semibold mb-2">Rejuvenating Spa</h3>
                  <p className="text-lg opacity-90">Unwind with our world-class spa treatments</p>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-elegant">
              <img 
                src={restaurantDining} 
                alt="Fine Dining"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-luxury/60 flex items-end">
                <div className="p-8 text-primary-foreground">
                  <h3 className="font-display text-3xl font-semibold mb-2">Fine Dining</h3>
                  <p className="text-lg opacity-90">Exquisite cuisine crafted by master chefs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-luxury-navy mb-4">
              Guest Experiences
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear what our valued guests have to say about their stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-elegant">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-luxury-gold rounded-full mr-1" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-luxury-navy">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
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
            Ready for Your Luxury Escape?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book now and experience the epitome of luxury hospitality
          </p>
          <Button variant="gold" size="xl">
            Reserve Your Suite Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;