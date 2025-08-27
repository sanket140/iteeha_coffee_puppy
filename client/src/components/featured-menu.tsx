import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { featuredItems } from "@/data/menu-data";

const FeaturedMenu = () => {
  return (
    <section className="py-20 bg-muted/30" data-testid="featured-menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-bold gradient-text relative sparkle-effect" data-testid="featured-title">
            Our Pup-ular Favorites
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-in-up" data-testid="featured-subtitle">
            Handcrafted with premium ingredients and a dash of puppy love 🐾
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-card rounded-2xl overflow-hidden shadow-lg fun-card fun-hover relative"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              data-testid={`featured-item-${item.id}`}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, 1, -1, 0],
                transition: { duration: 0.3 }
              }}
            >
              <img 
                src={item.image} 
                alt={`${item.name} - ${item.description}`}
                className="w-full h-48 object-cover"
                data-testid={`img-${item.id}`}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge 
                    variant="secondary" 
                    className="bg-accent/20 text-accent"
                    data-testid={`badge-${item.id}`}
                  >
                    {item.specialNote}
                  </Badge>
                  <span className="text-2xl font-bold text-foreground" data-testid={`price-${item.id}`}>
                    ₹{item.price}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2" data-testid={`name-${item.id}`}>
                  {item.name}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`description-${item.id}`}>
                  {item.description}
                </p>
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 button-fun animate-pulse-soft"
                  data-testid={`button-add-cart-${item.id}`}
                >
                  🛒 Add to Cart ✨
                </Button>
              </div>
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
          <Link href="/menu">
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-accent/90 button-fun animate-bounce-slow animate-heartbeat"
              data-testid="button-see-full-menu"
            >
              🍽️ See Full Menu 🌟
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
