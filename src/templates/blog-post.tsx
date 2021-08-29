/* eslint-disable react/no-danger */
import React from 'react';
import { Link } from 'gatsby';
import { ITemplateProps } from '../interface';
import Layout from '../components/layout';
import SEO from '../components/seo';
import './blog-post.sass';
import { PageNode } from '../../gatsby/createPages';

type IPostTemplateProps = ITemplateProps<{
  html: string,
  title: string,
  date: string,
  series: {
    series: string,
    ep: number,
    max: number,
  }
  prev?: PageNode,
  next?: PageNode,
}>;

const PostTemplate: React.FC<IPostTemplateProps> = React.memo((props: IPostTemplateProps) => {
  const {
    title, html, date, series, prev, next,
  } = props.pageContext;

  return (
    <Layout>
      <SEO title={title} article />
      <article>
        <section>
          <div className="title">{title}</div>
          <div className="series">
            <Link to={`/?query=${series.series}`}>
              {series.series}
            </Link>
            {` Ep. ${series.ep}/${series.max}`}
          </div>
          {date && <div className="date">{date}</div>}
        </section>
        <section className="post" dangerouslySetInnerHTML={{ __html: html }} />
        <nav className="bottom">
          <div className="prev">
            {prev && (
              <Link to={prev.fields.path}>
                &laquo;
                {` Ep. ${prev.frontmatter.ep} ${prev.frontmatter.title}`}
              </Link>
            )}
          </div>
          <div className="next">
            {next && (
              <Link to={next.fields.path}>
                {`Ep. ${next.frontmatter.ep} ${next.frontmatter.title} `}
                &raquo;
              </Link>
            )}
          </div>
        </nav>
      </article>
    </Layout>
  );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
