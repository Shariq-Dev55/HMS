import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import luxurySuite from "@/assets/luxury-suite.jpg";

const Rooms = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const rooms = [
    {
      id: 1,
      name: "Presidential Suite",
      image: luxurySuite,
      price: 1200,
      category: "suite",
      size: 1200,
      guests: 4,
      beds: "1 King Bed",
      view: "Ocean View",
      amenities: ["Private Balcony", "Marble Bath", "Butler Service", "Dining Area"],
      description: "The epitome of luxury with panoramic ocean views and exclusive amenities."
    },
    {
      id: 2,
      name: "Royal Ocean Suite",
      image: luxurySuite,
      price: 950,
      category: "suite",
      size: 900,
      guests: 3,
      beds: "1 King Bed",
      view: "Ocean View",
      amenities: ["Ocean Balcony", "Separate Living Room", "Premium Minibar"],
      description: "Spacious suite with breathtaking ocean views and premium furnishings."
    },
    {
      id: 3,
      name: "Executive Suite",
      image: luxurySuite,
      price: 750,
      category: "suite",
      size: 700,
      guests: 2,
      beds: "1 King Bed",
      view: "City View",
      amenities: ["Work Space", "Luxury Bath", "City Skyline View"],
      description: "Perfect for business travelers seeking luxury and functionality."
    },
    {
      id: 4,
      name: "Deluxe Ocean Room",
      image: luxurySuite,
      price: 600,
      category: "deluxe",
      size: 500,
      guests: 2,
      beds: "1 King Bed",
      view: "Ocean View",
      amenities: ["Ocean View", "Premium Amenities", "Marble Bathroom"],
      description: "Elegant room with stunning ocean views and luxury finishes."
    },
    {
      id: 5,
      name: "Deluxe City Room",
      image: luxurySuite,
      price: 450,
      category: "deluxe",
      size: 450,
      guests: 2,
      beds: "1 Queen Bed",
      view: "City View",
      amenities: ["City View", "Modern Furnishings", "Luxury Linens"],
      description: "Sophisticated room overlooking the city with modern amenities."
    },
    {
      id: 6,
      name: "Classic Luxury Room",
      image: luxurySuite,
      price: 350,
      category: "classic",
      size: 400,
      guests: 2,
      beds: "1 Queen Bed",
      view: "Garden View",
      amenities: ["Garden View", "Classic Décor", "Premium Comfort"],
      description: "Timeless elegance with garden views and classic luxury touches."
    }
  ];

  const filters = [
    { id: "all", label: "All Rooms", count: rooms.length },
    { id: "suite", label: "Suites", count: rooms.filter(r => r.category === "suite").length },
    { id: "deluxe", label: "Deluxe", count: rooms.filter(r => r.category === "deluxe").length },
    { id: "classic", label: "Classic", count: rooms.filter(r => r.category === "classic").length }
  ];

  const filteredRooms = selectedFilter === "all" 
    ? rooms 
    : rooms.filter(room => room.category === selectedFilter);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-gradient-luxury">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-4">
            Luxury Accommodations
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90">
            Discover our collection of elegantly appointed rooms and suites
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? "luxury" : "outline"}
                onClick={() => setSelectedFilter(filter.id)}
                className="flex items-center gap-2"
              >
                {filter.label}
                <Badge variant="secondary" className="bg-luxury-gold text-luxury-navy">
                  {filter.count}
                </Badge>
              </Button>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground">
              Showing {filteredRooms.length} room{filteredRooms.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredRooms.map((room) => (
              <Card key={room.id} className="overflow-hidden shadow-elegant hover:shadow-luxury transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-full">
                    <img 
                      src={room.image} 
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-luxury-gold text-luxury-navy px-3 py-1 rounded-full font-semibold">
                      ${room.price}/night
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-display text-xl font-semibold text-luxury-navy">
                          {room.name}
                        </h3>
                        <Badge variant="outline" className="capitalize">
                          {room.category}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {room.description}
                      </p>

                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Size:</span>
                          <span className="font-medium">{room.size} sq ft</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Guests:</span>
                          <span className="font-medium">Up to {room.guests}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Bed:</span>
                          <span className="font-medium">{room.beds}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">View:</span>
                          <span className="font-medium">{room.view}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-luxury-navy mb-2 text-sm">Amenities:</h4>
                        <div className="flex flex-wrap gap-1">
                          {room.amenities.slice(0, 3).map((amenity, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {amenity}
                            </Badge>
                          ))}
                          {room.amenities.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{room.amenities.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Link to={`/rooms/${room.id}`}>
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </Link>
                      <Link to={`/booking?room=${room.id}`}>
                        <Button variant="luxury" className="w-full">
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-luxury">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our concierge team is here to help you find the perfect accommodation for your stay
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="gold" size="xl">
                Contact Concierge
              </Button>
            </Link>
            <Button variant="elegant" size="xl">
              Call: +1 (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;