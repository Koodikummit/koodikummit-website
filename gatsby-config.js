require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Koodikummit`,
    siteUrl: `https://koodikummit.org`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`exo`, `space grotesk`, 'krona one'],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.ACCESS_TOKEN,
        spaceId: process.env.SPACE_ID,
        host: process.env.CONTENTFUL_HOST || 'cdn.contentful.com',
      },
    },

    'gatsby-plugin-image',
  ],
};
