import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock authentication - in real app, this would validate against backend
    if (credentials.email === "admin@luxora.com" && credentials.password === "admin123") {
      localStorage.setItem("isAdminAuthenticated", "true");
      toast({
        title: "Login Successful",
        description: "Welcome to the Luxora Admin Dashboard",
      });
      navigate("/admin/dashboard");
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-luxury">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-luxury-gold rounded-lg mx-auto mb-4 flex items-center justify-center">
            <span className="text-luxury-navy font-bold text-2xl">L</span>
          </div>
          <h1 className="font-display text-3xl font-bold text-primary-foreground mb-2">
            Luxora Admin
          </h1>
          <p className="text-primary-foreground/80">
            Access the hotel management dashboard
          </p>
        </div>

        <Card className="shadow-luxury">
          <CardHeader>
            <CardTitle className="text-center font-display text-2xl text-luxury-navy">
              Admin Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-luxury-navy font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={credentials.email}
                  onChange={handleInputChange}
                  required
                  className="mt-2"
                  placeholder="admin@luxora.com"
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-luxury-navy font-medium">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  required
                  className="mt-2"
                  placeholder="Enter your password"
                />
              </div>

              <Button type="submit" variant="luxury" size="lg" className="w-full">
                Sign In
              </Button>
            </form>

            <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Demo Credentials:</strong><br />
                Email: admin@luxora.com<br />
                Password: admin123
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Button 
            variant="elegant" 
            onClick={() => navigate("/")}
          >
            ← Back to Hotel Website
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;