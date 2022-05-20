import React from "react";
import { Col, Row } from "reactstrap";
import BrandImage from "../../assets/images/brand.jpg";
import LogoSanitary from "../../assets/images/logo-sanitary.png";
import LogoSanitary2 from "../../assets/images/logo-sanitary-2.png";
import LogoSanitary3 from "../../assets/images/logo-sanitary-3.png";
import LogoSanitary4 from "../../assets/images/logo-sanitary-4.png";

const Brands = () => {
  return (
    <>
      <Row>
        <Col className="brand-container">
          <h1 className="bordered-title">BRAND OF THE MONTH</h1>
        </Col>
      </Row>

      <Row className="brand-of-month-container">
        <Col xs={5} className="brand-image-container">
          <img alt="brand image" src={BrandImage} className="brand-image" />
        </Col>
        <Col xs={7}>
          <h3>Exclusive Ranges</h3>
          <h5>More than 2,000 Designer Products</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras
            ornare arcu dui vivamus arcu. Nibh cras pulvinar mattis nunc sed
            blandit libero. Nec ullamcorper sit amet risus nullam. Turpis massa
            sed elementum tempus egestas sed. Sit amet commodo nulla facilisi
            nullam vehicula ipsum a. Sed elementum tempus egestas sed sed risus
            pretium quam vulputate. In nibh mauris cursus mattis molestie a. Eu
            feugiat pretium nibh ipsum. Et odio pellentesque diam volutpat.
          </p>
          <p>
            Pretium nibh ipsum consequat nisl vel pretium lectus. Morbi non arcu
            risus quis varius quam quisque id diam. Duis ultricies lacus sed
            turpis tincidunt id. Ac feugiat sed lectus vestibulum mattis.
            Dignissim diam quis enim lobortis scelerisque fermentum dui. Vitae
            justo eget magna fermentum iaculis eu non diam phasellus. Tortor
            vitae purus faucibus ornare suspendisse sed. Fames ac turpis egestas
            sed tempus urna et pharetra. Vel pharetra vel turpis nunc eget lorem
            dolor sed viverra.
          </p>
        </Col>
      </Row>

      <Row>
        <Col className="brand-container" style={{ marginTop: "45px" }}>
          <h1 className="bordered-title">POPULAR BRANDS</h1>
        </Col>
      </Row>

      <Row className="brand-logo-container">
        <Col xs={3}>
          <img
            alt="brand logo"
            className="brand-logo"
            src={LogoSanitary}
            style={{ height: "150px" }}
          />
        </Col>

        <Col xs={3}>
          <img
            alt="brand logo"
            className="brand-logo"
            src={LogoSanitary2}
            style={{ height: "150px" }}
          />
        </Col>

        <Col xs={3}>
          <img alt="brand logo" className="brand-logo" src={LogoSanitary4} />
        </Col>

        <Col xs={3}>
          <img
            alt="brand logo"
            className="brand-logo"
            src={LogoSanitary3}
            style={{ height: "150px" }}
          />
        </Col>
      </Row>
    </>
  );
};

export default Brands;
