import { graphql, useStaticQuery } from 'gatsby';

const usePostNodes = () => {
  const data = useStaticQuery<{
    allMdx: {
      nodes: {
        frontmatter: {
          date: string;
          title: string;
          slug: string;
        };
        id: string;
        excerpt: string;
      }[];
    };
  }>(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
          }
          id
          excerpt(pruneLength: 50)
        }
      }
    }
  `);

  return data.allMdx.nodes;
};

export default usePostNodes;
