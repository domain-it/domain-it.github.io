import './header.style.css';
import { useLocalStorage } from 'usehooks-ts';
import { useEffect, useState } from 'react';
import Logo from '/src/assets/MsAfro12.svg?react';
import { PiMoon, PiSun } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { BiUpArrow } from 'react-icons/bi';

export const Header = () => {

  const [userTheme, setUserTheme] = useLocalStorage('theme', window.matchMedia('prefers-color-scheme: dark').matches ? 'dark' : 'light');
  const [small, setSmall] = useState<boolean>(false);
  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', () => {
        setSmall(window.scrollY > 100);
      });
    }
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', () => {
      });
    };
  }, []);

  useEffect(() => {
    document.getElementsByTagName('body')[0].dataset.theme = userTheme;
  }, [userTheme]);

  const onChangeTheme = () => {
    const newTheme = userTheme === 'dark' ? 'light' : 'dark';
    setUserTheme(newTheme);
  };
  return (
    <div className={`header ${small ? 'header-scrolled' : ''}`}>
      <Link className="logo" to={'/'}>
        <Logo fill="rgb(var(--text))" />
        <div className="logo-text">
          <h1> Domain.it</h1>
          <small>Dominik Boczkowski</small>
        </div>
      </Link>
      <div className="nav">
      </div>
      <div className="settings">
        {userTheme === 'dark' ? (
          <PiMoon className={'button'} fill="rgb(var(--text))" onClick={onChangeTheme} />
        ) : (
          <PiSun className={'button'} fill="rgb(var(--text))" onClick={onChangeTheme} />
        )}
      </div>
      {small && (<BiUpArrow className="button scroll" onClick={() => window.scrollTo(0, 0)} />)}
    </div>
  );
};
