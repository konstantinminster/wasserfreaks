require('dotenv').config();


module.exports = {
  siteMetadata: {
    siteUrl: "https://wasserfreaksblog.gatsbyjs.io/",
    title: "Wasserfreaks",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-styled-components",
  ],
};
