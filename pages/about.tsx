import Link from 'next/link';
import { Fetcher, OpReturnType } from 'openapi-typescript-fetch';

import { operations, paths } from '../client';
import { Layout } from '../components/layout/Layout';

export async function getServerSideProps() {
  const fetcherClient = Fetcher.for<paths>();
  fetcherClient.configure({
    baseUrl: process.env.NEXT_PUBLIC_OPEN_API_BASE!,
    init: {
      headers: {},
    },
    use: [],
  });
  const getEmployees = fetcherClient.path("/employees").method("get").create();

  const { data: employees } = await getEmployees({});
  return { props: { employees } };
}

export default function About({
  employees,
}: {
  employees: OpReturnType<operations["get/employees"]>;
}) {
  return (
    <Layout title="Openomic - Om os">
      <section className="section-box pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-40">
              <h3 className="text-heading-1">Vores mission</h3>
              <p className="text-body-lead-large color-gray-600 mt-10">
                Hos Openomic kan vi løse et hav af forskellige opgavetyper, med
                den erfaring vi har opnået gennem vores tilsammen 15+ års
                erfaring. Vi kan hjælpe dig uanset om du selv har erfaring med
                udvikling eller ej.
              </p>
              <p className="text-body-text color-gray-600 mt-10">
                Vi kan udvikle og levere skræddersyede softwareløsninger såvel
                som stå for hosting af det færdige produkt. Vi er med dig hele
                vejen fra start til slut - også efter produktet er udviklet.
              </p>
              <p className="text-body-text color-gray-600 mt-10">
                Hvis du allerede har en software- eller webløsning, der mangler
                nye features eller vedligeholdelse kan vi også være behjælpelige
                med dette i mange tilfælde, da vi har erfaring med en bred vifte
                af forskellige teknologier.
              </p>
              <p className="text-body-text color-gray-600 mt-10">
                Kontakt os endeligt for et uforpligtende tilbud.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-8">
              <h3 className="text-heading-1 mb-10">Mød holdet</h3>
              <p className="text-body-lead-large color-gray-600">
                Folket bag Openomic
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-50">
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
