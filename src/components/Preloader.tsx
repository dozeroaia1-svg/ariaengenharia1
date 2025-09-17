import { useEffect, useState } from 'react';
import ariaLogo from '@/assets/aria-logo.png';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="preloader">
      <div className="flex flex-col items-center space-y-6">
        <div className="logo-animation">
          <img 
            src={ariaLogo} 
            alt="Aria Engenharia" 
            className="h-20 w-auto filter brightness-0 dark:invert" 
          />
        </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-accent rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-3 h-3 bg-accent rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-3 h-3 bg-accent rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}