import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface Service {
  id: number;
  name: string;
  description: string;
  category: string;
  pricing: string;
  status: "Active" | "Inactive";
}

const ServiceManagement = () => {
  const { toast } = useToast();
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      name: "Luxury Spa & Wellness",
      description: "Indulge in our world-class spa featuring therapeutic treatments and wellness programs",
      category: "Wellness",
      pricing: "Treatments from $150",
      status: "Active"
    },
    {
      id: 2,
      name: "Fine Dining & Culinary",
      description: "Experience culinary excellence with our Michelin-starred restaurant",
      category: "Dining",
      pricing: "Prix fixe from $85",
      status: "Active"
    },
    {
      id: 3,
      name: "Concierge Services",
      description: "Our dedicated concierge team provides personalized services",
      category: "Guest Services",
      pricing: "Complimentary for guests",
      status: "Active"
    },
    {
      id: 4,
      name: "Recreation & Fitness",
      description: "Stay active with our state-of-the-art fitness facilities",
      category: "Recreation",
      pricing: "Included with stay",
      status: "Active"
    }
  ]);

  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    pricing: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCreateService = () => {
    setEditingService(null);
    setFormData({
      name: "",
      description: "",
      category: "",
      pricing: "",
    });
    setIsDialogOpen(true);
  };

  const handleEditService = (service: Service) => {
    setEditingService(service);
    setFormData({
      name: service.name,
      description: service.description,
      category: service.category,
      pricing: service.pricing,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingService) {
      // Update existing service
      setServices(services.map(service => 
        service.id === editingService.id 
          ? {
              ...service,
              name: formData.name,
              description: formData.description,
              category: formData.category,
              pricing: formData.pricing
            }
          : service
      ));
      toast({
        title: "Service Updated",
        description: `${formData.name} has been successfully updated.`,
      });
    } else {
      // Create new service
      const newService: Service = {
        id: Math.max(...services.map(s => s.id)) + 1,
        name: formData.name,
        description: formData.description,
        category: formData.category,
        pricing: formData.pricing,
        status: "Active"
      };
      setServices([...services, newService]);
      toast({
        title: "Service Created",
        description: `${formData.name} has been successfully created.`,
      });
    }

    setIsDialogOpen(false);
    setFormData({
      name: "",
      description: "",
      category: "",
      pricing: "",
    });
  };

  const handleDeleteService = (serviceId: number) => {
    const service = services.find(s => s.id === serviceId);
    setServices(services.filter(s => s.id !== serviceId));
    toast({
      title: "Service Deleted",
      description: `${service?.name} has been successfully deleted.`,
    });
  };

  const toggleServiceStatus = (serviceId: number) => {
    setServices(services.map(service => 
      service.id === serviceId 
        ? {
            ...service,
            status: service.status === "Active" ? "Inactive" : "Active"
          }
        : service
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-display text-3xl font-bold text-luxury-navy">Service Management</h1>
          <p className="text-muted-foreground">Manage hotel services, amenities, and offerings</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="luxury" onClick={handleCreateService}>
              Add New Service
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="font-display text-2xl text-luxury-navy">
                {editingService ? "Edit Service" : "Create New Service"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Service Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Luxury Spa & Wellness"
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
                  placeholder="Describe the service and its benefits"
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Wellness, Dining, Recreation"
                />
              </div>
              <div>
                <Label htmlFor="pricing">Pricing</Label>
                <Input
                  id="pricing"
                  name="pricing"
                  value={formData.pricing}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Treatments from $150, Complimentary"
                />
              </div>
              <div className="flex gap-2 pt-4">
                <Button type="submit" variant="luxury" className="flex-1">
                  {editingService ? "Update Service" : "Create Service"}
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

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="shadow-elegant">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-display text-xl text-luxury-navy">
                    {service.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{service.category}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  service.status === 'Active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {service.status}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="mb-4">
                <span className="text-sm font-medium text-luxury-navy">Pricing: </span>
                <span className="text-luxury-gold font-medium">{service.pricing}</span>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleEditService(service)}
                  className="flex-1"
                >
                  Edit
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => toggleServiceStatus(service.id)}
                  className="flex-1"
                >
                  {service.status === "Active" ? "Deactivate" : "Activate"}
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm" 
                  onClick={() => handleDeleteService(service.id)}
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="text-luxury-navy">Total Services</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-display text-3xl font-bold text-luxury-navy">{services.length}</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="text-luxury-navy">Active Services</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-display text-3xl font-bold text-green-600">
              {services.filter(s => s.status === "Active").length}
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="text-luxury-navy">Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-display text-3xl font-bold text-luxury-gold">
              {new Set(services.map(s => s.category)).size}
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="text-luxury-navy">Inactive Services</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-display text-3xl font-bold text-red-600">
              {services.filter(s => s.status === "Inactive").length}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServiceManagement;