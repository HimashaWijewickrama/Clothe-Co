import Breadcrumb from 'react-bootstrap/Breadcrumb';

export const BreadcrumbEx=()=> {
  return (
    <Breadcrumb style={{ margin: '10px'}}>
      <Breadcrumb.Item active style={{ fontWeight: 600 }}>Home</Breadcrumb.Item>
      <Breadcrumb.Item active style={{fontWeight: 600}}>
        Shop Now
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Frocks</Breadcrumb.Item>
    </Breadcrumb>
  );
}
