import { Col, Container, Row, Card, Image } from "react-bootstrap";
import home from "../../assets/home.svg";
import paintBrush from "../../assets/paintbrush-2.svg";
import dollar from "../../assets/circle-dollar-sign.svg";

import client1 from "../../assets/pexels-brett-sayles-2881232-1.svg";
import client2 from "../../assets/pexels-brett-sayles-2881232-2.svg";
import client3 from "../../assets/pexels-brett-sayles-2881232-3.svg";
export function Design() {
    const cardsData = [
        {
            imgSrc: home,
            title: "Potential ROI",
            description: "Get the best deals on properties with our experienced real estate agents."
        },
        {
            imgSrc: paintBrush,
            title: "Design",
            description: "Personalized interior designs to make your space truly yours."
        },
        {
            imgSrc: dollar,
            title: "Best Value",
            description: "Maximize your investment with our competitive pricing strategies."
        }
    ];

    return (
        <div className="projects">
            <Container>
                <div className="text-center mt-4">
                    <h4 style={{ color: "#2596be", fontWeight: "bold" }}>Why Choose Us?</h4>
                    <div className="d-flex justify-content-center mt-3">
                        <div style={{ backgroundColor: "#2596be", width: "10%", height: "5px" }} />
                    </div>

                    {/* Cards Section */}
                    <Row className="mt-5">
                        {cardsData.map((card, index) => (
                            <Col lg={4} md={6} key={index} className="d-flex justify-content-center mb-4">
                                <Card style={{ border: "none", textAlign: "center", width: "18rem" }}>
                                    <div className="d-flex justify-content-center mb-3">
                                        <div
                                            style={{
                                                borderRadius: "50%",
                                                width: "100px",
                                                height: "100px",
                                                overflow: "hidden",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: "#f5f5f5",
                                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                                            }}
                                        >
                                            <Image src={card.imgSrc} fluid style={{ width: "60%" }} />
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Title style={{ color: "#2596be", fontWeight: "bold" }}>{card.title}</Card.Title>
                                        <Card.Text className="text-muted">
                                            {card.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>

                <div>
                    <div class="image-container">
                        <div class="image image-1">
                            <img src={client1} alt="Image 1" />
                        </div>

                        <div class="image image-2">
                            <img src={client2} alt="Image 2" />
                        </div>

                        <div class="image image-3">
                            <img src={client3} alt="Image 3" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
