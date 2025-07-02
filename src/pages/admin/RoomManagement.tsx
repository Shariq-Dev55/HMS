import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import luxurySuite from "@/assets/luxury-suite.jpg";

interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  amenities: string[];
  image: string;
  status: "Available" | "Occupied" | "Maintenance";
}

const RoomManagement = () => {
  const { toast } = useToast();
  const [rooms, setRooms] = useState<Room[]>([
    {
      id: 1,
      name: "Presidential Suite",
      description: "Our most luxurious accommodation with panoramic ocean views",
      price: 1200,
      amenities: ["Ocean View", "Private Balcony", "King Bed", "Marble Bath"],
      image: luxurySuite,
      status: "Available"
    },
    {
      id: 2,
      name: "Luxury Ocean View",
      description: "Elegant room with stunning ocean vistas and premium amenities",
      price: 800,
      amenities: ["Ocean View", "Queen Bed", "Sitting Area", "Premium Amenities"],
      image: luxurySuite,
      status: "Occupied"
    },
    {
      id: 3,
      name: "Executive Suite",
      description: "Perfect for business travelers with work space and city views",
      price: 600,
      amenities: ["City View", "Work Space", "King Bed", "Luxury Bath"],
      image: luxurySuite,
      status: "Available"
    }
  ]);

  const [editingRoom, setEditingRoom] = useState<Room | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    amenities: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCreateRoom = () => {
    setEditingRoom(null);
    setFormData({
      name: "",
      description: "",
      price: "",
      amenities: "",
    });
    setIsDialogOpen(true);
  };

  const handleEditRoom = (room: Room) => {
    setEditingRoom(room);
    setFormData({
      name: room.name,
      description: room.description,
      price: room.price.toString(),
      amenities: room.amenities.join(", "),
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const amenitiesArray = formData.amenities.split(",").map(a => a.trim()).filter(a => a);
    
    if (editingRoom) {
      // Update existing room
      setRooms(rooms.map(room => 
        room.id === editingRoom.id 
          ? {
              ...room,
              name: formData.name,
              description: formData.description,
              price: parseFloat(formData.price),
              amenities: amenitiesArray
            }
          : room
      ));
      toast({
        title: "Room Updated",
        description: `${formData.name} has been successfully updated.`,
      });
    } else {
      // Create new room
      const newRoom: Room = {
        id: Math.max(...rooms.map(r => r.id)) + 1,
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        amenities: amenitiesArray,
        image: luxurySuite,
        status: "Available"
      };
      setRooms([...rooms, newRoom]);
      toast({
        title: "Room Created",
        description: `${formData.name} has been successfully created.`,
      });
    }

    setIsDialogOpen(false);
    setFormData({
      name: "",
      description: "",
      price: "",
      amenities: "",
    });
  };

  const handleDeleteRoom = (roomId: number) => {
    const room = rooms.find(r => r.id === roomId);
    setRooms(rooms.filter(r => r.id !== roomId));
    toast({
      title: "Room Deleted",
      description: `${room?.name} has been successfully deleted.`,
    });
  };

  const toggleRoomStatus = (roomId: number) => {
    setRooms(rooms.map(room => 
      room.id === roomId 
        ? {
            ...room,
            status: room.status === "Available" ? "Maintenance" : "Available"
          }
        : room
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-display text-3xl font-bold text-luxury-navy">Room Management</h1>
          <p className="text-muted-foreground">Manage hotel rooms, pricing, and availability</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="luxury" onClick={handleCreateRoom}>
              Add New Room
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="font-display text-2xl text-luxury-navy">
                {editingRoom ? "Edit Room" : "Create New Room"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Room Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Presidential Suite"
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  placeholder="Describe the room features and appeal"
                />
              </div>
              <div>
                <Label htmlFor="price">Price per Night ($)</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                  placeholder="800"
                />
              </div>
              <div>
                <Label htmlFor="amenities">Amenities (comma-separated)</Label>
                <Input
                  id="amenities"
                  name="amenities"
                  value={formData.amenities}
                  onChange={handleInputChange}
                  placeholder="Ocean View, King Bed, Private Balcony"
                />
              </div>
              <div className="flex gap-2 pt-4">
                <Button type="submit" variant="luxury" className="flex-1">
                  {editingRoom ? "Update Room" : "Create Room"}
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsDialogOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <Card key={room.id} className="overflow-hidden shadow-elegant">
            <div className="relative h-48">
              <img 
                src={room.image} 
                alt={room.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex gap-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  room.status === 'Available' 
                    ? 'bg-green-100 text-green-800' 
                    : room.status === 'Occupied'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {room.status}
                </span>
                <span className="bg-luxury-gold text-luxury-navy px-2 py-1 rounded-full text-xs font-medium">
                  ${room.price}/night
                </span>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-display text-xl font-semibold mb-2 text-luxury-navy">
                {room.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                {room.description}
              </p>
              <div className="mb-4">
                <p className="text-sm font-medium text-luxury-navy mb-1">Amenities:</p>
                <div className="flex flex-wrap gap-1">
                  {room.amenities.map((amenity, index) => (
                    <span key={index} className="bg-secondary/50 px-2 py-1 rounded text-xs">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleEditRoom(room)}
                  className="flex-1"
                >
                  Edit
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => toggleRoomStatus(room.id)}
                  className="flex-1"
                >
                  Toggle Status
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm" 
                  onClick={() => handleDeleteRoom(room.id)}
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="text-luxury-navy">Total Rooms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-display text-3xl font-bold text-luxury-navy">{rooms.length}</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="text-luxury-navy">Available Rooms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-display text-3xl font-bold text-green-600">
              {rooms.filter(r => r.status === "Available").length}
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="text-luxury-navy">Average Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-display text-3xl font-bold text-luxury-gold">
              ${Math.round(rooms.reduce((acc, room) => acc + room.price, 0) / rooms.length)}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RoomManagement;