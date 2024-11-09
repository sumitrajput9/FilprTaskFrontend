import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Paper, Button } from '@mui/material';
import AdminSidebar from './Sidebar';
import axios from 'axios';

const Contacts = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/projects-users/users`)
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => { 
        console.error("There was an error fetching users!", error);
        setLoading(false);
      });
  }, []);


  const handleApprove = (userId, isApprove) => {
    axios.put(`${import.meta.env.VITE_BASE_URL}/projects-users/update/${userId}`, {
      isApprove: !isApprove
    })
      .then(response => {
        setUsers(users.map(user => 
          user._id === userId ? { ...user, isApprove: !isApprove } : user
        ));
      })
      .catch(error => {
        console.error("Error updating approval status", error);
      });
  };

  return (
    <>
      <AdminSidebar />
      <Container className="content-container">
        <Paper className="content-paper">
          <table className="table contacts">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Approval Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6">Loading...</td>
                </tr>
              ) : (
                users?.map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.fullName}</td>
                    <td>{user.email}</td>
                    <td>{user.city}</td>
                    <td>
                      <span style={{ color: user.isApprove ? 'green' : 'red' }}>
                        {user.isApprove ? 'Activated' : 'Pending Approval'}
                      </span>
                    </td>
                    <td>
                      <Button
                        variant="contained"
                        color={user.isApprove ? 'secondary' : 'primary'}
                        onClick={() => handleApprove(user._id, user.isApprove)}
                      >
                        {user.isApprove ? 'Deactivate' : 'Approve'}
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </Paper>
      </Container>
    </>
  );
};

export default Contacts;
