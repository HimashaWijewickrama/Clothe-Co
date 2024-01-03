interface CardGroupProps {
    imageURL: string;
    imageALT: string;
    branchName: string;
    address: string;
    contactNumber: string;
}
export const CardGroup: React.FC<CardGroupProps> = ({ imageURL, imageALT, branchName, address, contactNumber }) => {
    return (
                <div className="card h-45">
                    <img src={imageURL}
                        className="card-img-top"
                        alt={imageALT} />
                    <div className="card-footer">
                        <h5 className="card-title">{branchName}</h5>
                        <small className="text-muted">{address}</small><br /><hr/>
                        <small className="text-muted">{contactNumber}</small>
                    </div>
                </div>
            


    )
}