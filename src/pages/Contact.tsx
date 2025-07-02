import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock form submission - in real app, this would send to backend
    console.log("Contact form submitted:", formData);
    
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      title: "Hotel Address",
      details: [
        "123 Luxury Avenue",
        "Beverly Hills, CA 90210",
        "United States"
      ]
    },
    {
      title: "Phone & Fax",
      details: [
        "Main: +1 (555) 123-4567",
        "Reservations: +1 (555) 123-4568",
        "Fax: +1 (555) 123-4569"
      ]
    },
    {
      title: "Email Contact",
      details: [
        "General: hello@luxora.com",
        "Reservations: reservations@luxora.com",
        "Events: events@luxora.com"
      ]
    },
    {
      title: "Business Hours",
      details: [
        "Concierge: 24/7",
        "Reservations: 6 AM - 10 PM",
        "Guest Services: 24/7"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-gradient-luxury">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90">
            We're here to assist you with any questions or special requests
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-3xl font-bold text-luxury-navy mb-6">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Have a question or special request? Our team is ready to assist you 
                in creating the perfect luxury experience.
              </p>

              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-luxury-navy font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                          placeholder="Your full name"
                        />
                      </div>
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
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-luxury-navy font-medium">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-2"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-luxury-navy font-medium">
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-luxury-navy font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="mt-2 min-h-32"
                        placeholder="Please share your message, questions, or special requests..."
                      />
                    </div>

                    <Button type="submit" variant="luxury" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-display text-3xl font-bold text-luxury-navy mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Reach out to us through any of the following channels. Our dedicated 
                team is available to ensure your experience exceeds expectations.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-elegant">
                    <CardContent className="p-6">
                      <h3 className="font-display text-xl font-semibold text-luxury-navy mb-3">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="mt-6 shadow-elegant">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-luxury-navy to-luxury-navy-light flex items-center justify-center rounded-lg">
                    <div className="text-center text-primary-foreground">
                      <div className="w-16 h-16 bg-luxury-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-luxury-navy">📍</span>
                      </div>
                      <p className="text-lg font-medium">Interactive Map</p>
                      <p className="text-sm opacity-90">123 Luxury Avenue, Beverly Hills</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-luxury-navy mb-6">
            24/7 Guest Services
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            For immediate assistance or emergency support, our guest services team is available around the clock
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="lg">
              Call Now: +1 (555) 123-4567
            </Button>
            <Button variant="outline" size="lg">
              Live Chat Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;