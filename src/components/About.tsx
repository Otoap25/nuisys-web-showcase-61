import { Card } from "@/components/ui/card";
import { Users, Award, Clock, Lightbulb } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Satisfied Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Clock, value: "24/7", label: "Support Available" },
    { icon: Lightbulb, value: "1000+", label: "Projects Completed" }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that give your business a competitive advantage."
    },
    {
      title: "Reliable Partnership",
      description: "Our commitment goes beyond installation. We provide ongoing support and maintenance to ensure your systems run smoothly."
    },
    {
      title: "Custom Solutions",
      description: "Every business is unique. We design and implement tailored IT solutions that perfectly match your specific requirements."
    },
    {
      title: "Expert Team",
      description: "Our certified professionals bring years of experience across all IT domains, ensuring quality and reliability in every project."
    }
  ];

  return (
    <section className="py-20 lg:py-32 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 space-y-6 animate-fade-in-up">
          <h2 className="text-responsive-lg font-bold text-tech-blue">
            About Nuisys
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Leading the way in innovative IT solutions since 2008. We specialize in comprehensive 
            technology services that empower businesses to thrive in the digital age.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-6 lg:p-8 text-center shadow-card animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-card">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-tech-blue mb-2">
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
              className="p-8 lg:p-10 shadow-card animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl lg:text-2xl font-bold text-tech-blue mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {value.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <Card className="p-10 lg:p-12 max-w-5xl mx-auto shadow-tech gradient-primary">
            <h3 className="text-2xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Our Mission
            </h3>
            <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed">
              To deliver innovative, reliable, and scalable IT solutions that transform how businesses 
              operate, ensuring they stay ahead in an ever-evolving technological landscape while 
              maintaining the highest standards of security and performance.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;