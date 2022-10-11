import * as React from 'react';
import Layout from '../components/Layout/index';
import Seo from '../components/Seo/index';
import usePostNodes from '../hooks/usePostMdx';

const BlogPage = () => {
  const postMdxNodes = usePostNodes();

  return (
    <Layout pageTitle='My Blog Posts'>
      <ul>
        {postMdxNodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
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
