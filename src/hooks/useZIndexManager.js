import { useState } from 'react';

const useZIndexManager = () => {
  const [topZIndex, setTopZIndex] = useState(10);
  const [windowZIndexes, setWindowZIndexes] = useState({
    portfolio: 1,
    services: 2,
    contact: 3,
    snakey: 4,
    about: 5,
  });

  const [isWindowOpen, setIsWindowOpen] = useState({
    portfolio: false,
    services: false,
    contact: false,
    snakey: false,
    about: false,
  });

  const bringToFront = (windowName) => {
    setTopZIndex((prevZIndex) => prevZIndex + 1);
    setWindowZIndexes((prev) => {
      return {
        ...prev,
        [windowName]: topZIndex + 1,
      };
    });
  };

  const toggleWindow = (windowName) => {
    setIsWindowOpen(prev => ({
      ...prev,
      [windowName]: !prev[windowName],
    }));
  };

  return { windowZIndexes, bringToFront, isWindowOpen, toggleWindow };
};

export default useZIndexManager;
