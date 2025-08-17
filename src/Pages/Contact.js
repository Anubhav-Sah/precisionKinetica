import { useState, useRef } from "react"; // ✨ merged useRef here
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
import emailjs from "@emailjs/browser"; // ✨ Added for EmailJS

import { InsertContact } from "../shared/schema";
import { z } from "zod";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(); // ✨ Added for EmailJS

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
    // Keep your API request
    contactMutation.mutate(data);

    // ✨ Send Email via EmailJS
    emailjs.sendForm(
      "service_fdjvqsu",       // Your Service ID
      "template_srijvdn",      // Your Template ID
      formRef.current,         // Attach formRef
      "pTHNYgNhtJR7V0QGw"      // Your Public Key
    )
    .then(
      (result) => {
        console.log(result.text);
        toast({
          title: "Email sent successfully! ✅",
          description: "We’ve received your message via Email.",
        });
      },
      (error) => {
        console.log(error.text);
        toast({
          title: "Email failed ❌",
          description: "Could not send via EmailJS.",
          variant: "destructive",
        });
      }
    );
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
                  <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 flex flex-col h-full"> {/* ✨ added ref={formRef} */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" {...form.register("firstName")} name="firstName" /> {/* ✨ name added for EmailJS */}
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" {...form.register("lastName")} name="lastName" /> {/* ✨ name added */}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@company.com" {...form.register("email")} name="email" /> {/* ✨ name added */}
                    </div>

                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your Company" {...form.register("company")} name="company" /> {/* ✨ name added */}
                    </div>

                    <div className="flex-grow">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" rows={4} placeholder="Tell us about your project..." {...form.register("message")} name="message" /> {/* ✨ name added */}
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

      
    </div>
  );
};

export default Contact;
