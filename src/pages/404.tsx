import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexRoute = () => (
  <Layout>
    <SEO title="404" />
    <h1 className="">404!</h1>
    <h2 className="">404 아이디어 추천받습니다 :D</h2>
  </Layout>
);

export const pageQuery = graphql`
  query {
    localSearchPages {
      index
      store
    }
  }
`;

export default IndexRoute;
