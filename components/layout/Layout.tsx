import { ReactNode, useState } from 'react';

import { BackToTop } from '../elements/BackToTop';
import { Footer } from './Footer';
import { Header } from './Header';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({
  children,
}: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};