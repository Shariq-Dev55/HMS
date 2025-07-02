import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, Wifi, Car, Coffee, Bath, Tv, Wind } from "lucide-react";
import luxurySuite from "@/assets/luxury-suite.jpg";
import spaLuxury from "@/assets/spa-luxury.jpg";
import restaurantDining from "@/assets/restaurant-dining.jpg";

const RoomDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock room data - in real app, fetch by ID
  const room = {
    id: parseInt(id || "1"),
    name: "Presidential Suite",
    category: "suite",
    price: 1200,
    size: 1200,
    guests: 4,
    beds: "1 King Bed",
    view: "Ocean View",
    description: "Experience the epitome of luxury in our Presidential Suite. This magnificent accommodation offers panoramic ocean views, exclusive amenities, and unparalleled comfort. Every detail has been meticulously crafted to provide an unforgettable stay.",
    images: [luxurySuite, spaLuxury, restaurantDining],
    amenities: [
      { icon: Wifi, name: "High-Speed WiFi" },
      { icon: Car, name: "Valet Parking" },
      { icon: Coffee, name: "Coffee Machine" },
      { icon: Bath, name: "Marble Bathroom" },
      { icon: Tv, name: "75\" Smart TV" },
      { icon: Wind, name: "Climate Control" }
    ],
    features: [
      "Private balcony with ocean views",
      "Separate living and dining areas",
      "Marble bathroom with soaking tub",
      "Butler service available",
      "Premium bedding and linens",
      "Complimentary minibar",
      "24-hour room service",
      "Concierge services"
    ],
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 24 hours before arrival",
      smoking: "Non-smoking room",
      pets: "Pet-friendly (additional charges apply)"
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Breadcrumb */}
      <section className="py-6 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/rooms" className="flex items-center gap-1 hover:text-luxury-gold transition-colors">
              <ChevronLeft size={16} />
              Back to Rooms
            </Link>
            <span>/</span>
            <span>{room.name}</span>
          </div>
        </div>
      </section>

      {/* Room Header */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h1 className="font-display text-4xl font-bold text-luxury-navy">
                  {room.name}
                </h1>
                <Badge variant="outline" className="capitalize">
                  {room.category}
                </Badge>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {room.description}
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <span className="text-muted-foreground">Size:</span>
                  <span className="font-medium ml-2">{room.size} sq ft</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Guests:</span>
                  <span className="font-medium ml-2">Up to {room.guests}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">View:</span>
                  <span className="font-medium ml-2">{room.view}</span>
                </div>
              </div>
            </div>
            
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-luxury-navy mb-2">
                    ${room.price}
                    <span className="text-lg font-normal text-muted-foreground">/night</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Taxes and fees included</p>
                </div>
                
                <div className="space-y-3">
                  <Link to={`/booking?room=${room.id}`}>
                    <Button variant="luxury" size="lg" className="w-full">
                      Book This Room
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="w-full">
                    Check Availability
                  </Button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground mb-2">Need assistance?</p>
                  <Button variant="link" className="text-luxury-gold p-0">
                    Call: +1 (555) 123-4567
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-3">
              <img 
                src={room.images[selectedImage]} 
                alt={room.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-elegant"
              />
            </div>
            <div className="space-y-4">
              {room.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-full h-24 lg:h-32 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-luxury-gold' : ''
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Room view ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Room Details */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="amenities" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="policies">Policies</TabsTrigger>
            </TabsList>
            
            <TabsContent value="amenities" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-luxury-navy mb-6">
                    Room Amenities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {room.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                        <amenity.icon className="w-5 h-5 text-luxury-gold" />
                        <span className="font-medium">{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="features" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-luxury-navy mb-6">
                    Special Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {room.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="policies" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-luxury-navy mb-6">
                    Hotel Policies
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="font-medium">Check-in:</span>
                      <span>{room.policies.checkIn}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="font-medium">Check-out:</span>
                      <span>{room.policies.checkOut}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="font-medium">Cancellation:</span>
                      <span>{room.policies.cancellation}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="font-medium">Smoking:</span>
                      <span>{room.policies.smoking}</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="font-medium">Pets:</span>
                      <span>{room.policies.pets}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-luxury">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book your stay in the {room.name} and create unforgettable memories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={`/booking?room=${room.id}`}>
              <Button variant="gold" size="xl">
                Book Now - ${room.price}/night
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="elegant" size="xl">
                Contact Concierge
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomDetail;