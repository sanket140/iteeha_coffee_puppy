import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const PetServices = () => {
  const services = [
    {
      id: "toys",
      title: "Premium Pet Toys",
      description: "Engaging toys to keep your furry friends entertained",
      icon: "🦴",
      bgColor: "bg-accent/20",
      textColor: "text-accent"
    },
    {
      id: "food",
      title: "Nutritious Pet Food",
      description: "High-quality food and treats for happy, healthy pets",
      icon: "🥣",
      bgColor: "bg-primary/20",
      textColor: "text-primary"
    },
    {
      id: "environment",
      title: "Pet-Friendly Environment",
      description: "Welcoming space where pets feel at home",
      icon: "❤️",
      bgColor: "bg-green-500/20",
      textColor: "text-green-600"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" data-testid="pet-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-bold gradient-text relative sparkle-effect animate-wiggle" data-testid="services-title">
            Pet Paradise, Every Day 🏰
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-in-up" data-testid="services-subtitle">
            We provide everything your furry friend needs! Premium pet foods, engaging toys, and a completely pet-friendly environment where tails wag and hearts are happy. 🐕💖
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-card rounded-2xl p-8 text-center card-hover fun-hover relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              data-testid={`service-${service.id}`}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, 2, -2, 0],
                transition: { duration: 0.4 }
              }}
            >
              <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow`}>
                <span className="text-3xl animate-heartbeat" data-testid={`icon-${service.id}`}>{service.icon}</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4" data-testid={`title-${service.id}`}>
                {service.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`description-${service.id}`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/contact">
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-accent/90 button-fun animate-pulse-soft"
              data-testid="button-visit-paradise"
            >
              🏖️ Visit Our Pet Paradise! 🎾
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PetServices;
