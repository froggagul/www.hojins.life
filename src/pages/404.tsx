import React from 'react';
import SEO from '../components/seo';

const IndexRoute = () => {
  console.log('404');
  return (
    <>
      <SEO title="404" />
      <h1>404</h1>
    </>
  );
};

export default IndexRoute;
