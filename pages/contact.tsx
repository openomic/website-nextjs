import { Layout } from '../components/layout/Layout';

export default function Contact() {
  return (
    <Layout title="Openomic - Kontakt os">
      <section className="section-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-10 col-12 text-center mt-40">
              <h2 className="text-heading-1 color-gray-900 mb-20">
                Kontakt os
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="section-box">
        <div className="container mb-20 mt-50">
          <div className="bdrd-58 box-gray-100 icon-wave">
            <div className="row">
              <div className="col-lg-12 mb-60">
                <span className="text-body-capitalized text-uppercase">
                  Kontakt os
                </span>
                <h2 className="text-heading-3 color-gray-900 mt-10">
                  Udfyld formularen så vi kan tage kontakt til dig
                </h2>
                <p className="text-body-text color-gray-600 mt-20">
                  Hvis du har et projekt eller et generelt spørgsmål, kan du
                  kontakte os her - Vi bestræber os på at svare indenfor to
                  hverdage.
                </p>
                <p className="text-body-text color-gray-600 mt-10">
                  Alle henvendelser er helt uforpligtende.
                </p>
              </div>
              <div className="col-lg-4 mb-40">
                <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">
                  Openomic ApS
                </h4>
                <p className="text-body-text color-gray-600">
                  xxxxxxxxx
                </p>
                <p className="text-body-text color-gray-600">
                  xxxxxxxxx
                </p>
                <p className="text-body-text color-gray-600">12345678</p>
                <p className="text-body-text color-gray-600">
                  kontakt@openomic.dk
                </p>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Comapy (optioanl)"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Tell us about yourself"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 mt-15">
                    <button
                      className="btn btn-black icon-arrow-right-white mr-40 mb-20"
                      type="submit"
                    >
                      Send Message
                    </button>
                    <br className="d-lg-none d-block" />
                    <span className="text-body-text-md color-gray-500 mb-20">
                      By clicking contact us button, you agree our terms and
                      policy,
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
