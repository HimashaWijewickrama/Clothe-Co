import bannerBackground from '../assets/banner-background.jpg';
import contactImage from '../assets/quote-frame.png';
import { IoIosSend } from "react-icons/io";

export const ContactUs = () => {
    const containerInnerStyle = {
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: 'cover',
        marginBottom: '50px',
        height: '550px'
    };
    return (
        <div className="container-inner d-flex" style={{ ...containerInnerStyle }}>
            <div className="card mb-3" style={{ maxWidth: "100%", border: '0px', backgroundColor: 'transparent' }}>
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={contactImage} className="img-fluid rounded-start" alt="contact-us" />
                    </div>
                    <div className="col-md-6" style={{ marginTop: '50px' }}>
                        <div className="card-body" >
                            <h5 className="card-title fs-1" style={{ marginBottom: '20px' }}>Share Your Feedback</h5>
                            <p className="card-text" style={{ marginTop: '10px' }}>
                                <small className="text-muted">Please use this form both for suggesting improvements to processes and for leave your feedbacks.</small>
                            </p>
                            <p className="card-text">
                                <form className="was-validated" >
                                    <div className="col-md-8" style={{ marginTop: '10px' }}>
                                        <label className="form-label">Your Name *</label>
                                        <input type="text" className="form-control" id="validationCustom01" placeholder='Your name is required' required />
                                    </div>
                                    <div className="col-md-8" style={{ marginTop: '10px' }}>
                                        <label className="form-label">Subject *</label>
                                        <input type="text" className="form-control" id="validationCustom03" placeholder='Subject of your message is required' required />
                                    </div>
                                    <div className="col-md-8" style={{ marginTop: '10px' }}>
                                        <label className="form-label">Your Message *</label>
                                        <textarea className="form-control is-invalid" id="validationTextarea" placeholder="Your message is required" required></textarea>

                                    </div>



                                    <div className="d-grid col-md-8" style={{ marginTop: '20px' }}>
                                        <button type="button" className="btn btn-light btn-outline-dark"><IoIosSend /> Send</button>

                                    </div>

                                </form>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}