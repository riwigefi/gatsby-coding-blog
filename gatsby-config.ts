import type { GatsbyConfig } from "gatsby";

const gatsbySourceFilesystemOptionForMd = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `blog`,
    path: `${__dirname}/blog`,
  },
};

const gatsbySourceFilesystemOptionForIllustration = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `blog`,
    path: `${__dirname}/illustration`,
  },
};

const gatsbyTransformerRemarkOption = {
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      {
        resolve: `gatsby-remark-highlight-code`,
        options: {
          theme: "dracula",
        },
      },
      {
        resolve: `gatsby-remark-images`,
        options: {
          maxWidth: 800,
        },
      },
    ],
  },
};

const gatsbyReactSvgOption = {
  resolve: `gatsby-plugin-react-svg`,
  options: {
    rule: {
      include: `${__dirname}/src/icons`,
    },
  },
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-coding-blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through
  // automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    gatsbyReactSvgOption,
    // `gatsby-plugin-mdx`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    gatsbyTransformerRemarkOption,
    `gatsby-plugin-image`,
    gatsbySourceFilesystemOptionForMd,
    gatsbySourceFilesystemOptionForIllustration,
  ],
};

export default config;
