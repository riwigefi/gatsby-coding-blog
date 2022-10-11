import type { GatsbyConfig } from 'gatsby';

const gatsbySourceFilesystemOption = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `blog`,
    path: `${__dirname}/blog`,
  },
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-coding-blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    gatsbySourceFilesystemOption,
  ],
};

export default config;
