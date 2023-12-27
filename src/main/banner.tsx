import faqImage from '../assets/faq.png';
import deliveryImage from '../assets/fast-delivery.png';
import returnImage from '../assets/online-shopping.png';
import bannerBackground from '../assets/banner-background.jpg'
import '../App.css';
export const Banner = () => {
    const containerInnerStyle = {
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: 'cover',
        marginBottom: '100px', 
        height: '450px'
    };
    const cardStyle = {
        width: "500px",
        marginLeft: '10px',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        marginTop: '80px',
        transition: 'transform 0.5s ease', // Transition property for smooth animation
    };


    return (
        <div className="container-inner d-flex" style={{ ...containerInnerStyle }}>
            <div className="card mb-2" style={{ ...cardStyle }}>
                <div className="row g-0">
                    <div className="col-md-6">
                        <div className="image-container" >
                            <img src={faqImage} className="img-fluid rounded-start" alt="24x7 Support" />
                        </div>
                    </div>
                    <div className="col-md-6" style={{ marginTop: '50px' }}>
                        <div className="card-body">
                            <h5 className="card-title fs-3">Support 24/7</h5>
                            <p className="card-text fs-5 text-muted">24/7 Customer Support</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-2" style={{ ...cardStyle }}>
                <div className="row g-0">
                    <div className="col-md-6">
                        <div className="image-container" >
                            <img src={deliveryImage} className="img-fluid rounded-start" alt="Island Wide Delivery" />
                        </div>
                    </div>
                    <div className="col-md-6" style={{ marginTop: '50px' }}>
                        <div className="card-body">
                            <h5 className="card-title fs-3">Island Wide Delivery</h5>
                            <p className="card-text fs-5 text-muted">Delivery to anywhere in Sri Lanka</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-2" style={{ ...cardStyle }}>
                <div className="row g-0">
                    <div className="col-md-6">
                        <div className="image-container">
                            <img src={returnImage} className="img-fluid rounded-start" alt="Easy Return" />
                        </div>
                    </div>
                    <div className="col-md-6" style={{ marginTop: '50px' }}>
                        <div className="card-body">
                            <h5 className="card-title fs-3">Easy Return</h5>
                            <p className="card-text fs-5 text-muted" >Simply return it within 30 days</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}