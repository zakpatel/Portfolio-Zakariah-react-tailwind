import { Instagram, Linkedin, Mail, MapPin, Send, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";
import { Description } from "@radix-ui/react-toast";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault()

        setIsSubmitting(true);

        emailjs.sendForm('service_fgysgmj', 'template_sm6crgo', form.current, 'caY-GL3jh0S5Jj3xO')
            .then((result) => {
                console.log(result.text);
                toast({
                    title: "Message Sent!",
                    description: "Thank you for your message I will get back to you soon"
                });
            }, (error) => {
                console.log(error.text);
                toast({
                    title: "Message Failed!",
                    description: "Please try again later. Or try any of the other forms of contact!"
                });
            });
        setIsSubmitting(false);
    };
    return (
        <section 
            id="contact" 
            className="py-24 px-4 psotion-relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="tex-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or would like to collaborate? Feel free to reach out.
                    I am always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/20">
                                    <Mail className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a 
                                        href="mailto:zakpatel04@gmail.com" 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        zakpatel04@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/20">
                                    <Linkedin className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> LinkedIn</h4>
                                    <a 
                                        href="https://www.linkedin.com/in/zakariah-patel-4a119027b/" 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Instagram
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/20">
                                    <MapPin className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location</h4>
                                    <a 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Toronto, ON, Canada
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center"> 
                                <a href="https://www.instagram.com/zakpatel04/" target="_blank">
                                    <Instagram />
                                </a>
                                <a href="https://x.com/Zakpatel0" target="_blank">
                                    <Twitter />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                        <form ref = {form} onSubmit={sendEmail} className="space-y-6" >
                            <div>
                                <label 
                                    htmlFor="name" 
                                    className="block text-sm font-medium mb-2"
                                > 
                                    Your Name
                                </label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="user_name" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                                    placeholder="Zakariah Patel..."
                                />
                            </div>

                            <div>
                                <label 
                                    htmlFor="email" 
                                    className="block text-sm font-medium mb-2"
                                > 
                                    {" "}
                                    Your Email
                                </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="user_email" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                                    placeholder="zakpatel04@gmail.com"
                                />
                            </div>

                            <div>
                                <label 
                                    htmlFor="message" 
                                    className="block text-sm font-medium mb-2"
                                > 
                                    Your Message
                                </label>
                                <textarea
                                    id="message" 
                                    name="messagee" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" 
                                    placeholder="Hello, I would like to talk about..."
                                />
                            </div>

                            <button                            
                                type="submit"
                                value="Send"
                                disabled = {isSubmitting}                            
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2"
                            )}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send size={16}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};