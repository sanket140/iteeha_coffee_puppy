import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const About = () => {
  const values = [
    {
      id: "tradition",
      title: "Tradition",
      description: "'As per tradition' - we honor time-tested methods while embracing innovation in our craft.",
      icon: "🏛️"
    },
    {
      id: "quality",
      title: "Quality",
      description: "From sourcing the finest beans to training our staff - excellence in every detail.",
      icon: "⭐"
    },
    {
      id: "pet-friendly",
      title: "Pet-Friendly",
      description: "'Paws Welcome' - we believe every furry friend deserves love, treats, and a warm welcome.",
      icon: "🐾"
    }
  ];

  const services = [
    {
      id: "food",
      title: "Premium Pet Foods",
      description: "Nutritious meals and treats specially curated for your furry friends' health and happiness."
    },
    {
      id: "toys",
      title: "Interactive Pet Toys",
      description: "Engaging toys and games to keep your pets entertained while you enjoy your coffee."
    },
    {
      id: "space",
      title: "Pet-Friendly Space",
      description: "Dedicated areas where pets can roam freely, socialize, and feel completely at home."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-8" data-testid="page-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground" data-testid="about-title">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="about-subtitle">
            Where tradition meets innovation in every carefully crafted cup and every wagging tail ✨
          </p>
        </motion.div>

        {/* Main Story Section */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <div>
              <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold">Who We Are ☕</span>
            </div>
            
            <div className="space-y-4" data-testid="story-content">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a cozy café in the heart of Mumbai, we are a quiet spot for you amidst the city's turmoil. With our thoughtfully curated range of coffees, bakes, artisanal teas, freshly cold-pressed juices and premium sandwiches, Iteeha Coffee is your space to unwind - now with your furry friends!
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                The fact that we are an articulation of Iteeha Corporation, an art studio where creativity and traditions are celebrated, shows in our minimal and elegant ambience - enhanced by the joyful presence of our pet community.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                <strong>"Iteeha"</strong> roughly translates to <em>'as per tradition'</em>, and keeping that in mind, we adopted the virtue of doing <strong>'Basic but Beautiful'</strong>. We offer light and simple products, but beautifully done - now with premium pet foods and toys for our four-legged guests. ✨
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                We understand the importance of a well-made cup of coffee and a happy pet, hence we focus immensely on sourcing just the right beans, training our staff continually, and equipping our cafes with the best machines and pet-friendly amenities.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Tie that in with our warm service and pet-welcoming atmosphere, and you've got yourself an experience that will keep both you and your furry friend coming back for more. Iteeha Coffee is a sanctuary for all those seeking a comforting cuppa and quality time with their pets.
              </p>
            </div>
          </div>
          
          <div>
            <img 
              src="https://iteeha.coffee/images/aboutiteeha.png" 
              alt="About Iteeha Coffee - Our cozy cafe environment" 
              className="rounded-2xl shadow-lg w-full"
              data-testid="about-image"
            />
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground" data-testid="values-title">
              Our Values 🌟
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="values-subtitle">
              The principles that guide us in creating exceptional coffee experiences and pet paradise ✨
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                className="bg-card rounded-2xl p-8 text-center card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                data-testid={`value-${value.id}`}
              >
                <div className="text-4xl mb-4" data-testid={`icon-${value.id}`}>{value.icon}</div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4" data-testid={`title-${value.id}`}>
                  {value.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`description-${value.id}`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pet Paradise Services */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground" data-testid="services-title">
              Pet Paradise Services 🐾
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="services-subtitle">
              Everything your furry friends need for a pawsome experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-card rounded-2xl p-8 card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                data-testid={`service-${service.id}`}
              >
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4" data-testid={`service-title-${service.id}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`service-description-${service.id}`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Furry Family Section */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground" data-testid="furry-family-title">
              Our Furry Family 🐕
            </h2>
            
            <div className="space-y-4" data-testid="furry-family-content">
              <p className="text-lg text-muted-foreground leading-relaxed">
                In our journey to create the perfect sanctuary for coffee lovers, we discovered something magical happens when you add furry friends to the mix. Our resident pups have transformed Iteeha into more than just a coffee shop - it's now a place where hearts and tails connect.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Each of our 12+ resident dogs has their own personality and story. From Charlie the golden retriever who greets everyone at the door, to Luna the gentle beagle who loves to nap by the window - they've all found their forever home with us, creating a truly pet-friendly paradise.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                We believe that the warmth of a furry friend and the comfort of a perfect cup of coffee create an unmatched experience. Our comprehensive pet services - from premium foods to interactive toys - ensure every pet feels loved and cared for during their visit.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center" data-testid="stat-toys">
                <div className="text-3xl font-bold text-accent">100+</div>
                <div className="text-muted-foreground">Pet Toys Available</div>
              </div>
              <div className="text-center" data-testid="stat-food-varieties">
                <div className="text-3xl font-bold text-accent">20+</div>
                <div className="text-muted-foreground">Pet Food Varieties</div>
              </div>
            </div>
            
            <Link href="/contact">
              <Button 
                className="bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold hover:bg-accent/90 transition-colors duration-200"
                data-testid="button-visit-paradise"
              >
                Visit Our Pet Paradise
              </Button>
            </Link>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Cozy cafe with friendly dogs and customers enjoying time together" 
              className="rounded-2xl shadow-lg w-full"
              data-testid="furry-family-image"
            />
          </div>
        </motion.div>

        {/* Follow Our Journey */}
        <motion.div 
          className="bg-card rounded-2xl p-8 mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-testid="follow-journey"
        >
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4" data-testid="follow-title">
            Follow Our Journey
          </h2>
          <p className="text-muted-foreground mb-6" data-testid="follow-description">
            Stay connected with us and be part of our coffee and pet-loving community
          </p>
          <a 
            href="https://www.instagram.com/iteeha.coffee/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button 
              className="bg-pink-500 text-white hover:bg-pink-600 px-8 py-3 rounded-xl font-semibold transition-colors duration-200"
              data-testid="button-follow-instagram"
            >
              Follow Us on Instagram
            </Button>
          </a>
        </motion.div>

        {/* Experience the Magic CTA */}
        <motion.div 
          className="text-center space-y-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-testid="experience-magic"
        >
          <div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="magic-title">
              Experience the Magic
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="magic-description">
              Come discover what makes Iteeha Coffee & Pet Paradise special. Every visit is a new story waiting to unfold.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                data-testid="button-visit-today"
              >
                Visit Us Today
              </Button>
            </Link>
            <Link href="/menu">
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-4 rounded-xl text-lg font-semibold hover:bg-accent/10 transition-colors duration-200"
                data-testid="button-see-menu"
              >
                See Our Menu
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
