import { createHashRouter } from 'react-router-dom';
import { Layout } from '../Layout.tsx';
import { HomePage } from '../pages/home/home.page.tsx';
import { AboutMePage } from '../pages/about-me/about-me.page.tsx';
import { MarkdownPage } from '../pages/markdown/markdown.page.tsx';

export const router = createHashRouter([
  {
    path: '/', Component: Layout, children: [
      {
        path: '/',
        Component: HomePage,
      },
      {
        path: '/about-me',
        Component: AboutMePage,
      },
      {
        path: '/markdown',
        Component: MarkdownPage,
      }],
  },

]);
