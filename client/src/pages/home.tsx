import { motion } from "framer-motion";
import HeroSection from "@/components/hero-section";
import FeaturedMenu from "@/components/featured-menu";
import PetServices from "@/components/pet-services";
import Testimonials from "@/components/testimonials";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div data-testid="page-home">
      <HeroSection />
      <FeaturedMenu />
      
      {/* About Section */}
      <section className="py-20" data-testid="about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Beautiful coffee art with heart-shaped latte art showcasing our craftsmanship" 
                className="rounded-2xl shadow-lg"
                data-testid="about-image"
              />
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold animate-pulse-soft">✨ Our Story</span>
                <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mt-4 gradient-text animate-wiggle" data-testid="about-title">
                  Where Tradition Meets <span className="text-accent animate-heartbeat">Tail Wags</span> 🐕
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-description">
                As a cozy café in the heart of Mumbai, we are a quiet spot for you amidst the city's turmoil. Now with our furry friends joining the family, we've created an even more special place where coffee lovers and dog lovers unite in a pet-friendly paradise.
              </p>
              
              <p className="text-muted-foreground leading-relaxed" data-testid="about-tradition">
                <strong>"Iteeha"</strong> roughly translates to <em>'as per tradition'</em>, and keeping that in mind, we adopted the virtue of doing <strong>'Basic but Beautiful'</strong> - now with an extra dose of puppy love. We offer premium pet foods, engaging toys, and a welcoming space for all furry friends.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <motion.div 
                  className="text-center bg-accent/10 rounded-xl p-4 fun-hover" 
                  data-testid="stat-resident-pups"
                  whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
                >
                  <div className="text-3xl font-bold text-accent animate-heartbeat">12+</div>
                  <div className="text-muted-foreground font-medium">🐾 Resident Pups</div>
                </motion.div>
                <motion.div 
                  className="text-center bg-accent/10 rounded-xl p-4 fun-hover" 
                  data-testid="stat-mumbai-locations"
                  whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                >
                  <div className="text-3xl font-bold text-accent animate-heartbeat" style={{ animationDelay: "0.2s" }}>3</div>
                  <div className="text-muted-foreground font-medium">📍 Mumbai Locations</div>
                </motion.div>
              </div>
              
              <Link href="/about">
                <Button 
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 button-fun animate-pulse-soft magic-cursor"
                  data-testid="button-learn-more"
                >
                  🐕 Learn More About Us ✨
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <PetServices />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-20" data-testid="cta-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-bold gradient-text mb-4 animate-wiggle relative sparkle-effect" data-testid="cta-title">
              Come Sip & Snuggle With Us 🤗
            </h2>
            <p className="text-xl text-muted-foreground mb-8" data-testid="cta-description">
              We're brewing daily from 7:30 AM to 11:30 PM. Find us in the heart of Mumbai with our furry friends and pet paradise!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 button-fun animate-heartbeat magic-cursor"
                  data-testid="button-visit-us"
                >
                  🏢 Visit Us 🐾
                </Button>
              </Link>
              <Link href="/order-landing">
                <Button 
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 rounded-xl text-lg font-semibold hover:bg-accent/10 button-fun animate-pulse-soft magic-cursor"
                  data-testid="button-order-online"
                >
                  🛒 Order Online ⚡
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
