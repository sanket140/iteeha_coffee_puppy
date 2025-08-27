import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Coffee, Truck } from "lucide-react";
import { Link } from "wouter";

const OrderLanding = () => {
  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery");
  const [location, setLocation] = useState("");

  const steps = [
    {
      id: "location",
      number: 1,
      title: "Set your location",
      description: "Tell us where you want to get your items delivered with precision",
      icon: <MapPin className="w-6 h-6" />,
      color: "bg-primary/20 text-primary"
    },
    {
      id: "choose",
      number: 2,
      title: "Choose your items",
      description: "Browse our curated menu and add your favorite treats to cart",
      icon: <Coffee className="w-6 h-6" />,
      color: "bg-accent/20 text-accent"
    },
    {
      id: "enjoy",
      number: 3,
      title: "Enjoy fresh delivery",
      description: "Sit back and relax while we deliver hot, fresh items to your doorstep",
      icon: <Truck className="w-6 h-6" />,
      color: "bg-green-500/20 text-green-600"
    }
  ];

  const features = [
    { id: "coffee", title: "Premium Coffee", description: "Freshly roasted beans brewed to perfection", icon: "☕" },
    { id: "food", title: "Fresh Food", description: "Sandwiches, bakes & treats made daily", icon: "🥪" },
    { id: "delivery", title: "Fast Delivery", description: "Hot & fresh to your doorstep", icon: "🚚" },
    { id: "quality", title: "Quality First", description: "Basic but beautiful, every time", icon: "⭐" }
  ];

  return (
    <div className="min-h-screen bg-background pt-8" data-testid="page-order-landing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center space-y-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-4">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=120&h=120&fit=crop&crop=center" 
              alt="Fresh coffee cup with steam, representing hot delivery" 
              className="w-16 h-16 rounded-full object-cover"
              data-testid="header-image"
            />
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground" data-testid="order-title">
              Let's get ordering
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="order-subtitle">
            Craving something delicious? Let us bring the finest coffee and treats right to your doorstep.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Order Form Section */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Order Type Selection */}
            <div className="space-y-4">
              <div className="flex space-x-4" data-testid="order-type-selection">
                <Button
                  onClick={() => setOrderType("delivery")}
                  className={orderType === "delivery" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground"
                  }
                  data-testid="button-delivery"
                >
                  Delivery
                </Button>
                <Button
                  onClick={() => setOrderType("pickup")}
                  className={orderType === "pickup" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground"
                  }
                  data-testid="button-pickup"
                >
                  Pickup
                </Button>
              </div>
            </div>

            {/* Location Input */}
            <div className="bg-card rounded-xl p-6 space-y-6" data-testid="location-section">
              <div className="flex items-center space-x-2">
                <img 
                  src="https://iteeha.coffee/images/vfx.png" 
                  alt="Iteeha Coffee logo" 
                  className="w-8 h-8"
                  data-testid="location-logo"
                />
                <h2 className="font-semibold text-foreground" data-testid="location-title">
                  Where would you like your order?
                </h2>
              </div>
              
              <p className="text-muted-foreground" data-testid="location-description">
                We'll deliver fresh and hot to your location
              </p>
              
              <div className="space-y-4">
                <Button 
                  variant="outline"
                  className="w-full border-accent/30 text-accent hover:bg-accent/10 flex items-center justify-center space-x-2"
                  data-testid="button-current-location"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Use my current location</span>
                </Button>
                
                <Input
                  type="text"
                  placeholder="or enter manually"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full"
                  data-testid="input-location"
                />
              </div>
              
              <Link href="/menu">
                <Button 
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  data-testid="button-confirm-location"
                >
                  Confirm Location & Browse Menu
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* How it Works Section */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-2" data-testid="how-it-works-title">
                How it works
              </h2>
              <p className="text-muted-foreground" data-testid="how-it-works-subtitle">
                Simple steps to satisfy your cravings
              </p>
            </div>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  data-testid={`step-${step.id}`}
                >
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2" data-testid={`step-title-${step.id}`}>
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground" data-testid={`step-description-${step.id}`}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* What's Waiting Section */}
            <div className="bg-muted/50 rounded-xl p-6" data-testid="whats-waiting">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4" data-testid="whats-waiting-title">
                What's waiting for you
              </h3>
              <p className="text-muted-foreground mb-4" data-testid="whats-waiting-subtitle">
                A taste of our delicious offerings
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature.id} className="space-y-2" data-testid={`feature-${feature.id}`}>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg" data-testid={`icon-${feature.id}`}>{feature.icon}</span>
                      <span className="font-medium text-foreground text-sm" data-testid={`title-${feature.id}`}>
                        {feature.title}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground" data-testid={`description-${feature.id}`}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Ready to Order CTA */}
        <motion.div 
          className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl p-12 text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-testid="ready-to-order"
        >
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4" data-testid="cta-title">
            Ready to satisfy your cravings?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8" data-testid="cta-description">
            Fresh coffee, delicious food, and puppy love delivered to your door
          </p>
          
          <Link href="/menu">
            <Button 
              size="lg"
              className="bg-card text-card-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-card/90 transition-colors duration-200 shadow-lg"
              data-testid="button-start-ordering"
            >
              Start Ordering Now
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderLanding;
