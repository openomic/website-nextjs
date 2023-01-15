import { GetServerSideProps } from 'next';
import ReactMarkdown from 'react-markdown';

import { Layout } from '../../components/layout/Layout';
import { ReferenceApi, ReferenceResponse } from '../../data';
import { MY_AXIOS_CONFIG } from '../_app';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const referenceClient = new ReferenceApi(MY_AXIOS_CONFIG);
  var reference: ReferenceResponse;
  try {
    const referenceResponse = await referenceClient.getReferencesId(+id!);
    reference = referenceResponse.data;
  } catch (error) {
    return {
      redirect: {
        destination: '/referencer',
        permanent: false,
      },
    }
  }

  return { props: { reference } };
}

export default function Reference({
  reference,
}: {
  reference: ReferenceResponse;
}) {
  console.log(reference);
  return (
    <Layout title="Openomic - Referencer">
      <section className="section-box pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-40">
              <h3 className="text-heading-1">{reference.data?.attributes?.name}</h3>
              {reference?.data?.attributes?.description ?
                <ReactMarkdown>
                  {reference.data.attributes.description}
                </ReactMarkdown>
                : null}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
