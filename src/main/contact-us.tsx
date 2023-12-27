import bannerBackground from '../assets/banner-background.jpg';
import contactImage from '../assets/quote-frame.png';

export const ContactUs = () => {
    const containerInnerStyle = {
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: 'cover',
        marginBottom: '50px',
        height: '500px'
    };
    return (
        <div className="container-inner d-flex" style={{ ...containerInnerStyle }}>
            <div className="card mb-3" style={{ maxWidth: "100%", border: '0px', backgroundColor: 'transparent' }}>
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={contactImage} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6" style={{ marginTop: '50px' }}>
                        <div className="card-body" >
                            <h5 className="card-title fs-2">Leave Your Feedback Here</h5>
                            <p className="card-text">
                                <form className="was-validated" >
                                    <div className="col-md-8">
                                        <label className="form-label">Your Name</label>
                                        <input type="text" className="form-control" id="validationCustom01" required />
                                    </div>
                                    <div className="col-md-8">
                                        <label className="form-label">Subject</label>
                                        <input type="text" className="form-control" id="validationCustom03" required />
                                    </div>
                                    <div className="col-md-8">
                                        <label className="form-label">Your Message</label>
                                        <textarea className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>

                                    </div>


                                    <div className="col-12" style={{ marginTop: '15px' }}>
                                        <button type="button" className="btn btn-outline-success">Send</button>
                                    </div>
                                </form>
                            </p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}