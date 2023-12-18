import React, { useState } from 'react';
import { CiGift } from "react-icons/ci";

interface AlertProps {
    content: string
}

export const Alert: React.FC<AlertProps> = ({ content }) => {

    const [hide, setHide] = useState(false);

    const handleClose=()=>{
        setHide(true); 

    }
    if(hide){
        return null;
    }

    return (
        <div className="alert alert-danger alert-dismissible fade show" role="alert" style={{textAlign: 'center'}}>
            <div style={{ display: 'inline-block'}}>
            <CiGift size={45}/></div>
            <div style={{ display: 'inline-block'}}>
            <h5 className="alert-heading">{content}</h5></div>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={handleClose}></button>
            
        </div>
    );
};
