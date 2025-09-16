import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, HardDrive, Router, Shield, Settings, Monitor, Wifi } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import infrastructureImage from "@/assets/infrastructure.jpg";

const NetworkSetupPage = () => {
  const features = [
    {
      icon: Router,
      title: "Network Design",
      description: "Custom network architecture design for optimal performance and scalability"
    },
    {
      icon: Settings,
      title: "Professional Installation",
      description: "Expert installation and configuration of all network components"
    },
    {
      icon: Shield,
      title: "Security Configuration",
      description: "Comprehensive security setup with firewalls and access controls"
    },
    {
      icon: Monitor,
      title: "Performance Optimization",
      description: "Network tuning and optimization for maximum speed and reliability"
    },
    {
      icon: Wifi,
      title: "Wireless Integration",
      description: "Seamless wireless network integration with enterprise-grade access points"
    },
    {
      icon: HardDrive,
      title: "Server Configuration",
      description: "Complete server setup and network integration services"
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
              to="/services/infrastructure" 
              className="inline-flex items-center space-x-2 text-tech-teal hover:text-tech-blue transition-colors duration-300 mb-6 animated-underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Infrastructure Services</span>
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center shadow-card">
                    <HardDrive className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h1 className="text-responsive-xl font-bold text-tech-blue">Network Setup</h1>
                    <p className="text-tech-teal font-semibold text-lg">Professional Installation & Configuration</p>
                  </div>
                </div>
                
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Complete network setup services including design, installation, configuration, 
                  and optimization for reliable, high-performance business networks.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" className="hover-lift">
                    Get Network Setup Quote
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
                  src={infrastructureImage}
                  alt="Professional Network Setup Services"
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
              Professional Network Setup Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our network setup services ensure your business has a reliable, secure, 
              and high-performance network infrastructure.
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

export default NetworkSetupPage;