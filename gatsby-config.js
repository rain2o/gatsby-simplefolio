const siteUrl = process.env.URL || process.env.DEPLOY_URL || `https://joel.rainwater.io`;

module.exports = {
  siteMetadata: {
    title: `Joel Rainwater | Developer`,
    author: `Joel Rainwater`,
    description: `Jack-of-all-codes: I'm a diverse developer, trying to learn something new every day.`,
    siteUrl,
    social: {
      twitter: `Joel_Rain2o`,
    },
    keywords: ['web developer', 'vuejs', 'full stack developer'],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Joel Rainwater | Developer`,
        short_name: `Joel Rainwater`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3658BF`,
        display: `standalone`,
        icon: 'src/images/jr-icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-100828879-2',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        cookieDomain: 'rainwater.io',
      },
    },
  ],
};
