import { Header } from './components/header/header.component.tsx';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/footer/footer.component.tsx';
import Blob from '/src/assets/blob.svg?react';
import ScrollToAnchor from './utils/scrollToAnchor.ts';

export const Layout = () => {
  return (
    <div>
      <Blob className="background-animation" />
      <ScrollToAnchor />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
