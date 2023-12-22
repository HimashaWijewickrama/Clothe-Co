import Breadcrumb from 'react-bootstrap/Breadcrumb';

interface BreadcrumbProps{
  title1?: string;
  title2?: string;
  title3?: string;
}

export const Breadcrumber: React.FC<BreadcrumbProps> = ({ title1, title2, title3 }) => {
  return (
    <Breadcrumb style={{ marginLeft: '120px'}}>
      <Breadcrumb.Item active style={{ fontWeight: 600 }}>{title1}</Breadcrumb.Item>
      <Breadcrumb.Item active style={{fontWeight: 600}}>
        {title2}
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{title3}</Breadcrumb.Item>
    </Breadcrumb>
  );
}
