import React from 'react';
import { useStyle } from '../contexts/StyleContext';
import Button from './Button';

const StyleSwitcher: React.FC = () => {
  const { cycleStyle, style } = useStyle();
  
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Button onClick={cycleStyle} variant="secondary" className="shadow-2xl !px-4 !py-2">
        Style: {capitalize(style)}
      </Button>
    </div>
  );
};

export default StyleSwitcher;
