import React from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const department = [
  {
    id: 1,
    name: "Bath Tubs",
    image:
      "https://cdn.trendir.com/wp-content/uploads/old/archives/2015/01/21/retro-modern-free-standing-tub-by-antonio-lupi-1.jpg",
  },
  {
    id: 2,
    name: "Taps",
    image:
      "https://5.imimg.com/data5/BL/LT/KP/SELLER-2473645/bathroom-taps-500x500.jpg",
  },
  {
    id: 3,
    name: "Toilets",
    image:
      "https://www.familyhandyman.com/wp-content/uploads/2019/08/FH11DJA_514_52_002-Gerber-Ultra-Flush-Toilet.jpg",
  },
  {
    id: 4,
    name: "Basins",
    image:
      "https://cdn.webshopapp.com/shops/195731/files/323858689/mini-wash-me-plus-hand-basin-56-cm-left.jpg",
  },
  {
    id: 5,
    name: "Water Geysers",
    image: "https://static.toiimg.com/photo/msid-86162624/86162624.jpg",
  },
];

const Department = () => {
  return (
    <>
      <Row>
        <Col className="brand-container">
          <h1 className="bordered-title">DEPARTMENTS</h1>
        </Col>
      </Row>

      <Row className="department-container">
        {department.map((val) => {
          return (
            <Col key={val.id} xs={5} md={3} className="department-content">
              <Link to="#">
                <div className="department">
                  <img
                    src={val.image}
                    alt="departments"
                    className="department-images"
                  />
                  <h3>{val.name}</h3>
                </div>
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Department;
