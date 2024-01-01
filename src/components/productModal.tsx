import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button as MUIButton } from '@mui/material';
interface ProductModalProps {
    header: string;
    body: string;
    item: string;
    other?: string;
    footer?: string;
    isView: boolean;
    handleClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ header, body, item, other, footer, isView, handleClose }) => {
    return (
        <Modal show={isView} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{header}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="card mb-3" style={{ maxWidth: '540px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://images.unsplash.com/photo-1566977744263-79e677f4e7cf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item}</h5>
                                <p className="card-text">{body}</p>
                                <p className="card-text"><small className="text-muted">{other}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <MUIButton onClick={handleClose}>Done</MUIButton>
                {footer}
            </Modal.Footer>
        </Modal>
    );
};

export default ProductModal;
