import Breadcrumb from 'react-bootstrap/Breadcrumb';

interface BreadcrumbProps{
  title1?: string;
  title2?: string;
  // title3?: string;
}

export const Breadcrumber: React.FC<BreadcrumbProps> = ({ title1, title2 }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item active style={{ fontWeight: 600, textTransform: 'capitalize' }}>{title1}</Breadcrumb.Item>
      <Breadcrumb.Item text-uppercase active style={{textTransform: 'capitalize'}}>
        {title2}
      </Breadcrumb.Item>
      {/* <Breadcrumb.Item active>{title3}</Breadcrumb.Item> */}
    </Breadcrumb>
  );
}
