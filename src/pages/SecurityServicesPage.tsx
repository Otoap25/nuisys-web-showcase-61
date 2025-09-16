import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Camera, Lock, Eye, Users, Bell, MapPin, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import securityImage from "@/assets/security-systems.jpg";

const SecurityServicesPage = () => {
  const services = [
    {
      name: "CCTV Systems",
      icon: Camera,
      description: "Advanced surveillance solutions with real-time monitoring, AI-powered analytics, and cloud storage capabilities.",
      features: [
        "4K Ultra HD recording quality",
        "Night vision technology", 
        "Motion detection alerts",
        "Remote monitoring access",
        "Cloud storage integration",
        "AI-powered analytics"
      ]
    },
    {
      name: "Door Access Control",
      icon: Lock,
      description: "Smart access management systems with biometric options, card readers, and mobile app integration.",
      features: [
        "Biometric fingerprint scanning",
        "RFID card access",
        "Mobile app integration",
        "Real-time access logs",
        "Multi-level permissions",
        "Emergency lockdown features"
      ]
    },
    {
      name: "Alarm Systems",
      icon: Shield,
      description: "Comprehensive security monitoring with 24/7 surveillance, rapid response, and emergency protocols.",
      features: [
        "24/7 monitoring center",
        "Instant alert notifications",
        "Emergency response protocols",
        "Fire and smoke detection",
        "Panic button systems",
        "Integration with local authorities"
      ]
    }
  ];

  const benefits = [
    { icon: Eye, title: "24/7 Monitoring", desc: "Round-the-clock surveillance and response" },
    { icon: Users, title: "Expert Support", desc: "Certified security professionals" },
    { icon: Bell, title: "Instant Alerts", desc: "Real-time notifications and responses" },
    { icon: MapPin, title: "Remote Access", desc: "Monitor from anywhere, anytime" }
  ];

  return (
    <div className="min-h-screen services-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 animate-fade-in-up">
            <Link 
              to="/services" 
              className="inline-flex items-center space-x-2 text-tech-teal hover:text-tech-blue transition-colors duration-300 animated-underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Services</span>
            </Link>
            
            <div className="flex items-center space-x-4 mb-8">
              <div className="gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center shadow-card">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-responsive-xl font-bold text-tech-blue">Security Solutions</h1>
                <p className="text-tech-teal font-semibold text-xl">Protecting Your Assets</p>
              </div>
            </div>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl leading-relaxed">
              Comprehensive security infrastructure solutions designed to protect your business, assets, and personnel 
              with cutting-edge technology and professional monitoring services.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <img
              src={securityImage}
              alt="Security Solutions - Professional IT Services"
              className="rounded-3xl shadow-card w-full h-auto max-h-96 object-cover"
            />
            <div className="absolute top-6 right-6 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-card">
              {services.length} Security Services
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="p-8 lg:p-12 hover:shadow-card transition-all duration-300 border-muted">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-tech-light flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-tech-teal" />
                      </div>
                      <h3 className="text-responsive-md font-bold text-tech-blue">{service.name}</h3>
                    </div>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground text-lg">Key Features:</h4>
                      <div className="grid gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-tech-teal flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button variant="tech" className="w-fit">
                        Get Quote for {service.name}
                      </Button>
                      <Link to={`/services/security/${service.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '').replace(/--/g, '-')}`}>
                        <Button variant="outline-tech" className="w-fit">
                          Learn More About {service.name}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-responsive-lg font-bold text-tech-blue">Why Choose Our Security Solutions?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional security infrastructure with industry-leading technology and 24/7 support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-tech-light flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-tech-teal" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-responsive-lg font-bold text-tech-blue">Ready to Secure Your Business?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contact our security experts for a comprehensive assessment and customized solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Get Security Assessment
              </Button>
              <Link to="/contact">
                <Button variant="outline-tech" size="lg">
                  Contact Security Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SecurityServicesPage;