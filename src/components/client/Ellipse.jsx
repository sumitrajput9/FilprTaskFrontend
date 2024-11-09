import React from "react";
import NavigationBar from "../../layouts/Navbar";
import back from "../../assets/young-couple.svg";
import { Button, Col, Container, Form,Image, Row } from "react-bootstrap";
import outerEllipse from "../../assets/Ellipse1.svg";
import innerEllipse from "../../assets/Ellipse2.svg";
import rightEllipse from "../../assets/Ellipse3.svg";
import Projects from "./Projects";
import Footer from "../../layouts/Footer";
const Ellipse = () => {
    return (
        <>
            <div className="real-estate-section mt-4">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} className="text-md-left mb-6 mb-md-0">
                            <h2 className="section-title">Not Your Average Realtor</h2>
                            <p className="section-description">
                                Real estate experts for securing property, advanced asset-selling strategies, and effective
                                marketing to get homeowners top dollar on their sales.
                            </p>
                        </Col>

                        <Col xs={12} md={6} className="image-container d-flex justify-content-center position-relative">
                            {/* First Image */}
                            <div className="main-image">
                                <Image
                                    src={outerEllipse}
                                    fluid
                                    className="image-cover"
                                />
                            </div>

                            {/* Second Image (Absolute Positioned) */}
                            <div className="positioned-image top-right">
                                <Image
                                    src={innerEllipse}
                                    fluid
                                    className="image-cover"
                                />
                            </div>

                            {/* Third Image (Absolute Positioned) */}
                            <div className="positioned-image bottom-left">
                                <Image
                                    src={rightEllipse}
                                    fluid
                                    className="image-cover"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
};
export default Ellipse;