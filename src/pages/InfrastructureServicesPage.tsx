import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Server, Wifi, HardDrive, Network, Building, Cable, CheckCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import infrastructureImage from "@/assets/infrastructure.jpg";
import infrastructureHeroBg from "@/assets/infrastructure-hero-bg.jpg";

const InfrastructureServicesPage = () => {
  const services = [
    {
      name: "Office Relocation",
      icon: Building,
      description: "Seamless business transitions with minimal downtime, comprehensive planning, and professional execution.",
      features: [
        "Pre-move site assessment",
        "Equipment inventory and planning",
        "Minimal downtime scheduling",
        "Professional packing and transport",
        "Network reconfiguration",
        "Post-move support and testing"
      ]
    },
    {
      name: "Data Cabling",
      icon: Cable,
      description: "Structured network infrastructure with fiber optics, Category 6A cabling, and future-proof design.",
      features: [
        "Cat 6A structured cabling",
        "Fiber optic installations",
        "Cable management systems",
        "Network patch panels",
        "Cable testing and certification",
        "Future expansion planning"
      ]
    },
    {
      name: "Network Setup",
      icon: Network,
      description: "Professional network installation, configuration, and optimization for maximum performance and security.",
      features: [
        "Network design and planning",
        "Switch and router configuration",
        "Wireless network deployment",
        "Security implementation",
        "Performance optimization",
        "Documentation and training"
      ]
    }
  ];

  const benefits = [
    { icon: Clock, title: "Minimal Downtime", desc: "Strategic planning to keep your business running" },
    { icon: Server, title: "Enterprise Grade", desc: "Professional infrastructure solutions" },
    { icon: Wifi, title: "Future Ready", desc: "Scalable network architecture" },
    { icon: HardDrive, title: "Certified Team", desc: "Industry certified technicians" }
  ];

  return (
    <div className="min-h-screen services-background">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${infrastructureHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 animate-fade-in-up">
            <Link 
              to="/services" 
              className="inline-flex items-center space-x-2 text-white/90 hover:text-white transition-colors duration-300 animated-underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Services</span>
            </Link>
            
            <div className="flex items-center space-x-4 mb-8">
              <div className="gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center shadow-card">
                <Server className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-responsive-xl font-bold text-white drop-shadow-lg">Infrastructure & Cabling</h1>
                <p className="text-white/90 font-semibold text-xl drop-shadow-md">Building Your Network Foundation</p>
              </div>
            </div>
            
            <p className="text-lg lg:text-xl text-white/90 max-w-4xl leading-relaxed drop-shadow-md">
              Professional infrastructure solutions from office relocations to structured cabling systems, 
              ensuring your network foundation is robust, scalable, and future-ready.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <img
              src={infrastructureImage}
              alt="Infrastructure & Cabling - Professional IT Services"
              className="rounded-3xl shadow-card w-full h-auto max-h-96 object-cover"
            />
            <div className="absolute top-6 right-6 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-card">
              {services.length} Infrastructure Services
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
                      <Link to={`/services/infrastructure/${service.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '').replace(/--/g, '-')}`}>
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
            <h2 className="text-responsive-lg font-bold text-tech-blue">Why Choose Our Infrastructure Solutions?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade infrastructure with certified professionals and proven methodologies
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
            <h2 className="text-responsive-lg font-bold text-tech-blue">Ready to Build Your Infrastructure?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contact our infrastructure experts for a site assessment and customized solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Get Infrastructure Assessment
              </Button>
              <Link to="/contact">
                <Button variant="outline-tech" size="lg">
                  Contact Infrastructure Team
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

export default InfrastructureServicesPage;