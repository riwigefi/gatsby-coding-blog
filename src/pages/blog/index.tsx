import * as React from "react";
import { Link } from "gatsby";

import dayjs from "dayjs";

import Layout from "../../components/Layout/index";
import Seo from "../../components/Seo/index";
import usePostNodes from "../../hooks/usePostInfo";

import "./index.scss";

interface IBlog {
  id: string;
  mmmDd: string;
  title: string;
  slug: string;
}

const BlogPage = () => {
  const edges = usePostNodes();

  const blogMap: {
    year: string;
    blogs: IBlog[];
  }[] = [];

  edges.forEach(
    ({
      node: {
        frontmatter: { date, title, slug },
        id,
      },
    }) => {
      const year = dayjs(date).format("YYYY");
      console.log("year--", year);
      let yearBlogs: IBlog[] | undefined = blogMap.find(
        (o) => o.year === year
      )?.blogs;
      if (!yearBlogs) {
        blogMap.push({
          year,
          blogs: (yearBlogs = []),
        });
      }
      yearBlogs.push({
        id,
        mmmDd: dayjs(date).format("MMM DD"),
        title,
        slug,
      });
    }
  );
  console.log("map--", blogMap);

  return (
    <Layout pageTitle="Blogs">
      <div className="content">
        <h1 className="section">Yearly Archives</h1>
        <div className="blogs">
          {blogMap.map((item) => {
            return (
              <section className="year-blog" key={item.year}>
                <div className="year">{item.year}</div>
                <ul className="blog-list">
                  {item.blogs.map((blog) => (
                    <li key={blog.id}>
                      <article className="blog">
                        <time className="post-date">{`${blog.mmmDd} - `}</time>
                        <Link className="title" to={`/blog/${blog.slug}`}>
                          {blog.title}
                        </Link>
                      </article>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
