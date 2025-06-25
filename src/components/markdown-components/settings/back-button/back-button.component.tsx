'use client';
import { BiLeftArrow } from 'react-icons/bi';
import './back-button.style.css';

export const BackButton = () => {
  return (
    <div className="back-button" onClick={() => history.back()}>
      <BiLeftArrow />
    </div>
  );
};
