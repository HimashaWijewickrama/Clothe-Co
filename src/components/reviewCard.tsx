
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
interface ReviewCardProps {
    header: string;
    content: string;
    author: string;

}


export const ReviewCard: React.FC<ReviewCardProps> = ({ header, content, author, }) => {

    return (

        <div className="card border-success mb-3" style={{ width: '16rem', height: '18rem', maxWidth: "18rem" }}>
            <div className="card-header bg-transparent border-success text-center fw-bold"><AutoAwesomeIcon style={{color:"#FFEA20", marginRight: '5px'}}/>{header}</div>
            <div className="card-body bg-transparent border-success text-success">
                <p className="card-text">{content}</p>
            </div>
            <div className="card-footer bg-transparent border-success text-center text-dark">
                {author}
            </div>
        </div>

    )
}