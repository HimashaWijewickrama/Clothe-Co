import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  lastname: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const LogIn: React.FC = () => {
  const [isView, setIsView] = useState(true);
  const handleClose = () => {
    setIsView(false);
  };

  return (
    <Modal show={isView} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>
          <p className="fs-5">Log In</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#EAEEF7" }}>
        <div className="card mb-3" style={{ maxWidth: "540px", border: "0px" }}>
          <div className="row g-0">
            <div className="col-md-12">
              <img
                src="https://img.freepik.com/free-photo/locked-padlock-security-protection-privacy-3d-icon-bubble-speech-chat_56104-1941.jpg?w=996&t=st=1705834817~exp=1705835417~hmac=c04a15115391dc5d2e10ded8f91e3f1e37567cb369fdf8697f69e8082d7d1252"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
          </div>
          <div className="row g-0">
            <div className="col-md-12">
              <div className="card-body">
                <h5 className="card-title text-center">Hello There!</h5>
                <p
                  className="card-text text-center"
                  style={{ marginBottom: "5px" }}
                >
                  Welcome 😊 you’ve been missed. Please enter your credientials
                  to log in.
                </p>
                <br />
                <Formik
                  initialValues={{
                    firstname: "James",
                    lastname: "Mark",
                    phonenumber: "0775678987",
                    email: "james@hotmail.com",
                    password: "1235",
                  }}
                  onSubmit={(values, actions) => {
                    setTimeout(() => {
                      // alert(JSON.stringify(values, null, 2));
                      actions.setSubmitting(false);
                    }, 1000);
                  }}
                >
                  {(props) => (
                    <form
                      className="row g-3 needs-validation"
                      onSubmit={props.handleSubmit}
                    >
                      <div className="col-md-4">
                        <label
                          htmlFor="validationCustom01"
                          className="form-label"
                        >
                          First Name *
                        </label>
                        <input
                          className="form-control"
                          id="validationCustom01"
                          type="text"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.firstname}
                          name="firstname"
                          required
                        />
                        <div className="valid-feedback">Look Good!</div>
                      </div>
                      <div className="col-md-8">
                        <label
                          htmlFor="validationCustom02"
                          className="form-label"
                        >
                          Last Name *
                        </label>
                        <input
                          className="form-control"
                          id="validationCustom02"
                          type="text"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.lastname}
                          name="lastname"
                          required
                        />
                        <div className="valid-feedback">Look Good!</div>
                      </div>
                      <div className="col-md-12">
                        <label
                          htmlFor="validationCustom03"
                          className="form-label"
                        >
                          Contact Number *
                        </label>
                        <input
                          className="form-control"
                          id="validationCustom03"
                          type="text"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.phonenumber}
                          name="phonenumber"
                          required
                        />
                        <div className="valid-feedback">Look Good!</div>
                      </div>
                      <div className="col-md-12">
                        <label
                          htmlFor="validationCustom04"
                          className="form-label"
                        >
                          E mail Address *
                        </label>
                        <input
                          className="form-control"
                          id="validationCustom04"
                          type="text"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.email}
                          name="email"
                          required
                        />
                        <div className="valid-feedback">Look Good!</div>
                      </div>
                      <div className="col-md-12">
                        <label
                          htmlFor="validationCustom05"
                          className="form-label"
                        >
                          Password *
                        </label>
                        <input
                          className="form-control"
                          id="validationCustom05"
                          type="text"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.password}
                          name="password"
                          required
                        />
                        <div className="valid-feedback">Look Good!</div>
                      </div>
                      <div className="col-12"></div>
                      {/* {props.errors.name && <div id="feedback">{props.errors.name}</div>} */}
                      <button className="btn btn-primary" type="submit">
                        Submit
                      </button>
                    </form>
                  )}
                </Formik>

                <br />
                <p className="card-text text-center">
                  <small className="text-muted">
                    Don't have an account? <Link to="#">Sign up</Link>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
