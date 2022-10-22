// Step 1: Import React
import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import usePostNodes from '../hooks/usePostInfo';

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
        <div className='introduction-self'>
          <h2>Hello, I am Jun Ming</h2>
          <p>
            A frontend developer consultant from China, focusing on user
            experience, visual and interaction design. This is my personal blog.
          </p>
        </div>
        <div className='portrait-warp'>
          <StaticImage
            class='avatar'
            alt='Self Avatar'
            src='../images/fantasy.jpeg'
          />
        </div>
      </section>
      <section className='home-content'>
        {Array(10)
          .fill(1)
          .map((_, idx) => (
            <div className='blog-preview' key={idx}>
              <div className='blog-info'>
                Tag / Time / Time to Read / Location
              </div>
              <div className='blog-title'>
                <Link className='title' to='/home'>
                  浅谈JDK的动态代理
                </Link>
              </div>
              <div className='blog-excerpt'>
                She then expatiated very warmly upon the advantages I should
                reap from her plan; talked in a high style of my future
                grandeur; assured me how heartily I should despise almost every
                body and every thing I had hitherto seen; predicted my marrying
                into some family of the
              </div>
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
