---
tags:
  - Site
  - Nextjs
  - Blog
  - Post
author: Dominik Boczkowski
date: 2025-06-19
title: Under Construction 🏗️
description: My website is currently under construction. I'm working on new features and will launch the full version soon. Thank you for your patience — something special will be available shortly!
robots: true
charset: UTF-8
---

# Under Construction 🏗️

Welcome to my Next.js Blog! My website is currently under construction, but I’m excited to share some insights about the
building process while you wait.

---

# Why Next.js?

Next.js is a powerful React framework that allows me to build:

- **Server-side rendering** for better SEO
- **Static site generation** for fast performance
- **API routes** to handle backend logic
- Easy **routing** and **code splitting**

> *A powerful framework for building high-performance, server rendered web applications* –
> Official [Next.js](https://nextjs.org/showcase) site

---

# What’s Comming?

I’m working hard to deliver:

1. Fully responsive design 📱
2. Seamless user experience
3. Full Markdown and LaTeX support

Here’s a quick example of a Next.js component

```ts
'use client';

import { Fragment, ReactNode } from 'react';
import './breadcrumb.style.css';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
};

export const Breadcrumb = ({ homeElement, separator }: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter(path => path);

  return (
    <div>
      <ul className = "breadcrumb" >
    <li className = "breadcrumb-item" >
    <Link href = { '/' } > { homeElement } < /Link>  
      < /li>  
  {
    pathNames.length > 0 && separator
  }
  {
    pathNames.map((link, index) => {
      const href = `/${pathNames.slice(0, index + 1).join('/')}`;
      return (
        <Fragment key = { index } >
        <li className = { 'breadcrumb-item ' } >
        <Link href = { href } > { link } < /Link>  
          < /li>  
      {
        pathNames.length !== index + 1 && separator
      }
      </Fragment>  
    )
      ;
    })
  }
  </ul>  
  < /div>  
)
  ;
};
```

---

# Project Timeline

| Phase       | Status         |
|-------------|----------------|
| Theme       | Completed ✅    |
| Developmnet | In Progress 🔃 |
| Launch      | Stay Tuned ⏰   |

---

Thank you for your patience. I can’t wait to share more with you soon!