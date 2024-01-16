import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { IoEye, IoHeart } from "react-icons/io5";
import AlertDelete from './alertDelete';
import { ItemCounter } from './itemCounter';
import { Modal } from 'react-bootstrap';
import { Button as MUIButton } from '@mui/material';
import { TiTick } from "react-icons/ti";
import { TiWarning } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
interface ProductCardProps {
  imageUrl?: string;
  title: string;
  content: string;
  badgeText?: string; // Making the badgeText optional
  subtitleSpans?: {
    backgroundColor: string;
  }[];
  showFooter?: boolean;
  header?: string;
  body1?: string;
  body2?: string;
  body3?: string;
  body4?: string;
  item?: string;
  other?: string;
  footer?: string;
  featureImage?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, content, badgeText, subtitleSpans, header, body1, body2, body3, body4, item, other, footer, featureImage, showFooter = true }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isView, setIsView] = useState(false);
  const [showFavAlert, setShowFavAlert] = useState(false);
  const [badgeColor, setBadgeColor] = useState<'success' | 'danger' | 'primary' | 'warning' | 'secondary' | 'info'>('success'); // Define badge colors
  // Function to change badge color based on condition
  const changeBadgeColor = () => {
    if (badgeText === 'New') {
      setBadgeColor('secondary');
    } else if (badgeText === 'Out of Stock') {
      setBadgeColor('danger');
    } else if (badgeText === 'Low Stock') {
      setBadgeColor("warning");
    } else if (badgeText === "In Stock") {
      setBadgeColor('success')
    } else {
      setBadgeColor('primary')
    }
  };


  const handleAlertClose = (type: string) => {
    if (type === 'fav') {
      setShowFavAlert(false);
    } else {
      setShowFavAlert(true);
    }
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setShowFavAlert(true);

    } else {
      setShowFavAlert(false);
    }
  };

  const handleViewClick = () => {
    setIsView(true);
  }
  const handleClose = () => {
    setIsView(false);
  };

  useEffect(() => {
    changeBadgeColor(); // Call the function initially
  }, [badgeText]);


  return (
    <Card style={{ position: 'relative', width: '18rem', margin: '10px', height: '25rem', border: '1px solid #F8F9FA' }}>
      {badgeText && (
        <Badge bg={badgeColor} style={{ position: 'absolute', top: '0px', right: '0px', fontSize: '15px' }}>
          {badgeText}
        </Badge>
      )}
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='text-muted text-capitalize text-right'>{content}
        </Card.Text>
        <Card.Subtitle>
          {subtitleSpans &&
            subtitleSpans.map((spanStyle, index) => (
              <span
                key={index}
                style={{
                  border: '1px solid #595C5F',
                  backgroundColor: spanStyle.backgroundColor,
                  width: '20px',
                  height: '20px',
                  display: 'inline-block',
                  marginRight: '8px',
                }}
              ></span>
            ))}
        </Card.Subtitle>

      </Card.Body>
      {showFooter ? (
        <Card.Footer style={{ backgroundColor: '#F8F9FA' }}>
          <ItemCounter title={'add to cart'} />

          <span style={{ display: 'inline-block', marginBottom: '10px', marginLeft: '80px' }}>
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
          </span>
        </Card.Footer>
      ) : (
        <Card.Footer style={{ backgroundColor: '#F8F9FA' }}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <IoEye
              size={25}
              data-bs-toggle="modal" data-bs-target="#exampleModal"
              style={{ marginLeft: '75px', marginRight: '0px', cursor: 'pointer', marginTop: '0px' }}
              onClick={handleViewClick}
            />
            <p style={{ marginLeft: '0px', paddingLeft: '5px', marginTop: '10px', marginBottom: '10px', cursor: 'pointer' }}>Quick View</p>
          </span>
        </Card.Footer>

      )}
      {/* ... (other card content) ... */}
      {showFavAlert ? (
        <AlertDelete title="Added to favourites" open={showFavAlert} handleClose={() => handleAlertClose('fav')} />
      ) : (
        // showCartAlert && (
        <AlertDelete title="Added" open={showFavAlert} handleClose={() => handleAlertClose('fav')} />
        // )
      )}
      {/* onHide={handleClose} */}
      <Modal show={isView} >
        <Modal.Header>
          <Modal.Title><p className="fs-5">{header}</p></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card mb-3" style={{ maxWidth: '540px', border: '0px' }}>
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={featureImage}
                  className="img-fluid rounded-start"
                  alt="..." />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">{item}</h5>
                  <p className="card-text" style={{ marginBottom: '5px' }}>
                    <br />
                    {subtitleSpans &&
                      subtitleSpans.map((spanStyle, index) => (
                        <span
                          key={index}
                          style={{
                            border: '1px solid #595C5F',
                            backgroundColor: spanStyle.backgroundColor,
                            width: '20px',
                            height: '20px',
                            display: 'inline-block',
                            marginRight: '8px',
                          }}
                        ></span>
                      ))}
                    <br />
                    {body1}<br />
                    {body2}<br />
                    {body3}<br />
                    <p className='ts-5' style={{ color: body4 === 'In Stock' ? 'green' : 'Out of Stock' ? 'red': 'Low Stock' ? 'yellow' : 'black' }}>
                      <TiTick size={30} style={{ color: body4 === 'In Stock' ? 'green' : 'transparent' }} />
                      <IoClose size={30} style={{ color: body4 === 'Out of Stock' ? 'red' : 'transparent' }}/>
                      <TiWarning size={30} style={{ color: body4 === 'Low Stock' ? 'yellow' : 'transparent' }}/>
                      {body4}
                    </p>


                    <br /></p>
                  <p className="card-text"><small className="text-muted">{other}</small></p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>

          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <MUIButton color="error" variant='contained'>View Full Details</MUIButton>

              </div>
              <div className="col-md-3">
                <MUIButton onClick={handleClose} variant="contained" color='success'>Done</MUIButton>

              </div>
            </div>
          </div>
        </Modal.Footer>
      </Modal>


    </Card>
  );
};
