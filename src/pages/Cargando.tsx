// JSX (Cargando.jsx)

import React, { useState, useEffect } from 'react';
import { useLoadingStore } from '../Loading-store'; // Assuming this is your loading state management
import './Cargando.css';

export default function Cargando({ children }) {
  const { isLoading, setIsLoading } = useLoadingStore();

  useEffect(() => {
    setIsLoading(true);
    // aroz

    // New code: Add a cleanup function to remove the timeout when the component unmounts
    return () => setIsLoading(false); // Set loading to false on unmount
  }, []);

  // New code: Handle loading completion
  useEffect(() => {
    if (!isLoading) {
      // Fade out the loading screen after a delay (adjust delay as needed)
      const timeoutId = setTimeout(() => {
        const loadingScreen = document.querySelector('.carga-screen');
        loadingScreen.classList.add('fade-out'); // Add the fade-out class
      }, 500); // Adjust delay in milliseconds

      // Cleanup function to clear the timeout when necessary
      return () => clearTimeout(timeoutId);
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <div className={isLoading ? 'carga-screen' : 'hide'}>
          <div className="spinner"></div>
          <p>Cargando...</p>
        </div>
      )}
      <div className="children">{children}</div>
    </>
  );
}
