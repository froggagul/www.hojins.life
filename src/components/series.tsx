import React from 'react';
import { Link } from 'gatsby';
import './series.sass';

interface SeriesProps {
  series: string;
  count: number;
}

export default ({ series, count }: SeriesProps) => (
  <div className="singleSeriesWrapper">
    <Link to={`/?query=${series}`}>
      {`${series} (${count})`}
    </Link>
  </div>
);
