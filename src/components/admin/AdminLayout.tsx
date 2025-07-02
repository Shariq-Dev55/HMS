import { useEffect } from "react";
import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger } from "@/components/ui/sidebar";
import { Home, Bed, Settings, MessageSquare, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAdminAuthenticated");
    if (!isAuthenticated) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/admin");
  };

  const navigation = [
    { name: "Dashboard", href: "/admin/dashboard", icon: Home },
    { name: "Room Management", href: "/admin/rooms", icon: Bed },
    { name: "Service Management", href: "/admin/services", icon: Settings },
    { name: "Messages", href: "/admin/messages", icon: MessageSquare },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar className="w-64">
          <SidebarContent>
            {/* Brand */}
            <div className="p-6 border-b border-sidebar-border">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center">
                  <span className="text-luxury-navy font-bold text-lg">L</span>
                </div>
                <span className="font-display text-xl font-semibold text-sidebar-foreground">
                  Luxora Admin
                </span>
              </div>
            </div>

            <SidebarGroup>
              <SidebarGroupLabel>Management</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigation.map((item) => (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton asChild>
                        <Link 
                          to={item.href}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                            isActive(item.href)
                              ? "bg-luxury-gold text-luxury-navy font-medium"
                              : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                          }`}
                        >
                          <item.icon size={20} />
                          <span>{item.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Logout */}
            <div className="mt-auto p-4 border-t border-sidebar-border">
              <Button 
                variant="outline" 
                onClick={handleLogout}
                className="w-full justify-start"
              >
                <LogOut size={20} className="mr-2" />
                Sign Out
              </Button>
            </div>
          </SidebarContent>
        </Sidebar>

        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b border-border bg-background flex items-center px-6">
            <SidebarTrigger />
            <div className="ml-4">
              <h1 className="font-display text-xl font-semibold text-luxury-navy">
                Hotel Management System
              </h1>
            </div>
            <div className="ml-auto">
              <Link to="/">
                <Button variant="outline">
                  View Website
                </Button>
              </Link>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 bg-secondary/20">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;