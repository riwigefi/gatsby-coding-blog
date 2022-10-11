import * as React from 'react';
import { Link } from 'gatsby';

import useSiteMetadata from '../../hooks/useSiteMetadata';

import {
  container,
  siteTitle,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from './index.module.scss';

const Layout: React.FC<{
  pageTitle: string;
  children: React.ReactNode;
}> = ({ pageTitle, children }) => {
  // to pull data into a building-block component
  // we'll use a pre-defined function from Gatsby called `useStaticQuery`
  // Call `useStaticQuery` nad pass it the query you created in Graph-iQL
  const siteMetadata = useSiteMetadata();

  return (
    <div className={container}>
      <header className={siteTitle}>{siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to='/' className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/about' className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/blog' className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
