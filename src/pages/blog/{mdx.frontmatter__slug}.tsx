import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import type { ImageDataLike } from 'gatsby-plugin-image';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

const BlogPost: React.FC<{
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
        hero_image_alt: string;
        hero_image_credit_link: string;
        hero_image_credit_text: string;
        hero_image: ImageDataLike;
      };
    };
  };
  children: React.ReactNode;
}> = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {image && (
        <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      )}
      <p>
        Photo Credit:{' '}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
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
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
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
