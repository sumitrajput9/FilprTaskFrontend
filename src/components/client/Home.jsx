import React, { useState } from "react";
import NavigationBar from "../../layouts/Navbar";
import back from "../../assets/young-couple.svg";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Projects from "./Projects";
import Footer from "../../layouts/Footer";
import Ellipse from "./Ellipse";
import Client from "./Client";
import Designs from "./Design";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Home = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    city: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!formData.fullName || !formData.email || !formData.mobileNumber || !formData.city) {
      toast.error("All fields are required");
      return;
    }

    try {
      // API call to send form data
      const response = await axios.post("https://filprtaskbackend-5.onrender.com/api/projects-users/add", formData);
      if (response.status === 201) {
        toast.success("Data sent successfully!");
        // Reset form after successful submission
        setFormData({ fullName: "", email: "", mobileNumber: "", city: "" });
      }
    } catch (error) {
      console.error("Error sending data:", error);
      toast.error("Failed to send data. Please try again.");
    }
  };
  return (
    <>
      <NavigationBar />
      <div className="">
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
        <div
          className="home-section"
          style={{
            backgroundImage: `url(${back})`,
            width: "100%",
            height: "80vh"
          }}
        >
          <Container className="d-flex justify-content-center align-items-center">
            {/* Left Content Section */}
            <div className="left-content ms-5 pb-3">
              <h1 className="home-heading">
                Consultation, <br /> Design, <br /> & Marketing
              </h1>
            </div>

            {/* Right Form Section */}
            <div className="right-form ms-5">
              <div className="home-box">
                <p className="form-title">Get a free Consultation</p>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-2">
                    <input
                      type="text"
                      name="fullName"
                      className="input"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-1">
                    <input
                      type="email"
                      name="email"
                      className="input"
                      placeholder="Enter Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-1">
                    <input
                      type="text"
                      name="mobileNumber"
                      className="input"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-1">
                    <input
                      type="text"
                      name="city"
                      className="input"
                      placeholder="Your City"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button className="access" type="submit">
                    Get Quick Access
                  </Button>
                </Form>
              </div>
            </div>
          </Container>
        </div>
      </div>


      <div>
        <Ellipse />
      </div>

      <div style={{ marginTop: "50px" }}>
        <Designs />
      </div>

      <div style={{ marginTop: "50px", display: "flex", justifyContent: "center" }}>
        <div className="text-center mt-4">
          <h4 style={{ color: "#2596be", fontWeight: "bold" }}>About Us</h4>
          <div className="d-flex justify-content-center mt-2">
            <div style={{ backgroundColor: "#2596be", width: "10%", height: "5px" }} />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <p className="text-center" style={{ width: "90%", fontSize: "16px", fontFamily: "sans-serif" }}>
              We have worked closely with the founding team of
              Flipr and they have played a major role in our product<br /> development.
              The team is great at identifying the detailed requirement,
              We continue to use their services and can vouch for the quality.
            </p>
          </div>
          <div>
            <Button className="" style={{ marginTop: "10px", backgroundColor: "#2596be !important" }}>
              Read More
            </Button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "50px", display: "flex", justifyContent: "center" }}>
        <Projects />
      </div>

      <Client />
      <Footer />
    </>
  );
};

export default Home;
