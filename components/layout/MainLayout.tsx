import { FC, PropsWithChildren } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className=" mx-auto container flex flex-col justify-between h-screen py-4">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
