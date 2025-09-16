import { Shield, Server, Zap, Cloud, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

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
    <footer className="bg-tech-blue text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-tech-teal w-8 h-8 rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold">Nuisys</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Leading provider of innovative IT solutions, specializing in security systems, 
              infrastructure, power solutions, and cloud technologies.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@nuisys.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>123 Tech Street, Business District</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href}
                    className="text-primary-foreground/80 hover:text-tech-teal transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.href}
                    className="text-primary-foreground/80 hover:text-tech-teal transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="font-bold text-lg mb-6">Departments</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-tech-teal" />
                <span className="text-sm">Security Solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Server className="w-4 h-4 text-tech-teal" />
                <span className="text-sm">Infrastructure & Cabling</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-tech-teal" />
                <span className="text-sm">Power Solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Cloud className="w-4 h-4 text-tech-teal" />
                <span className="text-sm">Cloud & AI Solutions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Nuisys. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-tech-teal transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-tech-teal transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-tech-teal transition-colors">
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