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
      <ul className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href={'/'}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join('/')}`;
          return (
            <Fragment key={index}>
              <li className={'breadcrumb-item '}>
                <Link href={href}>{link}.md</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </Fragment>
          );
        })}
        <span className={'cursor'}>|</span>
      </ul>
    </div>
  );
};
