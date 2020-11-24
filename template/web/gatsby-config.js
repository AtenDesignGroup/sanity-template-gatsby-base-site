// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})
const {createProxyMiddleware} = require('http-proxy-middleware') // v1.x.x
const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'
const isGatsbyCloud = process.env.GATSBY_CLOUD === 'true'

module.exports = {
  siteMetadata: {
    title: `<#< sanity.projectTitle >#>`,
    description: `<#< sanity.projectTitle >#>`,
    siteUrl: `https://example.com`
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-netlify-cache',
      options: {
        cachePublic: true
      }
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `ttps://example.com`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/assets/svgs`
        }
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd || !isGatsbyCloud,
        overlayDrafts: !isProd || isGatsbyCloud
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ''
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Source Sans Pro:400,700`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [
          `/contact/thank-you`, `404`, `404.html`
        ],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({site, allSitePage}) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7
            }
          })
      }
    }
  ],
  // for avoiding CORS while developing Netlify Functions locally
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      createProxyMiddleware({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
          logLevel: 'debug'
        }
      })
    )
  }
}
