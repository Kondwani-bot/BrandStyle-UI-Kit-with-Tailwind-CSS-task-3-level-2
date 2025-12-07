
import React from 'react';
import FeatureCard from './FeatureCard';
import { CodeIcon, DesignIcon, ResponsiveIcon } from './icons';

const featuresData = [
  {
    icon: <DesignIcon />,
    title: 'Custom Theming',
    description: 'Easily customize colors, typography, and spacing to match your brand identity for a consistent look and feel.',
  },
  {
    icon: <CodeIcon />,
    title: 'Pre-built Components',
    description: 'Leverage a rich library of pre-built, accessible components to accelerate your development workflow.',
  },
  {
    icon: <ResponsiveIcon />,
    title: 'Responsive by Design',
    description: 'All components are designed mobile-first, ensuring a seamless experience across all devices, from phones to desktops.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-brand-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-text-primary">
            Everything You Need, All in One Place
          </h2>
          <p className="mt-4 text-lg text-brand-text-secondary">
            Our UI kit is built on a foundation of modern web standards, providing a robust and flexible solution for any project.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
