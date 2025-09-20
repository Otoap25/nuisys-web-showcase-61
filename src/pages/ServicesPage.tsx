import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Server, Zap, Cloud, Camera, Lock, HardDrive, Wifi, Battery, Sun, Database, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import securityImage from "@/assets/security-systems.jpg";
import infrastructureImage from "@/assets/infrastructure.jpg";
import powerImage from "@/assets/power-solutions.jpg";
import cloudImage from "@/assets/cloud-ai.jpg";
import serviceDepartmentsBg from "@/assets/service-departments-bg.jpg";

const ServicesPage = () => {
  const departments = [
    {
      id: "security",
      title: "Security Solutions",
      subtitle: "Protecting Your Assets",
      description: "Complete security infrastructure including surveillance, access control, and alarm systems.",
      image: securityImage,
      icon: Shield,
      services: [
        { name: "CCTV Systems", icon: Camera, desc: "Advanced surveillance solutions with real-time monitoring" },
        { name: "Door Access Control", icon: Lock, desc: "Smart access management with biometric options" },
        { name: "Alarm Systems", icon: Shield, desc: "24/7 security monitoring and rapid response" }
      ]
    },
    {
      id: "infrastructure",
      title: "Infrastructure & Cabling",
      subtitle: "Building Your Network Foundation",
      description: "Professional office setup, relocation services, and structured cabling solutions.",
      image: infrastructureImage,
      icon: Server,
      services: [
        { name: "Office Relocation", icon: Server, desc: "Seamless business transitions with minimal downtime" },
        { name: "Data Cabling", icon: Wifi, desc: "Structured network infrastructure and fiber optics" },
        { name: "Network Setup", icon: HardDrive, desc: "Professional installation and configuration" }
      ]
    },
    {
      id: "power",
      title: "Power Solutions",
      subtitle: "Reliable Energy Infrastructure",
      description: "Comprehensive power backup systems from UPS to generators and renewable energy.",
      image: powerImage,
      icon: Zap,
      services: [
        { name: "UPS Systems", icon: Battery, desc: "Uninterrupted power supply for critical systems" },
        { name: "Generators", icon: Zap, desc: "Emergency power solutions and automatic transfer" },
        { name: "Solar Systems", icon: Sun, desc: "Sustainable energy solutions and grid integration" }
      ]
    },
    {
      id: "cloud",
      title: "Cloud & AI Solutions",
      subtitle: "Future-Ready Technology",
      description: "Advanced cloud infrastructure, SaaS solutions, and AI automation services.",
      image: cloudImage,
      icon: Cloud,
      services: [
        { name: "Cloud Infrastructure", icon: Cloud, desc: "Scalable cloud solutions and migration services" },
        { name: "SaaS Implementation", icon: Database, desc: "Software as a Service deployment and training" },
        { name: "AI Automation", icon: Bot, desc: "Intelligent process automation and machine learning" }
      ]
    }
  ];

  return (
    <div className="min-h-screen services-background">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${serviceDepartmentsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in-up">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 text-white/90 hover:text-white transition-colors duration-300 mb-6 animated-underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            
            <h1 className="text-responsive-xl font-bold text-white drop-shadow-lg">
              Our Service Departments
            </h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Specialized teams delivering comprehensive IT solutions across all technology domains with 
              cutting-edge expertise and 24/7 support.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {departments.map((dept, index) => (
              <div 
                key={dept.id} 
                className={`grid lg:grid-cols-2 gap-12 xl:gap-20 items-center animate-fade-in-up ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center shadow-card hover:shadow-accent transition-all duration-300 hover-scale">
                      <dept.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-responsive-md font-bold text-tech-blue">{dept.title}</h3>
                      <p className="text-tech-teal font-semibold text-lg">{dept.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">{dept.description}</p>

                  {/* Service Items */}
                  <div className="grid gap-4">
                    {dept.services.map((service, serviceIndex) => (
                      <Card 
                        key={serviceIndex} 
                        className="p-6 hover:shadow-card transition-all duration-300 border-muted hover-lift group cursor-pointer"
                        style={{ animationDelay: `${serviceIndex * 100}ms` }}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-lg bg-tech-light flex items-center justify-center group-hover:bg-tech-teal/10 transition-colors duration-300">
                            <service.icon className="w-6 h-6 text-tech-teal group-hover:scale-110 transition-transform duration-200" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-foreground text-lg mb-1">{service.name}</h4>
                            <p className="text-muted-foreground">{service.desc}</p>
                          </div>
                          <Link to={`/services/${dept.id}/${service.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '').replace(/--/g, '-')}`}>
                            <Button variant="outline" size="sm" className="hover-scale">
                              Learn More
                            </Button>
                          </Link>
                        </div>
                      </Card>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="hero" className="hover-lift animated-underline">
                      Get Quote for {dept.title}
                    </Button>
                    <Link to="/contact">
                      <Button variant="outline-tech" className="hover-scale w-full sm:w-auto">
                        Contact Our Team
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="absolute inset-0 gradient-tech rounded-3xl opacity-10 blur-3xl animate-glow"></div>
                  <div className="relative">
                    <img
                      src={dept.image}
                      alt={`${dept.title} - Professional IT Services`}
                      className="rounded-3xl shadow-card w-full h-auto hover-lift"
                    />
                    {/* Floating badge */}
                    <div className="absolute top-6 right-6 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-card animate-float">
                      {dept.services.length} Services
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;