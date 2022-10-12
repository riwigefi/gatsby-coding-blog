import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

const BlogPost: React.FC<{
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
      };
    };
  };
  children: React.ReactNode;
}> = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};

/**
 * Gatsby's File System Route API lets you dynamically create new pages from data layer nodes
 * by naming your files with a special syntax
 * - File System Routes only work on files in the `src/pages` directory(or subdirectories)
 * - To create a new collection route,you name your file `{nodeType.field}.js`,
 * where `nodeType` is the type of node you want to create page from,
 * and `field` is the data field from that node type that you want to use in the URL for that page
 *
 * Query variables let you pass in different data values to the same GraphQL query.
 * They can be combined with field arguments to get back data only about a specific node
 * Query variables can only be use in page queries
 */
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head: React.FC<{
  data: {
    mdx: {
      frontmatter: {
        title: string;
      };
    };
  };
}> = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
