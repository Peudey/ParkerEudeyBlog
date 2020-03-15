module.exports = {
  siteMetadata: {
    title: "Parker Eudey's Blog",
    author: "Parker Eudey",
    description:
      "My journey as a former mechanical designer, current programming student and web developer",
    siteUrl: "https://www.parkereudey.com"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
