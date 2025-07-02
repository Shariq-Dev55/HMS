import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: number;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: "New" | "Replied" | "Archived";
  createdAt: string;
}

const MessageManagement = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "+1 (555) 123-4567",
      subject: "Special Dietary Requirements",
      message: "I have celiac disease and would like to know about gluten-free dining options during my stay next month.",
      status: "New",
      createdAt: "2024-01-15 10:30 AM"
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria.garcia@email.com",
      subject: "Wedding Event Inquiry",
      message: "I'm planning my wedding for June and would love to discuss venue options and catering packages. Can we schedule a consultation?",
      status: "Replied",
      createdAt: "2024-01-15 08:15 AM"
    },
    {
      id: 3,
      name: "Robert Brown",
      email: "robert.brown@email.com",
      phone: "+1 (555) 987-6543",
      subject: "Transportation Service",
      message: "Do you provide airport shuttle service? I'm arriving at LAX on Friday evening and would appreciate assistance with transportation to the hotel.",
      status: "New",
      createdAt: "2024-01-14 06:45 PM"
    },
    {
      id: 4,
      name: "Jennifer Lee",
      email: "jennifer.lee@email.com",
      subject: "Spa Appointment Request",
      message: "I'd like to book a couples massage for my anniversary celebration. What packages do you recommend for a romantic spa experience?",
      status: "Replied",
      createdAt: "2024-01-14 02:20 PM"
    },
    {
      id: 5,
      name: "Michael Thompson",
      email: "michael.thompson@email.com",
      subject: "Business Meeting Facilities",
      message: "I need to host a board meeting for 12 people next week. Do you have conference rooms available with AV equipment and catering options?",
      status: "Archived",
      createdAt: "2024-01-13 11:10 AM"
    }
  ]);

  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [filter, setFilter] = useState<"All" | "New" | "Replied" | "Archived">("All");

  const filteredMessages = messages.filter(message => 
    filter === "All" || message.status === filter
  );

  const handleViewMessage = (message: Message) => {
    setSelectedMessage(message);
  };

  const handleUpdateStatus = (messageId: number, newStatus: Message["status"]) => {
    setMessages(messages.map(message => 
      message.id === messageId 
        ? { ...message, status: newStatus }
        : message
    ));

    const statusLabels = {
      "New": "marked as new",
      "Replied": "marked as replied", 
      "Archived": "archived"
    };

    toast({
      title: "Message Updated",
      description: `Message has been ${statusLabels[newStatus]}.`,
    });
  };

  const handleDeleteMessage = (messageId: number) => {
    const message = messages.find(m => m.id === messageId);
    setMessages(messages.filter(m => m.id !== messageId));
    toast({
      title: "Message Deleted",
      description: `Message from ${message?.name} has been deleted.`,
    });
  };

  const getStatusColor = (status: Message["status"]) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-800";
      case "Replied":
        return "bg-green-100 text-green-800";
      case "Archived":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-display text-3xl font-bold text-luxury-navy">Message Management</h1>
          <p className="text-muted-foreground">View and respond to guest inquiries and contact form submissions</p>
        </div>
        <div className="flex gap-2">
          {["All", "New", "Replied", "Archived"].map((filterOption) => (
            <Button
              key={filterOption}
              variant={filter === filterOption ? "luxury" : "outline"}
              size="sm"
              onClick={() => setFilter(filterOption as typeof filter)}
            >
              {filterOption}
              {filterOption !== "All" && (
                <span className="ml-1 bg-background/20 px-1 rounded">
                  {messages.filter(m => m.status === filterOption).length}
                </span>
              )}
            </Button>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="text-luxury-navy">Total Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-display text-3xl font-bold text-luxury-navy">{messages.length}</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="text-luxury-navy">New Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-display text-3xl font-bold text-blue-600">
              {messages.filter(m => m.status === "New").length}
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="text-luxury-navy">Replied</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-display text-3xl font-bold text-green-600">
              {messages.filter(m => m.status === "Replied").length}
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="text-luxury-navy">Archived</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-display text-3xl font-bold text-gray-600">
              {messages.filter(m => m.status === "Archived").length}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Messages List */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="font-display text-xl text-luxury-navy">
            Messages ({filteredMessages.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredMessages.map((message) => (
              <div key={message.id} className="border border-border rounded-lg p-4 hover:bg-secondary/30 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-luxury-navy">{message.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(message.status)}`}>
                        {message.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{message.email}</p>
                    {message.phone && (
                      <p className="text-sm text-muted-foreground mb-2">{message.phone}</p>
                    )}
                    <p className="font-medium text-luxury-navy mb-2">{message.subject}</p>
                    <p className="text-muted-foreground line-clamp-2 mb-2">{message.message}</p>
                    <p className="text-xs text-muted-foreground">{message.createdAt}</p>
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleViewMessage(message)}
                        >
                          View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="font-display text-2xl text-luxury-navy">
                            Message Details
                          </DialogTitle>
                        </DialogHeader>
                        {selectedMessage && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium text-luxury-navy">Name:</label>
                                <p className="text-muted-foreground">{selectedMessage.name}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-luxury-navy">Status:</label>
                                <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedMessage.status)}`}>
                                  {selectedMessage.status}
                                </span>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-luxury-navy">Email:</label>
                                <p className="text-muted-foreground">{selectedMessage.email}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-luxury-navy">Date:</label>
                                <p className="text-muted-foreground">{selectedMessage.createdAt}</p>
                              </div>
                              {selectedMessage.phone && (
                                <div>
                                  <label className="text-sm font-medium text-luxury-navy">Phone:</label>
                                  <p className="text-muted-foreground">{selectedMessage.phone}</p>
                                </div>
                              )}
                            </div>
                            <div>
                              <label className="text-sm font-medium text-luxury-navy">Subject:</label>
                              <p className="text-muted-foreground mt-1">{selectedMessage.subject}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-luxury-navy">Message:</label>
                              <p className="text-muted-foreground mt-1 leading-relaxed">{selectedMessage.message}</p>
                            </div>
                            <div className="flex gap-2 pt-4">
                              <Button 
                                variant="luxury" 
                                onClick={() => handleUpdateStatus(selectedMessage.id, "Replied")}
                                disabled={selectedMessage.status === "Replied"}
                              >
                                Mark as Replied
                              </Button>
                              <Button 
                                variant="outline" 
                                onClick={() => handleUpdateStatus(selectedMessage.id, "Archived")}
                                disabled={selectedMessage.status === "Archived"}
                              >
                                Archive
                              </Button>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                    
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => handleDeleteMessage(message.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredMessages.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No messages found for the selected filter.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MessageManagement;