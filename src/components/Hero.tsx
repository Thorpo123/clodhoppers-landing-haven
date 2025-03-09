
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !imageRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      // Calculate the mouse position relative to the hero element
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      // Apply a subtle parallax effect
      imageRef.current.style.transform = `translate(${x * 15}px, ${y * 15}px) scale(1.05)`;
    };
    
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-background to-background pointer-events-none" />
      
      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <div className="inline-block px-4 py-1 mb-6 text-xs font-medium tracking-widest bg-secondary rounded-full animate-slide-right">
            NEW COLLECTION 2024
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-6 tracking-tight">
            Elegance in <br />
            <span className="font-bold">Every Step</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-8 text-balance animate-slide-up delay-100">
            Discover our new line of handcrafted shoes that combine timeless design with modern comfort. Made for those who appreciate the finer details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a href="#featured" className="btn-primary flex items-center gap-2 group">
              Explore Collection
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors duration-300 px-4 py-2">
              Our Story
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-square relative z-10 overflow-hidden rounded-2xl shadow-2xl animate-fade-in delay-200">
            <img
              ref={imageRef}
              src="https://images.unsplash.com/photo-1616406750940-acc5e1da91af?auto=format&fit=crop&w=800&q=80"
              alt="Clodhoppers premium leather shoes"
              className="w-full h-full object-cover transition-transform duration-500 ease-out"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary rounded-full animate-float" />
          <div className="absolute -top-20 -left-10 w-32 h-32 bg-accent/20 rounded-full animate-float delay-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
