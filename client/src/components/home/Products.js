import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import { Buffer } from "buffer";
import { Link, useHistory } from "react-router-dom";

import { PRODUCT_API } from "../services/constants";

const Products = () => {
  const history = useHistory();
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(PRODUCT_API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setProducts(result.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Debugging", error);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          <Row>
            <Col className="brand-container">
              <h1 className="bordered-title">PRODUCTS</h1>
            </Col>
          </Row>

          <Row className="department-container">
            {products &&
              products.map((val) => {
                return (
                  <Col
                    key={val._id}
                    xs={5}
                    md={3}
                    className="department-content"
                  >
                    <Link
                      to="#"
                      onClick={() => history.push(`/product/${val._id}`)}
                    >
                      <div className="department">
                        <img
                          src={`data:image/${
                            val.img.contentType
                          };base64,${Buffer.from(val.img.data).toString(
                            "base64"
                          )}`}
                          alt="departments"
                          className="department-images"
                        />
                        <h3>{val.product_name}</h3>
                        <h6>{"$ " + val.product_price}</h6>
                      </div>
                    </Link>
                  </Col>
                );
              })}
          </Row>
        </>
      )}
    </>
  );
};

export default Products;
