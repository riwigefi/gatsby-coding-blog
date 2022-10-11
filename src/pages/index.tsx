// Step 1: Import React
import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout/index';

import Seo from '../components/Seo';

/**
 * The Gatsby Link components provides a performance feature called preloading.
 * This means that the resource for the linked page are requested when the link scrolls into view
 * or when the mouse hovers on it.
 * That way,when the user actually clicks on the link,the new page can load super quickly
 */

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      {/* <StaticImage
        alt='Street'
        src='https://th.wallhaven.cc/lg/zy/zygeko.jpg'
      /> */}

      <StaticImage alt='Wall heaven fantasy' src='../images/fantasy.jpeg' />
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title='Home Page'></Seo>;

// Step 3: Export your component
export default IndexPage;
