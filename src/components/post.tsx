import React from 'react';
import { Link } from 'gatsby';
import './post.sass';

interface PostProps {
  title: string;
  series: string
  link: string;
}

export default ({ title, series, link }: PostProps) => (
  <div className="singlePostWrapper">
    <Link to={link}>
      <div className="title">{title}</div>
      <div className="series">{series}</div>
    </Link>
  </div>
);
