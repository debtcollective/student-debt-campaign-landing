require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config = {
  siteMetadata: {
    title: `Student Debt Strike`,
    description: `Student Debt Strike campaign page`,
    author: `@debtcollective`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
  ],
}

if (process.env.PATH_PREFIX) {
  config.pathPrefix = process.env.PATH_PREFIX
}

module.exports = config
