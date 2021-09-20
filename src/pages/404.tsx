import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexRoute = () => (
  <Layout>
    <SEO title="404" />
    <h1 className="">404!</h1>
    <h2 className="">페이지가 안보이네요... 혹시 이걸 찾으셨나요?!</h2>
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
