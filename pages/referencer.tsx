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
  const getReferences = fetcherClient.path("/references").method("get").create();
  const getTechnologies = fetcherClient.path("/technologies").method("get").create();

  const { data: references } = await getReferences({});
  const { data: technologies } = await getTechnologies({});
  return { props: { references, technologies } };
}

export default function References({
  references,
  technologies
}: {
  references: OpReturnType<operations["get/references"]>;
  technologies: OpReturnType<operations["get/technologies"]>;
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
              <p className="text-body-text color-gray-600 mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                a nisi sit amet lectus sodales pellentesque vel id tellus. Nam
                viverra porttitor mi at vestibulum. Etiam ut ex in mauris
                lacinia placerat. Duis ornare pretium orci ac dapibus. In
                commodo non ante vitae varius. Cras sit amet ornare sapien.
              </p>
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
