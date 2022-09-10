import { FC, PropsWithChildren } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className=" container py-4 px-8 flex flex-col justify-between h-screen ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
