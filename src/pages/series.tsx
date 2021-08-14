import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Series from '../components/series';
import SEO from '../components/seo';

interface IndexRouteProps {
  data: {
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
}

const IndexRoute = ({
  data: {
    allMarkdownRemark: {
      edges,
    },
  },
}: IndexRouteProps) => {
  const counts: { [id: string]: number } = {};
  edges.forEach(({ node }) => {
    const { series } = node.fields;
    if (series) {
      counts[series] = 1 + (counts[series] || 0);
    }
  });
  return (
    <Layout>
      <SEO title="series" />
      {Object.keys(counts).map((key) => (
        <Series series={key} count={counts[key]} key={key} />
      ))}
    </Layout>
  );
};

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            series
          }
        }
      }
    }
  }
`;

export default IndexRoute;
