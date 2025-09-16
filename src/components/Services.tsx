import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Server, Zap, Cloud, Camera, Lock, HardDrive, Wifi, Battery, Sun, Database, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import securityImage from "@/assets/security-systems.jpg";
import infrastructureImage from "@/assets/infrastructure.jpg";
import powerImage from "@/assets/power-solutions.jpg";
import cloudImage from "@/assets/cloud-ai.jpg";

const Services = () => {
  const departments = [
    {
      id: "security",
      title: "Security Solutions",
      subtitle: "Protecting Your Assets",
      description: "Complete security infrastructure including surveillance, access control, and alarm systems.",
      image: securityImage,
      icon: Shield,
      services: [
        { name: "CCTV Systems", icon: Camera, desc: "Advanced surveillance solutions" },
        { name: "Door Access Control", icon: Lock, desc: "Smart access management" },
        { name: "Alarm Systems", icon: Shield, desc: "24/7 security monitoring" }
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
        { name: "Office Relocation", icon: Server, desc: "Seamless business transitions" },
        { name: "Data Cabling", icon: Wifi, desc: "Structured network infrastructure" },
        { name: "Network Setup", icon: HardDrive, desc: "Professional installation" }
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
        { name: "UPS Systems", icon: Battery, desc: "Uninterrupted power supply" },
        { name: "Generators", icon: Zap, desc: "Emergency power solutions" },
        { name: "Solar Systems", icon: Sun, desc: "Sustainable energy solutions" }
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
        { name: "Cloud Infrastructure", icon: Cloud, desc: "Scalable cloud solutions" },
        { name: "SaaS Implementation", icon: Database, desc: "Software as a Service" },
        { name: "AI Automation", icon: Bot, desc: "Intelligent process automation" }
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 space-y-6 animate-fade-in-up">
          <h2 className="text-responsive-lg font-bold text-tech-blue">
            Our Service Departments
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Specialized teams delivering comprehensive IT solutions across all technology domains
          </p>
        </div>

        {/* Services Grid */}
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
                  <div className="gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center shadow-card">
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
                      className="p-5 lg:p-6 border-muted cursor-pointer"
                      style={{ animationDelay: `${serviceIndex * 100}ms` }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-lg bg-tech-light flex items-center justify-center">
                          <service.icon className="w-5 h-5 text-tech-teal" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-foreground text-lg">{service.name}</h4>
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

                <Link to={`/services/${dept.id}`}>
                  <Button variant="outline-tech" className="w-fit">
                    Learn More About {dept.title}
                  </Button>
                </Link>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative">
                  <img
                    src={dept.image}
                    alt={`${dept.title} - Professional IT Services`}
                    className="rounded-3xl shadow-card w-full h-auto"
                  />
                  {/* Static badge */}
                  <div className="absolute top-6 right-6 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-card">
                    {dept.services.length} Services
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;