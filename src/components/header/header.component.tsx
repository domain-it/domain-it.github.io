import Logo from '@/assets/MsAfro12.svg';
import './header.style.css';
import Link from 'next/link';
import { Breadcrumb } from '@/components/breadcrumb/breadcrumb.component';
import { ThemeSwitcher } from '@/components/header/theme-switcher/theme-switcher.component';

export const Header = () => {
  return (
    <div className="header">
      <Link className="logo" href={'/'}>
        <Logo fill="rgb(var(--text))" />
        <div className="logo-text">
          <h1> Domain.it</h1>
          <small>Dominik Boczkowski</small>
        </div>
      </Link>
      <div className="nav">
        <Breadcrumb homeElement={'home@site:~'} separator={'/'} />
      </div>
      <div className="settings">
        <ThemeSwitcher/>
      </div>
    </div>
  );
};
