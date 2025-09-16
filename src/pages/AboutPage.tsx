import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Award, Clock, Lightbulb, Target, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Satisfied Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Clock, value: "24/7", label: "Support Available" },
    { icon: Lightbulb, value: "1000+", label: "Projects Completed" }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that give your business a competitive advantage in today's digital landscape."
    },
    {
      icon: Shield,
      title: "Reliable Partnership",
      description: "Our commitment goes beyond installation. We provide ongoing support and maintenance to ensure your systems run smoothly and securely."
    },
    {
      icon: Lightbulb,
      title: "Custom Solutions",
      description: "Every business is unique. We design and implement tailored IT solutions that perfectly match your specific requirements and growth objectives."
    },
    {
      icon: Zap,
      title: "Expert Team",
      description: "Our certified professionals bring years of experience across all IT domains, ensuring quality and reliability in every project we undertake."
    }
  ];

  const timeline = [
    { year: "2008", event: "Founded Nuisys with a vision for innovative IT solutions" },
    { year: "2012", event: "Expanded to cloud infrastructure services" },
    { year: "2015", event: "Achieved 100+ successful client implementations" },
    { year: "2018", event: "Launched 24/7 emergency support services" },
    { year: "2020", event: "Introduced AI and automation solutions" },
    { year: "2024", event: "Celebrating 15+ years of excellence and innovation" }
  ];

  return (
    <div className="min-h-screen about-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in-up">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 text-tech-teal hover:text-tech-blue transition-colors duration-300 mb-6 animated-underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            
            <h1 className="text-responsive-xl font-bold text-tech-blue">
              About Nuisys
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Leading the way in innovative IT solutions since 2008. We specialize in comprehensive 
              technology services that empower businesses to thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="p-6 lg:p-8 text-center shadow-card hover:shadow-tech transition-all duration-500 hover-lift group animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-card">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-tech-blue mb-2 group-hover:text-tech-teal transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-8 lg:p-10 shadow-card hover:shadow-tech transition-all duration-500 hover-lift group animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="gradient-primary w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-card">
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-tech-blue group-hover:text-tech-teal transition-colors duration-300">
                    {value.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h3 className="text-2xl lg:text-3xl font-bold text-tech-blue text-center mb-12">Our Journey</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {timeline.map((item, index) => (
                <Card 
                  key={index}
                  className="p-6 shadow-card hover:shadow-tech transition-all duration-500 hover-lift group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-2xl font-bold text-tech-teal mb-3 group-hover:text-tech-blue transition-colors duration-300">
                    {item.year}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.event}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <Card className="p-10 lg:p-12 max-w-5xl mx-auto shadow-tech gradient-primary hover-lift">
              <h3 className="text-2xl lg:text-4xl font-bold text-primary-foreground mb-6">
                Our Mission
              </h3>
              <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed mb-8">
                To deliver innovative, reliable, and scalable IT solutions that transform how businesses 
                operate, ensuring they stay ahead in an ever-evolving technological landscape while 
                maintaining the highest standards of security and performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/services">
                  <Button variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 hover-scale">
                    View Our Services
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 hover-scale">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;