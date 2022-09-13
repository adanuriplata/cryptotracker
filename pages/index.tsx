import type { NextPage } from 'next';
import { CryptoTable, MainLayout } from '../components';

const Home: NextPage = () => {
  console.log("me renderizos")
  return (
    <MainLayout>
      <CryptoTable />
    </MainLayout>
  );
};

export default Home;
