import React from "react";
import Helmet from "react-helmet";
import propTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

const SEO = ({ description, meta, title }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              author
            }
          }
        }
      `}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        const image = null;
        return (
          <Helmet
            htmlAttributes={{
              lang: "en"
            }}
            meta={[
              {
                name: "description",
                content: metaDescription
              },
              {
                property: "og:title",
                content: title
              },
              {
                property: "og:description",
                content: metaDescription
              },
              {
                name: "twitter:creator",
                content: data.site.siteMetadata.author
              },
              {
                name: "twitter:description",
                content: metaDescription
              }
            ]}
          />
        );
      }}
    />
  );
};

SEO.defaultProps = {
  meta: []
};

SEO.propTypes = {
  description: propTypes.string,
  meta: propTypes.array,
  title: propTypes.string.isRequired
};

export default SEO;
