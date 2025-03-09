
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1617606002188-07bc5a0832bf?auto=format&fit=crop&w=800&q=80"
                alt="Craftsman working on a shoe"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-secondary rounded-2xl -z-10" />
          </div>
          
          <div className="animate-slide-left">
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
              Our Story
            </h2>
            <h3 className="text-3xl sm:text-4xl font-medium mb-6">
              Craftsmanship Meets Innovation
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2014, Clodhoppers began with a simple mission: to create footwear that combines the highest quality materials with timeless design and exceptional comfort.
              </p>
              <p>
                Our shoes are handcrafted by master artisans with decades of experience, using traditional techniques passed down through generations. Each pair undergoes a rigorous 38-step process before it's deemed worthy of the Clodhoppers name.
              </p>
              <p>
                We source our materials from the finest tanneries in Italy and Spain, ensuring that every piece of leather meets our exacting standards for quality, sustainability, and ethical production.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <h4 className="text-3xl font-bold mb-1">10+</h4>
                <p className="text-sm text-muted-foreground">Years of excellence</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold mb-1">38</h4>
                <p className="text-sm text-muted-foreground">Steps in our craft</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold mb-1">5K+</h4>
                <p className="text-sm text-muted-foreground">Happy customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
