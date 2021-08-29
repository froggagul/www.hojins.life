import { resolve } from 'path';
import { GatsbyNode } from 'gatsby';

interface PageData {
  allMarkdownRemark: {
    edges: {
      node: PageNode,
    }[],
  }
}

export interface PageNode {
  id: string,
  html: string,
  frontmatter: {
    title: string,
    date: string,
    ep: number,
  }
  fields: {
    path: string,
    series?: string,
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
  const seriesInfo: { [id: string]: { count: number, [ep: number]: PageNode } } = {};
  data?.allMarkdownRemark.edges.forEach(({ node }) => {
    const { series } = node.fields;
    const { ep } = node.frontmatter;
    if (series) {
      seriesInfo[series] = seriesInfo[series] || { count: 0 };
      seriesInfo[series].count = seriesInfo[series].count < ep ? ep : seriesInfo[series].count;
      seriesInfo[series][ep] = node;
    }
  });

  data?.allMarkdownRemark.edges.forEach(({ node }) => {
    const { ep, title } = node.frontmatter;
    const { path, series } = node.fields;
    createPage({
      path,
      context: {
        html: node.html,
        title,
        date: parseDate(node.frontmatter.date),
        series: {
          series,
          ep,
          max: series && seriesInfo[series].count,
        },
        prev: ep > 0 && series ? seriesInfo[series][ep - 1] : null,
        next: series && ep < seriesInfo[series].count ? seriesInfo[series][ep + 1] : null,
      },
      component: resolve(__dirname, '../src/templates/blog-post.tsx'),
    });
  });
};

export { createPages };
