import React from "react";
import { Container, Row, Col, Input } from "reactstrap";

const LoginSignup = () => {
  return (
    <div className="content-container">
      <h1 className="login-title">LOGIN / SIGN UP</h1>
      <div className="login-signup-container">
        <Container>
          <Row className="forms-container">
            <Col xs={11} md={5} className="form-container">
              <h3>
                <b>LOGIN</b>
              </h3>

              <div className="form">
                <label>Email:</label>
                <Input type="email" placeholder="Enter Your Email." />

                <label style={{ marginTop: "18px" }}>Password:</label>
                <Input type="password" placeholder="Enter Your Password." />
              </div>

              <div className="button-container">
                <button className="btn btn-primary">LOGIN</button>
              </div>
            </Col>

            <Col xs={11} md={5} className="form-container">
              <h3>
                <b>SIGN UP</b>
              </h3>

              <div className="form">
                <label>Phone Number:</label>
                <Input type="tel" placeholder="Enter You Phone Number." />

                <label style={{ marginTop: "18px" }}>Email:</label>
                <Input type="email" placeholder="Enter Your Email." />

                <label style={{ marginTop: "18px" }}>Password:</label>
                <Input type="password" placeholder="Enter Your Password." />
              </div>

              <div className="button-container">
                <button className="btn btn-primary">REGISTER</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LoginSignup;
