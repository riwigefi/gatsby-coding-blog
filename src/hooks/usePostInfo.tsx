import { graphql, useStaticQuery } from 'gatsby';

const usePostNodes = () => {
  const data = useStaticQuery<{
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            tags: string[];
            date: string;
            title: string;
            slug: string;
          };
          id: string;
          excerpt: string;
        };
      }[];
    };
  }>(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags
              title
              date
              slug
            }
            excerpt
          }
        }
      }
    }
  `);

  return data.allMarkdownRemark.edges;
};

export default usePostNodes;
