import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { Layout } from '../components/Layout';

export default ({ data, pageContext }) => {
    const { frontmatter, body } = data.mdx;
    const { previous, next } = pageContext;
    return (
        <Layout>
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
            <span class = "footer">
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
            frontmatter {
                title
                date(formatString: "YYYY MMMM Do")
            }
        }
    }
`;