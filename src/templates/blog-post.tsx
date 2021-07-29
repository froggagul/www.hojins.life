/* eslint-disable react/no-danger */
import React from 'react';
import { Link } from 'gatsby';
import { ITemplateProps } from '../interface';
import Layout from '../components/layout';
import './blog-post.sass';

type IPostTemplateProps = ITemplateProps<{
  html: string,
  title: string,
  date: string,
  ep: number,
  series?: string,
}>;

const PostTemplate: React.FC<IPostTemplateProps> = React.memo((props: IPostTemplateProps) => {
  const {
    title, html, date, series, ep,
  } = props.pageContext;

  return (
    <Layout>
      <article>
        <div className="title">{title}</div>
        {series && (
        <div className="series">
          <Link to={`/?query=${series}`}>
            {series}
          </Link>
          {` Ep. ${ep}`}
        </div>
        )}
        {date && <div className="date">{date}</div>}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
