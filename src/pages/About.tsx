import { Card, CardContent } from "@/components/ui/card";
import heroLobby from "@/assets/hero-lobby.jpg";

const About = () => {
  const team = [
    {
      name: "Victoria Sterling",
      role: "General Manager", 
      bio: "With over 15 years in luxury hospitality, Victoria ensures every guest experience exceeds expectations."
    },
    {
      name: "Marcus Thompson",
      role: "Executive Chef",
      bio: "Michelin-starred chef bringing innovative culinary artistry to our fine dining establishments."
    },
    {
      name: "Isabella Martinez",
      role: "Spa Director",
      bio: "Wellness expert dedicated to creating transformative spa experiences for ultimate relaxation."
    }
  ];

  const milestones = [
    { year: "1985", event: "Luxora Hotel founded with vision of redefining luxury hospitality" },
    { year: "1992", event: "Awarded first 5-star rating and luxury certification" },
    { year: "2001", event: "Expanded with world-class spa and wellness facilities" },
    { year: "2015", event: "Complete renovation showcasing modern luxury design" },
    { year: "2023", event: "Recognized as World's Leading Luxury Hotel" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroLobby})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-4">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90">
            A legacy of luxury spanning four decades
          </p>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-luxury-navy mb-6">
                Heritage & Excellence
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Since 1985, Luxora Hotel has stood as a beacon of luxury and sophistication 
                  in the heart of Beverly Hills. Our commitment to exceptional service and 
                  attention to detail has earned us recognition as one of the world's finest hotels.
                </p>
                <p>
                  Founded by visionary hotelier Alexander Luxora, our hotel was built on the 
                  principle that luxury is not just about opulent surroundings, but about 
                  creating unforgettable moments and meaningful connections with our guests.
                </p>
                <p>
                  Today, we continue this tradition by blending timeless elegance with modern 
                  amenities, ensuring every stay is a masterpiece of comfort and refinement.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroLobby} 
                alt="Hotel Heritage"
                className="rounded-lg shadow-luxury w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-gold rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-luxury-navy">39</div>
                  <div className="text-sm text-luxury-navy font-medium">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-luxury-navy mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our pursuit of hospitality excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <div className="font-display text-2xl font-bold text-luxury-gold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-luxury-gold rounded-full mt-2 mr-8" />
                <div className="flex-1">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-luxury-navy mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate professionals who make Luxora exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center shadow-elegant">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-gold rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-luxury-navy">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-luxury-navy mb-2">
                    {member.name}
                  </h3>
                  <p className="text-luxury-gold font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-luxury">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-8">
            Our Mission
          </h2>
          <p className="text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
            To create extraordinary experiences that exceed expectations, 
            foster meaningful connections, and establish lasting memories 
            for every guest who enters our doors.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;