import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-tech.jpg";
import datacenterBg from "@/assets/datacenter-background.jpg";

const Hero = () => {
  const features = [
    "24/7 Professional Support",
    "Certified IT Specialists",
    "Custom Solutions",
    "Scalable Infrastructure"
  ];

  return (
    <section 
      className="pt-20 min-h-screen flex items-center gradient-subtle overflow-hidden relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${datacenterBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-responsive-xl font-bold leading-tight tracking-tight">
                <span className="text-tech-blue block">Innovative</span>
                <span className="text-tech-teal block animate-fade-in" style={{ animationDelay: '200ms' }}>IT Solutions</span>
                <span className="text-foreground block animate-fade-in" style={{ animationDelay: '400ms' }}>
                  for Modern Business
                </span>
              </h1>
              <p className="text-responsive-md text-muted-foreground max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: '600ms' }}>
                Comprehensive IT services from security systems to cloud infrastructure. 
                Empowering your business with cutting-edge technology and reliable support.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '800ms' }}>
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-tech-light/20 transition-all duration-300 hover-lift"
                  style={{ animationDelay: `${1000 + index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-tech-teal flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '1200ms' }}>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group hover-lift w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline-tech" size="lg" className="hover-scale w-full sm:w-auto">
                  View Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="relative">
              <img
                src={heroImage}
                alt="Nuisys IT Solutions - Modern Technology Infrastructure"
                className="rounded-3xl shadow-tech w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;