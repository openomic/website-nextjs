import Link from 'next/link';
import { useEffect, useState } from 'react';

import { LogoText } from '../elements/Logo';

export const Header = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  return (
    <header
      className={scroll ? `header sticky-bar stick ` : `header sticky-bar`}
    >
      <div className="container">
        <div className="main-header">
          <div className="header-left">
            <div className="header-logo">
              <Link href="/">
                <LogoText />
              </Link>
            </div>
            <div className="header-nav">
              <nav className="nav-main-menu d-none d-xl-block">
                <ul className="main-menu">
                  <li>
                    <Link href="/" legacyBehavior>
                      <a className="active">Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" legacyBehavior>
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" legacyBehavior>
                      <a>Kontakt os</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="header-right">
            <div className="block-signin">
              <Link href="/contact" legacyBehavior>
                <a className="btn btn-default hover-up icon-arrow-right">
                  Kontakt os
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
