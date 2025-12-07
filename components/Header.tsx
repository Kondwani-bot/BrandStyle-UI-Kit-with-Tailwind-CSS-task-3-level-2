import React, { useState } from 'react';
import Button from './Button';
import ThemeToggle from './ThemeToggle';

const Logo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <svg className="h-8 w-8 text-brand-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.78-2.75 9.566-1.74 2.786-4.744 4.14-7.25 2.434-2.506-1.707-3.268-5.24-1.528-8.026C2.009 12.28 5.487 11 12 11z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-3.517 1.009-6.78 2.75-9.566 1.74-2.786 4.744-4.14 7.25-2.434 2.506 1.707 3.268 5.24 1.528 8.026C21.991 12.28 18.513 11 12 11z" />
    </svg>
    <span className="text-2xl font-bold text-brand-text-primary tracking-tight">BrandStyle</span>
  </div>
);


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = ['Features', 'Pricing', 'About', 'Contact'];

  return (
    <header className="sticky top-0 z-50 bg-brand-background/80 backdrop-blur-sm border-b border-brand-surface-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
                <a key={link} href="#" className="text-brand-text-secondary hover:text-brand-text-primary transition-colors duration-300">
                  {link}
                </a>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="primary" className="px-5 py-2">Get Started</Button>
            <ThemeToggle />
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-text-secondary hover:text-brand-text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-brand-surface">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {navLinks.map(link => (
                <a key={link} href="#" className="block px-3 py-2 rounded-md text-base font-medium text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-surface-accent transition-colors duration-300">
                  {link}
                </a>
            ))}
            <div className="p-3 flex items-center space-x-4">
                <Button variant="primary" className="w-full">Get Started</Button>
                <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;