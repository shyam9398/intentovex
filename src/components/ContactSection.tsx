import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Send, Mail } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionWrapper id="contact" className="bg-secondary/50">
      <div className="text-center mb-16">
        <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Contact Us</p>
        <h2 className="text-3xl md:text-5xl font-bold">Get in Touch</h2>
        <p className="mt-4 text-muted-foreground">
          Send us a message below — or reach the founder directly at{" "}
          <a
            href="mailto:founder.intentovex@gmail.com"
            className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
          >
            <Mail className="w-4 h-4" />
            founder.intentovex@gmail.com
          </a>
        </p>
      </div>
      <div className="max-w-lg mx-auto">
        {submitted ? (
          <div className="glass-card rounded-xl p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
            <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8 space-y-5">
            <Input placeholder="Your Name" required className="bg-background/50 border-border/50 focus:border-primary/50" />
            <Input type="email" placeholder="Your Email" required className="bg-background/50 border-border/50 focus:border-primary/50" />
            <Textarea placeholder="Your Message" required rows={5} className="bg-background/50 border-border/50 focus:border-primary/50 resize-none" />
            <Button variant="hero" size="lg" className="w-full text-base">
              <Send className="w-5 h-5" /> Submit
            </Button>
          </form>
        )}
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
