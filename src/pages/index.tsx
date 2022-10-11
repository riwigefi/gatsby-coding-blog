// Step 1: Import React
import * as React from 'react';
import Layout from '../components/Layout/index';

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
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
