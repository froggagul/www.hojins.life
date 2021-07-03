import React from 'react';
import { Link } from 'gatsby';
import './post.sass';

interface PostProps {
  title: string;
  link: string;
  series: string | null;
}

export default ({ title, series, link }: PostProps) => (
  <div className="singlePostWrapper">
    <Link to={link}>
      <div className="title">{title}</div>
      {series && <div className="series">{series}</div>}
    </Link>
  </div>
);
