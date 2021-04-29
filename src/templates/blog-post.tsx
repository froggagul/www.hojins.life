/* eslint-disable react/no-danger */
import React from 'react';
import { ITemplateProps } from '../interface';
import Layout from '../components/layout';

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
      <h2>{title}</h2>
      {date && <h3>{date}</h3>}
      {series && <h3>{series}</h3>}
      <hr />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
