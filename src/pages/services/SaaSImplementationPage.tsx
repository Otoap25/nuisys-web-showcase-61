import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Database, Users, Settings, BookOpen, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cloudImage from "@/assets/cloud-ai.jpg";

const SaaSImplementationPage = () => {
  const features = [
    {
      icon: Database,
      title: "Platform Selection",
      description: "Expert guidance in choosing the right SaaS solutions for your business"
    },
    {
      icon: Settings,
      title: "Custom Configuration",
      description: "Tailored setup and configuration to match your business processes"
    },
    {
      icon: Users,
      title: "User Training",
      description: "Comprehensive training programs for smooth user adoption"
    },
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Complete documentation and best practices for ongoing success"
    },
    {
      icon: Shield,
      title: "Data Migration",
      description: "Secure data migration from legacy systems to new SaaS platforms"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Ongoing optimization and performance monitoring services"
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
              to="/services/cloud" 
              className="inline-flex items-center space-x-2 text-tech-teal hover:text-tech-blue transition-colors duration-300 mb-6 animated-underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Cloud & AI Solutions</span>
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center shadow-card">
                    <Database className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h1 className="text-responsive-xl font-bold text-tech-blue">SaaS Implementation</h1>
                    <p className="text-tech-teal font-semibold text-lg">Software as a Service Deployment</p>
                  </div>
                </div>
                
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Professional SaaS implementation services with platform selection, custom configuration, 
                  user training, and ongoing support for successful adoption.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" className="hover-lift">
                    Get SaaS Quote
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
                  src={cloudImage}
                  alt="Professional SaaS Implementation Services"
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
              Professional SaaS Implementation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our SaaS implementation services ensure successful adoption with proper training, 
              configuration, and ongoing support.
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

export default SaaSImplementationPage;