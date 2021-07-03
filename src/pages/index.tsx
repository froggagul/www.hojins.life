import React from 'react';
import Layout from '../components/layout';
import Search from '../components/search';
import Post from '../components/post';

const IndexRoute = () => {
  const [query, setQuery] = React.useState('');
  return (
    <Layout>
      <Search query={query} setQuery={setQuery} />
      <Post title="오늘 퇴사했습니다." link="to" series="퇴사 시리즈 EP 1." />
      <Post title="오늘 퇴사했습니다." link="to" series="퇴사 시리즈 EP 1." />
      <Post title="오늘 퇴사했습니다." link="to" series="퇴사 시리즈 EP 1." />
      <Post title="오늘 퇴사했습니다." link="to" series="퇴사 시리즈 EP 1." />
      <Post title="오늘 퇴사했습니다." link="to" series="퇴사 시리즈 EP 1." />
    </Layout>
  );
};

export default IndexRoute;
