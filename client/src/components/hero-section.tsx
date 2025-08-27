import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import AutoCarousel from "@/components/ui/carousel-auto";

const HeroSection = () => {
  const carouselItems = [
    {
      id: 1,
      image: "https://iteeha.coffee/images/vfx.png",
      title: "Coffee & Craft",
      description: "Artisanal coffee meets cozy atmosphere"
    },
    {
      id: 2,
      image: "https://iteeha.coffee/images/e6.jpg",
      title: "Pet Paradise",
      description: "Where furry friends are family"
    },
    {
      id: 3,
      image: "https://iteeha.coffee/images/urmi.jpg",
      title: "Community Hub",
      description: "Stories shared over perfect cups"
    }
  ];

  return (
    <section className="hero-gradient text-primary-foreground relative overflow-hidden min-h-screen" data-testid="hero-section">
      <div className="absolute inset-0 paw-print"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.h1 
                className="font-serif text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                data-testid="hero-title"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)' }}
              >
                <span className="text-white">Coffee.</span><br />
                <span className="text-yellow-300 drop-shadow-md">Craft.</span><br />
                <span className="text-white">Conversations</span><br />
                <span className="text-white">& </span><span className="text-yellow-300 drop-shadow-md">Cuddles</span>
              </motion.h1>
              <motion.p 
                className="text-xl lg:text-2xl text-white font-medium max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                data-testid="hero-subtitle"
                style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}
              >
                Where every cup tells a story and every pup finds a friend.
              </motion.p>
              <motion.p 
                className="text-lg text-white font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                data-testid="hero-description"
                style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}
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
              className="flex items-center space-x-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="text-center bg-black/30 backdrop-blur-sm rounded-xl p-4 hover:bg-black/40 transition-all duration-300 border border-white/20" data-testid="stat-pups">
                <div className="text-2xl font-bold text-yellow-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>12+</div>
                <div className="text-sm text-white font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Resident Pups</div>
              </div>
              <div className="text-center bg-black/30 backdrop-blur-sm rounded-xl p-4 hover:bg-black/40 transition-all duration-300 border border-white/20" data-testid="stat-locations">
                <div className="text-2xl font-bold text-yellow-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>3</div>
                <div className="text-sm text-white font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Mumbai Locations</div>
              </div>
              <div className="text-center bg-black/30 backdrop-blur-sm rounded-xl p-4 hover:bg-black/40 transition-all duration-300 border border-white/20" data-testid="stat-hours">
                <div className="text-2xl font-bold text-yellow-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>7:30-23:30</div>
                <div className="text-sm text-white font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Daily Hours</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative h-[500px] lg:h-[600px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AutoCarousel 
              items={carouselItems}
              autoplayInterval={4000}
              className="h-full animate-float"
            />
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              data-testid="hero-badge"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-bounce-slow">
                  <span className="text-accent-foreground text-xl">❤️</span>
                </div>
                <div>
                  <div className="font-bold text-card-foreground">Pet-Friendly</div>
                  <div className="text-sm text-muted-foreground font-medium">Toys & Treats Available</div>
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
