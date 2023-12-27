import React from "react";

interface TitleTextProps {
    title: string;
}


export const TitleText: React.FC<TitleTextProps> = ({ title }) => {
    return (
        <div className="d-flex p-2 bd-highlight" style={{ marginTop: '20px', marginBottom: '20px' }}>
            <div className="card-body">
                <p className="text-center text-uppercase fs-3 fw-light" style={{letterSpacing: '0.5rem'}}>{title}</p>
                <hr style={{ width: '50%', margin: '0 auto' }} />

            </div>
        </div>
    )
}