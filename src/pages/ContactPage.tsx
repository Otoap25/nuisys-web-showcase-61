import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Phone, Mail, MapPin, Clock, MessageSquare, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import contactHeroBg from "@/assets/contact-hero-bg.jpg";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      link: "tel:+15551234567"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@nuisys.com", "support@nuisys.com"],
      link: "mailto:info@nuisys.com"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Tech Street", "Business District, City 12345"],
      link: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "24/7 Emergency Support"],
      link: null
    }
  ];

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant support from our technical experts",
      action: "Start Chat",
      available: true
    },
    {
      icon: Users,
      title: "Team Meeting",
      description: "Schedule a consultation with our specialists",
      action: "Book Meeting",
      available: true
    },
    {
      icon: Calendar,
      title: "Site Visit",
      description: "Request an on-site assessment and consultation",
      action: "Schedule Visit",
      available: true
    }
  ];

  return (
    <div className="min-h-screen contact-background">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${contactHeroBg})`,
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
              Get in Touch
            </h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Ready to transform your IT infrastructure? Contact our experts for a free consultation 
              and discover how we can help your business thrive with cutting-edge technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <Card 
                key={index}
                className="p-8 text-center shadow-card hover:shadow-tech transition-all duration-500 hover-lift group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-card">
                  <method.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-tech-blue mb-4 group-hover:text-tech-teal transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {method.description}
                </p>
                <Button variant="outline-tech" className="hover-scale w-full">
                  {method.action}
                </Button>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 xl:gap-20">
            {/* Contact Form */}
            <Card className="p-8 lg:p-10 shadow-card hover:shadow-tech transition-all duration-500 animate-fade-in-up">
              <h3 className="text-2xl lg:text-3xl font-bold text-tech-blue mb-8">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                      First Name *
                    </label>
                    <Input 
                      placeholder="John" 
                      className="h-12 border-2 focus:border-tech-teal transition-all duration-300 hover:shadow-card"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                      Last Name *
                    </label>
                    <Input 
                      placeholder="Doe" 
                      className="h-12 border-2 focus:border-tech-teal transition-all duration-300 hover:shadow-card"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Email *
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@company.com" 
                    className="h-12 border-2 focus:border-tech-teal transition-all duration-300 hover:shadow-card"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Phone
                  </label>
                  <Input 
                    type="tel"
                    placeholder="+1 (555) 123-4567" 
                    className="h-12 border-2 focus:border-tech-teal transition-all duration-300 hover:shadow-card"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Company
                  </label>
                  <Input 
                    placeholder="Your Company Name" 
                    className="h-12 border-2 focus:border-tech-teal transition-all duration-300 hover:shadow-card"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Service Interest
                  </label>
                  <select className="w-full h-12 p-4 border-2 border-input rounded-md bg-background text-foreground focus:border-tech-teal transition-all duration-300 hover:shadow-card">
                    <option>Select a service</option>
                    <option>Security Solutions</option>
                    <option>Infrastructure & Cabling</option>
                    <option>Power Solutions</option>
                    <option>Cloud & AI Solutions</option>
                    <option>Complete IT Consultation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Project Budget
                  </label>
                  <select className="w-full h-12 p-4 border-2 border-input rounded-md bg-background text-foreground focus:border-tech-teal transition-all duration-300 hover:shadow-card">
                    <option>Select budget range</option>
                    <option>Under $10,000</option>
                    <option>$10,000 - $50,000</option>
                    <option>$50,000 - $100,000</option>
                    <option>Over $100,000</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing..."
                    className="min-h-[140px] border-2 focus:border-tech-teal transition-all duration-300 hover:shadow-card resize-none"
                    required
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full hover-lift h-14 text-lg">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl lg:text-3xl font-bold text-tech-blue mb-8">Contact Information</h3>
              
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="p-6 lg:p-8 shadow-card hover:shadow-tech transition-all duration-500 hover-lift group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-6">
                    <div className="gradient-primary w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-card">
                      <info.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-tech-blue mb-3 text-lg group-hover:text-tech-teal transition-colors duration-300">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground mb-1 text-lg">
                          {info.link && detailIndex === 0 ? (
                            <a 
                              href={info.link} 
                              className="hover:text-tech-teal transition-colors duration-300 animated-underline"
                              target={info.link.startsWith('http') ? '_blank' : undefined}
                              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}

              {/* Emergency Support */}
              <Card className="p-8 lg:p-10 shadow-tech gradient-primary hover-lift animate-glow">
                <h4 className="font-bold text-primary-foreground mb-4 text-xl">24/7 Emergency Support</h4>
                <p className="text-primary-foreground/90 mb-6 text-lg leading-relaxed">
                  Critical system issues? Our emergency support team is always ready to help with rapid response and expert solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="outline" 
                    className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 hover-scale h-12 px-8"
                  >
                    Call Emergency Line
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 hover-scale h-12 px-8"
                  >
                    Live Emergency Chat
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;