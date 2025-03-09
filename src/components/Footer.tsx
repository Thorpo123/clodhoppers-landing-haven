
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Shop",
      links: [
        { name: "All Products", href: "#" },
        { name: "New Arrivals", href: "#" },
        { name: "Best Sellers", href: "#" },
        { name: "Sale", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Story", href: "#about" },
        { name: "Sustainability", href: "#" },
        { name: "Careers", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "FAQ", href: "#" },
        { name: "Shipping & Returns", href: "#" },
        { name: "Care Guide", href: "#" },
        { name: "Contact Us", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-mono font-semibold mb-4 tracking-tighter">
              CLODHOPPERS
            </h2>
            <p className="text-primary-foreground/80 max-w-md mb-6">
              Handcrafted footwear that combines timeless design with modern comfort. 
              Made for those who appreciate the finer details in life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>
          
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-lg font-medium">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <hr className="border-primary-foreground/20 my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-primary-foreground/70">
          <p>&copy; {currentYear} Clodhoppers. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-primary-foreground transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
