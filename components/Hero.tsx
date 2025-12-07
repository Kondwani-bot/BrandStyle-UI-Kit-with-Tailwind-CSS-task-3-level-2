
import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-background">
        <div className="absolute inset-0 bg-grid-gray-700/20 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-background via-brand-background/80 to-transparent"></div>
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand-text-primary to-brand-text-secondary mb-6">
          Crafting Digital Excellence
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-brand-text-secondary mb-10">
          We build beautiful, functional, and accessible web experiences that align with your brand's unique style guide and drive results.
        </p>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <Button variant="primary" className="text-lg">View Our Work</Button>
          <Button variant="outline" className="text-lg">Contact Us</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
