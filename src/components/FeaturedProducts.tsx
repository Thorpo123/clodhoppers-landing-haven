
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  isNew: boolean;
};

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const products: Product[] = [
    {
      id: 1,
      name: "Solstice Suede Loafer",
      category: "loafers",
      price: 289,
      imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
      isNew: true,
    },
    {
      id: 2,
      name: "Urban Trek Oxford",
      category: "oxford",
      price: 329,
      imageUrl: "https://images.unsplash.com/photo-1614252235316-8c857f344895?auto=format&fit=crop&w=600&q=80",
      isNew: false,
    },
    {
      id: 3,
      name: "Meridian Derby",
      category: "derby",
      price: 349,
      imageUrl: "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=600&q=80",
      isNew: true,
    },
    {
      id: 4,
      name: "Horizon Chelsea Boot",
      category: "boots",
      price: 389,
      imageUrl: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=600&q=80",
      isNew: false,
    },
  ];
  
  const categories = [
    { id: "all", name: "All" },
    { id: "loafers", name: "Loafers" },
    { id: "oxford", name: "Oxford" },
    { id: "derby", name: "Derby" },
    { id: "boots", name: "Boots" },
  ];
  
  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="featured" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
            Featured Products
          </h2>
          <h3 className="text-3xl sm:text-4xl font-medium mb-6">
            New Arrivals
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our latest collection combines traditional craftsmanship with modern design sensibilities, 
            creating shoes that stand the test of time.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-all duration-300",
                activeCategory === category.id 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-white text-muted-foreground hover:bg-secondary"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.isNew && (
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    New
                  </div>
                )}
              </div>
              <div className="p-4">
                <h4 className="font-medium mb-1">{product.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{categories.find(c => c.id === product.category)?.name}</p>
                <div className="flex justify-between items-center">
                  <span className="font-medium">${product.price}</span>
                  <button className="text-sm flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                    View
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="btn-primary inline-block">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
