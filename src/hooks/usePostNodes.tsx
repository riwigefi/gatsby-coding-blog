import { graphql, useStaticQuery } from 'gatsby';

const usePostNodes = () => {
  const data = useStaticQuery<{
    allFile: {
      nodes: {
        name: string;
      }[];
    };
  }>(graphql`
    query {
      allFile {
        nodes {
          name
        }
      }
    }
  `);

  return data.allFile.nodes;
};

export default usePostNodes;
