import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import footer from "../assets/footer.svg";
import logo from "../assets/logo.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/Linkedin.svg";

const Footer = () => {
  return (
    <>
      {/* Main Footer Section with Background Image */}
      <div
        className="footer-section"
        style={{
          backgroundImage: `url(${footer})`,
        }}
      >
        <div className="overlay"></div>
        <div className="footer-content">
          <p className="footer-text">
            Learn more about our listing process, as well as our additional
            staging and design work
          </p>
          <Button className="footer-btn">LEARN MORE</Button>
        </div>
      </div>

      {/* Navigation and Subscription Section */}
      <div className="footer-2">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="footer-links">
              <a href="/">Home</a>
              <a href="/">Services</a>
              <a href="/">Projects</a>
              <a href="/">Testimonials</a>
              <a href="/">Contact</a>
              <a href="/">Subscribe Us</a>
            </Col>
            <Col lg={6} className="footer-subscribe d-flex flex-column align-items-center align-items-lg-end pb-3">
              <form className="footer-form">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            </Col>

          </Row>
        </Container>
      </div>

      {/* Social Media and Branding Section */}
      <div className="footer-3">
        <Container className="text-center">
          <Row className="align-items-center">
            <Col lg={4}>
              <p>© 2024 Company Name. All Rights Reserved</p>
            </Col>
            <Col lg={4} className="text-center">
              <img src={logo} alt="Logo" className="footer-logo" />
            </Col>
            <Col lg={4} className="footer-icons">
              <img src={facebook} alt="Facebook" />
              <img src={instagram} alt="Instagram" />
              <img src={linkedin} alt="LinkedIn" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
