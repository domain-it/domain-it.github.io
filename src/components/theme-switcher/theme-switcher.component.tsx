'use client';

import './theme-switcher.style.css';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

export const ThemeSwitcher = () => {
  // Inicjalizacja stanu na podstawie localStorage lub domyślnie 'light'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  // Efekt synchronizujący klasę na <html> i localStorage po zmianie theme
  useEffect(() => {
    const root = document.querySelector('html');
    if (!root) return;

    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  // Funkcja przełączająca motyw
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  console.log(theme)


  return (theme === 'light' ? <FiSun className={'sun'} onClick={toggleTheme}/> : <FiMoon className={'moon'} onClick={toggleTheme}/>);
};
