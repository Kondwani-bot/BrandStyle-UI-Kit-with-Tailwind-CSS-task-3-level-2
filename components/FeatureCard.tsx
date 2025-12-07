
import React from 'react';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-brand-background rounded-xl p-8 border border-brand-surface-accent transition-all duration-300 hover:border-brand-primary hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-primary/20">
      <div className="mb-6 inline-flex items-center justify-center p-3 rounded-lg bg-brand-primary/10 text-brand-primary">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-brand-text-primary mb-3">{title}</h3>
      <p className="text-brand-text-secondary">{description}</p>
    </div>
  );
};

export default FeatureCard;
