/* eslint-disable react/no-danger */
import React from 'react';
import { ITemplateProps } from '../interface';
import Layout from '../components/layout';
import './blog-post.sass';

type IPostTemplateProps = ITemplateProps<{
  html: string,
  title: string,
  date: string,
  series?: string,
}>;

const PostTemplate: React.FC<IPostTemplateProps> = React.memo((props: IPostTemplateProps) => {
  const {
    title, html, date, series,
  } = props.pageContext;
  console.log(props.pageContext);

  return (
    <Layout>
      <article>
        <div className="title">{title}</div>
        {series && <div className="series">{series}</div>}
        {date && <div className="date">{date}</div>}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
