import type { NextPage } from 'next';
import { CryptoTable, MainLayout } from '../components';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <CryptoTable />
    </MainLayout>
  );
};

export default Home;
