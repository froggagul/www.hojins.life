import React from 'react';
import './search.sass';

interface SearchProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

export default ({ query, setQuery }: SearchProps) => (
  <div className="searchWrapper">
    <input
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
      }}
      placeholder="WHAT ARE YOU LOOKING FOR?"
    />
    <hr />
  </div>
);
