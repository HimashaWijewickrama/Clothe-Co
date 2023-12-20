import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { IoEye, IoHeart, IoCart } from "react-icons/io5";
import AlertDelete from './alertDelete';
interface ProductCardProps {
  imageUrl: string;
  title: string;
  content: string;
  badgeText?: string; // Making the badgeText optional
}

export const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, content, badgeText }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isView, setIsView] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleAlertClose = () => {
    setShowAlert(false);
};

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setShowAlert(true);
  };

  const handleViewClick = () => {
    setIsView(!isView);
  }

  const handleAddClick = () => {
    setIsAdded(!isAdded);
  }

  return (
    <Card style={{ position: 'relative', width: '18rem', margin: '10px', height: '25rem' }}>
      {badgeText && (
        <Badge bg="success" style={{ position: 'absolute', top: '0px', right: '0px', fontSize: '15px' }}>
          {badgeText}
        </Badge>
      )}
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <span style={{ display: 'inline-block', marginBottom: '10px', marginLeft: '50px' }}>
          <IoHeart
            data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Favourites"
            size={25}
            style={{ marginRight: '15px', color: isLiked ? '#F45050' : 'inherit', cursor: 'pointer' }}
            onClick={handleLikeClick}
          />
          <IoEye
            data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View"
            size={25}
            style={{ marginRight: '15px', color: isView ? '#38419D' : 'inherit', cursor: 'pointer' }}
            onClick={handleViewClick}
          />
          <IoCart
            data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart"
            size={25}
            style={{ marginRight: '15px', color: isAdded ? '#65B741' : 'inherit', cursor: 'pointer' }}
            onClick={handleAddClick}
          />
        </span>
      </Card.Body>
      {showAlert && (
      <AlertDelete title="added to favourites" open={showAlert}  handleClose={handleAlertClose}/>
      )}
    </Card>
  );
};
