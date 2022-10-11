import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery<{
    site: {
      siteMetadata: {
        title: string;
      };
    };
  }>(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
