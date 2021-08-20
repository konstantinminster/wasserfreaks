module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Wasserfreaks",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "CfBl5kZnfnSugnKDK5aYDzLTcRY0Q9iL78WiyfAun4E",
        spaceId: "kekrbjh8y2yu",
      },
    },
    "gatsby-plugin-styled-components",
  ],
};
