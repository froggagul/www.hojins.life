import { resolve } from 'path';
import { GatsbyNode } from 'gatsby';

type PageData = {
  data?: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: string,
          html: string,
        },
      }[],
    }
  },
  errors?: any
}

const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const { data, errors }:PageData = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);
  if (errors) {
    throw errors;
  }

  data?.allMarkdownRemark.edges.forEach(({ node }: any) => {
    createPage({
      path: node.frontmatter.title,
      context: {
        html: node.html,
        title: node.frontmatter.title,
      },
      component: resolve(__dirname, '../src/templates/blog-post.tsx'),
    });
  });
};

export { createPages };
