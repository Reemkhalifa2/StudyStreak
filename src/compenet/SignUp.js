import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignIn.css"; // you can use same CSS as SignIn

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
    alert("Sign up successful!");
  };

  return (
    <Container fluid className="login-bg">
      <Row className="justify-content-md-center align-items-center min-vh-100">
        <Col xs={12} md={5} lg={4}>
          <Card className="login-card">
            <Card.Body>
              <h2 className="text-center mb-4 login-title">Create Account 💜</h2>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="login-input"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="login-input"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    className="login-input"
                    required
                  />
                </Form.Group>

                <Button type="submit" className="login-btn w-100 mb-3">
                  Sign Up
                </Button>

                <div className="text-center">
                  <span>Already have an account? </span>
                  <Link to="/" className="text-decoration-none">
                    Sign In
                  </Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
