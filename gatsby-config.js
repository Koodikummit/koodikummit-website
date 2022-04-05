module.exports = {
  siteMetadata: {
    title: `Koodikummit`,
    siteUrl: `https://koodikummit.org`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `exo`,
          `space grotesk`
        ],
        display: 'swap'
      }
    },

  ]
};