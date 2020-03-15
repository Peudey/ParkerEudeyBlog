import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Layout } from "../components/Layout";
import SEO from "../components/SEO";

export default ({ data, pageContext }) => {
  const { frontmatter, body, excerpt } = data.mdx;
  const { previous, next } = pageContext;
  return (
    <Layout>
      <SEO title={frontmatter.title} description={excerpt} />
      <div class="container">
        <div class="postHeader">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
        </div>
        <br />
        <div class="postBody">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        <br />
        <hr />
      </div>
      <span class="footer">
        {previous === false ? null : (
          <button class="button">
            {previous && (
              <Link to={previous.fields.slug}>
                <p>Previous: {previous.frontmatter.title}</p>
              </Link>
            )}
          </button>
        )}
        {next === false ? null : (
          <button class="button">
            {next && (
              <Link to={next.fields.slug}>
                <p>Next: {next.frontmatter.title}</p>
              </Link>
            )}
          </button>
        )}
      </span>
    </Layout>
  );
};

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt(pruneLength: 250)
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`;
