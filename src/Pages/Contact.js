import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { Input } from "../Components/ui/input";
import { Textarea } from "../Components/ui/textarea";
import { Label } from "../Components/ui/label";
import { useToast } from "../hooks/use-toast";
import { apiRequest } from "../lib/queryClient";
import { insertContactSchema } from "../shared/schema";
import { InsertContact } from "../shared/schema";

import { z } from "zod";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const form = useForm({
  resolver: zodResolver(insertContactSchema),
  defaultValues: {
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: ""
  }
});
  
const contactMutation = useMutation({
  mutationFn: async (data) => {
    const response = await apiRequest("POST", "/api/contact", data);
    return response.json();
  },
  onSuccess: () => {
    setIsSubmitted(true);
    form.reset();
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    });
  },
  onError: (error) => {
    toast({
      title: "Failed to send message",
      description: error.message || "Please try again later.",
      variant: "destructive",
    });
  }
});

const onSubmit = (data) => {
  contactMutation.mutate(data);
};


  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-blue-800 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-10 left-10 w-32 h-32 bg-teal-400 rounded-full opacity-10"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-24 h-24 bg-blue-400 rounded-full opacity-10"
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch to see how Precision Kinetica can transform your R&D with AI-powered protein prediction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
            
            {/* Left: Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col h-full justify-between"
            >
              {/* Map */}
              <div className="w-full h-[250px] rounded-xl overflow-hidden shadow-md mb-6">
                <motion.img
                  src="https://images.pexels.com/photos/4659806/pexels-photo-4659806.jpeg"
                  alt="San Diego location map with pin drop animation"
                  className="w-full h-full object-cover"
                  animate={floatingAnimation}
                />
              </div>

              {/* Contact Info */}
              <div className="space-y-4 text-sm md:text-base">
                <div>
                  <h3 className="font-heading font-semibold text-lg text-slate-800">General Inquiries</h3>
                  <a href="mailto:info@precisionkinetica.com" className="text-teal-600 hover:text-teal-700">
                    info@precisionkinetica.com
                  </a>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-slate-800">Partnerships</h3>
                  <a href="mailto:partnerships@precisionkinetica.com" className="text-teal-600 hover:text-teal-700">
                    partnerships@precisionkinetica.com
                  </a>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-slate-800">Careers</h3>
                  <a href="mailto:careers@precisionkinetica.com" className="text-teal-600 hover:text-teal-700">
                    careers@precisionkinetica.com
                  </a>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-slate-800">Phone & Address</h3>
                  <p className="text-slate-600">(123) 456-7890</p>
                  <p className="text-slate-600">
                    1234 Innovation Drive<br />San Diego, CA 92121
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              <Card className="flex flex-col h-full bg-gradient-to-br from-slate-50 to-teal-50 border border-slate-200 shadow-md">
                <CardContent className="flex flex-col justify-between p-8">
                  {/* form content stays same as before */}
                  <h3 className="font-heading font-semibold text-2xl mb-6 text-slate-800">Send us a message</h3>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 flex flex-col h-full">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" {...form.register("firstName")} />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" {...form.register("lastName")} />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@company.com" {...form.register("email")} />
                    </div>

                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your Company" {...form.register("company")} />
                    </div>

                    <div className="flex-grow">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" rows={4} placeholder="Tell us about your project..." {...form.register("message")} />
                    </div>

                    <Button type="submit" className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:from-teal-600 hover:to-blue-700 py-3 text-lg font-semibold mt-auto">
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Contact Methods */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-800 mb-6">
              Other Ways to Connect
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Schedule a Demo",
                description: "Book a personalized demonstration of our platform and see how it can benefit your research.",
                action: "Schedule Now",
                gradient: "from-teal-500 to-blue-600",
                testId: "contact-demo"
              },
              {
                title: "Technical Support",
                description: "Get help with implementation, troubleshooting, or technical questions about our platform.",
                action: "Get Support",
                gradient: "from-blue-500 to-teal-600",
                testId: "contact-support"
              },
              {
                title: "Media Inquiries",
                description: "For press releases, interviews, or media-related questions about Precision Kinetica.",
                action: "Contact Press",
                gradient: "from-emerald-500 to-blue-600",
                testId: "contact-media"
              }
            ].map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white hover:shadow-xl transition-all duration-300 h-full group" data-testid={method.testId}>
                  <CardContent className="p-8 h-full flex flex-col text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl mb-6 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                      <div className="w-8 h-8 bg-white rounded-lg"></div>
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-slate-800 mb-4">{method.title}</h3>
                    <p className="text-slate-600 mb-6 flex-1">{method.description}</p>
                    <Button 
                      variant="outline" 
                      className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
                      data-testid={`button-${method.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
