const siteMetadata = {
  title: `Parker Eudey's Blog`,
  description: `My journey as a former mechanical designer, current programming student and prop designer`,
  url: "https://www.parkereudey.com",
  imrage: ""
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`
      }
    }
  ]
};
