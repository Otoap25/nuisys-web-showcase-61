import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Zap, Server } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "/services", icon: Shield },
    { name: "About", href: "/about", icon: Server },
    { name: "Contact", href: "/contact", icon: Zap },
  ];

  return (
    <nav className="fixed top-0 w-full glass border-b z-50 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <div className="gradient-primary w-10 h-10 rounded-xl flex items-center justify-center shadow-card">
              <span className="text-primary-foreground font-bold text-lg">N</span>
            </div>
            <span className="text-2xl font-bold text-tech-blue tracking-tight">Nuisys</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className="group flex items-center space-x-2 text-muted-foreground hover:text-tech-teal transition-all duration-300 py-2 px-3 rounded-lg hover:bg-tech-light/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium animated-underline">{item.name}</span>
              </Link>
            ))}
            <Button variant="tech" size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
              {isOpen ? 
                <X className="h-5 w-5 transition-transform duration-200 rotate-90" /> : 
                <Menu className="h-5 w-5 transition-transform duration-200" />
              }
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 animate-fade-in-up">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-tech-teal transition-all duration-300 px-4 py-3 rounded-lg hover:bg-tech-light/30"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
              <div className="px-4">
                <Button variant="tech" size="sm" className="w-full">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;