
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Please enter your email",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll be the first to know about our new collections and exclusive offers.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-24 bg-secondary">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-medium mb-6">
            Join Our Community
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter to receive updates on new collections, exclusive offers, and styling tips.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md border border-input bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20"
              disabled={isSubmitting}
            />
            <button
              type="submit"
              className="btn-primary flex items-center justify-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="animate-pulse">Subscribing...</span>
              ) : (
                <>
                  Subscribe <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
