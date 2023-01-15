import Link from 'next/link';

import { Layout } from '../../components/layout/Layout';
import {
  ReferenceApi,
  ReferenceListResponse,
  TechnologyApi,
  TechnologyListResponse,
} from '../../data';
import { MY_AXIOS_CONFIG } from '../_app';

export async function getServerSideProps() {
  const referenceClient = new ReferenceApi(MY_AXIOS_CONFIG);
  const referenceResponse = await referenceClient.getReferences();

  const technologyClient = new TechnologyApi(MY_AXIOS_CONFIG);
  const technologyResponse = await technologyClient.getTechnologies();
  return { props: { references: referenceResponse.data, technologies: technologyResponse.data } };
}

export default function References({
  references,
  technologies
}: {
  references: ReferenceListResponse;
  technologies: TechnologyListResponse;
}) {
  console.log(references.data);
  console.log(technologies.data);
  return (
    <Layout title="Openomic - Referencer">
      <section className="section-box pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-40">
              <h3 className="text-heading-1">Referencer</h3>
              {references.data?.map((reference) => (
                <Link href={`referencer/${reference.id}`} legacyBehavior key={reference.id}>
                  <a>{reference.attributes?.name}</a>
                </Link>
              ))}
              <p className="text-body-text color-gray-600 mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                a nisi sit amet lectus sodales pellentesque vel id tellus. Nam
                viverra porttitor mi at vestibulum. Etiam ut ex in mauris
                lacinia placerat. Duis ornare pretium orci ac dapibus. In
                commodo non ante vitae varius. Cras sit amet ornare sapien.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
