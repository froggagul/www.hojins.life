/* eslint-disable react/no-danger */
import React from 'react';
import { ITemplateProps } from '../interface';
import Layout from '../components/layout';

type IPostTemplateProps = ITemplateProps<{
  html: string;
  title: string;
}>;

const PostTemplate: React.FC<IPostTemplateProps> = React.memo((props: IPostTemplateProps) => {
  const { title, html } = props.pageContext;

  return (
    <Layout>
      <h2>{title}</h2>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
