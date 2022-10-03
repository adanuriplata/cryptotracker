import type { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import { CryptoTable, MainLayout, Search } from '../components';

const Home: NextPage = () => {

  const[ query, setQuery] = useState('')

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
      setQuery(evt.target.value)
  }

  return (
    <MainLayout>
      <Search handleChange={handleChange}/>
      <CryptoTable query={query} />
    </MainLayout>
  );
};

export default Home;
