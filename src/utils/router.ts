import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../Layout.tsx';
import { HomePage } from '../pages/home/home.page.tsx';
import { AboutMePage } from '../pages/about-me/about-me.page.tsx';

export const router = createBrowserRouter([
  {
    path: '/', Component: Layout, children: [{
      path: '/',
      Component: HomePage,
    }, {
      path: '/about-me',
      Component: AboutMePage,
    }],
  },

]);
