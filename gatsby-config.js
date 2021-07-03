const Hangul = require('hangul-js');

module.exports = {
  siteMetadata: {
    title: "hojin's note",
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-Z06PKTM3TV',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/posts`,
      },
      __key: 'pages',
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
                    }
                  }
                }
              }
            }`,
        ref: 'id',
        index: ['title', 'series'],
        store: ['id', 'title', 'date', 'series', 'path'],
        normalizer: ({ data }) => data.allMarkdownRemark.edges.map(({ node }) => ({
          id: node.id,
          date: node.frontmatter.date,
          title: node.frontmatter.title,
          series: node.fields.series,
          path: node.fields.path,
        })),
      },
    },
  ],
};
