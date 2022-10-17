// Step 1: Import React
import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout/index';

import Seo from '../components/Seo';

import './index.scss';

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
      <section className='home-hero'>
        <div className='home-hero-inner'>
          <div className='intro-wrap'></div>
          <div className='portrait-wrap'></div>
        </div>
      </section>
      <section className='home-content-container'>
        {Array(50)
          .fill(1)
          .map((_, idx) => (
            <div
              className='img-container'
              style={{ margin: '20px auto' }}
              key={idx}
            >
              <p>I'm making this by following the Gatsby Tutorial.{idx}</p>
              <StaticImage
                alt='Wall heaven fantasy'
                src='../images/fantasy.jpeg'
              />
            </div>
          ))}
      </section>
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title='Home Page'></Seo>;

// Step 3: Export your component
export default IndexPage;
