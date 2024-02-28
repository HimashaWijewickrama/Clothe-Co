import { Formik } from "formik";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import {
  BiSolidLogIn,
  BiSolidLogOutCircle,
  BiSolidUserCircle,
} from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { TbJewishStarFilled, TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";
import LogoNav from "../assets/logo-nav.png";

type AuthUser = {
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  password: string;
};

export const Navigation: React.FC = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // New state to track login status

  const handleLogin = () => {
    setUser({
      firstName: "James",
      lastName: "Mark",
      contactNumber: "0775678987",
      email: "james@hotmail.com",
      password: "1235",
    });
    setLoggedIn(true); // Update login status
    setShow(false);
    setShowModal(false);
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedIn(false); // Update login status
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const handleSignup = () => {
    setShow(false);
    setShowModal(true);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToNewin = () => {
    const newinSection = document.getElementById("newin");
    if (newinSection) {
      newinSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToReview = () => {
    const reviewSection = document.getElementById("review");
    if (reviewSection) {
      reviewSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ margin: "0px" }}>
      <Container fluid style={{ backgroundColor: "#F8F9FA", margin: "0" }}>
        <img
          src={LogoNav}
          alt="clothe co."
          style={{
            maxHeight: "100px",
            maxWidth: "100px",
            marginRight: "10px",
            marginBottom: "0",
          }}
        />
        <Navbar.Brand href="#" style={{ fontWeight: 600 }}>
          CLOTHE CO.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link onClick={scrollToNewin}>New-In</Nav.Link>
            <NavDropdown title="Shop Now" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/tops">
                Tops
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pants">
                Pants
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/skirts">
                Skirts
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/frocks">
                Frocks
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/two-piece-sets">
                Two Piece Sets
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jumpsuits">
                Jumpsuits
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/fashion-accessories">
                Fashion Accessories
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about-us">
              About Us
            </Nav.Link>
            <Nav.Link onClick={scrollToContact}>Contact Us</Nav.Link>
            <Nav.Link onClick={scrollToReview}>Customer Reviews</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Nav className="me-auto" navbarScroll>
              {loggedIn ? ( // Check if user is logged in
                <>
                  <Nav.Link as={Link} to="#">
                    Hello! {user?.firstName} {user?.lastName}
                  </Nav.Link>
                  <Nav.Link href="#action1">
                    <FaShoppingCart
                      size={18}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Cart"
                    />
                  </Nav.Link>
                  <Nav.Link href="#action3">
                    <TbTruckDelivery
                      size={18}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Track Order"
                    />
                  </Nav.Link>
                  <Nav.Link as={Link} to="#">
                    <BiSolidUserCircle
                      size={18}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Profile"
                    />
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    <TbJewishStarFilled
                      size={18}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Favourites"
                    />
                  </Nav.Link>
                  <Nav.Link as={Link} to="#" onClick={handleLogout}>
                    <BiSolidLogOutCircle
                      size={18}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Log Out"
                    />
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="#">
                    Log In
                  </Nav.Link>
                  <Nav.Link as={Link} to="#" onClick={handleShow}>
                    <BiSolidLogIn
                      size={18}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Log In"
                    />
                  </Nav.Link>
                </>
              )}
              <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                  <Modal.Title>
                    <p className="fs-5">Log In</p>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "#EAEEF7" }}>
                  <div
                    className="card mb-3"
                    style={{ maxWidth: "540px", border: "0px" }}
                  >
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
                          <h5 className="card-title text-center">
                            Hello There!
                          </h5>
                          <p
                            className="card-text text-center"
                            style={{ marginBottom: "5px" }}
                          >
                            Welcome 😊 you’ve been missed. Please enter your
                            credentials to log in.
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
                                handleLogin(); // Call handleLogin upon successful form submission
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
                                  <div className="valid-feedback">
                                    Look Good!
                                  </div>
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
                                  <div className="valid-feedback">
                                    Look Good!
                                  </div>
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
                                  <div className="valid-feedback">
                                    Look Good!
                                  </div>
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
                                  <div className="valid-feedback">
                                    Look Good!
                                  </div>
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
                                  <div className="valid-feedback">
                                    Look Good!
                                  </div>
                                </div>
                                <div className="col-12"></div>
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                >
                                  Submit
                                </button>
                              </form>
                            )}
                          </Formik>

                          <br />
                          <p className="card-text text-center">
                            <small className="text-muted">
                              Don't have an account?{" "}
                              <Link to="#" onClick={handleSignup}>
                                Sign up
                              </Link>
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
              <Modal show={showModal}>
                <Modal.Header>
                  <Modal.Title>
                    <p className="fs-5">Sign Up</p>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "#EAEEF7" }}>
                  <div
                    className="card mb-3"
                    style={{ maxWidth: "540px", border: "0px" }}
                  >
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
                          <h5 className="card-title text-center">
                            Hello There!
                          </h5>
                          <p
                            className="card-text text-center"
                            style={{ marginBottom: "5px" }}
                          >
                            Welcome 😊 you’ve been missed. Please enter your
                            credentials to log in.
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
                                handleLogin(); // Call handleLogin upon successful form submission
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
                                  <div className="valid-feedback">
                                    Look Good!
                                  </div>
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
                                  <div className="valid-feedback">
                                    Look Good!
                                  </div>
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
                                  <div className="valid-feedback">
                                    Look Good!
                                  </div>
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
                                  <div className="valid-feedback">
                                    Look Good!
                                  </div>
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
                                  <div className="valid-feedback">
                                    Look Good!
                                  </div>
                                </div>
                                <div className="col-12"></div>
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                >
                                  Submit
                                </button>
                              </form>
                            )}
                          </Formik>

                          <br />
                          <p className="card-text text-center">
                            <small className="text-muted">
                              Don't have an account?{" "}
                              <Link to="#" onClick={handleSignup}>
                                Sign up
                              </Link>
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </Nav>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
