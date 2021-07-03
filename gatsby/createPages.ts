import { resolve } from 'path';
import { GatsbyNode } from 'gatsby';

interface PageData {
  allMarkdownRemark: {
    edges: {
      node: {
        id: string,
        html: string,
        frontmatter: {
          title: string,
          date: string,
          ep: number | string,
        }
        fields: {
          path: string,
          series?: string,
        }
      },
    }[],
  }
}

const parseDate = (dateString: string) => {
  const parts = dateString.split('-');

  const date = new Date(
    parseInt(parts[0], 10),
    parseInt(parts[1], 10) - 1,
    parseInt(parts[2], 10),
  );
  return date.toDateString();
};

const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const { data, errors } = await graphql<PageData>(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              title
              date
              ep
            }
            fields {
              path
              series
            }
          }
        }
      }
    }
  `);
  if (errors) {
    throw errors;
  }

  data?.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.path,
      context: {
        html: node.html,
        title: node.frontmatter.title,
        date: parseDate(node.frontmatter.date),
        series: node.fields.series,
        ep: node.frontmatter.ep,
      },
      component: resolve(__dirname, '../src/templates/blog-post.tsx'),
    });
  });
};

export { createPages };
