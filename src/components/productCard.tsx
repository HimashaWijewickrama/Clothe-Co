import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  content: string;
  navigate: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, content, navigate }) => {

  return (
    <Card style={{ width: '18rem', margin: '10px', height: '25rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button variant="primary">{navigate}</Button>
      </Card.Body>
    </Card>
  );
};
