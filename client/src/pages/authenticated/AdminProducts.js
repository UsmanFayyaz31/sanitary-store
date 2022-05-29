import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Collapse, Row } from "reactstrap";
import { useForm } from "react-hook-form";
import { Buffer } from "buffer";
import CloseIcon from "@material-ui/icons/HighlightOff";
import UpdateIcon from "@material-ui/icons/Edit";

import { PRODUCT_API } from "../../components/services/constants";
import ProductUpdateModal from "../../components/modals/ProductUpdateModal";

const AdminProducts = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });
  const inputFile = useRef(null);

  const [products, setProducts] = useState(null);
  const [addProduct, setAddProduct] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updateModal, setUpdateModal] = useState(false);
  const [index, setIndex] = useState(-1);

  const setUpdateModalValue = (value) => setUpdateModal(value);

  const getProducts = () => {
    setLoading(true);
    fetch(PRODUCT_API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setProducts(result.data);
      })
      .catch((error) => {
        console.log("Debugging", error);
      });
  };

  useEffect(() => {
    if (!updateModal) getProducts();
  }, [updateModal]);

  const onSubmit = (value) => {
    if (inputFile.current.files.length > 0) {
      var data = new FormData();
      data.append("image", inputFile.current.files[0]);
      data.append("product_description", value.product_description);
      data.append("product_name", value.product_name);
      data.append("product_price", value.product_price);

      fetch(PRODUCT_API, {
        method: "POST",
        body: data,
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.success) {
            reset();
            setAddProduct(false);
            getProducts();
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  const deleteProduct = (id) => {
    fetch(PRODUCT_API + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setProducts(products.filter((product) => product._id !== id));
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <>
      <ProductUpdateModal
        updateModal={updateModal}
        setUpdateModalValue={setUpdateModalValue}
        products={products}
        index={index}
      />
      <Row>
        <Col className="brand-container">
          <h1 className="bordered-title">PRODUCTS</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button
            className="add-button"
            onClick={() => setAddProduct(!addProduct)}
          >
            +
          </Button>
          <Collapse isOpen={addProduct}>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <h3>Add Product</h3>

              <label>Product Name:</label>
              <input
                className="form-control"
                type="text"
                name="product_name"
                placeholder="Enter Product Name."
                {...register("product_name", {
                  required: {
                    value: true,
                    message: "You need to enter product name.",
                  },
                })}
              />
              {errors.product_name && (
                <p className="add-product-error">
                  {errors.product_name.message}
                </p>
              )}

              <label style={{ marginTop: "18px" }}>Product Price:</label>
              <input
                className="form-control"
                type="text"
                name="product_price"
                placeholder="Enter Product Price."
                {...register("product_price", {
                  required: {
                    value: true,
                    message: "You need to enter product price.",
                  },
                })}
              />
              {errors.product_price && (
                <p className="add-product-error">
                  {errors.product_price.message}
                </p>
              )}

              <label style={{ marginTop: "18px" }}>Product Description:</label>
              <input
                className="form-control"
                type="text"
                name="product_description"
                placeholder="Enter Product Description."
                {...register("product_description", {
                  required: {
                    value: true,
                    message: "You need to enter product description.",
                  },
                })}
              />
              {errors.product_description && (
                <p className="add-product-error">
                  {errors.product_description.message}
                </p>
              )}

              <label style={{ marginTop: "18px" }}>Product Image</label>
              <br />
              <input ref={inputFile} type="file" />

              <div style={{ textAlign: "center" }}>
                <button
                  style={{ marginBottom: "18px" }}
                  type="submit"
                  className="btn btn-primary"
                >
                  Add
                </button>
              </div>
            </form>
          </Collapse>
        </Col>
      </Row>

      <hr />

      {loading ? (
        <div className="loader"></div>
      ) : (
        <Row>
          <Col>
            <table className="product-table">
              <thead>
                <tr>
                  <th colSpan={2}>Product Image</th>
                  <th>Product Name</th>
                  <th>Product Price</th>
                  <th>Product Description</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {products &&
                  products.map((product, idx) => {
                    return (
                      <tr key={product._id}>
                        <td colSpan={2}>
                          <img
                            src={`data:image/${
                              product.img.contentType
                            };base64,${Buffer.from(product.img.data).toString(
                              "base64"
                            )}`}
                            alt="departments"
                            className="product-images"
                          />
                        </td>
                        <td>{product.product_name}</td>
                        <td>{product.product_price}</td>
                        <td>{product.product_description}</td>
                        <td>
                          <UpdateIcon
                            className="update-icon"
                            onClick={() => {
                              setIndex(idx);
                              setUpdateModal(true);
                            }}
                          />
                        </td>
                        <td>
                          <CloseIcon
                            className="close-icon"
                            onClick={() => deleteProduct(product._id)}
                          />
                        </td>
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

export default AdminProducts;
