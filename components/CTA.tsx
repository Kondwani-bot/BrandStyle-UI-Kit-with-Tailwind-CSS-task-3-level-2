import React from 'react';
import Button from './Button';

const CTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-brand-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-r from-brand-primary to-brand-secondary p-12 text-center overflow-hidden">
           <div className="absolute inset-0 opacity-10 mix-blend-overlay">
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="a" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#a)"/></svg>
           </div>
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Ready to Elevate Your Design?
            </h2>
            <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
              Start building with BrandStyle UI Kit today and create a stunning, cohesive experience for your users.
            </p>
            <div className="mt-8">
              <Button variant="white" className="text-lg px-8 py-4">
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;