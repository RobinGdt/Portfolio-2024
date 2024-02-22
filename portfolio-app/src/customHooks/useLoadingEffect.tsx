import { useState, useEffect } from "react";

export const useLoadingState = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const timeoutId = setTimeout(() => {
      setIsLoaded(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  const resetLoadingState = () => {
    setIsLoaded(true);

    const timeoutId = setTimeout(() => {
      setIsLoaded(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  };

  return { isLoaded, resetLoadingState };
};
