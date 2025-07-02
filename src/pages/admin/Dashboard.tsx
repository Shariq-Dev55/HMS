import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Bookings",
      value: "156",
      change: "+12%",
      description: "This month"
    },
    {
      title: "Occupancy Rate",
      value: "87%",
      change: "+5%", 
      description: "Current month"
    },
    {
      title: "Revenue",
      value: "$2.4M",
      change: "+18%",
      description: "Monthly total"
    },
    {
      title: "Guest Satisfaction",
      value: "4.9/5",
      change: "+0.2",
      description: "Average rating"
    }
  ];

  const recentBookings = [
    { id: "BK001", guest: "Sarah Johnson", room: "Presidential Suite", date: "2024-01-15", status: "Confirmed" },
    { id: "BK002", guest: "Michael Chen", room: "Ocean View Deluxe", date: "2024-01-16", status: "Pending" },
    { id: "BK003", guest: "Emily Rodriguez", room: "Executive Suite", date: "2024-01-17", status: "Confirmed" },
    { id: "BK004", guest: "David Thompson", room: "Luxury Ocean View", date: "2024-01-18", status: "Confirmed" },
    { id: "BK005", guest: "Lisa Wang", room: "Presidential Suite", date: "2024-01-19", status: "Pending" }
  ];

  const recentMessages = [
    { id: 1, name: "John Smith", subject: "Special Dietary Requirements", time: "2 hours ago", status: "New" },
    { id: 2, name: "Maria Garcia", subject: "Wedding Event Inquiry", time: "4 hours ago", status: "Responded" },
    { id: 3, name: "Robert Brown", subject: "Transportation Service", time: "6 hours ago", status: "New" },
    { id: 4, name: "Jennifer Lee", subject: "Spa Appointment Request", time: "8 hours ago", status: "Responded" }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-display text-3xl font-bold text-luxury-navy">Dashboard Overview</h1>
          <p className="text-muted-foreground">Monitor your hotel's performance and operations</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Last updated</p>
          <p className="font-medium text-luxury-navy">January 15, 2024 - 2:30 PM</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-elegant">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="font-display text-3xl font-bold text-luxury-navy mt-1">
                    {stat.value}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-luxury-gold text-luxury-navy">
                    {stat.change}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="font-display text-xl text-luxury-navy">Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                  <div>
                    <p className="font-medium text-luxury-navy">{booking.guest}</p>
                    <p className="text-sm text-muted-foreground">{booking.room}</p>
                    <p className="text-xs text-muted-foreground">{booking.date}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      booking.status === 'Confirmed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {booking.status}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">{booking.id}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Messages */}
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="font-display text-xl text-luxury-navy">Recent Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMessages.map((message) => (
                <div key={message.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                  <div>
                    <p className="font-medium text-luxury-navy">{message.name}</p>
                    <p className="text-sm text-muted-foreground">{message.subject}</p>
                    <p className="text-xs text-muted-foreground">{message.time}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      message.status === 'New' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {message.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="font-display text-xl text-luxury-navy">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg border border-border hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold text-luxury-navy mb-2">Add New Room</h3>
              <p className="text-sm text-muted-foreground">Create a new room listing with amenities and pricing</p>
            </div>
            <div className="p-4 rounded-lg border border-border hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold text-luxury-navy mb-2">Manage Services</h3>
              <p className="text-sm text-muted-foreground">Update hotel services and amenity offerings</p>
            </div>
            <div className="p-4 rounded-lg border border-border hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold text-luxury-navy mb-2">View Messages</h3>
              <p className="text-sm text-muted-foreground">Respond to guest inquiries and contact form submissions</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;