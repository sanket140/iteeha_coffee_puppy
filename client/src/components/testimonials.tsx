import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: "sarah",
      name: "Sarah M.",
      title: "Coffee & Dog Enthusiast ✨",
      content: "This place feels like stepping into a coffee wonderland! The pups make every visit special, and they even have amazing pet toys and treats!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      id: "rahul",
      name: "Rahul K.",
      title: "Pet Parent & Regular Visitor ⭐",
      content: "Perfect place to bring my furry friend! Great coffee for me, delicious pet food for my dog, and toys to keep him entertained. Charlie loves it here!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      id: "priya",
      name: "Priya S.",
      title: "Business Professional 💼",
      content: "Amazing pet-friendly environment! I can work here with my laptop while my dog enjoys their special treats and toys. The staff is so welcoming to pets!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" data-testid="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-bold gradient-text relative sparkle-effect animate-wiggle" data-testid="testimonials-title">
            Coffee Stories & Pup Tales 📚
          </h2>
          <p className="text-xl text-muted-foreground animate-slide-in-up" data-testid="testimonials-subtitle">
            What our coffee lovers and pet parents say about their magical experiences ✨
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-card rounded-2xl p-8 card-hover fun-hover relative border-2 border-transparent hover:border-accent/30"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              data-testid={`testimonial-${testimonial.id}`}
              whileHover={{ 
                scale: 1.03,
                rotate: [0, 1, -1, 0],
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={`${testimonial.name} - ${testimonial.title}`}
                  className="w-16 h-16 rounded-full object-cover border-3 border-accent/20 animate-float"
                  data-testid={`avatar-${testimonial.id}`}
                />
                <div>
                  <div className="font-semibold text-foreground" data-testid={`name-${testimonial.id}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid={`title-${testimonial.id}`}>
                    {testimonial.title}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed relative" data-testid={`content-${testimonial.id}`}>
                <span className="text-4xl text-accent/30 absolute -top-2 -left-2">"</span>
                {testimonial.content}
                <span className="text-4xl text-accent/30 absolute -bottom-4 -right-2">"</span>
              </p>
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent text-lg animate-pulse-soft" style={{ animationDelay: `${i * 0.1}s` }}>⭐</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
