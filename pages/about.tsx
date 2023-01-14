import Link from 'next/link';
import { OpReturnType } from 'openapi-typescript-fetch';

import { operations } from '../client';
import { Layout } from '../components/layout/Layout';
import { fetcherClient } from './_app';

export async function getServerSideProps() {
  const getEmployees = fetcherClient.path("/employees").method("get").create();
  const { data: employees } = await getEmployees({});
  return { props: { employees } };
}

export default function AboutUs({
  employees,
}: {
  employees: OpReturnType<operations["get/employees"]>;
}) {
  return (
    <Layout>
      <section className="section-box">
        <div className="container mt-110">
          <div className="row">
            <div className="col-lg-9 col-sm-8">
              <h3 className="text-heading-1 mb-10">Our Team</h3>
              <p className="text-body-lead-large color-gray-600">
                Decades of experience in design and development
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-80">
          <div className="box-swiper">
            <div className="swiper-container swiper-group-1">
              {employees.data?.map((employee) => (
                <div className="swiper-slide active" key={employee.id}>
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="card-grid-style-5 hover-up">
                        <div className="grid-5-img mb-15">
                          <img
                            src="/assets/imgs/page/about/1/team-1.png"
                            alt="Agon"
                          />
                        </div>
                        <span className="text-body-text-md color-gray-500">
                          Marketing CEO
                        </span>
                        <h3 className="text-heading-5 mb-5 mt-5">
                          {employee.attributes?.name}
                        </h3>
                        <p className="text-body-excerpt text-desc color-gray-500 mt-15 mb-20">
                          {employee.attributes?.description}
                        </p>
                        <span className="text-body-text-md color-gray-600">
                          Let’s Connect
                        </span>
                        <div className="social-bottom">
                          <Link href="#" legacyBehavior>
                            <a className="icon-socials icon-facebook"></a>
                          </Link>
                          <Link href="#" legacyBehavior>
                            <a className="icon-socials icon-twitter"></a>
                          </Link>
                          <Link href="#" legacyBehavior>
                            <a className="icon-socials icon-instagram"></a>
                          </Link>
                          <Link href="#" legacyBehavior>
                            <a className="icon-socials icon-linkedin"></a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
