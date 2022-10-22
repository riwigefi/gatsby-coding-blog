import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout/index';
import Seo from '../../components/Seo/index';
import usePostNodes from '../../hooks/usePostInfo';

const BlogPage = () => {
  const edges = usePostNodes();

  console.log('edges--', edges);

  return (
    <Layout pageTitle='My Blog Posts'>
      <ul>
        {edges.map(({ node }) => (
          <article key={node.id}>
            <h2>
              <Link to={`/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))}
      </ul>
    </Layout>
  );
};

export const Head = () => <Seo title='My Blog Posts' />;

export default BlogPage;
