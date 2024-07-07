import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexRoute = () => {
  const bornDate = new Date('2000-04-19');
  const now = new Date();
  const age = now.getFullYear() - bornDate.getFullYear();
  const month = now.getMonth() - bornDate.getMonth();
  let koreanAge = age;
  if (month < 0 || (month === 0 && now.getDate() < bornDate.getDate())) {
    koreanAge = age - 1;
  }

  return (
    <Layout>
      <SEO title="about" />
      <article>
        <section>
          <h3>
            정호진
          </h3>
        </section>
        <img
          src="/profile.jpeg"
          alt="profile"
          width={240}
        />
        <section>
          나이 -
          {` ${age} `}
          / 만 나이 -
          {` ${koreanAge}`}
        </section>
        <section>
          똑똑한 로봇 만들려고 공부하는 대학원생의 일기장
          <br />
          글 읽고 후기 남겨주면 좋아함
        </section>
      </article>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    localSearchPages {
      index
    }
  }
`;

export default IndexRoute;
