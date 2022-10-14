import React, { useCallback, useState } from 'react';
import { Link } from 'gatsby';

import { MDXProvider } from '@mdx-js/react';

import CodeBlock from '../CodeBlock';

import SiteHeader from '../SiteHeader';

import useSiteMetadata from '../../hooks/useSiteMetadata';

const components = {
  pre: (props: any) => <div {...props}></div>,
  code: CodeBlock,
};

const Layout: React.FC<{
  pageTitle: string;
  children: React.ReactNode;
}> = ({ pageTitle, children }) => {
  // to pull data into a building-block component
  // we'll use a pre-defined function from Gatsby called useStaticQuery
  // Call useStaticQuery nad pass it the query you created in Graph-iQL
  const siteMetadata = useSiteMetadata();

  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = useCallback(
    () => setIsLightTheme((isLightTheme) => !isLightTheme),
    []
  );

  return (
    <MDXProvider components={components as any}>
      <div className='site-wrap' data-theme={isLightTheme ? 'light' : 'dark'}>
        <div className='site-header-container'>
          <SiteHeader
            isLightTheme={isLightTheme}
            toggleTheme={toggleTheme}
          ></SiteHeader>
        </div>
        <div className='main-container'>
          <div className='main'>{children}</div>
        </div>
        <footer className='site-footer-container'>这里是页脚</footer>
      </div>
    </MDXProvider>
  );
};

export default Layout;
