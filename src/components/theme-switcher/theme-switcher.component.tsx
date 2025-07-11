'use client';

import './theme-switcher.style.css';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';

export const ThemeSwitcher = () => {

  const {setTheme, resolvedTheme} = useTheme();

  if (resolvedTheme === 'dark') {
    return <FiSun className={'sun'} onClick={() => setTheme('light')} />;
  } else if (resolvedTheme === 'light') {
    return <FiMoon className={'moon'} onClick={() => setTheme('dark')} />;
  }
};
