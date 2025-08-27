export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  isVeg: boolean;
  isSpecial?: boolean;
  specialNote?: string;
}

export const menuData: MenuItem[] = [
  // Matcha Specials
  {
    id: "matcha-1",
    name: "Classic Hot Matcha Latte",
    description: "A Smooth Blend Of Matcha And Steamed Milk",
    price: 320,
    category: "Matcha Specials",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    isSpecial: true
  },
  {
    id: "matcha-2",
    name: "Spiced Ginger Matcha Latte",
    description: "Matcha And Steamed Milk With House Made Ginger Syrup",
    price: 340,
    category: "Matcha Specials",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    isSpecial: true
  },
  {
    id: "matcha-3",
    name: "Blueberry Matcha Latte",
    description: "Matcha And Milk With Blueberry Compote",
    price: 380,
    category: "Matcha Specials",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    isSpecial: true
  },
  {
    id: "matcha-4",
    name: "Signature Iced Matcha",
    description: "Classic Matcha And Milk Over Ice",
    price: 350,
    category: "Matcha Specials",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    isSpecial: true
  },
  {
    id: "matcha-5",
    name: "Golden Glow Matcha Latte",
    description: "Matcha with turmeric and steamed milk",
    price: 370,
    category: "Matcha Specials",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    isSpecial: true
  },
  {
    id: "matcha-6",
    name: "Vanilla Matcha Latte",
    description: "Matcha with vanilla syrup and steamed milk",
    price: 360,
    category: "Matcha Specials",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    isSpecial: true
  },

  // Coffee & Espresso
  {
    id: "coffee-1",
    name: "Espresso",
    description: "Rich, bold, concentrated shot",
    price: 160,
    category: "Coffee & Espresso",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    specialNote: "Fresh • Made to Order ✨"
  },
  {
    id: "coffee-2",
    name: "Doppio (Double Espresso)",
    description: "Double shot of our signature espresso",
    price: 160,
    category: "Coffee & Espresso",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    specialNote: "Fresh • Made to Order ✨"
  },
  {
    id: "coffee-3",
    name: "Americano",
    description: "Espresso diluted with hot water for a classic coffee experience",
    price: 180,
    category: "Coffee & Espresso",
    image: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    specialNote: "Fresh • Made to Order ✨"
  },
  {
    id: "coffee-4",
    name: "Latte",
    description: "Smooth espresso with steamed milk and light foam",
    price: 200,
    category: "Coffee & Espresso",
    image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    specialNote: "Fresh • Made to Order ✨"
  },
  {
    id: "coffee-5",
    name: "Cortado",
    description: "Equal parts espresso and warm milk",
    price: 190,
    category: "Coffee & Espresso",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    specialNote: "Fresh • Made to Order ✨"
  },
  {
    id: "coffee-6",
    name: "Cappuccino",
    description: "Perfect balance of espresso, steamed milk, and foam",
    price: 190,
    category: "Coffee & Espresso",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    specialNote: "Fresh • Made to Order ✨"
  },
  {
    id: "coffee-7",
    name: "Mocha",
    description: "Espresso with chocolate and steamed milk",
    price: 220,
    category: "Coffee & Espresso",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    specialNote: "Fresh • Made to Order ✨"
  },
  {
    id: "coffee-8",
    name: "Vietnamese Cold Brew",
    description: "Smooth, refreshing cold coffee with a unique brewing method",
    price: 220,
    category: "Coffee & Espresso",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    specialNote: "Fresh • Made to Order ✨"
  },
  {
    id: "coffee-9",
    name: "House Cold Coffee",
    description: "Our signature cold coffee blend",
    price: 250,
    category: "Coffee & Espresso",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    specialNote: "Fresh • Made to Order ✨"
  },
  {
    id: "coffee-10",
    name: "Coffee Lemonade",
    description: "Refreshing combination of coffee and citrus",
    price: 250,
    category: "Coffee & Espresso",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    specialNote: "Fresh • Made to Order ✨"
  },
  {
    id: "coffee-11",
    name: "Pallonji's Cold Brew (300ml)",
    description: "Premium cold brew in our signature bottle",
    price: 450,
    category: "Coffee & Espresso",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    specialNote: "Fresh • Made to Order ✨"
  },

  // Food & Bakes
  {
    id: "food-1",
    name: "Classic Spiced Chicken Sandwich",
    description: "Tender spiced chicken with fresh vegetables",
    price: 330,
    category: "Food & Bakes",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: false,
    specialNote: "Fresh • Made to Order ✨"
  },
  {
    id: "food-2",
    name: "Chicken Ham & Cheese Sandwich",
    description: "Premium ham and cheese with crisp vegetables",
    price: 380,
    category: "Food & Bakes",
    image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: false,
    specialNote: "Fresh • Made to Order ✨"
  },
  {
    id: "food-3",
    name: "Tomato Cream Cheese Sandwich",
    description: "Fresh tomatoes with creamy cheese spread",
    price: 300,
    category: "Food & Bakes",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    specialNote: "Fresh • Made to Order ✨"
  },
  {
    id: "food-4",
    name: "Grilled Veg Pesto Sandwich",
    description: "Grilled vegetables with house-made pesto",
    price: 350,
    category: "Food & Bakes",
    image: "https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    specialNote: "Fresh • Made to Order ✨"
  },
  {
    id: "food-5",
    name: "White Chocolate & Hazelnut Cookie",
    description: "Soft cookie with white chocolate and hazelnuts",
    price: 150,
    category: "Food & Bakes",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    specialNote: "Fresh • Made to Order ✨"
  },
  {
    id: "food-6",
    name: "Caramel & Chocolate Croissant",
    description: "Buttery croissant with caramel and chocolate",
    price: 520,
    category: "Food & Bakes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    specialNote: "Fresh • Made to Order ✨"
  },
  {
    id: "food-7",
    name: "Chocolate Cake",
    description: "Rich, moist chocolate cake slice",
    price: 280,
    category: "Food & Bakes",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    specialNote: "Fresh • Made to Order ✨"
  },

  // Artisanal Teas
  {
    id: "tea-1",
    name: "Green Tea Pure Joy",
    description: "Pure green tea leaves for a refreshing experience",
    price: 150,
    category: "Artisanal Teas",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    specialNote: "Fresh • Made to Order ✨"
  },
  {
    id: "tea-2",
    name: "Black Tea Orange Blossom",
    description: "Black tea infused with orange blossom notes",
    price: 160,
    category: "Artisanal Teas",
    image: "https://images.unsplash.com/photo-1597318123967-888974e2912c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    specialNote: "Fresh • Made to Order ✨"
  },
  {
    id: "tea-3",
    name: "Oolong Rose",
    description: "Delicate oolong tea with rose petals",
    price: 170,
    category: "Artisanal Teas",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    specialNote: "Fresh • Made to Order ✨"
  },
  {
    id: "tea-4",
    name: "Black Tea Fleur Lemon",
    description: "Black tea with lemon and floral notes",
    price: 160,
    category: "Artisanal Teas",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    specialNote: "Fresh • Made to Order ✨"
  },

  // Other Beverages
  {
    id: "beverage-1",
    name: "Hot Chocolate",
    description: "House-made 54% dark chocolate ganache with steamed milk",
    price: 200,
    category: "Other Beverages",
    image: "https://images.unsplash.com/photo-1542990253-0b8cd6ba3091?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    specialNote: "Fresh • Made to Order ✨"
  },
  {
    id: "beverage-2",
    name: "Fresh Cold-Pressed Juice",
    description: "Daily selection of fresh fruit and vegetable juices",
    price: 180,
    category: "Other Beverages",
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    specialNote: "Fresh • Made to Order ✨"
  },
  {
    id: "beverage-3",
    name: "Artisanal Lemonade",
    description: "Fresh lemon with a hint of herbs",
    price: 150,
    category: "Other Beverages",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    specialNote: "Fresh • Made to Order ✨"
  }
];

export const featuredItems: MenuItem[] = [
  {
    id: "featured-1",
    name: "Golden Retriever Blend",
    description: "Espresso with steamed milk and vanilla, topped with golden caramel swirls",
    price: 225,
    category: "Featured",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    isSpecial: true,
    specialNote: "Golden's Choice"
  },
  {
    id: "featured-2",
    name: "Pug's Espresso Delight",
    description: "Rich, bold double shot espresso - small but mighty, just like our pugs!",
    price: 160,
    category: "Featured",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    isSpecial: true,
    specialNote: "Pup's Pick"
  },
  {
    id: "featured-3",
    name: "Beagle's Matcha Magic",
    description: "Premium matcha powder with steamed oat milk - energetic and wholesome",
    price: 320,
    category: "Featured",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    isVeg: true,
    isSpecial: true,
    specialNote: "Pup Special"
  }
];

export const getMenuByCategory = (category: string): MenuItem[] => {
  return menuData.filter(item => item.category === category);
};

export const getAllCategories = (): string[] => {
  return Array.from(new Set(menuData.map(item => item.category)));
};
