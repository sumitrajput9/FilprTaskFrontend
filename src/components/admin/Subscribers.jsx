import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Paper } from '@mui/material';
import axios from 'axios';
import AdminSidebar from './Sidebar';

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/subscribed-emails`); 
        setSubscribers(response.data.emails);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching subscribed emails:', error);
        setLoading(false);
      }
    };

    fetchSubscribers();
  }, []);

  return (
    <>
      <AdminSidebar />
      <Container className='content-containerone'>
        <Paper className='content-paper'>
          <h3 className='text-center mb-4'>Subscribed Email Addresses</h3>
          <table className='table contacts'>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Email</th>
                <th>Subscribed At</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="3" className="text-center">Loading...</td>
                </tr>
              ) : (
                subscribers.length > 0 ? (
                  subscribers.map((subscriber, index) => (
                    <tr key={subscriber._id}>
                      <td>{index + 1}</td>
                      <td>{subscriber.email}</td>
                      <td>{new Date(subscriber.subscribedAt).toLocaleDateString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center">No subscribers found.</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </Paper>
      </Container>
    </>
  );
};

export default Subscribers;
