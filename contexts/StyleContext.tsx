import React, { createContext, useState, useEffect, useMemo, useContext } from 'react';

type Theme = 'light' | 'dark';
type Style = 'default' | 'corporate' | 'playful';

interface StyleContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  style: Style;
  setStyle: (style: Style) => void;
  cycleStyle: () => void;
}

export const StyleContext = createContext<StyleContextProps | undefined>(undefined);

const styles: Style[] = ['default', 'corporate', 'playful'];

export const StyleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [style, setStyleState] = useState<Style>('default');

  useEffect(() => {
    // Theme initialization (sync with the flicker-prevention script)
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setThemeState(initialTheme);

    // Style initialization
    const savedStyle = localStorage.getItem('style') as Style | null;
    if (savedStyle && styles.includes(savedStyle)) {
      setStyleState(savedStyle);
    }
  }, []);

  useEffect(() => {
    // Apply theme to HTML element
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // Apply style to HTML element
    const root = window.document.documentElement;
    root.setAttribute('data-style', style);
    localStorage.setItem('style', style);
  }, [style]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const setStyle = (newStyle: Style) => {
    setStyleState(newStyle);
  };
  
  const cycleStyle = () => {
    const currentIndex = styles.indexOf(style);
    const nextIndex = (currentIndex + 1) % styles.length;
    setStyleState(styles[nextIndex]);
  };

  const value = useMemo(() => ({
    theme,
    setTheme,
    style,
    setStyle,
    cycleStyle,
  }), [theme, style]);

  return (
    <StyleContext.Provider value={value}>
      {children}
    </StyleContext.Provider>
  );
};

export const useStyle = () => {
  const context = useContext(StyleContext);
  if (context === undefined) {
    throw new Error('useStyle must be used within a StyleProvider');
  }
  return context;
};
