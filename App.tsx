import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { StyleProvider } from './contexts/StyleContext';
import StyleSwitcher from './components/StyleSwitcher';

const App: React.FC = () => {
  return (
    <StyleProvider>
      <div className="min-h-screen font-sans bg-brand-background text-brand-text-primary transition-colors duration-500">
        <Header />
        <main>
          <Hero />
          <Features />
          <CTA />
        </main>
        <Footer />
        <StyleSwitcher />
      </div>
    </StyleProvider>
  );
};

export default App;