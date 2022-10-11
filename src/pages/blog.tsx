import * as React from 'react';
import Layout from '../components/Layout/index';
import Seo from '../components/Seo/index';
import usePostNodes from '../hooks/usePostNodes';

const BlogPage = () => {
  const postNodes = usePostNodes();

  return (
    <Layout pageTitle='My Blog Posts'>
      <ul>
        {postNodes.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const Head = () => <Seo title='My Blog Posts' />;

export default BlogPage;
