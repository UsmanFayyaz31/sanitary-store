import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";

import {
  ADMIN_PRODUCTS,
  HOME,
  SIGN_IN_API,
  SIGN_UP_API,
} from "../../components/services/constants";
import LoginBackground from "../../assets/images/login-background.jpg";

const LoginSignup = () => {
  const history = useHistory();

  const {
    register: loginRegister,
    formState: { errors: loginErrors },
    handleSubmit: loginHandleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const {
    register: signUpRegister,
    formState: { errors: signUpErrors },
    handleSubmit: signUpHandleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [signupErrorMessage, setSignupErrorMessage] = useState("");

  const onLoginSubmit = (data) => {
    fetch(SIGN_IN_API, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("authUser", JSON.stringify(data.data[0]));
          window.dispatchEvent(new Event("storage"));

          console.log(data.data[0].role);

          if (data.data[0].role === "user") history.push(HOME);
          else history.push(ADMIN_PRODUCTS);
        } else setLoginErrorMessage("Invalid Credentials.");
      });
  };

  const onSignUpSubmit = (data) => {
    fetch(SIGN_UP_API, {
      method: "POST",
      body: JSON.stringify({
        email: data.sign_up_email,
        password: data.sign_up_password,
        phoneNumber: data.phoneNumber,
        role: "user",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("authUser", JSON.stringify(data.user));
          window.dispatchEvent(new Event("storage"));
          history.push(HOME);
        } else setSignupErrorMessage(data.message);
      });
  };

  return (
    <div
      className="content-container"
      style={{ backgroundImage: `url(${LoginBackground})` }}
    >
      <h1 className="bordered-title login-title">LOGIN / SIGN UP</h1>
      <div className="login-signup-container">
        <Container>
          <Row className="forms-container">
            <Col xs={11} md={5} className="form-container">
              <h3>
                <b>LOGIN</b>
              </h3>

              <form
                className="form"
                onSubmit={loginHandleSubmit(onLoginSubmit)}
              >
                <label>Email:</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email."
                  {...loginRegister("email", {
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "You need to enter valid email address",
                    },
                    required: {
                      value: true,
                      message: "You need to enter your email.",
                    },
                  })}
                />
                {loginErrors.email && (
                  <p className="signup-error">{loginErrors.email.message}</p>
                )}

                <label style={{ marginTop: "18px" }}>Password:</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Enter Your Password."
                  {...loginRegister("password", {
                    minLength: {
                      value: 6,
                      message: "Password should contain at least 6 characters.",
                    },
                    maxLength: {
                      value: 20,
                      message: "Password is too long.",
                    },
                    required: {
                      value: true,
                      message: "Please enter password to continue.",
                    },
                  })}
                />
                {loginErrors.password && (
                  <p className="signup-error">{loginErrors.password.message}</p>
                )}

                {loginErrorMessage !== "" && (
                  <p className="api-error-message">{loginErrorMessage}</p>
                )}

                <div className="button-container">
                  <button type="submit" className="btn btn-primary">
                    LOGIN
                  </button>
                </div>
              </form>
            </Col>

            <Col xs={11} md={5} className="form-container">
              <h3>
                <b>SIGN UP</b>
              </h3>

              <form
                className="form"
                onSubmit={signUpHandleSubmit(onSignUpSubmit)}
              >
                <label>Phone Number:</label>
                <input
                  className="form-control"
                  type="tel"
                  placeholder="Enter You Phone Number."
                  {...signUpRegister("phoneNumber", {
                    pattern: {
                      value:
                        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                      message: "You need to enter valid email phone number",
                    },
                    required: {
                      value: true,
                      message: "You need to enter your phone number.",
                    },
                  })}
                />
                {signUpErrors.phoneNumber && (
                  <p className="signup-error">
                    {signUpErrors.phoneNumber.message}
                  </p>
                )}

                <label style={{ marginTop: "18px" }}>Email:</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Enter Your Email."
                  {...signUpRegister("sign_up_email", {
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "You need to enter valid email address",
                    },
                    required: {
                      value: true,
                      message: "You need to enter your email.",
                    },
                  })}
                />
                {signUpErrors.sign_up_email && (
                  <p className="signup-error">
                    {signUpErrors.sign_up_email.message}
                  </p>
                )}

                <label style={{ marginTop: "18px" }}>Password:</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Enter Your Password."
                  {...signUpRegister("sign_up_password", {
                    minLength: {
                      value: 6,
                      message: "Password should contain at least 6 characters.",
                    },
                    maxLength: {
                      value: 20,
                      message: "Password is too long.",
                    },
                    required: {
                      value: true,
                      message: "Please enter password to continue.",
                    },
                  })}
                />
                {signUpErrors.sign_up_password && (
                  <p className="signup-error">
                    {signUpErrors.sign_up_password.message}
                  </p>
                )}

                {signupErrorMessage !== "" && (
                  <p className="api-error-message">{signupErrorMessage}</p>
                )}

                <div className="button-container">
                  <button type="submit" className="btn btn-primary">
                    REGISTER
                  </button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LoginSignup;
