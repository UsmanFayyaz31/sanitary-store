import React from "react";
import { Col, Row } from "reactstrap";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <>
      <hr />
      <footer className="footer-container">
        <Row>
          <Col md={1}></Col>
          <Col md={3}>
            <div>
              <h3>About Us</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
            </div>

            <div>
              <div>
                <EmailIcon /> <label>sanitarystore@gmail.com</label>
              </div>

              <div>
                <PhoneIphoneIcon />
                <label>91 00 12 345 67</label>
              </div>

              <div>
                <LocationOnIcon />
                <label>Lahore, Johar Town, Pakistan</label>
              </div>
            </div>
          </Col>
          <Col md={2}></Col>

          <Col md={2}>
            <div>
              <h3>Call Us Now</h3>

              <div>
                <PhoneIphoneIcon />
                <label>91 00 12 345 67</label>
              </div>

              <p>Mon - Fri : 9am - 5pm</p>
            </div>
          </Col>

          <Col md={2}></Col>
          <Col md={2}>
            <h3>Keep in touch</h3>

            <TwitterIcon />
            <FacebookIcon />
            <LinkedInIcon />
          </Col>
        </Row>
      </footer>
    </>
  );
};

export default Footer;
