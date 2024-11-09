import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { Paper } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin@123"); 
  const [errormsg, setErrormsg] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/admin/login`, { email, password });
      if(response?.data){
           navigate('/admin-addProject');
      }
    } catch (error) {
      setErrormsg("Invalid credentials, please try again.");
    }
  };

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <Paper elevation={3} className="login p-4" style={{ width: "400px", borderRadius: "8px" }}>
          <h4 className="text-center mb-4">Admin Login</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="mb-3"
                autoComplete="username"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="mb-3"
                autoComplete="current-password"
              />
            </Form.Group>
            {errormsg && <p className="text-danger text-center">{errormsg}</p>}
            <Button type="submit" className="w-100" style={{ backgroundColor: "#083344", padding: "10px" }}>
              LOGIN
            </Button>
          </Form>
        </Paper>
      </Container>
    </>
  );
};

export default AdminLogin;
