import { Shield, Server, Zap, Cloud, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const Footer = () => {
  const services = [
    { name: "CCTV Systems", href: "/services" },
    { name: "Door Access Control", href: "/services" },
    { name: "Data Cabling", href: "/services" },
    { name: "Office Relocation", href: "/services" },
    { name: "UPS Systems", href: "/services" },
    { name: "Cloud Infrastructure", href: "/services" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about" },
    { name: "Careers", href: "/contact" },
    { name: "Case Studies", href: "/services" },
    { name: "Blog", href: "/" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground relative overflow-hidden">
      {/* Background overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info Card */}
          <Card className="bg-background/10 backdrop-blur-md border-primary-foreground/20 shadow-tech hover:shadow-accent transition-all duration-300 p-6 hover-lift">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-tech-teal to-accent w-10 h-10 rounded-xl flex items-center justify-center shadow-card">
                  <span className="text-primary-foreground font-bold text-lg">N</span>
                </div>
                <span className="text-2xl font-bold text-tech-teal">Nuisys</span>
              </div>
              <p className="text-primary-foreground/90 leading-relaxed">
                Leading provider of innovative IT solutions, specializing in security systems, 
                infrastructure, power solutions, and cloud technologies.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm hover:text-tech-teal transition-colors">
                  <div className="bg-tech-teal/20 p-2 rounded-lg">
                    <Phone className="w-4 h-4 text-tech-teal" />
                  </div>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm hover:text-tech-teal transition-colors">
                  <div className="bg-tech-teal/20 p-2 rounded-lg">
                    <Mail className="w-4 h-4 text-tech-teal" />
                  </div>
                  <span>info@nuisys.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm hover:text-tech-teal transition-colors">
                  <div className="bg-tech-teal/20 p-2 rounded-lg">
                    <MapPin className="w-4 h-4 text-tech-teal" />
                  </div>
                  <span>123 Tech Street, Business District</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Services Card */}
          <Card className="bg-background/10 backdrop-blur-md border-primary-foreground/20 shadow-tech hover:shadow-accent transition-all duration-300 p-6 hover-lift">
            <h3 className="font-bold text-xl mb-6 text-tech-teal flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-tech-teal to-accent rounded-full mr-3" />
              Services
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href}
                    className="text-primary-foreground/80 hover:text-tech-teal transition-all duration-300 text-sm flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 bg-tech-teal/60 rounded-full mr-3 group-hover:bg-tech-teal transition-colors" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Card>

          {/* Company Card */}
          <Card className="bg-background/10 backdrop-blur-md border-primary-foreground/20 shadow-tech hover:shadow-accent transition-all duration-300 p-6 hover-lift">
            <h3 className="font-bold text-xl mb-6 text-tech-teal flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-tech-teal to-accent rounded-full mr-3" />
              Company
            </h3>
            <ul className="space-y-4">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.href}
                    className="text-primary-foreground/80 hover:text-tech-teal transition-all duration-300 text-sm flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 bg-tech-teal/60 rounded-full mr-3 group-hover:bg-tech-teal transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Card>

          {/* Departments Card */}
          <Card className="bg-background/10 backdrop-blur-md border-primary-foreground/20 shadow-tech hover:shadow-accent transition-all duration-300 p-6 hover-lift">
            <h3 className="font-bold text-xl mb-6 text-tech-teal flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-tech-teal to-accent rounded-full mr-3" />
              Departments
            </h3>
            <div className="space-y-5">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-tech-teal/10 hover:bg-tech-teal/20 transition-all duration-300 group cursor-pointer">
                <div className="bg-tech-teal/20 p-2 rounded-lg group-hover:bg-tech-teal/30 transition-colors">
                  <Shield className="w-5 h-5 text-tech-teal" />
                </div>
                <span className="text-sm font-medium">Security Solutions</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-tech-teal/10 hover:bg-tech-teal/20 transition-all duration-300 group cursor-pointer">
                <div className="bg-tech-teal/20 p-2 rounded-lg group-hover:bg-tech-teal/30 transition-colors">
                  <Server className="w-5 h-5 text-tech-teal" />
                </div>
                <span className="text-sm font-medium">Infrastructure & Cabling</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-tech-teal/10 hover:bg-tech-teal/20 transition-all duration-300 group cursor-pointer">
                <div className="bg-tech-teal/20 p-2 rounded-lg group-hover:bg-tech-teal/30 transition-colors">
                  <Zap className="w-5 h-5 text-tech-teal" />
                </div>
                <span className="text-sm font-medium">Power Solutions</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-tech-teal/10 hover:bg-tech-teal/20 transition-all duration-300 group cursor-pointer">
                <div className="bg-tech-teal/20 p-2 rounded-lg group-hover:bg-tech-teal/30 transition-colors">
                  <Cloud className="w-5 h-5 text-tech-teal" />
                </div>
                <span className="text-sm font-medium">Cloud & AI Solutions</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-tech-teal/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/70 text-sm flex items-center">
              <span className="w-2 h-2 bg-tech-teal rounded-full mr-2" />
              © 2024 Nuisys. All rights reserved.
            </p>
            <div className="flex space-x-8 text-sm">
              <a href="#" className="text-primary-foreground/70 hover:text-tech-teal transition-all duration-300 animated-underline">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-tech-teal transition-all duration-300 animated-underline">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-tech-teal transition-all duration-300 animated-underline">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;