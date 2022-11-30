import { graphql, useStaticQuery } from "gatsby";

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
          timeToRead: number;
        };
      }[];
    };
  }>(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              tags
              title
              date
              slug
            }
            id
            excerpt
            timeToRead
          }
        }
      }
    }
  `);

  return data.allMarkdownRemark.edges;
};

export default usePostNodes;
