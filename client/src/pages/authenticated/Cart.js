import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  InputGroup,
  InputGroupAddon,
  Row,
  Table,
  Button,
  Input,
} from "reactstrap";
import { Buffer } from "buffer";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";

import { HOME, SIGN_IN } from "../../components/services/constants";

const Cart = () => {
  const [productList, setproductList] = useState(null);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState(null);

  const getUser = () => {
    const user = localStorage.getItem("authUser");
    if (user) {
      setUser(JSON.parse(user));
    }

    var products = JSON.parse(localStorage.getItem("cart"));
    if (products) {
      products = products.data;
      if (products.length >= 1) setproductList(products);
    }
  };

  useEffect(() => {
    getUser();
    window.addEventListener("storage", getUser);
  }, []);

  useEffect(() => {
    if (productList) {
      var sum = 0;
      productList.map((val) => {
        sum = sum + val.product_price * val.quantity;
      });

      setTotal(sum);
    }
  }, [productList]);

  const countUP = (id, prev_data_attr) => {
    var updatedProducts = productList.map((p) =>
      p._id === id ? { ...p, quantity: prev_data_attr + 1 } : p
    );
    setproductList(updatedProducts);
    localStorage.setItem("cart", JSON.stringify({ data: updatedProducts }));
    window.dispatchEvent(new Event("storage"));
  };

  const countDown = (id, prev_data_attr) => {
    if (prev_data_attr > 1) {
      var updatedProducts = productList.map((p) =>
        p._id === id ? { ...p, quantity: prev_data_attr - 1 } : p
      );
      setproductList(updatedProducts);
      localStorage.setItem("cart", JSON.stringify({ data: updatedProducts }));
      window.dispatchEvent(new Event("storage"));
    }
  };

  const deleteProduct = (idx) => {
    var temp = productList;
    temp.splice(idx, 1);
    setproductList(temp);
    localStorage.setItem("cart", JSON.stringify({ data: temp }));
    window.dispatchEvent(new Event("storage"));
  };

  const placeOrder = () => {
    // if (user) {
    //   productList.map((val, idx) => {
    //     console.log(
    //       "debugging user cart",
    //       {
    //         product_id: val.id,
    //         user_id: user.id,
    //         quantity: val.quantity,
    //       },
    //       user
    //     );
    //     postRequest(ORDERS, {
    //       order: {
    //         product_id: val.id,
    //         user_id: user.id,
    //         quantity: val.quantity,
    //       },
    //     })
    //       .then((res) => {
    //         console.log("Res", res);
    //         setproductList(null);
    //         localStorage.setItem("cart", null);
    //         window.dispatchEvent(new Event("storage"));
    //       })
    //       .catch((err) => {
    //         console.log("err", err);
    //       });
    //   });
    // }
  };

  return (
    <div className="page-content cart-page">
      <Row>
        {productList && productList.length > 0 ? (
          <>
            <Col md="7">
              {productList.map((product, idx) => (
                <Card className="border shadow-none" key={product._id}>
                  <CardBody>
                    <div className="d-flex border-bottom pb-3">
                      <div className="me-4">
                        {/* <img
                          src={product.product_images[0]}
                          alt=""
                          className="avatar-lg"
                        /> */}
                        <img
                          src={`data:image/${
                            product.img.contentType
                          };base64,${Buffer.from(product.img.data).toString(
                            "base64"
                          )}`}
                          alt="products"
                          className="avatar-lg"
                        />
                      </div>
                      <div className="flex-1 align-self-center overflow-hidden">
                        <div>
                          <h5 className="text-truncate font-size-16">
                            <Link to={"/product/" + product._id}>
                              {product.product_name}
                            </Link>
                          </h5>
                        </div>
                      </div>
                      <div className="ml-2">
                        <ul className="list-inline mb-0 font-size-16">
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              className="text-muted px-2"
                              onClick={() => deleteProduct(idx)}
                            >
                              <DeleteIcon />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div
                        className="row"
                        style={{ textAlign: "center", alignItems: "center" }}
                      >
                        <div className="col-sm-4 col-6">
                          <div className="mt-3">
                            <p className="text-muted mb-2">Price</p>
                            <h5 className="font-size-16">
                              ${product.product_price}
                            </h5>
                          </div>
                        </div>
                        <div className="col-sm-4 col-6">
                          <div className="mt-3">
                            <p className="text-muted mb-2">Quantity</p>
                            <div style={{ width: "110px", margin: "auto" }}>
                              <InputGroup>
                                <InputGroupAddon addonType="append">
                                  <Button
                                    color="primary"
                                    onClick={() => {
                                      countDown(product._id, product.quantity);
                                    }}
                                  >
                                    -
                                  </Button>
                                </InputGroupAddon>
                                <Input
                                  type="text"
                                  value={product.quantity}
                                  name="demo_vertical"
                                  style={{ textAlign: "center" }}
                                  readOnly
                                />
                                <InputGroupAddon addonType="prepend">
                                  <Button
                                    color="primary"
                                    onClick={() => {
                                      countUP(product._id, product.quantity);
                                    }}
                                  >
                                    +
                                  </Button>
                                </InputGroupAddon>
                              </InputGroup>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="mt-3">
                            <p className="text-muted mb-2">Total</p>
                            <h5 className="font-size-16">
                              ${product.quantity * product.product_price}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </Col>

            <Col md="5">
              <div className="mt-5 mt-lg-0">
                <Card className="border shadow-none">
                  <div className="card-header bg-transparent border-bottom py-3 px-4">
                    <h5 className="font-size-16 mb-0">Order Summary</h5>
                  </div>
                  <CardBody className="p-4">
                    <div className="table-responsive">
                      <Table className="table mb-0">
                        <tbody>
                          {productList &&
                            productList.map((val, idx) => {
                              return (
                                <tr key={idx}>
                                  <td>{val.product_name}</td>
                                  <td className="text-end">
                                    {"$ " + val.product_price * val.quantity}
                                  </td>
                                </tr>
                              );
                            })}
                          <tr className="bg-light text-dark">
                            <th>Total :</th>
                            <th className="text-end">
                              <span className="fw-bold">$ {total}</span>
                            </th>
                          </tr>

                          {!user ? (
                            <Row>
                              <Col xs={12}>
                                <h4>Login or SignUp to continue shopping</h4>
                                <Link className="link-to-signin" to={SIGN_IN}>
                                  Click Here to Login
                                </Link>
                              </Col>
                            </Row>
                          ) : (
                            <tr>
                              <td
                                colSpan={2}
                                style={{
                                  borderBottomWidth: "0px",
                                  paddingRight: "0px",
                                  textAlign: "right",
                                }}
                              >
                                <Button onClick={() => placeOrder()}>
                                  Place Order
                                </Button>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </>
        ) : (
          <Col md="12">
            <Card>
              <CardBody>
                <h3>No items In Your Cart</h3>
                <Link to={HOME}>
                  <h2
                    style={{
                      display: "inline-block",
                      marginTop: "15px",
                    }}
                  >
                    Click here to shop more
                  </h2>
                </Link>
              </CardBody>
            </Card>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Cart;
