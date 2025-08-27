import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground text-xl">🐾</span>
              </div>
              <div>
                <div className="font-serif font-bold text-2xl text-foreground">Iteeha Coffee</div>
                <div className="text-sm text-muted-foreground">& Pet Paradise</div>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md">
              Where every cup tells a story and every pup finds a friend. Experience the perfect blend of premium coffee and pet-friendly hospitality.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-accent">✉️</span>
                <span className="text-muted-foreground" data-testid="text-email">connect@iteeha.coffee</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-accent">🕒</span>
                <span className="text-muted-foreground" data-testid="text-hours">7:30 AM - 11:30 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-accent">📍</span>
                <span className="text-muted-foreground" data-testid="text-locations">3 Mumbai Locations</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-accent">🐾</span>
                <span className="text-muted-foreground" data-testid="text-pups">12+ Resident Pups</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors duration-200" data-testid="link-home">Home</Link>
              <Link href="/menu" className="block text-muted-foreground hover:text-primary transition-colors duration-200" data-testid="link-menu">Our Menu</Link>
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors duration-200" data-testid="link-about">About Us</Link>
              <Link href="/order-landing" className="block text-muted-foreground hover:text-primary transition-colors duration-200" data-testid="link-order">Order Online</Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors duration-200" data-testid="link-contact">Contact</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Pet Services</h3>
            <div className="space-y-3">
              <div className="text-muted-foreground">Premium Pet Food</div>
              <div className="text-muted-foreground">Interactive Toys</div>
              <div className="text-muted-foreground">Pet-Friendly Seating</div>
              <div className="text-muted-foreground">Dog Play Areas</div>
              <div className="text-muted-foreground">Pet Treats</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm" data-testid="text-copyright">
              © 2024 Iteeha Coffee & Pet Paradise. All rights reserved. Made with ❤️ for coffee and dog lovers.
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://www.instagram.com/iteeha.coffee/" 
                className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-500/30 transition-colors duration-200"
                data-testid="link-instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                📷
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-500/30 transition-colors duration-200"
                data-testid="link-facebook"
              >
                📘
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 hover:bg-green-500/30 transition-colors duration-200"
                data-testid="link-whatsapp"
              >
                💬
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
