import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Lock, Fingerprint, Smartphone, Users, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import securityImage from "@/assets/security-systems.jpg";

const DoorAccessControlPage = () => {
  const features = [
    {
      icon: Fingerprint,
      title: "Biometric Access",
      description: "Fingerprint and facial recognition for secure, keyless entry"
    },
    {
      icon: Smartphone,
      title: "Mobile Integration",
      description: "Grant access via smartphone apps and digital credentials"
    },
    {
      icon: Users,
      title: "User Management",
      description: "Centralized control over user permissions and access levels"
    },
    {
      icon: Clock,
      title: "Time-Based Access",
      description: "Schedule access permissions for different times and days"
    },
    {
      icon: Shield,
      title: "Anti-Tailgating",
      description: "Advanced sensors prevent unauthorized entry following authorized users"
    },
    {
      icon: Lock,
      title: "Multiple Methods",
      description: "Card readers, keypads, and biometric options for flexible access"
    }
  ];

  return (
    <div className="min-h-screen services-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 animate-fade-in-up">
            <Link 
              to="/services/security" 
              className="inline-flex items-center space-x-2 text-tech-teal hover:text-tech-blue transition-colors duration-300 mb-6 animated-underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Security Solutions</span>
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center shadow-card">
                    <Lock className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h1 className="text-responsive-xl font-bold text-tech-blue">Door Access Control</h1>
                    <p className="text-tech-teal font-semibold text-lg">Smart Access Management</p>
                  </div>
                </div>
                
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Sophisticated access control systems with biometric authentication, mobile integration, 
                  and comprehensive user management for maximum security.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" className="hover-lift">
                    Get Access Control Quote
                  </Button>
                  <Link to="/contact">
                    <Button variant="outline-tech" className="hover-scale w-full sm:w-auto">
                      Contact Specialists
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 gradient-tech rounded-3xl opacity-10 blur-3xl animate-glow"></div>
                <img
                  src={securityImage}
                  alt="Professional Door Access Control Systems"
                  className="rounded-3xl shadow-card w-full h-auto hover-lift relative"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-responsive-lg font-bold text-tech-blue">
              Advanced Access Control Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our access control systems provide comprehensive security management 
              with cutting-edge technology and user-friendly interfaces.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-card transition-all duration-300 border-muted hover-lift group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-tech-light flex items-center justify-center group-hover:bg-tech-teal/10 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-tech-teal group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DoorAccessControlPage;