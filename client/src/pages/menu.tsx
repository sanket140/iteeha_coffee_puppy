import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menuData, getAllCategories, getMenuByCategory } from "@/data/menu-data";
import { Leaf } from "lucide-react";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...getAllCategories()];

  const getDisplayItems = () => {
    if (selectedCategory === "All") return menuData;
    return getMenuByCategory(selectedCategory);
  };

  return (
    <div className="min-h-screen bg-background pt-8" data-testid="page-menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground" data-testid="menu-title">
            Our Menu
          </h1>
          <p className="text-xl text-muted-foreground" data-testid="menu-subtitle">
            Thoughtfully curated coffee, bakes, artisanal teas, and premium sandwiches - Basic but Beautiful
          </p>
          <div className="flex items-center justify-center space-x-8 text-muted-foreground">
            <span data-testid="menu-cost">₹500-1050 Cost for Two</span>
            <span>•</span>
            <span data-testid="menu-hours">7:30 AM - 11:30 PM All Days</span>
          </div>
        </motion.div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-8" data-testid="menu-tabs">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="text-sm"
                data-testid={`tab-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory}>
            {selectedCategory === "Matcha Specials" && (
              <motion.div 
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4 text-center" data-testid="matcha-title">
                  Matcha Specials
                </h2>
                <p className="text-center text-muted-foreground mb-12" data-testid="matcha-subtitle">
                  Premium matcha creations crafted with love
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {getMenuByCategory("Matcha Specials").map((item, index) => (
                    <motion.div
                      key={item.id}
                      className="bg-card rounded-2xl overflow-hidden shadow-lg card-hover"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      data-testid={`menu-item-${item.id}`}
                    >
                      {item.image && (
                        <img 
                          src={item.image} 
                          alt={`${item.name} - ${item.description}`}
                          className="w-full h-48 object-cover"
                          data-testid={`img-${item.id}`}
                        />
                      )}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            {item.isVeg && (
                              <Badge variant="secondary" className="text-green-600" data-testid={`badge-veg-${item.id}`}>
                                <Leaf className="w-3 h-3 mr-1" />
                                Veg
                              </Badge>
                            )}
                          </div>
                          <span className="text-2xl font-bold text-foreground" data-testid={`price-${item.id}`}>
                            ₹{item.price}
                          </span>
                        </div>
                        <h3 className="font-serif text-lg font-semibold text-foreground mb-2" data-testid={`name-${item.id}`}>
                          {item.name}
                        </h3>
                        <p className="text-muted-foreground mb-4" data-testid={`description-${item.id}`}>
                          {item.description}
                        </p>
                        <Button 
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                          data-testid={`button-add-cart-${item.id}`}
                        >
                          ADD TO CART
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {selectedCategory !== "Matcha Specials" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getDisplayItems().map((item, index) => (
                    <motion.div
                      key={item.id}
                      className="bg-card rounded-xl p-6 card-hover"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      data-testid={`menu-item-${item.id}`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-serif text-lg font-semibold text-foreground" data-testid={`name-${item.id}`}>
                          {item.name}
                        </h3>
                        <span className="text-xl font-bold text-foreground" data-testid={`price-${item.id}`}>
                          ₹{item.price}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-3">
                        {item.isVeg && (
                          <Badge variant="secondary" className="text-green-600 text-xs" data-testid={`badge-veg-${item.id}`}>
                            <Leaf className="w-3 h-3 mr-1" />
                            Veg
                          </Badge>
                        )}
                        {!item.isVeg && (
                          <Badge variant="secondary" className="text-red-600 text-xs" data-testid={`badge-non-veg-${item.id}`}>
                            Non-Veg
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-3" data-testid={`description-${item.id}`}>
                        {item.description}
                      </p>
                      
                      {item.specialNote && (
                        <p className="text-xs text-accent mb-4" data-testid={`special-note-${item.id}`}>
                          {item.specialNote}
                        </p>
                      )}
                      
                      <Button 
                        size="sm"
                        className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        data-testid={`button-add-order-${item.id}`}
                      >
                        Add to Order
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </TabsContent>
        </Tabs>

        {/* Good to Know Section */}
        <motion.div 
          className="bg-card rounded-2xl p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-testid="good-to-know"
        >
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Good to Know</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-3" data-testid="payment-title">Payment Options</h3>
              <p className="text-muted-foreground text-sm" data-testid="payment-description">
                We accept card payments via PayEazy for your convenience
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3" data-testid="dietary-title">Dietary Options</h3>
              <p className="text-muted-foreground text-sm" data-testid="dietary-description">
                Vegetarian and non-vegetarian options available. No alcohol served.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3" data-testid="order-title">Order Online</h3>
              <p className="text-muted-foreground text-sm mb-3" data-testid="order-description">
                Skip the wait and order online for pickup or delivery
              </p>
              <Button 
                size="sm"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                data-testid="button-order-online"
              >
                Order Online Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
