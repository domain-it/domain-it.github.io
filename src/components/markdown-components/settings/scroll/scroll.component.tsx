'use client';
import './scroll.style.css';
import { BiUpArrow } from 'react-icons/bi';
import { useEffect } from 'react';

export const Scroll = () => {
  useEffect(() => {
    window.onscroll = () => {
      const button = document.querySelector('.scroll-button');
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        button?.classList.add('visible');
      } else {
        button?.classList.remove('visible');
      }
    };
  }, []);

  return (
    <div
      className="scroll-button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <BiUpArrow />
    </div>
  );
};
