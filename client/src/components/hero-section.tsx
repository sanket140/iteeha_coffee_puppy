import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="hero-gradient text-primary-foreground relative overflow-hidden" data-testid="hero-section">
      <div className="absolute inset-0 paw-print"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.h1 
                className="font-serif text-5xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                data-testid="hero-title"
              >
                Coffee.<br />
                <span className="text-accent">Craft.</span><br />
                Conversations<br />
                & <span className="text-accent">Cuddles</span>
              </motion.h1>
              <motion.p 
                className="text-xl lg:text-2xl text-primary-foreground/90 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                data-testid="hero-subtitle"
              >
                Where every cup tells a story and every pup finds a friend.
              </motion.p>
              <motion.p 
                className="text-lg text-primary-foreground/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                data-testid="hero-description"
              >
                Pet-friendly space with toys, treats, and endless tail wags.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/order-landing">
                <Button 
                  size="lg"
                  className="bg-accent text-accent-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-accent/90 transition-colors duration-200 shadow-lg button-fun animate-pulse-soft"
                  data-testid="button-order-now"
                >
                  ☕ Order Now
                </Button>
              </Link>
              <Link href="/about">
                <Button 
                  variant="outline"
                  size="lg"
                  className="bg-card/20 backdrop-blur text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-card/30 transition-colors duration-200 border border-primary-foreground/20 button-fun animate-wiggle"
                  data-testid="button-meet-pups"
                >
                  🐾 Meet Our Pups
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-8 text-primary-foreground/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="text-center" data-testid="stat-pups">
                <div className="text-2xl font-bold">12+</div>
                <div className="text-sm">Resident Pups</div>
              </div>
              <div className="text-center" data-testid="stat-locations">
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm">Mumbai Locations</div>
              </div>
              <div className="text-center" data-testid="stat-hours">
                <div className="text-2xl font-bold">7:30-23:30</div>
                <div className="text-sm">Daily Hours</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Cozy cafe with beautiful latte art and warm atmosphere" 
              className="rounded-2xl shadow-2xl animate-float"
              data-testid="hero-image"
            />
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              data-testid="hero-badge"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground">❤️</span>
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Pet-Friendly</div>
                  <div className="text-sm text-muted-foreground">Toys & Treats Available</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
