import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Make sure to include this if using autoplay
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from the backend API
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/projects`);
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For large screens (desktops)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px', // Adjust padding to your liking
        },
      },
    ],
  };



  return (
    <>

      <div className="projects">
        <Container>
          <div className="text-center mt-4">
            <h4 style={{ color: "#2596be", fontWeight: "bold" }}>Our Projects</h4>
            <p className="text-center" style={{ fontSize: "16px", fontFamily: "sans-serif" }}>
              We know that buyers are looking for and suggest projects that will
              bring <br />clients top dollar for the sale of their homes.
            </p>
          </div>

          {/* Carousel Wrapper */}
          <div className="custom-sidebar">
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={30} 
              slidesPerView={4}
              navigation 
              pagination={{ clickable: false }} 
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 1, 
                },
                576: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="project-card">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="project-image"
                    />
                    <div className="card-body">
                      <h6 className="card-title">{project.name}</h6>
                      <p className="card-text">{project.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </div>




    </>



  );
};

export default Projects;
