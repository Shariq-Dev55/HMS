import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { CalendarIcon, ChevronLeft } from "lucide-react";
import { format } from "date-fns";
import luxurySuite from "@/assets/luxury-suite.jpg";

const Booking = () => {
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get("room");
  const { toast } = useToast();

  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    guests: "1",
    roomType: roomId || "",
    specialRequests: ""
  });

  // Mock room data
  const rooms = [
    { id: "1", name: "Presidential Suite", price: 1200 },
    { id: "2", name: "Royal Ocean Suite", price: 950 },
    { id: "3", name: "Executive Suite", price: 750 },
    { id: "4", name: "Deluxe Ocean Room", price: 600 },
    { id: "5", name: "Deluxe City Room", price: 450 },
    { id: "6", name: "Classic Luxury Room", price: 350 }
  ];

  const selectedRoom = rooms.find(room => room.id === formData.roomType);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateNights = () => {
    if (checkIn && checkOut) {
      const timeDiff = checkOut.getTime() - checkIn.getTime();
      return Math.ceil(timeDiff / (1000 * 3600 * 24));
    }
    return 0;
  };

  const calculateTotal = () => {
    const nights = calculateNights();
    const roomPrice = selectedRoom?.price || 0;
    const subtotal = nights * roomPrice;
    const taxes = subtotal * 0.15; // 15% tax
    return {
      subtotal,
      taxes,
      total: subtotal + taxes,
      nights
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkIn || !checkOut) {
      toast({
        title: "Missing Dates",
        description: "Please select check-in and check-out dates.",
        variant: "destructive"
      });
      return;
    }

    if (!selectedRoom) {
      toast({
        title: "Room Selection Required",
        description: "Please select a room type.",
        variant: "destructive"
      });
      return;
    }

    // Mock booking submission
    console.log("Booking submitted:", {
      ...formData,
      checkIn: checkIn.toISOString(),
      checkOut: checkOut.toISOString(),
      total: calculateTotal().total
    });

    toast({
      title: "Booking Confirmed!",
      description: `Your reservation for ${selectedRoom.name} has been confirmed. Confirmation details will be sent to your email.`,
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      guests: "1",
      roomType: "",
      specialRequests: ""
    });
    setCheckIn(undefined);
    setCheckOut(undefined);
  };

  const pricing = calculateTotal();

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
            <span>Book Your Stay</span>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-luxury-navy mb-4">
              Reserve Your Luxury Experience
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete your booking and prepare for an unforgettable stay at Luxora Hotel
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-semibold text-luxury-navy mb-6">
                    Booking Details
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Dates */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="checkin" className="text-luxury-navy font-medium">
                          Check-in Date *
                        </Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full mt-2 justify-start text-left font-normal"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {checkIn ? format(checkIn, "PPP") : "Select date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={checkIn}
                              onSelect={setCheckIn}
                              disabled={(date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      
                      <div>
                        <Label htmlFor="checkout" className="text-luxury-navy font-medium">
                          Check-out Date *
                        </Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full mt-2 justify-start text-left font-normal"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {checkOut ? format(checkOut, "PPP") : "Select date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={checkOut}
                              onSelect={setCheckOut}
                              disabled={(date) => date <= (checkIn || new Date())}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    {/* Room and Guests */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="roomType" className="text-luxury-navy font-medium">
                          Room Type *
                        </Label>
                        <Select value={formData.roomType} onValueChange={(value) => 
                          setFormData(prev => ({ ...prev, roomType: value }))
                        }>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select room type" />
                          </SelectTrigger>
                          <SelectContent>
                            {rooms.map((room) => (
                              <SelectItem key={room.id} value={room.id}>
                                {room.name} - ${room.price}/night
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="guests" className="text-luxury-navy font-medium">
                          Number of Guests *
                        </Label>
                        <Select value={formData.guests} onValueChange={(value) => 
                          setFormData(prev => ({ ...prev, guests: value }))
                        }>
                          <SelectTrigger className="mt-2">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} Guest{num > 1 ? 's' : ''}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Guest Information */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-luxury-navy">Guest Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="text-luxury-navy font-medium">
                            First Name *
                          </Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="mt-2"
                            placeholder="Your first name"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="lastName" className="text-luxury-navy font-medium">
                            Last Name *
                          </Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="mt-2"
                            placeholder="Your last name"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email" className="text-luxury-navy font-medium">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-2"
                            placeholder="your@email.com"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="phone" className="text-luxury-navy font-medium">
                            Phone Number *
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="mt-2"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div>
                      <Label htmlFor="specialRequests" className="text-luxury-navy font-medium">
                        Special Requests
                      </Label>
                      <Textarea
                        id="specialRequests"
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        className="mt-2 min-h-24"
                        placeholder="Any special requests or preferences..."
                      />
                    </div>

                    <Button type="submit" variant="luxury" size="lg" className="w-full">
                      Confirm Booking
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Booking Summary */}
            <div>
              <Card className="shadow-elegant sticky top-24">
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold text-luxury-navy mb-4">
                    Booking Summary
                  </h3>

                  {selectedRoom && (
                    <div className="mb-6">
                      <img 
                        src={luxurySuite} 
                        alt={selectedRoom.name}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h4 className="font-semibold">{selectedRoom.name}</h4>
                      <p className="text-sm text-muted-foreground">${selectedRoom.price}/night</p>
                    </div>
                  )}

                  {checkIn && checkOut && (
                    <div className="space-y-3 mb-6 text-sm">
                      <div className="flex justify-between">
                        <span>Check-in:</span>
                        <span className="font-medium">{format(checkIn, "PPP")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Check-out:</span>
                        <span className="font-medium">{format(checkOut, "PPP")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Nights:</span>
                        <span className="font-medium">{pricing.nights}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Guests:</span>
                        <span className="font-medium">{formData.guests}</span>
                      </div>
                    </div>
                  )}

                  {pricing.nights > 0 && selectedRoom && (
                    <div className="space-y-2 pt-4 border-t border-border">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal ({pricing.nights} nights):</span>
                        <span>${pricing.subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Taxes & Fees:</span>
                        <span>${pricing.taxes.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-semibold text-lg pt-2 border-t border-border">
                        <span>Total:</span>
                        <span className="text-luxury-navy">${pricing.total.toFixed(2)}</span>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
                    <p className="mb-2">Need help with your booking?</p>
                    <Button variant="link" className="text-luxury-gold p-0">
                      Contact our reservations team
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;