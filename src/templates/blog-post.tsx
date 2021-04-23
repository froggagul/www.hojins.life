/* eslint-disable react/no-danger */
import React from 'react';
import { ITemplateProps } from '../interface';

type IPostTemplateProps = ITemplateProps<{
  html: string;
  title: string;
}>;

const PostTemplate: React.FC<IPostTemplateProps> = React.memo((props: IPostTemplateProps) => {
  const { title, html } = props.pageContext;

  return (
    <>
      <h2>{title}</h2>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
