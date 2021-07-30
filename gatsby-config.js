const Hangul = require('hangul-js');

module.exports = {
  siteMetadata: {
    title: "Hojin's Note",
    titleTemplate: "Hojin's Note | %s",
    siteUrl: 'https://froggagul.github.io',
    description: 'I\'m writing my own feelings on this blog',
    twitterUsername: 'froggagul',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp', // Needed for dynamic images
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          'G-3418XWFVWM',
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/logo.jpg',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/content/posts`,
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'pages',
        engine: 'flexsearch',
        engineOptions: {
          encode: false,
          tokenize(str) {
            // const res = str.replace(/[\x00-\x7F]/g, '').split('');
            const res = Hangul.disassemble(str);
            return res;
          },
        },
        query: `
            query MyQuery {
              allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
                edges {
                  node {
                    id
                    fields {
                      path
                      series
                    }
                    frontmatter {
                      date
                      title
                      ep
                    }
                  }
                }
              }
            }`,
        ref: 'id',
        index: ['title', 'seriesTerm'],
        store: ['id', 'title', 'date', 'series', 'path', 'ep'],
        normalizer: ({ data }) => data.allMarkdownRemark.edges.map(({ node }) => ({
          id: node.id,
          date: node.frontmatter.date,
          title: node.frontmatter.title,
          ep: node.frontmatter.ep,
          series: node.fields.series,
          seriesTerm: node.fields.series ? `${node.fields.series} Ep. ${node.frontmatter.ep}` : null,
          path: node.fields.path,
        })),
      },
    },
  ],
};
