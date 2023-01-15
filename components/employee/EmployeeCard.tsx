import Link from 'next/link';

import { EmployeeListResponseDataItem } from '../../data';

interface EmployeeCardProps {
  employee: EmployeeListResponseDataItem;
}

export const EmployeeCard = ({ employee }: EmployeeCardProps) => {
  return (
    <div className="swiper-slide active">
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
              {employee.attributes?.position}
            </span>
            <h3 className="text-heading-5 mb-5 mt-5">
              {employee.attributes?.name}
            </h3>
            <p className="text-body-excerpt text-desc color-gray-500 mt-15 mb-20">
              {employee.attributes?.description}
            </p>
            <div className="social-bottom">
              {employee.attributes?.email ? <Link href={`mailto:${employee.attributes.email}`} target="_blank" legacyBehavior>
                <a className="icon-socials icon-linkedin"></a>
              </Link> : null}
              {employee.attributes?.github ? <Link href={`https://github.com/${employee.attributes.github}`} target="_blank" legacyBehavior>
                <a className="icon-socials icon-linkedin"></a>
              </Link> : null}
              {employee.attributes?.linkedin ? <Link href={`https://www.linkedin.com/in/${employee.attributes.linkedin}`} target="_blank" legacyBehavior>
                <a className="icon-socials icon-linkedin"></a>
              </Link> : null}
              {employee.attributes?.website ? <Link href={employee.attributes.website} target="_blank" legacyBehavior>
                <a className="icon-socials icon-linkedin"></a>
              </Link> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};