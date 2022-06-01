import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import { Buffer } from "buffer";
import { useHistory } from "react-router-dom";

import { CART, PRODUCT_API } from "../../components/services/constants";
import ThreeDModal from "../../components/home/ThreeDModal";

const ProductDetail = (props) => {
  const history = useHistory();
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
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const addDataToLocalStorage = (productId) => {
    var exsistingItem = JSON.parse(localStorage.getItem("cart"));

    var isRepeat = false;

    if (exsistingItem && exsistingItem.data.length >= 1) {
      for (var i = 0; i < exsistingItem.data.length; i++) {
        if (exsistingItem.data[i]._id === productId) {
          exsistingItem.data[i].quantity = exsistingItem.data[i].quantity + 1;
          localStorage.setItem("cart", JSON.stringify(exsistingItem));
          window.dispatchEvent(new Event("storage"));
          isRepeat = true;
          break;
        }
      }

      if (!isRepeat) {
        let temp = product[0];
        temp.quantity = 1;
        exsistingItem.data.push(temp);
        localStorage.setItem("cart", JSON.stringify(exsistingItem));
        window.dispatchEvent(new Event("storage"));
      }
    } else {
      let temp = product[0];
      temp.quantity = 1;
      localStorage.setItem("cart", JSON.stringify({ data: [temp] }));
      window.dispatchEvent(new Event("storage"));
    }
  };

  const handleBuyNow = () => {
    addDataToLocalStorage(product[0]._id);

    history.push(CART);
  };

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
                            {product[0].image_display ? (
                              <Col>
                                <img
                                  src={`data:image/${
                                    product[0].img.contentType
                                  };base64,${Buffer.from(
                                    product[0].img.data
                                  ).toString("base64")}`}
                                  alt="product"
                                  className="product-image img-fluid mx-auto d-block tab-img rounded"
                                />
                              </Col>
                            ) : (
                              <Col>
                                <Card>
                                  <CardBody>
                                    <ThreeDModal productId={product[0]._id} />
                                  </CardBody>
                                </Card>
                              </Col>
                            )}

                            <Row className="text-center mt-3 mb-1 justify-content-center">
                              <div className="col-sm-4 d-grid">
                                <Button
                                  type="button"
                                  color="primary"
                                  className="btn-block waves-effect waves-light mt-2 me-1"
                                  onClick={() =>
                                    addDataToLocalStorage(product[0]._id)
                                  }
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
                                  onClick={() => handleBuyNow()}
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
