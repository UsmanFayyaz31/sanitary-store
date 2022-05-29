import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import { Buffer } from "buffer";

import { PRODUCT_API } from "../../components/services/constants";

const ProductDetail = (props) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(PRODUCT_API + props.match.params.id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("result", res);
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <Container fluid>
          {product && (
            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody className="product-detail-card">
                    <Row>
                      <Col xl="12">
                        <div className="product-detail">
                          <Row>
                            <Col>
                              <img
                                src={`data:image/${
                                  product[0].img.contentType
                                };base64,${Buffer.from(
                                  product[0].img.data
                                ).toString("base64")}`}
                                alt="product"
                                className="img-fluid mx-auto d-block tab-img rounded"
                              />
                            </Col>

                            <Row className="text-center mt-3 mb-1 justify-content-center">
                              <div className="col-sm-4 d-grid">
                                <Button
                                  type="button"
                                  color="primary"
                                  className="btn-block waves-effect waves-light mt-2 me-1"
                                  // onClick={() => addDataToLocalStorage()}
                                >
                                  <i className="uil uil-shopping-cart-alt me-2"></i>{" "}
                                  Add to cart
                                </Button>
                              </div>
                              <div className="col-sm-4 d-grid">
                                <Button
                                  type="button"
                                  color="light"
                                  className="btn-block waves-effect mt-2 waves-light buy-now-button"
                                  // onClick={() => handleBuyNow()}
                                >
                                  <i className="uil uil-shopping-basket me-2"></i>
                                  Buy now
                                </Button>
                              </div>
                            </Row>
                          </Row>
                        </div>
                      </Col>

                      <Col xl="12">
                        <div className="mt-4 mt-xl-3 ps-xl-4">
                          <h1 style={{ textAlign: "center" }}>
                            {product[0].product_name}
                          </h1>

                          <h3 className="mt-1" style={{ textAlign: "center" }}>
                            Price: ${product[0].product_price}
                          </h3>

                          <div className="mt-5">
                            <h3>Product Description:</h3>
                            <p style={{ marginLeft: "10px", color: "#757474" }}>
                              {product[0].product_description}
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          )}
        </Container>
      )}
    </div>
  );
};

export default ProductDetail;
