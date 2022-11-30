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

    const postNodeList = usePostNodes();

  return (
    <Layout pageTitle='Home Page'>
      <section className='home-hero'>
        <div className='introduction'>
          <h2 className="brief">Hello, I am Jun Ming</h2>
          <p className="detail">
            A frontend developer consultant from China, focusing on user
            experience, visual and interaction design. This is my personal blog.
          </p>
        </div>
        <div className='portrait-warp'>
          <StaticImage
            class='avatar'
            alt='Self Avatar'
            src='../images/avatar.png'
          />
        </div>
      </section>
      <section className='home-content'>
        {postNodeList.map((item, idx) =>{

            const {
               tags,title,date,slug
            } = item.node.frontmatter;
            const excerpt = item.node.excerpt;
            const timeToRead = item.node.timeToRead;
            return  (
                <div className='post-preview' key={idx}>
                    <div className='post-info'>
                        <Link className="post-tag" to="/">{tags[0]}</Link>
                        {` / ${date} / ${timeToRead} min / Location`}
                    </div>
                    <Link className="post-link" to={`/blog/${slug}`}>
                        <div className="post-title">
                            {title}
                        </div>
                        <div className='post-excerpt'>
                            {excerpt}
                        </div>
                    </Link>
                </div>
            )
        })}
      </section>
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title='Home Page'></Seo>;

// Step 3: Export your component
export default IndexPage;
