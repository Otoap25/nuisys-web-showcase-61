import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
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

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 space-y-6 animate-fade-in-up">
          <h2 className="text-responsive-lg font-bold text-tech-blue">
            Get in Touch
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your IT infrastructure? Contact our experts for a free consultation 
            and discover how we can help your business thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20">
          {/* Contact Form */}
          <Card className="p-8 lg:p-10 shadow-card animate-fade-in-up">
            <h3 className="text-2xl lg:text-3xl font-bold text-tech-blue mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    First Name
                  </label>
                  <Input 
                    placeholder="John" 
                    className="h-12 border-2 focus:border-tech-teal transition-all duration-300 hover:shadow-card"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe" 
                    className="h-12 border-2 focus:border-tech-teal transition-all duration-300 hover:shadow-card"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="john@company.com" 
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
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your project requirements..."
                  className="min-h-[140px] border-2 focus:border-tech-teal transition-all duration-300 hover:shadow-card resize-none"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full h-14 text-lg">
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
                className="p-6 lg:p-8 shadow-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="gradient-primary w-14 h-14 rounded-2xl flex items-center justify-center shadow-card">
                    <info.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-tech-blue mb-3 text-lg">
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
            <Card className="p-8 lg:p-10 shadow-tech gradient-primary">
              <h4 className="font-bold text-primary-foreground mb-4 text-xl">24/7 Emergency Support</h4>
              <p className="text-primary-foreground/90 mb-6 text-lg leading-relaxed">
                Critical system issues? Our emergency support team is always ready to help.
              </p>
              <Button 
                variant="outline" 
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary h-12 px-8"
              >
                Call Emergency Line
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;