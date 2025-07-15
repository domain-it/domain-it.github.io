'use client';

import './theme-switcher.style.css';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const {setTheme, resolvedTheme} = useTheme();

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <HiDotsHorizontal className={'sun'}/>
  )

  if (resolvedTheme === 'dark') {
    return <FiSun className={'sun'} onClick={() => setTheme('light')}/>;
  } else if (resolvedTheme === 'light') {
    return <FiMoon className={'moon'} onClick={() => setTheme('dark')}/>;
  }
};
