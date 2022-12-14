import React, { useEffect } from "react";

import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import type { ImageDataLike } from "gatsby-plugin-image";

import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

import "./markdownBlog.scss";

const BlogPost = ({
  data, // this prop will be injected by the GraphQL query below.
}: {
  data: any;
}) => {
  console.log("data--", data);

  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, timeToRead, html } = markdownRemark;
  const { tags, date, title } = frontmatter;
  console.log("front-matter--", frontmatter);

  useEffect(() => {
    deckDeckGoHighlightElement().then((result) => {
      console.log("执行结果--", result);
    });
  }, []);
  return (
    <Layout pageTitle="Blog Page">
      <div className="markdown-blog">
        <div className="blog-info">
          {`${tags?.[0]} / ${date} / ${timeToRead} MIN READ`}
        </div>
        <h1 className="blog-title">{frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
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
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        tags
        date
        title
      }
      timeToRead
    }
  }
`;

export const Head: React.FC<{
  data: any;
}> = ({ data }) => <Seo title={data.markdownRemark.frontmatter.title} />;

export default BlogPost;
