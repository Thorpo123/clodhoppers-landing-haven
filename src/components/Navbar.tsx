
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', href: '#' },
    { title: 'New Arrivals', href: '#featured' },
    { title: 'Collection', href: '#collection' },
    { title: 'About', href: '#about' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 sm:px-6 lg:px-8',
        isScrolled
          ? 'py-2 bg-white/80 backdrop-blur-md shadow-sm'
          : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a
            href="#"
            className="text-xl sm:text-2xl font-mono font-semibold tracking-tighter"
          >
            CLODHOPPERS
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.title} href={link.href} className="nav-link">
              {link.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button
            className="relative p-2 transition-colors duration-300 hover:bg-secondary rounded-full"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={20} />
            <span className="absolute top-0 right-0 h-4 w-4 text-[10px] flex items-center justify-center bg-primary text-primary-foreground rounded-full">
              0
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden transition-colors duration-300 hover:bg-secondary rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-40 pt-20 px-4 transition-transform duration-300 ease-in-out md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col space-y-6 text-center">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-lg py-2 border-b border-secondary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
