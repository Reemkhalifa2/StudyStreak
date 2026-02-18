import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './SignIn.css';
import SignUp from './SignUp';
import { BrowserRouter } from 'react-router-dom';
import { Link,  } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login attempted with:', { email, password });
  };

  return (
    <Container fluid className="login-bg">
      <Row className="justify-content-md-center align-items-center min-vh-100">
        <Col xs={12} md={5} lg={4}>
          <Card className="login-card">
            <Card.Body>
              <h2 className="text-center mb-4 login-title">Welcome Back 💜</h2>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="login-input"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-input"
                  />
                </Form.Group>

                <Button type="submit" className="login-btn w-100">
                  Login
                </Button>

                {/* Create Account Link */}
                <div className="text-center">
                  <span>Don't have an account? </span>
                  <Link to="/signup" className="text-decoration-none">
                    Create Account
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

export default SignIn;
