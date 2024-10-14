'use client';
import { useEffect, useState } from 'react';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return isVisible ? (
    <div className={`splashContainer ${!isVisible ? 'fadeOut' : ''}`}>
      <div className="splashContent">
        <h1>Sports Wear</h1>
      </div>
    </div>
  ) : null;
};

export default SplashScreen;
