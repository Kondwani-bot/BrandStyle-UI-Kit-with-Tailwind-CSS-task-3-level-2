
import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Twitter', href: '#', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg> },
    { name: 'GitHub', href: '#', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg> },
    { name: 'Dribbble', href: '#', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065.015-.129.03-.193.046a11.742 11.742 0 00-3.2 2.441c-1.353 1.353-2.441 3.2-2.441 3.2s-.015.065-.046.193c.271 2.842.629 5.662.271 5.943a8.502 8.502 0 01-5.314-1.93c.054.281.629 3.101.271 5.943.015.065.03.129.046.193a11.742 11.742 0 002.441 3.2c1.353 1.353 3.2 2.441 3.2 2.441s.065.015.193.046c-2.842-.271-5.662-.629-5.943-.271a8.502 8.502 0 011.93-5.314c.281.054 3.101.629 5.943.271.065-.015.129-.03.193-.046a11.742 11.742 0 003.2-2.441c1.353-1.353 2.441-3.2 2.441-3.2s.015-.065.046-.193c-.271-2.842-.629-5.662-.271-5.943a8.502 8.502 0 015.314 1.93c-.054-.281-.629-3.101-.271-5.943a11.742 11.742 0 00-2.441-3.2c-1.353-1.353-3.2-2.441-3.2-2.441a11.742 11.742 0 00-3.2-2.441c-2.842.271-5.662.629-5.943.271z" clipRule="evenodd" /></svg> }
  ];

  return (
    <footer className="bg-brand-surface border-t border-brand-surface-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            {socialLinks.map((item) => (
              <a key={item.name} href={item.href} className="text-brand-text-secondary hover:text-brand-text-primary transition-colors">
                <span className="sr-only">{item.name}</span>
                {item.icon}
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-base text-brand-text-secondary md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} BrandStyle Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
