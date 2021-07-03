import { useState, useEffect } from 'react';
import FlexSearch, { Index, SearchOptions } from 'flexsearch';
import Hangul from 'hangul-js';

const useSearch = (query: string, providedIndex?: string, store?: {
  [id: string]: {
    id: string,
    title: string,
    date: string,
    series: string | null,
    path: string
  }
}, searchOptions? : SearchOptions) => {
  const [index, setIndex] = useState<Index<string>>();
  const [result, setResult] = useState<any[]>();

  useEffect(() => {
    if (!providedIndex && !store) {
      console.warn('A FlexSearch index and store was not provided. Your search results will be empty.');
    } else if (!providedIndex) {
      console.warn('A FlexSearch index was not provided. Your search results will be empty.');
    } else if (!store) {
      console.warn('A FlexSearch store was not provided. Your search results will be empty.');
    }
  }, [providedIndex, store]);

  useEffect(() => {
    if (!providedIndex) {
      // setIndex(null);
      return;
    }

    // if (providedIndex instanceof FlexSearch) {
    //   setIndex(providedIndex);
    //   return;
    // }
    const importedIndex = FlexSearch.create<string>({
      encode: false,
      tokenize(str) {
        // const res = str.replace(/[\x00-\x7F]/g, '').split('');
        const res = Hangul.disassemble(str);
        return res;
      },
    });
    importedIndex.import(providedIndex);
    setIndex(importedIndex);
  }, [providedIndex]);

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const search = async (query: string, searchOptions?: SearchOptions) => {
      if (!query || !index || !store) {
        if (query === '') {
          setResult(Object.values(store));
        } else {
          setResult([]);
        }
      } else {
        const res = await index.search(query, searchOptions);
        setResult(res.map((id) => store[id]));
      }
    };
    search(query, searchOptions);
  }, [query, index, store]);
  return result;
};

export default useSearch;
