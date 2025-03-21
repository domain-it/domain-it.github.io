import { Header } from './components/header/header.component.tsx';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/footer/footer.component.tsx';
import Blob from '/src/assets/blob.svg?react';

export const Layout = () => {
  return (
    <div>
      <Blob className="background-animation"/>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
