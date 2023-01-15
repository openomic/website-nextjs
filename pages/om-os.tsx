import { EmployeeCard } from '../components/employee/EmployeeCard';
import { Layout } from '../components/layout/Layout';
import { EmployeeApi, EmployeeListResponse } from '../data';
import { MY_AXIOS_CONFIG } from './_app';

export async function getServerSideProps() {
  const employeeClient = new EmployeeApi(MY_AXIOS_CONFIG);
  const employeesResponse = await employeeClient.getEmployees();
  
  return { props: { employees: employeesResponse.data } };
}

export default function About({
  employees,
}: {
  employees: EmployeeListResponse;
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
                <EmployeeCard employee={employee} key={employee.id} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
