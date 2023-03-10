import Link from 'next/link';

import { LogoText } from '../elements/Logo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer mt-50">
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-md-4 col-sm-6 text-center text-md-start">
              <Link href="/" legacyBehavior>
                <LogoText />
              </Link>
            </div>
            <div className="col-md-8 col-sm-6 text-center text-md-end">
              <span className="color-gray-900 text-heading-6 mr-30 text-mb-sm-20">
                Skal vi hjælpe dig med dit næste projekt?
              </span>
              <Link href="/kontakt" legacyBehavior>
                <a className="btn btn-square">Kontakt os</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 mb-30">
            <h4 className="text-heading-5">Openomic</h4>
            <div className="mt-20 text-body-text color-gray-600 mb-20">
              Vi hjælper dig fra idé til endelig løsning.
            </div>
            <div className="social-bottom">
              <Link
                href="https://github.com/openomic/"
                target="_blank"
                legacyBehavior
              >
                <a className="icon-socials icon-linkedin"></a>
              </Link>
              <Link
                href="https://www.linkedin.com/company/openomic/"
                target="_blank"
                legacyBehavior
              >
                <a className="icon-socials icon-linkedin"></a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 mb-30">
            <h4 className="text-heading-5">Links</h4>
            <ul className="menu-footer mt-20">
              <li>
                <Link href="/" legacyBehavior>
                  <a>Forside</a>
                </Link>
              </li>
              <li>
                <Link href="/om-os" legacyBehavior>
                  <a>Om os</a>
                </Link>
              </li>
              <li>
                <Link href="/kontakt" legacyBehavior>
                  <a>Kontakt</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 mb-30">
            <h4 className="text-heading-5">Referencer</h4>
            <ul className="menu-footer mt-20">
              <li>
                <Link href="/referencer/1" legacyBehavior>
                  <a>Reference 1</a>
                </Link>
              </li>
              <li>
                <Link href="/referencer/2" legacyBehavior>
                  <a>Reference 2</a>
                </Link>
              </li>
              <li>
                <Link href="/referencer/3" legacyBehavior>
                  <a>Reference 3</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 mb-30">
            <h4 className="text-heading-5">Karriere</h4>
            <div className="mt-20 text-body-text color-gray-600 mb-20">
              Ønsker du at gøre karriere hos Openomic? Se vores
              <Link href="/karriere" legacyBehavior>
                <a> ledige stillinger</a>
              </Link>
              .
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-20">
          <div className="row">
            <div className="col-md-6">
              <span className="text-body-text color-gray-400">
                © Openomic ApS {currentYear} · CVR 42229555
              </span>
            </div>
            <div className="col-md-6 text-center text-lg-end text-md-end">
              <Link href="/privatlivspolitik" legacyBehavior>
                <a className="text-body-text color-gray-400 ml-50">
                  Privatlivspolitik
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
