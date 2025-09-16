import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Shield, Bell, Smartphone, Headphones, Zap, Home } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import securityImage from "@/assets/security-systems.jpg";

const AlarmSystemsPage = () => {
  const features = [
    {
      icon: Bell,
      title: "24/7 Monitoring",
      description: "Professional monitoring center with immediate emergency response"
    },
    {
      icon: Smartphone,
      title: "Mobile Alerts",
      description: "Instant notifications and remote control via mobile app"
    },
    {
      icon: Headphones,
      title: "Two-Way Communication",
      description: "Direct communication with monitoring center during emergencies"
    },
    {
      icon: Zap,
      title: "Multiple Sensors",
      description: "Motion, door/window, glass break, and environmental sensors"
    },
    {
      icon: Home,
      title: "Zone Management",
      description: "Customizable security zones with individual arm/disarm capabilities"
    },
    {
      icon: Shield,
      title: "Backup Systems",
      description: "Battery backup and cellular communication for uninterrupted protection"
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
                    <Shield className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h1 className="text-responsive-xl font-bold text-tech-blue">Alarm Systems</h1>
                    <p className="text-tech-teal font-semibold text-lg">24/7 Security Monitoring</p>
                  </div>
                </div>
                
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Comprehensive alarm systems with professional monitoring, rapid response, 
                  and advanced sensor technology for complete property protection.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" className="hover-lift">
                    Get Alarm System Quote
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
                  alt="Professional Alarm Systems Installation"
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
              Advanced Alarm System Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our alarm systems provide comprehensive protection with professional monitoring 
              and rapid emergency response capabilities.
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

export default AlarmSystemsPage;