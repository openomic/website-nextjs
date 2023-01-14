import { ReactNode, useState } from 'react';

import { BackToTop } from '../elements/BackToTop';
import { Footer } from './Footer';
import { Header } from './Header';

interface LayoutProps {
  title?: string;
  children?: ReactNode;
}

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Header />
      {title ? <title>{title}</title> : null}
      <main className="main">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
};
