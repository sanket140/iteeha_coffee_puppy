import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { locations } from "@/data/locations-data";
import { Mail, Clock, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      contactPerson: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-background pt-8" data-testid="page-contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground" data-testid="contact-title">
            Contact Us ☕
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="contact-subtitle">
            Come experience the warmth of Iteeha Coffee. We're here to serve you the perfect cup. ✨
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-card shadow-lg" data-testid="contact-form-card">
              <CardContent className="p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-6" data-testid="form-title">
                  Send us a Message
                </h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel data-testid="label-name">Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your name" 
                                {...field} 
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage data-testid="error-name" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel data-testid="label-email">Email *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="your@email.com" 
                                {...field} 
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage data-testid="error-email" />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel data-testid="label-phone">Phone</FormLabel>
                            <FormControl>
                              <Input 
                                type="tel" 
                                placeholder="+91 98765 43210" 
                                {...field} 
                                value={field.value || ""}
                                data-testid="input-phone"
                              />
                            </FormControl>
                            <FormMessage data-testid="error-phone" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="contactPerson"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel data-testid="label-contact-person">Contact Person *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-contact-person">
                                  <SelectValue placeholder="Please Select Person" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="general-inquiry" data-testid="option-general">General Inquiry</SelectItem>
                                <SelectItem value="store-manager" data-testid="option-manager">Store Manager</SelectItem>
                                <SelectItem value="catering-services" data-testid="option-catering">Catering Services</SelectItem>
                                <SelectItem value="feedback" data-testid="option-feedback">Feedback</SelectItem>
                                <SelectItem value="partnerships" data-testid="option-partnerships">Partnerships</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage data-testid="error-contact-person" />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel data-testid="label-message">Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us how we can help you..." 
                              rows={4} 
                              {...field} 
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage data-testid="error-message" />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      size="lg"
                      disabled={contactMutation.isPending}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      data-testid="button-send-message"
                    >
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Get in Touch */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-card shadow-lg" data-testid="contact-info-card">
              <CardContent className="p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-6" data-testid="get-in-touch-title">
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4" data-testid="contact-email">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Email</div>
                      <div className="text-muted-foreground" data-testid="text-email">connect@iteeha.coffee</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4" data-testid="contact-hours">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Hours</div>
                      <div className="text-muted-foreground" data-testid="text-hours">
                        7:30 AM - 11:30 PM<br />All Days
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4" data-testid="contact-social">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center">
                      <Instagram className="w-5 h-5 text-pink-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Follow Us</div>
                      <a 
                        href="https://www.instagram.com/iteeha.coffee/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-pink-500 transition-colors"
                        data-testid="link-instagram"
                      >
                        @iteeha.coffee
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Our Locations */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground" data-testid="locations-title">
              Our Locations
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="locations-subtitle">
              Visit us at any of our cozy Mumbai locations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                data-testid={`location-${location.id}`}
              >
                <Card className="bg-card shadow-lg card-hover h-full">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-serif text-xl font-semibold text-foreground" data-testid={`location-name-${location.id}`}>
                        {location.name}
                      </h3>
                      <Badge className="bg-accent/20 text-accent" data-testid={`location-pups-${location.id}`}>
                        {location.residentPups} Resident Pups🐾
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground" data-testid={`location-address-${location.id}`}>
                          {location.address}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground" data-testid={`location-hours-${location.id}`}>
                          {location.hours}
                        </p>
                      </div>
                      
                      <div className="pt-2">
                        <Badge variant="outline" className="text-green-600 border-green-600" data-testid={`location-feature-${location.id}`}>
                          {location.specialFeature}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl p-12 text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-testid="final-cta"
        >
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4" data-testid="cta-title">
            Come Sip & Snuggle With Us
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8" data-testid="cta-description">
            We're brewing daily from 7:30 AM to 11:30 PM. Find us in the heart of Mumbai with our furry friends!
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center" data-testid="stat-email">
              <div className="text-sm text-primary-foreground/90">connect@iteeha.coffee</div>
            </div>
            <div className="text-center" data-testid="stat-hours">
              <div className="text-sm text-primary-foreground/90">7:30 AM - 11:30 PM</div>
            </div>
            <div className="text-center" data-testid="stat-locations">
              <div className="text-sm text-primary-foreground/90">3 Mumbai Locations</div>
            </div>
            <div className="text-center" data-testid="stat-pups">
              <div className="text-sm text-primary-foreground/90">12+ Resident Pups</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
