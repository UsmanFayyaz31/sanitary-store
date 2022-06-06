import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import { ORDER_API } from "../../components/services/constants";

const AdminOrders = () => {
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = () => {
    fetch(ORDER_API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setOrders(result.data);
      })
      .catch((error) => {
        console.log("Debugging", error);
      });
  };

  const getDate = (date) => {
    let tempDate = new Date(date);
    return tempDate.toISOString().replace(/T/, " ").replace(/\..+/, "");
  };

  return (
    <>
      <Row>
        <Col className="brand-container">
          <h1 className="bordered-title">ORDERS</h1>
        </Col>
      </Row>

      {loading ? (
        <div className="loader"></div>
      ) : (
        <Row>
          <Col>
            <table className="order-table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Product Price</th>
                  <th>Quantity</th>
                  <th>Total Amount</th>
                  <th>Buyer's Email</th>
                  <th>Buyer's Address</th>
                  <th>Ordered On</th>
                </tr>
              </thead>

              <tbody>
                {orders &&
                  orders.map((order) => {
                    return (
                      <tr key={order._id}>
                        <td>{order.product_name}</td>
                        <td>{"$ " + order.product_price}</td>
                        <td>{order.quantity}</td>
                        <td>{"$ " + order.amount}</td>
                        <td>{order.user_email}</td>
                        <td>{order.user_address}</td>
                        <td>{getDate(order.createdAt)}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </Col>
        </Row>
      )}
    </>
  );
};

export default AdminOrders;
