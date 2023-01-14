import Link from 'next/link';

import { Layout } from '../components/layout/Layout';

export default function NotFoundPage() {
  return (
    <Layout>
      <section className="section-box mt-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mt-40">
              <h2 className="text-heading-3 color-gray-900 mb-20 mt-50">
                Den anmodede side kunne ikke findes på denne server.
              </h2>
              <p className="text-heading-5 color-gray-500 mt-30 mb-70">
                Hvis du mener dette er en fejl kan du kontakte os.
              </p>
              <div className="text-center mb-50 mt-50">
                <Link href="/" legacyBehavior>
                  <a className="btn btn-black icon-arrow-left">
                    Tilbage til forsiden
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
