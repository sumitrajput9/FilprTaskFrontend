import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

const Client = () => {
  const [clients, setClients] = useState([]);
  console.log();

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/clients`);
        setClients(response.data?.clients);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className='client mt-5'>
      <Container>
        <h3 className='text-center' style={{ color: "#2596be", fontWeight: "bold" }}>Happy Clients</h3>
        <div className='client-outer'>
          <Row className='client-outer'>
            {clients.map((client, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className='mb-4'>
                <div className='client-box'>
                  <div className='client-img'>
                    <img src={client.image} alt={client.name} />
                  </div>
                  <p className='client-description'>
                    {client.description || 'No description available.'}
                  </p>
                  <h4 className='client-name'>{client.name}</h4>
                  <p className='client-role'>{client.designation}</p>
                  <Button className='client-btn mt-3 mb-2'>READ MORE</Button>
                </div>
              </Col>
            ))}
          </Row>

        </div>

      </Container>

    </div>

  );
};

export default Client;