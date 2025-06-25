'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { BiMoon, BiSun } from 'react-icons/bi';
import './theme-switcher.style.css';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  if (resolvedTheme === 'dark') {
    return <BiSun className={'sun'} onClick={() => setTheme('light')} />;
  }

  if (resolvedTheme === 'light') {
    return <BiMoon className={'moon'} onClick={() => setTheme('dark')} />;
  }
};
